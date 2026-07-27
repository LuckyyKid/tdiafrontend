import React from 'react';
import {
  X,
  ArrowRight,
  Check,
  Gauge,
  Zap,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Lightbulb,
  LineChart,
  Target,
  Archive,
  CalendarClock,
  Layers,
  Search,
  Brain,
  Activity,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { trackCTAClick } from '@/lib/analytics';

interface CreativeScoringModalContentProps {
  onClose: () => void;
}

const CreativeScoringModalContent: React.FC<CreativeScoringModalContentProps> = ({ onClose }) => {
  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'creative_scoring_modal');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const CheckDot = () => (
    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#4d9fff]/15 border border-[#4d9fff]/30 flex-shrink-0">
      <Check className="w-2.5 h-2.5 text-[#9ec8ff]" strokeWidth={3} />
    </span>
  );

  const StatusPill: React.FC<{ label: string; winner?: boolean; muted?: boolean }> = ({
    label,
    winner = false,
    muted = false,
  }) => (
    <span
      className={
        'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono-tdia tracking-[0.18em] uppercase hairline ' +
        (winner
          ? 'bg-[#4d9fff]/10 text-[#9ec8ff]'
          : muted
          ? 'bg-white/[0.02] text-[#7c8aa5]'
          : 'bg-white/[0.05] text-[#e6ecf7]')
      }
    >
      {winner && <span className="h-1.5 w-1.5 rounded-full bg-[#4d9fff]" />}
      {label}
    </span>
  );

  const scoreClass = (tier: 'high' | 'mid' | 'low') =>
    tier === 'high'
      ? 'text-[#9ec8ff]'
      : tier === 'mid'
      ? 'text-[#e6ecf7]/70'
      : 'text-[#7c8aa5]';

  return (
    <div className="w-full h-full bg-[#060910] text-white">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-[#060910]/90 backdrop-blur-xl hairline-b px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="tdia-tile">
              <Gauge className="h-4 w-4" strokeWidth={1.6} />
            </div>
            <h2 className="tdia-h text-lg">
              Creative <span className="serif">Scoring OS</span>
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
            className="max-w-4xl mx-auto text-center"
          >
            <div className="pill-tdia inline-flex mb-6">CREATIVE SCORING OS™</div>
            <h1 className="tdia-h text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-4">
              Stop launching creatives on <span className="serif">instinct</span>.
            </h1>
            <p className="text-[#9ec8ff] text-sm md:text-base font-mono-tdia mt-4">
              Creative IQ™ Scoring · Hook Rating System™ · Hook Rate First™
            </p>
            <div className="hairline rounded-xl px-5 py-4 bg-white/[0.02] mt-8 max-w-2xl mx-auto">
              <p className="italic text-base md:text-lg text-[#e6ecf7]/85">
                "I launch creatives randomly and hope for the best."
              </p>
            </div>
          </motion.div>
        </section>

        <main className="px-6 md:px-10 pb-10 max-w-6xl mx-auto space-y-8">
          {/* Section 1 — Creative IQ Scoring System */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
            className="tdia-card p-7 md:p-9"
          >
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono-tdia text-sm text-[#9ec8ff]">01</span>
              <h2 className="tdia-h text-2xl md:text-3xl">
                Creative IQ™ <span className="serif">Scoring System</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left — benefits */}
              <div className="space-y-4">
                {[
                  {
                    icon: Target,
                    title: 'How to make it worth it',
                    body:
                      'Every ad gets a weighted score based on funnel-relevant metrics (Hook Rate, Hold Rate, CTR, CR). You see the real value of each tested creative, not just surface impressions.',
                  },
                  {
                    icon: Zap,
                    title: 'How to make it faster',
                    body:
                      'Connect your campaign to a Google Sheet, Looker Studio, or API, the score is calculated automatically within 48h.',
                  },
                  {
                    icon: Sparkles,
                    title: 'How to make it easier',
                    body:
                      'A monochrome scoring system tells you exactly what to cut, scale, or improve, even non-technical CEOs get it.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'How to make it believable',
                    body:
                      'Show your top 5 performing creatives for the month with results, the method sells itself.',
                  },
                ].map((b, i) => (
                  <div key={i} className="hairline rounded-xl bg-white/[0.02] p-4">
                    <div className="flex items-start gap-3">
                      <div className="tdia-tile flex-shrink-0 !h-9 !w-9">
                        <b.icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm md:text-base font-semibold text-white mb-1.5">
                          {b.title}
                        </h4>
                        <p className="text-xs md:text-sm leading-relaxed text-[#7c8aa5]">
                          {b.body}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right — Creative IQ Score Table Mockup */}
              <div className="hairline rounded-2xl bg-white/[0.02] overflow-hidden">
                <div className="hairline-b px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <BarChart3 className="h-4 w-4 text-[#9ec8ff]" strokeWidth={1.6} />
                    <span className="text-sm text-white font-medium">Creative IQ™ Score</span>
                  </div>
                  <span className="micro-label">UPDATED · TODAY</span>
                </div>

                <div className="grid grid-cols-7 gap-2 px-4 py-2.5 hairline-b">
                  <div className="col-span-2 micro-label">CREATIVE</div>
                  <div className="micro-label">HOOK</div>
                  <div className="micro-label">HOLD</div>
                  <div className="micro-label">CTR</div>
                  <div className="micro-label">CR</div>
                  <div className="micro-label">SCORE</div>
                </div>

                {[
                  {
                    tag: 'AD1',
                    name: 'Hero Shot 01',
                    sub: 'Lifestyle, Product',
                    hook: '48%',
                    hold: '52%',
                    ctr: '4.2%',
                    cr: '3.5%',
                    score: 93,
                    tier: 'high' as const,
                  },
                  {
                    tag: 'AD2',
                    name: 'UGC Feature',
                    sub: 'Testimonial',
                    hook: '32%',
                    hold: '47%',
                    ctr: '2.8%',
                    cr: '3.1%',
                    score: 76,
                    tier: 'mid' as const,
                  },
                  {
                    tag: 'AD3',
                    name: 'Product Demo',
                    sub: 'Features, Stats',
                    hook: '18%',
                    hold: '22%',
                    ctr: '2.1%',
                    cr: '1.4%',
                    score: 42,
                    tier: 'low' as const,
                  },
                  {
                    tag: 'AD4',
                    name: 'Problem-Solution',
                    sub: 'Pain Points',
                    hook: '41%',
                    hold: '38%',
                    ctr: '3.0%',
                    cr: '2.9%',
                    score: 81,
                    tier: 'high' as const,
                  },
                ].map((r, i, arr) => (
                  <div
                    key={i}
                    className={
                      'grid grid-cols-7 gap-2 px-4 py-3 items-center ' +
                      (i < arr.length - 1 ? 'hairline-b ' : '')
                    }
                  >
                    <div className="col-span-2 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-md hairline bg-white/[0.03] flex items-center justify-center font-mono-tdia text-[10px] text-[#9ec8ff]">
                        {r.tag}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-white truncate">{r.name}</p>
                        <p className="text-[10px] text-[#7c8aa5] truncate">{r.sub}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-mono-tdia ${scoreClass(r.tier)}`}>{r.hook}</span>
                    <span className={`text-xs font-mono-tdia ${scoreClass(r.tier)}`}>{r.hold}</span>
                    <span className={`text-xs font-mono-tdia ${scoreClass(r.tier)}`}>{r.ctr}</span>
                    <span className={`text-xs font-mono-tdia ${scoreClass(r.tier)}`}>{r.cr}</span>
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-md hairline bg-white/[0.03] font-mono-tdia text-xs ${scoreClass(
                        r.tier,
                      )}`}
                    >
                      {r.score}
                    </span>
                  </div>
                ))}

                <div className="px-4 py-3 hairline-t flex items-center justify-between text-[11px] text-[#7c8aa5]">
                  <span>Data integrated from Meta Ad Manager</span>
                  <span className="text-[#9ec8ff]">Export to CSV</span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 2 — Hook Rating System */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
            className="tdia-card p-7 md:p-9"
          >
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono-tdia text-sm text-[#9ec8ff]">02</span>
              <h2 className="tdia-h text-2xl md:text-3xl">
                Hook Rating <span className="serif">System</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left — 3 explanatory cards */}
              <div className="space-y-4">
                <div className="hairline rounded-xl bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="tdia-tile !h-9 !w-9">
                      <Lightbulb className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-white font-semibold">What It Is</h3>
                  </div>
                  <p className="text-sm text-[#7c8aa5] mb-3">
                    A dashboard view (Airtable / Notion) that scores creatives using:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      'Hook Rate (3s watch)',
                      'Hold Rate (50% completion)',
                      'Click-Through Rate (CTR)',
                      'ROAS after $1k in spend',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                        <span className="mt-0.5 font-mono-tdia text-[10px] text-[#9ec8ff] h-4 w-4 hairline rounded-full flex items-center justify-center flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hairline rounded-xl bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="tdia-tile !h-9 !w-9">
                      <LineChart className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-white font-semibold">Bonus Insights</h3>
                  </div>
                  <p className="text-sm text-[#7c8aa5] mb-3">
                    Each creative gets a cumulative score + tag:
                  </p>
                  <ul className="space-y-2.5 text-sm text-[#e6ecf7]/85">
                    <li className="flex items-center gap-3">
                      <StatusPill label="Scale" winner />
                      <span>Ready for budget expansion</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <StatusPill label="Iterate" />
                      <span>Potential with adjustments</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <StatusPill label="Kill" muted />
                      <span>Cut from budget</span>
                    </li>
                  </ul>
                </div>

                <div className="hairline rounded-xl bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="tdia-tile !h-9 !w-9">
                      <Activity className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-white font-semibold">Why It's Different</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "It's visual, actionable, and connects creatives to real business performance.",
                      'Clients can instantly tell what converts, not just what looks nice.',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                        <CheckDot />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right — Dashboard Mockup */}
              <div className="hairline rounded-2xl bg-white/[0.02] overflow-hidden">
                <div className="hairline-b px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <LineChart className="h-4 w-4 text-[#9ec8ff]" strokeWidth={1.6} />
                    <span className="text-sm text-white font-medium">Hook Rating System™</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="micro-label">DASHBOARD</span>
                  </div>
                </div>

                <div className="flex hairline-b">
                  {['Dashboard', 'Analytics', 'History'].map((t, i) => (
                    <div
                      key={t}
                      className={
                        'px-4 py-2 text-xs ' +
                        (i === 0
                          ? 'text-[#9ec8ff] border-b border-[#4d9fff]'
                          : 'text-[#7c8aa5]')
                      }
                    >
                      {t}
                    </div>
                  ))}
                </div>

                <div className="p-5">
                  {/* Status Summary */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="hairline rounded-lg p-3 bg-white/[0.02]">
                      <div className="micro-label mb-1">SCALE</div>
                      <div className="flex items-end justify-between">
                        <div className="text-2xl font-mono-tdia text-[#9ec8ff]">4</div>
                        <div className="text-[10px] text-[#e6ecf7]/70 font-mono-tdia">+2 wk</div>
                      </div>
                    </div>
                    <div className="hairline rounded-lg p-3 bg-white/[0.02]">
                      <div className="micro-label mb-1">ITERATE</div>
                      <div className="flex items-end justify-between">
                        <div className="text-2xl font-mono-tdia text-[#e6ecf7]/80">7</div>
                        <div className="text-[10px] text-[#7c8aa5] font-mono-tdia">-1 wk</div>
                      </div>
                    </div>
                    <div className="hairline rounded-lg p-3 bg-white/[0.02]">
                      <div className="micro-label mb-1">KILL</div>
                      <div className="flex items-end justify-between">
                        <div className="text-2xl font-mono-tdia text-[#7c8aa5]">2</div>
                        <div className="text-[10px] text-[#7c8aa5] font-mono-tdia">$1.2k saved</div>
                      </div>
                    </div>
                  </div>

                  {/* Creative Cards */}
                  <div className="space-y-3">
                    {[
                      {
                        type: 'VIDEO',
                        name: 'Product Walkthrough',
                        meta: 'Created 3d ago · Maria',
                        status: 'Scale' as const,
                        score: 92,
                        tier: 'high' as const,
                        metrics: { Hook: '47%', Hold: '52%', CTR: '4.8%', ROAS: '3.2x' },
                      },
                      {
                        type: 'IMAGE',
                        name: 'Before & After',
                        meta: 'Created 5d ago · John',
                        status: 'Iterate' as const,
                        score: 74,
                        tier: 'mid' as const,
                        metrics: { Hook: '38%', Hold: '45%', CTR: '3.1%', ROAS: '1.9x' },
                      },
                      {
                        type: 'VIDEO',
                        name: 'Technical Features',
                        meta: 'Created 7d ago · Alex',
                        status: 'Kill' as const,
                        score: 32,
                        tier: 'low' as const,
                        metrics: { Hook: '14%', Hold: '21%', CTR: '1.2%', ROAS: '0.7x' },
                      },
                    ].map((c, i) => (
                      <div key={i} className="hairline rounded-lg bg-white/[0.02] p-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-md hairline bg-white/[0.03] flex items-center justify-center font-mono-tdia text-[10px] text-[#9ec8ff]">
                              {c.type}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-sm text-white font-medium">{c.name}</h4>
                                <StatusPill
                                  label={c.status.toUpperCase()}
                                  winner={c.status === 'Scale'}
                                  muted={c.status === 'Kill'}
                                />
                              </div>
                              <div className="text-[10px] text-[#7c8aa5] mt-0.5">{c.meta}</div>
                            </div>
                          </div>
                          <div className={`text-2xl font-mono-tdia ${scoreClass(c.tier)}`}>
                            {c.score}
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-4 gap-2">
                          {Object.entries(c.metrics).map(([k, v]) => (
                            <div key={k} className="hairline rounded-md bg-white/[0.02] p-2">
                              <div className="text-[10px] text-[#7c8aa5] uppercase tracking-wider">
                                {k}
                              </div>
                              <div
                                className={`text-xs font-mono-tdia ${scoreClass(c.tier)}`}
                              >
                                {v}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 3 — Hook Rate First */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
            className="tdia-card p-7 md:p-9"
          >
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-mono-tdia text-sm text-[#9ec8ff]">03</span>
              <h2 className="tdia-h text-2xl md:text-3xl">
                Hook Rate First™: Prioritization <span className="serif">Logic</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left */}
              <div className="space-y-4">
                <div className="hairline rounded-xl bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="tdia-tile !h-9 !w-9">
                      <Lightbulb className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-white font-semibold">What It Is</h3>
                  </div>
                  <p className="text-sm text-[#7c8aa5] mb-3">
                    This is the opening gate of creative filtering. Every ad is scored on its
                    first few seconds.
                  </p>
                  <p className="text-sm text-[#e6ecf7]/85">
                    If viewers don't hook in the first 3 seconds, they'll never see your message.
                    Hook Rate First™ analyzes the critical opening moments and assigns immediate
                    pass/fail status.
                  </p>
                </div>

                <div className="hairline rounded-xl bg-white/[0.02] p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="tdia-tile !h-9 !w-9">
                      <Target className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-white font-semibold">Outcome</h3>
                  </div>
                  <p className="text-sm text-[#7c8aa5] mb-4">
                    You're no longer scaling the "prettiest" creatives, you're scaling the most
                    effective from second one.
                  </p>
                  <div className="hairline rounded-lg bg-white/[0.02] p-4 flex items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="micro-label mb-1">BEFORE</div>
                      <div className="text-lg font-mono-tdia text-[#e6ecf7]/70">26%</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-[#7c8aa5]" strokeWidth={1.6} />
                    <div>
                      <div className="micro-label mb-1">AFTER</div>
                      <div className="text-lg font-mono-tdia text-[#9ec8ff]">42%</div>
                    </div>
                  </div>
                  <p className="text-sm text-[#e6ecf7]/85">
                    <span className="text-[#9ec8ff] font-mono-tdia">Result:</span> 61.5% improvement
                    in initial viewer retention, leading to 28% reduction in cost per acquisition.
                  </p>
                </div>
              </div>

              {/* Right — Decision Logic */}
              <div className="hairline rounded-2xl bg-white/[0.02] overflow-hidden">
                <div className="hairline-b px-4 py-3 flex items-center gap-2.5">
                  <Brain className="h-4 w-4 text-[#9ec8ff]" strokeWidth={1.6} />
                  <span className="text-sm text-white font-medium">Hook Rate Decision Logic</span>
                </div>

                <div className="p-5 space-y-4">
                  {[
                    {
                      label: 'Kill',
                      range: 'Hook Rate < 25%',
                      pct: 25,
                      body:
                        'These ads waste budget and contribute to audience burnout. Immediate action: pause campaign.',
                      variant: 'muted' as const,
                    },
                    {
                      label: 'Iterate',
                      range: 'Hook Rate 25-40%',
                      pct: 40,
                      body:
                        'These ads show potential but need optimization. Action: modify first 3 seconds and retest.',
                      variant: 'default' as const,
                    },
                    {
                      label: 'Scale',
                      range: 'Hook Rate > 40%',
                      pct: 80,
                      body:
                        'These ads capture attention immediately. Action: increase budget by 30% weekly.',
                      variant: 'winner' as const,
                    },
                  ].map((r, i) => (
                    <div key={i} className="hairline rounded-lg bg-white/[0.02] p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-white font-medium text-sm">{r.range}</h4>
                        <StatusPill
                          label={r.label.toUpperCase()}
                          winner={r.variant === 'winner'}
                          muted={r.variant === 'muted'}
                        />
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-1.5 bg-white/[0.05] rounded-full flex-grow overflow-hidden">
                          <div
                            className={
                              'h-full rounded-full ' +
                              (r.variant === 'winner'
                                ? 'bg-[#4d9fff]'
                                : r.variant === 'default'
                                ? 'bg-[#9ec8ff]/60'
                                : 'bg-[#7c8aa5]/60')
                            }
                            style={{ width: `${r.pct}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono-tdia text-[#7c8aa5]">
                          {r.pct}%
                        </span>
                      </div>
                      <p className="text-xs text-[#7c8aa5] leading-relaxed">{r.body}</p>
                    </div>
                  ))}

                  {/* Live analysis */}
                  <div className="pt-2">
                    <h4 className="text-white font-medium text-sm mb-3 flex items-center gap-2">
                      <Activity className="h-4 w-4 text-[#9ec8ff]" strokeWidth={1.6} />
                      Live Hook Rate Analysis
                    </h4>
                    <div className="hairline rounded-lg bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs text-[#7c8aa5]">Campaign progress</div>
                        <div className="text-xs text-[#7c8aa5]">
                          Video:{' '}
                          <span className="text-[#9ec8ff] font-mono-tdia">
                            UGC_Testimonial_03
                          </span>
                        </div>
                      </div>
                      <div className="h-4 bg-white/[0.04] rounded-full mb-2 overflow-hidden relative">
                        <div
                          className="absolute top-0 left-0 h-full bg-[#4d9fff]/40"
                          style={{ width: '42%' }}
                        />
                        <div
                          className="absolute top-0 h-full w-px bg-[#9ec8ff]"
                          style={{ left: '42%' }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono-tdia">
                        <div className="text-[#7c8aa5]">0s</div>
                        <div className="text-[#e6ecf7]/85">
                          Hook Rate: <span className="text-[#9ec8ff]">42%</span>
                        </div>
                        <div className="text-[#7c8aa5]">60s</div>
                      </div>
                      <div className="mt-4 pt-3 hairline-t flex justify-center">
                        <StatusPill label="Passed Threshold" winner />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 4 — Creative Pipeline System */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
            className="tdia-card p-7 md:p-9"
          >
            <div className="text-center mb-10">
              <div className="pill-tdia inline-flex mb-4">CREATIVE PIPELINE SYSTEM™</div>
              <h2 className="tdia-h text-2xl md:text-3xl mb-3">
                Turn creative chaos into a <span className="serif">predictable</span> machine.
              </h2>
              <p className="text-[#9ec8ff] text-sm font-mono-tdia">
                Creative Battle Plan™ · Cadence Machine™ · Creative Vault™
              </p>
            </div>

            {/* Three modules overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { id: 1, icon: Target, title: 'Creative Battle Plan™' },
                { id: 2, icon: CalendarClock, title: 'Cadence Machine™' },
                { id: 3, icon: Archive, title: 'Creative Vault™' },
              ].map((m) => (
                <div
                  key={m.id}
                  className="hairline rounded-xl bg-white/[0.02] p-5 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="tdia-tile !h-10 !w-10">
                      <m.icon className="h-4 w-4" strokeWidth={1.6} />
                    </div>
                  </div>
                  <div className="font-mono-tdia text-xs text-[#9ec8ff] mb-1">
                    {String(m.id).padStart(2, '0')}
                  </div>
                  <h4 className="text-white font-semibold text-sm">{m.title}</h4>
                </div>
              ))}
            </div>

            {/* Creative Battle Plan */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="tdia-tile !h-9 !w-9">
                  <Target className="h-4 w-4" strokeWidth={1.6} />
                </div>
                <h3 className="tdia-h text-xl md:text-2xl">Creative Battle Plan™</h3>
              </div>
              <p className="text-sm text-[#7c8aa5] mb-4">
                Each client receives a pre-built backlog of testable ideas, organized by:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-4">
                {[
                  'Ad format',
                  'Psychological angle (pain, gain, social proof, etc.)',
                  'Objection handled',
                  'Target avatar',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                    <CheckDot />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#9ec8ff] font-mono-tdia text-sm mb-6">
                The backlog isn't random, it's a learning engine.
              </p>

              {/* Backlog visual */}
              <div className="hairline rounded-xl bg-white/[0.02] p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold text-sm">Creative Backlog</h4>
                  <span className="micro-label">STATUS BOARD</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    {
                      status: 'To Test',
                      count: 5,
                      body: 'UGC · Story: Problem-agitation hook w/ quick solution reveal',
                      avatar: 'Avatar 1',
                    },
                    {
                      status: 'In Progress',
                      count: 3,
                      body: 'Animation · Feature: Before/After transformation sequence',
                      avatar: 'Avatar 2',
                      winner: true,
                    },
                    {
                      status: 'Testimonial',
                      count: 3,
                      body: 'Social Proof: Client success story with ROI callout',
                      avatar: 'Avatar 3',
                    },
                    {
                      status: 'Approved',
                      count: 2,
                      body: 'Product Demo · Features: Quick-win benefit sequence',
                      avatar: 'Avatar 1',
                      winner: true,
                    },
                  ].map((b, i) => (
                    <div key={i} className="hairline rounded-lg bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between mb-2">
                        <StatusPill label={b.status.toUpperCase()} winner={b.winner} />
                        <span
                          className={`text-xl font-mono-tdia ${
                            b.winner ? 'text-[#9ec8ff]' : 'text-[#e6ecf7]/80'
                          }`}
                        >
                          {b.count}
                        </span>
                      </div>
                      <p className="text-xs text-[#7c8aa5] mb-2 leading-relaxed">{b.body}</p>
                      <p className="text-[10px] font-mono-tdia text-[#9ec8ff]">{b.avatar}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Angle Distribution */}
              <div className="hairline rounded-xl bg-white/[0.02] p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="tdia-tile !h-9 !w-9">
                    <Zap className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <h4 className="text-white font-semibold">AI-Powered Prioritization</h4>
                </div>
                <p className="text-sm text-[#7c8aa5] mb-5">
                  An AI-powered scoring engine ranks upcoming tests based on past performance
                  (e.g., hooks that worked get derivatives prioritized first).
                </p>
                <h5 className="text-white font-medium text-sm mb-3">Angle Distribution</h5>
                <div className="space-y-3">
                  {[
                    { label: 'Problem', pct: 32 },
                    { label: 'Solution', pct: 24 },
                    { label: 'Social Proof', pct: 40, winner: true },
                    { label: 'Objection', pct: 14 },
                    { label: 'Scarcity', pct: 20 },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-[#e6ecf7]/85 w-24">{r.label}</span>
                      <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className={
                            'h-full rounded-full ' +
                            (r.winner ? 'bg-[#4d9fff]' : 'bg-[#9ec8ff]/50')
                          }
                          style={{ width: `${r.pct}%` }}
                        />
                      </div>
                      <span className="text-xs font-mono-tdia text-[#9ec8ff] w-10 text-right">
                        {r.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cadence Machine */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="tdia-tile !h-9 !w-9">
                  <CalendarClock className="h-4 w-4" strokeWidth={1.6} />
                </div>
                <h3 className="tdia-h text-xl md:text-2xl">Cadence Machine™</h3>
              </div>
              <p className="text-sm text-[#7c8aa5] mb-3">
                Clients drag and drop assets they approve into a Notion-style 'Approved' column,
                eliminating email validation hell.
              </p>
              <p className="text-[#9ec8ff] font-mono-tdia text-sm mb-6">
                The strategy is visualized before testing.
              </p>

              <div className="hairline rounded-xl bg-white/[0.02] p-5 mb-4">
                <h4 className="text-white font-semibold text-sm mb-4">Approval Status</h4>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="tdia-tile !h-11 !w-11">
                      <Check className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                    <div>
                      <p className="text-2xl font-mono-tdia text-[#9ec8ff]">2/7</p>
                      <p className="text-[10px] text-[#7c8aa5] uppercase tracking-wider">
                        Approved
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#4d9fff] rounded-full"
                      style={{ width: '28.5%' }}
                    />
                  </div>
                </div>
                <p className="text-xs text-[#7c8aa5]">5 pending review</p>
              </div>

              <div className="hairline rounded-xl bg-white/[0.02] p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="tdia-tile !h-9 !w-9">
                    <Layers className="h-4 w-4" strokeWidth={1.6} />
                  </div>
                  <h4 className="text-white font-semibold">Weekly Strategy</h4>
                </div>
                <p className="text-sm text-[#e6ecf7]/85 italic mb-5">
                  "This week: 5 hooks across 3 avatars. Objective: isolate top performer."
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: 'Hook Testing', value: '5 variants' },
                    { label: 'Avatar Coverage', value: '3 personas' },
                    { label: 'Testing Budget', value: '$750' },
                    { label: 'Expected Outcome', value: 'Top 20%' },
                  ].map((k, i) => (
                    <div key={i} className="hairline rounded-lg bg-white/[0.02] p-3">
                      <p className="text-[10px] text-[#7c8aa5] uppercase tracking-wider mb-1">
                        {k.label}
                      </p>
                      <p className="text-base font-mono-tdia text-[#9ec8ff]">{k.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Creative Vault */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="tdia-tile !h-9 !w-9">
                  <Archive className="h-4 w-4" strokeWidth={1.6} />
                </div>
                <h3 className="tdia-h text-xl md:text-2xl">Creative Vault™</h3>
              </div>
              <p className="text-sm text-[#7c8aa5] mb-3">
                An archive of every creative tested, with metadata:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
                {[
                  'Angle used (loss aversion, status gain, etc.)',
                  'Creative type (UGC, animated, scripted, cinematic)',
                  'Performance data',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#e6ecf7]/85">
                    <CheckDot />
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="hairline rounded-xl bg-white/[0.02] p-5 mb-6">
                <h4 className="text-white font-semibold text-sm mb-4">Purpose</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                  {[
                    'Know what to reuse',
                    'Know what never to repeat',
                    'Know what to remix',
                  ].map((p, i) => (
                    <div
                      key={i}
                      className="hairline rounded-lg bg-white/[0.02] p-4 text-sm text-[#e6ecf7]/85"
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>

              {/* Creative Archive */}
              <div className="hairline rounded-xl bg-white/[0.02] p-5 mb-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-3">
                  <h4 className="text-white font-semibold text-sm">Creative Archive</h4>
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <div className="flex items-center gap-2 hairline rounded-full px-3 py-1.5 bg-white/[0.02] flex-1 md:flex-none">
                      <Search className="h-3.5 w-3.5 text-[#7c8aa5]" strokeWidth={1.6} />
                      <span className="text-xs text-[#7c8aa5]">Search assets…</span>
                    </div>
                    <button className="btn-tdia-ghost text-xs !py-1.5 !px-3">Filter</button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="pill-tdia">Type · UGC</span>
                  <span className="pill-tdia">ROAS &gt; 2.0x</span>
                  <span className="pill-tdia">Angle · Social Proof</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { id: 10, roas: '3.2x', type: 'UGC', angle: 'Problem', tier: 'high' as const },
                    {
                      id: 20,
                      roas: '1.8x',
                      type: 'Animation',
                      angle: 'Solution',
                      tier: 'mid' as const,
                    },
                    {
                      id: 30,
                      roas: '2.5x',
                      type: 'Demo',
                      angle: 'Social Proof',
                      tier: 'high' as const,
                    },
                    {
                      id: 40,
                      roas: '0.9x',
                      type: 'Testimonial',
                      angle: 'Objection',
                      tier: 'low' as const,
                    },
                  ].map((c) => (
                    <div key={c.id} className="hairline rounded-lg bg-white/[0.02] p-4 text-center">
                      <h5 className="text-white font-medium text-sm mb-2">Creative #{c.id}</h5>
                      <p className={`text-xl font-mono-tdia mb-1 ${scoreClass(c.tier)}`}>
                        {c.roas} ROAS
                      </p>
                      <p className="text-[11px] text-[#7c8aa5]">{c.type}</p>
                      <p className="text-[11px] text-[#9ec8ff]">{c.angle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance by Angle */}
              <div className="hairline rounded-xl bg-white/[0.02] p-5">
                <h4 className="text-white font-semibold text-sm mb-4">Performance by Angle</h4>
                <div className="space-y-3">
                  {[
                    { label: 'Social Proof', pct: 85, value: '3.2x', winner: true },
                    { label: 'Problem → Solution', pct: 70, value: '2.8x', winner: true },
                    { label: 'Before/After', pct: 65, value: '2.5x' },
                    { label: 'Features', pct: 55, value: '2.1x' },
                    { label: 'Scarcity', pct: 45, value: '1.8x' },
                    { label: 'Testimonials', pct: 30, value: '1.2x', muted: true },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-[#e6ecf7]/85 w-32 md:w-40">{r.label}</span>
                      <div className="flex-1 h-6 bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className={
                            'h-full rounded-full flex items-center justify-end pr-2 ' +
                            (r.winner
                              ? 'bg-[#4d9fff]/60'
                              : r.muted
                              ? 'bg-[#7c8aa5]/40'
                              : 'bg-[#9ec8ff]/40')
                          }
                          style={{ width: `${r.pct}%` }}
                        >
                          <span className="text-[10px] font-mono-tdia text-white">
                            {r.value}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Final CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: '-80px' }}
            className="tdia-card p-8 md:p-10 text-center halo-cta"
          >
            <div className="micro-label mb-3">READY WHEN YOU ARE</div>
            <h3 className="tdia-h text-2xl md:text-3xl mb-4">
              Implement Creative <span className="serif">Scoring OS</span>.
            </h3>
            <p className="text-[#7c8aa5] max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
              Stop guessing which ads work. Get clear, actionable insights and significantly reduce
              your ad spend waste.
            </p>
            <button onClick={handleCTAClick} className="btn-tdia">
              Book Your Strategy Call
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.section>
        </main>
      </ScrollArea>
    </div>
  );
};

export default CreativeScoringModalContent;
