import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SEOHead from "../components/SEOHead";
import StickyHeader from "../components/StickyHeader";
import Footer from "../components/Footer";
import { trackCTAClick } from "@/lib/analytics";

const CALENDLY_URL = "https://calendly.com/tdiaagency/30min?month=2025-06";

const openCalendly = (label: string, location: string) => {
  trackCTAClick(label, location);
  window.open(CALENDLY_URL, "_blank");
};

type CaseDef = {
  slug: string;
  images: string[];
};

const cases: CaseDef[] = [
  {
    slug: "klara",
    images: ["/img/Klara.png", "/img/klara2.png"],
  },
  {
    slug: "manara",
    images: ["/img/manara1.jpg", "/img/Manar2.jpg"],
  },
  {
    slug: "safeaccess",
    images: ["/img/SafeHat.png"],
  },
  {
    slug: "terrasso",
    images: ["/img/Terrasso.png"],
  },
  {
    slug: "plombier",
    images: ["/img/PlomberieKZ.png"],
  },
];

const OperationsCaseStudies: React.FC = () => {
  const { t, ready } = useTranslation();
  if (!ready) return null;

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative z-10">
      <SEOHead
        title={t("operationsCaseStudies.seo.title")}
        description={t("operationsCaseStudies.seo.description")}
      />
      <StickyHeader />

      {/* HERO */}
      <section className="relative w-full halo-top overflow-hidden pt-32 md:pt-40 pb-14 md:pb-16">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <Link
            to="/operations"
            className="inline-flex items-center gap-2 text-sm text-[#9ec8ff] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("operationsCaseStudies.backToOperations")}
          </Link>
          <div className="pill-tdia mb-6">
            {t("operationsCaseStudies.hero.eyebrow")}
          </div>
          <h1 className="tdia-h text-[40px] leading-[1.06] sm:text-[52px] md:text-[62px] lg:text-[66px]">
            <span>{t("operationsCaseStudies.hero.headline1")} </span>
            <span className="serif">
              {t("operationsCaseStudies.hero.headline2")}
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#e6ecf7]/80 max-w-2xl leading-relaxed">
            {t("operationsCaseStudies.hero.description")}
          </p>
        </div>
      </section>

      {/* CASE STUDIES — long-form alternating */}
      <section className="relative pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
          <div className="space-y-24 md:space-y-32">
            {cases.map((c, idx) => (
              <CaseStudySection key={c.slug} caseDef={c} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-24 md:py-32 halo-cta">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
          <div className="tdia-card p-10 md:p-14 text-center">
            <h2 className="tdia-h text-[32px] md:text-[42px] lg:text-[46px] mb-4">
              <span>{t("operationsCaseStudies.finalCta.heading")} </span>
              <br className="hidden md:block" />
              <span className="serif">
                {t("operationsCaseStudies.finalCta.headingSerif")}
              </span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#7c8aa5] max-w-2xl mx-auto leading-relaxed">
              {t("operationsCaseStudies.finalCta.description")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() =>
                  openCalendly(
                    "Book Call — Operations Case Studies",
                    "operations_case_studies_final"
                  )
                }
                className="btn-tdia"
              >
                {t("operationsCaseStudies.finalCta.cta")}
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/operations" className="btn-tdia-ghost">
                {t("operationsCaseStudies.finalCta.ghostCta")}
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

const CaseStudySection: React.FC<{ caseDef: CaseDef; index: number }> = ({
  caseDef,
  index,
}) => {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const imageFirst = index % 2 === 0;

  const base = `operationsCaseStudies.cases.${caseDef.slug}`;
  const tagsData = t(`${base}.tags`, { returnObjects: true });
  const tags: string[] = Array.isArray(tagsData) ? tagsData : [];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center"
    >
      {/* Images side */}
      <div
        className={`space-y-4 ${
          imageFirst ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <CaseImage src={caseDef.images[0]} alt={t(`${base}.company`)} primary />
        {caseDef.images[1] && (
          <CaseImage src={caseDef.images[1]} alt={t(`${base}.company`)} />
        )}
      </div>

      {/* Content side */}
      <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
        <div className="micro-label mb-4 text-[#9ec8ff]">
          {t(`${base}.company`)}
        </div>
        <h2 className="tdia-h text-[28px] md:text-[38px] lg:text-[42px] leading-[1.1] mb-6">
          {t(`${base}.title`)}
        </h2>

        <div className="space-y-5 text-[#e6ecf7]/80 text-base md:text-[17px] leading-relaxed">
          <p>
            <span className="text-[#9ec8ff] font-medium">
              {t("operationsCaseStudies.labels.problem")}{" "}
            </span>
            {t(`${base}.storyProblem`)}
          </p>
          <p>
            <span className="text-[#9ec8ff] font-medium">
              {t("operationsCaseStudies.labels.solution")}{" "}
            </span>
            {t(`${base}.storySolution`)}
          </p>
          <p>
            <span className="text-[#9ec8ff] font-medium">
              {t("operationsCaseStudies.labels.impact")}{" "}
            </span>
            {t(`${base}.storyImpact`)}
          </p>
        </div>

        <div className="mt-8 flex items-baseline gap-3 flex-wrap hairline-t pt-6">
          <span className="font-mono-tdia text-[26px] md:text-[32px] text-white leading-none">
            {t(`${base}.metricValue`)}
          </span>
          <span className="text-sm md:text-base text-[#9ec8ff]">
            {t(`${base}.metricLabel`)}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-[#9ec8ff] hairline rounded-full px-3 py-1 bg-white/[0.02]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const CaseImage: React.FC<{
  src: string;
  alt: string;
  primary?: boolean;
}> = ({ src, alt, primary }) => (
  <div
    className={`relative overflow-hidden rounded-xl hairline bg-[#080d17] ${
      primary ? "aspect-[16/10]" : "aspect-[16/9]"
    }`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.04] rounded-xl" />
  </div>
);

export default OperationsCaseStudies;
