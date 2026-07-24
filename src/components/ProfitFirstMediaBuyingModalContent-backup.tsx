import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ArrowLeft, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CreativeScoringModalContentProps {
  onClose: () => void;
}

const CreativeScoringModalContent: React.FC<CreativeScoringModalContentProps> = ({ onClose }) => {

  const handleCTAClick = () => {
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };
  
  return (
    <div className="flex flex-col h-full max-h-[90vh]">
      {/* Sticky Header */}
      <div className="sticky top-0 z-30 backdrop-blur-md bg-black/70 border-b border-white/10 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            className="mr-2 text-white/70 hover:text-white transition-colors"
            onClick={onClose}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Return to All Systems</span>
          </Button>
        </div>
        <Button 
          variant="ghost" 
          className="text-white/70 hover:text-white rounded-full h-8 w-8 p-0"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <span className="text-lg">&times;</span>
        </Button>
      </div>
      
      <ScrollArea className="flex-grow overflow-y-auto touch-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="px-6 py-8 md:px-12">
          {/* Top Section (Header Zone) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Creative Scoring OS™</h1>
              <p className="text-blue-400 font-medium mb-6">Creative IQ™ Scoring • Hook Rating System™ • Hook Rate First™</p>
              <p className="text-2xl italic text-white/80 max-w-3xl mx-auto border-l-4 border-blue-500 pl-4 py-1">
                "I launch creatives randomly and hope for the best"
              </p>
            </div>
          </motion.div>

          {/* Section 1 - Creative IQ Scoring System */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-2/5">
                <h2 className="text-3xl font-bold text-white mb-6">
                  <span className="text-blue-500">01.</span> Creative IQ™ Scoring System
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                        <Check className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">How to make it worth it</h3>
                    </div>
                    <p className="text-white/80 ml-13">
                      Every ad gets a weighted score based on funnel-relevant metrics (Hook Rate, Hold Rate, CTR, CR). The user sees the real value of each tested creative — not just surface impressions.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400">
                        <span className="text-lg">⚡</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">How to make it faster</h3>
                    </div>
                    <p className="text-white/80 ml-13">
                      Connect your campaign to a Google Sheet, Looker Studio, or API — and the score is calculated automatically within 48h.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-purple-400">
                        <span className="text-lg">🧘</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">How to make it easier</h3>
                    </div>
                    <p className="text-white/80 ml-13">
                      A 3-color system 🟢🟡🔴 tells you exactly what to cut, scale, or improve — even non-technical CEOs get it.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3 text-yellow-400">
                        <span className="text-lg">🔒</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">How to make it believable</h3>
                    </div>
                    <p className="text-white/80 ml-13">
                      Show your top 5 performing creatives for the month with results — the method sells itself.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Creative IQ Scoring Table Mockup */}
              <div className="md:w-3/5">
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <span className="bg-blue-500/20 p-1 rounded text-blue-400 text-lg">📊</span>
                      <h3 className="text-lg font-medium text-white">Creative IQ™ Score</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-white/50">Last updated: Today</span>
                      <Button variant="ghost" className="h-8 w-8 p-0 rounded-full">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Table header */}
                  <div className="grid grid-cols-7 gap-2 py-3 px-4 border-b border-white/10 bg-white/5">
                    <div className="col-span-2 text-xs font-medium text-white/70">CREATIVE</div>
                    <div className="text-xs font-medium text-white/70">HOOK</div>
                    <div className="text-xs font-medium text-white/70">HOLD</div>
                    <div className="text-xs font-medium text-white/70">CTR</div>
                    <div className="text-xs font-medium text-white/70">CR</div>
                    <div className="text-xs font-medium text-white/70">SCORE</div>
                  </div>
                  
                  {/* Row 1 - High performer */}
                  <div className="grid grid-cols-7 gap-2 py-4 px-4 border-b border-white/10 bg-gradient-to-r from-green-500/10 to-transparent">
                    <div className="col-span-2 flex items-center">
                      <div className="w-10 h-10 rounded bg-blue-500/30 mr-2 flex items-center justify-center text-xs">AD1</div>
                      <div>
                        <p className="text-sm text-white">Hero Shot 01</p>
                        <p className="text-xs text-white/50">Lifestyle, Product</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 font-medium">48%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 font-medium">52%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 font-medium">4.2%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 font-medium">3.5%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-medium">93</span>
                    </div>
                  </div>
                  
                  {/* Row 2 - Medium performer */}
                  <div className="grid grid-cols-7 gap-2 py-4 px-4 border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-transparent">
                    <div className="col-span-2 flex items-center">
                      <div className="w-10 h-10 rounded bg-purple-500/30 mr-2 flex items-center justify-center text-xs">AD2</div>
                      <div>
                        <p className="text-sm text-white">UGC Feature</p>
                        <p className="text-xs text-white/50">Testimonial</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 font-medium">32%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 font-medium">47%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 font-medium">2.8%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 font-medium">3.1%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded font-medium">76</span>
                    </div>
                  </div>
                  
                  {/* Row 3 - Low performer */}
                  <div className="grid grid-cols-7 gap-2 py-4 px-4 border-b border-white/10 bg-gradient-to-r from-red-500/10 to-transparent">
                    <div className="col-span-2 flex items-center">
                      <div className="w-10 h-10 rounded bg-red-500/30 mr-2 flex items-center justify-center text-xs">AD3</div>
                      <div>
                        <p className="text-sm text-white">Product Demo</p>
                        <p className="text-xs text-white/50">Features, Stats</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 font-medium">18%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 font-medium">22%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 font-medium">2.1%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 font-medium">1.4%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-medium">42</span>
                    </div>
                  </div>
                  
                  {/* Row 4 - Medium-High performer */}
                  <div className="grid grid-cols-7 gap-2 py-4 px-4 bg-gradient-to-r from-green-500/5 to-transparent">
                    <div className="col-span-2 flex items-center">
                      <div className="w-10 h-10 rounded bg-green-500/30 mr-2 flex items-center justify-center text-xs">AD4</div>
                      <div>
                        <p className="text-sm text-white">Problem-Solution</p>
                        <p className="text-xs text-white/50">Pain Points</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 font-medium">41%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 font-medium">38%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 font-medium">3.0%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-400 font-medium">2.9%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-medium">81</span>
                    </div>
                  </div>
                </Card>
                
                <div className="mt-4 flex items-center justify-between text-sm text-white/60 px-2">
                  <p>Data integrated from Meta Ad Manager</p>
                  <button className="text-blue-400 hover:underline flex items-center">
                    <span>Export to CSV</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Section 2 - Hook Rating System */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-10">
              <span className="text-blue-500">02.</span> Hook Rating System™
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-2/5">
                <div className="space-y-6">
                  <div className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400">
                        <span className="text-lg">💡</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">What It Is</h3>
                    </div>
                    <p className="text-white/80">
                      A dashboard view (via Airtable / Notion) that scores creatives using:
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center text-white/80">
                        <span className="w-5 h-5 mr-2 rounded-full bg-blue-500/30 flex items-center justify-center text-xs">1</span>
                        Hook Rate (3s watch)
                      </li>
                      <li className="flex items-center text-white/80">
                        <span className="w-5 h-5 mr-2 rounded-full bg-blue-500/30 flex items-center justify-center text-xs">2</span>
                        Hold Rate (50% completion)
                      </li>
                      <li className="flex items-center text-white/80">
                        <span className="w-5 h-5 mr-2 rounded-full bg-blue-500/30 flex items-center justify-center text-xs">3</span>
                        Click-Through Rate (CTR)
                      </li>
                      <li className="flex items-center text-white/80">
                        <span className="w-5 h-5 mr-2 rounded-full bg-blue-500/30 flex items-center justify-center text-xs">4</span>
                        ROAS after $1k in spend
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3 text-purple-400">
                        <span className="text-lg">📊</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">Bonus Insights</h3>
                    </div>
                    <p className="text-white/80">
                      Each creative gets a cumulative score + tag:
                    </p>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-center text-white/80">
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded mr-2">🔥 Scalable</span>
                        Ready for budget expansion
                      </li>
                      <li className="flex items-center text-white/80">
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded mr-2">🧪 To Iterate</span>
                        Potential with adjustments
                      </li>
                      <li className="flex items-center text-white/80">
                        <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded mr-2">❌ To Kill</span>
                        Cut from budget
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3 text-yellow-400">
                        <span className="text-lg">💥</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">Why It's Different</h3>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-white/80">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        It's visual, actionable, and connects creatives to real business performance.
                      </li>
                      <li className="flex items-center text-white/80">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        Clients can instantly tell what converts — not just what looks nice.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Hook Rating System Dashboard Mockup */}
              <div className="md:w-3/5">
                <Card className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/40">
                    <div className="flex items-center space-x-3">
                      <span className="text-purple-400 text-lg">📊</span>
                      <h3 className="text-lg font-medium text-white">Hook Rating System™</h3>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">View Database</span>
                      <span className="text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-400">Share</span>
                    </div>
                  </div>
                  
                  {/* Tabs */}
                  <div className="flex border-b border-white/10 bg-black/20">
                    <div className="px-4 py-2 border-b-2 border-blue-500 text-blue-500 text-sm font-medium">Dashboard</div>
                    <div className="px-4 py-2 text-white/50 text-sm">Analytics</div>
                    <div className="px-4 py-2 text-white/50 text-sm">History</div>
                  </div>
                  
                  <div className="p-6">
                    {/* Status Summary */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-black/30 border border-green-500/20 rounded-lg p-4">
                        <div className="text-xs text-white/60 mb-1">Scalable Creatives</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-green-500">4</div>
                          <div className="text-green-500 text-xs">+2 this week</div>
                        </div>
                      </div>
                      <div className="bg-black/30 border border-yellow-500/20 rounded-lg p-4">
                        <div className="text-xs text-white/60 mb-1">To Iterate</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-yellow-500">7</div>
                          <div className="text-yellow-500 text-xs">-1 this week</div>
                        </div>
                      </div>
                      <div className="bg-black/30 border border-red-500/20 rounded-lg p-4">
                        <div className="text-xs text-white/60 mb-1">To Kill</div>
                        <div className="flex items-end justify-between">
                          <div className="text-2xl font-bold text-red-500">2</div>
                          <div className="text-red-500 text-xs">Saved $1.2k</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creative Cards */}
                    <div className="space-y-3">
                      {/* Scalable Creative */}
                      <div className="bg-black/20 border border-green-500/20 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 text-xs">
                              VIDEO
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h4 className="text-white font-medium">Product Walkthrough</h4>
                                <span className="ml-2 px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400">🔥 Scalable</span>
                              </div>
                              <div className="text-white/60 text-xs mt-1">Created 3 days ago • Last edited by Maria</div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-green-500">92</div>
                        </div>
                        <div className="mt-3 grid grid-cols-4 gap-2">
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">Hook</div>
                            <div className="text-sm font-medium text-green-500">47%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">Hold</div>
                            <div className="text-sm font-medium text-green-500">52%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">CTR</div>
                            <div className="text-sm font-medium text-green-500">4.8%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">ROAS</div>
                            <div className="text-sm font-medium text-green-500">3.2x</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* To Iterate Creative */}
                      <div className="bg-black/20 border border-yellow-500/20 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-3 text-xs">
                              IMAGE
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h4 className="text-white font-medium">Before & After</h4>
                                <span className="ml-2 px-2 py-0.5 rounded text-xs bg-yellow-500/20 text-yellow-400">🧪 To Iterate</span>
                              </div>
                              <div className="text-white/60 text-xs mt-1">Created 5 days ago • Last edited by John</div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-yellow-500">74</div>
                        </div>
                        <div className="mt-3 grid grid-cols-4 gap-2">
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">Hook</div>
                            <div className="text-sm font-medium text-yellow-500">38%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">Hold</div>
                            <div className="text-sm font-medium text-green-500">45%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">CTR</div>
                            <div className="text-sm font-medium text-yellow-500">3.1%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">ROAS</div>
                            <div className="text-sm font-medium text-yellow-500">1.9x</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* To Kill Creative */}
                      <div className="bg-black/20 border border-red-500/20 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-3 text-xs">
                              VIDEO
                            </div>
                            <div>
                              <div className="flex items-center">
                                <h4 className="text-white font-medium">Technical Features</h4>
                                <span className="ml-2 px-2 py-0.5 rounded text-xs bg-red-500/20 text-red-400">❌ To Kill</span>
                              </div>
                              <div className="text-white/60 text-xs mt-1">Created 7 days ago • Last edited by Alex</div>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-red-500">32</div>
                        </div>
                        <div className="mt-3 grid grid-cols-4 gap-2">
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">Hook</div>
                            <div className="text-sm font-medium text-red-500">14%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">Hold</div>
                            <div className="text-sm font-medium text-red-500">21%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">CTR</div>
                            <div className="text-sm font-medium text-red-500">1.2%</div>
                          </div>
                          <div className="bg-black/30 rounded p-2">
                            <div className="text-xs text-white/60">ROAS</div>
                            <div className="text-sm font-medium text-red-500">0.7x</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.section>
          
          {/* Section 3 - Hook Rate First */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-10">
              <span className="text-blue-500">03.</span> Hook Rate First™ — Prioritization Logic
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <div className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 text-blue-400">
                      <span className="text-lg">💡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">What It Is</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    This is the opening gate of creative filtering. Every ad is scored on its first few seconds.
                  </p>
                  <p className="text-white/80">
                    If viewers don't hook in the first 3 seconds, they'll never see your message. Hook Rate First™ 
                    analyzes the critical opening moments and assigns immediate pass/fail status.
                  </p>
                </div>
                
                <div className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3 text-green-400">
                      <span className="text-lg">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">Outcome</h3>
                  </div>
                  <p className="text-white/80 mb-4">
                    You're no longer scaling the "prettiest" creatives — you're scaling the most effective from second one.
                  </p>
                  <div className="flex items-center justify-between bg-black/30 rounded-lg p-4 mb-4">
                    <div>
                      <div className="text-sm text-white/60">Average Hook Rate Before</div>
                      <div className="text-lg font-bold text-white">26%</div>
                    </div>
                    <div className="text-2xl">→</div>
                    <div>
                      <div className="text-sm text-white/60">Average Hook Rate After</div>
                      <div className="text-lg font-bold text-green-500">42%</div>
                    </div>
                  </div>
                  <p className="text-white/80">
                    <span className="text-blue-400 font-semibold">Result:</span> 61.5% improvement in initial viewer retention, 
                    leading to 28% reduction in cost per acquisition.
                  </p>
                </div>
              </div>
              
              {/* Hook Rate Logic Visualization */}
              <div className="md:w-1/2">
                <Card className="bg-black/40 border border-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-white/10 bg-black/60">
                    <h3 className="text-lg font-medium text-white flex items-center">
                      <span className="mr-2 text-blue-500 text-xl">🧠</span>
                      Hook Rate Decision Logic
                    </h3>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Kill Range */}
                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500/50"></div>
                        <div className="bg-black/30 border border-red-500/20 rounded-lg p-5">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-2 text-red-400">
                                <span>❌</span>
                              </div>
                              <h4 className="text-white font-medium">Hook Rate &lt; 25%</h4>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">Kill</span>
                          </div>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="h-2 bg-red-500/20 rounded-full flex-grow">
                              <div className="h-full bg-red-500 rounded-full" style={{width: "25%"}}></div>
                            </div>
                            <span className="text-white/70 text-xs">25%</span>
                          </div>
                          <p className="text-white/70 text-sm">
                            These ads waste budget and contribute to audience burnout. Immediate action: pause campaign.
                          </p>
                        </div>
                      </div>
                      
                      {/* Iterate Range */}
                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-yellow-500/50"></div>
                        <div className="bg-black/30 border border-yellow-500/20 rounded-lg p-5">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-2 text-yellow-400">
                                <span>🧪</span>
                              </div>
                              <h4 className="text-white font-medium">Hook Rate 25-40%</h4>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium">Iterate</span>
                          </div>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="h-2 bg-yellow-500/20 rounded-full flex-grow">
                              <div className="h-full bg-yellow-500 rounded-full" style={{width: "40%"}}></div>
                            </div>
                            <span className="text-white/70 text-xs">40%</span>
                          </div>
                          <p className="text-white/70 text-sm">
                            These ads show potential but need optimization. Action: Modify first 3 seconds and retest.
                          </p>
                        </div>
                      </div>
                      
                      {/* Scale Range */}
                      <div className="relative">
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-green-500/50"></div>
                        <div className="bg-black/30 border border-green-500/20 rounded-lg p-5">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-2 text-green-400">
                                <span>🔥</span>
                              </div>
                              <h4 className="text-white font-medium">Hook Rate &gt; 40%</h4>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">Scale</span>
                          </div>
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="h-2 bg-green-500/20 rounded-full flex-grow">
                              <div className="h-full bg-green-500 rounded-full" style={{width: "75%"}}></div>
                            </div>
                            <span className="text-white/70 text-xs">100%</span>
                          </div>
                          <p className="text-white/70 text-sm">
                            These ads capture audience attention immediately. Action: Increase budget by 30% weekly.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Live Hook Rate Analysis Animation */}
                    <div className="mt-8">
                      <h4 className="text-white font-medium mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-2 text-blue-400 text-xs">
                          📊
                        </span>
                        Live Hook Rate Analysis
                      </h4>
                      <div className="bg-black/30 rounded-lg border border-white/10 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-sm text-white/70">Campaign Progress</div>
                          <div className="text-sm text-white/70">Video: <span className="text-blue-400">UGC_Testimonial_03.mp4</span></div>
                        </div>
                        <div className="h-6 bg-white/5 rounded-full mb-2 overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500/50 to-blue-500 animate-pulse" style={{width: "42%"}}></div>
                          <div className="absolute top-0 left-[42%] h-full border-l-2 border-white/30 animate-pulse"></div>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <div className="text-white/50">0s</div>
                          <div className="text-white/80">Hook Rate: <span className="text-blue-400 font-medium">42%</span></div>
                          <div className="text-white/50">60s</div>
                        </div>
                        <div className="mt-4 py-2 border-t border-white/10 flex justify-center">
                          <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium animate-pulse">
                            ✓ Passed Hook Rate Threshold
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </motion.section>
          
          {/* Creative Pipeline System Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Creative Pipeline System™
              </h2>
              <p className="text-lg text-blue-400 font-medium mb-2">
                Creative Battle Plan™ • Cadence Machine™ • Creative Vault™
              </p>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Turn creative chaos into a predictable performance machine
              </p>
            </div>

            {/* Three Modules */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">1.</div>
                <h4 className="text-lg font-semibold text-white">Creative Battle Plan™</h4>
              </div>
              <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">2.</div>
                <h4 className="text-lg font-semibold text-white">Cadence Machine™</h4>
              </div>
              <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">3.</div>
                <h4 className="text-lg font-semibold text-white">Creative Vault™</h4>
              </div>
            </div>

            {/* Creative Battle Plan Details */}
            <div className="space-y-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-blue-400">🎯</span> Creative Battle Plan™
                </h3>
                <p className="text-white/80 mb-4">
                  Each client receives a pre-built backlog of testable ideas, organized by:
                </p>
                <ul className="space-y-2 text-white/80 ml-6 mb-4">
                  <li>• Ad format</li>
                  <li>• Psychological angle (pain, gain, social proof, etc.)</li>
                  <li>• Objection handled</li>
                  <li>• Target avatar</li>
                </ul>
                <p className="text-lg font-semibold text-blue-300">
                  The backlog isn't random — it's a learning engine.
                </p>
              </div>

              {/* Creative Backlog Visual */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6 rounded-lg border border-blue-500/20">
                <h4 className="text-xl font-semibold text-white mb-4">Creative Backlog</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-blue-900/20 border-blue-500/30 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-300 font-medium">To Test</span>
                      <span className="text-white font-bold text-2xl">5</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">UGC • Story<br/>Problem-agitation hook w/ quick solution reveal</p>
                    <p className="text-xs text-blue-300">Avatar 1</p>
                  </Card>
                  <Card className="bg-purple-900/20 border-purple-500/30 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-300 font-medium">In Progress</span>
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Animation • Feature<br/>Before/After transformation sequence</p>
                    <p className="text-xs text-purple-300">Avatar 2</p>
                  </Card>
                  <Card className="bg-orange-900/20 border-orange-500/30 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-300 font-medium">Testimonial</span>
                      <span className="text-white font-bold text-2xl">3</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Social Proof<br/>Client success story with ROI callout</p>
                    <p className="text-xs text-orange-300">Avatar 3</p>
                  </Card>
                  <Card className="bg-green-900/20 border-green-500/30 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-green-300 font-medium">Approved</span>
                      <span className="text-white font-bold text-2xl">2</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Product Demo • Features<br/>Quick-win benefit sequence</p>
                    <p className="text-xs text-green-300">Avatar 1</p>
                  </Card>
                </div>
              </div>

              {/* Angle Distribution */}
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 p-6 rounded-lg border border-yellow-500/20">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span>⚡</span> AI-Powered Prioritization
                </h4>
                <p className="text-white/80 mb-6">
                  An AI-powered scoring engine ranks upcoming tests based on past performance (e.g., hooks that worked get derivatives prioritized first).
                </p>
                <h5 className="text-lg font-semibold text-white mb-4">Angle Distribution</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32">Problem</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full" style={{ width: '32%' }}></div>
                    </div>
                    <span className="text-white font-semibold w-12 text-right">32%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32">Solution</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: '24%' }}></div>
                    </div>
                    <span className="text-white font-semibold w-12 text-right">24%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32">Social Proof</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <span className="text-white font-semibold w-12 text-right">40%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32">Objection</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full" style={{ width: '14%' }}></div>
                    </div>
                    <span className="text-white font-semibold w-12 text-right">14%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32">Scarcity</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                      <div className="bg-orange-500 h-full rounded-full" style={{ width: '20%' }}></div>
                    </div>
                    <span className="text-white font-semibold w-12 text-right">20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cadence Machine Details */}
            <div className="space-y-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-green-400">🧘</span> Cadence Machine™
                </h3>
                <p className="text-white/80 mb-4">
                  Clients drag and drop assets they approve into a Notion-style 'Approved' column, eliminating email validation hell.
                </p>
                <p className="text-lg font-semibold text-blue-300 mb-6">
                  The strategy is visualized before testing.
                </p>
              </div>

              {/* Approval Status */}
              <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 p-6 rounded-lg border border-green-500/20">
                <h4 className="text-xl font-semibold text-white mb-4">Approval Status</h4>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="h-12 w-12 text-green-400" />
                    <div>
                      <p className="text-3xl font-bold text-white">2/7</p>
                      <p className="text-sm text-gray-400">Approved</p>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700/30 rounded-full h-4 overflow-hidden">
                    <div className="bg-green-500 h-full rounded-full" style={{ width: '28.5%' }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">5 pending review</p>
              </div>

              {/* Weekly Strategy */}
              <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/20 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  <span>🔒</span> Weekly Strategy
                </h4>
                <p className="text-white/80 italic mb-6">
                  "This week: 5 hooks across 3 avatars. Objective: isolate top performer."
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-sm text-gray-400 mb-1">Hook Testing</p>
                    <p className="text-2xl font-bold text-white">5 variants</p>
                  </div>
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-sm text-gray-400 mb-1">Avatar Coverage</p>
                    <p className="text-2xl font-bold text-white">3 personas</p>
                  </div>
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-sm text-gray-400 mb-1">Testing Budget</p>
                    <p className="text-2xl font-bold text-white">$750</p>
                  </div>
                  <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/20">
                    <p className="text-sm text-gray-400 mb-1">Expected Outcome</p>
                    <p className="text-xl font-bold text-white">Top 20%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Vault Details */}
            <div className="space-y-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-purple-400">📚</span> Creative Vault™
                </h3>
                <p className="text-white/80 mb-4">
                  Create an archive of all creatives tested, with metadata:
                </p>
                <ul className="space-y-2 text-white/80 ml-6">
                  <li>• Angle used (e.g., "loss aversion," "status gain")</li>
                  <li>• Creative type (UGC, animated, scripted, cinematic, etc.)</li>
                  <li>• Performance data</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-white mb-3">Purpose:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                    <p className="text-green-300 font-medium">Know what to reuse</p>
                  </div>
                  <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/20">
                    <p className="text-red-300 font-medium">Know what never to repeat</p>
                  </div>
                  <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                    <p className="text-blue-300 font-medium">Know what to remix</p>
                  </div>
                </div>
              </div>

              {/* Creative Archive Visual */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-6 rounded-lg border border-blue-500/20">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                  <h4 className="text-xl font-semibold text-white">Creative Archive</h4>
                  <div className="flex gap-2 w-full md:w-auto">
                    <input 
                      type="text" 
                      placeholder="Search assets..."
                      className="bg-white/10 border border-white/20 rounded px-3 py-1 text-white text-sm flex-1 md:flex-none"
                      readOnly
                    />
                    <button className="bg-blue-500/20 border border-blue-500/30 rounded px-3 py-1 text-blue-300 text-sm">
                      Filter
                    </button>
                  </div>
                </div>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="bg-purple-500/20 border border-purple-500/30 rounded px-3 py-1 text-purple-300 text-sm">
                    Type: UGC
                  </span>
                  <span className="bg-green-500/20 border border-green-500/30 rounded px-3 py-1 text-green-300 text-sm">
                    ROAS: &gt;2.0x
                  </span>
                  <span className="bg-blue-500/20 border border-blue-500/30 rounded px-3 py-1 text-blue-300 text-sm">
                    Angle: Social Proof
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="bg-green-900/20 border-green-500/30 p-4">
                    <div className="text-center">
                      <h5 className="text-white font-semibold mb-2">Creative #10</h5>
                      <p className="text-2xl font-bold text-green-400 mb-1">3.2x ROAS</p>
                      <p className="text-sm text-gray-400">UGC</p>
                      <p className="text-sm text-blue-300">Problem</p>
                    </div>
                  </Card>
                  <Card className="bg-orange-900/20 border-orange-500/30 p-4">
                    <div className="text-center">
                      <h5 className="text-white font-semibold mb-2">Creative #20</h5>
                      <p className="text-2xl font-bold text-orange-400 mb-1">1.8x ROAS</p>
                      <p className="text-sm text-gray-400">Animation</p>
                      <p className="text-sm text-blue-300">Solution</p>
                    </div>
                  </Card>
                  <Card className="bg-green-900/20 border-green-500/30 p-4">
                    <div className="text-center">
                      <h5 className="text-white font-semibold mb-2">Creative #30</h5>
                      <p className="text-2xl font-bold text-green-400 mb-1">2.5x ROAS</p>
                      <p className="text-sm text-gray-400">Demo</p>
                      <p className="text-sm text-blue-300">Social Proof</p>
                    </div>
                  </Card>
                  <Card className="bg-red-900/20 border-red-500/30 p-4">
                    <div className="text-center">
                      <h5 className="text-white font-semibold mb-2">Creative #40</h5>
                      <p className="text-2xl font-bold text-red-400 mb-1">0.9x ROAS</p>
                      <p className="text-sm text-gray-400">Testimonial</p>
                      <p className="text-sm text-blue-300">Objection</p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Performance by Angle */}
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-xl font-semibold text-white mb-6">Performance by Angle</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32 md:w-40 text-sm md:text-base">Social Proof</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '85%' }}>
                        <span className="text-white text-sm font-medium">3.2x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32 md:w-40 text-sm md:text-base">Problem → Solution</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
                      <div className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '70%' }}>
                        <span className="text-white text-sm font-medium">2.8x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32 md:w-40 text-sm md:text-base">Before/After</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
                      <div className="bg-purple-500 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '65%' }}>
                        <span className="text-white text-sm font-medium">2.5x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32 md:w-40 text-sm md:text-base">Features</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
                      <div className="bg-yellow-500 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '55%' }}>
                        <span className="text-white text-sm font-medium">2.1x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32 md:w-40 text-sm md:text-base">Scarcity</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
                      <div className="bg-orange-500 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '45%' }}>
                        <span className="text-white text-sm font-medium">1.8x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white w-32 md:w-40 text-sm md:text-base">Testimonials</span>
                    <div className="flex-1 bg-gray-700/30 rounded-full h-8 overflow-hidden">
                      <div className="bg-red-500 h-full rounded-full flex items-center justify-end pr-2" style={{ width: '30%' }}>
                        <span className="text-white text-sm font-medium">1.2x</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-blue-500/20 p-10 mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to implement Creative Scoring OS™?</h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Stop guessing which ads work. Get clear, actionable insights and significantly reduce your ad spend waste.
              </p>
              <Button 
                onClick={handleCTAClick}
                className="px-8 py-6 bg-gradient-to-r from-[#006fff] to-[#00a3ff] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/20 text-lg"
              >
                Talk to a TDIA Strategist
              </Button>
            </div>
          </motion.div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default CreativeScoringModalContent;
