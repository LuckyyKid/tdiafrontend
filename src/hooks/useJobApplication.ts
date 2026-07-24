
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface ApplicationFormData {
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

export const useJobApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitApplication = async (formData: ApplicationFormData) => {
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      
      // Add all form fields to FormData
      formDataToSend.append("position", formData.position);
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      
      if (formData.phone) formDataToSend.append("phone", formData.phone);
      if (formData.portfolioUrl) formDataToSend.append("portfolioUrl", formData.portfolioUrl);
      if (formData.linkedinUrl) formDataToSend.append("linkedinUrl", formData.linkedinUrl);
      if (formData.experienceYears) formDataToSend.append("experienceYears", formData.experienceYears);
      if (formData.cvFile) formDataToSend.append("cv", formData.cvFile);

      const { data, error } = await supabase.functions.invoke("send-application-email", {
        body: formDataToSend,
      });

      if (error) {
        throw error;
      }

      if (!data.success) {
        throw new Error(data.error || "Failed to submit application");
      }

      toast({
        title: "Candidature envoyée!",
        description: "Votre candidature a été soumise avec succès. Nous vous contacterons bientôt.",
      });

      return { success: true, applicationId: data.applicationId };
    } catch (error: any) {
      console.error("Error submitting application:", error);
      
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre candidature. Veuillez réessayer.",
        variant: "destructive",
      });
      
      return { success: false, error: error.message };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitApplication,
    isSubmitting,
  };
};
