
import React from "react";
import { motion } from "framer-motion";
import {
  X,
  BarChart3,
  TrendingUp,
  DollarSign,
  Clock,
  Activity,
  Brain,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { trackCTAClick } from '@/lib/analytics';

interface GrowthOSModalContentProps {
  onClose: () => void;
}

const GrowthOSModalContent: React.FC<GrowthOSModalContentProps> = ({
  onClose,
}) => {
  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'growth_os_modal');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    /* ——— Outer wrapper scrolls ——— */
    <div className="relative h-[90vh] max-h-screen overflow-y-auto rounded-xl bg-gradient-to-br from-[#10112b] to-[#0a0b1d] text-white">
      {/* ——— Close button ——— */}


      {/* ——— ScrollArea wraps EVERYTHING (header → footer) ——— */}
      <ScrollArea className="h-full">
        {/* ███ Header ███ */}
        <header className="border-b border-white/10 px-6 pb-12 pt-20 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-8 max-w-5xl text-center"
          >
            {/* icon + pulse */}
            <div className="mb-6 flex items-center justify-center">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-purple-500/25">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
                  <Activity className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Growth OS™
            </h1>

            <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">
              Never run your business on emotions again. Centralize every key
              metric, margin insight, and growth decision in one intelligent
              command center.
            </p>

            {/* Dashboard preview */}
            <div className="mx-auto max-w-5xl">
              <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-lg">
                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {/* MER card */}
                  <div className="rounded-lg border border-green-500/30 bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-green-300">
                        MER
                      </span>
                      <TrendingUp className="h-4 w-4 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold">3.2x</div>
                    <div className="text-xs text-green-400">↑ 12 % vs last month</div>
                  </div>

                  {/* LTV card */}
                  <div className="rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-300">
                        LTV
                      </span>
                      <DollarSign className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold">$247</div>
                    <div className="text-xs text-blue-400">↑ 8 % vs last month</div>
                  </div>

                  {/* Margin card */}
                  <div className="rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-300">
                        Margin
                      </span>
                      <BarChart3 className="h-4 w-4 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold">24.5 %</div>
                    <div className="text-xs text-purple-400">Target 25 %</div>
                  </div>
                </div>

                {/* bar graph stub */}
                <div className="flex justify-center">
                  <div className="flex space-x-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 w-2 rounded-full ${
                          i < 4
                            ? "bg-gradient-to-t from-blue-500 to-purple-500"
                            : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </header>

        {/* ███ Main content (modules) ███ */}
        <main className="mx-auto max-w-7xl space-y-12 px-6 py-12 md:px-8 lg:px-12">
          {/* 3‑column module grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Insight Dashboard */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-lg transition-colors duration-300 hover:border-blue-500/40 md:p-8">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-300">
                    Visibility Problem
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold">Insight Dashboard™</h3>
                <p className="mb-4 text-lg font-medium text-blue-200">
                  6 live KPIs that actually matter — profit clarity, no fluff.
                </p>
                <p className="mb-6 leading-relaxed text-white/70">
                  Real‑time MER, ROAS, LTV, margin, stock levels, and creative
                  winners. Smart alerts when metrics drift outside targets.
                </p>

                {/* mini viz */}
                <div className="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 p-4">
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div>
                      <div className="text-sm text-blue-300">ROAS</div>
                      <div className="font-bold">4.2x</div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-300">Stock</div>
                      <div className="font-bold">89 %</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Growth Command Center */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-lg transition-colors duration-300 hover:border-green-500/40 md:p-8">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
                    Cash Flow Chaos
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold">
                  Growth Command Center™
                </h3>
                <p className="mb-4 text-lg font-medium text-green-200">
                  Margin, LTV, and cashflow in one view — decide like a CFO.
                </p>
                <p className="mb-6 leading-relaxed text-white/70">
                  Unit economics, profit margins, and cash runway calculations.
                  See exactly where every dollar flows.
                </p>

                <div className="rounded-lg border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-300">
                        Gross Margin
                      </span>
                      <span className="font-bold">67 %</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-300">
                        Cash Runway
                      </span>
                      <span className="font-bold">4.2 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Business Pulse Sync */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="h-full rounded-2xl border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-lg transition-colors duration-300 hover:border-purple-500/40 md:p-8">
                <div className="mb-4 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-300">
                    Reactive Management
                  </span>
                </div>

                <h3 className="mb-3 text-2xl font-bold">
                  Business Pulse Sync™
                </h3>
                <p className="mb-4 text-lg font-medium text-purple-200">
                  Weekly strategic check‑ins that keep you ahead of problems.
                </p>
                <p className="mb-6 leading-relaxed text-white/70">
                  Automated health reports, trend alerts, and strategic
                  recommendations delivered every Monday.
                </p>

                <div className="rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                      <span className="text-sm text-purple-300">Health</span>
                    </div>
                    <span className="font-bold">94 / 100</span>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Bonus module */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <div className="rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-6 backdrop-blur-lg md:p-8">
              <div className="mb-6 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="mb-2 inline-block rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-300">
                    Bonus Module
                  </span>
                  <h3 className="text-xl font-bold">Growth Driver ID™</h3>
                </div>
              </div>

              <p className="mb-4 font-medium text-amber-200">
                Automatically identify which lever to pull next for maximum
                impact.
              </p>
              <p className="leading-relaxed text-white/70">
                AI‑powered metric analysis recommends whether to focus on
                creative refresh, budget increase, or funnel optimization.
              </p>
            </div>
          </motion.section>

          {/* Result block */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              The Result
            </h2>
            <div className="mx-auto max-w-4xl rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 backdrop-blur-lg">
              <p className="mb-4 text-2xl font-semibold">
                <span className="text-green-400">Less than 10 minutes</span>{" "}
                each week to validate performance
              </p>
              <p className="text-xl text-white/80">
                Everything else runs on autopilot with smart alerts only when
                action is needed.
              </p>
            </div>
          </motion.section>
        </main>

        {/* ███ CTA footer ███ */}
        <footer className="border-t border-white/10 bg-gradient-to-t from-black/50 to-black/30 px-6 py-12 backdrop-blur-lg md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-lg text-white/80">
              Ready to run your business with data, not emotions?
            </p>
            <Button
              onClick={handleCTAClick}
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/25 transition-transform duration-300 hover:from-indigo-600 hover:to-purple-700 hover:scale-105"
            >
              Activate Growth OS™
            </Button>
          </div>
        </footer>
      </ScrollArea>
    </div>
  );
};

export default GrowthOSModalContent;
