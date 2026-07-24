import React from 'react';
import { trackCTAClick, trackMetaEvent } from '@/lib/analytics';

const ResultsSection: React.FC = () => {
  const handleCTAClick = () => {
    trackCTAClick('Book Your Free Discovery Call', 'results_section');
    trackMetaEvent('Schedule', {
      content_name: 'Discovery Call Booking',
      content_category: 'Results Section',
    });
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const cards = [
    { img: '/lovable-uploads/15e81cc9-46f1-4a30-af8a-e4aefeb71f63.png', metrics: ['ROAS +33%', 'CTR +14%'] },
    { img: '/lovable-uploads/87c01000-ca06-4d2c-8c65-f4b9c08ddf1e.png', metrics: ['Hook rate +85%', 'CPO -22%'] },
    { img: '/lovable-uploads/849867d6-86f0-4088-baa6-63f6f93901a7.png', metrics: ['CPA -30%', 'Hook rate +280%'] },
    { img: '/lovable-uploads/e94322c2-2cb8-4af4-a620-18765b68a837.png', metrics: ['Return customer +91%'] },
  ];

  const steps = [
    { n: '01', title: 'Hook, engage & convert', desc: 'Get seen by the right people. Our targeted ad strategies grow your reach and bring in qualified leads that convert.' },
    { n: '02', title: 'Test. Learn. Optimize. Repeat.', desc: 'A systematic testing approach lets us iterate quickly and consistently deliver high-performing campaigns.' },
    { n: '03', title: 'Creative + ad strategy = results', desc: 'Combine high-performing creatives with proven ad strategies to reach your audience at every funnel stage.' },
  ];

  return (
    <section className="w-full text-white py-24 md:py-32 halo-top relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="pill-tdia mx-auto mb-6">Results</div>
          <h2 className="tdia-h text-[32px] md:text-[46px] lg:text-[54px]">
            <span>We master </span>
            <span className="serif">creative</span>
            <span> so your ads always perform</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            Winning ads start with smart creatives. We craft, test and refine every asset to drive more clicks, more sales and more scale.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {cards.map((c, i) => (
            <div key={i} className="tdia-card overflow-hidden">
              <img src={c.img} alt="" className="w-full aspect-[4/3] object-cover" />
              <div className="p-4 space-y-1 hairline-t">
                {c.metrics.map((m, j) => (
                  <p key={j} className="text-sm font-mono-tdia text-[#9ec8ff]">{m}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s) => (
            <div key={s.n} className="tdia-card p-8 text-center">
              <div className="font-mono-tdia text-[#9ec8ff] text-sm mb-3">{s.n}</div>
              <h3 className="tdia-h text-[22px] text-white mb-3">{s.title}</h3>
              <p className="text-[#7c8aa5] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button onClick={handleCTAClick} className="btn-tdia">
            Book your free discovery call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
