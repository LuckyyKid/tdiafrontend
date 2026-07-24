import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import StickyHeader from '../components/StickyHeader';
import Footer from '../components/Footer';
import ComparisonBlock from '../components/ComparisonBlock';
import { Check } from 'lucide-react';
import { fadeInUp, staggerContainer, staggeredItem } from '@/lib/animations';

const CreativesOptimisees: React.FC = () => {
  const { t } = useTranslation();

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const problems = (t('optimizedCreativesPage.section02.problems', { returnObjects: true }) as string[]) || [];
  const deliverables = (t('optimizedCreativesPage.section03.deliverables', { returnObjects: true }) as Array<{ icon: string; text: string }>) || [];
  const edges = (t('optimizedCreativesPage.section04.edges', { returnObjects: true }) as string[]) || [];
  const artPoints = (t('services.optimizedCreatives.artPoints', { returnObjects: true }) as string[]) || [];
  const approach = (t('services.optimizedCreatives.approach', { returnObjects: true }) as Array<{ title: string; description: string }>) || [];

  const sections = [
    {
      number: '01',
      label: t('optimizedCreativesPage.section01.label'),
      title: t('optimizedCreativesPage.section01.title'),
      body: (
        <div className="space-y-3">
          <p className="text-[#7c8aa5] leading-relaxed">{t('optimizedCreativesPage.section01.description1')}</p>
          <p className="text-[#7c8aa5] leading-relaxed">{t('optimizedCreativesPage.section01.description2')}</p>
          <p className="text-[#7c8aa5] leading-relaxed">{t('optimizedCreativesPage.section01.description3')}</p>
          <p className="text-[#9ec8ff] leading-relaxed">{t('optimizedCreativesPage.section01.description4')}</p>
        </div>
      ),
    },
    {
      number: '02',
      label: t('optimizedCreativesPage.section02.label'),
      title: t('optimizedCreativesPage.section02.title'),
      body: (
        <div className="space-y-4">
          <p className="text-[#9ec8ff]">{t('optimizedCreativesPage.section02.intro')}</p>
          <p className="text-white">{t('optimizedCreativesPage.section02.soundFamiliar')}</p>
          <ul className="space-y-2">
            {problems.map((p, i) => (
              <li key={i} className="text-[#7c8aa5] leading-relaxed">• {p}</li>
            ))}
          </ul>
          <p className="text-[#9ec8ff]">{t('optimizedCreativesPage.section02.conclusion')}</p>
        </div>
      ),
    },
    {
      number: '03',
      label: t('optimizedCreativesPage.section03.label'),
      title: t('optimizedCreativesPage.section03.title'),
      body: (
        <div className="space-y-4">
          <p className="text-[#7c8aa5] leading-relaxed">{t('optimizedCreativesPage.section03.intro')}</p>
          <ul className="space-y-3">
            {deliverables.map((d, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                </div>
                <span className="text-[#7c8aa5] leading-relaxed">{d.text}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      number: '04',
      label: t('optimizedCreativesPage.section04.label'),
      title: t('optimizedCreativesPage.section04.title'),
      body: (
        <div className="space-y-4">
          <p className="text-[#7c8aa5] leading-relaxed">{t('optimizedCreativesPage.section04.intro')}</p>
          <p className="text-[#9ec8ff]">{t('optimizedCreativesPage.section04.difference')}</p>
          <p className="text-white">{t('optimizedCreativesPage.section04.edgeTitle')}</p>
          <ul className="space-y-2">
            {edges.map((e, i) => (
              <li key={i} className="text-[#7c8aa5] leading-relaxed">• {e}</li>
            ))}
          </ul>
          <p className="text-[#9ec8ff]">
            {t('optimizedCreativesPage.section04.conclusion')}<br />
            {t('optimizedCreativesPage.section04.conclusionHighlight')}
          </p>
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
          <div className="micro-label mb-6">{t('optimizedCreativesPage.microLabel', 'Créatives optimisées')}</div>
          <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
            <span>{t('optimizedCreativesPage.title')} </span>
            <span className="serif">{t('optimizedCreativesPage.titleHighlight')}</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            {t('optimizedCreativesPage.subtitle')}<br />
            <span className="text-[#9ec8ff]">{t('optimizedCreativesPage.subtitleHighlight')}</span>
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
                <span>{t('services.optimizedCreatives.artOfCreatives')}</span>
              </h2>
              <p className="text-[#7c8aa5] mb-6 leading-relaxed">
                {t('services.optimizedCreatives.artDesc')}
              </p>
              <motion.ul className="space-y-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {artPoints.map((item, i) => (
                  <motion.li key={i} className="flex items-start gap-3" variants={staggeredItem}>
                    <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                    </div>
                    <span className="text-[#7c8aa5] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="tdia-card p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <div className="micro-label mb-3">Approach</div>
              <h3 className="tdia-h text-[22px] md:text-[26px] mb-6">
                <span>{t('services.optimizedCreatives.creativeApproach')}</span>
              </h3>
              <div className="space-y-5">
                {approach.map((a, i) => (
                  <div key={i} className="flex gap-4 hairline-t pt-4 first:hairline-t-none first:pt-0">
                    <div className="tdia-tile flex-shrink-0" style={{ width: 36, height: 36 }}>
                      <span className="font-mono-tdia text-white text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-sm mb-1">{a.title}</h4>
                      <p className="text-[#7c8aa5] text-sm leading-relaxed">{a.description}</p>
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
              <span>{t('optimizedCreativesPage.cta.title')}</span>
            </h2>
            <div className="flex justify-center">
              <button onClick={handleCTAClick} className="btn-tdia">
                {t('optimizedCreativesPage.cta.button')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CreativesOptimisees;
