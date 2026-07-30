
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowLeft, Play, X, Check, Lightbulb } from "lucide-react";
import StickyHeader from './StickyHeader';
import Footer from './Footer';
import { fadeInUp, fadeInScale, staggerContainer, staggeredItem } from '../lib/animations';

const extractYouTubeId = (url: string): string | null => {
  const match = url.match(/(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const CaseStudyDetail: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const { t, ready } = useTranslation();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  if (!ready) {
    return <div className="min-h-screen bg-[#060910]"></div>;
  }

  // Vérifier si l'étude de cas existe
  const caseStudyExists = caseId && ['onyx', 'runak', 'lockfeet', 'gococonut', 'osplash'].includes(caseId);
  
  if (!caseStudyExists) {
    return (
      <div className="w-full bg-[#060910] min-h-screen">
        <StickyHeader />
        <div className="container mx-auto px-4 pt-40 pb-20 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {t('csd.global.notFoundTitle')}
          </h1>
          <Link to="/case-studies">
            <Button className="btn-tdia">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('csd.global.notFoundBack')}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

   const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <div className="w-full bg-[#060910] min-h-screen overflow-x-hidden">
      <StickyHeader />
      
      {/* Hero Section */}
      <motion.div 
        className="container mx-auto px-4 pt-32 md:pt-40 pb-8 md:pb-16"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="mb-6 md:mb-8">
          <Link to="/case-studies" className="inline-flex items-center text-[#7c8aa5] hover:text-white transition-colors mb-4 md:mb-6 text-sm font-mono-tdia uppercase tracking-wider">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('csd.global.back')}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="micro-label mb-4">Case study</div>
            <h1 className="tdia-h text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px] mb-4 capitalize break-words">
              <span className="serif">{caseId}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#7c8aa5] mb-6 md:mb-8 leading-relaxed">
              {t(`csd.${caseId}.hero.subtitle`)}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3">
              <span className="font-mono-tdia text-2xl sm:text-3xl md:text-4xl text-[#9ec8ff]">
                {t(`csd.${caseId}.results.cards.0.value`)}
              </span>
              <div>
                <span className="text-lg sm:text-xl md:text-2xl font-medium text-white block">
                  {t(`csd.${caseId}.hero.metricLabel`)}
                </span>
                <span className="text-[#7c8aa5] text-sm">
                  {t(`csd.${caseId}.hero.period`)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <motion.div
              variants={fadeInScale}
              className="aspect-video tdia-card overflow-hidden"
            >
              <img 
                src={t(`caseStudies.${caseId}.image`)}
                alt={caseId}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Tabs */}
      <motion.div 
        className="container mx-auto px-4 pb-12 md:pb-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <Tabs defaultValue="challenge" className="w-full">
          {/* Mobile-responsive tabs with scroll */}
          <div className="relative mb-6 md:mb-8">
            <ScrollArea className="w-full whitespace-nowrap">
              <TabsList className="inline-flex w-max min-w-full tdia-card p-1">
                <TabsTrigger 
                  value="challenge" 
                  className="data-[state=active]:bg-[#4d9fff]/15 data-[state=active]:text-[#9ec8ff] px-3 md:px-4 py-2 text-xs md:text-sm whitespace-nowrap"
                >
                  {t('csd.global.tabs.challenge')}
                </TabsTrigger>
                <TabsTrigger 
                  value="approach" 
                  className="data-[state=active]:bg-[#4d9fff]/15 data-[state=active]:text-[#9ec8ff] px-3 md:px-4 py-2 text-xs md:text-sm whitespace-nowrap"
                >
                  {t('csd.global.tabs.approach')}
                </TabsTrigger>
                <TabsTrigger 
                  value="results" 
                  className="data-[state=active]:bg-[#4d9fff]/15 data-[state=active]:text-[#9ec8ff] px-3 md:px-4 py-2 text-xs md:text-sm whitespace-nowrap"
                >
                  {t('csd.global.tabs.results')}
                </TabsTrigger>
                <TabsTrigger 
                  value="insights" 
                  className="data-[state=active]:bg-[#4d9fff]/15 data-[state=active]:text-[#9ec8ff] px-3 md:px-4 py-2 text-xs md:text-sm whitespace-nowrap"
                >
                  {t('csd.global.tabs.insights')}
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" className="md:hidden" />
            </ScrollArea>
          </div>

          {/* Challenge Tab */}
          <TabsContent value="challenge" className="mt-0">
            <motion.div variants={staggeredItem}>
              <Card className="tdia-card">
                <CardContent className="p-4 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">{t('csd.global.tabs.challenge')}</h2>
                  
                  <p className="text-[#7c8aa5] text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {t(`csd.${caseId}.challenge.intro`)}
                  </p>

                  {/* Company Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Company Overview</h3>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row">
                          <span className="text-[#7c8aa5] min-w-[120px] font-medium mb-1 sm:mb-0">Industry:</span>
                          <span className="text-[#7c8aa5]">{t(`csd.${caseId}.challenge.company.industry`)}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                          <span className="text-[#7c8aa5] min-w-[120px] font-medium mb-1 sm:mb-0">Location:</span>
                          <span className="text-[#7c8aa5]">{t(`csd.${caseId}.challenge.company.location`)}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                          <span className="text-[#7c8aa5] min-w-[120px] font-medium mb-1 sm:mb-0">Main Product:</span>
                          <span className="text-[#7c8aa5]">{t(`csd.${caseId}.challenge.company.mainProduct`)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Objectives */}
                  <div className="mb-6 md:mb-8">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Objectives</h3>
                    <ul className="space-y-2">
                      {Array.from({ length: 10 }, (_, i) => {
                        const objective = t(`csd.${caseId}.challenge.objectives.${i}`, { defaultValue: '' });
                        return objective ? (
                          <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                            <span className="text-[#9ec8ff] mr-2 mt-1 flex-shrink-0">•</span>
                            <span className="break-words">{objective}</span>
                          </li>
                        ) : null;
                      }).filter(Boolean)}
                    </ul>
                  </div>

                  {/* Initial Problems or Challenges */}
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                      {t(`csd.${caseId}.challenge.initialProblems.0`, { defaultValue: '' }) ? 'Initial Problems' : 'Challenges'}
                    </h3>
                    <ul className="space-y-2">
                      {Array.from({ length: 10 }, (_, i) => {
                        const problem = t(`csd.${caseId}.challenge.initialProblems.${i}`, { defaultValue: '' }) || 
                                      t(`csd.${caseId}.challenge.challenges.${i}`, { defaultValue: '' });
                        return problem ? (
                          <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                            <span className="text-[#7c8aa5] mr-2 mt-1 flex-shrink-0">×</span>
                            <span className="break-words">{problem}</span>
                          </li>
                        ) : null;
                      }).filter(Boolean)}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Approach Tab */}
          <TabsContent value="approach" className="mt-0">
            <motion.div variants={staggeredItem}>
              <Card className="tdia-card">
                <CardContent className="p-4 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">{t('csd.global.tabs.approach')}</h2>
                  
                  <p className="text-[#7c8aa5] text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {t(`csd.${caseId}.approach.intro`)}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Targeting Strategy */}
                    {t(`csd.${caseId}.approach.targeting.0`, { defaultValue: '' }) && (
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Targeting Strategy</h3>
                        <ul className="space-y-2">
                          {Array.from({ length: 10 }, (_, i) => {
                            const item = t(`csd.${caseId}.approach.targeting.${i}`, { defaultValue: '' });
                            return item ? (
                              <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                                <span className="text-[#9ec8ff] mr-2 mt-1 flex-shrink-0">→</span>
                                <span className="break-words">{item}</span>
                              </li>
                            ) : null;
                          }).filter(Boolean)}
                        </ul>
                      </div>
                    )}

                    {/* Creative Strategy */}
                    {t(`csd.${caseId}.approach.creative.0`, { defaultValue: '' }) && (
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Creative Strategy</h3>
                        <ul className="space-y-2">
                          {Array.from({ length: 10 }, (_, i) => {
                            const item = t(`csd.${caseId}.approach.creative.${i}`, { defaultValue: '' });
                            return item ? (
                              <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                                <span className="text-[#9ec8ff] mr-2 mt-1 flex-shrink-0">•</span>
                                <span className="break-words">{item}</span>
                              </li>
                            ) : null;
                          }).filter(Boolean)}
                        </ul>
                      </div>
                    )}

                    {/* Scaling Strategy */}
                    {t(`csd.${caseId}.approach.scaling.0`, { defaultValue: '' }) && (
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Scaling Strategy</h3>
                        <ul className="space-y-2">
                          {Array.from({ length: 10 }, (_, i) => {
                            const item = t(`csd.${caseId}.approach.scaling.${i}`, { defaultValue: '' });
                            return item ? (
                              <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                                <span className="text-[#9ec8ff] mr-2 mt-1 flex-shrink-0">↗</span>
                                <span className="break-words">{item}</span>
                              </li>
                            ) : null;
                          }).filter(Boolean)}
                        </ul>
                      </div>
                    )}

                    {/* Strategy (for gococonut, lockfeet) */}
                    {t(`csd.${caseId}.approach.strategy.0`, { defaultValue: '' }) && (
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Strategy</h3>
                        <ul className="space-y-2">
                          {Array.from({ length: 10 }, (_, i) => {
                            const item = t(`csd.${caseId}.approach.strategy.${i}`, { defaultValue: '' });
                            return item ? (
                              <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                                <span className="text-[#9ec8ff] mr-2 mt-1 flex-shrink-0">→</span>
                                <span className="break-words">{item}</span>
                              </li>
                            ) : null;
                          }).filter(Boolean)}
                        </ul>
                      </div>
                    )}

                    {/* Optimization (for gococonut) */}
                    {t(`csd.${caseId}.approach.optimization.0`, { defaultValue: '' }) && (
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Optimization</h3>
                        <ul className="space-y-2">
                          {Array.from({ length: 10 }, (_, i) => {
                            const item = t(`csd.${caseId}.approach.optimization.${i}`, { defaultValue: '' });
                            return item ? (
                              <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                                <span className="text-[#9ec8ff] mr-2 mt-1 flex-shrink-0">↗</span>
                                <span className="break-words">{item}</span>
                              </li>
                            ) : null;
                          }).filter(Boolean)}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Key Actions */}
                  {t(`csd.${caseId}.approach.keyActions.0`, { defaultValue: '' }) && (
                    <div className="mt-6 md:mt-8">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Key Actions</h3>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {Array.from({ length: 10 }, (_, i) => {
                          const action = t(`csd.${caseId}.approach.keyActions.${i}`, { defaultValue: '' });
                          return action ? (
                            <span key={i} className="bg-[#4d9fff]/15 text-[#9ec8ff] px-3 md:px-4 py-2 rounded-full hairline text-xs md:text-sm break-words font-mono-tdia uppercase tracking-wider">
                              {action}
                            </span>
                          ) : null;
                        }).filter(Boolean)}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="mt-0">
            <motion.div variants={staggeredItem}>
              <Card className="tdia-card">
                <CardContent className="p-4 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">{t('csd.global.tabs.results')}</h2>
                  
                  {/* Results Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                    {Array.from({ length: 6 }, (_, i) => {
                      const value = t(`csd.${caseId}.results.cards.${i}.value`, { defaultValue: '' });
                      const label = t(`csd.${caseId}.results.cards.${i}.label`, { defaultValue: '' });
                      const desc = t(`csd.${caseId}.results.cards.${i}.desc`, { defaultValue: '' });
                      
                      return value && label ? (
                        <div key={i} className="tdia-card p-4 md:p-6">
                          <div className="text-2xl md:text-3xl font-bold text-[#9ec8ff] mb-2 break-words">{value}</div>
                          <div className="text-white font-semibold mb-2 text-sm md:text-base break-words">{label}</div>
                          <div className="text-[#7c8aa5] text-xs md:text-sm break-words">{desc}</div>
                        </div>
                      ) : null;
                    }).filter(Boolean)}
                  </div>

                  {/* Testimonial */}
                  {t(`csd.${caseId}.results.testimonial.name`, { defaultValue: '' }) && (
                    <div className="tdia-card p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Client Testimonial</h3>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#4d9fff]/20 hairline rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                          <span className="text-[#9ec8ff] font-bold text-sm md:text-base">
                            {t(`csd.${caseId}.results.testimonial.name`).charAt(0)}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-white font-semibold text-sm md:text-base break-words">{t(`csd.${caseId}.results.testimonial.name`)}</div>
                          <div className="text-[#7c8aa5] text-xs md:text-sm break-words">{t(`csd.${caseId}.results.testimonial.title`)}</div>
                        </div>
                      </div>
                      {(() => {
                        const videoUrl = t(`csd.${caseId}.results.testimonial.videoUrl`, { defaultValue: '' });
                        const videoId = videoUrl ? extractYouTubeId(videoUrl) : null;
                        if (!videoId) return null;
                        return (
                          <div
                            className="aspect-video tdia-card overflow-hidden cursor-pointer group relative"
                            onClick={() => setActiveVideoId(videoId)}
                          >
                            <img
                              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                              }}
                              alt={t(`csd.${caseId}.results.testimonial.name`)}
                              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="relative">
                                <div className="absolute -inset-4 rounded-full bg-[#2f6bff]/25 blur-2xl animate-pulse" />
                                <button className="btn-tdia !p-4 rounded-full relative" aria-label="Play testimonial">
                                  <Play className="h-5 w-5" fill="currentColor" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Insights Tab */}
          <TabsContent value="insights" className="mt-0">
            <motion.div variants={staggeredItem}>
              <Card className="tdia-card">
                <CardContent className="p-4 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">{t('csd.global.tabs.insights')}</h2>
                  
                  {/* Key Insights */}
                  {t(`csd.${caseId}.insights.bullets.0`, { defaultValue: '' }) && (
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Key Insights</h3>
                      <ul className="space-y-3">
                        {Array.from({ length: 10 }, (_, i) => {
                          const insight = t(`csd.${caseId}.insights.bullets.${i}`, { defaultValue: '' });
                          return insight ? (
                            <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                              <Lightbulb className="h-4 w-4 text-[#9ec8ff] mr-2 mt-1 flex-shrink-0" strokeWidth={1.6} />
                              <span className="break-words">{insight}</span>
                            </li>
                          ) : null;
                        }).filter(Boolean)}
                      </ul>
                    </div>
                  )}

                  {/* Why It Worked */}
                  {t(`csd.${caseId}.insights.whyItWorked.0`, { defaultValue: '' }) && (
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-4">Why It Worked</h3>
                      <ul className="space-y-3">
                        {Array.from({ length: 10 }, (_, i) => {
                          const reason = t(`csd.${caseId}.insights.whyItWorked.${i}`, { defaultValue: '' });
                          return reason ? (
                            <li key={i} className="text-[#7c8aa5] flex items-start text-sm md:text-base">
                              <Check className="h-4 w-4 text-[#9ec8ff] mr-2 mt-1 flex-shrink-0" strokeWidth={1.6} />
                              <span className="break-words">{reason}</span>
                            </li>
                          ) : null;
                        }).filter(Boolean)}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <motion.div 
          className="mt-12 md:mt-16 text-center"
          variants={staggeredItem}
        >
          <Card className="tdia-card halo-cta">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 break-words">
                {t('csd.global.cta.heading')}
              </h3>
              <p className="text-[#7c8aa5] text-base md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed break-words">
                {t('csd.global.cta.subheading')}
              </p>
              <div className="flex justify-center">
                <Button 
                  
                  onClick={handleCTAClick}
                  
                  className="btn-tdia">
                  {t('csd.global.cta.button')}
                </Button>
              </div>
              <p className="text-[#7c8aa5] text-xs md:text-sm mt-4 break-words">
                {t('csd.global.cta.note')}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <Footer />

      {activeVideoId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/90"
          onClick={() => setActiveVideoId(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white hover:text-[#9ec8ff] transition-colors"
              onClick={() => setActiveVideoId(null)}
              aria-label="Close video"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full tdia-card overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudyDetail;
