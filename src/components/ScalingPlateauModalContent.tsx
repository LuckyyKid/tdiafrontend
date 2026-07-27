
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, BarChart3, TrendingUp, Rocket, Target, Zap, CheckCircle, Brain, PieChart, AlertTriangle, Activity } from 'lucide-react';

interface ScalingPlateauModalContentProps {
  onClose: () => void;
}

const ScalingPlateauModalContent: React.FC<ScalingPlateauModalContentProps> = ({ onClose }) => {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-12 p-8">
        {/* Enhanced centered main quote with icon */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-orange-500/20 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            "We've hit a plateau, and nothing we try seems to move the needle"
          </h2>
        </div>
        
        {/* Visual separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0a0b1d] px-4 text-sm text-gray-400">THE SCALING CHAOS</span>
          </div>
        </div>
        
        {/* Problem Section - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4 pl-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-red-400"></span> THE PROBLEM:
            </h3>
            
            <p className="text-xl font-semibold text-gray-200 italic">
              "I'm scaling, but I don't know if I'm actually making money."
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>Your media buying feels disconnected from the business reality.</p>
              
              <p>You scale campaigns based on ROAS... without knowing the actual margin, LTV, or cashflow impact.</p>
              
              <p>There's no live overview of what's working or what's breaking. And when scaling gets messy, you fly blind.</p>
              
              <div className="pt-4 bg-red-900/20 p-4 rounded-md border border-red-500/20">
                <p className="font-medium text-red-200 flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4" />
                  Result? 
                </p>
                <p className="text-red-200">Overlapping promotions, supply chain chaos, and lost profit hidden behind "good" ad results.</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced visual element for problem section */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-orange-900/10"></div>
              
              {/* Chaotic scaling visualization */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Scattered, disconnected metrics representing chaotic scaling */}
                  <div className="absolute top-1/4 left-1/4 w-14 h-10 bg-red-500/30 border border-red-500/50 rounded-md flex items-center justify-center">
                    <span className="text-xs text-red-300 font-bold">ROAS</span>
                  </div>
                  
                  <div className="absolute top-1/2 right-1/4 w-14 h-10 bg-orange-500/30 border border-orange-500/50 rounded-md flex items-center justify-center">
                    <span className="text-xs text-orange-300 font-bold">LTV</span>
                  </div>
                  
                  <div className="absolute bottom-1/3 left-1/3 w-14 h-10 bg-red-500/30 border border-red-500/50 rounded-md flex items-center justify-center">
                    <span className="text-xs text-red-300 font-bold">STOCK</span>
                  </div>
                  
                  <div className="absolute top-1/3 right-1/3 w-14 h-10 bg-orange-500/30 border border-orange-500/50 rounded-md flex items-center justify-center">
                    <span className="text-xs text-orange-300 font-bold">$$$</span>
                  </div>
                  
                  {/* Broken connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <g stroke="#ef4444" strokeWidth="1" fill="none" strokeDasharray="3,3" opacity="0.4">
                      <path d="M25,25 Q40,40 75,50" />
                      <path d="M75,50 Q60,70 33,67" />
                      <path d="M33,67 Q50,35 67,33" />
                    </g>
                  </svg>
                  
                  {/* Central chaos symbol */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full border-2 border-red-500/50 flex items-center justify-center">
                      <AlertTriangle className="h-4 w-4 text-red-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* TDIA Method Section - Right aligned with left visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Enhanced visual element for TDIA method */}
          <div className="flex items-center justify-center h-full order-last md:order-first">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-blue-500/10"></div>
              
              {/* Growth OS Dashboard visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 border-2 border-blue-500/30 rounded-lg">
                  {/* Dashboard grid */}
                  <div className="absolute inset-2 grid grid-cols-2 grid-rows-3 gap-1">
                    {/* KPI widgets */}
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-blue-300 text-xs font-medium">ROAS</span>
                    </div>
                    <div className="bg-green-500/20 border border-green-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-green-300 text-xs font-medium">LTV</span>
                    </div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-purple-300 text-xs font-medium">MER</span>
                    </div>
                    <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-yellow-300 text-xs font-medium">MARGIN</span>
                    </div>
                    <div className="bg-pink-500/20 border border-pink-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-pink-300 text-xs font-medium">STOCK</span>
                    </div>
                    <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-sm flex items-center justify-center">
                      <span className="text-cyan-300 text-xs font-medium">PERF</span>
                    </div>
                  </div>
                  
                  {/* Central dashboard icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center z-10">
                      <BarChart3 className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data flow lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <g stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.6">
                    <path d="M20,20 L50,50" strokeDasharray="2,2" />
                    <path d="M80,20 L50,50" strokeDasharray="2,2" />
                    <path d="M20,80 L50,50" strokeDasharray="2,2" />
                    <path d="M80,80 L50,50" strokeDasharray="2,2" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 pr-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-blue-400"></span> THE TDIA METHOD:
            </h3>
            
            <p className="text-lg font-medium text-gray-200">
              We turn growth from chaos to command mode.
            </p>
            
            <p className="text-gray-300">
              With our Growth OS™, we sync marketing, operations, and finance in one unified dashboard, live.
            </p>
            
            <p className="text-gray-300">
              Every decision becomes data-backed, not gut-based.
            </p>
            
            <div className="pt-2">
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1"></span>
                  <div>
                    <span className="font-semibold text-blue-200">Growth Command Center™:</span>
                    <span className="text-gray-300"> 6 key KPIs tracked in real time (ROAS, LTV, MER, margin, stock, creative performance)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1"></span>
                  <div>
                    <span className="font-semibold text-blue-200">Insight Dashboard™:</span>
                    <span className="text-gray-300"> simplified visualizations = no analysis paralysis</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1"></span>
                  <div>
                    <span className="font-semibold text-blue-200">Business Pulse Sync™:</span>
                    <span className="text-gray-300"> aligns growth plans with supply & cashflow</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1"></span>
                  <div>
                    <span className="font-semibold text-blue-200">Auto-Updated:</span>
                    <span className="text-gray-300"> via Shopify, Triple Whale & your internal ops</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Why it Works Section - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            <span className="text-purple-400"></span> WHY IT WORKS:
          </h3>
          
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/20 p-6 rounded-lg border border-purple-500/20 max-w-4xl mx-auto">
            <p className="text-lg font-semibold text-white mb-4">
              Because we give you what most brands lack:
            </p>
            
            <div className="space-y-3 text-gray-300">
              <p className="font-medium">A single, real-time source of truth, for both performance and profitability.</p>
              
              <p>You don't need to check 5 tools or request reports. You see the margin impact of every dollar spent.</p>
              
              <p>Your team understands the "why" behind scaling decisions. Your growth is no longer reactive, it's predictable.</p>
            </div>
          </div>
        </div>
        
        {/* Outcome Section - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            <span className="text-green-400"></span> THE OUTCOME:
          </h3>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-green-900/20 p-6 rounded-lg border border-blue-500/20 max-w-3xl mx-auto">
            <p className="text-xl font-semibold text-white mb-4">
              You scale profitably, without the chaos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <span></span>
                <span>Each campaign is aligned with your true business targets</span>
              </div>
              <div className="flex items-center gap-2">
                <span></span>
                <span>No more stock-outs or wasted spend</span>
              </div>
              <div className="flex items-center gap-2">
                <span></span>
                <span>You feel in control, because your marketing is synced with reality</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action Section - Centered */}
        <div className="space-y-3 pt-6 text-center">
          <p className="text-lg font-medium flex items-center gap-2 justify-center">
            <span></span> Ready to turn growth chaos into command mode?
          </p>
          
          <Button 
            onClick={onClose} 
            className="mt-4 text-white font-semibold flex items-center gap-2 px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 mx-auto"
          >
            Talk to a strategist about our Growth OS™ <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ScalingPlateauModalContent;
