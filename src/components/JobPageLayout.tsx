import React from "react";
import StickyHeader from "./StickyHeader";
import Footer from "./Footer";
import JobApplicationForm from "./JobApplicationForm";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Job {
  title: string;
  team: string;
  description1: string;
  description2: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  imageAlt: string;
  formFields: Record<string, unknown>;
}

interface JobPageLayoutProps {
  job: Job;
  image?: string;
}

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
    </div>
    <span className="text-[#7c8aa5] leading-relaxed">{children}</span>
  </li>
);

const JobPageLayout: React.FC<JobPageLayoutProps> = ({ job, image = "/lovable-uploads/78b39c4c-a78c-426e-bbe3-10d4fc7b9491.png" }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-[#060910] text-white">
      <StickyHeader />

      <div className="pt-32 md:pt-40 pb-16 px-4 md:px-8 container mx-auto max-w-6xl halo-top relative">
        <Link
          to="/explore/career"
          className="inline-flex items-center text-[#9ec8ff] hover:text-white transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('jobPages.backToCareers')}
        </Link>

        <div className="mb-12">
          <div className="micro-label mb-4">Open role</div>
          <h1 className="tdia-h text-[36px] md:text-[52px] mb-6">
            <span>{job.title}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#7c8aa5] mb-6 font-mono-tdia uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#9ec8ff]" />
              {t('jobPages.remote')}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-[#9ec8ff]" />
              {t('jobPages.fullTime')}
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-[#9ec8ff]" />
              {job.team}
            </div>
          </div>

          <div className="tdia-card aspect-video rounded-2xl overflow-hidden">
            <img src={image} alt={job.imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="tdia-card p-8">
              <h2 className="tdia-h text-[22px] md:text-[26px] mb-4">
                <span>{t('jobPages.aboutRole')}</span>
              </h2>
              <p className="text-[#7c8aa5] mb-4 leading-relaxed">{job.description1}</p>
              <p className="text-[#7c8aa5] leading-relaxed">{job.description2}</p>
            </div>

            <div className="tdia-card p-8">
              <div className="micro-label mb-3">Scope</div>
              <h3 className="tdia-h text-[20px] md:text-[24px] mb-4">
                <span>{t('jobPages.keyResponsibilities')}</span>
              </h3>
              <ul className="space-y-3">
                {job.responsibilities.map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>
            </div>

            <div className="tdia-card p-8">
              <div className="micro-label mb-3">Profile</div>
              <h3 className="tdia-h text-[20px] md:text-[24px] mb-4">
                <span>{t('jobPages.qualifications')}</span>
              </h3>
              <ul className="space-y-3">
                {job.qualifications.map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>
            </div>

            <div className="tdia-card p-8">
              <div className="micro-label mb-3">Benefits</div>
              <h3 className="tdia-h text-[20px] md:text-[24px] mb-4">
                <span>{t('jobPages.whatWeOffer')}</span>
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((item, i) => <Bullet key={i}>{item}</Bullet>)}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <JobApplicationForm position={job.title} fields={job.formFields} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobPageLayout;
