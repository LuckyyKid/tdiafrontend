
import React from "react";
import {
  X,
  Battery,
  Zap,
  AlertTriangle,
  RefreshCw,
  Database,
  TrendingDown,
  TrendingUp,
  BarChart3,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { trackCTAClick } from '@/lib/analytics';

interface AntiFatigueCreativeEngineModalContentProps {
  onClose: () => void;
}

const AntiFatigueCreativeEngineModalContent: React.FC<
  AntiFatigueCreativeEngineModalContentProps
> = ({ onClose }) => {

  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'anti_fatigue_creative_engine_modal');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  
  return (
    /* ——— Mobile-optimized outer wrapper ——— */
    <div className="relative w-full max-w-[100vw] h-[90vh] max-h-screen overflow-y-auto rounded-xl bg-gradient-to-br from-[#10112b] to-[#0a0b1d] text-white mx-2 sm:mx-4">
      
      {/* ——— Whole page inside ScrollArea ——— */}
      <ScrollArea className="h-full">
        {/* ███ Header ███ */}
        <header className="border-b border-fuchsia-900/20 px-4 sm:px-6 md:px-12 pb-4 sm:pb-6 pt-16 sm:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-pink-600">
                <Battery className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h1 className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent leading-tight">
                Anti‑Fatigue Creative Engine™
              </h1>
            </div>

            <p className="mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl text-white/90">
              Your ads don't have to die after 10 days.
            </p>

            <div className="mb-4 sm:mb-6 rounded-lg border border-fuchsia-500/20 bg-gradient-to-r from-fuchsia-900/20 to-pink-900/20 p-3 sm:p-4 backdrop-blur-sm">
              <p className="italic text-base sm:text-lg text-white/80">
                "We spend a lot, but it feels like we're trapped in the
                algorithm."
              </p>
            </div>

            {/* — Battery visual — */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex h-12 w-24 sm:h-16 sm:w-32 items-center justify-center rounded-lg border-2 border-white/30">
                  <div className="h-6 w-16 sm:h-8 sm:w-24 rounded bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-60" />
                </div>
                <div className="absolute -right-1 sm:-right-2 top-1/2 h-4 w-1 sm:h-6 sm:w-2 -translate-y-1/2 rounded-r bg-white/30" />
                <p className="mt-2 text-center text-xs sm:text-sm text-white/70">
                  Creative Energy
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ███ Modules ███ */}
        <main className="mx-auto max-w-6xl space-y-8 sm:space-y-12 px-4 sm:px-6 md:px-12 py-6 sm:py-8">
          {/* ── Module 1 — Creative Decay Radar ── */}
          <section className="rounded-xl border border-red-500/20 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm p-4 sm:p-6 md:p-8">
            {/* header row */}
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 sm:mb-2 text-xl sm:text-2xl font-bold text-white">
                  Creative Decay Radar™
                </h3>
                <p className="mb-2 sm:mb-4 text-base sm:text-lg text-white/80">Real‑Time Fatigue Detection</p>
              </div>
            </div>

            <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">What it is:</h4>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base text-white/90 leading-relaxed">
              An AI‑powered system that tracks ad‑decay signals like Hook Rate,
              Hold Rate, CTR, CPM, and ROAS. It alerts the team when performance
              drops below custom thresholds.
            </p>

            <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">
              Example triggers:
            </h4>
            <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4">
                <TrendingDown className="mb-2 h-4 w-4 sm:h-5 sm:w-5 text-red-400" />
                <p className="text-xs sm:text-sm text-white/90">
                  Hook Rate drops 20 % in 3 days
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4">
                <TrendingUp className="mb-2 h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                <p className="text-xs sm:text-sm text-white/90">CPM rises +15 %</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4">
                <BarChart3 className="mb-2 h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                <p className="text-xs sm:text-sm text-white/90">CTR falls below 1.2 %</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 sm:space-y-3">
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it worth it:</strong> Detect decay before it kills
                  performance
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it faster:</strong> Automatic alerts = no more
                  reactive testing
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it easier:</strong> Clear fatigue indicators, no
                  guesswork
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it enjoyable:</strong> Creatives replace
                  seamlessly, without panic
                </p>
              </div>
            </div>
          </section>

          {/* ── Module 2 — Creative Flight Mode ── */}
          <section className="rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-4 sm:p-6 md:p-8">
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                <RefreshCw className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 sm:mb-2 text-xl sm:text-2xl font-bold text-white">
                  Creative Flight Mode™
                </h3>
                <p className="mb-2 sm:mb-4 text-base sm:text-lg text-white/80">Anti‑Fatigue Planning System</p>
              </div>
            </div>

            <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">What it is:</h4>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base text-white/90 leading-relaxed">
              A system to pre‑plan creatives for rotation before fatigue hits.
              It leverages a creative calendar and Hook Decay Rate analysis.
            </p>

            <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">
              How it works:
            </h4>
            <div className="mb-4 sm:mb-6 rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4">
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-white/90">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400" />
                  Creatives are grouped by angle and scored after 48 h:
                  Scalable / Retry / Kill
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-400" />
                  Auto‑replacement triggers new creative injection before the
                  CPA spike
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-400" />
                  Feels like a rhythm: creative → rotate → refresh → scale
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 sm:space-y-3">
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it worth it:</strong> No more CPA spikes
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it faster:</strong> No delay between drop and
                  reaction
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it easier:</strong> Data replaces fatigue guesses
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it enjoyable:</strong> Founder sees ads breathing
                  = regained trust
                </p>
              </div>
            </div>
          </section>

          {/* ── Module 3 — Creative Bank with Auto‑Swap ── */}
          <section className="rounded-xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 backdrop-blur-sm p-4 sm:p-6 md:p-8">
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500">
                <Database className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 sm:mb-2 text-xl sm:text-2xl font-bold text-white">
                  Creative Bank with Auto‑Swap™
                </h3>
                <p className="mb-2 sm:mb-4 text-base sm:text-lg text-white/80">Ready‑to‑Go Creative Vault</p>
              </div>
            </div>

            <h4 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">What it is:</h4>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-white/90 leading-relaxed">
              A creative vault of pre‑approved, ready‑to‑go ads (minimum 5 at all
              times). When an ad starts decaying, a single button swaps it with a
              fresh one.
            </p>

            <div className="mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                "Works manually or automatically",
                "Supports seasonality (Q4, sales, etc.)",
                'Prevents reliance on "one‑hit wonders"',
              ].map((text, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-white/10 bg-black/20 p-3 sm:p-4 text-center"
                >
                  <div className="mx-auto mb-2 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-500">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-xs sm:text-sm text-white/90">{text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 sm:space-y-3">
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it worth it:</strong> No production delays or
                  bottlenecks
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it faster:</strong> One click = ad replaced
                </p>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it easier:</strong> No waiting for new creative
                </p>
                <p className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/90">
                  <strong>Make it enjoyable:</strong> Feels proactive, not
                  chaotic
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ███ CTA footer (scrolls into view) ███ */}
        <footer className="border-t border-fuchsia-500/20 bg-gradient-to-t from-fuchsia-900/30 to-pink-900/30 px-4 sm:px-6 md:px-12 py-8 sm:py-12 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 sm:mb-4 text-base sm:text-lg text-white/90">
              Stop letting creative fatigue kill your profitable ads.
            </p>
            <Button onClick={handleCTAClick} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white shadow-lg transition-colors hover:from-fuchsia-700 hover:to-pink-700 min-h-[44px]">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              Prevent Creative Burnout
            </Button>
          </div>
        </footer>
      </ScrollArea>
    </div>
  );
};

export default AntiFatigueCreativeEngineModalContent;
