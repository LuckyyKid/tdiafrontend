
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { useTranslation } from 'react-i18next';
import { trackCTAClick } from '@/lib/analytics';

const DynamicCTASection: React.FC = () => {
  const { t } = useTranslation();
  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call Now', 'dynamic_cta_section');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0a0e1a 100%)', color: "white" }}
    >
      <ParticlesBackground />
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-[2]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        mixBlendMode: 'overlay'
      }}></div>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs with animation */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#006fff]/20 to-[#ffde00]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-[#ffde00]/20 to-[#006fff]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title with enhanced styling */}
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('dynamicCTA.titlePart1')}{' '}
            <span className="text-[#ffde00]">{t('dynamicCTA.titleHighlight1')}</span>{' '}
            <span className="text-[#ffde00]">{t('dynamicCTA.titleHighlight2')}</span> {t('dynamicCTA.titlePart2')}
          </motion.h2>

          {/* Enhanced button with lightning and arrow */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleCTAClick}
                className="relative group bg-[#006fff] hover:bg-[#0052cc] text-white text-lg font-semibold py-4 px-8 rounded-full shadow-lg border-0 overflow-hidden"
              >
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  {t('dynamicCTA.button')}
                  <ArrowRight className="h-5 w-5" />
                </span>

                {/* Hover shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]"
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Subtitle with highlighted text */}
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('dynamicCTA.subtitlePart1')}{' '}
            <span className="text-[#ffde00] font-semibold">{t('dynamicCTA.subtitleHighlight1')}</span>{t('dynamicCTA.subtitlePart2')}{' '}
            <span className="text-[#006fff] font-semibold">{t('dynamicCTA.subtitleHighlight2')}</span>{t('dynamicCTA.subtitleEnd')}
          </motion.p>

          {/* Decorative dots */}
          <motion.div 
            className="flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-[#006fff] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicCTASection;
