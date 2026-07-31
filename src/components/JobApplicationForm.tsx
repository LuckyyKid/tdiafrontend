import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";
import { useJobApplication } from "@/hooks/useJobApplication";

interface JobApplicationFormProps {
  position: string;
}

const JobApplicationForm = ({ position }: JobApplicationFormProps) => {
  const { t } = useTranslation();
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
      const fileInput = document.getElementById("cv") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    }
  };

  return (
    <div className="tdia-card p-6 md:p-8">
      <div className="micro-label mb-2">{t('jobPages.form.microLabel')}</div>
      <h3 className="tdia-h text-[20px] text-white mb-6">
        <span>{t('jobPages.form.title')}</span>
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="firstName">{t('jobPages.form.firstName')} *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]"
            required
          />
        </div>
        <div>
          <Label htmlFor="lastName">{t('jobPages.form.lastName')} *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">{t('jobPages.form.email')} *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">{t('jobPages.form.phone')}</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder={t('jobPages.form.phonePlaceholder')}
            className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]"
          />
        </div>
        <div>
          <Label htmlFor="portfolio">{t('jobPages.form.portfolioLabel')}</Label>
          <Input
            id="portfolio"
            value={formData.portfolioUrl}
            onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
            placeholder={t('jobPages.form.portfolioPlaceholder')}
            className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]"
          />
        </div>
        <div>
          <Label htmlFor="linkedin">{t('jobPages.form.linkedinLabel')}</Label>
          <Input
            id="linkedin"
            value={formData.linkedinUrl}
            onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
            placeholder={t('jobPages.form.linkedinPlaceholder')}
            className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]"
          />
        </div>
        <div>
          <Label htmlFor="experience">{t('jobPages.form.experienceLabel')}</Label>
          <Input
            id="experience"
            value={formData.experienceYears}
            onChange={(e) => handleInputChange("experienceYears", e.target.value)}
            placeholder={t('jobPages.form.experiencePlaceholder')}
            className="bg-white/[0.02] hairline text-white placeholder:text-[#7c8aa5]"
          />
        </div>
        <div>
          <Label htmlFor="cv">{t('jobPages.form.cvLabel')}</Label>
          <Input
            id="cv"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
            className="bg-white/[0.02] hairline text-white file:bg-[#4d9fff]/15 file:text-[#9ec8ff] file:border-0 file:rounded-md file:px-3 file:py-1 file:mr-3"
          />
          <p className="text-xs text-[#7c8aa5] mt-1">{t('jobPages.form.cvHelp')}</p>
        </div>
        <button
          type="submit"
          className="btn-tdia w-full justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('jobPages.form.submitting') : t('jobPages.form.submit')}
        </button>
        <p className="text-xs text-[#7c8aa5]">
          {t('jobPages.form.disclaimer')}
        </p>
      </form>
    </div>
  );
};

export default JobApplicationForm;
