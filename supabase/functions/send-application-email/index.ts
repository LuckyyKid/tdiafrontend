
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  position: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  experienceYears?: string;
  cvFile?: File;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    const formData = await req.formData();
    const applicationData: ApplicationData = {
      position: formData.get("position") as string,
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || undefined,
      portfolioUrl: formData.get("portfolioUrl") as string || undefined,
      linkedinUrl: formData.get("linkedinUrl") as string || undefined,
      experienceYears: formData.get("experienceYears") as string || undefined,
      cvFile: formData.get("cv") as File || undefined,
    };

    let cvFileName = null;
    let cvFilePath = null;
    let cvFileBuffer = null;

    // Upload CV if provided
    if (applicationData.cvFile && applicationData.cvFile.size > 0) {
      const fileName = `${Date.now()}-${applicationData.firstName}-${applicationData.lastName}-${applicationData.cvFile.name}`;
      const fileBuffer = await applicationData.cvFile.arrayBuffer();
      
      const { data: uploadData, error: uploadError } = await supabaseClient.storage
        .from("cvs")
        .upload(fileName, fileBuffer, {
          contentType: applicationData.cvFile.type,
        });

      if (uploadError) {
        console.error("Error uploading CV:", uploadError);
        throw new Error("Failed to upload CV");
      }

      cvFileName = applicationData.cvFile.name;
      cvFilePath = uploadData.path;
      cvFileBuffer = fileBuffer;
    }

    // Save application to database
    const { data: dbData, error: dbError } = await supabaseClient
      .from("job_applications")
      .insert({
        position: applicationData.position,
        first_name: applicationData.firstName,
        last_name: applicationData.lastName,
        email: applicationData.email,
        phone: applicationData.phone,
        portfolio_url: applicationData.portfolioUrl,
        linkedin_url: applicationData.linkedinUrl,
        experience_years: applicationData.experienceYears,
        cv_file_name: cvFileName,
        cv_file_path: cvFilePath,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Error saving application:", dbError);
      throw new Error("Failed to save application");
    }

    // Prepare email content
    const emailSubject = `CV pour TDIA - ${applicationData.firstName} ${applicationData.lastName}`;
    
    const emailHtml = `
      <h2>Nouvelle candidature reçue</h2>
      
      <h3>Informations du candidat:</h3>
      <ul>
        <li><strong>Poste:</strong> ${applicationData.position}</li>
        <li><strong>Nom:</strong> ${applicationData.firstName} ${applicationData.lastName}</li>
        <li><strong>Email:</strong> ${applicationData.email}</li>
        ${applicationData.phone ? `<li><strong>Téléphone:</strong> ${applicationData.phone}</li>` : ''}
        ${applicationData.portfolioUrl ? `<li><strong>Portfolio:</strong> <a href="${applicationData.portfolioUrl}">${applicationData.portfolioUrl}</a></li>` : ''}
        ${applicationData.linkedinUrl ? `<li><strong>LinkedIn:</strong> <a href="${applicationData.linkedinUrl}">${applicationData.linkedinUrl}</a></li>` : ''}
        ${applicationData.experienceYears ? `<li><strong>Années d'expérience:</strong> ${applicationData.experienceYears}</li>` : ''}
      </ul>
      
      <p><strong>Date de candidature:</strong> ${new Date().toLocaleString('fr-CA')}</p>
      
      ${cvFileName ? `<p><strong>CV joint:</strong> ${cvFileName}</p>` : '<p>Aucun CV joint</p>'}
    `;

    // Prepare email attachments
    const attachments = [];
    if (cvFileBuffer && cvFileName) {
      attachments.push({
        filename: cvFileName,
        content: Buffer.from(cvFileBuffer),
      });
    }

    // Send email to all recipients
    const recipients = [
      "mikola@tdiaconnect.ca",
      "boatm.pro@gmail.com", 
      "mikola.business@gmail.com"
    ];

    const emailResponse = await resend.emails.send({
      from: "TDIA Applications <onboarding@resend.dev>",
      to: recipients,
      subject: emailSubject,
      html: emailHtml,
      attachments: attachments,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Application submitted successfully",
        applicationId: dbData.id 
      }), 
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error: any) {
    console.error("Error in send-application-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
