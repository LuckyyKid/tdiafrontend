import React, { useEffect, useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/analytics";

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

  return (
    <section className="relative w-full halo-top overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24 min-h-[100svh] flex items-center">
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

      <div
        className={`container mx-auto px-4 md:px-6 relative z-10 w-full transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="max-w-[760px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 pill-tdia mb-8">
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
          <h1 className="tdia-h text-[40px] leading-[1.06] sm:text-[52px] md:text-[62px] lg:text-[66px]">
            {t("hero.headline1")}{" "}
            <span className="serif">{t("hero.headline2")}</span>
          </h1>

          {/* Sub */}
          <p className="mt-6 text-base md:text-lg text-[#e6ecf7]/80 max-w-xl leading-relaxed">
            {t("hero.description")}
          </p>

          {/* Two-door CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
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

          {/* Proof line */}
          <p className="mt-6 text-xs text-[#e6ecf7]/70 font-mono-tdia tracking-widest uppercase">
            {t("hero.proof")}
          </p>

          {/* Glass pill */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full px-4 py-2.5 backdrop-blur-md bg-white/[0.06] hairline">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-xs md:text-sm text-white/90 truncate">
              {t("hero.selectedBy")} <span className="text-[#9ec8ff]">{t("hero.highGrowthBrands")}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
