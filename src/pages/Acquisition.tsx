import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Target,
  MapPin,
  Users,
  X,
  Check,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEOHead from "../components/SEOHead";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";
import ROICalculatorSection from "../components/ROICalculatorSection";
import TDIAGuaranteeSection from "../components/TDIAGuaranteeSection";
import TestimonialsSection from "../components/TestimonialsSection";
import UGCGallerySection from "../components/UGCGallerySection";
import { trackCTAClick } from "@/lib/analytics";

const CALENDLY_URL = "https://calendly.com/tdiaagency/30min?month=2025-06";

const openCalendly = (label: string, location: string) => {
  trackCTAClick(label, location);
  window.open(CALENDLY_URL, "_blank");
};

const AudienceIcons = [Target, MapPin, Users];

const Acquisition: React.FC = () => {
  const { t, ready } = useTranslation();
  if (!ready) return null;

  const stats = t("acquisitionPage.hero.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;

  const audienceCards = t("acquisitionPage.audiences.cards", {
    returnObjects: true,
  }) as Array<{
    tag: string;
    title: string;
    problem: string;
    action: string;
    outcome: string;
  }>;
  const audienceLabels = t("acquisitionPage.audiences.labels", {
    returnObjects: true,
  }) as { problem: string; action: string; outcome: string };

  const differenceRows = t("acquisitionPage.difference.rows", {
    returnObjects: true,
  }) as Array<{ them: string; us: string }>;

  const processSteps = t("acquisitionPage.process.steps", {
    returnObjects: true,
  }) as Array<{ n: string; title: string; description: string }>;

  const faqItems = t("acquisitionPage.faq.items", {
    returnObjects: true,
  }) as Array<{ question: string; answer: string }>;

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative z-10">
      <SEOHead
        title={t("acquisitionPage.seo.title")}
        description={t("acquisitionPage.seo.description")}
      />
      <StickyHeader />

      {/* HERO */}
      <section className="relative w-full halo-top overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-[820px]">
            <div className="pill-tdia mb-6">
              {t("acquisitionPage.hero.eyebrow")}
            </div>
            <h1 className="tdia-h text-[40px] leading-[1.06] sm:text-[52px] md:text-[62px] lg:text-[66px]">
              {t("acquisitionPage.hero.headline1")}{" "}
              <span className="serif">
                {t("acquisitionPage.hero.headline2")}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#e6ecf7]/80 max-w-2xl leading-relaxed">
              {t("acquisitionPage.hero.description")}
            </p>
            <div className="mt-8">
              <button
                onClick={() =>
                  openCalendly("Book Diagnostic — Acquisition", "hero")
                }
                className="btn-tdia"
              >
                {t("acquisitionPage.hero.cta")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Stats row (moved from homepage hero) */}
            <div className="mt-14 grid grid-cols-3 max-w-lg">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`px-4 ${i > 0 ? "hairline-v" : ""}`}
                >
                  <div className="font-mono-tdia text-[26px] md:text-[32px] text-white leading-none">
                    {stat.value}
                  </div>
                  <div className="micro-label mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="relative py-24 md:py-32 halo-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="pill-tdia mb-6 mx-auto">
              {t("acquisitionPage.audiences.eyebrow")}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px]">
              {t("acquisitionPage.audiences.heading")}
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
              {t("acquisitionPage.audiences.subheading")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {audienceCards.map((card, index) => {
              const Icon = AudienceIcons[index] ?? Target;
              return (
                <AnimatedCard key={index} index={index}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="tdia-tile">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <span className="micro-label !text-[10px]">{card.tag}</span>
                  </div>
                  <h3 className="tdia-h text-[24px] md:text-[26px] mb-6">
                    {card.title}
                  </h3>
                  <LabeledBlock label={audienceLabels.problem}>
                    {card.problem}
                  </LabeledBlock>
                  <LabeledBlock label={audienceLabels.action}>
                    {card.action}
                  </LabeledBlock>
                  <LabeledBlock label={audienceLabels.outcome} last>
                    {card.outcome}
                  </LabeledBlock>
                  <Link
                    to="/case-studies"
                    onClick={() =>
                      trackCTAClick(
                        `Audience card CTA — ${card.tag}`,
                        "acquisition_audiences"
                      )
                    }
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[#9ec8ff] hover:text-white transition-colors group"
                  >
                    {t("acquisitionPage.audiences.cardCta")}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENCE — us vs them */}
      <section className="relative py-24 md:py-32 halo-top">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-14">
              <div className="pill-tdia mb-6">
                {t("acquisitionPage.difference.eyebrow")}
              </div>
              <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px]">
                <span>{t("acquisitionPage.difference.heading")} </span>
                <span className="serif">
                  {t("acquisitionPage.difference.headingSerif")}
                </span>
              </h2>
            </div>

            <div className="hidden md:grid grid-cols-2 gap-4 mb-5 items-end">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg border border-red-500/25 bg-red-500/[0.08] flex items-center justify-center">
                  <X className="w-4 h-4 text-red-400/90" strokeWidth={2.4} />
                </div>
                <span className="tdia-h text-[15px] text-red-400/90 uppercase tracking-wider">
                  {t("acquisitionPage.difference.columnThem")}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg border border-[#4d9fff]/40 bg-[#4d9fff]/15 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#9ec8ff]" strokeWidth={2.4} />
                </div>
                <span className="tdia-h text-[15px] text-[#9ec8ff] uppercase tracking-wider">
                  {t("acquisitionPage.difference.columnUs")}
                </span>
              </div>
            </div>

            <div className="space-y-6 md:space-y-3">
              {differenceRows.map((row, i) => (
                <ComparisonRow
                  key={i}
                  index={i}
                  them={row.them}
                  us={row.us}
                  themLabel={t("acquisitionPage.difference.columnThem")}
                  usLabel={t("acquisitionPage.difference.columnUs")}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — 6 steps */}
      <section className="relative py-24 md:py-32 halo-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="pill-tdia mb-6 mx-auto">
              {t("acquisitionPage.process.eyebrow")}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px]">
              {t("acquisitionPage.process.heading")}
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
              {t("acquisitionPage.process.subheading")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {processSteps.map((step, i) => (
              <AnimatedCard key={i} index={i} className="!p-7">
                <div className="font-mono-tdia text-[#4d9fff] text-sm mb-4">
                  {step.n}
                </div>
                <h3 className="tdia-h text-[20px] md:text-[22px] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#7c8aa5] text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* UGC GALLERY — our creatives (moved from home) */}
      <UGCGallerySection />

      {/* TESTIMONIALS (replaces case studies) */}
      <TestimonialsSection />

      {/* ROI CALCULATOR (moved from home) */}
      <ROICalculatorSection />

      {/* GUARANTEE (moved from home) */}
      <TDIAGuaranteeSection />

      {/* FAQ */}
      <section className="relative py-24 md:py-32 halo-top">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="pill-tdia mb-6 mx-auto">
              {t("acquisitionPage.faq.eyebrow")}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[42px] lg:text-[46px]">
              {t("acquisitionPage.faq.heading")}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="tdia-card px-6 md:px-8 border-none"
              >
                <AccordionTrigger className="text-left tdia-h text-[18px] md:text-[20px] py-6 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#7c8aa5] text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const AnimatedCard: React.FC<{
  index: number;
  className?: string;
  children: React.ReactNode;
}> = ({ index, className = "", children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`tdia-card p-7 md:p-8 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
};

const LabeledBlock: React.FC<{
  label: string;
  last?: boolean;
  children: React.ReactNode;
}> = ({ label, children, last }) => (
  <div className={last ? "" : "mb-5"}>
    <div className="micro-label mb-2">{label}</div>
    <p className="text-[#e6ecf7]/85 text-sm md:text-base leading-relaxed">
      {children}
    </p>
  </div>
);

const ComparisonRow: React.FC<{
  index: number;
  them: string;
  us: string;
  themLabel: string;
  usLabel: string;
}> = ({ index, them, us, themLabel, usLabel }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      {/* THEM card */}
      <div className="relative rounded-2xl p-5 md:p-6 border border-dashed border-red-500/20 bg-red-500/[0.03]">
        <div className="md:hidden flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-md border border-red-500/25 bg-red-500/[0.08] flex items-center justify-center">
            <X className="w-3 h-3 text-red-400/90" strokeWidth={2.4} />
          </div>
          <span className="font-mono-tdia text-[10px] tracking-widest text-red-400/90 uppercase">
            {themLabel}
          </span>
        </div>
        <div className="flex items-start gap-3">
          <div className="hidden md:flex mt-0.5 flex-shrink-0 w-7 h-7 rounded-md border border-red-500/25 bg-red-500/[0.08] items-center justify-center">
            <X className="w-3.5 h-3.5 text-red-400/90" strokeWidth={2.4} />
          </div>
          <p className="text-[#7c8aa5] text-sm md:text-[15px] leading-relaxed line-through decoration-red-500/40 decoration-[1.5px]">
            {them}
          </p>
        </div>
      </div>

      {/* Mobile connector */}
      <div className="md:hidden flex items-center justify-center -my-2">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#4d9fff]/30 bg-[#4d9fff]/10">
          <ArrowRight className="w-3 h-3 text-[#9ec8ff] rotate-90" />
          <span className="font-mono-tdia text-[10px] tracking-widest text-[#9ec8ff]">TDIA</span>
        </div>
      </div>

      {/* US card */}
      <div className="relative rounded-2xl p-5 md:p-6 border border-[#4d9fff]/40 bg-gradient-to-br from-[#4d9fff]/[0.10] to-[#4d9fff]/[0.03] shadow-[0_0_40px_-12px_rgba(77,159,255,0.35)]">
        <div className="md:hidden flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-md border border-[#4d9fff]/40 bg-[#4d9fff]/15 flex items-center justify-center">
            <Check className="w-3 h-3 text-[#9ec8ff]" strokeWidth={2.4} />
          </div>
          <span className="font-mono-tdia text-[10px] tracking-widest text-[#9ec8ff] uppercase">
            {usLabel}
          </span>
        </div>
        <div className="flex items-start gap-3">
          <div className="hidden md:flex mt-0.5 flex-shrink-0 w-7 h-7 rounded-md border border-[#4d9fff]/40 bg-[#4d9fff]/15 items-center justify-center">
            <Check className="w-3.5 h-3.5 text-[#9ec8ff]" strokeWidth={2.4} />
          </div>
          <p className="text-white text-sm md:text-[15px] leading-relaxed font-medium">
            {us}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Acquisition;
