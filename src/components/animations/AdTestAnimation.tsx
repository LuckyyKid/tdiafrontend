
import React from 'react';
import { motion } from 'framer-motion';

const AdTestAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[240px] bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10 overflow-hidden">
      {/* Testing grid background */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2 p-4 opacity-30">
        {[...Array(9)].map((_, i) => (
          <div key={`cell-${i}`} className="border border-white/20 rounded-sm" />
        ))}
      </div>

      {/* Ad creatives being tested */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 p-8">
        {/* Ad 1 - lower performing */}
        <motion.div 
          className="bg-gray-800/70 rounded-md flex flex-col items-center justify-center p-2 relative overflow-hidden"
          animate={{ 
            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="h-4 w-12 bg-white/20 mb-2 rounded-sm"></div>
          <div className="h-2 w-14 bg-white/20 rounded-sm"></div>
          <motion.div 
            className="absolute -bottom-1 -right-1 h-6 w-6 bg-gray-500/50 rounded-full flex items-center justify-center text-[10px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span 
              className="text-white/80"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              2.1%
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Ad 2 - high performing */}
        <motion.div 
          className="bg-gray-800/70 rounded-md flex flex-col items-center justify-center p-2 relative overflow-hidden border-2 border-[#006fff]/30"
          animate={{ 
            borderColor: ["rgba(0,111,255,0.3)", "rgba(0,111,255,0.6)", "rgba(0,111,255,0.3)"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="h-4 w-12 bg-white/20 mb-2 rounded-sm"></div>
          <div className="h-2 w-16 bg-white/20 rounded-sm"></div>
          <motion.div 
            className="absolute -bottom-1 -right-1 h-6 w-6 bg-[#006fff]/70 rounded-full flex items-center justify-center text-[10px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span 
              className="text-white font-bold"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              5.8%
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Ad 3 - medium performing */}
        <motion.div 
          className="bg-gray-800/70 rounded-md flex flex-col items-center justify-center p-2 relative overflow-hidden"
          animate={{ 
            borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="h-4 w-12 bg-white/20 mb-2 rounded-sm"></div>
          <div className="h-2 w-10 bg-white/20 rounded-sm"></div>
          <motion.div 
            className="absolute -bottom-1 -right-1 h-6 w-6 bg-yellow-500/60 rounded-full flex items-center justify-center text-[10px]"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.span 
              className="text-white/90"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              3.4%
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Ad 4 - new test being created */}
        <motion.div 
          className="bg-gray-800/50 rounded-md flex flex-col items-center justify-center p-2 border border-dashed border-white/20"
          animate={{ 
            backgroundColor: ["rgba(30,30,30,0.5)", "rgba(20,20,20,0.5)", "rgba(30,30,30,0.5)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="text-xl text-white/40"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            +
          </motion.div>
          <motion.div 
            className="text-[10px] text-white/40 mt-1"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            New Test
          </motion.div>
        </motion.div>
      </div>

      {/* Testing indicator */}
      <motion.div 
        className="absolute top-6 left-6 px-3 py-1.5 bg-yellow-500/80 rounded-full flex items-center shadow-lg"
        animate={{ 
          y: [0, 3, 0],
          rotate: [0, 1, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-bold text-black">A/B TESTING</span>
      </motion.div>
    </div>
  );
};

export default AdTestAnimation;
