import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, AlertTriangle, Rocket, CheckCircle, TrendingUp, Layers, BarChart2, Zap, MessageSquare, Gauge, Bell, CheckSquare } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

interface EverythingButNothingModalContentProps {
  onClose: () => void;
}

const EverythingButNothingModalContent: React.FC<EverythingButNothingModalContentProps> = ({ onClose }) => {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-12 p-8">
        {/* Enhanced centered main quote with icon */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-red-500/20 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            "I'm doing everything, but nothing's working"
          </h2>
        </div>
        
        {/* Visual separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0a0b1d] px-4 text-sm text-gray-400">THE FOUNDER OVERLOAD TRAP</span>
          </div>
        </div>
        
        {/* Problem Section - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE PROBLEM:
            </h3>
            
            <p className="text-xl font-semibold text-gray-200 italic">
              You're launching ads, tweaking settings, posting content — yet nothing sticks. You're in all the dashboards, chasing performance, but it feels like chaos. There's no space to think, no system to rely on.
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>What happens next?</p>
              
              <ul className="space-y-2 list-none pt-1">
                <li>• You burn out managing everything manually.</li>
                <li>• You validate creatives, do reporting, and chase results… alone.</li>
                <li>• ROAS drops → you react emotionally → everything stalls.</li>
                <li>• You lose confidence in what's working, or even why you're doing it.</li>
              </ul>
              
              <p className="pt-2 font-medium text-lg">Welcome to founder overload.</p>
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
                        {i === 4 && <MessageSquare className="h-6 w-6 text-blue-400" />}
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
              We transform founder chaos into operational clarity.
            </p>
            
            <div className="pt-2">
              <p className="text-lg">With the CEO Unload System™ and Anti-Panic Protocol™, you get:</p>
              
              <ul className="space-y-2 list-none pt-3">
                <li>• A 1-click validation portal to approve creatives without meetings</li>
                <li>• A weekly Loom recap with creatives + results = no need for status calls</li>
                <li>• Slack alerts powered by AI when key thresholds are hit</li>
                <li>• Pre-planned decision protocols to guide you when performance dips</li>
              </ul>
              
              <p className="pt-3 text-lg">You get to focus on your vision. The rest runs on autopilot.</p>
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
              CEO Unload System™
            </h4>
            
            <p>A system that lets you lead without micromanaging:</p>
            
            <ul className="space-y-2 list-none pt-1">
              <li>• A simple validation workflow: 1 click = Go/No-Go</li>
              <li>• Weekly recap (Loom video + KPI results) = no more meetings</li>
              <li>• Monthly scorecard = long-term vision vs. short-term ops</li>
              <li>• &lt;10 minutes per week to stay in control</li>
            </ul>
          </div>
          
          {/* Visual for Step 1 */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <CheckSquare className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">CEO Dashboard</h4>
              </div>
              
              <div className="space-y-4">
                {/* Validation workflow visualization */}
                <div className="bg-blue-800/30 p-3 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Creative #421</span>
                    <div className="flex gap-2">
                      <button className="px-2 py-1 bg-green-500/80 text-xs rounded-md text-white font-medium">
                        APPROVE
                      </button>
                      <button className="px-2 py-1 bg-red-500/80 text-xs rounded-md text-white font-medium">
                        REJECT
                      </button>
                    </div>
                  </div>
                  <div className="h-24 bg-gray-800/50 rounded-md flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>
                </div>
                
                {/* Weekly recap visualization */}
                <div className="bg-blue-800/30 p-3 rounded-md flex items-center">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-md flex items-center justify-center mr-3">
                    <MessageSquare className="h-6 w-6 text-blue-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Weekly Recap</p>
                    <p className="text-xs text-gray-400">4 min video + KPI summary</p>
                  </div>
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
                <Bell className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Anti-Panic Protocol™</h4>
              </div>
              
              <div className="space-y-4">
                {/* Alert system visualization */}
                <div className="bg-blue-800/30 p-3 rounded-md">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Performance Alert</span>
                    <span className="px-2 py-0.5 bg-yellow-500 text-xs rounded-full text-white font-medium">ACTION NEEDED</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span>ROAS:</span>
                      <span className="text-red-400">1.2x (below threshold)</span>
                    </div>
                    
                    <div className="h-2 bg-gray-700 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-red-500 w-1/4"></div>
                    </div>
                    
                    <div className="pt-2 text-xs text-gray-400">
                      Protocol: Pause campaign, review creative, adjust targeting
                    </div>
                  </div>
                </div>
                
                {/* Decision framework visualization */}
                <div className="bg-blue-800/30 p-3 rounded-md">
                  <div className="text-sm mb-2 font-medium">48h Response Framework</div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span>Day 1:</span>
                      <span>Identify cause</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span>Day 2:</span>
                      <span>Implement solution</span>
                    </div>
                    <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 border-r-2 border-blue-500/30 pr-4">
            <h4 className="text-xl font-semibold flex items-center gap-2 justify-end">
              Anti-Panic Protocol™
            </h4>
            
            <p className="text-right">Turn emotional reactions into strategic systems:</p>
            
            <ul className="space-y-1 list-none pt-1 ml-auto text-right">
              <li>• Proactive rules for performance drops (e.g. if ROAS &lt;X → pause, test, adjust)</li>
              <li>• Slack alerts + 48h rapid response framework</li>
              <li>• You make decisions before it's too late</li>
              <li>• Emotional stability becomes proactive strategy</li>
            </ul>
          </div>
        </div>
        
        {/* Updated OUTCOME Section using the grid layout */}
        <div>
          <div className="space-y-4 text-center pt-8">
            <h3 className="text-3xl font-bold flex items-center gap-2 justify-center">
              THE OUTCOME:
            </h3>
          </div>
          
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-2xl p-8 border border-green-500/20 mt-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">
                You go from <span className="text-red-400">chaos</span> to <span className="text-green-400">control</span>
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Less than 10 minutes per week to validate performance. 
                Everything else runs on autopilot with intelligent alerts only when action is needed.
              </p>




              
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default EverythingButNothingModalContent;
