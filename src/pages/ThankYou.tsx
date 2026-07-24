import React, { useEffect } from 'react';
import { CheckCircle, Mail, Calendar, Video, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEOHead from '@/components/SEOHead';
import Footer from '@/components/Footer';
import StickyHeader from '@/components/StickyHeader';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { trackMetaLead, trackEvent, trackMetaEvent } from '@/lib/analytics';

const ThankYou = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    trackMetaLead({
      content_name: 'Strategy Call Booking',
      content_category: 'Consultation',
      value: 0,
      currency: 'USD',
    });
    trackMetaEvent('Schedule', {
      content_name: 'Strategy Call Confirmed',
      content_category: 'Thank You Page',
    });
    trackEvent('booking_confirmed', {
      booking_type: 'strategy_call',
      page_path: window.location.pathname,
    });
  }, []);

  const steps = [
    { icon: <Mail className="w-5 h-5 text-[#9ec8ff]" />, title: t('thankYou.steps.step1.title'), description: t('thankYou.steps.step1.description') },
    { icon: <Calendar className="w-5 h-5 text-[#9ec8ff]" />, title: t('thankYou.steps.step2.title'), description: t('thankYou.steps.step2.description') },
    { icon: <Video className="w-5 h-5 text-[#9ec8ff]" />, title: t('thankYou.steps.step3.title'), description: t('thankYou.steps.step3.description') },
  ];

  const prepItems = [
    t('thankYou.preparation.item1'),
    t('thankYou.preparation.item2'),
    t('thankYou.preparation.item3'),
    t('thankYou.preparation.item4'),
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative z-10">
      <SEOHead
        title={`${t('thankYou.metaTitle')} | TDIA Agency`}
        description={t('thankYou.metaDescription')}
      />
      <StickyHeader />

      <div className="pt-32 md:pt-40 pb-16 relative halo-top">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-[#4d9fff] opacity-30 blur-2xl rounded-full" />
                <CheckCircle className="relative w-16 h-16 text-[#4d9fff]" strokeWidth={1.5} />
              </div>
            </div>

            <div className="micro-label mb-6">Confirmation</div>
            <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
              <span>{t('thankYou.title')}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90">
              {t('thankYou.subtitle')}
            </p>
            <p className="mt-4 text-base text-[#7c8aa5]">
              {t('thankYou.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((s, i) => (
              <div key={i} className="tdia-card p-6 text-center">
                <div className="tdia-tile mx-auto mb-4">{s.icon}</div>
                <h3 className="tdia-h text-[18px] text-white mb-2">{s.title}</h3>
                <p className="text-sm text-[#7c8aa5] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <div className="tdia-card p-8 md:p-10 halo-cta">
            <h2 className="tdia-h text-[22px] md:text-[28px] text-center mb-6">
              <span>{t('thankYou.preparation.title')}</span>
            </h2>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {prepItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                  </div>
                  <span className="text-[#7c8aa5] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <CaseStudySection />
      <TestimonialsSection />

      <section className="py-16 md:py-20 bg-[#060910]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="tdia-card p-10 md:p-14 text-center halo-cta">
            <h2 className="tdia-h text-[26px] md:text-[36px] mb-4">
              <span>{t('thankYou.finalCta.title')}</span>
            </h2>
            <p className="text-[#7c8aa5] max-w-2xl mx-auto mb-8">
              {t('thankYou.finalCta.description')}
            </p>
            <div className="flex justify-center">
              <button onClick={() => navigate('/')} className="btn-tdia">
                {t('thankYou.finalCta.button')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
