import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const logos = [
  { src: '/lovable-uploads/55f4a520-199c-4f60-a299-f4f53f4e03d5.png', alt: 'Roots' },
  { src: '/lovable-uploads/93d97cb7-54fd-41f5-a9df-85cf0c707dec.png', alt: 'Cafexo' },
  { src: '/lovable-uploads/5c9eddd3-5fef-4698-9226-2342603b8414.png', alt: 'Mille et Une Noix' },
  { src: '/lovable-uploads/6c45d0a7-a649-4ba0-8c64-5c166ffed649.png', alt: 'Lockfeet' },
  { src: '/lovable-uploads/cf826ab0-ef3c-44b2-bddb-f4d89d658aa1.png', alt: 'Lika' },
  { src: '/lovable-uploads/c8b3e4cb-8979-4685-b500-0e7c71f5182b.png', alt: 'Annick Levesque' },
  { src: '/lovable-uploads/5cfdadc8-4f5a-428d-b774-fb149220ee4b.png', alt: 'Onyx' },
  { src: '/lovable-uploads/0be2b643-ce09-4db2-8250-f17844bd33ab.png', alt: 'Runak' },
  { src: '/lovable-uploads/ca87324b-abc5-494c-939c-4b5f93d7f252.png', alt: 'Go Coconut' },
  { src: '/lovable-uploads/pop-logo.png', alt: 'Pop Underwear' },
  { src: '/lovable-uploads/aviron-institute-logo.png', alt: 'Aviron Technical Institute' },
  { src: '/lovable-uploads/splash-clean-logo.png', alt: 'Splash' },
];

const StatsGlimpseSection: React.FC = () => {
  const { t, ready } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    let id: number;
    let pos = 0;
    let lastTime = performance.now();

    const step = (currentTime: number) => {
      if (isMobile && currentTime - lastTime < 32) {
        id = requestAnimationFrame(step);
        return;
      }
      lastTime = currentTime;
      pos += isMobile ? 0.3 : 0.5;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      id = requestAnimationFrame(step);
    };

    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  if (!ready) return null;

  const allLogos = [...logos, ...logos];

  return (
    <section className="relative w-full py-10 md:py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="hairline-t hairline-b py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="micro-label whitespace-nowrap md:min-w-[220px]">
              {t('stats.partnersLabel', 'FIERS PARTENAIRES DE')}
            </div>

            <div
              className="relative flex-1 overflow-hidden"
              style={{
                maskImage:
                  'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
              }}
            >
              <div
                ref={scrollRef}
                className="flex items-center whitespace-nowrap"
                style={{ width: 'fit-content' }}
              >
                {allLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="mx-8 md:mx-12 inline-flex items-center justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-8 md:h-10 w-auto max-w-[140px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsGlimpseSection;
