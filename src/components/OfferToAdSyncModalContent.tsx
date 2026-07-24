import React from "react";
import {
  X,
  Plug,
  Puzzle,
  Zap,
  FileText,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { trackCTAClick, trackMetaEvent } from '@/lib/analytics';

interface OfferToAdSyncModalContentProps {
  onClose: () => void;
}

const OfferToAdSyncModalContent: React.FC<
  OfferToAdSyncModalContentProps
> = ({ onClose }) => {
  /* ——— Data ——— */
  const solutionBlocks = [
    {
      id: 1,
      title: "Dynamic Mirror Page™",
      description: "Auto‑generates LP based on ad hook (H1, visual, CTA)",
      icon: Plug,
      gradient: "from-green-500/10 to-emerald-500/10",
      benefits: [
        {
          icon: "",
          title: "Make it Worth It",
          desc: "Cognitive alignment = higher trust",
        },
        { icon: "", title: "Make it Faster", desc: "Generated in < 5 min" },
        { icon: "", title: "Make it Easier", desc: "No designer brief needed" },
        {
          icon: "",
          title: "Make it Enjoyable",
          desc: "Feels like a seamless brand journey",
        },
      ],
    },
    {
      id: 2,
      title: "Hook‑to‑Page Sync™",
      description:
        "UTM‑based system that loads modular LP sections based on ad ID (?hookid=XYZ)",
      icon: Puzzle,
      gradient: "from-cyan-500/10 to-blue-500/10",
      benefits: [
        {
          icon: "",
          title: "Make it Worth It",
          desc: "User sees what they expected",
        },
        {
          icon: "",
          title: "Make it Faster",
          desc: "1‑day setup, infinitely scalable",
        },
        {
          icon: "",
          title: "Make it Easier",
          desc: "One modular LP replaces 10 separate ones",
        },
        {
          icon: "",
          title: "Make it Enjoyable",
          desc: "Hyper‑personalized experience",
        },
      ],
    },
    {
      id: 3,
      title: "Smart Continuity Prompt™",
      description:
        'Adds a "bridge line" at the end of video ads: "Want to see how it really works? I\'ll show you on the next page."',
      icon: Zap,
      gradient: "from-purple-500/10 to-pink-500/10",
      benefits: [
        { icon: "", title: "Make it Worth It", desc: "Teases the LP content" },
        {
          icon: "",
          title: "Make it Faster",
          desc: "Less micro‑decisions = more flow",
        },
        {
          icon: "",
          title: "Make it Easier",
          desc: "Preps the brain = less bounce",
        },
        {
          icon: "",
          title: "Make it Enjoyable",
          desc: "Feels intentional and smooth",
        },
      ],
    },
    {
      id: 4,
      title: "Narrative Match Framework™",
      description: "Maps ads and landings into a 3‑act story arc",
      icon: FileText,
      gradient: "from-orange-500/10 to-red-500/10",
      storyArc: [
        { act: "1", ad: "Pain/Problem", landing: "Headline" },
        { act: "2", ad: "Solution/Proof", landing: "UGC / Social Proof" },
        { act: "3", ad: "Transformation", landing: "Benefit stack + CTA" },
      ],
      impact:
        "Customer understands where they are in the story and why they should stay",
    },
  ];

  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'offer_to_ad_sync_modal');
    trackMetaEvent('Lead', {
      content_name: 'Offer to Ad Sync Framework',
      content_category: 'Modal CTA',
    });
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  /* ——— JSX ——— */
  return (
    <div className="relative h-[90vh] max-h-screen overflow-y-auto rounded-xl bg-gradient-to-br from-[#10112b] to-[#0a0b1d] text-white">
      {/* Close button */}


      {/* Header + blocks + CTA all scroll together */}
      <ScrollArea className="h-full">
        {/* ███ Header ███ */}
        <header className="relative border-b border-white/10 bg-gradient-to-br from-green-400/20 to-cyan-400/20 px-8 pb-12 pt-20 text-center">
          {/* faint wireframe pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="flex h-full w-full items-center justify-center">
              <div className="grid h-40 w-80 grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`rounded border border-white/30 ${
                      i === 4 ? "border-dashed border-red-400/50" : "bg-white/5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Offer‑to‑Ad Sync Framework™
            </h1>
            <p className="mb-6 text-xl text-green-300 md:text-2xl">
              Bridge the gap between ad promises and on‑site proof.
            </p>
            <div className="mx-auto max-w-2xl rounded-lg border border-red-500/20 bg-red-500/10 p-4">
              <p className="italic text-lg text-red-200">
                "The ad says one thing… but the page doesn’t deliver."
              </p>
            </div>
          </motion.div>
        </header>

        {/* ███ Solution blocks ███ */}
        <main className="space-y-12 px-8 py-12">
          {solutionBlocks.map((b, i) => (
            <motion.section
              key={b.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${b.gradient} backdrop-blur-sm p-8`}
            >
              <div className="flex items-start gap-6">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/10">
                  <b.icon className="h-8 w-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                    {b.title}
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-white/80">
                    {b.description}
                  </p>

                  {/* benefits (blocks 1‑3) */}
                  {"benefits" in b && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {b.benefits!.map((ben, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 rounded-lg bg-white/5 p-4"
                        >
                          <span className="text-2xl">{ben.icon}</span>
                          <div>
                            <h4 className="mb-1 font-semibold text-white">
                              {ben.title}
                            </h4>
                            <p className="text-sm text-white/70">{ben.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* story‑arc table (block 4) */}
                  {"storyArc" in b && (
                    <div className="space-y-6">
                      <div className="rounded-lg bg-white/5 p-6">
                        <h4 className="mb-4 text-lg font-semibold text-white">
                          3‑Act Story Mapping
                        </h4>
                        <div className="space-y-3">
                          {b.storyArc!.map((row, k) => (
                            <div
                              key={k}
                              className="flex items-center gap-4 rounded bg-white/5 p-3"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-sm font-bold text-white">
                                {row.act}
                              </div>
                              <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                  <span className="text-sm font-medium text-orange-300">
                                    Ad:
                                  </span>
                                  <p className="text-white">{row.ad}</p>
                                </div>
                                <div>
                                  <span className="text-sm font-medium text-cyan-300">
                                    Landing:
                                  </span>
                                  <p className="text-white">{row.landing}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-4">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-6 w-6 text-green-400" />
                          <p className="font-medium text-white">
                             Impact: {b.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          ))}
        </main>

        {/* ███ CTA footer ███ */}
        <footer className="border-t border-white/10 bg-gradient-to-t from-green-600/20 to-cyan-600/20 px-8 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-6 text-2xl font-bold md:text-3xl">
              Fix the disconnect between ads and site.
            </h3>
            <p className="mb-8 text-xl text-green-300">Unlock 25–40 % more CVR</p>
            <button
              onClick={handleCTAClick}
              className="mx-auto flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:from-green-600 hover:to-cyan-600 hover:scale-105"
            >
              <span>Activate Offer‑to‑Ad Sync™</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </footer>
      </ScrollArea>
    </div>
  );
};

export default OfferToAdSyncModalContent;
