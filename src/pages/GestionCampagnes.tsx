import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ComparisonBlock from '../components/ComparisonBlock';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer, staggeredItem } from '@/lib/animations';

const GestionCampagnes: React.FC = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const sections = [
    {
      label: t('campaignManagementPage.section01.label'),
      title: t('campaignManagementPage.section01.title'),
      heading: t('campaignManagementPage.section01.whatWeDo'),
      paragraphs: [
        t('campaignManagementPage.section01.description1'),
        t('campaignManagementPage.section01.description2'),
        t('campaignManagementPage.section01.description3'),
      ],
      number: '01',
    },
    {
      label: t('campaignManagementPage.section02.label'),
      title: t('campaignManagementPage.section02.title'),
      paragraphs: [
        t('campaignManagementPage.section02.description1'),
        t('campaignManagementPage.section02.description2'),
        t('campaignManagementPage.section02.description3'),
      ],
      number: '02',
    },
  ];

  const rolloutItems = [
    t('campaignManagementPage.section03.item1'),
    t('campaignManagementPage.section03.item2'),
    t('campaignManagementPage.section03.item3'),
    t('campaignManagementPage.section03.item4'),
    t('campaignManagementPage.section03.item5'),
  ];

  const processSteps = [
    { title: t('campaignManagementPage.process.step1.title'), desc: t('campaignManagementPage.process.step1.description') },
    { title: t('campaignManagementPage.process.step2.title'), desc: t('campaignManagementPage.process.step2.description') },
    { title: t('campaignManagementPage.process.step3.title'), desc: t('campaignManagementPage.process.step3.description') },
    { title: t('campaignManagementPage.process.step4.title'), desc: t('campaignManagementPage.process.step4.description') },
  ];

  const customFeatures = [
    t('campaignManagementPage.customStrategies.feature1'),
    t('campaignManagementPage.customStrategies.feature2'),
    t('campaignManagementPage.customStrategies.feature3'),
    t('campaignManagementPage.customStrategies.feature4'),
    t('campaignManagementPage.customStrategies.feature5'),
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
          <div className="micro-label mb-6">{t('campaignManagementPage.microLabel', 'Gestion de campagnes')}</div>
          <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
            <span>{t('campaignManagementPage.title')} </span>
            <span className="serif">{t('campaignManagementPage.titleHighlight')}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            {t('campaignManagementPage.subtitle')}
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
                  {s.heading && (
                    <h3 className="text-white text-lg mb-4 font-normal">{s.heading}</h3>
                  )}
                  <div className="space-y-3">
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="text-[#7c8aa5] leading-relaxed">{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="tdia-card p-8 md:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            <div className="flex items-start gap-6">
              <div className="tdia-tile flex-shrink-0">
                <span className="font-mono-tdia text-white text-lg">03</span>
              </div>
              <div className="flex-grow">
                <div className="micro-label mb-3">{t('campaignManagementPage.section03.label')}</div>
                <h2 className="tdia-h text-[26px] md:text-[34px] mb-6">
                  <span>{t('campaignManagementPage.section03.title')}</span>
                </h2>
                <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  {rolloutItems.map((item, i) => (
                    <motion.li key={i} className="flex items-start gap-3" variants={staggeredItem}>
                      <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                      </div>
                      <span className="text-[#7c8aa5] leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
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
                <span>{t('campaignManagementPage.customStrategies.title')} </span>
                <span className="serif">{t('campaignManagementPage.customStrategies.titleHighlight')}</span>
              </h2>
              <p className="text-[#7c8aa5] mb-6 leading-relaxed">
                {t('campaignManagementPage.customStrategies.description')}
              </p>
              <ul className="space-y-3">
                {customFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#7c8aa5] leading-relaxed">{f}</span>
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
              <div className="micro-label mb-3">Process</div>
              <h3 className="tdia-h text-[22px] md:text-[26px] mb-6">
                <span>{t('campaignManagementPage.process.title')}</span>
              </h3>
              <div className="space-y-5">
                {processSteps.map((step, i) => (
                  <div key={i} className="flex gap-4 hairline-t pt-4 first:hairline-t-none first:pt-0">
                    <div className="tdia-tile flex-shrink-0" style={{ width: 36, height: 36 }}>
                      <span className="font-mono-tdia text-white text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-sm mb-1">{step.title}</h4>
                      <p className="text-[#7c8aa5] text-sm leading-relaxed">{step.desc}</p>
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
              <span>{t('campaignManagementPage.cta.title')}</span>
            </h2>
            <div className="flex justify-center">
              <button onClick={handleCTAClick} className="btn-tdia">
                {t('campaignManagementPage.cta.button')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestionCampagnes;
