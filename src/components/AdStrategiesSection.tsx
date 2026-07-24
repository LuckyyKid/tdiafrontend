import React from 'react';
import { Check } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

const AdStrategiesSection: React.FC = () => {
  const handleCTAClick = () => {
    trackCTAClick('Book Your Free Discovery Call', 'ad_strategies_section');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  const points = [
    'Creative-first approach',
    'Data-driven decisions',
    'Funnel-specific messaging',
    'Advanced AI targeting',
    'Optimized ad volume',
    'Constant iterative process',
  ];

  return (
    <section className="w-full py-24 md:py-32 relative">
      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="tdia-card overflow-hidden aspect-[4/5] max-w-md mx-auto md:mx-0">
            <img
              src="/lovable-uploads/f587fe65-cd78-4831-bbb2-d6fc38b0ebb3.png"
              alt="Ad strategy visual"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="micro-label mb-6">Strategy</div>
            <h2 className="tdia-h text-[28px] md:text-[40px] mb-6">
              <span>Smart ad strategies for the age of </span>
              <span className="serif">creative</span>
              <span> content</span>
            </h2>
            <p className="text-[#7c8aa5] mb-8 leading-relaxed">
              Performance follows great creative. Here's how we make sure yours leads the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {points.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#4d9fff]/15 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-[#9ec8ff]" strokeWidth={2.5} />
                  </div>
                  <p className="text-white text-sm">{p}</p>
                </div>
              ))}
            </div>

            <button onClick={handleCTAClick} className="btn-tdia">
              Book your free discovery call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdStrategiesSection;
