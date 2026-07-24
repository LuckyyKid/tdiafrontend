import React from "react";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Career = () => {
  const { t } = useTranslation();

  const positions = t('careerPage.openPositions.positions', { returnObjects: true });
  const positionsArray = Array.isArray(positions) ? positions as Array<{
    title: string;
    department: string;
    type: string;
    location: string;
    description: string;
  }> : [];

  const positionLinks = [
    "/explore/career/senior-media-buyer",
    "/explore/career/data-analyst",
    "/explore/career/creative-designer",
  ];

  const faqItemsRaw = t('careerPage.faq.items', { returnObjects: true });
  const faqItems = Array.isArray(faqItemsRaw)
    ? (faqItemsRaw as Array<{ question: string; answer: string }>)
    : [];

  return (
    <div className="min-h-screen flex flex-col text-white relative z-10">
      <StickyHeader />

      <div className="pt-32 md:pt-40 pb-16 px-4 md:px-8 container mx-auto relative halo-top">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="micro-label mb-6">Careers</div>
          <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
            <span>{t('careerPage.title')} </span>
            <span className="serif">{t('careerPage.titleHighlight')}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            {t('careerPage.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="tdia-card aspect-video rounded-2xl overflow-hidden">
            <img
              src="/lovable-uploads/78b39c4c-a78c-426e-bbe3-10d4fc7b9491.png"
              alt={t('careerPage.teamImageAlt')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 md:px-8 pb-12">
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="tdia-h text-[28px] md:text-[40px]">
              <span>{t('careerPage.whyWorkWithUs.title')}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['growth', 'culture', 'projects'].map((key) => (
              <div key={key} className="tdia-card p-8">
                <h3 className="tdia-h text-[22px] text-white mb-4">
                  {t(`careerPage.whyWorkWithUs.${key}.title`)}
                </h3>
                <p className="text-[#7c8aa5] leading-relaxed">
                  {t(`careerPage.whyWorkWithUs.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="tdia-h text-[28px] md:text-[40px]">
              <span>{t('careerPage.openPositions.title')}</span>
            </h2>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {positionsArray.map((position, index) => (
              <div key={index} className="tdia-card p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="tdia-h text-[22px] text-white mb-2">{position.title}</h3>
                    <p className="text-[#7c8aa5] mb-4 leading-relaxed">{position.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-[#7c8aa5] font-mono-tdia uppercase tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-[#9ec8ff]" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#9ec8ff]" />
                        {position.type}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#9ec8ff]" />
                        {position.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link to={positionLinks[index]}>
                      <button className="btn-tdia-ghost text-sm">
                        {t('careerPage.openPositions.viewDetails')}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <div className="tdia-card p-10 md:p-14 text-center halo-cta">
            <h3 className="tdia-h text-[26px] md:text-[36px] mb-4">
              <span>{t('careerPage.generalApplication.title')}</span>
            </h3>
            <p className="text-[#7c8aa5] mb-8 max-w-2xl mx-auto">
              {t('careerPage.generalApplication.description')}
            </p>
            <div className="flex justify-center">
              <button className="btn-tdia-ghost">
                {t('careerPage.generalApplication.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <div className="micro-label mb-4">FAQ</div>
            <h2 className="tdia-h text-[28px] md:text-[40px]">
              <span>{t('careerPage.faq.title')}</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto tdia-card p-2 md:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`} className="border-b border-[color:var(--tdia-hairline)] last:border-b-0">
                  <AccordionTrigger className="text-white text-left py-5 px-4 md:px-6 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#7c8aa5] pb-5 px-4 md:px-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
