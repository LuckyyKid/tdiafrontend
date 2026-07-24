
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, AlertTriangle, Rocket, CheckCircle, TrendingUp, Layers, BarChart2, Zap, Target, Clock, Brain } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

interface CreativeModalContentProps {
  onClose: () => void;
}

const CreativeModalContent: React.FC<CreativeModalContentProps> = ({ onClose }) => {
  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'creative_modal');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };

  return (
    <ScrollArea className="h-full max-h-[80vh]">
      <div className="space-y-12 p-8">
        {/* Enhanced centered main quote with icon */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            "I throw creatives out randomly"
          </h2>
        </div>
        
        {/* Visual separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0a0b1d] px-4 text-sm text-gray-400">THE CREATIVE CHAOS TRAP</span>
          </div>
        </div>
        
        {/* Problem Section - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE PROBLEM:
            </h3>
            
            <p className="text-xl font-semibold text-gray-200 italic">
              "I throw creatives out randomly and hope for the best."
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>You're posting ads without a clear testing methodology.</p>
              <p>You launch what feels right in the moment — no process, no hypothesis, no structured approach.</p>
              <p>Some ads work, others flop, and you can't explain why.</p>
              
              <div className="pt-3">
                <p className="font-medium">The result?</p>
                <ul className="space-y-1 list-none pt-2">
                  <li>→ Random performance that can't be replicated</li>
                  <li>→ Wasted budget on untested concepts</li>
                  <li>→ No learning framework to build on</li>
                  <li>→ Constant stress about what to post next</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Enhanced visual element for problem section */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-blue-900/10"></div>
              
              {/* Animated chaos visualization */}
              <div className="absolute inset-0 flex flex-wrap">
                {[...Array(25)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1/5 h-1/5 border border-red-500/10 flex items-center justify-center ${
                      i % 3 === 0 ? 'animate-pulse bg-red-500/5' : 
                      i % 5 === 0 ? 'animate-bounce bg-orange-500/5' : 'bg-blue-900/5'
                    }`}
                    style={{ animationDelay: `${i * 0.1}s`, animationDuration: `${2 + (i % 3)}s` }}
                  >
                    {i % 7 === 0 && <Zap className="h-4 w-4 text-red-400/70" />}
                    {i % 11 === 0 && <AlertTriangle className="h-4 w-4 text-orange-400/70" />}
                  </div>
                ))}
              </div>
              
              {/* Center chaotic element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-red-500/20 animate-pulse flex items-center justify-center">
                    <Zap className="h-10 w-10 text-red-400" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center animate-bounce">
                    <AlertTriangle className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center animate-ping">
                    <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Scattered elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-16 h-px bg-red-500/40 rotate-45"></div>
                <div className="absolute bottom-1/3 left-1/3 w-px h-16 bg-orange-500/40"></div>
                <div className="absolute top-2/3 right-1/3 w-12 h-px bg-yellow-500/40 -rotate-45"></div>
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
              
              {/* Structured data visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 border-2 border-blue-500/30 rounded-lg flex items-center justify-center">
                  {/* Grid structure */}
                  <div className="absolute inset-4 grid grid-cols-3 grid-rows-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i}
                        className="bg-blue-500/10 rounded border border-blue-500/20 flex items-center justify-center"
                      >
                        {i === 4 && <Target className="h-6 w-6 text-blue-400" />}
                      </div>
                    ))}
                  </div>
                  
                  {/* Animated elements */}
                  <div className="w-16 h-16 bg-blue-500/20 rounded-lg rotate-45 animate-pulse">
                    <div className="w-full h-full flex items-center justify-center -rotate-45">
                      <Rocket className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Orbital elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border border-blue-500/20 animate-[spin_30s_linear_infinite]"></div>
                  <div className="absolute w-1/2 h-1/2 rounded-full border border-blue-500/30 animate-[spin_20s_linear_infinite_reverse]"></div>
                </div>
              </div>
              
              {/* Data points */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute top-3/5 right-1/3 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE TDIA METHOD:
            </h3>
            
            <p className="text-lg font-medium text-gray-200">
              We replace chaos with structured creative testing.
            </p>
            
            <div className="pt-2">
              <p className="text-lg">With our Creative Scoring OS™, you get:</p>
              
              <ul className="space-y-2 list-none pt-3">
                <li>• A systematic approach to test creatives</li>
                <li>• Clear success metrics and scoring framework</li>
                <li>• Structured learning from every campaign</li>
                <li>• Replicable processes that scale</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* How It Works Section Header - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            HOW IT WORKS:
          </h3>
        </div>
        
        {/* Step 1 - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3 border-l-2 border-blue-500/30 pl-4">
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-blue-400">1</span> Creative Hypothesis Framework™
            </h4>
            
            <p>Every creative starts with a clear hypothesis:</p>
            
            <ul className="space-y-1 list-none pt-1">
              <li>→ What are we testing? (Hook, pain point, CTA)</li>
              <li>→ Why do we think it will work?</li>
              <li>→ What specific outcome do we expect?</li>
            </ul>
            
            <div className="pt-2 text-lg">
              <p>No more random posts. Every creative has a purpose.</p>
            </div>
          </div>
          
          {/* Visual for Step 1 */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Hypothesis Builder</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-md p-3">
                  <div className="text-sm font-medium mb-2">Testing: Hook Variation</div>
                  <div className="text-xs text-gray-400">"Stop scrolling if..." vs "You're missing out on..."</div>
                </div>
                
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-md p-3">
                  <div className="text-sm font-medium mb-2">Expected: +15% CTR</div>
                  <div className="text-xs text-gray-400">Based on similar tests in Q3</div>
                </div>
                
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-md p-3">
                  <div className="text-sm font-medium mb-2">Success Metric: CTR &gt; 2.5%</div>
                  <div className="text-xs text-gray-400">Current baseline: 2.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 2 - Right aligned with left visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Visual for Step 2 */}
          <div className="flex items-center justify-center h-full order-last md:order-first">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <BarChart2 className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Performance Scoring</h4>
              </div>
              
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>CTR</span>
                    <span className="text-green-400">8.5/10</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-4/5"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>CVR</span>
                    <span className="text-yellow-400">6.2/10</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-3/5"></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>ROAS</span>
                    <span className="text-blue-400">7.1/10</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/4"></div>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-blue-500/20">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Overall Score</span>
                    <span className="text-blue-300">7.3/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 border-r-2 border-blue-500/30 pr-4">
            <h4 className="text-xl font-semibold flex items-center gap-2 justify-end">
              <span className="text-blue-400">2</span> Smart Performance Scoring™
            </h4>
            
            <div className="text-right">
              <p>We score every creative across multiple dimensions:</p>
              
              <ul className="space-y-1 list-none pt-1 text-right">
                <li>→ CTR (attention-grabbing power)</li>
                <li>→ CVR (conversion effectiveness)</li>
                <li>→ ROAS (profit generation)</li>
                <li>→ Engagement depth (lasting impact)</li>
              </ul>
            </div>
            
            <div className="pt-2">
              <p className="text-right">You get a clear 1-10 score that tells you exactly how each creative performs.</p>
            </div>
          </div>
        </div>
        
        {/* Step 3 - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3 border-l-2 border-blue-500/30 pl-4">
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-blue-400">3</span> Learning Loop Integration™
            </h4>
            
            <p>
              Every test becomes intelligence for your next campaign.
            </p>
            
            <p>We capture what worked, why it worked, and how to replicate it.</p>
            
            <div className="bg-blue-900/20 p-4 rounded-md mt-3">
              <p className="font-medium text-white flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-400" />
                Compound Learning
              </p>
              <p className="pt-2">
                Your creative intelligence grows with every campaign, turning random testing into strategic advantage.
              </p>
            </div>
          </div>
          
          {/* Visual for Step 3 */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <Layers className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Learning Database</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-green-900/30 border border-green-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Pain Point Hooks</span>
                    <span className="text-xs bg-green-500/20 px-2 py-0.5 rounded">Winner</span>
                  </div>
                  <div className="text-xs text-gray-400">Avg. CTR: 3.2% | Used 12x</div>
                </div>
                
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Social Proof CTAs</span>
                    <span className="text-xs bg-blue-500/20 px-2 py-0.5 rounded">Testing</span>
                  </div>
                  <div className="text-xs text-gray-400">Avg. CVR: 2.8% | Used 3x</div>
                </div>
                
                <div className="bg-red-900/30 border border-red-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Feature Lists</span>
                    <span className="text-xs bg-red-500/20 px-2 py-0.5 rounded">Avoid</span>
                  </div>
                  <div className="text-xs text-gray-400">Avg. CTR: 0.9% | Used 5x</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Outcomes Section - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            THE OUTCOME:
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <Target className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Systematic creative testing</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <BarChart2 className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Clear performance scoring</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <Layers className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Compound learning system</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <TrendingUp className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Replicable creative wins</p>
            </div>
          </div>
        </div>

        {/* CTA Button - Fixed styling */}
      <div className="w-full flex justify-center pt-4">
        <button
          onClick={handleCTAClick}
          className="w-full max-w-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 text-center"
        >
          Get Replicable creative wins
        </button>
      </div>
      </div>
    </ScrollArea>
  );
};

export default CreativeModalContent;
