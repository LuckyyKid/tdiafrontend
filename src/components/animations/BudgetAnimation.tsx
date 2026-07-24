
import React from 'react';
import { motion } from 'framer-motion';

const BudgetAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[240px] bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10 overflow-hidden">
      {/* Graph background grid */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={`h-line-${i}`} className="border-t border-white/10 w-full h-0" />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={`v-line-${i}`} className="border-l border-white/10 h-full w-0" />
        ))}
      </div>

      {/* Budget bars */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-around items-end px-6">
        {/* Campaign A - decreasing */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-10 bg-red-500/70 rounded-t-sm"
            initial={{ height: 120 }}
            animate={{ height: 60 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="mt-2 text-xs text-white/80"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Campaign A
          </motion.div>
        </div>

        {/* Campaign B - increasing */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-10 bg-[#006fff]/80 rounded-t-sm"
            initial={{ height: 50 }}
            animate={{ height: 150 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="mt-2 text-xs text-white/80"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Campaign B
          </motion.div>
        </div>

        {/* Campaign C - stable but optimized */}
        <div className="flex flex-col items-center">
          <motion.div 
            className="w-10 bg-yellow-400/70 rounded-t-sm"
            initial={{ height: 90 }}
            animate={{ height: 100 }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="mt-2 text-xs text-white/80"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Campaign C
          </motion.div>
        </div>
      </div>

      {/* Floating budget indicator */}
      <motion.div 
        className="absolute top-6 right-6 px-3 py-1.5 bg-[#006fff] rounded-full flex items-center shadow-lg"
        animate={{ 
          y: [0, 5, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-bold text-white">BUDGET OPTIMIZATION</span>
      </motion.div>

      {/* Animated arrows */}
      <motion.div 
        className="absolute bottom-20 left-12 text-red-400 text-lg"
        animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↓
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-[47%] text-[#006fff] text-lg"
        animate={{ opacity: [0, 1, 0], y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↑
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-12 text-yellow-400 text-lg"
        animate={{ opacity: [0, 1, 0], y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ⟳
      </motion.div>
    </div>
  );
};

export default BudgetAnimation;
