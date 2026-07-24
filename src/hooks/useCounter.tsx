
import { useState, useEffect } from 'react';

interface UseCounterOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  shouldStart?: boolean;
}

export const useCounter = ({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
  shouldStart = true
}: UseCounterOptions) => {
  const [count, setCount] = useState(start);
  const [formattedCount, setFormattedCount] = useState<string>(`${prefix}${start.toFixed(decimals)}${suffix}`);
  
  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    let isScrolling = false;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const percentage = progress / duration;
        const easeOutQuad = 1 - Math.pow(1 - percentage, 2);
        const currentCount = start + (end - start) * easeOutQuad;
        setCount(currentCount);
        
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
        isScrolling = false;
      }
    };
    
    const startScrolling = () => {
      if (!isScrolling && shouldStart) {
        isScrolling = true;
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    if (shouldStart) {
      startScrolling();
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [start, end, duration, shouldStart]);
  
  useEffect(() => {
    // Ensure count is a valid number before using toFixed
    const formatted = typeof count === 'number' && !isNaN(count) 
      ? `${prefix}${count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${suffix}`
      : `${prefix}0${suffix}`;
    
    setFormattedCount(formatted);
  }, [count, decimals, prefix, suffix]);
  
  return formattedCount;
};
