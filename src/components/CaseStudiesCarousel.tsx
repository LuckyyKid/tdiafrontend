import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackCTAClick } from '@/lib/analytics';

const CaseStudiesCarousel: React.FC = () => {
  const { t } = useTranslation();

  const studies = [
    {
      brand: 'Lockfeet',
      img: '/lovable-uploads/19a93a85-4204-4c42-a672-c7a7e0b7fb0b.png',
      objectPosition: '0% 0%',
      metric: '$27K → $85K',
      subMetric: t('caseCarousel.months', { count: 3 }),
      channel: t('caseCarousel.facebook'),
    },
    {
      brand: 'Runak',
      img: '/lovable-uploads/e0372708-63e6-4974-8764-44156350601d.png',
      objectPosition: '0% 33%',
      metric: '7× ROAS',
      subMetric: t('caseCarousel.cosmetics'),
      channel: t('caseCarousel.days', { count: 30 }),
    },
    {
      brand: 'Onyx',
      img: '/lovable-uploads/a167b663-d622-4846-a730-b44dd649af3c.png',
      objectPosition: '0% 66%',
      metric: t('caseCarousel.0to20'),
      subMetric: t('caseCarousel.leads'),
      channel: t('caseCarousel.days', { count: 30 }),
    },
  ];

  return (
    <section className="w-full py-24 md:py-32 relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="pill-tdia mx-auto mb-6">Case studies</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>{t('caseCarousel.headingPrefix')} </span>
            <span className="serif">{t('caseCarousel.headingHighlight')}</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5] max-w-2xl mx-auto">
            {t('caseCarousel.sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studies.map((s) => (
            <div key={s.brand} className="tdia-card overflow-hidden">
              <div className="relative">
                <img
                  src={s.img}
                  alt={`${s.brand} case study`}
                  className="w-full"
                  style={{ objectFit: 'cover', objectPosition: s.objectPosition, maxHeight: '220px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060910] to-transparent opacity-80" />
              </div>
              <div className="p-6 hairline-t">
                <div className="micro-label mb-3">{s.brand}</div>
                <h3 className="tdia-h text-[22px] md:text-[24px] text-white mb-2">
                  <span className="serif">{s.metric}</span>
                </h3>
                <p className="text-[#7c8aa5] text-sm mb-3">{s.subMetric}</p>
                <p className="text-[#9ec8ff] text-xs font-mono-tdia uppercase tracking-wider">{s.channel}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/case-studies"
            onClick={() => trackCTAClick(t('caseCarousel.cta'), 'case_carousel_section')}
            className="btn-tdia-ghost"
          >
            {t('caseCarousel.cta')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesCarousel;
