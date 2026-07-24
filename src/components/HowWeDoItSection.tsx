import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, TrendingUp, Cpu, Droplet, ArrowRight, Zap, Target, BarChart3, Users, RefreshCw } from 'lucide-react';
import { useRef } from 'react';
import { trackCTAClick, trackOutboundClick } from '@/lib/analytics';

const HowWeDoItSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const blocks = [
    {
      id: 1,
      icon: Brain,
      title: "Creative OS™",
      subtitle: "We Build Ads That Actually Convert",
      description: "We systematically produce ads engineered for your ICP. Every creative cycle is designed to increase CTR, lower CPA, and identify the winners fast.",
      features: [
        { icon: Users, text: "Deep customer + psychological angle research" },
        { icon: Zap, text: "15–30 ad concepts per cycle" },
        { icon: Target, text: "UGC, hooks, testimonials, stop-motion, demos" },
        { icon: RefreshCw, text: "48-hour rapid creative testing" },
        { icon: BarChart3, text: "Weekly optimized creative library" }
      ],
      goal: "Increase click-through rate, lower acquisition cost, scale through angles.",
      gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      accentColor: "from-blue-400 to-purple-500",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Profit-First Media Buying™",
      subtitle: "Spend Based on Profit, Not Guesswork",
      description: "Our media buyers don't optimize for vanity ROAS. We optimize for real profit, using a simplified structure, unified data, and daily signals.",
      features: [
        { icon: Target, text: "Simple, scalable media structure (UFO / NCAC / ASC)" },
        { icon: Cpu, text: "First-party attribution + server-side tracking" },
        { icon: TrendingUp, text: "Horizontal & vertical scaling based on real data" },
        { icon: Zap, text: "Enhanced Meta & Google algorithm leverage" },
        { icon: BarChart3, text: "Daily adjustments based on MER, blended data, cohorts" }
      ],
      goal: "Make more money than you spend — every single week.",
      gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
      accentColor: "from-green-400 to-emerald-500",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]"
    },
    {
      id: 3,
      icon: Cpu,
      title: "TDIA Tech Stack",
      subtitle: "Your Unfair Advantage",
      description: "Your account is never managed \"manually.\" It runs on a proprietary stack no traditional agency has.",
      features: [
        { icon: Cpu, text: "Server-side tracking (Stape / GTM Server-Side)" },
        { icon: Target, text: "Unified External ID across Meta, Google, TikTok" },
        { icon: BarChart3, text: "Looker Studio: incrementality + profit dashboards" },
        { icon: Brain, text: "Automated creative scoring (Make + fine-tuned GPT)" },
        { icon: RefreshCw, text: "Daily analysis of CTR, CVR, hooks, angles, thumbnails, ICP match" }
      ],
      goal: "Understand exactly what generates your sales… and scale it without limit.",
      gradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20",
      accentColor: "from-cyan-400 to-blue-500",
      glowColor: "shadow-[0_0_30px_rgba(6,182,212,0.3)]"
    },
    {
      id: 4,
      icon: Droplet,
      title: "CRO & Funnels",
      subtitle: "We Fix Leaks Before Spending",
      description: "Scaling doesn't work if the funnel leaks. We repair conversion killers before you invest a dollar in ads.",
      features: [
        { icon: Target, text: "Complete funnel analysis (landing → offer → checkout)" },
        { icon: RefreshCw, text: "Offer, pricing, and bundle A/B testing" },
        { icon: Zap, text: "Mobile-first optimization" },
        { icon: BarChart3, text: "Heatmaps + session recordings" },
        { icon: Brain, text: "Full conversion rate audit" }
      ],
      goal: "Increase CVR → instantly lower CPA.",
      gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
      accentColor: "from-purple-400 to-pink-500",
      glowColor: "shadow-[0_0_30px_rgba(168,85,247,0.3)]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                THE TDIA SYSTEM
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We Do It at{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TDIA
            </span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              We don't "boost posts."
            </p>
            <p className="text-lg md:text-xl text-gray-400">
              We apply a scientific acquisition system engineered to generate profit above everything else.
            </p>
            <p className="text-base md:text-lg text-gray-500">
              Here's the exact process we use to scale brands from{" "}
              <span className="text-blue-400 font-semibold">$30k → $300k/month</span>.
            </p>
          </div>
        </motion.div>

        {/* Blocks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {blocks.map((block, index) => {
            const Icon = block.icon;
            
            return (
              <motion.div
                key={block.id}
                variants={blockVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                {/* Card */}
                <div className={`relative h-full bg-gradient-to-br ${block.gradient} backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden ${block.glowColor} hover:border-white/20 transition-all duration-500`}>
                  {/* Animated gradient overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${block.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Number badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm"
                  >
                    <span className={`text-xl font-bold bg-gradient-to-br ${block.accentColor} bg-clip-text text-transparent`}>
                      {block.id}
                    </span>
                  </motion.div>

                  {/* Icon with glow effect */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 mb-6"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${block.accentColor} rounded-2xl blur-xl opacity-50`}
                    />
                    <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                      <Icon className={`w-8 h-8 bg-gradient-to-br ${block.accentColor} bg-clip-text text-transparent`} style={{ WebkitTextStroke: '1px currentColor' }} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {block.title}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${block.accentColor} bg-clip-text text-transparent mb-4`}>
                      {block.subtitle}
                    </p>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {block.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-3 mb-6">
                      {block.features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className={`mt-0.5 p-1.5 rounded-lg bg-gradient-to-br ${block.accentColor} opacity-80 group-hover/item:opacity-100 transition-opacity`}>
                              <FeatureIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors">
                              {feature.text}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Goal */}
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${block.accentColor} bg-opacity-5 border border-white/5`}>
                      <div className="flex items-start gap-2">
                        <Target className={`w-5 h-5 mt-0.5 bg-gradient-to-br ${block.accentColor} bg-clip-text text-transparent flex-shrink-0`} style={{ WebkitTextStroke: '0.5px currentColor' }} />
                        <div>
                          <p className="text-xs font-semibold text-gray-400 mb-1">GOAL</p>
                          <p className="text-sm text-white font-medium leading-relaxed">{block.goal}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Animated corner accent */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${block.accentColor} rounded-full blur-3xl opacity-20`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              trackCTAClick('See The System In Action', 'how_we_do_it_section');
              trackOutboundClick('https://calendly.com/simonmarceau/tdia-discovery-call', 'See The System In Action');
              window.open('https://calendly.com/simonmarceau/tdia-discovery-call', '_blank');
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              See The System In Action
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDoItSection;