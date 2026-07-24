import React from 'react';
import { ArrowRight, Store, Globe, Component, Rocket, Layers, Award, ShoppingCart, TrendingUp, Target, LineChart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import SolutionModal from "@/components/SolutionModal";
import { useSolutionModals } from '@/hooks/useSolutionModals';

const EcommerceProblems = () => {
  const { openModalId, openModal, closeModal, solutionModalsData } = useSolutionModals();

  const problems = [
    { id: 1, icon: <Store className="h-5 w-5 text-[#9ec8ff]" />, title: "Struggling to stand out from competition", description: "Your e-commerce site looks like hundreds of others in your niche. Customers have no clear reason to choose you over your competitors. Without a unique and compelling value proposition, you end up competing solely on price." },
    { id: 2, icon: <Globe className="h-5 w-5 text-[#9ec8ff]" />, title: "\"We're trying everything… but nothing really works\"", description: "Your marketing feels like guesswork. You're testing random tactics, switching directions every week, and chasing trends without understanding what actually drives results." },
    { id: 3, icon: <Component className="h-5 w-5 text-[#9ec8ff]" />, title: "\"If Meta goes down, so does my business\"", description: "You're overly reliant on a single platform—so when Meta's performance drops, your entire growth stalls. No backup channels, no fallback strategy—just panic and wasted spend." },
    { id: 4, icon: <Rocket className="h-5 w-5 text-[#9ec8ff]" />, title: "\"I'm scaling, but I don't know if I'm actually making money\"", description: "You've validated your offer. You're running ads. But growth has stalled. Scaling isn't just about increasing budget — it's about building a system that supports performance at volume." },
    { id: 5, icon: <Layers className="h-5 w-5 text-[#9ec8ff]" />, title: "\"Every time I scale, my margins vanish\"", description: "You're finally growing—but your profits aren't. Scaling should boost your bottom line, not bleed it dry. If every push for growth leads to higher CAC and vanishing margins, rethink your model." },
    { id: 6, icon: <Award className="h-5 w-5 text-[#9ec8ff]" />, title: "\"The ad looks great — but my page kills the vibe\"", description: "When your landing page doesn't match your ad's tone, story, or energy, it breaks the conversion flow. Customers expect consistency, and anything less feels off-brand." },
    { id: 7, icon: <ShoppingCart className="h-5 w-5 text-[#9ec8ff]" />, title: "\"I throw creatives out randomly\"", description: "You're constantly launching new ads without a clear method. You post what feels right in the moment, hoping something will work — but there's no process behind it." },
    { id: 8, icon: <TrendingUp className="h-5 w-5 text-[#9ec8ff]" />, title: "\"I'm spending money but have no idea where it's going\"", description: "You're putting money into ads, but you're flying blind. You see ROAS, CPMs, CTRs... but you don't really know what they mean, or how to act on them." },
    { id: 9, icon: <Target className="h-5 w-5 text-[#9ec8ff]" />, title: "\"My creatives die after 10 days\"", description: "You launch an ad, it works for a few days, and then performance drops off a cliff. So you rush to make new ones, repeat the cycle, and end up in a constant state of creative panic." },
    { id: 10, icon: <LineChart className="h-5 w-5 text-[#9ec8ff]" />, title: "\"I'm doing everything, but nothing's working\"", description: "You're on all platforms — Meta, TikTok, Google — running campaigns, tweaking settings, making creatives. You're busy. But despite all that effort, the results are flat." },
  ];

  const faqs = [
    { question: "How do I know which e-commerce problem is affecting my business the most?", answer: "Analyze your performance data (conversion rate, traffic, bounce rate, average order value) and gather customer feedback. Identify gaps between your objectives and current results. We also offer a free audit to precisely identify your main barriers to growth." },
    { question: "How long does it take to solve these e-commerce problems?", answer: "The timeframe varies depending on the complexity of the problem and the size of your business. Some optimizations can bring results within a few weeks, while deeper transformations may take 3 to 6 months to generate significant and lasting impact." },
    { question: "Does solving these problems require a big investment?", answer: "Not necessarily. Our approach is to identify high-impact actions that can be implemented within your current budget. We prioritize solutions that offer the best return on investment." },
    { question: "How does your agency approach these problems differently from others?", answer: "Unlike other agencies that offer standardized solutions, we take a systemic approach that addresses the root cause of your e-commerce challenges, not just the symptoms." },
    { question: "Where should I start to improve my e-commerce performance?", answer: "Start by evaluating the customer experience on your site and the purchase journey. Identify points of friction and bottlenecks. Then, analyze your data to understand user behavior." },
  ];

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <div className="min-h-screen w-full text-white relative z-10">
      <StickyHeader />

      <div className="pt-32 md:pt-40 pb-14 relative halo-top">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="micro-label mb-6">E-commerce diagnostic</div>
          <h1 className="tdia-h text-[38px] md:text-[56px] lg:text-[64px]">
            <span>10 e-commerce problems </span>
            <span className="serif">blocking</span>
            <span> your growth</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-[#7c8aa5]">
            Discover the most common obstacles preventing your online store from reaching its full potential.
          </p>
          <div className="flex justify-center mt-8">
            <button onClick={handleCTAClick} className="btn-tdia">
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="tdia-h text-[28px] md:text-[40px]">
              <span>Problems that </span>
              <span className="serif">limit</span>
              <span> your growth</span>
            </h2>
            <p className="mt-4 text-[#7c8aa5] max-w-2xl mx-auto">
              Identify the obstacles preventing you from reaching your growth goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((p) => (
              <div key={p.id} className="tdia-card p-8 flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="tdia-tile flex-shrink-0">{p.icon}</div>
                  <h3 className="tdia-h text-[20px] md:text-[22px] text-white">{p.title}</h3>
                </div>
                <p className="text-[#7c8aa5] leading-relaxed mb-6 flex-grow">{p.description}</p>
                <button onClick={() => openModal(p.id)} className="btn-tdia-ghost self-start text-sm">
                  How to solve this
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 tdia-card p-10 md:p-14 text-center halo-cta">
            <h3 className="tdia-h text-[26px] md:text-[36px] mb-4">
              <span>Ready to </span>
              <span className="serif">solve</span>
              <span> these problems?</span>
            </h3>
            <p className="text-[#7c8aa5] max-w-2xl mx-auto mb-8">
              Our experts can help you identify and solve the obstacles blocking your growth.
            </p>
            <div className="flex justify-center">
              <button onClick={handleCTAClick} className="btn-tdia">
                Book a free discovery call
              </button>
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-10">
              <div className="micro-label mb-4">FAQ</div>
              <h2 className="tdia-h text-[28px] md:text-[40px]">
                <span>Frequently asked </span>
                <span className="serif">questions</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto tdia-card p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-[color:var(--tdia-hairline)] last:border-b-0">
                    <AccordionTrigger className="text-white text-left py-5 px-4 md:px-6 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-[#7c8aa5] pb-5 px-4 md:px-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="text-center mt-16">
            <button onClick={handleCTAClick} className="btn-tdia">
              See how we can help you <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {openModalId && solutionModalsData[openModalId] && (
        <SolutionModal
          isOpen={true}
          onClose={closeModal}
          title={solutionModalsData[openModalId].title}
          description={solutionModalsData[openModalId].description}
          steps={solutionModalsData[openModalId].steps}
          modalId={openModalId}
        />
      )}

      <Footer />
    </div>
  );
};

export default EcommerceProblems;
