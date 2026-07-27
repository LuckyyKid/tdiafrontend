import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Store,
  Globe,
  Component,
  Rocket,
  Layers,
  Award,
  ShoppingCart,
  TrendingUp,
  Target,
  LineChart,
  type LucideIcon,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SEOHead from '@/components/SEOHead';
import StickyHeader from '@/components/StickyHeader';
import Footer from '@/components/Footer';
import SolutionModal from '@/components/SolutionModal';
import { useSolutionModals } from '@/hooks/useSolutionModals';
import { trackCTAClick } from '@/lib/analytics';

const CALENDLY_URL = 'https://calendly.com/tdiaagency/30min?month=2025-06';

const openCalendly = (label: string, location: string) => {
  trackCTAClick(label, location);
  window.open(CALENDLY_URL, '_blank');
};

const ICON_MAP: Record<string, LucideIcon> = {
  Store,
  Globe,
  Component,
  Rocket,
  Layers,
  Award,
  ShoppingCart,
  TrendingUp,
  Target,
  LineChart,
};

type ProblemItem = {
  icon: string;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const EcommerceProblems: React.FC = () => {
  const { t, ready } = useTranslation();
  const { openModalId, openModal, closeModal, solutionModalsData } = useSolutionModals();

  if (!ready) return null;

  const problems = t('pages.ecommerceProblems.problems', {
    returnObjects: true,
  }) as ProblemItem[];

  const faqs = t('pages.ecommerceProblems.faqItems', {
    returnObjects: true,
  }) as FaqItem[];

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-white relative z-10">
      <SEOHead
        title={t('pages.ecommerceProblems.title')}
        description={t('pages.ecommerceProblems.description')}
      />
      <StickyHeader />

      {/* HERO */}
      <section className="relative w-full halo-top overflow-hidden pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <div className="pill-tdia mx-auto mb-6">
            {t('pages.ecommerceProblems.heroEyebrow')}
          </div>
          <h1 className="tdia-h text-[38px] leading-[1.06] md:text-[56px] lg:text-[64px]">
            <span>{t('pages.ecommerceProblems.heroTitle')} </span>
            <span className="serif">{t('pages.ecommerceProblems.heroTitleHighlight')}</span>
            <span> {t('pages.ecommerceProblems.heroTitleEnd')}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
            {t('pages.ecommerceProblems.heroDescription')}
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => openCalendly('Talk to expert — Ecom Problems', 'hero')}
              className="btn-tdia"
            >
              {t('pages.ecommerceProblems.talkToExpert')}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="relative py-20 md:py-28 halo-center">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="pill-tdia mb-6 mx-auto">
              {t('pages.ecommerceProblems.problemsEyebrow')}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px]">
              <span>{t('pages.ecommerceProblems.problemsHeading')} </span>
              <span className="serif">{t('pages.ecommerceProblems.problemsHeadingSerif')}</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
              {t('pages.ecommerceProblems.problemsDescription')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p, index) => {
              const Icon = ICON_MAP[p.icon] ?? Store;
              const modalId = index + 1;
              return (
                <ProblemCard key={modalId} index={index}>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="tdia-tile flex-shrink-0">
                      <Icon className="h-5 w-5 text-[#9ec8ff]" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1">
                      <div className="micro-label !text-[10px] mb-2">
                        {String(modalId).padStart(2, '0')}
                      </div>
                      <h3 className="tdia-h text-[20px] md:text-[22px] text-white leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[#7c8aa5] leading-relaxed mb-6 flex-grow text-sm md:text-base">
                    {p.description}
                  </p>
                  <button
                    onClick={() => openModal(modalId)}
                    className="mt-auto self-start inline-flex items-center gap-2 text-sm text-[#9ec8ff] hover:text-white transition-colors group"
                  >
                    {t('pages.ecommerceProblems.howToSolve')}
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </ProblemCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="relative py-20 md:py-28 halo-cta">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
          <div className="tdia-card p-10 md:p-14 text-center">
            <h3 className="tdia-h text-[28px] md:text-[38px] mb-4">
              <span>{t('pages.ecommerceProblems.readyToSolve')} </span>
              <span className="serif">{t('pages.ecommerceProblems.readyToSolveSerif')}</span>
            </h3>
            <p className="text-[#7c8aa5] max-w-2xl mx-auto mb-8 leading-relaxed">
              {t('pages.ecommerceProblems.readyToSolveDescription')}
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => openCalendly('Book Discovery Call — Ecom Problems', 'mid_cta')}
                className="btn-tdia"
              >
                {t('pages.ecommerceProblems.bookDiscoveryCall')}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-28 halo-top">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="pill-tdia mb-6 mx-auto">
              {t('pages.ecommerceProblems.faqEyebrow')}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[42px] lg:text-[46px]">
              <span>{t('pages.ecommerceProblems.faqTitle')} </span>
              <span className="serif">{t('pages.ecommerceProblems.faqTitleSerif')}</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="tdia-card px-6 md:px-8 border-none"
              >
                <AccordionTrigger className="text-left tdia-h text-[18px] md:text-[20px] py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#7c8aa5] text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-14">
            <button
              onClick={() => openCalendly('See how we can help — Ecom Problems', 'faq_cta')}
              className="btn-tdia"
            >
              {t('pages.ecommerceProblems.seeHowWeCanHelp')}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {openModalId && solutionModalsData[openModalId] && (
        <SolutionModal
          isOpen={true}
          onClose={closeModal}
          title={solutionModalsData[openModalId].title}
          description={solutionModalsData[openModalId].description}
          steps={solutionModalsData[openModalId].steps}
          modalId={openModalId}
        />
      )}

      <Footer />
    </div>
  );
};

const ProblemCard: React.FC<{
  index: number;
  children: React.ReactNode;
}> = ({ index, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1 + Math.floor(index / 2) * 0.05 }}
      className="tdia-card p-7 md:p-8 flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default EcommerceProblems;
