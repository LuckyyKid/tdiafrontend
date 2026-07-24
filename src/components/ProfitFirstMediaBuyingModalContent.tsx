import React from 'react';
import { X, ArrowRight, Target, Check } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { useTranslation } from 'react-i18next';
import { trackCTAClick, trackMetaEvent } from '@/lib/analytics';

interface ProfitFirstMediaBuyingModalContentProps {
  onClose: () => void;
}

const ProfitFirstMediaBuyingModalContent: React.FC<ProfitFirstMediaBuyingModalContentProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'profit_first_media_buying_modal');
    trackMetaEvent('Lead', {
      content_name: 'Profit First Media Buying',
      content_category: 'Modal CTA',
    });
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <div className="w-full h-full bg-[#060910] text-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-[#060910]/90 backdrop-blur-xl hairline-b px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="tdia-tile">
              <Target className="h-4 w-4" strokeWidth={1.6} />
            </div>
            <h2 className="tdia-h text-lg">
              Profit-First <span className="serif">Media Buying</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 hairline hover:bg-white/[0.04] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <ScrollArea className="h-[calc(90vh-72px)]">
        <div className="container mx-auto px-6 py-10 max-w-5xl">
          {/* Intro */}
          <motion.section
            className="tdia-card p-8 md:p-10 mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-start gap-5">
              <div className="tdia-tile flex-shrink-0">
                <Target className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <div className="min-w-0">
                <h2 className="tdia-h text-2xl md:text-3xl mb-4">
                  {t('profitFirstModal.intro.heading')}
                </h2>
                <p className="text-[#7c8aa5] text-base md:text-lg leading-relaxed mb-4">
                  {t('profitFirstModal.intro.paragraph1')}
                </p>
                <p className="text-[#e6ecf7] text-base md:text-lg leading-relaxed">
                  {t('profitFirstModal.intro.paragraph2')}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Sections list */}
          <div className="space-y-6">
            {(t('profitFirstModal.sections', { returnObjects: true }) as any[]).map((section: any, index: number) => (
              <motion.article
                key={index}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                className="tdia-card p-7 md:p-8"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mono-tdia text-sm text-[#9ec8ff]">
                    {String(section.number).padStart(2, '0')}
                  </span>
                  <h3 className="tdia-h text-xl md:text-2xl">
                    {section.title}
                  </h3>
                </div>

                {section.intro && (
                  <p className="text-[#7c8aa5] leading-relaxed mb-4 whitespace-pre-line">{section.intro}</p>
                )}
                {section.subtitle && (
                  <p className="text-[#e6ecf7] font-medium mb-3">{section.subtitle}</p>
                )}

                {section.items && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-4">
                    {section.items.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#4d9fff]/15 border border-[#4d9fff]/30 flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#9ec8ff]" strokeWidth={3} />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.tags && (
                  <div className="mt-4">
                    <p className="text-[#e6ecf7] font-medium mb-2">{section.tags.intro}</p>
                    <ul className="space-y-1.5 text-sm text-[#7c8aa5] pl-1">
                      {section.tags.list.map((tag: string, i: number) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#9ec8ff] mt-0.5">·</span>
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.middle && (
                  <p className="text-[#7c8aa5] mt-4 leading-relaxed whitespace-pre-line">{section.middle}</p>
                )}

                {section.items2 && (
                  <ul className="space-y-2.5 mt-4">
                    {section.items2.map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#4d9fff]/15 border border-[#4d9fff]/30 flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#9ec8ff]" strokeWidth={3} />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlight && (
                  <p className="text-[#9ec8ff] font-mono-tdia text-lg mt-5 whitespace-pre-line">
                    {section.highlight}
                  </p>
                )}

                {section.conclusion && (
                  <p className="text-[#7c8aa5] mt-4 italic leading-relaxed whitespace-pre-line">
                    {section.conclusion}
                  </p>
                )}
              </motion.article>
            ))}

            {/* Outcome */}
            <motion.section
              className="tdia-card p-8 md:p-10 mt-10"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="flex items-start gap-5">
                <div className="tdia-tile flex-shrink-0">
                  <Target className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="tdia-h text-2xl md:text-3xl mb-4">
                    {t('profitFirstModal.outcome.title')}
                  </h2>
                  <p className="text-[#e6ecf7] font-medium mb-4">
                    {t('profitFirstModal.outcome.intro')}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-6">
                    {(t('profitFirstModal.outcome.items', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#4d9fff]/15 border border-[#4d9fff]/30 flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#9ec8ff]" strokeWidth={3} />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[#7c8aa5] italic text-base md:text-lg leading-relaxed mb-6 whitespace-pre-line">
                    {t('profitFirstModal.outcome.tagline')}
                  </p>

                  <div className="hairline rounded-xl p-6 bg-white/[0.02]">
                    <p className="text-[#e6ecf7] font-medium mb-3">
                      {t('profitFirstModal.outcome.results.intro')}
                    </p>
                    <ul className="space-y-2.5">
                      {(t('profitFirstModal.outcome.results.items', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                          <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#4d9fff]/15 border border-[#4d9fff]/30 flex-shrink-0">
                            <Check className="w-2.5 h-2.5 text-[#9ec8ff]" strokeWidth={3} />
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[#9ec8ff] font-mono-tdia text-xl mt-5 whitespace-pre-line">
                      {t('profitFirstModal.outcome.results.highlight')}
                    </p>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-[#7c8aa5] text-base md:text-lg mb-2">
                      {t('profitFirstModal.outcome.closing.line1')}
                    </p>
                    <p className="tdia-h text-2xl md:text-3xl mb-2">
                      {t('profitFirstModal.outcome.closing.line2')}
                    </p>
                    <p className="text-lg text-[#9ec8ff] font-mono-tdia">
                      {t('profitFirstModal.outcome.closing.line3')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="sticky bottom-0 bg-[#060910]/95 backdrop-blur-xl hairline-t px-6 py-5">
          <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-base md:text-lg mb-1">
                {t('profitFirstModal.cta.title')}
              </p>
              <p className="text-[#7c8aa5] text-sm">
                {t('profitFirstModal.cta.subtitle')}
              </p>
            </div>
            <button
              onClick={handleCTAClick}
              className="btn-tdia flex-shrink-0"
            >
              {t('profitFirstModal.cta.button')}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProfitFirstMediaBuyingModalContent;
