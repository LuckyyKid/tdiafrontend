
import React from 'react';
import { motion } from 'framer-motion';

const ScalingAnimation = () => {
  return (
    <div className="relative w-full h-full min-h-[240px] bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10 overflow-hidden">
      {/* Growth chart background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          <g opacity="0.2">
            {[0, 20, 40, 60, 80, 100].map((y) => (
              <line key={`h-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="white" strokeWidth="0.3" />
            ))}
            {[0, 20, 40, 60, 80, 100].map((x) => (
              <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="100" stroke="white" strokeWidth="0.3" />
            ))}
          </g>

          {/* Growth curve path */}
          <motion.path
            d="M0,80 Q25,75 40,60 T70,40 Q85,20 100,10"
            fill="none"
            stroke="#006fff"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
          />

          {/* Secondary metrics curve */}
          <motion.path
            d="M0,90 Q30,85 50,70 T75,50 Q90,35 100,30"
            fill="none"
            stroke="#ffde00"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 3.5, repeat: Infinity, repeatType: "loop", repeatDelay: 0.5 }}
          />
        </svg>
      </div>

      {/* Scaling markers */}
      <motion.div
        className="absolute left-[30%] top-[60%] h-3 w-3 bg-[#006fff] rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          boxShadow: [
            "0 0 0 0 rgba(0, 111, 255, 0.7)",
            "0 0 0 10px rgba(0, 111, 255, 0)",
            "0 0 0 0 rgba(0, 111, 255, 0.7)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <motion.div
        className="absolute left-[65%] top-[40%] h-3 w-3 bg-[#006fff] rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          boxShadow: [
            "0 0 0 0 rgba(0, 111, 255, 0.7)",
            "0 0 0 10px rgba(0, 111, 255, 0)",
            "0 0 0 0 rgba(0, 111, 255, 0.7)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
      />

      <motion.div
        className="absolute left-[85%] top-[20%] h-4 w-4 bg-[#ffde00] rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          boxShadow: [
            "0 0 0 0 rgba(255, 222, 0, 0.7)",
            "0 0 0 10px rgba(255, 222, 0, 0)",
            "0 0 0 0 rgba(255, 222, 0, 0.7)"
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />

      {/* Percentage indicators */}
      <motion.div
        className="absolute left-[30%] top-[50%] px-2 py-1 bg-black/70 rounded text-xs text-white border border-[#006fff]/30"
        animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        +42%
      </motion.div>

      <motion.div
        className="absolute left-[65%] top-[30%] px-2 py-1 bg-black/70 rounded text-xs text-white border border-[#006fff]/30"
        animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
      >
        +78%
      </motion.div>

      <motion.div
        className="absolute left-[85%] top-[10%] px-2 py-1 bg-black/70 rounded text-xs text-white border border-[#ffde00]/30"
        animate={{ y: [0, -5, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.8 }}
      >
        +136%
      </motion.div>

      {/* Scaling indicator */}
      <motion.div 
        className="absolute top-6 right-6 px-3 py-1.5 bg-[#006fff]/80 rounded-full flex items-center shadow-lg"
        animate={{ 
          y: [0, 4, 0],
          rotate: [-1, 1, -1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-bold text-white">SCALING</span>
      </motion.div>
    </div>
  );
};

export default ScalingAnimation;
