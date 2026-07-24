
import React, { useRef, useState } from 'react';

interface Card3DProps {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
}

const Card3D: React.FC<Card3DProps> = ({ 
  className = "", 
  children, 
  glowColor = "rgba(255, 255, 255, 0.08)" 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      // Get the card dimensions and position
      const rect = cardRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the card
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate the percentage of the mouse position within the card
      const mouseX = Math.round((x / rect.width) * 100);
      const mouseY = Math.round((y / rect.height) * 100);
      
      // Calculate rotation (maximum ±15 degrees)
      const rotateY = ((mouseX / 100) * 30) - 15;
      const rotateX = (((mouseY / 100) * 30) - 15) * -1; // Invert Y axis for natural movement
      
      // Update state
      setRotation({ x: rotateX, y: rotateY });
      setPosition({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves with smooth transition
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className={`perspective-card relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mouse-x": `${position.x}%`,
        "--mouse-y": `${position.y}%`,
        perspective: "1000px"
      } as React.CSSProperties}
    >
      <div 
        className="perspective-card-inner transition-transform duration-200"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered ? 
            `0 15px 35px rgba(0, 0, 0, 0.3), 
             0 0 25px ${glowColor}` : 
            '0 5px 15px rgba(0, 0, 0, 0.2)'
        }}
      >
        {children}
      </div>
      <div 
        className="perspective-card-glow absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 rounded-lg"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, ${glowColor}, transparent 70%)`,
          opacity: Math.abs(rotation.x) > 2 || Math.abs(rotation.y) > 2 ? 1 : 0,
          filter: "blur(10px)"
        }}
      />
      <div 
        className="absolute inset-0 rounded-lg opacity-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))`,
          opacity: isHovered ? 0.3 : 0,
          transition: "opacity 0.3s ease"
        }}
      />
    </div>
  );
};

export default Card3D;
