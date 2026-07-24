import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ComparisonBlock from '../components/ComparisonBlock';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer, staggeredItem } from '@/lib/animations';

const ImplementationData: React.FC = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const problems = (t('dataImplementationPage.section02.problems', { returnObjects: true }) as string[]) || [];
  const features = (t('dataImplementationPage.section03.features', { returnObjects: true }) as Array<{ text: string }>) || [];
  const optimizeItems = (t('dataImplementationPage.optimize.items', { returnObjects: true }) as string[]) || [];
  const dataPoints = (t('services.dataImplementation.dataPoints', { returnObjects: true }) as string[]) || [];
  const methodology = (t('services.dataImplementation.methodology', { returnObjects: true }) as Array<{ title: string; description: string }>) || [];

  const sections = [
    {
      number: '01',
      label: t('dataImplementationPage.section01.label'),
      title: t('dataImplementationPage.section01.title'),
      body: (
        <div className="space-y-3">
          <p className="text-[#7c8aa5] leading-relaxed">{t('dataImplementationPage.section01.description1')}</p>
          <p className="text-[#7c8aa5] leading-relaxed">{t('dataImplementationPage.section01.description2')}</p>
          <p className="text-[#7c8aa5] leading-relaxed">{t('dataImplementationPage.section01.description3')}</p>
          <p className="text-[#7c8aa5] leading-relaxed">{t('dataImplementationPage.section01.description4')}</p>
        </div>
      ),
    },
    {
      number: '02',
      label: t('dataImplementationPage.section02.label'),
      title: t('dataImplementationPage.section02.title'),
      body: (
        <div className="space-y-4">
          <p className="text-[#7c8aa5] leading-relaxed">{t('dataImplementationPage.section02.intro')}</p>
          <ul className="space-y-2">
            {problems.map((p, i) => (
              <li key={i} className="text-[#7c8aa5] leading-relaxed">• "{p}"</li>
            ))}
          </ul>
          <p className="text-white">{t('dataImplementationPage.section02.conclusion')}</p>
        </div>
      ),
    },
    {
      number: '03',
      label: t('dataImplementationPage.section03.label'),
      title: t('dataImplementationPage.section03.title'),
      body: (
        <div className="space-y-4">
          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                </div>
                <span className="text-[#7c8aa5] leading-relaxed">{f.text}</span>
              </li>
            ))}
          </ul>
          <p className="text-white">{t('dataImplementationPage.section03.conclusion')}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full relative z-10">
      <StickyHeader />

      <div className="pt-32 md:pt-40 relative halo-top">
        <motion.div
          className="container mx-auto px-4 md:px-6 text-center max-w-3xl pb-14"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="micro-label mb-6">{t('dataImplementationPage.microLabel', 'Implémentation data')}</div>
          <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
            <span>{t('dataImplementationPage.title')} </span>
            <span className="serif">{t('dataImplementationPage.titleHighlight')}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            {t('dataImplementationPage.subtitle')}<br />
            <span className="text-[#9ec8ff]">{t('dataImplementationPage.subtitleHighlight')}</span>
          </p>
        </motion.div>
      </div>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-8">
          {sections.map((s) => (
            <motion.div
              key={s.number}
              className="tdia-card p-8 md:p-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="flex items-start gap-6">
                <div className="tdia-tile flex-shrink-0">
                  <span className="font-mono-tdia text-white text-lg">{s.number}</span>
                </div>
                <div className="flex-grow">
                  <div className="micro-label mb-3">{s.label}</div>
                  <h2 className="tdia-h text-[26px] md:text-[34px] mb-6">
                    <span>{s.title}</span>
                  </h2>
                  {s.body}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-6xl py-16">
          <div className="text-center mb-10">
            <h2 className="tdia-h text-[28px] md:text-[40px]">
              <span>{t('dataImplementationPage.optimize.title')} </span>
              <span className="serif">{t('dataImplementationPage.optimize.titleHighlight')}</span>
            </h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {optimizeItems.map((item, i) => (
              <motion.div key={i} variants={staggeredItem} className="tdia-card p-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                  </div>
                  <span className="text-white text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <ComparisonBlock />

        <div className="container mx-auto px-4 md:px-6 max-w-6xl py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <h2 className="tdia-h text-[28px] md:text-[36px] mb-6">
                <span>{t('services.dataImplementation.dataInfrastructure')}</span>
              </h2>
              <p className="text-[#7c8aa5] mb-6 leading-relaxed">
                {t('services.dataImplementation.dataDesc')}
              </p>
              <ul className="space-y-3">
                {dataPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#7c8aa5] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="tdia-card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="micro-label mb-3">Methodology</div>
              <h3 className="tdia-h text-[22px] md:text-[26px] mb-6">
                <span>{t('services.dataImplementation.croMethodology')}</span>
              </h3>
              <div className="space-y-5">
                {methodology.map((m, i) => (
                  <div key={i} className="flex gap-4 hairline-t pt-4 first:hairline-t-none first:pt-0">
                    <div className="tdia-tile flex-shrink-0" style={{ width: 36, height: 36 }}>
                      <span className="font-mono-tdia text-white text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-sm mb-1">{m.title}</h4>
                      <p className="text-[#7c8aa5] text-sm leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-4xl pb-16">
          <motion.div
            className="tdia-card p-10 md:p-14 text-center halo-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="tdia-h text-[26px] md:text-[36px] mb-8">
              <span>{t('dataImplementationPage.cta.title')}</span>
            </h2>
            <div className="flex justify-center">
              <button onClick={handleCTAClick} className="btn-tdia">
                {t('dataImplementationPage.cta.button')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImplementationData;
