import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const InfiniteLogoBanner: React.FC = () => {
  const { t } = useTranslation();

  const scrollRef = useRef<HTMLDivElement>(null);

  /* ----------- défilement horizontal optimisé ----------- */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    let id: number;
    let pos = 0;
    let lastTime = performance.now();

    const step = (currentTime: number) => {
      // Throttle on mobile - update every 32ms instead of every frame
      if (isMobile && currentTime - lastTime < 32) {
        id = requestAnimationFrame(step);
        return;
      }
      
      lastTime = currentTime;
      pos += isMobile ? 0.3 : 0.5; // slower on mobile
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(-${pos}px)`;
      id = requestAnimationFrame(step);
    };

    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  /* --------------------------- logos --------------------------- */
  const logos = [
    { src: "/lovable-uploads/55f4a520-199c-4f60-a299-f4f53f4e03d5.png", alt: "Roots" },
    { src: "/lovable-uploads/93d97cb7-54fd-41f5-a9df-85cf0c707dec.png", alt: "Cafexo" },
    { src: "/lovable-uploads/5c9eddd3-5fef-4698-9226-2342603b8414.png", alt: "Mille et Une Noix" },
    { src: "/lovable-uploads/6c45d0a7-a649-4ba0-8c64-5c166ffed649.png", alt: "Lockfeet" },
    { src: "/lovable-uploads/cf826ab0-ef3c-44b2-bddb-f4d89d658aa1.png", alt: "Lika" },
    { src: "/lovable-uploads/c8b3e4cb-8979-4685-b500-0e7c71f5182b.png", alt: "Annick Levesque" },
    { src: "/lovable-uploads/5cfdadc8-4f5a-428d-b774-fb149220ee4b.png", alt: "Onyx" },
    { src: "/lovable-uploads/0be2b643-ce09-4db2-8250-f17844bd33ab.png", alt: "Runak" },
    { src: "/lovable-uploads/ca87324b-abc5-494c-939c-4b5f93d7f252.png", alt: "Go Coconut" },
    { src: "/lovable-uploads/pop-logo.png", alt: "Pop Underwear" },
    { src: "/lovable-uploads/aviron-institute-logo.png", alt: "Aviron Technical Institute" },
    { src: "/lovable-uploads/splash-clean-logo.png", alt: "Splash" }
  ];

  const allLogos = [...logos, ...logos]; // duplication pour la boucle infinie

  return (
    <div className="w-full bg-[#060910] hairline-t hairline-b py-8 md:py-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6">
        <p className="text-[10px] md:text-xs text-[#9ec8ff]/80 font-mono-tdia tracking-[0.22em] uppercase text-center">
          {t("hero.selectedBy")} <span className="text-[#e6ecf7]/90">{t("hero.highGrowthBrands")}</span>
        </p>
      </div>

      {/* ---------- Bandeau logos ---------- */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          {allLogos.map((logo, index) => (
            <div key={index} className="mx-10 md:mx-14 inline-flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-10 md:h-12 w-auto max-w-[160px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
        {/* fades latérales */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-[#060910] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-[#060910] to-transparent" />
      </div>
    </div>
  );
};

export default InfiniteLogoBanner;
