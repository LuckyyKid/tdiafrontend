
import React, { useEffect, useState, useRef } from 'react';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

interface ParallaxDotsProps {
  count?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  className?: string;
}

const ParallaxDots: React.FC<ParallaxDotsProps> = ({
  count = 30,
  colors = ['#006fff', '#3944bc', '#8bfa7b', '#ffffff'],
  minSize = 2,
  maxSize = 8,
  minOpacity = 0.1,
  maxOpacity = 0.5,
  className = '',
}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentMousePosition = useRef({ x: 0, y: 0 });
  const dotsDataRef = useRef<Dot[]>([]);

  useEffect(() => {
    // Use requestIdleCallback to defer initialization for better performance
    const scheduleInit = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(initializeDots, { timeout: 2000 });
      } else {
        setTimeout(initializeDots, 1000);
      }
    };

    const initializeDots = () => {
      // Generate random dots
      const newDots: Dot[] = [];
      
      for (let i = 0; i < count; i++) {
      newDots.push({
        id: i,
        x: Math.random() * 100, // % position
        y: Math.random() * 100, // % position
        size: minSize + Math.random() * (maxSize - minSize),
        color: colors[Math.floor(Math.random() * colors.length)],
        // Increase speed range further for more noticeable parallax effect
        speed: 0.02 + Math.random() * 0.08, // Significantly higher speed values
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity)
      });
    }
    
      setDots(newDots);
      dotsDataRef.current = newDots;

      // Initialize mouse position to center
      mousePosition.current = { x: 50, y: 50 };
      currentMousePosition.current = { x: 50, y: 50 };

      // Add mouse move event listener with improved sensitivity
      const handleMouseMove = (e: MouseEvent) => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          mousePosition.current = {
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100
          };
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      // Use requestAnimationFrame for smooth animation
      const animate = () => {
      // Higher lerp factor for much more immediate response
      const lerpFactor = 0.2; 
      
      currentMousePosition.current = {
        x: currentMousePosition.current.x + (mousePosition.current.x - currentMousePosition.current.x) * lerpFactor,
        y: currentMousePosition.current.y + (mousePosition.current.y - currentMousePosition.current.y) * lerpFactor
      };
      
      // Update dots state for render only when needed
      setDots(prevDots => [...prevDots]);
      animationRef.current = requestAnimationFrame(animate);
    };
    
      // Start the animation
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    };

    scheduleInit();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count, colors, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {dots.map((dot) => {
        // Calculate the parallax offset based on current mouse position
        // Increase movement range significantly for much more noticeable effect
        const offsetX = (currentMousePosition.current.x - 50) * dot.speed * 3;
        const offsetY = (currentMousePosition.current.y - 50) * dot.speed * 3;
        
        return (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: `calc(${dot.x}% + ${offsetX}%)`,
              top: `calc(${dot.y}% + ${offsetY}%)`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              opacity: dot.opacity,
              transform: 'translate(-50%, -50%)',
              // Remove transition for direct movement - this will make it perfectly smooth
              willChange: 'left, top'
            }}
          />
        );
      })}
    </div>
  );
};

export default ParallaxDots;
