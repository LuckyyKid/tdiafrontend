
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem 
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import ParallaxDots from './ParallaxDots';

interface BrandCardProps {
  src: string;
  alt: string;
}

const BrandCard: React.FC<BrandCardProps> = ({ src, alt }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const mouseX = Math.round((x / rect.width) * 100);
      const mouseY = Math.round((y / rect.height) * 100);
      const rotateY = ((mouseX / 100) * 20) - 10;
      const rotateX = (((mouseY / 100) * 20) - 10) * -1;
      
      setRotation({ x: rotateX, y: rotateY });
      setPosition({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className="bg-transparent border border-gray-800/30 p-4 rounded-md brand-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        "--mouse-x": `${position.x}%`,
        "--mouse-y": `${position.y}%`
      } as React.CSSProperties}
    >
      <div 
        className="brand-card-inner h-40 flex items-center justify-center"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="h-32 w-full max-w-[160px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
        />
      </div>
    </div>
  );
};

const BrandsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const brands = [
    { src: "/lovable-uploads/55f4a520-199c-4f60-a299-f4f53f4e03d5.png", alt: "Roots logo" },
    { src: "/lovable-uploads/93d97cb7-54fd-41f5-a9df-85cf0c707dec.png", alt: "Cafexo logo" },
    { src: "/lovable-uploads/5c9eddd3-5fef-4698-9226-2342603b8414.png", alt: "Mille et une noix logo" },
    { src: "/lovable-uploads/6c45d0a7-a649-4ba0-8c64-5c166ffed649.png", alt: "Lockfeet logo" },
    { src: "/lovable-uploads/cf826ab0-ef3c-44b2-bddb-f4d89d658aa1.png", alt: "Lika logo" },
    { src: "/lovable-uploads/c8b3e4cb-8979-4685-b500-0e7c71f5182b.png", alt: "Annick Levesque logo" },
    { src: "/lovable-uploads/5cfdadc8-4f5a-428d-b774-fb149220ee4b.png", alt: "Onyx logo" },
    { src: "/lovable-uploads/0be2b643-ce09-4db2-8250-f17844bd33ab.png", alt: "Runak logo" },
    { src: "/lovable-uploads/ca87324b-abc5-494c-939c-4b5f93d7f252.png", alt: "Le Coconut logo" },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!isMobile || !api) return;
    
    const autoScrollInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);
    
    return () => clearInterval(autoScrollInterval);
  }, [isMobile, api]);
  
  const extendedBrands = isMobile ? [...brands, ...brands] : brands;

  return (
    <div className="bg-black w-full py-16 font-sans relative overflow-hidden">
      <ParallaxDots 
        count={40} 
        colors={['#006fff', '#3944bc', '#8bfa7b', '#ffffff']} 
        minSize={2} 
        maxSize={7} 
        className="z-0 opacity-70"
      />
      
      <div className="container mx-auto z-10 px-4 relative">
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-normal text-white uppercase tracking-wide">
            Brands We've Worked With
          </h2>
        </div>
        
        {isMobile ? (
          <div className="mb-14 overflow-hidden">
            <Carousel 
              ref={carouselRef}
              className="w-full"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: false,
                slidesToScroll: 1
              }}
            >
              <CarouselContent className="-ml-4">
                {extendedBrands.map((brand, index) => (
                  <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                    <div className="p-1">
                      <BrandCard 
                        src={brand.src}
                        alt={brand.alt}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto mb-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <BrandCard 
                key={index}
                src={brand.src}
                alt={brand.alt}
              />
            ))}
          </div>
        )}
        
        <div className="text-center mb-10">
          <p className="text-white text-xl font-normal">And 30+ More!</p>
        </div>
        
        <div className="text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  className="text-white font-thin text-lg shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  Book Your Free Discovery Call 
                </Button>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-black/70 backdrop-blur-sm border border-white/10 text-white font-normal px-4 py-2"
              >
                It's time to change your ads game!
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
