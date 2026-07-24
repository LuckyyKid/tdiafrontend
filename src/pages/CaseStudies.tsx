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
      companyKey: 'caseStudies.onyx.company',
      imageKey: 'caseStudies.onyx.image',
      imageFallback: '/lovable-uploads/02f8bc66-3042-4b06-a33f-fa29d507dd24.png',
      descKey: 'caseStudies.onyx.description',
      descFallback: 'Hyper‑focused B2B lead‑gen for a complex industrial offer.',
      tagsKey: 'caseStudies.onyx.tags',
      tagsFallback: ['lead generation', 'B2B strategy', 'market research'],
      metricValue: '1050+',
      metricLabel: 'qualified leads',
      subLabel: 'in 6 months',
    },
    {
      slug: 'runak',
      companyKey: 'caseStudies.runak.company',
      imageKey: 'caseStudies.runak.image',
      imageFallback: '/lovable-uploads/e0372708-63e6-4974-8764-44156350601d.png',
      descKey: 'caseStudies.runak.description',
      descFallback: 'Targeted email flows and CRO lifts generated outsized returns.',
      tagsKey: 'caseStudies.runak.tags',
      tagsFallback: ['conversion', 'email marketing', 'analytics'],
      metricValue: '~8×',
      metricLabel: 'ROAS moyen',
      subLabel: 'cosmetics',
    },
    {
      slug: 'lockfeet',
      companyKey: 'caseStudies.lockfeet.company',
      imageKey: 'caseStudies.lockfeet.image',
      imageFallback: '/lovable-uploads/19a93a85-4204-4c42-a672-c7a7e0b7fb0b.png',
      descKey: 'caseStudies.lockfeet.description',
      descFallback: 'A strategic Facebook‑Ads sprint: 9.6M+ impressions and 5× ROAS.',
      tagsKey: 'caseStudies.lockfeet.tags',
      tagsFallback: ['Facebook Ads', 'storytelling', 'expansion'],
      metricValue: '27K → 85K',
      metricLabel: 'ventes mensuelles',
      subLabel: 'in 3 months',
    },
    {
      slug: 'gococonut',
      companyKey: 'caseStudies.gococonut.company',
      imageKey: 'caseStudies.gococonut.image',
      imageFallback: '/lovable-uploads/placeholder-gococonut.png',
      descKey: 'caseStudies.gococonut.description',
      descFallback: 'Innovative marketing for children\'s furniture that drove exceptional growth.',
      tagsKey: 'caseStudies.gococonut.tags',
      tagsFallback: ['e-commerce', 'product marketing', 'targeting'],
      metricValue: '19.81×',
      metricLabel: 'ROAS',
      subLabel: 'in 60 days',
    },
    {
      slug: 'osplash',
      companyKey: 'caseStudies.osplash.company',
      imageKey: 'caseStudies.osplash.image',
      imageFallback: '/lovable-uploads/osplash-case-study.png',
      descKey: 'caseStudies.osplash.description',
      descFallback: 'Google Ads strategy going from 0 leads to 116 qualified inquiries.',
      tagsKey: 'caseStudies.osplash.tags',
      tagsFallback: ['Google Ads', 'lead gen', 'local'],
      metricValue: '0 → 116',
      metricLabel: 'leads qualifiés',
      subLabel: 'in 45 days',
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
            const tagsData = ready ? t(c.tagsKey, { returnObjects: true }) : c.tagsFallback;
            const tags: string[] = Array.isArray(tagsData) ? tagsData : c.tagsFallback;
            const company = ready ? t(c.companyKey) : c.slug;
            const image = ready ? t(c.imageKey, c.imageFallback) : c.imageFallback;
            const description = ready ? t(c.descKey, c.descFallback) : c.descFallback;

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
                        <span className="text-sm text-[#9ec8ff]">{c.metricLabel}</span>
                      </div>
                      <p className="text-xs text-[#7c8aa5] mt-1">{c.subLabel}</p>
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
