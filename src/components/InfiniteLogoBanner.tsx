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
    <div className="w-full bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-transparent pt-10 pb-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 mb-8">
          {/* ---------- Titre à gauche ---------- */}
          <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
            Selected by High-Growth Ecom Brands
          </h2>
          
          {/* ---------- Barre verticale blanche ---------- */}
          <div className="hidden md:block w-[2px] h-20 bg-white"></div>
        </div>
      </div>

      {/* ---------- Bandeaux + logos ---------- */}
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex items-center whitespace-nowrap"
          style={{ width: "fit-content" }}
        >
          {allLogos.map((logo, index) => (
            <div key={index} className="mx-16 inline-flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-40 md:h-52 w-auto max-w-[280px] object-contain opacity-95 hover:opacity-100 transition-all duration-300 hover:scale-110 brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLogoBanner;
