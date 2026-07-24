
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Check,
  ChevronDown,
  CircleCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ParallaxDots from "./ParallaxDots";
import ParticlesBackground from "./ParticlesBackground";
import {
  fadeInUp,
  staggerContainer,
  staggeredItem,
} from "@/lib/animations";

/* ---------- types ---------- */
interface CoreSystem {
  id: number;
  name: string;
  transformation: string;
  logic: string;
  isNew: boolean;
}

interface BonusTool {
  id: number;
  title: string;
  description: string;
  value: string;
}

/* ---------- component ---------- */
const CoreGrowthSystems: React.FC = () => {
  const { t, ready } = useTranslation();

  

  /* list des systèmes & bonus chargés depuis le JSON de traduction */
  const coreSystems = (ready && t("coreGrowth.coreSystems", {
    returnObjects: true,
  })) || [];

  const bonusTools = (ready && t("coreGrowth.bonusTools", {
    returnObjects: true,
  })) || [];

  // Ensure arrays are properly typed
  const coreSystemsList = Array.isArray(coreSystems) ? coreSystems as CoreSystem[] : [];
  const bonusToolsList = Array.isArray(bonusTools) ? bonusTools as BonusTool[] : [];

  /* progressive reveal des bonus */
  const [revealedBonuses, setRevealedBonuses] = useState(4);
  const maxBonuses = bonusToolsList.length;
  const increment = 4;

  const handleRevealMore = () =>
    setRevealedBonuses((prev) => Math.min(prev + increment, maxBonuses));

  const getButtonText = () =>
    revealedBonuses < maxBonuses
      ? `+ ${t("coreGrowth.showMore", {
          count: Math.min(increment, maxBonuses - revealedBonuses),
        })}`
      : t("coreGrowth.allUnlocked");

  // Don't render if translations aren't ready
  if (!ready) {
    return (
      <section className="w-full py-20 relative bg-black overflow-hidden flex items-center justify-center">
        <div className="text-white">Loading core growth systems...</div>
      </section>
    );
  }

  return (
    <section 
      id="what-you-get" 
      className="w-full py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0a0e1a 100%)', color: "white" }}
    >
      <ParticlesBackground />
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-[2]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        mixBlendMode: 'overlay'
      }}></div>
      <ParallaxDots
        count={40}
        colors={["#006FFF", "#3944bc", "#ffde00", "#ffffff"]}
        minSize={2}
        maxSize={6}
        className="z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* -------- Titre principal -------- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t("coreGrowth.heading.part1")}{" "}
            <span className="bg-gradient-to-r from-white via-[#006fff] to-[#006fff] text-transparent bg-clip-text font-bold">
              {t("coreGrowth.heading.part2")}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
            {t("coreGrowth.subheading")}
          </p>
        </div>

        {/* -------- Core systems -------- */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Badge className="bg-[#006fff] mr-3 text-white">
              {t("coreGrowth.coreBadge")}
            </Badge>
            {t("coreGrowth.coreTitle")}
          </h3>

          <motion.ul
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {coreSystemsList.map((system) => (
              <motion.li
                key={system.id}
                variants={staggeredItem}
                className="flex items-start bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10"
              >
                <Check className="text-[#006fff] mt-1 h-5 w-5 flex-shrink-0 mr-3" />
                <div>
                  <span className="font-bold text-white">
                    {system.name}
                    {system.isNew && (
                      <Badge className="ml-2 bg-[#006fff]/80 text-white text-xs">
                        {t("coreGrowth.new")}
                      </Badge>
                    )}
                  </span>
                  <span className="text-white/90"> – {system.transformation} </span>
                  <span className="text-[#006fff]/80 text-sm">{system.logic}</span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* -------- Bonus tools -------- */}
        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Badge className="bg-[#ffde00] text-black mr-3">
              {t("coreGrowth.bonusBadge")}
            </Badge>
            {t("coreGrowth.bonusTitle")}
          </h3>

          <p className="text-white/80 text-sm mb-8">
            <Star className="inline-block h-4 w-4 mr-1 text-[#ffde00]" />
            {t("coreGrowth.bonusNote")}
          </p>

          <motion.ul
            className="space-y-3 mb-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {bonusToolsList.slice(0, revealedBonuses).map((tool) => (
              <motion.li
                key={tool.id}
                variants={fadeInUp}
                className="flex items-center bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10"
              >
                <Check className="text-[#ffde00] h-5 w-5 flex-shrink-0 mr-3" />
                <div className="flex justify-between items-center w-full">
                  <div>
                    <span className="font-bold text-white">{tool.title}</span>
                    <span className="text-white/80"> – {tool.description}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#ffde00]/70 font-medium line-through mr-2">
                      {tool.value}
                    </span>
                    <span className="text-[#ffde00] font-bold">
                      {t("coreGrowth.free")}
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Reveal button / finished message */}
          {revealedBonuses < maxBonuses ? (
            <div className="flex justify-center mt-8">
              <Button
                onClick={handleRevealMore}
                className="bg-[#ffde00] hover:bg-[#ffde00]/80 text-black font-semibold"
                size="lg"
              >
                {getButtonText()}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-center text-[#ffde00] font-medium text-lg gap-2 mt-8">
              <CircleCheck className="h-5 w-5" />
              {getButtonText()}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoreGrowthSystems;
