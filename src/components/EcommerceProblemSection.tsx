
import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";




import { Button } from "@/components/ui/button";
import { ShoppingCart, Database, Users, Search, ZapIcon, Target, TrendingUp, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolutionModal from './SolutionModal';
import { useSolutionModals } from '@/hooks/useSolutionModals';

const EcommerceProblemSection: React.FC = () => {


  const { t } = useTranslation();
  const [rotation, setRotation] = useState(0);
  const [hoverIcon, setHoverIcon] = useState<string | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Add solution modal handling
  const { openModalId, openModal, closeModal, solutionModalsData } = useSolutionModals();

  // Animate the orbit continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.1) % 360);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-[#06071a] via-[#0a0b1a] to-black text-white pt-20 pb-16 font-sans relative overflow-hidden -mt-16">
      {/* Add top gradient overlay for smoother transition from previous section */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent z-0"></div>
      
      {/* Add grid lines in the background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="grid-lines-horizontal"></div>
        <div className="grid-lines-vertical"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 pt-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-white">
            90‑Day Profit Sprint for Ecom Founders
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            How we help e‑commerce brands doing $30k–$300k/month to <span className="font-bold">Grow profitably and strategically</span> without relying on luck or wasting a single dollar on ads.
          </p>
        </div>
        
        {/* Grid of 4 problem blocks - 2 per row on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Problem Block 1 - The eCommerce Problem - with orbit animation */}
          <div 
            className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 border border-blue-900/20 relative overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/20"
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Add subtle grid line overlays */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#006fff] h-10 w-10 rounded-full flex items-center justify-center shadow-lg shadow-[#006fff]/30">
                    <ShoppingCart className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold relative">
                    {t("ecommerceProblems.p1")}
                  </h3>
                </div>
                
                <p className="text-thin md:text-lg text-white">
                 {t("ecommerceProblems.d1")}
                </p>
                
                <div className="pt-4">
                  <Button 
                    className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                    onClick={() => openModal(7)}
                  >
                    {t("ecommerceProblems.solve")}
                  </Button>
                </div>
              </div>

              <div className="relative hidden md:flex justify-center">
                <div className="aspect-square relative w-56 h-56 mx-auto">
                  {/* Center icon with pulsing effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-[#151638] rounded-full flex items-center justify-center border border-blue-600/30 z-10 shadow-lg shadow-blue-900/20 animate-pulse">
                      <ShoppingCart className="h-10 w-10 text-white" />
                    </div>
                    {/* Pulsing ring effect */}
                    <div className="absolute w-32 h-32 rounded-full border border-[#006fff]/30 animate-ping opacity-30" style={{animationDuration: '3s'}}></div>
                  </div>
                  
                  {/* Grid background */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                      {Array(16).fill(0).map((_, i) => (
                        <div key={i} className="border border-blue-800/10"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Orbit circle - now animated */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border border-[#2a2d55]/50"></div>
                  </div>
                  
                  {/* Icon boxes on the orbit - now animated */}
                  <div className="absolute inset-0 w-full h-full"
                    style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center center', transition: 'transform 0.1s linear' }}>
                    
                    {/* Top icon */}
                    <div 
                      className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'users' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                      onMouseEnter={() => setHoverIcon('users')}
                      onMouseLeave={() => setHoverIcon(null)}
                    >
                      <Users className={`h-5 w-5 ${hoverIcon === 'users' ? 'text-[#006fff]' : 'text-white'}`} />
                    </div>
                    
                    {/* Bottom icon */}
                    <div 
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'database' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                      onMouseEnter={() => setHoverIcon('database')}
                      onMouseLeave={() => setHoverIcon(null)}
                    >
                      <Database className={`h-5 w-5 ${hoverIcon === 'database' ? 'text-[#006fff]' : 'text-white'}`} />
                    </div>
                    
                    {/* Right icon */}
                    <div 
                      className={`absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'search' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                      onMouseEnter={() => setHoverIcon('search')}
                      onMouseLeave={() => setHoverIcon(null)}
                    >
                      <Search className={`h-5 w-5 ${hoverIcon === 'search' ? 'text-[#006fff]' : 'text-white'}`} />
                    </div>
                    
                    {/* Left icon */}
                    <div 
                      className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-[#151638] p-2 rounded-md border transition-all duration-300 ${hoverIcon === 'zap' ? 'scale-125 border-[#006fff] shadow-lg shadow-[#006fff]/30' : 'border-blue-600/30'}`}
                      onMouseEnter={() => setHoverIcon('zap')}
                      onMouseLeave={() => setHoverIcon(null)}
                    >
                      <ZapIcon className={`h-5 w-5 ${hoverIcon === 'zap' ? 'text-[#006fff]' : 'text-white'}`} />
                    </div>

                    {/* Glowing dots on the orbit */}
                    <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#4d9bff] rounded-full shadow-md shadow-[#4d9bff] animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Block 2 - Your Creatives Are Weak - floating animation */}
          <div 
            className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 border border-blue-900/20 relative overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/20" 
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Add subtle grid line overlays */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 items-center">              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#006fff] h-10 w-10 rounded-full flex items-center justify-center shadow-lg shadow-[#006fff]/30">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                     {t("ecommerceProblems.p2")}
                  </h3>
                </div>
                
                <p className="text-thin md:text-lg text-white">
                  {t("ecommerceProblems.d2")}
                </p>
                
                <div className="pt-4">
                  <Button 
                    className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                    onClick={() => openModal(8)}
                  >
                    {t("ecommerceProblems.solve")} 
                  </Button>
                </div>
              </div>
              
              <div className="order-first md:order-last md:flex justify-center hidden">
                {/* Email metrics box */}
                <div className="bg-[#151638] rounded-lg p-6 max-w-md mx-auto border border-blue-900/30 transform transition-all duration-500" style={{
                  transform: activeCard === 1 ? 'translateY(-8px)' : 'translateY(0px)'
                }}>
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                      Reduce your CAC
                    </div>
                    <div className="flex ml-4">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full -mr-2 border-2 border-[#151638]"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full -mr-2 border-2 border-[#151638]"></div>
                      <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center border-2 border-[#151638]">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#0d0e26] rounded-lg p-4 mt-6 border border-blue-900/20">
                    <div className="text-sm text-gray-400 mb-1">CAC</div>
                    <div className="text-4xl font-bold">32$</div>
                    <div className="flex items-center mt-2">
                      <div className="text-red-500 text-sm font-bold">-43%</div>
                      <div className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">↓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Problem Block 3 - Target Audience Problem - with hexagonal grid */}
          <div 
            className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 border border-blue-900/20 relative overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/20"
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Add subtle grid line overlays */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#006fff] h-10 w-10 rounded-full flex items-center justify-center shadow-lg shadow-[#006fff]/30">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {t("ecommerceProblems.p3")}
                  </h3>
                </div>
                
                <p className="text-thin md:text-lg text-white">
                  {t("ecommerceProblems.d3")}
                </p>
                
                <div className="pt-4">
                  <Button 
                    className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                    onClick={() => openModal(9)}
                  >
                    {t("ecommerceProblems.solve")}
                  </Button>
                </div>
              </div>

              {/* Hexagonal grid animation */}
              <div className="relative hidden md:block h-64">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  {/* Hexagonal background pattern */}
                  <div className={`grid grid-cols-5 gap-2 transition-transform duration-700 ${activeCard === 2 ? 'scale-110' : 'scale-100'}`}>
                    {Array(20).fill(0).map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-12 w-12 relative ${i % 2 === 0 ? 'animate-pulse' : ''}`}
                        style={{animationDelay: `${(i * 0.1) % 2}s`}}
                      >
                        <div className="absolute inset-0 bg-[#151638] opacity-50 rounded-md transform rotate-45"></div>
                        {i === 7 && (
                          <div className="absolute inset-0 flex items-center justify-center z-10">
                            <Target className="h-5 w-5 text-[#006fff]" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Center target with pulsing ring */}
                  <div className="absolute">
                    <div className="w-16 h-16 bg-[#151638] rounded-full flex items-center justify-center border-2 border-[#006fff] z-10">
                      <Target className="h-8 w-8 text-[#006fff]" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-2 border-[#006fff] animate-ping opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Problem Block 4 - Analytics Problem - with floating charts */}
          <div 
            className="bg-gradient-to-br from-[#10112b] to-[#0a0b1d] rounded-xl p-8 md:p-12 border border-blue-900/20 relative overflow-hidden transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-blue-500/20"
            onMouseEnter={() => setActiveCard(3)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Add subtle grid line overlays */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-px w-full bg-blue-500/30 absolute top-1/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-2/4"></div>
              <div className="h-px w-full bg-blue-500/30 absolute top-3/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-1/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-2/4"></div>
              <div className="w-px h-full bg-blue-500/30 absolute left-3/4"></div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 items-center">  
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#006fff] h-10 w-10 rounded-full flex items-center justify-center shadow-lg shadow-[#006fff]/30">
                    <LineChart className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {t("ecommerceProblems.p4")}
                  </h3>
                </div>
                
                <p className="text-thin md:text-lg text-white">
                  {t("ecommerceProblems.d4")}
                </p>
                
                <div className="pt-4">
                  <Button 
                    className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
                    onClick={() => openModal(10)}
                  >
                    {t("ecommerceProblems.solve")}
                  </Button>
                </div>
              </div>

              <div className="hidden md:flex justify-center items-center h-64 relative">
                {/* Floating chart elements */}
                <div className="absolute w-full h-full">
                  {/* Chart element 1 */}
                  <div 
                    className={`absolute top-1/4 left-1/4 w-24 h-16 bg-[#151638] rounded-md border border-blue-500/30 flex items-center justify-center transition-all duration-500 shadow-lg shadow-blue-500/20`}
                    style={{
                      transform: activeCard === 3 ? 'translateY(-10px) rotate(-5deg)' : 'translateY(0) rotate(0deg)',
                      animationDelay: '0.2s'
                    }}
                  >
                    <div className="w-full h-8 px-2">
                      <div className="flex h-full items-end space-x-1">
                        {[40, 70, 30, 80, 50, 65].map((height, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-blue-500 rounded-t"
                            style={{height: `${height}%`}}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart element 2 */}
                  <div 
                    className={`absolute bottom-1/4 right-1/4 w-32 h-24 bg-[#151638] rounded-md border border-blue-500/30 flex items-center justify-center transition-all duration-500 shadow-lg shadow-blue-500/20`}
                    style={{
                      transform: activeCard === 3 ? 'translateY(10px) rotate(5deg)' : 'translateY(0) rotate(0deg)',
                      animationDelay: '0.4s'
                    }}
                  >
                    <div className="w-full h-full px-3 py-3">
                      <div className="relative w-full h-full">
                        <div className="absolute bottom-0 left-0 w-full h-px bg-blue-500/30"></div>
                        <div className="absolute top-0 bottom-0 left-0 w-px h-full bg-blue-500/30"></div>
                        <svg className="w-full h-full" viewBox="0 0 100 60">
                          <path 
                            d="M0,50 Q20,20 40,40 T70,30 T100,10" 
                            fill="none" 
                            stroke="#3b82f6" 
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart element 3 - pie chart */}
                  <div 
                    className={`absolute top-1/2 right-1/3 w-20 h-20 bg-[#151638] rounded-full border border-blue-500/30 flex items-center justify-center transition-all duration-500 shadow-lg shadow-blue-500/20`}
                    style={{
                      transform: activeCard === 3 ? 'translateX(15px) translateY(-5px)' : 'translateX(0) translateY(0)',
                      animationDelay: '0.3s'
                    }}
                  >
                    <svg className="w-16 h-16" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="#151638" />
                      <path d="M50,5 A45,45 0 0,1 95,50 L50,50 Z" fill="#3b82f6" />
                      <path d="M95,50 A45,45 0 0,1 50,95 L50,50 Z" fill="#1d4ed8" />
                      <path d="M50,95 A45,45 0 0,1 5,50 L50,50 Z" fill="#2563eb" />
                      <path d="M5,50 A45,45 0 0,1 50,5 L50,50 Z" fill="#60a5fa" />
                    </svg>
                  </div>
                </div>
                
                {/* Central connection point */}
                <div className="w-12 h-12 bg-[#151638] rounded-full border-2 border-[#006fff] flex items-center justify-center z-10 shadow-lg shadow-[#006fff]/20">
                  <LineChart className="h-6 w-6 text-[#006fff]" />
                </div>
                
                {/* Connecting lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path 
                      d="M50,50 L20,20 M50,50 L75,70 M50,50 L65,35" 
                      stroke="#006fff" 
                      strokeWidth="1" 
                      strokeDasharray="5,3"
                      opacity="0.6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section at the bottom */}
        <div className="mt-10 flex justify-center">
          <Link to="/ecommerce-problems">
            <Button 
              className="text-white font-thin text-lg flex items-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
            >
              {t("ecommerceProblems.seeMore")}
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Solution Modals */}
      {openModalId && solutionModalsData[openModalId] && (
        <SolutionModal
          isOpen={true}
          onClose={closeModal}
          title={solutionModalsData[openModalId].title}
          description={solutionModalsData[openModalId].description}
          steps={solutionModalsData[openModalId].steps}
          modalId={openModalId}
        />
      )}
    </div>
  );
};

export default EcommerceProblemSection;
