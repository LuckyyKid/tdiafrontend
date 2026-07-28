import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Check,
  RefreshCw,
  Wrench,
  Radio,
  Database,
  ScanEye,
  Bot,
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
import { trackCTAClick } from "@/lib/analytics";

const CALENDLY_URL = "https://calendly.com/tdiaagency/30min?month=2025-06";

const openCalendly = (label: string, location: string) => {
  trackCTAClick(label, location);
  window.open(CALENDLY_URL, "_blank");
};

const BuildIcons = [RefreshCw, Wrench, Radio, Database, ScanEye, Bot];

const Operations: React.FC = () => {
  const { t, ready } = useTranslation();
  if (!ready) return null;

  const buildItems = t("operationsPage.build.items", {
    returnObjects: true,
  }) as Array<{ problem: string; solution: string }>;
  const buildLabels = t("operationsPage.build.labels", {
    returnObjects: true,
  }) as { problem: string; solution: string };

  const processSteps = t("operationsPage.process.steps", {
    returnObjects: true,
  }) as Array<{ n: string; title: string; description: string }>;

  const impactItems = t("operationsPage.impact.items", {
    returnObjects: true,
  }) as string[];

  const faqItems = t("operationsPage.faq.items", {
    returnObjects: true,
  }) as Array<{ question: string; answer: string }>;

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative z-10">
      <SEOHead
        title={t("operationsPage.seo.title")}
        description={t("operationsPage.seo.description")}
      />
      <StickyHeader />

      {/* HERO */}
      <section className="relative w-full halo-top overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-[820px]">
            <div className="pill-tdia mb-6">
              {t("operationsPage.hero.eyebrow")}
            </div>
            <h1 className="tdia-h text-[40px] leading-[1.06] sm:text-[52px] md:text-[62px] lg:text-[66px]">
              {t("operationsPage.hero.headline1")}{" "}
              <span className="serif">
                {t("operationsPage.hero.headline2")}
              </span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#e6ecf7]/80 max-w-2xl leading-relaxed">
              {t("operationsPage.hero.description")}
            </p>
            <div className="mt-8">
              <button
                onClick={() =>
                  openCalendly("Book Diagnostic — Operations", "hero")
                }
                className="btn-tdia"
              >
                {t("operationsPage.hero.cta")}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BUILD */}
      <section className="relative py-24 md:py-32 halo-top">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="pill-tdia mb-6 mx-auto">
              {t("operationsPage.build.eyebrow")}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px]">
              {t("operationsPage.build.heading")}
            </h2>
            <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
              {t("operationsPage.build.subheading")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {buildItems.map((item, index) => {
              const Icon = BuildIcons[index] ?? RefreshCw;
              return (
                <AnimatedCard key={index} index={index}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="tdia-tile flex-shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.6} />
                    </div>
                    <div>
                      <div className="micro-label mb-2">
                        {buildLabels.problem}
                      </div>
                      <p className="text-[#e6ecf7]/90 text-base md:text-lg leading-snug">
                        {item.problem}
                      </p>
                    </div>
                  </div>
                  <div className="pt-5 hairline-t">
                    <div className="micro-label mb-2">
                      {buildLabels.solution}
                    </div>
                    <p className="text-[#e6ecf7]/85 text-sm md:text-base leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/operations/case-studies"
              onClick={() =>
                trackCTAClick("View Operations Case Studies", "operations_build")
              }
              className="btn-tdia"
            >
              {t("operationsPage.caseStudiesCta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative py-24 md:py-32 halo-center">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="pill-tdia mb-6 mx-auto">
              {t("operationsPage.process.eyebrow")}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px]">
              {t("operationsPage.process.heading")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

      {/* IMPACT */}
      <section className="relative py-24 md:py-32 halo-top">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="pill-tdia mb-6">
              {t("operationsPage.impact.eyebrow")}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px]">
              <span>{t("operationsPage.impact.heading")} </span>
              <span className="serif">
                {t("operationsPage.impact.headingSerif")}
              </span>
            </h2>

            <ul className="mt-10 space-y-4">
              {impactItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#e6ecf7]/85 text-base md:text-lg"
                >
                  <Check
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#4d9fff]"
                    strokeWidth={2}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32 halo-center">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
          <div className="text-center mb-10">
            <div className="pill-tdia mb-6 mx-auto">
              {t("operationsPage.faq.eyebrow")}
            </div>
            <h2 className="tdia-h text-[32px] md:text-[42px] lg:text-[46px]">
              {t("operationsPage.faq.heading")}
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

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 halo-cta">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
          <div className="tdia-card p-10 md:p-14 text-center">
            <h2 className="tdia-h text-[32px] md:text-[42px] lg:text-[46px] mb-4">
              <span>{t("operationsPage.finalCta.heading")} </span>
              <br className="hidden md:block" />
              <span className="serif">
                {t("operationsPage.finalCta.headingSerif")}
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#7c8aa5] max-w-2xl mx-auto leading-relaxed">
              {t("operationsPage.finalCta.description")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() =>
                  openCalendly(
                    "Book Call — Operations Final",
                    "operations_final_cta"
                  )
                }
                className="btn-tdia"
              >
                {t("operationsPage.finalCta.cta")}
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/acquisition" className="btn-tdia-ghost">
                {t("twoDoors.acquisition.title")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
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

export default Operations;
