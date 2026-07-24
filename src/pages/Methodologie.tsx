import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Target, Zap, Brain, Lightbulb, BarChart3, TrendingDown, Gauge, Layers, Activity } from 'lucide-react';
import StickyHeader from '@/components/StickyHeader';
import Footer from '@/components/Footer';
import { fadeInUp } from '@/lib/animations';
import { trackCTAClick } from '@/lib/analytics';

/* ─────────────────────────────  TYPES  ───────────────────────────── */

interface ChainStep {
  n: string;
  title: string;
  body: string;
  prevents: string;
}

interface Module {
  title: string;
  body: string;
}

interface SectionCopy {
  letter: string;
  label: string;
  headingBefore: string;
  headingSerif: string;
  headingAfter: string;
  body: string;
}

interface ResultItem {
  label: string;
  value: string;
}

const anchorIds = ['overview', 'diagnostic', 'allocation', 'budgets', 'creatif', 'conversion', 'live'] as const;
type AnchorId = typeof anchorIds[number];

const chainByAnchor: Record<Exclude<AnchorId, 'overview'>, number[]> = {
  diagnostic: [0, 1],
  allocation: [2],
  budgets: [3, 4],
  creatif: [5, 6],
  conversion: [7],
  live: [8],
};

/* ─────────────────────────────  MOCKUP CARDS  ───────────────────────────── */

