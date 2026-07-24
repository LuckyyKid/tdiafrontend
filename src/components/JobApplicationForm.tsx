
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useJobApplication } from "@/hooks/useJobApplication";

interface JobApplicationFormProps {
  position: string;
  fields: {
    portfolioLabel?: string;
    portfolioPlaceholder?: string;
    linkedinLabel?: string;
    linkedinPlaceholder?: string;
  };
}

const JobApplicationForm = ({ position, fields }: JobApplicationFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    linkedinUrl: "",
    experienceYears: "",
    cvFile: null as File | null,
  });

  const { submitApplication, isSubmitting } = useJobApplication();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (file: File | null) => {
    setFormData(prev => ({ ...prev, cvFile: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      return;
    }

    const result = await submitApplication({
      position,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone || undefined,
      portfolioUrl: formData.portfolioUrl || undefined,
      linkedinUrl: formData.linkedinUrl || undefined,
      experienceYears: formData.experienceYears || undefined,
      cvFile: formData.cvFile || undefined,
    });

    if (result.success) {
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        portfolioUrl: "",
        linkedinUrl: "",
        experienceYears: "",
        cvFile: null,
      });
      
      // Reset file input
      const fileInput = document.getElementById("cv") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    }
  };

  return (
    <div className="tdia-card p-6 md:p-8">
      <div className="micro-label mb-2">Apply</div>
      <h3 className="tdia-h text-[20px] text-white mb-6">
        <span>Apply for this position</span>
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="firstName">First Name *</Label>
            <Input 
              id="firstName" 
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              placeholder="John" 
              className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]" 
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name *</Label>
            <Input 
              id="lastName" 
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              placeholder="Doe" 
              className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]" 
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@example.com" 
              className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]" 
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone" 
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="+1 (555) 123-4567" 
              className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]" 
            />
          </div>
          <div>
            <Label htmlFor="portfolio">{fields.portfolioLabel || "Portfolio/Website"}</Label>
            <Input 
              id="portfolio" 
              value={formData.portfolioUrl}
              onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
              placeholder={fields.portfolioPlaceholder || "https://yourportfolio.com"} 
              className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]" 
            />
          </div>
          <div>
            <Label htmlFor="linkedin">{fields.linkedinLabel || "LinkedIn Profile"}</Label>
            <Input 
              id="linkedin" 
              value={formData.linkedinUrl}
              onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
              placeholder={fields.linkedinPlaceholder || "linkedin.com/in/johndoe"} 
              className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]" 
            />
          </div>
          <div>
            <Label htmlFor="experience">Years of Experience</Label>
            <Input 
              id="experience" 
              value={formData.experienceYears}
              onChange={(e) => handleInputChange("experienceYears", e.target.value)}
              placeholder="5" 
              className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]" 
            />
          </div>
          <div>
            <Label htmlFor="cv">Upload CV/Resume</Label>
            <Input
              id="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
              className="bg-white/[0.02] hairline text-white file:bg-[#4d9fff]/15 file:text-[#9ec8ff] file:border-0 file:rounded-md file:px-3 file:py-1 file:mr-3"
            />
            <p className="text-xs text-[#7c8aa5] mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
          </div>
          <button
            type="submit"
            className="btn-tdia w-full justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
          <p className="text-xs text-[#7c8aa5]">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      </div>
  );
};

export default JobApplicationForm;
