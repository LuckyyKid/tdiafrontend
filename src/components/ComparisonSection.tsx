import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const others = [
    'Slow communication',
    'Single-channel approach',
    'Outdated growth strategies',
    'Lack of industry research',
    'Outsourced to mediocre talent',
  ];
  const tdia = [
    'Constant, proactive communication',
    'Omni-channel approach',
    'Tailored best-fit solutions',
    'Industry-specific expertise',
    'Founders with 5+ years of experience',
  ];

  return (
    <section className="w-full py-24 md:py-32 relative">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="pill-tdia mx-auto mb-6">Comparison</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>But why would you want to work </span>
            <span className="serif">with us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="tdia-card p-8">
            <div className="text-center mb-6">
              <div className="micro-label mb-3">Others</div>
              <h3 className="tdia-h text-[22px] md:text-[26px] text-white/70">Other agencies</h3>
            </div>
            <div className="space-y-4">
              {others.map((o, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/[0.03] hairline flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5 text-[#7c8aa5]" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#7c8aa5]">{o}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tdia-card p-8 halo-cta">
            <div className="text-center mb-6">
              <div className="micro-label mb-3">TDIA</div>
              <h3 className="tdia-h text-[22px] md:text-[26px] text-white">
                <span className="serif">tdia</span>
              </h3>
            </div>
            <div className="space-y-4">
              {tdia.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                  </div>
                  <p className="text-white/90">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
