import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fadeInUp } from "@/lib/animations";

interface CaseStudy {
  company: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  learnMore?: string;
}

const CaseStudySection: React.FC = () => {
  const { t, ready } = useTranslation();
  if (!ready) return null;

  const caseStudiesData = {
    lockfeet: t("caseStudies.lockfeet", { returnObjects: true }) as CaseStudy,
    runak: t("caseStudies.runak", { returnObjects: true }) as CaseStudy,
    onyx: t("caseStudies.onyx", { returnObjects: true }) as CaseStudy,
  };

  const studies = Object.values(caseStudiesData);

  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden halo-top">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div className="pill-tdia mx-auto mb-6" variants={fadeInUp}>
            {t('caseStudiez.microLabel', 'Études de cas')}
          </motion.div>
          <motion.h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]" variants={fadeInUp}>
            <span>{t("caseStudiez.title")} </span>
            <span className="serif">{t("caseStudiez.titleHighlight")}</span>
          </motion.h2>
          <motion.p className="mt-6 text-base md:text-lg text-[#7c8aa5]" variants={fadeInUp}>
            {t("caseStudiez.description")}
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {studies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="tdia-card overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060910] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="micro-label mb-4">
                    {study.company}
                  </div>

                  <h3 className="tdia-h text-[26px] md:text-[32px] mb-3">
                    <span>{study.title}</span>
                    {study.subtitle && (
                      <>
                        {" "}
                        <span className="serif">{study.subtitle}</span>
                      </>
                    )}
                  </h3>

                  <p className="text-[#7c8aa5] leading-relaxed mb-6">{study.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block py-1.5 px-3 rounded-full text-xs text-[#9ec8ff] hairline bg-white/[0.02]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-[#9ec8ff] hover:text-white transition-colors group"
                  >
                    <span>{t(`caseStudies.${study.slug}.learnMore`, { company: study.company })}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA — voir toutes les études de cas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <Link
            to="/case-studies"
            className="btn-tdia"
            aria-label={t("caseStudiez.viewAll", "Voir toutes nos études de cas")}
          >
            {t("caseStudiez.viewAll", "Voir toutes nos études de cas")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
