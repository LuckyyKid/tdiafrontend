import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Target, Cog, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { trackCTAClick } from "@/lib/analytics";

type DoorContent = {
  kicker: string;
  title: string;
  subtitle: string;
  forWhoLabel: string;
  audiences: string[];
  proofLabel: string;
  proof: string;
  cta: string;
};

const TwoDoorsSection: React.FC = () => {
  const { t, ready } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  if (!ready) return null;

  const acquisition = t("twoDoors.acquisition", { returnObjects: true }) as DoorContent;
  const operations = t("twoDoors.operations", { returnObjects: true }) as DoorContent;

  const trackDoor = (label: string) => {
    trackCTAClick(label, "two-doors");
  };

  const doors: Array<{
    id: "acquisition" | "operations";
    icon: typeof Target;
    content: DoorContent;
    primary: boolean;
    tracking: string;
    to: string;
  }> = [
    { id: "acquisition", icon: Target, content: acquisition, primary: true, tracking: "Acquisition Door — See How", to: "/acquisition" },
    { id: "operations", icon: Cog, content: operations, primary: false, tracking: "Operations Door — See How", to: "/operations" },
  ];

  return (
    <section
      id="two-doors"
      ref={sectionRef}
      className="relative py-24 md:py-32 halo-center scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="pill-tdia mb-6 mx-auto">
            {t("twoDoors.eyebrow")}
          </div>

          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>{t("twoDoors.heading")} </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#7c8aa5] leading-relaxed">
            {t("twoDoors.subheading")}
          </p>
        </div>

        {/* Two doors grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {doors.map((door, index) => {
            const Icon = door.icon;
            const c = door.content;

            return (
              <motion.article
                key={door.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="tdia-card p-7 md:p-9 flex flex-col"
              >
                {/* Top row: tile + kicker */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="tdia-tile">
                    <Icon className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <span className="micro-label !text-[10px]">
                    {c.kicker}
                  </span>
                </div>

                {/* Title */}
                <h3 className="tdia-h text-[26px] md:text-[32px] leading-[1.1] mb-3">
                  {c.title}
                </h3>

                {/* Subtitle */}
                <p className="text-[#e6ecf7]/80 text-base md:text-lg leading-relaxed mb-8">
                  {c.subtitle}
                </p>

                {/* For who */}
                <div className="mb-6">
                  <div className="micro-label mb-3">{c.forWhoLabel}</div>
                  <ul className="space-y-2">
                    {c.audiences.map((audience, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#e6ecf7]/85 text-sm md:text-base">
                        <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#4d9fff]" strokeWidth={2} />
                        <span>{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proof strip */}
                <div className="mt-auto pt-6 hairline-t">
                  <div className="micro-label mb-2">{c.proofLabel}</div>
                  <p className="text-[#e6ecf7]/90 text-sm md:text-base leading-snug mb-6">
                    {c.proof}
                  </p>

                  <Link
                    to={door.to}
                    onClick={() => trackDoor(door.tracking)}
                    className={`${door.primary ? "btn-tdia" : "btn-tdia-ghost"} w-full sm:w-auto justify-center`}
                    aria-label={c.cta}
                  >
                    {c.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Unsure fallback */}
        <div className="mt-10 md:mt-14 max-w-3xl mx-auto text-center">
          <p className="text-sm md:text-base text-[#7c8aa5] leading-relaxed">
            <span className="text-[#9ec8ff] font-medium">{t("twoDoors.unsureLabel")}</span>{" "}
            {t("twoDoors.unsureText")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoDoorsSection;
