import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import { trackCTAClick, trackMetaEvent } from '@/lib/analytics';
import CounterValue from "./CounterValue";
import { fadeInUp, fadeInScale } from "@/lib/animations";

const ROICalculatorSection: React.FC = () => {
  const { t } = useTranslation();

  const [adSpend, setAdSpend] = useState<number>(5000);
  const [currentRoas, setCurrentRoas] = useState<number>(1);
  const [targetRoas, setTargetRoas] = useState<number>(4);
  const [estimatedRevenue, setEstimatedRevenue] = useState<number>(0);
  const [revenueIncrease, setRevenueIncrease] = useState<number>(0);
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'roi_calculator_section');
    trackMetaEvent('Schedule', {
      content_name: 'Strategy Call Booking',
      content_category: 'ROI Calculator',
      value: estimatedRevenue,
      currency: 'USD',
    });
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  useEffect(() => {
    const currentRevenue = adSpend * currentRoas;
    const newRevenue = adSpend * targetRoas;
    setEstimatedRevenue(newRevenue);
    setRevenueIncrease(newRevenue - currentRevenue);
  }, [adSpend, currentRoas, targetRoas]);

  return (
    <section id="roi-calculator" className="w-full py-24 md:py-32 relative halo-top">
      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="micro-label mb-6">{t('roi.microLabel', 'Calculatrice ROI')}</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <Trans
              i18nKey="roi.heading"
              components={{ 0: <span className="serif" /> }}
            />
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            <Trans
              i18nKey="roi.sub"
              components={{ 0: <span className="text-[#9ec8ff]" /> }}
            />
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          className="max-w-5xl mx-auto tdia-card p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInScale}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Inputs */}
            <div>
              <div className="micro-label mb-6">{t("roi.inputTitle")}</div>

              <div className="space-y-6">
                {/* Ad Spend */}
                <div>
                  <label htmlFor="adSpend" className="block text-xs uppercase tracking-widest text-[#7c8aa5] mb-2 font-mono-tdia">
                    {t("roi.adSpendLabel")}
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7c8aa5] text-sm">$</span>
                    <input
                      id="adSpend"
                      type="number"
                      value={adSpend}
                      onChange={e => setAdSpend(Number(e.target.value))}
                      className="w-full h-12 pl-8 pr-4 bg-white/[0.02] hairline rounded-xl text-white font-mono-tdia text-lg focus:outline-none focus:border-[#4d9fff]/40 transition-colors"
                      min={100}
                    />
                  </div>
                </div>

                {/* Current ROAS */}
                <div>
                  <label htmlFor="currentRoas" className="block text-xs uppercase tracking-widest text-[#7c8aa5] mb-2 font-mono-tdia">
                    {t("roi.currentRoasLabel")}
                  </label>
                  <select
                    id="currentRoas"
                    value={currentRoas}
                    onChange={e => setCurrentRoas(Number(e.target.value))}
                    className="w-full h-12 pl-4 bg-white/[0.02] hairline rounded-xl text-white font-mono-tdia focus:outline-none focus:border-[#4d9fff]/40"
                  >
                    {[0.5, 1, 1.5, 2].map(n => (
                      <option key={n} value={n} className="bg-[#0a0e18]">{n}x</option>
                    ))}
                  </select>
                </div>

                {/* Target ROAS */}
                <div>
                  <label htmlFor="targetRoas" className="block text-xs uppercase tracking-widest text-[#7c8aa5] mb-2 font-mono-tdia">
                    {t("roi.targetRoasLabel")}
                  </label>
                  <select
                    id="targetRoas"
                    value={targetRoas}
                    onChange={e => setTargetRoas(Number(e.target.value))}
                    className="w-full h-12 pl-4 bg-[rgba(77,159,255,0.08)] border border-[#4d9fff]/30 rounded-xl text-[#9ec8ff] font-mono-tdia focus:outline-none focus:border-[#4d9fff]/60"
                  >
                    {[3, 4, 5, 6].map(n => (
                      <option key={n} value={n} className="bg-[#0a0e18]">
                        {n}x{n === 4 ? ` (${t("roi.average")})` : ""}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setHasCalculated(true)}
                  className="btn-tdia w-full mt-2"
                >
                  {t("roi.calculate")}
                  <TrendingUp className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Results */}
            <div className="flex flex-col">
              <div className="micro-label mb-6">{t("roi.resultTitle")}</div>

              <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
                <div className="text-[#7c8aa5] text-sm mb-3">{t("roi.estimatedLabel")}</div>
                <div className="font-mono-tdia text-[56px] md:text-[72px] leading-none text-white text-glow-blue">
                  {hasCalculated ? (
                    <>
                      <CounterValue value={estimatedRevenue} decimals={0} />
                      <span className="text-[#9ec8ff]"> $</span>
                    </>
                  ) : (
                    <span>0 <span className="text-[#9ec8ff]">$</span></span>
                  )}
                </div>

                {hasCalculated && (
                  <motion.div
                    className="mt-6 inline-flex items-center gap-2 text-emerald-400 font-mono-tdia text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span>+</span>
                    <CounterValue value={revenueIncrease} decimals={0} />
                    <span>$</span>
                    <span className="text-[#7c8aa5] normal-case text-xs">{t("roi.increaseLabel")}</span>
                  </motion.div>
                )}
              </div>

              <button
                onClick={handleCTAClick}
                className="btn-tdia-ghost mt-4 w-full justify-center"
              >
                {t("roi.cta")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
