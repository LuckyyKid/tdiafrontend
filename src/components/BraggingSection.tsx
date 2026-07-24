
import React from 'react';
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import CounterValue from './CounterValue';
import ParallaxDots from './ParallaxDots';
import { DollarSign, TrendingUp, BarChart } from "lucide-react";
import { fadeInUp, staggerContainer, staggeredItem } from '@/lib/animations';
import { trackCTAClick } from '@/lib/analytics';

const BraggingSection: React.FC = () => {
  const { t } = useTranslation();

   const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'bragging_section');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  

  
  return (
    <div className="w-full bg-black text-white py-20 font-sans relative overflow-hidden">
      {/* Background elements */}
      <ParallaxDots 
        count={40} 
        colors={['#006fff', '#3944bc', '#8bfa7b', '#ffffff']} 
        minSize={2} 
        maxSize={7} 
        className="z-0 opacity-70"
      />
      
      {/* Decorative circle gradients */}
      <div className="absolute -left-24 top-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/10 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 w-96 h-96 rounded-full bg-gradient-to-l from-blue-500/10 to-cyan-300/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main heading with animated underline effect */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("bragging.headingPrefix")}{" "}
            <span className="relative inline-block">
              {t("bragging.headingHighlight")}
              <motion.span 
                className="absolute left-0 bottom-0 w-full h-1 bg-[#006fff]"
                initial={{ width: 0, left: "50%" }}
                whileInView={{ width: "100%", left: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
          </h2>
        </motion.div>
        
        {/* Stats in a symmetrical layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Stat 1 */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center"
            variants={staggeredItem}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <DollarSign className="w-10 h-10 text-[#006fff] mb-3 opacity-90" />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <CounterValue 
                value={3} 
                prefix="$" 
                suffix="M+" 
                className="text-5xl md:text-6xl font-bold mb-2 text-white"
              />
              <p className="text-lg text-gray-200">{t("bragging.adSpend")}</p>
            </motion.div>
          </motion.div>
          
          {/* Stat 2 */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center"
            variants={staggeredItem}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TrendingUp className="w-10 h-10 text-[#006fff] mb-3 opacity-90" />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <CounterValue 
                value={4} 
                suffix="x" 
                className="text-5xl md:text-6xl font-bold mb-2 text-white"
              />
              <p className="text-lg text-gray-200">{t("bragging.avgReturn")}</p>
            </motion.div>
          </motion.div>
          
          {/* Stat 3 */}
          <motion.div 
            className="flex flex-col items-center justify-center text-center"
            variants={staggeredItem}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <BarChart className="w-10 h-10 text-[#006fff] mb-3 opacity-90" />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <CounterValue 
                value={15} 
                prefix="$" 
                suffix="M+" 
                className="text-5xl md:text-6xl font-bold mb-2 text-white"
              />
              <p className="text-lg text-gray-200">{t("bragging.revenue")}</p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* CTA Button with enhanced animation */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  onClick={handleCTAClick}
                  className="relative bg-gradient-to-r from-blue-600 to-blue-500 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-[0_0_25px_rgba(0,111,255,0.3)] hover:shadow-[0_0_30px_rgba(0,111,255,0.5)] transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-full"
                >
                  <span className="relative z-10">{t("bragging.cta")}</span>
                  {/* Subtle animated glow effect behind button */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-50 rounded-full blur-md -z-10 animate-pulse"></span>
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-bold px-4 py-2"
              >
                {t("bragging.tooltip")}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
      
      {/* Enhanced smooth transition element to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#06071a]/60 to-[#06071a] -mb-1 z-0"></div>
    </div>
  );
};

export default BraggingSection;
