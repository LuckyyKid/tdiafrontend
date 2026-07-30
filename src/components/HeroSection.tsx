import React, { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/analytics";

type ResultRow = {
  metric: string;
  label: string;
  client: string;
  sector: string;
  logoKey: string;
};

const CLIENT_LOGOS: Record<string, string> = {
  gococonut: "/lovable-uploads/ca87324b-abc5-494c-939c-4b5f93d7f252.png",
  onyx: "/lovable-uploads/5cfdadc8-4f5a-428d-b774-fb149220ee4b.png",
  osplash: "/lovable-uploads/splash-clean-logo.png",
};

const LOGO_SIZE_CLASS: Record<string, string> = {
  gococonut: "max-h-16 md:max-h-20 max-w-[160px] md:max-w-[180px]",
  onyx: "max-h-16 md:max-h-20 max-w-[160px] md:max-w-[180px]",
  osplash: "max-h-12 md:max-h-14 max-w-[140px] md:max-w-[160px]",
};

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t, ready } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 10);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return null;

  const handleAcquisitionClick = () => {
    trackCTAClick('Acquisition Door', 'hero');
  };

  const handleOperationsClick = () => {
    trackCTAClick('Operations Door', 'hero');
  };

  const rows = t("hero.resultsSheet.rows", { returnObjects: true }) as ResultRow[];

  return (
    <section className="relative w-full halo-top overflow-hidden pt-28 md:pt-36 pb-6 md:pb-8 min-h-[100svh] flex flex-col">
      {/* Background image */}
      <img
        src="/lovable-uploads/8e5f3992-1b96-4aa9-a095-98f4d9fdeb74.webp"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[100%_30%] md:object-[80%_35%] lg:object-[75%_40%] z-0"
      />

      {/* Overlays for legibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,9,16,0.92) 0%, rgba(6,9,16,0.85) 35%, rgba(6,9,16,0.55) 65%, rgba(6,9,16,0.35) 100%)"
        }}
      />
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,9,16,0.55) 0%, rgba(6,9,16,0) 25%, rgba(6,9,16,0) 60%, rgba(6,9,16,0.9) 100%)"
        }}
      />

      {/* Main content */}
      <div
        className={`container mx-auto px-4 md:px-6 relative z-10 w-full flex-1 flex items-center transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-[760px] w-full">
          {/* Star badge — 5/5 + 30+ entreprises */}
          <div className="inline-flex items-center gap-2 pill-tdia mb-7">
            <span className="inline-flex items-center gap-0.5 text-[#4d9fff]">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="h-3 w-3" fill="#4d9fff" stroke="none" />
              ))}
            </span>
            <span className="text-[10px] text-[#9ec8ff] tracking-[0.22em]">
              {t("hero.trustedBy")}
            </span>
          </div>

          {/* H1 */}
          <h1 className="tdia-h text-[40px] leading-[1.06] sm:text-[52px] md:text-[60px] lg:text-[64px]">
            {t("hero.headline1")}{" "}
            <span className="serif">{t("hero.headline2")}</span>
          </h1>

          {/* Sub */}
          <p className="mt-5 text-base md:text-lg text-[#e6ecf7]/80 max-w-xl leading-relaxed">
            {t("hero.description")}
          </p>

          {/* Two-door CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              to="/acquisition"
              onClick={handleAcquisitionClick}
              className="btn-tdia justify-center"
              aria-label={t("hero.ctaAcquisition")}
            >
              {t("hero.ctaAcquisition")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/operations"
              onClick={handleOperationsClick}
              className="btn-tdia-ghost justify-center"
              aria-label={t("hero.ctaOperations")}
            >
              {t("hero.ctaOperations")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Fiche de résultats — filets uniquement, aucune carte, aucun fond */}
          <div className="mt-8 max-w-[760px]">
            {/* En-tête */}
            <div className="flex items-baseline justify-between pb-3 border-b border-white/[0.12] gap-4">
              <span className="text-[12px] md:text-[13px] text-white/85 font-mono-tdia uppercase tracking-[0.18em]">
                {t("hero.resultsSheet.header")}
              </span>
              <Link
                to="/case-studies"
                className="text-[12px] md:text-[13px] text-[#9ec8ff] hover:text-white font-mono-tdia uppercase tracking-[0.14em] transition-colors whitespace-nowrap"
              >
                {t("hero.resultsSheet.caseStudiesLink")}
              </Link>
            </div>

            {/* Lignes de résultats */}
            <div>
              {rows.map((row, i) => {
                const logoSrc = CLIENT_LOGOS[row.logoKey];
                return (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 border-b border-white/[0.09]"
                    style={{ paddingTop: 15, paddingBottom: 15 }}
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4 min-w-0 flex-1">
                      <span
                        className="text-white text-[26px] sm:text-[30px] font-semibold leading-none flex-shrink-0"
                        style={{ minWidth: 96, letterSpacing: "-0.02em" }}
                      >
                        {row.metric}
                      </span>
                      <span className="text-[13px] sm:text-[15px] text-white/[0.74] leading-snug">
                        {row.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 whitespace-nowrap">
                      <div className="flex items-center justify-end h-16 md:h-20 w-[160px] md:w-[180px] flex-shrink-0">
                        {logoSrc && (
                          <img
                            src={logoSrc}
                            alt={`${row.client} logo`}
                            loading="lazy"
                            className={`${LOGO_SIZE_CLASS[row.logoKey] ?? "max-h-12 md:max-h-14 max-w-[140px] md:max-w-[160px]"} w-auto object-contain drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]`}
                          />
                        )}
                      </div>
                      <span className="text-[12px] md:text-[13px] text-white/85 font-mono-tdia uppercase tracking-[0.14em] w-[140px] md:w-[170px] text-left">
                        {row.client} · {row.sector}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
