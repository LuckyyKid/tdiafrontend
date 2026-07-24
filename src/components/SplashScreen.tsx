
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  onFinished: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if splash screen has been shown before
    const hasSeenSplash = localStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      // Skip splash screen if already seen
      onFinished();
      return;
    }
    
    // Mark as seen
    localStorage.setItem('hasSeenSplash', 'true');
    
    // Start exit animation after 1 second (reduced from 3s)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1000);
    
    // Call onFinished after exit animation completes
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 1500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <img 
          src="/lovable-uploads/tdia-logo.png" 
          alt="TDIA Logo" 
          className="w-auto h-32 md:h-40"
        />
      </motion.div>
      
      {/* Portal effect with smooth fade transition */}
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: isExiting ? 0 : 1 }}
        transition={{ duration: 1.0, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default SplashScreen;
