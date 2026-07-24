import React from 'react';
import StickyHeader from '../components/StickyHeader';
import AdStrategiesSection from '../components/AdStrategiesSection';
import ResultsSection from '../components/ResultsSection';
import Footer from '../components/Footer';
import ComparisonSection from '../components/ComparisonSection';
import WhatYouGetSection from '../components/WhatYouGetSection';
import CaseStudiesCarousel from '../components/CaseStudiesCarousel';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen w-full relative z-10">
      <StickyHeader />
      <div className="pt-32 md:pt-40 relative halo-top">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl pb-14">
          <div className="micro-label mb-6">{t('pages.services.microLabel', 'Nos services')}</div>
          <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
            <span>{t('pages.services.title')} </span>
            <span className="serif">{t('pages.services.titleHighlight')}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            {t('pages.services.description')}
          </p>
        </div>

        <div className="relative z-10">
          <ResultsSection />
          <WhatYouGetSection />
          <AdStrategiesSection />
          <ComparisonSection />
          <CaseStudiesCarousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
