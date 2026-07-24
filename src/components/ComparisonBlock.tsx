import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggeredItem } from '@/lib/animations';
import { useTranslation } from 'react-i18next';

const ComparisonBlock: React.FC = () => {
  const { t } = useTranslation();

  const comparisonItems = t('comparison.items', { returnObjects: true }) as Array<{
    tdia: string;
    other: string;
  }>;

  return (
    <motion.div
      id="comparison-section"
      className="w-full py-16 md:py-20 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-12">
          <div className="micro-label mb-4">/04</div>
          <h2 className="tdia-h text-[28px] md:text-[40px]">
            <span>{t('comparison.title')}</span>
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
          variants={staggerContainer}
        >
          <motion.div variants={staggeredItem}>
            <div className="tdia-card p-8 h-full halo-cta">
              <div className="text-center mb-6">
                <div className="micro-label mb-3">TDIA</div>
                <h3 className="tdia-h text-[22px] md:text-[26px] text-white">
                  <span className="serif">{t('comparison.us')}</span>
                </h3>
              </div>

              <div className="space-y-4">
                {comparisonItems.map((item, index) => (
                  <div key={`tdia-${index}`} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                    </div>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">{item.tdia}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggeredItem}>
            <div className="tdia-card p-8 h-full">
              <div className="text-center mb-6">
                <div className="micro-label mb-3">Others</div>
                <h3 className="tdia-h text-[22px] md:text-[26px] text-white/70">
                  {t('comparison.otherAgencies')}
                </h3>
              </div>

              <div className="space-y-4">
                {comparisonItems.map((item, index) => (
                  <div key={`other-${index}`} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/[0.03] hairline flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="h-3.5 w-3.5 text-[#7c8aa5]" strokeWidth={2.5} />
                    </div>
                    <p className="text-[#7c8aa5] text-sm md:text-base leading-relaxed">{item.other}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComparisonBlock;
