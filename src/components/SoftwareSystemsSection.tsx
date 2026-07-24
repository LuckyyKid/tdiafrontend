import React, { useState, useRef, useEffect, TouchEvent } from 'react';
import { useTranslation, Trans } from "react-i18next";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { ChevronRight, Plus, ArrowRight, ChevronDown, MousePointer2 } from 'lucide-react';
import { fadeInUp, staggerContainer, staggeredItem } from '@/lib/animations';
import ParallaxDots from './ParallaxDots';
import ParticlesBackground from './ParticlesBackground';
import SolutionModal from './SolutionModal';
import { useSolutionModals } from '@/hooks/useSolutionModals';
import CreativeScoringModalContent from './CreativeScoringModalContent';

import ProfitFirstMediaBuyingModalContent from './ProfitFirstMediaBuyingModalContent';
import CROPipelineEngineModalContent from './CROPipelineEngineModalContent';

// Define the types for our system cards
interface SystemCard {
  id?: number;
  name: string;
  pain: string;
  modules: string[];
  result: string;
  color?: string;
  icon?: string;
  visual?: string;
  modalId?: number; // Add modalId to link to the correct modal
}

// Our system cards data - now loaded from translations
// See src/i18n/locales/en.json and fr.json for the actual data

const SoftwareSystemsSection: React.FC = () => {

  const { t } = useTranslation();
  
  // Get system cards data from translations
  const systemCards: SystemCard[] = t('softwareSystems.systems', { returnObjects: true }) as any[];
  
  // Add static properties that aren't in translations
  const systemCardsWithProps = systemCards.map((system, index) => ({
    ...system,
    id: index + 1,
    color: index === 0 ? "from-blue-600 to-purple-600" : 
           index === 1 ? "from-green-500 to-teal-500" : 
           "from-teal-500 to-emerald-500",
    visual: index === 0 ? "radar-graph" : 
            index === 1 ? "profit-chart" : 
            "funnel-optimization",
    modalId: index === 0 ? 11 : undefined
  }));
  
  const [selectedSystem, setSelectedSystem] = useState<SystemCard | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [creativeScoringModalOpen, setCreativeScoringModalOpen] = useState(false);
  
  const [profitFirstMediaBuyingModalOpen, setProfitFirstMediaBuyingModalOpen] = useState(false);
  const [croPipelineEngineModalOpen, setCROPipelineEngineModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { openModalId, openModal, closeModal, solutionModalsData } = useSolutionModals();
  
  // Enhanced mobile scroll tracking
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  
  // Touch handling for swipe down
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  
  // Minimum distance for a swipe to be considered
  const minSwipeDistance = 50;

  // Update scroll index when scrolling horizontally
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 300; // Approximate card width + gap
        const scrollLeft = container.scrollLeft;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setCurrentScrollIndex(Math.min(newIndex, systemCardsWithProps.length - 1));
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Handle touch start event
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientY);
    setTouchEnd(null);
  };

  // Handle touch move event
  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  // Handle touch end event
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    // Calculate the distance of the swipe
    const distance = touchEnd - touchStart;
    
    // If the swipe distance is greater than minimum and it's a downward swipe
    if (distance > minSwipeDistance) {
      // Swipe down detected - scroll to next section
      console.log("Swipe down detected, scrolling to next section");
      const currentSectionElement = sectionRef.current;
      if (currentSectionElement) {
        const nextSection = currentSectionElement.nextElementSibling as HTMLElement;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.log("No next section found");
        }
      }
    }
    
    // Reset touch values
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Add debug effect to log when component mounts
  useEffect(() => {
    console.log("SoftwareSystemsSection mounted, touch handlers setup");
  }, []);

  const handleSystemClick = (system: SystemCard) => {
    console.log("System clicked:", system.id, system.name); // Debug log
    if (system.id === 1) {
      // Open the Creative Scoring OS custom modal
      setCreativeScoringModalOpen(true);
    } else if (system.id === 3) {
      // Open the Profit-First Media Buying custom modal
      setProfitFirstMediaBuyingModalOpen(true);
      console.log("Opening Profit First Media Buying modal");
    } else if (system.id === 9) {
      // If system has another modalId, open the solution modal
      openModal(system.modalId);
    } else {
      // Otherwise use the default dialog
      setSelectedSystem(system);
      setDialogOpen(true);
    }
  };

  // Function to close all modals - this will help ensure proper modal closing
  const closeAllModals = () => {
    setDialogOpen(false);
    setCreativeScoringModalOpen(false);
    
    setProfitFirstMediaBuyingModalOpen(false);
    setCROPipelineEngineModalOpen(false);
    closeModal();
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Function to render visual placeholder based on card type
  const renderVisual = (type: string | undefined, color: string) => {
    const gradientClass = `bg-gradient-to-br ${color}`;
    
    switch (type) {
      case 'radar-graph':
        return (
          <div className="relative h-40 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-2 border-white/20 relative flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border border-white/30"></div>
              <div className="w-16 h-16 rounded-full border border-white/40"></div>
              <div className="w-8 h-8 rounded-full bg-white/20"></div>
              {/* Radar lines */}
              <div className="absolute w-full h-1 bg-white/20 top-1/2 left-0 transform -translate-y-1/2"></div>
              <div className="absolute w-1 h-full bg-white/20 top-0 left-1/2 transform -translate-x-1/2"></div>
              {/* Data points */}
              <div className="absolute w-2 h-2 rounded-full bg-white top-1/4 right-1/4"></div>
              <div className="absolute w-2 h-2 rounded-full bg-white bottom-1/3 right-1/3"></div>
              <div className="absolute w-2 h-2 rounded-full bg-white top-1/2 left-1/4"></div>
            </div>
          </div>
        );
      case 'pipeline-flow':
        return (
          <div className="relative h-40 flex items-center justify-center">
            <div className="flex space-x-2 items-center">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-lg ${gradientClass} flex items-center justify-center text-white font-bold`}>
                    {i}
                  </div>
                  {i < 4 && <ArrowRight className="h-4 w-4 text-white/70 mx-1" />}
                </div>
              ))}
            </div>
            <div className="absolute bottom-4 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>
        );
      case 'profit-chart':
        return (
          <div className="relative h-40 flex items-center justify-center">
            <div className="w-full h-32 flex items-end justify-around px-4">
              {[30, 45, 60, 80, 65, 85, 90].map((h, i) => (
                <div key={i} className="relative">
                  <div 
                    className={`w-6 ${gradientClass} rounded-t-sm mx-1`} 
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white/70">
                    {i+1}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-8 w-full h-px bg-white/30"></div>
          </div>
        );
      // Simplified cases for the other visuals
      default:
        return (
          <div className="relative h-40 flex items-center justify-center">
            <div className={`w-24 h-24 rounded-full ${gradientClass} shadow-lg flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-full bg-white/10 animate-pulse flex items-center justify-center text-white font-semibold">
                {selectedSystem?.name.substring(0, 2) || "OS"}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        );
    }
  };

  return (
    <div 
      ref={sectionRef}
      className="w-full pt-16 pb-16 md:pt-20 md:pb-20 font-sans relative overflow-hidden" 
      style={{
        background: `linear-gradient(180deg, #0a0e1a 0%, #000000 100%)`,
        color: 'white'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ParticlesBackground />
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-[2]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        mixBlendMode: 'overlay'
      }}></div>
      {/* Apple-inspired floating dots background */}
      <ParallaxDots 
        count={40} 
        colors={['#006fff', '#3944bc', '#8bfa7b', '#ffffff']} 
        minSize={2} 
        maxSize={7} 
        className="z-0 opacity-70"
      />
      
      {/* Glowing orbs background effect */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#006fff] opacity-15 blur-[120px] z-0"></div>
      <div className="absolute bottom-32 left-1/4 w-[400px] h-[400px] rounded-full bg-[#3944bc] opacity-10 blur-[100px] z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#006fff] opacity-5 blur-[150px] z-0"></div>
      
      {/* Grid lines background effect */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 111, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 111, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-8 md:mb-16 px-4"
        >
          {/* Excellent Rating Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-white text-sm">Excellent</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-[#006fff]" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">{t("softwareSystems.title.part1")} </span>
            <span className="text-[#006fff]">{t("softwareSystems.title.part2")}</span>
            <span className="text-white"> {t("softwareSystems.title.part3")} </span>
            <span className="bg-[#006fff] text-white px-3 py-1 rounded">{t("softwareSystems.title.part4")}</span>
          </h3>
        </motion.div>

        {/* Swipe down indicator - only shown on mobile */}
        <div className="flex justify-center mb-6 md:hidden animate-bounce">
          <div className="flex flex-col items-center">
            <p className="text-white/70 text-sm mb-2">
  {t("softwareSystems.swipe")}
</p>

            <ChevronDown className="h-6 w-6 text-white/70" />
          </div>
        </div>

        {/* Enhanced mobile-optimized horizontal scroll container */}
        <div className="relative px-4 md:px-8 my-6 md:my-8">
          {/* Enhanced mobile-optimized horizontal scroll container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto md:overflow-visible pb-8 gap-4 md:gap-0 hide-scrollbar snap-x snap-mandatory md:snap-none touch-pan-x items-center md:justify-center md:flex-wrap"
            style={{ 
              scrollbarWidth: 'none',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {systemCardsWithProps.map((system, index) => (
              <React.Fragment key={system.id}>
                <div 
                  className="flex-none w-[85vw] sm:w-[280px] md:w-[320px] lg:w-[340px] h-[450px] sm:h-[500px] md:h-[550px] snap-start snap-always md:snap-none"
                  style={{ 
                    scrollSnapAlign: 'start',
                    scrollSnapStop: 'always'
                  }}
                >
                <motion.div 
                  className="w-full h-full cursor-pointer rounded-2xl overflow-hidden glass-morphism border border-white/10 relative group hover:border-[#006fff]/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  onClick={() => handleSystemClick(system)}
                >
                  <div 
                    className={`w-full h-full p-4 md:p-6 flex flex-col justify-between relative overflow-hidden`}
                  >
                    {/* Top gradient bar - Apple style */}
                    <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${system.color}`}></div>
                    
                    {/* Click to learn more badge */}
                    <div className="absolute top-3 right-3 z-30">
                      <div className="bg-[#006fff]/90 backdrop-blur-md border border-[#006fff]/40 rounded-full px-3 py-1.5 flex items-center gap-1.5 hover:bg-[#006fff] transition-all duration-300 group-hover:scale-105 shadow-lg shadow-[#006fff]/20">
                        <MousePointer2 className="h-3.5 w-3.5 text-white" />
                        <span className="text-[11px] sm:text-xs text-white font-semibold whitespace-nowrap">{t("softwareSystems.clickToLearnMore")}</span>
                      </div>
                    </div>
                    
                    {/* Card header */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                        {system.name}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm border-l-2 border-white/20 pl-3 mb-4 md:mb-6">
                        <span className="text-white/50"> {t("softwareSystems.painLabel")}{" "} </span> "{system.pain}"
                      </p>
                    </div>
                    
                    {/* Apple-inspired visual area */}
                    <div className={`flex-grow flex items-center justify-center my-4 md:my-6 rounded-xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-black/30 to-black/10 border border-white/10`}>
                      {renderVisual(system.visual, system.color)}
                    </div>
                    
                    {/* Card footer with system highlights */}
                    <div className="mt-auto space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-white/50">
  {t("softwareSystems.modules", {
    count: system.modules.length
  })}
                        </div>
                        <div className="bg-white/10 hover:bg-white/20 rounded-full p-1.5 backdrop-blur-md transition-all duration-300 group-hover:bg-[#006fff]/20">
                          <Plus className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      
                      {/* Bottom CTA button */}
                      <div className="pt-2 border-t border-white/10">
                        <div className="bg-[#006fff]/10 hover:bg-[#006fff]/20 border border-[#006fff]/30 rounded-lg px-4 py-3 transition-all duration-300 group-hover:border-[#006fff]/50 group-hover:bg-[#006fff]/15">
                          <p className="text-[#006fff] text-sm font-medium flex items-center justify-center gap-2 group-hover:text-[#00a3ff] transition-colors duration-300">
                            <span>{t("softwareSystems.howWeHelp")}</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Plus icon separator between cards - hidden on mobile, visible on desktop */}
              {index < systemCardsWithProps.length - 1 && (
                <div className="hidden md:flex flex-none items-center justify-center px-4 lg:px-6">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-[#006fff]/20 to-[#3944bc]/20 border border-[#006fff]/30 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-300">
                    <Plus className="h-6 w-6 lg:h-7 lg:w-7 text-[#006fff]" />
                  </div>
                </div>
              )}
            </React.Fragment>
            ))}
          </div>
        </div>

        {/* Enhanced mobile scroll indicators with active state */}
        <div className="flex justify-center gap-2 mt-2 md:hidden">
          {systemCardsWithProps.map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentScrollIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Regular dialog for systems without a specific modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-5xl w-11/12 max-h-[90vh] glass-morphism border border-white/10 text-white overflow-y-auto">
          {selectedSystem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${selectedSystem.color} flex items-center justify-center`}>
                    <span className="text-white text-xs font-bold">{selectedSystem.id}</span>
                  </div>
                  {selectedSystem.name}
                </DialogTitle>
                <DialogDescription className="text-white/80 text-xl">
                  Eliminate: "{selectedSystem.pain}"
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 py-6">
                {/* Apple-inspired visual */}
                <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <div className="h-60 w-full flex items-center justify-center">
                    {renderVisual(selectedSystem.visual, selectedSystem.color)}
                  </div>
                </div>
                
                {/* Modules */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#006fff]/20 flex items-center justify-center mr-2">
                      <span className="text-[#006fff] text-xs"></span>
                    </span>
                   {t("softwareSystems.modulesInside")}
                  </h3>
                  <div className="glass-morphism rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedSystem.modules.map((module, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm"
                      >
                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#006fff]/20 to-[#006fff]/10 flex items-center justify-center text-white text-sm">
                          {index + 1}
                        </span>
                        <span className="text-white/90">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Result */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-[#8bfa7b]/20 flex items-center justify-center mr-2">
                      <span className="text-[#8bfa7b] text-xs"></span>
                    </span>
                    {t("softwareSystems.businessResult")}
                  </h3>
                  <div className="bg-gradient-to-r from-[#8bfa7b]/10 to-transparent backdrop-blur-sm rounded-lg p-6 border border-[#8bfa7b]/20">
                    <p className="text-xl text-white/90">{selectedSystem.result}</p>
                  </div>
                </div>

                {/* Apple-style call to action */}
                <div className="pt-6">
                  <button 
                    className="w-full py-4 px-6 bg-gradient-to-r from-[#006fff] to-[#00a3ff] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                    onClick={() => setDialogOpen(false)}
                  >
                    <span>{t("softwareSystems.cta")}</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Creative Scoring OS Modal */}
      <Dialog open={creativeScoringModalOpen} onOpenChange={setCreativeScoringModalOpen}>
        <DialogContent className="max-w-7xl w-11/12 max-h-[95vh] p-0 overflow-hidden bg-black border border-blue-900/20 touch-auto">
          <CreativeScoringModalContent onClose={() => setCreativeScoringModalOpen(false)} />
        </DialogContent>
      </Dialog>

      {/* Profit-First Media Buying Modal */}
      <Dialog 
        open={profitFirstMediaBuyingModalOpen} 
        onOpenChange={(isOpen) => {
          console.log("Profit First modal state changing to:", isOpen);
          setProfitFirstMediaBuyingModalOpen(isOpen);
        }}
      >
        <DialogContent className="max-w-7xl w-11/12 max-h-[95vh] p-0 overflow-hidden bg-black border border-green-900/20 touch-auto">
          <DialogTitle className="sr-only">Profit-First Media Buying</DialogTitle>
          <DialogDescription className="sr-only">A comprehensive system for profit-first media buying</DialogDescription>
          <ProfitFirstMediaBuyingModalContent 
            onClose={() => {
              console.log("Closing Profit First Media Buying modal from content");
              setProfitFirstMediaBuyingModalOpen(false);
            }} 
          />
        </DialogContent>
      </Dialog>

      {/* CRO Pipeline Engine Modal */}
      <Dialog 
        open={croPipelineEngineModalOpen} 
        onOpenChange={(isOpen) => {
          console.log("CRO Pipeline Engine modal state changing to:", isOpen);
          if (!isOpen) {
            console.log("Closing CRO Pipeline Engine modal from dialog change");
            setCROPipelineEngineModalOpen(false);
          }
        }}
      >
        <DialogContent className="max-w-7xl w-11/12 max-h-[95vh] p-0 overflow-hidden bg-black border border-teal-900/20 touch-auto">
          <DialogTitle className="sr-only">CRO Pipeline Engine™</DialogTitle>
          <DialogDescription className="sr-only">A comprehensive conversion rate optimization system</DialogDescription>
          <CROPipelineEngineModalContent 
            onClose={() => {
              console.log("Closing CRO Pipeline Engine modal from content");
              setCROPipelineEngineModalOpen(false);
            }} 
          />
        </DialogContent>
      </Dialog>

      {/* Solution Modals for systems with specific modals */}
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

export default SoftwareSystemsSection;
