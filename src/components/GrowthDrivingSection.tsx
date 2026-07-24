import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Palette, TrendingUp, ArrowUpRight, Check } from 'lucide-react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CreativeScoringModalContent from './CreativeScoringModalContent';
import ProfitFirstMediaBuyingModalContent from './ProfitFirstMediaBuyingModalContent';
import CROPipelineEngineModalContent from './CROPipelineEngineModalContent';

const GrowthDrivingSection = () => {
  const { t, ready } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [creativeScoringOpen, setCreativeScoringOpen] = useState(false);
  const [profitFirstOpen, setProfitFirstOpen] = useState(false);
  const [croPipelineOpen, setCROPipelineOpen] = useState(false);

  if (!ready) return null;

  const blocksData = t('growthDriving.blocks', { returnObjects: true }) as Array<{
    title: string;
    subtitle: string;
    description: string;
    goal: string;
    features: string[];
  }>;

  const blocks = [
    { id: 1, icon: Target, ...blocksData[0] },
    { id: 2, icon: Palette, ...blocksData[1] },
    { id: 3, icon: TrendingUp, ...blocksData[2] },
  ];

  const handleOpen = (id: number) => {
    if (id === 1) setProfitFirstOpen(true);
    if (id === 2) setCreativeScoringOpen(true);
    if (id === 3) setCROPipelineOpen(true);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 halo-top"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="pill-tdia mb-6 mx-auto">
            {t('growthDriving.badge')}
          </div>

          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>{t('growthDriving.title')} </span>
            <span className="serif">{t('growthDriving.titleHighlight')}</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
            {t('growthDriving.description')}
          </p>
        </div>

        {/* Cards grid — identical treatment */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <motion.article
                key={block.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="tdia-card p-7 md:p-8 flex flex-col"
              >
                {/* Top row: tile + number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="tdia-tile">
                    <Icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <span className="font-mono-tdia text-sm text-[#7c8aa5]">
                    {String(block.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="tdia-h text-[22px] md:text-[24px] mb-2">
                  {block.title}
                </h3>
                <p className="text-[#9ec8ff] text-sm mb-4">
                  {block.subtitle}
                </p>

                {/* Description */}
                <p className="text-[#7c8aa5] text-sm leading-relaxed mb-6">
                  {block.description}
                </p>

                {/* Features under hairline */}
                <div className="hairline-t pt-5 mb-6 space-y-3">
                  {block.features.map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#4d9fff]/15 border border-[#4d9fff]/30 flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#9ec8ff]" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-[#e6ecf7]/85 leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Ghost CTA */}
                <button
                  onClick={() => handleOpen(block.id)}
                  className="btn-tdia-ghost mt-auto self-start text-sm"
                >
                  {t('growthDriving.learnMore', 'En savoir plus')}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      <Dialog open={creativeScoringOpen} onOpenChange={setCreativeScoringOpen}>
        <DialogContent className="max-w-6xl w-[90vw] h-[90vh] bg-[#0a0e18] hairline text-white p-0 overflow-hidden rounded-2xl">
          <CreativeScoringModalContent onClose={() => setCreativeScoringOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={profitFirstOpen} onOpenChange={setProfitFirstOpen}>
        <DialogContent className="max-w-6xl w-[90vw] h-[90vh] bg-[#0a0e18] hairline text-white p-0 overflow-hidden rounded-2xl">
          <ProfitFirstMediaBuyingModalContent onClose={() => setProfitFirstOpen(false)} />
        </DialogContent>
      </Dialog>

      <Dialog open={croPipelineOpen} onOpenChange={setCROPipelineOpen}>
        <DialogContent className="max-w-6xl w-[90vw] h-[90vh] bg-[#0a0e18] hairline text-white p-0 overflow-hidden rounded-2xl">
          <CROPipelineEngineModalContent onClose={() => setCROPipelineOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GrowthDrivingSection;
