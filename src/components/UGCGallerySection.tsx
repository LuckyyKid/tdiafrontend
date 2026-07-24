import React, { useState, useEffect, useCallback } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import CounterValue from './CounterValue';
import useEmblaCarousel from 'embla-carousel-react';
import { useTranslation } from 'react-i18next';

const creativesData = [
  { id: 11, type: "video" as const, videoUrl: "https://i.imgur.com/8GHSdYV.mp4", thumbnail: "", roas: 6.8, hookRate: 54, ctr: 5.3 },
  { id: 12, type: "image" as const, thumbnail: "https://i.imgur.com/hAZmSXa.jpeg", videoUrl: "", roas: 6.4, hookRate: 52, ctr: 5.0 },
  { id: 13, type: "video" as const, videoUrl: "https://i.imgur.com/JqQFYVC.mp4", thumbnail: "", roas: 6.5, hookRate: 52, ctr: 5.1 },
  { id: 14, type: "video" as const, videoUrl: "https://i.imgur.com/Mm5zEKX.mp4", thumbnail: "", roas: 5.9, hookRate: 49, ctr: 4.8 },
  { id: 15, type: "video" as const, videoUrl: "https://i.imgur.com/sk7NXwR.mp4", thumbnail: "", roas: 5.8, hookRate: 48, ctr: 4.6 },
  { id: 16, type: "video" as const, videoUrl: "https://i.imgur.com/wgo7lcU.mp4", thumbnail: "", roas: 6.1, hookRate: 50, ctr: 4.9 },
  { id: 17, type: "video" as const, videoUrl: "https://i.imgur.com/OYaPVGW.mp4", thumbnail: "", roas: 5.9, hookRate: 49, ctr: 4.8 },
  { id: 18, type: "video" as const, videoUrl: "https://i.imgur.com/bZgUnz9.mp4", thumbnail: "", roas: 6.2, hookRate: 51, ctr: 5.0 },
  { id: 19, type: "video" as const, videoUrl: "https://i.imgur.com/3IH2jx5.mp4", thumbnail: "", roas: 5.5, hookRate: 47, ctr: 4.7 },
  { id: 20, type: "video" as const, videoUrl: "https://i.imgur.com/aKavNTy.mp4", thumbnail: "", roas: 5.8, hookRate: 47, ctr: 4.3 },
  { id: 21, type: "image" as const, thumbnail: "/lovable-uploads/1pUsbDs.webp", videoUrl: "", roas: 5.6, hookRate: 45, ctr: 4.2 },
  { id: 22, type: "image" as const, thumbnail: "/lovable-uploads/5r9AapP.webp", videoUrl: "", roas: 5.7, hookRate: 46, ctr: 4.4 },
  { id: 23, type: "image" as const, thumbnail: "/lovable-uploads/1RIiSQB.webp", videoUrl: "", roas: 5.3, hookRate: 44, ctr: 4.0 },
];

const UGCGallerySection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { t } = useTranslation();

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const handlePrevious = useCallback(() => {
    if (emblaApi) { emblaApi.scrollPrev(); setActiveIndex(emblaApi.selectedScrollSnap()); }
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) { emblaApi.scrollNext(); setActiveIndex(emblaApi.selectedScrollSnap()); }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section className="w-full py-24 md:py-32 relative halo-top">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="micro-label mb-6">{t('ugc.badge')}</div>

            <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[52px] mb-6">
              <span>{t('ugc.title')} </span>
              <span className="serif">{t('ugc.titleHighlight')}</span>
            </h2>

            <p className="text-[#7c8aa5] text-base md:text-lg mb-8 leading-relaxed">
              {t('ugc.description')}
            </p>

            <div className="space-y-3 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="tdia-card p-4 flex items-start gap-3">
                  <span className="tdia-tile !w-8 !h-8 !rounded-lg flex-shrink-0">
                    <Check className="w-4 h-4" strokeWidth={2} />
                  </span>
                  <div>
                    <h4 className="text-sm text-white mb-1">{t(`ugc.feature${i}Title`)}</h4>
                    <p className="text-xs text-[#7c8aa5]">{t(`ugc.feature${i}Desc`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={handleCTAClick} className="btn-tdia">
              {t('ugc.cta')}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right — mobile carousel */}
          <div className="relative">
            <div className="max-w-[320px] mx-auto">
              <div className="relative rounded-[32px] hairline p-2 bg-[#0a0e18] overflow-hidden">
                <div className="aspect-[9/16] w-full h-full rounded-[26px] overflow-hidden bg-black">
                  <div className="h-full overflow-hidden" ref={emblaRef}>
                    <div className="flex h-full">
                      {creativesData.map((creative) => (
                        <div className="flex-[0_0_100%] min-w-0 h-full" key={creative.id}>
                          <div className="relative w-full h-full">
                            {creative.type === "video" ? (
                              <video src={creative.videoUrl} className="w-full h-full object-cover" autoPlay loop muted playsInline />
                            ) : (
                              <img src={creative.thumbnail} alt="" className="w-full h-full object-cover" />
                            )}

                            <div className="absolute top-3 left-3 pill-tdia !text-[10px] !py-1 !px-2">
                              <span className="text-[#7c8aa5]">ROAS</span>
                              <span className="text-white font-mono-tdia ml-1">
                                <CounterValue end={creative.roas} decimals={1} suffix="x" />
                              </span>
                            </div>

                            <div className="absolute top-3 right-3 pill-tdia !text-[10px] !py-1 !px-2">
                              <span className="text-[#7c8aa5]">HOOK</span>
                              <span className="text-white font-mono-tdia ml-1">
                                <CounterValue end={creative.hookRate} suffix="%" />
                              </span>
                            </div>

                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pill-tdia !text-[10px] !py-1 !px-2">
                              <span className="text-[#7c8aa5]">CTR</span>
                              <span className="text-white font-mono-tdia ml-1">
                                <CounterValue end={creative.ctr} decimals={1} suffix="%" />
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  onClick={handlePrevious}
                  className="h-9 w-9 rounded-full hairline bg-white/[0.02] text-white hover:bg-white/[0.06] transition-colors flex items-center justify-center"
                  disabled={activeIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono-tdia text-[#7c8aa5] tracking-widest">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(creativesData.length).padStart(2, '0')}
                </span>
                <button
                  onClick={handleNext}
                  className="h-9 w-9 rounded-full hairline bg-white/[0.02] text-white hover:bg-white/[0.06] transition-colors flex items-center justify-center"
                  disabled={activeIndex === creativesData.length - 1}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-5 text-center text-xs text-[#7c8aa5]">
                {t('ugc.subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCGallerySection;
