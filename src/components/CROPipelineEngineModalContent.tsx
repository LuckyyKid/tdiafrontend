import React from "react";
import {
  X,
  Brain,
  Lightbulb,
  Zap,
  TrendingDown,
  ArrowRight,
  Check,
  Target,
  BarChart3,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { trackCTAClick } from '@/lib/analytics';

interface CROPipelineEngineModalContentProps {
  onClose: () => void;
}

const CROPipelineEngineModalContent: React.FC<CROPipelineEngineModalContentProps> = ({ onClose }) => {
  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'cro_pipeline_engine_modal');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const modules = [
    {
      id: 1,
      icon: Brain,
      title: "Test & Learn Protocol™",
      subtitle: "Hypothesis-driven testing system",
      description:
        "A system that starts every test with a hypothesis, tracks results, and logs conclusions in a structured dashboard.",
      benefits: [
        { icon: Target, title: "Make it worth it", description: 'Every test starts with a hypothesis like: "This emotional angle will boost CTR for women aged 30‑45." At the end: validated or rejected → the client learns with us.' },
        { icon: Zap, title: "Make it faster", description: "GPT suggests hypotheses based on audience + hook." },
        { icon: Check, title: "Make it easier", description: "Everything is logged in a board (Notion, Airtable, etc.): [Tested] [Validated] [Iterate] [Kill]" },
        { icon: Users, title: "Make it believable", description: "Every week, the client sees your growing knowledge base = compounding trust." },
      ],
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Hypothesis Builder™",
      subtitle: "Intelligent test idea generator",
      description:
        "An intelligent test idea generator based on cognitive biases + analytics.",
      benefits: [
        { icon: Target, title: "Make it worth it", description: 'Every test has a real strategic logic: "If X, then Y, because Z."' },
        { icon: Check, title: "Make it easier", description: "Client selects: the page, the KPI to improve (CVR, AOV, bounce, etc.), system proposes 3 ready‑to‑test hypotheses" },
        { icon: Zap, title: "Make it faster", description: "Pre‑filled: hypothesis + variation + tracked KPI = launch‑ready in < 30 minutes" },
        { icon: Users, title: "Make it enjoyable", description: "Client feels smarter → it's not just A/B testing, it's business learning" },
      ],
    },
    {
      id: 3,
      icon: BarChart3,
      title: "SmartHeat™",
      subtitle: "Automated Heatmap + Friction Summary",
      description:
        "A visual report showing what's blocking users (ghost clicks, ignored zones, scroll drops).",
      benefits: [
        { icon: Target, title: "Make it worth it", description: "You see exactly where users drop off or get frustrated." },
        { icon: Check, title: "Make it easier", description: "Auto‑connects to Shopify or GA — auto‑maps pages." },
        { icon: Zap, title: "Make it faster", description: 'Weekly visual synthesis + test suggestions (e.g. "CTA too low → move 200 px up and retest mobile version")' },
        { icon: Users, title: "Make it enjoyable", description: 'Instant "aha" moments: "we\'re leaking money here!"' },
      ],
    },
    {
      id: 4,
      icon: TrendingDown,
      title: "FunnelDrop™",
      subtitle: "Visual Conversion Map",
      description:
        "A dynamic funnel visual that shows where people drop off — from landing → PDP → cart → checkout → purchase.",
      benefits: [
        { icon: Target, title: "Make it worth it", description: "ROAS doesn't tell the full story. This shows the internal friction points." },
        { icon: Check, title: "Make it easier", description: "Auto‑connects with Shopify, GA4, Meta. No dev work required." },
        { icon: Zap, title: "Make it faster", description: "Sends alerts when one step suddenly underperforms (e.g. cart → checkout drop of ‑28 %)" },
        { icon: Users, title: "Make it enjoyable", description: "CEO‑level decisions in 2 clicks. No more guessing. Just data → action." },
      ],
    },
  ];

  return (
    <div className="relative w-full h-full max-h-[90vh] overflow-hidden bg-[#060910] text-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-[#060910]/90 backdrop-blur-xl hairline-b px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="tdia-tile">
              <Brain className="h-4 w-4" strokeWidth={1.6} />
            </div>
            <h2 className="tdia-h text-lg">
              CRO <span className="serif">Pipeline Engine</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 hairline hover:bg-white/[0.04] transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <ScrollArea className="h-[calc(90vh-72px)]">
        {/* Hero */}
        <section className="px-6 md:px-10 pt-14 pb-10 halo-top relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="pill-tdia inline-flex mb-6">CRO PIPELINE ENGINE™</div>
            <h1 className="tdia-h text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-4">
              A pretty site ≠ a <span className="serif">profitable</span> one.
            </h1>
            <div className="hairline rounded-xl px-5 py-4 bg-white/[0.02] mt-6">
              <p className="italic text-base md:text-lg text-[#e6ecf7]/85">
                "We run tests with no hypothesis, and no real conclusions."
              </p>
            </div>
          </motion.div>
        </section>

        {/* Modules */}
        <main className="space-y-6 px-6 md:px-10 pb-10 max-w-6xl mx-auto">
          {modules.map((module, i) => (
            <motion.section
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="tdia-card p-7 md:p-8"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="flex items-start gap-4 min-w-0">
                  <div className="tdia-tile flex-shrink-0">
                    <module.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="tdia-h text-xl md:text-2xl leading-tight">
                      {module.title}
                    </h3>
                    <p className="text-[#9ec8ff] text-sm mt-1">
                      {module.subtitle}
                    </p>
                  </div>
                </div>
                <span className="font-mono-tdia text-sm text-[#7c8aa5] flex-shrink-0">
                  {String(module.id).padStart(2, '0')}
                </span>
              </div>

              <p className="text-[#7c8aa5] text-sm md:text-base leading-relaxed mb-6">
                {module.description}
              </p>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {module.benefits.map((b, j) => (
                  <div key={j} className="hairline rounded-xl bg-white/[0.02] p-4">
                    <div className="flex items-start gap-3">
                      <div className="tdia-tile flex-shrink-0 !h-8 !w-8">
                        <b.icon className="h-3.5 w-3.5" strokeWidth={1.6} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-sm md:text-base font-semibold text-white mb-1.5">
                          {b.title}
                        </h4>
                        <p className="text-xs md:text-sm leading-relaxed text-[#7c8aa5]">
                          {b.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Result block */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="tdia-card p-8 md:p-10 text-center"
          >
            <div className="micro-label mb-3">BUSINESS RESULT</div>
            <h3 className="tdia-h text-xl md:text-2xl mb-3">
              CRO roadmap prioritized by <span className="serif">net impact</span> on profit
            </h3>
            <p className="text-[#7c8aa5] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              No more guessing — just systematic conversion optimization.
            </p>
          </motion.section>
        </main>

        {/* CTA footer */}
        <footer className="hairline-t bg-[#060910] px-6 md:px-10 py-8">
          <div className="max-w-6xl mx-auto">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={handleCTAClick}
              className="btn-tdia w-full justify-center"
            >
              <span>Implement CRO Pipeline Engine</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </footer>
      </ScrollArea>
    </div>
  );
};

export default CROPipelineEngineModalContent;
