import React from "react";
import { Link } from "react-router-dom";
import { Search, Gauge, Palette, Repeat, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggeredItem } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import ParallaxDots from "./ParallaxDots";

const ICONS = [
  <Search className="h-5 w-5 text-[#9ec8ff]" strokeWidth={1.6} />,
  <Gauge className="h-5 w-5 text-[#9ec8ff]" strokeWidth={1.6} />,
  <Palette className="h-5 w-5 text-[#9ec8ff]" strokeWidth={1.6} />,
  <Repeat className="h-5 w-5 text-[#9ec8ff]" strokeWidth={1.6} />,
];

interface Card {
  number: string;
  title: string;
  line1: string;
  line2: string;
}

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();
  const cards = t("processSection.cards", { returnObjects: true }) as Card[];

  return (
    <section className="w-full py-24 md:py-32 relative halo-top overflow-hidden">
      <ParallaxDots
        count={40}
        colors={["#4d9fff", "#2f6bff", "#9ec8ff", "#ffffff"]}
        minSize={1.5}
        maxSize={4}
        minOpacity={0.15}
        maxOpacity={0.45}
        className="z-0"
      />
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <motion.div variants={fadeInUp} className="pill-tdia mx-auto mb-6">
            {t("processSection.pill")}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>{t("processSection.headingBefore")}</span>
            <span className="serif">{t("processSection.headingSerif")}</span>
            <span>{t("processSection.headingAfter")}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            {t("processSection.sub")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.number}
              variants={staggeredItem}
              className="tdia-card p-6 flex flex-col"
            >
              <div className="tdia-tile mb-5">{ICONS[i]}</div>
              <div className="font-mono-tdia text-[#9ec8ff] text-xs mb-2">{card.number}</div>
              <h3 className="tdia-h text-[19px] text-white mb-3 leading-snug">{card.title}</h3>
              <p className="text-[#e6ecf7]/80 text-sm leading-relaxed mb-2">{card.line1}</p>
              <p className="text-[#7c8aa5] text-sm leading-relaxed">{card.line2}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/methodologie"
            className="inline-flex items-center gap-2 text-sm text-[#9ec8ff] hover:text-white transition-colors group"
          >
            {t("processSection.seeMore")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
