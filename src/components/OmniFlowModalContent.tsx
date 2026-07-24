import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Target,
  Zap,
  PlayCircle,
  Mail,
  Search,
  Youtube,
  Eye,
  MousePointer,
  DollarSign,
  Boxes,
  X,
} from "lucide-react";
import { trackCTAClick, trackMetaEvent } from '@/lib/analytics';

interface OmniFlowModalContentProps {
  onClose: () => void;
}

const OmniFlowModalContent: React.FC<OmniFlowModalContentProps> = ({
  onClose,
}) => {


const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'omni_flow_modal');
    trackMetaEvent('Lead', {
      content_name: 'OmniFlow Multi-Channel System',
      content_category: 'Modal CTA',
    });
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };


  
  return (
    /* ——— Outer wrapper scrolls ——— */
    <div className="relative h-[90vh] max-h-screen overflow-y-auto rounded-xl bg-gradient-to-br from-[#0a0b1d] via-[#1a1b2e] to-[#16213e] text-white">
      {/* Close button */}


      {/* Header + modules + CTA all scroll together */}
      <ScrollArea className="h-full">
        {/* ███ Header ███ */}
        <header className="border-b border-white/10 px-6 pb-8 pt-20 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2">
              <Boxes className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Multi‑Channel Engine
              </span>
            </div>

            <h1 className="mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              OmniFlow™
            </h1>

            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-300 md:text-2xl">
              Never depend on one platform again. Sync Meta, Google, TikTok &
              Email in one streamlined system.
            </p>

            {/* flow diagram */}
            <div className="relative mx-auto max-w-5xl">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                {[
                  {
                    name: "Meta",
                    color: "from-blue-500 to-blue-600",
                    icon: Target,
                  },
                  {
                    name: "YouTube",
                    color: "from-red-500 to-red-600",
                    icon: Youtube,
                  },
                  {
                    name: "TikTok",
                    color: "from-pink-500 to-purple-600",
                    icon: PlayCircle,
                  },
                  {
                    name: "Email",
                    color: "from-green-500 to-emerald-600",
                    icon: Mail,
                  },
                  {
                    name: "Search",
                    color: "from-yellow-500 to-orange-600",
                    icon: Search,
                  },
                ].map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} shadow-lg shadow-black/30`}
                    >
                      <p.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-sm text-gray-400">{p.name}</span>
                    {i < 4 && (
                      <ArrowRight className="mt-2 hidden h-4 w-4 text-cyan-400 md:block" />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* central hub */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm">
                  <Zap className="h-12 w-12 animate-pulse text-cyan-400" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </header>

        {/* ███ Modules ███ */}
        <main className="space-y-12 px-6 py-12 md:px-8">
          <div className="space-y-8">
            {/* Evergreen Retargeting Stack */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 hover:border-green-500/40 transition-all"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                {/* text */}
                <div className="flex-1">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1">
                    <Target className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-green-300">
                      Retargeting inefficiencies
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                    Evergreen Retargeting Stack™
                  </h3>
                  <p className="mb-4 text-xl font-medium text-green-100">
                    Every click becomes a synchronized cross‑channel follow‑up.
                  </p>
                  <p className="leading-relaxed text-gray-300">
                    Trigger YouTube, email, and TikTok retargeting based on real
                    user actions — like video views, scroll depth, or PDP
                    behavior.
                  </p>
                </div>

                {/* mini flow */}
                <div className="hidden min-w-[300px] md:block">
                  <div className="space-y-3">
                    {[
                      {
                        action: "View Ad 75 %",
                        trigger: "YouTube Ad",
                        icon: Eye,
                      },
                      {
                        action: "Scroll PDP",
                        trigger: "Email Flow",
                        icon: MousePointer,
                      },
                      {
                        action: "Add to Cart",
                        trigger: "TikTok Video",
                        icon: PlayCircle,
                      },
                    ].map((f, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + j * 0.2 }}
                        className="flex items-center gap-3 rounded-lg bg-black/20 p-3"
                      >
                        <f.icon className="h-4 w-4 text-green-400" />
                        <span className="text-sm">{f.action}</span>
                        <ArrowRight className="h-3 w-3 text-green-400" />
                        <span className="text-sm text-green-300">
                          {f.trigger}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Break Glass Plan */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 hover:border-red-500/40 transition-all"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1">
                    <Shield className="h-4 w-4 text-red-400" />
                    <span className="text-sm text-red-300">
                      Meta account blocked?
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                    Break Glass Plan (48 h Recovery)
                  </h3>
                  <p className="mb-4 text-xl font-medium text-red-100">
                    If Meta crashes, your growth doesn’t.
                  </p>
                  <p className="leading-relaxed text-gray-300">
                    Pre‑loaded YouTube scripts, search campaigns, and email
                    flows launch within 48 h. Stay live — no panic.
                  </p>
                </div>

                {/* emergency visual */}
                <div className="relative hidden min-w-[300px] md:block">
                  <div className="flex h-32 w-48 items-center justify-center rounded-xl border-2 border-dashed border-red-500/40 bg-gradient-to-br from-red-600/20 to-orange-600/20">
                    <div className="text-center">
                      <Shield className="mx-auto mb-2 h-8 w-8 text-red-400" />
                      <span className="text-sm font-medium text-red-300">
                        Emergency Kit
                      </span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                    <Youtube className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-4 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500">
                    <Search className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Funnel Simulator */}
            <motion.section
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 hover:border-purple-500/40 transition-all"
            >
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex-1">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-3 py-1">
                    <DollarSign className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-purple-300">
                      Unclear channel ROI
                    </span>
                  </div>
                  <h3 className="mb-3 text-2xl font-bold md:text-3xl">
                    Funnel Simulator™
                  </h3>
                  <p className="mb-4 text-xl font-medium text-purple-100">
                    Visually simulate the revenue impact of every new channel.
                  </p>
                  <p className="leading-relaxed text-gray-300">
                    See projected ROI by dragging in TikTok, email or Google —
                    then deploy only what works.
                  </p>
                </div>

                {/* drag cards */}
                <div className="hidden min-w-[300px] space-y-2 md:block">
                  {[
                    {
                      platform: "TikTok",
                      roi: "+$2.8 K",
                      color: "from-pink-500 to-purple-500",
                    },
                    {
                      platform: "Email",
                      roi: "+$1.2 K",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      platform: "Google",
                      roi: "+$3.1 K",
                      color: "from-blue-500 to-cyan-500",
                    },
                  ].map((c, k) => (
                    <motion.div
                      key={k}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + k * 0.1 }}
                      className={`flex cursor-pointer items-center justify-between rounded-lg bg-gradient-to-r ${c.color} p-3 transition-transform hover:scale-105`}
                    >
                      <span className="font-medium">{c.platform}</span>
                      <span className="font-bold">{c.roi}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </main>

        {/* ███ CTA footer ███ */}
        <footer className="border-t border-white/10 bg-gradient-to-t from-black/80 to-transparent px-6 py-12 backdrop-blur-sm md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-6 text-lg text-gray-300">
              Let’s make your growth platform‑proof 
            </p>
            <Button
              size="lg"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-cyan-500/25 transition-transform duration-300 hover:from-cyan-600 hover:to-blue-700 hover:scale-105"
              onClick={handleCTAClick}
            >
              Activate OmniFlow™
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </footer>
      </ScrollArea>
    </div>
  );
};

export default OmniFlowModalContent;
