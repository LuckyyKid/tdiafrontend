import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Play, X } from "lucide-react";

const VideoSection: React.FC = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full py-24 md:py-32 halo-top relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="micro-label mb-6">{t("videoSection.microLabel", "Pourquoi TDIA")}</div>

          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>{t("videoSection.title.part1")} </span>
            <span className="serif">{t("videoSection.title.part2")}</span>
            <span> {t("videoSection.title.part3")} </span>
            <span>{t("videoSection.title.part4")}</span>
            <span> {t("videoSection.title.part5")}</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
            {t("videoSection.subtitle")}
          </p>
        </div>

        {/* Video card */}
        <div
          className="tdia-card mx-auto max-w-4xl aspect-video overflow-hidden cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <div className="relative w-full h-full">
            <img
              src="/lovable-uploads/2c87bdc0-421b-4e9b-9480-36f8a728fd8a.webp"
              alt="Video testimonial"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-[#2f6bff]/25 blur-2xl animate-pulse" />
                <button
                  className="btn-tdia !p-5 !px-5 rounded-full relative"
                  aria-label="Play video"
                >
                  <Play className="h-6 w-6" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Proud partners of */}
        <div className="mt-16 md:mt-20 flex flex-col items-center gap-6 md:gap-8">
          <div className="micro-label text-center">
            {t("videoSection.partners", "PARTENAIRES FIERS DE")}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6">
            {[
              "/lovable-uploads/2d7f1df9-d49f-4b33-8296-d839d5f3b898.png",
              "/lovable-uploads/6c631716-a68d-45b2-bb93-904fe25a495f.png",
              "/lovable-uploads/acedbc51-6a0f-4c01-85bd-afeb08da7d54.png",
              "/lovable-uploads/c95d4a4a-a131-4f7f-84d6-24240b23fd51.png",
            ].map((src, idx) => (
              <div
                key={idx}
                className="h-7 md:h-8 flex items-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className="fixed inset-0/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#9ec8ff] transition-colors"
              onClick={() => setIsPlaying(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full tdia-card overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`${t("videoSection.videoUrl")}?autoplay=1`}
                title="Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
