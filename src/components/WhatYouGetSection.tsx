import React from 'react';
import { Check } from 'lucide-react';

const WhatYouGetSection: React.FC = () => {
  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const items: Array<{ label: string; free?: boolean }> = [
    { label: 'A full-funnel ad strategy tailored to your product, industry & goals' },
    { label: 'Winning creatives designed & tested by experts', free: true },
    { label: 'Media buying done for you' },
    { label: "Access to TDIA's testing framework, refined across 30+ eCommerce & B2B brands" },
    { label: 'Creative testing & scaling system' },
    { label: 'Live performance dashboards + weekly reports' },
    { label: 'Monthly strategy calls — we act as your fractional CMO', free: true },
    { label: '100% money-back guaranteed' },
  ];

  return (
    <section className="w-full py-24 md:py-32 relative">
      <div className="container mx-auto max-w-4xl px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <div className="pill-tdia mx-auto mb-6">Offer</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>What you </span>
            <span className="serif">get</span>
          </h2>
        </div>

        <div className="tdia-card p-8 md:p-10 halo-cta">
          <ul className="divide-y divide-[color:var(--tdia-hairline)]">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-4 py-4">
                <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                </div>
                <p className="text-white text-base md:text-lg flex-grow">
                  {item.label}
                  {item.free && (
                    <span className="ml-2 inline-block px-2 py-0.5 rounded text-[10px] font-mono-tdia uppercase tracking-wider text-[#9ec8ff] bg-[#4d9fff]/15">
                      Free
                    </span>
                  )}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center hairline-t pt-10">
            <p className="micro-label mb-3">All backed by a</p>
            <h3 className="tdia-h text-[28px] md:text-[36px] mb-8">
              <span className="serif">100%</span>
              <span> money-back guarantee</span>
            </h3>
            <div className="flex justify-center">
              <button onClick={handleCTAClick} className="btn-tdia">
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