const GrowthMapCard: React.FC = () => {
  const { t } = useTranslation();
  const items = t('methodologiePage.mockups.growthMap.items', { returnObjects: true }) as string[];
  const subItems = t('methodologiePage.mockups.growthMap.subItems', { returnObjects: true }) as string[];
  return (
    <div className="tdia-card p-5 w-full max-w-[420px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#4d9fff] to-[#2f6bff]" />
        <span className="text-xs text-white/85">{t('methodologiePage.mockups.growthMap.title')}</span>
      </div>
      <div className="micro-label mb-3">{t('methodologiePage.mockups.growthMap.subtitle')}</div>
      <div className="space-y-1.5">
        <div className="hairline rounded-md px-3 py-2 bg-white/[0.02] text-sm text-white/90">{items[0]}</div>
        <div className="hairline rounded-md px-3 py-2 bg-white/[0.02] text-sm text-white/80 ml-3">{items[1]}</div>
        <div className="rounded-md px-3 py-2 bg-[#4d9fff]/10 border border-[#4d9fff]/30 text-sm text-white ml-3">{items[2]}</div>
        <div className="pl-8 space-y-1 pt-1">
          {subItems.map((s, i) => (
            <div key={i} className="text-xs text-[#7c8aa5]">{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WalkdownCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="tdia-card p-5 w-full max-w-[500px]">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-white">
          {t('methodologiePage.mockups.walkdown.title')} <span className="text-[#7c8aa5]">· {t('methodologiePage.mockups.walkdown.meta')}</span>
        </div>
        <span className="pill-tdia !py-1 !px-2 !text-[9px]">{t('methodologiePage.mockups.walkdown.pill')}</span>
      </div>
      <div className="hairline rounded-lg p-3 bg-[#4d9fff]/[0.06] mb-4 flex gap-2 text-sm">
        <span className="text-[#9ec8ff]">◆</span>
        <span className="text-[#e6ecf7]/90 leading-relaxed">
          <span className="text-white font-medium">{t('methodologiePage.mockups.walkdown.readingLabel')}</span> {t('methodologiePage.mockups.walkdown.readingBody')}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="micro-label mb-1">{t('methodologiePage.mockups.walkdown.colContribution')}</div>
          <div className="font-mono-tdia text-lg text-white">41 210 $</div>
        </div>
        <div>
          <div className="micro-label mb-1">{t('methodologiePage.mockups.walkdown.colMer')}</div>
          <div className="font-mono-tdia text-lg text-white">4,43×</div>
        </div>
        <div>
          <div className="micro-label mb-1">{t('methodologiePage.mockups.walkdown.colCac')}</div>
          <div className="font-mono-tdia text-lg text-white">22,60 $</div>
        </div>
        <div>
          <div className="micro-label mb-1">{t('methodologiePage.mockups.walkdown.colSpend')}</div>
          <div className="font-mono-tdia text-lg text-[#9ec8ff]">−30 %</div>
        </div>
      </div>
    </div>
  );
};

const ActionCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="tdia-card p-5 w-full max-w-[420px]">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-white">{t('methodologiePage.mockups.action.title')}</div>
        <span className="pill-tdia !py-1 !px-2 !text-[9px]">{t('methodologiePage.mockups.action.priority')}</span>
      </div>
      <div className="text-base text-white font-medium mb-2">{t('methodologiePage.mockups.action.headline')}</div>
      <p className="text-xs text-[#7c8aa5] leading-relaxed mb-4">
        {t('methodologiePage.mockups.action.body')}
      </p>
      <div className="hairline rounded-md px-3 py-2 flex items-center gap-2 mb-4 bg-white/[0.02]">
        <span className="font-mono-tdia text-[10px] tracking-widest text-[#9ec8ff] bg-[#4d9fff]/15 border border-[#4d9fff]/30 rounded px-2 py-0.5">{t('methodologiePage.mockups.action.gate')}</span>
        <span className="text-xs text-[#7c8aa5]">{t('methodologiePage.mockups.action.gateSub')}</span>
      </div>
      <button className="btn-tdia w-full justify-center !py-2.5 text-sm">
        {t('methodologiePage.mockups.action.cta')} <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

const CreativeIQTable: React.FC = () => {
  const { t } = useTranslation();
  const rows = [
    { ad: 'Hero Shot 01', tag: 'Lifestyle', hook: '48%', hold: '52%', ctr: '4.2%', cr: '3.5%', score: '93', kind: 'top' },
    { ad: 'UGC Feature', tag: 'Testimonial', hook: '32%', hold: '47%', ctr: '2.8%', cr: '3.1%', score: '76', kind: 'mid' },
    { ad: 'Product Demo', tag: 'Features', hook: '18%', hold: '22%', ctr: '2.1%', cr: '1.4%', score: '42', kind: 'low' },
  ];
  const scoreStyle = (k: string) =>
    k === 'top'
      ? 'bg-[#4d9fff]/15 text-[#9ec8ff] border-[#4d9fff]/30'
      : k === 'mid'
      ? 'bg-white/[0.05] text-[#e6ecf7]/85 border-white/10'
      : 'bg-white/[0.02] text-[#7c8aa5] border-white/5';
  return (
    <div className="tdia-card p-5 w-full max-w-[520px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="tdia-tile !h-7 !w-7">
            <BarChart3 className="h-3.5 w-3.5" strokeWidth={1.6} />
          </div>
          <span className="text-sm text-white">{t('methodologiePage.mockups.creativeIQ.title')}</span>
        </div>
        <span className="micro-label">{t('methodologiePage.mockups.creativeIQ.meta')}</span>
      </div>
      <div className="grid grid-cols-7 gap-2 pb-2 hairline-b">
        <div className="col-span-2 micro-label">{t('methodologiePage.mockups.creativeIQ.colCreative')}</div>
        <div className="micro-label">{t('methodologiePage.mockups.creativeIQ.colHook')}</div>
        <div className="micro-label">{t('methodologiePage.mockups.creativeIQ.colHold')}</div>
        <div className="micro-label">{t('methodologiePage.mockups.creativeIQ.colCtr')}</div>
        <div className="micro-label">{t('methodologiePage.mockups.creativeIQ.colCr')}</div>
        <div className="micro-label">{t('methodologiePage.mockups.creativeIQ.colScore')}</div>
      </div>
      {rows.map((r, i) => (
        <div key={i} className={`grid grid-cols-7 gap-2 py-3 ${i < rows.length - 1 ? 'hairline-b' : ''}`}>
          <div className="col-span-2 min-w-0">
            <div className="text-xs text-white truncate">{r.ad}</div>
            <div className="text-[10px] text-[#7c8aa5] truncate">{r.tag}</div>
          </div>
          <div className="font-mono-tdia text-xs text-[#e6ecf7]/85 self-center">{r.hook}</div>
          <div className="font-mono-tdia text-xs text-[#e6ecf7]/85 self-center">{r.hold}</div>
          <div className="font-mono-tdia text-xs text-[#e6ecf7]/85 self-center">{r.ctr}</div>
          <div className="font-mono-tdia text-xs text-[#e6ecf7]/85 self-center">{r.cr}</div>
          <div className="self-center">
            <span className={`font-mono-tdia text-xs px-1.5 py-0.5 rounded border ${scoreStyle(r.kind)}`}>{r.score}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const HookRateDecisionCard: React.FC = () => {
  const { t } = useTranslation();
  const tiers = [
    { label: 'SCALE', range: '> 40 %', width: 92, tone: 'strong' },
    { label: 'ITERATE', range: '25 – 40 %', width: 58, tone: 'mid' },
    { label: 'KILL', range: '< 25 %', width: 22, tone: 'weak' },
  ];
  return (
    <div className="tdia-card p-5 w-full max-w-[420px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="tdia-tile !h-7 !w-7">
          <Activity className="h-3.5 w-3.5" strokeWidth={1.6} />
        </div>
        <span className="text-sm text-white">{t('methodologiePage.mockups.hookRate.title')}</span>
      </div>
      <div className="space-y-3">
        {tiers.map((tier) => (
          <div key={tier.label}>
            <div className="flex items-center justify-between mb-1.5">
              <span className={`font-mono-tdia text-[10px] tracking-widest ${tier.tone === 'strong' ? 'text-[#9ec8ff]' : tier.tone === 'mid' ? 'text-[#e6ecf7]/85' : 'text-[#7c8aa5]'}`}>
                {tier.label}
              </span>
              <span className="font-mono-tdia text-[10px] text-[#7c8aa5]">{tier.range}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className={`h-full rounded-full ${tier.tone === 'strong' ? 'bg-gradient-to-r from-[#4d9fff] to-[#2f6bff]' : tier.tone === 'mid' ? 'bg-white/25' : 'bg-white/10'}`}
                style={{ width: `${tier.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusPillsCard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="tdia-card p-5 w-full max-w-[420px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="tdia-tile !h-7 !w-7">
          <Layers className="h-3.5 w-3.5" strokeWidth={1.6} />
        </div>
        <span className="text-sm text-white">{t('methodologiePage.mockups.statusPills.title')}</span>
      </div>
      <div className="space-y-2.5">
        <div className="hairline rounded-lg p-3 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4d9fff]" />
            <div>
              <div className="text-xs text-white">{t('methodologiePage.mockups.statusPills.row1Title')}</div>
              <div className="text-[10px] text-[#7c8aa5]">{t('methodologiePage.mockups.statusPills.row1Sub')}</div>
            </div>
          </div>
          <span className="font-mono-tdia text-[10px] tracking-widest text-[#9ec8ff] bg-[#4d9fff]/15 border border-[#4d9fff]/30 rounded px-2 py-0.5">SCALE</span>
        </div>
        <div className="hairline rounded-lg p-3 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
            <div>
              <div className="text-xs text-white">{t('methodologiePage.mockups.statusPills.row2Title')}</div>
              <div className="text-[10px] text-[#7c8aa5]">{t('methodologiePage.mockups.statusPills.row2Sub')}</div>
            </div>
          </div>
          <span className="font-mono-tdia text-[10px] tracking-widest text-[#e6ecf7]/85 bg-white/[0.05] border border-white/10 rounded px-2 py-0.5">ITERATE</span>
        </div>
        <div className="hairline rounded-lg p-3 bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/10" />
            <div>
              <div className="text-xs text-white/80">{t('methodologiePage.mockups.statusPills.row3Title')}</div>
              <div className="text-[10px] text-[#7c8aa5]">{t('methodologiePage.mockups.statusPills.row3Sub')}</div>
            </div>
          </div>
          <span className="font-mono-tdia text-[10px] tracking-widest text-[#7c8aa5] bg-white/[0.02] border border-white/5 rounded px-2 py-0.5">KILL</span>
        </div>
      </div>
    </div>
  );
};

const TestLearnBoard: React.FC = () => {
  const { t } = useTranslation();
  const cols = [
    { name: 'TESTED', items: ['CTA color', 'Above-fold hero', 'Shipping bar'] },
    { name: 'VALIDATED', items: ['Sticky add-to-cart', 'Trust icons'] },
    { name: 'ITERATE', items: ['Bundle module', 'PDP video'] },
    { name: 'KILL', items: ['Popup exit'] },
  ];
  return (
    <div className="tdia-card p-5 w-full max-w-[540px]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="tdia-tile !h-7 !w-7">
            <Brain className="h-3.5 w-3.5" strokeWidth={1.6} />
          </div>
          <span className="text-sm text-white">{t('methodologiePage.mockups.testLearn.title')}</span>
        </div>
        <span className="micro-label">{t('methodologiePage.mockups.testLearn.meta')}</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {cols.map((c, i) => (
          <div key={i} className="hairline rounded-lg p-2.5 bg-white/[0.02]">
            <div className={`micro-label mb-2 ${c.name === 'VALIDATED' ? 'text-[#9ec8ff]' : ''}`}>{c.name}</div>
            <div className="space-y-1.5">
              {c.items.map((it, j) => (
                <div key={j} className="text-[10px] text-[#e6ecf7]/80 leading-tight">
                  · {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FunnelDropCard: React.FC = () => {
  const { t } = useTranslation();
  const steps = [
    { name: 'Landing', drop: 0, width: 100 },
    { name: 'PDP', drop: -14, width: 82 },
    { name: 'Cart', drop: -22, width: 63 },
    { name: 'Checkout', drop: -28, width: 46, alert: true },
    { name: 'Purchase', drop: -18, width: 38 },
  ];
  return (
    <div className="tdia-card p-5 w-full max-w-[420px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="tdia-tile !h-7 !w-7">
          <TrendingDown className="h-3.5 w-3.5" strokeWidth={1.6} />
        </div>
        <span className="text-sm text-white">{t('methodologiePage.mockups.funnelDrop.title')}</span>
      </div>
      <div className="space-y-2">
        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-16 text-[10px] text-[#7c8aa5]">{s.name}</div>
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
              <div
                className={`h-full rounded-full ${s.alert ? 'bg-gradient-to-r from-[#4d9fff] to-[#2f6bff]' : 'bg-white/20'}`}
                style={{ width: `${s.width}%` }}
              />
            </div>
            <div className={`w-14 text-right font-mono-tdia text-[10px] ${s.alert ? 'text-[#9ec8ff]' : 'text-[#7c8aa5]'}`}>
              {s.drop === 0 ? '—' : `${s.drop} %`}
            </div>
          </div>
        ))}
      </div>
      <div className="hairline-t mt-4 pt-3 flex items-start gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4d9fff] mt-1.5" />
        <p className="text-[10px] text-[#e6ecf7]/85 leading-relaxed">
          {t('methodologiePage.mockups.funnelDrop.alertPrefix')} <span className="text-[#9ec8ff] font-mono-tdia">cart → checkout −28 %</span>{t('methodologiePage.mockups.funnelDrop.alertSuffix')}
        </p>
      </div>
    </div>
  );
};

const SmartHeatCard: React.FC = () => {
  const { t } = useTranslation();
  const insights = t('methodologiePage.mockups.smartHeat.insights', { returnObjects: true }) as string[];
  return (
    <div className="tdia-card p-5 w-full max-w-[420px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="tdia-tile !h-7 !w-7">
          <Gauge className="h-3.5 w-3.5" strokeWidth={1.6} />
        </div>
        <span className="text-sm text-white">{t('methodologiePage.mockups.smartHeat.title')}</span>
      </div>
      <div className="grid grid-cols-4 gap-1 mb-4">
        {[10, 22, 45, 78, 55, 30, 18, 12, 8, 40, 62, 25].map((v, i) => (
          <div
            key={i}
            className="aspect-square rounded-sm"
            style={{ background: `rgba(77, 159, 255, ${0.08 + v / 180})` }}
          />
        ))}
      </div>
      <div className="space-y-1.5">
        {insights.map((ins, i) => (
          <div key={i} className="flex items-start gap-2 text-[10px] text-[#e6ecf7]/85">
            <span className="text-[#9ec8ff]">·</span>
            <span>{ins}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────  SHOWCASE STACK LAYOUT  ───────────────────────────── */

const ShowcaseStack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col gap-6 w-full items-center lg:items-stretch">{children}</div>
);

const Floating: React.FC<{
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}> = ({ children, className = '', glow = false }) => (
  <div
    className={`relative w-full flex justify-center ${className}`}
    style={{
      boxShadow: glow
        ? '0 30px 70px rgba(0, 0, 0, 0.5), 0 0 40px rgba(47, 107, 255, 0.10)'
        : '0 20px 50px rgba(0, 0, 0, 0.45)',
      borderRadius: '20px',
    }}
  >
    {glow && (
      <div
        className="absolute inset-0 rounded-[20px] pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(77, 159, 255, 0.28)' }}
      />
    )}
    {children}
  </div>
);

/* ─────────────────────────────  CHAIN STEP CARD  ───────────────────────────── */

interface ChainCardProps {
  step: ChainStep;
  index: number;
  preventsLabel: string;
}

const ChainCard: React.FC<ChainCardProps> = ({ step, index, preventsLabel }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay: index * 0.04 }}
    className="relative pl-16"
  >
    <div className="absolute left-0 top-4 flex items-center gap-3">
      <span className="relative inline-block h-3 w-3 rounded-full bg-[#0a0e18] border border-[#4d9fff]/40">
        <span className="absolute inset-0.5 rounded-full bg-[#4d9fff]/60" />
      </span>
    </div>
    <div className="tdia-card p-6 md:p-7">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono-tdia text-sm text-[#9ec8ff]">{step.n}</span>
        <h3 className="tdia-h text-lg md:text-xl">{step.title}</h3>
      </div>
      <p className="text-[14px] text-[#7c8aa5] leading-relaxed mb-4">{step.body}</p>
      <div className="hairline-t pt-3">
        <p className="font-mono-tdia text-[11px] text-[#9ec8ff] leading-relaxed">
          {preventsLabel}{step.prevents}
        </p>
      </div>
    </div>
  </motion.article>
);

/* ─────────────────────────────  MAIN PAGE  ───────────────────────────── */

const Methodologie: React.FC = () => {
  const { t, ready } = useTranslation();
  const [activeId, setActiveId] = useState<AnchorId>('overview');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!ready) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id as AnchorId);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    anchorIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        sectionRefs.current[id] = el;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [ready]);

  if (!ready) return null;

  const chain = t('methodologiePage.chain', { returnObjects: true }) as ChainStep[];
  const preventsLabel = t('methodologiePage.preventsLabel');
  const overviewPills = t('methodologiePage.overview.pills', { returnObjects: true }) as string[];
  const mediaBuyingModules = t('methodologiePage.showcases.mediaBuying.modules', { returnObjects: true }) as Module[];
  const creativeModules = t('methodologiePage.showcases.creativeOs.modules', { returnObjects: true }) as Module[];
  const croModules = t('methodologiePage.showcases.cro.modules', { returnObjects: true }) as Module[];
  const results = t('methodologiePage.resultsBand.items', { returnObjects: true }) as ResultItem[];

  const handleAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'methodology_page');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const renderChainBlock = (indices: number[]) => (
    <div className="relative mt-8">
      <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[#4d9fff]/30 via-white/[0.08] to-transparent" />
      <div className="space-y-4">
        {indices.map((i) => (
          <ChainCard key={chain[i].n} step={chain[i]} index={i} preventsLabel={preventsLabel} />
        ))}
      </div>
    </div>
  );

  const renderSectionHeader = (key: Exclude<AnchorId, 'overview'>) => {
    const s = t(`methodologiePage.sections.${key}`, { returnObjects: true }) as SectionCopy;
    return (
      <div className="mb-4">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-mono-tdia text-sm text-[#7c8aa5]">{s.letter}</span>
          <div className="micro-label">{s.label}</div>
        </div>
        <h2 className="tdia-h text-[28px] md:text-[38px] max-w-3xl">
          {s.headingBefore}<span className="serif">{s.headingSerif}</span>{s.headingAfter}
        </h2>
        <p className="mt-4 text-[15px] text-[#7c8aa5] max-w-2xl leading-relaxed">
          {s.body}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen text-white relative overflow-hidden z-10">
      <Helmet>
        <title>{t('methodologiePage.seo.title')}</title>
        <meta name="description" content={t('methodologiePage.seo.description')} />
      </Helmet>

      <StickyHeader />

      {/* Radial halo top */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[500px]"
        style={{ background: 'radial-gradient(1100px 500px at 75% 0%, rgba(47, 107, 255, 0.13), transparent 60%)' }}
      />

      <div className="relative container mx-auto px-4 md:px-6 pt-28 md:pt-32 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* ─── SIDEBAR (desktop) ─── */}
          <aside className="hidden lg:block w-[250px] flex-shrink-0">
            <div className="sticky top-28">
              <div className="pill-tdia inline-flex mb-6">{t('methodologiePage.sidebar.pill')}</div>
              <nav className="space-y-1">
                {anchorIds.map((id) => {
                  const active = activeId === id;
                  return (
                    <button
                      key={id}
                      onClick={() => handleAnchor(id)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${
                        active
                          ? 'bg-[#4d9fff]/10 border border-[#4d9fff]/25 text-white shadow-[0_0_30px_rgba(47,107,255,0.10)]'
                          : 'border border-transparent text-[#7c8aa5] hover:text-white hover:bg-white/[0.02]'
                      }`}
                    >
                      {t(`methodologiePage.anchors.${id}`)}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ─── SIDEBAR (mobile) ─── */}
          <div className="lg:hidden sticky top-16 z-30 -mx-4 px-4 py-3 bg-[#060910]/90 backdrop-blur-xl hairline-b overflow-x-auto hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {anchorIds.map((id) => {
                const active = activeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleAnchor(id)}
                    className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                      active
                        ? 'bg-[#4d9fff]/15 border border-[#4d9fff]/30 text-white'
                        : 'border border-white/10 text-[#7c8aa5]'
                    }`}
                  >
                    {t(`methodologiePage.anchors.${id}`)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ─── MAIN CONTENT ─── */}
          <main className="flex-1 min-w-0 space-y-24 md:space-y-32">
            {/* ── OVERVIEW ── */}
            <section id="overview" className="scroll-mt-24">
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <div className="micro-label mb-4">{t('methodologiePage.overview.micro')}</div>
                <h1 className="tdia-h text-[34px] sm:text-[42px] md:text-[52px] leading-[1.06] max-w-3xl">
                  {t('methodologiePage.overview.headingBefore')}
                  <span className="serif">{t('methodologiePage.overview.headingSerif')}</span>
                  {t('methodologiePage.overview.headingAfter')}
                </h1>
                <p className="mt-6 text-[15px] text-[#7c8aa5] max-w-[640px] leading-relaxed">
                  {t('methodologiePage.overview.body')}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  {overviewPills.map((pill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4d9fff]" />
                      <span className="micro-label">{pill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* ── DIAGNOSTIC (01-02) ── */}
            <section id="diagnostic" className="scroll-mt-24">
              {renderSectionHeader('diagnostic')}
              {renderChainBlock(chainByAnchor.diagnostic)}
            </section>

            {/* ── ALLOCATION & RISQUE (03) + Profit-First Media Buying showcase ── */}
            <section id="allocation" className="scroll-mt-24">
              {renderSectionHeader('allocation')}
              {renderChainBlock(chainByAnchor.allocation)}

              {/* Showcase — Profit-First Media Buying */}
              <div className="mt-16">
                <div className="micro-label mb-3">{t('methodologiePage.showcases.mediaBuying.label')}</div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5 space-y-4">
                    {mediaBuyingModules.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="tdia-card p-5"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="tdia-tile !h-8 !w-8 flex-shrink-0">
                            <Target className="h-3.5 w-3.5" strokeWidth={1.6} />
                          </div>
                          <h4 className="tdia-h text-base md:text-lg pt-1">{m.title}</h4>
                        </div>
                        <p className="text-sm text-[#7c8aa5] leading-relaxed pl-11">{m.body}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="lg:col-span-7">
                    <ShowcaseStack>
                      <Floating>
                        <GrowthMapCard />
                      </Floating>
                      <Floating glow>
                        <WalkdownCard />
                      </Floating>
                      <Floating>
                        <ActionCard />
                      </Floating>
                    </ShowcaseStack>
                  </div>
                </div>
              </div>
            </section>

            {/* ── BUDGETS & SAISON (04-05) ── */}
            <section id="budgets" className="scroll-mt-24">
              {renderSectionHeader('budgets')}
              {renderChainBlock(chainByAnchor.budgets)}
            </section>

            {/* ── CRÉATIF (06-07) + Creative Scoring OS showcase ── */}
            <section id="creatif" className="scroll-mt-24">
              {renderSectionHeader('creatif')}
              {renderChainBlock(chainByAnchor.creatif)}

              {/* Showcase — Creative Scoring OS */}
              <div className="mt-16">
                <div className="micro-label mb-3">{t('methodologiePage.showcases.creativeOs.label')}</div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <ShowcaseStack>
                      <Floating glow>
                        <CreativeIQTable />
                      </Floating>
                      <Floating>
                        <HookRateDecisionCard />
                      </Floating>
                      <Floating>
                        <StatusPillsCard />
                      </Floating>
                    </ShowcaseStack>
                  </div>
                  <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                    {creativeModules.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="tdia-card p-5"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="tdia-tile !h-8 !w-8 flex-shrink-0">
                            <Zap className="h-3.5 w-3.5" strokeWidth={1.6} />
                          </div>
                          <h4 className="tdia-h text-base md:text-lg pt-1">{m.title}</h4>
                        </div>
                        <p className="text-sm text-[#7c8aa5] leading-relaxed pl-11">{m.body}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── CONVERSION (08) + CRO Pipeline Engine showcase ── */}
            <section id="conversion" className="scroll-mt-24">
              {renderSectionHeader('conversion')}
              {renderChainBlock(chainByAnchor.conversion)}

              {/* Showcase — CRO Pipeline Engine */}
              <div className="mt-16">
                <div className="micro-label mb-3">{t('methodologiePage.showcases.cro.label')}</div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-5 space-y-4">
                    {croModules.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="tdia-card p-5"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="tdia-tile !h-8 !w-8 flex-shrink-0">
                            <Lightbulb className="h-3.5 w-3.5" strokeWidth={1.6} />
                          </div>
                          <h4 className="tdia-h text-base md:text-lg pt-1">{m.title}</h4>
                        </div>
                        <p className="text-sm text-[#7c8aa5] leading-relaxed pl-11">{m.body}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="lg:col-span-7">
                    <ShowcaseStack>
                      <Floating glow>
                        <TestLearnBoard />
                      </Floating>
                      <Floating>
                        <FunnelDropCard />
                      </Floating>
                      <Floating>
                        <SmartHeatCard />
                      </Floating>
                    </ShowcaseStack>
                  </div>
                </div>
              </div>
            </section>

            {/* ── OPTIMISATION LIVE (09) + stats + CTA ── */}
            <section id="live" className="scroll-mt-24">
              {renderSectionHeader('live')}
              {renderChainBlock(chainByAnchor.live)}

              {/* Stats band */}
              <div className="mt-16 mb-10">
                <div className="micro-label mb-3">{t('methodologiePage.resultsBand.micro')}</div>
                <h3 className="tdia-h text-[24px] md:text-[32px] max-w-3xl">
                  {t('methodologiePage.resultsBand.headingBefore')}
                  <span className="serif">{t('methodologiePage.resultsBand.headingSerif')}</span>
                  {t('methodologiePage.resultsBand.headingAfter')}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 hairline-t hairline-b mb-14">
                {results.map((r, i) => (
                  <div key={i} className={`py-8 px-6 ${i > 0 ? 'md:hairline-v' : ''}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#4d9fff]" />
                      <div className="micro-label">{r.label}</div>
                    </div>
                    <div className="font-mono-tdia text-[26px] md:text-[32px] text-white leading-none">
                      {r.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="tdia-card halo-cta p-10 md:p-12 text-center"
              >
                <div className="micro-label mb-4">{t('methodologiePage.cta.micro')}</div>
                <h3 className="tdia-h text-[24px] md:text-[32px] max-w-2xl mx-auto mb-8">
                  {t('methodologiePage.cta.headingBefore')}
                  <span className="serif">{t('methodologiePage.cta.headingSerif')}</span>
                  {t('methodologiePage.cta.headingAfter')}
                </h3>
                <button onClick={handleCTAClick} className="btn-tdia">
                  {t('methodologiePage.cta.button')}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </section>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Methodologie;
