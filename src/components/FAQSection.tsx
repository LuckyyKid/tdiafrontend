import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useTranslation } from 'react-i18next';
import { trackCTAClick } from '@/lib/analytics';

const FAQSection: React.FC = () => {
  const { t, ready } = useTranslation();

  if (!ready) return null;

  const handleCTAClick = () => {
    trackCTAClick('Book Your Free Strategy Call', 'faq_section');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const faqItems = t('faqSection.items', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="w-full py-24 md:py-32 halo-top relative">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
        <div className="tdia-card p-10 md:p-14 mb-12 text-center halo-cta">
          <div className="micro-label mb-6">{t('faq.microLabel', 'FAQ')}</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] mb-4">
            <span>{t('faq.heroLine1')}</span>
            <br />
            <span className="serif">{t('faq.heroLine2')}</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#7c8aa5] max-w-xl mx-auto leading-relaxed">
            {t('faq.heroSub')}
          </p>
          <div className="flex justify-center mt-8">
            <button onClick={handleCTAClick} className="btn-tdia">
              {t('faq.cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="tdia-card overflow-hidden !border-0 hairline mb-3 px-1"
              >
                <AccordionTrigger className="px-6 py-5 text-white hover:no-underline hover:bg-white/[0.02] transition-colors">
                  <span className="text-left text-base md:text-lg font-normal tdia-h">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-1 text-[#7c8aa5] leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
