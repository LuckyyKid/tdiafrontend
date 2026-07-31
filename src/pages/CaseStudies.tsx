import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import { ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";
import { fadeInUp, staggerContainer, staggeredItem } from '../lib/animations';

const CaseStudies: React.FC = () => {
  const { t, ready } = useTranslation();

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const cases = [
    {
      slug: 'onyx',
      imageFallback: '/lovable-uploads/02f8bc66-3042-4b06-a33f-fa29d507dd24.png',
      metricValue: '1050+',
    },
    {
      slug: 'runak',
      imageFallback: '/lovable-uploads/e0372708-63e6-4974-8764-44156350601d.png',
      metricValue: '~8×',
    },
    {
      slug: 'lockfeet',
      imageFallback: '/lovable-uploads/19a93a85-4204-4c42-a672-c7a7e0b7fb0b.png',
      metricValue: '27K → 85K',
    },
    {
      slug: 'gococonut',
      imageFallback: '/lovable-uploads/placeholder-gococonut.png',
      metricValue: '19.81×',
    },
    {
      slug: 'osplash',
      imageFallback: '/lovable-uploads/osplash-case-study.png',
      metricValue: '0 → 116',
    },
  ];

  const testimonials = [
    { key: 1, initial: 'M' },
    { key: 2, initial: 'D' },
  ];

  return (
    <div className="min-h-screen w-full relative z-10">
      <StickyHeader />

      <motion.div
        className="container mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-14 text-center max-w-3xl halo-top relative"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="micro-label mb-6">{t('pages.caseStudiesPage.microLabel', 'Études de cas')}</div>
        <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
          <span>{t('pages.caseStudiesPage.title')} </span>
          <span className="serif">{t('pages.caseStudiesPage.titleHighlight')}</span>
        </h1>
        <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
          {t('pages.caseStudiesPage.description')}
        </p>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 md:px-6 pb-24"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cases.map((c) => {
            const tagsData = ready ? t(`caseStudies.${c.slug}.tags`, { returnObjects: true }) : [];
            const tags: string[] = Array.isArray(tagsData) ? tagsData : [];
            const company = ready ? t(`caseStudies.${c.slug}.company`) : c.slug;
            const image = ready ? t(`caseStudies.${c.slug}.image`, c.imageFallback) : c.imageFallback;
            const description = ready ? t(`caseStudies.${c.slug}.description`) : '';
            const metricLabel = ready ? t(`caseStudies.${c.slug}.metricLabel`) : '';
            const subLabel = ready ? t(`caseStudies.${c.slug}.subLabel`) : '';

            return (
              <motion.div key={c.slug} variants={staggeredItem}>
                <div className="tdia-card overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={image} alt={company} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060910] via-[#060910]/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="micro-label mb-2">{company}</div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono-tdia text-[28px] md:text-[36px] text-white leading-none">{c.metricValue}</span>
                        <span className="text-sm text-[#9ec8ff]">{metricLabel}</span>
                      </div>
                      <p className="text-xs text-[#7c8aa5] mt-1">{subLabel}</p>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-[#7c8aa5] text-sm mb-5">{description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {tags.map((tag, i) => (
                        <span key={i} className="text-xs text-[#9ec8ff] hairline rounded-full px-3 py-1 bg-white/[0.02]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link to={`/case-studies/${c.slug}`} className="mt-auto">
                      <button className="btn-tdia-ghost w-full justify-center text-sm">
                        {t('caseStudies.viewDetails')}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div className="mb-16" variants={fadeInUp}>
          <div className="text-center mb-10">
            <div className="micro-label mb-4">{t('testimonials.trustedAllOver')}</div>
            <h2 className="tdia-h text-[28px] md:text-[40px]">
              <span>{t('testimonials.theirWords')} </span>
              <span className="serif">{t('testimonials.wordsHighlight', 'confiance')}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((tt) => (
              <div key={tt.key} className="tdia-card p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-1 mb-4 text-[#4d9fff]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-3 w-3" fill="#4d9fff" stroke="none" />
                  ))}
                </div>
                <div className="relative flex-grow mb-6">
                  <Quote className="w-4 h-4 text-[#4d9fff]/40 mb-3" />
                  <p className="text-[#7c8aa5] leading-relaxed italic">
                    {t(`pages.caseStudiesPage.testimonialQuote${tt.key}`)}
                  </p>
                </div>
                <div className="hairline-t pt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full hairline bg-white/[0.03] flex items-center justify-center text-white text-sm">
                    {tt.initial}
                  </div>
                  <div>
                    <p className="text-white text-sm">{t(`pages.caseStudiesPage.testimonialAuthor${tt.key}`)}</p>
                    <p className="text-[#9ec8ff] text-xs">{t(`pages.caseStudiesPage.testimonialRole${tt.key}`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeInUp} className="mx-auto max-w-4xl tdia-card p-10 md:p-14 text-center halo-cta">
          <h3 className="tdia-h text-[26px] md:text-[36px]">
            <span>{t('pages.caseStudiesPage.ctaHeading')} </span>
            <span className="serif">{t('pages.caseStudiesPage.ctaHighlight')}</span>{' '}
            <span>{t('pages.caseStudiesPage.ctaSubtitle')}</span>
          </h3>
          <p className="mt-4 text-[#7c8aa5]">
            {t('pages.caseStudiesPage.ctaDescription')}{' '}
            <span className="text-[#9ec8ff]">{t('pages.caseStudiesPage.ctaDescriptionHighlight')}</span>
            {t('pages.caseStudiesPage.ctaDescriptionEnd')}
          </p>
          <div className="mt-8 flex justify-center">
            <button onClick={handleCTAClick} className="btn-tdia">
              {t('pages.caseStudiesPage.ctaButton')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default CaseStudies;
