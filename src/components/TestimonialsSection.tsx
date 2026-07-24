import React, { useState } from 'react';
import { Play, ArrowLeft, ArrowRight, X, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from 'react-i18next';

const TestimonialsSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState("");
  const { t, ready } = useTranslation();

  const handleVideoClick = (videoId: string) => {
    setCurrentVideoId(videoId);
    setShowVideo(true);
  };

  const testimonials = (ready && t('testimonials.testimonialContent', { returnObjects: true })) || [];
  const testimonialsList = Array.isArray(testimonials) ? testimonials : [];

  if (!ready || testimonialsList.length === 0) {
    return (
      <section className="w-full py-24 flex items-center justify-center">
        <div className="text-[#7c8aa5]">Loading…</div>
      </section>
    );
  }

  return (
    <section className="w-full py-24 md:py-32 relative halo-top">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="micro-label mb-6">{t('testimonials.trustedAllOver')}</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>{t('testimonials.theirWords')} </span>
            <span className="serif">{t('testimonials.wordsHighlight', 'confiance')}</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonialsList.map((testimonial: any) => (
                <CarouselItem key={testimonial.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                    {/* Quote */}
                    <div className="flex flex-col order-2 md:order-1">
                      <div className="flex space-x-1 mb-4 text-[#4d9fff]">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="h-3 w-3" fill="#4d9fff" stroke="none" />
                        ))}
                      </div>
                      <h3 className="tdia-h text-[22px] md:text-[28px] mb-4">{testimonial.title}</h3>
                      <p className="text-[#7c8aa5] leading-relaxed">{testimonial.text}</p>

                      {testimonial.name && (
                        <div className="mt-6 pt-5 hairline-t">
                          <div className="text-sm text-white">{testimonial.name}</div>
                        </div>
                      )}
                    </div>

                    {/* Video */}
                    <div
                      className="tdia-card aspect-video overflow-hidden cursor-pointer group order-1 md:order-2"
                      onClick={() => handleVideoClick(testimonial.id === 1 ? "nPoN4ydzHmY" : "FQt0T_avMEM")}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={testimonial.id === 1
                            ? "/lovable-uploads/37161ce8-0d5a-4152-90a5-502235399042.png"
                            : "/lovable-uploads/c2a38297-99ef-4d39-a446-c18038b669b7.png"}
                          alt={`${testimonial.name} testimonial`}
                          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <div className="absolute -inset-4 rounded-full bg-[#2f6bff]/25 blur-2xl animate-pulse" />
                            <button className="btn-tdia !p-4 rounded-full relative" aria-label="Play testimonial">
                              <Play className="h-5 w-5" fill="currentColor" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-8">
              <CarouselPrevious className="static transform-none translate-y-0 mr-2 bg-white/[0.02] hairline text-white hover:bg-white/[0.06]" variant="ghost">
                <ArrowLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="static transform-none translate-y-0 bg-white/[0.02] hairline text-white hover:bg-white/[0.06]" variant="ghost">
                <ArrowRight className="h-4 w-4" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>

      {showVideo && (
        <div className="fixed inset-0/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#9ec8ff] transition-colors"
              onClick={() => setShowVideo(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full tdia-card overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
                title="Testimonial Video"
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

export default TestimonialsSection;
