import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const TDIAGuaranteeSection: React.FC = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <section className="w-full py-24 md:py-32 halo-top relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="micro-label mb-6">{t('guarantee.microLabel', 'Garantie TDIA')}</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <Trans
              i18nKey="guarantee.heading"
              components={{ 0: <span className="serif" /> }}
            />
          </h2>
          <p className="mt-6 text-lg md:text-xl text-[#7c8aa5] font-serif-italic">
            {t("guarantee.tagline")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {["p1", "p2", "p3"].map((k) => (
            <div key={k} className="tdia-card p-7 flex flex-col">
              <div className="tdia-tile mb-5">
                <Check className="h-5 w-5" strokeWidth={2} />
              </div>
              <h4 className="tdia-h text-[18px] md:text-[20px] mb-3">
                {t(`guarantee.${k}.title`)}
              </h4>
              <p className="text-[#7c8aa5] text-sm leading-relaxed">{t(`guarantee.${k}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center halo-cta py-10">
          <h3 className="tdia-h text-[28px] md:text-[36px] lg:text-[42px] mb-4 max-w-3xl mx-auto">
            <span>{t("guarantee.finalCta.heading")} </span>
            <br className="hidden md:block" />
            <span className="serif">{t("guarantee.finalCta.headingSerif")}</span>
          </h3>
          <p className="text-base md:text-lg text-[#7c8aa5] max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("guarantee.finalCta.description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={handleCTAClick} className="btn-tdia">
              {t("guarantee.finalCta.cta")}
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/operations" className="btn-tdia-ghost">
              {t("guarantee.finalCta.secondaryCta")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TDIAGuaranteeSection;
