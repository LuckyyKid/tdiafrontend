
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, AlertTriangle, Rocket, CheckCircle, TrendingUp, Layers, BarChart2, Zap, Clock, Calendar, RefreshCw, Target, Activity } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

interface CreativeFatigueModalContentProps {
  onClose: () => void;
}

const CreativeFatigueModalContent: React.FC<CreativeFatigueModalContentProps> = ({ onClose }) => {
  
  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'creative_fatigue_modal');
    window.open('https://calendly.com/tdiaagency/30min?month=2025-06', '_blank');
  };
  
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
            "My creatives die after 10 days"
          </h2>
        </div>
        
        {/* Visual separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0a0b1d] px-4 text-sm text-gray-400">THE BURNOUT LOOP TRAP</span>
          </div>
        </div>
        
        {/* Problem Section - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4 pl-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE PROBLEM:
            </h3>
            
            <p className="text-xl font-semibold text-gray-200 italic">
              "My creatives die after 10 days and I'm stuck in panic mode."
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>You launch an ad, it works for a few days, then performance drops off a cliff.</p>
              <p>So you rush to make new ones, repeat the cycle, and end up in a constant state of creative panic.</p>
              <p>There's no system, no pipeline, no predictability, just short bursts followed by stress.</p>
              
              <div className="pt-3">
                <p className="font-medium">The cycle:</p>
                <ul className="space-y-1 list-none pt-2">
                  <li>→ Launch creative → works for 7-10 days</li>
                  <li>→ Performance drops → panic sets in</li>
                  <li>→ Rush to create new content → repeat</li>
                  <li>→ Always behind, never ahead</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Enhanced visual element for problem section */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-blue-900/10"></div>
              
              {/* Animated burnout cycle visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Central dying creative */}
                  <div className="w-24 h-24 rounded-lg bg-red-500/20 animate-pulse flex items-center justify-center border-2 border-red-500/40">
                    <Clock className="h-10 w-10 text-red-400" />
                  </div>
                  
                  {/* Declining performance line */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg width="120" height="60" className="absolute -top-8 -left-14">
                      <path 
                        d="M10,10 Q30,15 50,25 T90,50" 
                        stroke="#ef4444" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeDasharray="4,2"
                        className="animate-pulse"
                      />
                      <circle cx="90" cy="50" r="3" fill="#ef4444" className="animate-ping" />
                    </svg>
                  </div>
                  
                  {/* Countdown timer */}
                  <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center animate-bounce">
                    <div className="text-center">
                      <div className="text-xs text-orange-400 font-bold">DAY</div>
                      <div className="text-lg text-orange-400 font-bold">10</div>
                    </div>
                  </div>
                  
                  {/* Panic indicators */}
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center animate-ping">
                    <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  </div>
                  
                  {/* Stress lines */}
                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-8 h-px bg-red-500/40 rotate-45 animate-pulse"></div>
                    <div className="absolute top-1/4 right-0 w-px h-8 bg-red-500/40 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="absolute bottom-0 right-1/4 w-8 h-px bg-red-500/40 -rotate-45 animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute bottom-1/4 left-0 w-px h-8 bg-red-500/40 animate-pulse" style={{ animationDelay: "1.5s" }}></div>
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
              
              {/* Pipeline visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 flex flex-col justify-center space-y-4">
                  {/* Pipeline stages */}
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">1</span>
                    </div>
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">2</span>
                    </div>
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">3</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-8 bg-green-500/20 border border-green-500/30 rounded-md flex items-center justify-center">
                      <Activity className="h-4 w-4 text-green-300" />
                    </div>
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">5</span>
                    </div>
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">6</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">7</span>
                    </div>
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">8</span>
                    </div>
                    <div className="w-12 h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-xs text-blue-300">9</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Flow arrows */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-1/4 text-blue-400">
                  <ArrowRight className="h-4 w-4 animate-pulse" />
                </div>
                <div className="absolute bottom-1/3 left-1/4 text-blue-400">
                  <ArrowRight className="h-4 w-4 animate-pulse" style={{ animationDelay: "0.5s" }} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 pr-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE TDIA METHOD:
            </h3>
            
            <p className="text-lg font-medium text-gray-200">
              We build a sustainable creative pipeline that works ahead of fatigue.
            </p>
            
            <div className="pt-2">
              <p className="text-lg">With our Creative Pipeline System™, you get:</p>
              
              <ul className="space-y-2 list-none pt-3">
                <li>• A 30-day creative backlog ready to deploy</li>
                <li>• Automated refresh triggers before fatigue hits</li>
                <li>• Systematic creative evolution process</li>
                <li>• Never run out of content again</li>
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
              <span className="text-blue-400">1</span> Creative Pipeline Builder™
            </h4>
            
            <p>We build a 30-day backlog of tested creative concepts:</p>
            
            <ul className="space-y-1 list-none pt-1">
              <li>→ 10 primary creatives (proven winners)</li>
              <li>→ 15 variation tests (iterative improvements)</li>
              <li>→ 5 breakthrough experiments (new directions)</li>
            </ul>
            
            <div className="pt-2 text-lg">
              <p>You always have content ready to deploy, no more panic.</p>
            </div>
          </div>
          
          {/* Visual for Step 1 */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">30-Day Pipeline</h4>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {[...Array(30)].map((_, i) => (
                    <div 
                      key={i}
                      className={`aspect-square rounded border flex items-center justify-center text-[10px] ${
                        i < 10 ? 'bg-green-500/20 border-green-500/30 text-green-300' :
                        i < 25 ? 'bg-blue-500/20 border-blue-500/30 text-blue-300' :
                        'bg-purple-500/20 border-purple-500/30 text-purple-300'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500/30 mr-2"></div>
                    <span>Primary creatives (10)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500/30 mr-2"></div>
                    <span>Variations (15)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-500/30 mr-2"></div>
                    <span>Experiments (5)</span>
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
                <Activity className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Fatigue Detection</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-green-900/30 border border-green-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Creative #421</span>
                    <span className="px-2 py-0.5 bg-green-500/20 text-xs rounded-full text-green-300">HEALTHY</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>CTR:</span>
                      <span className="text-green-400">3.2% ↑</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Days active:</span>
                      <span>4/10</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Creative #418</span>
                    <span className="px-2 py-0.5 bg-yellow-500/20 text-xs rounded-full text-yellow-300">WARNING</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>CTR:</span>
                      <span className="text-yellow-400">2.1% ↓</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Days active:</span>
                      <span>8/10</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-900/30 border border-red-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Creative #415</span>
                    <span className="px-2 py-0.5 bg-red-500/20 text-xs rounded-full text-red-300">FATIGUED</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span>CTR:</span>
                      <span className="text-red-400">1.1% ↓↓</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Replace now</span>
                      <span className="text-red-400">!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 border-r-2 border-blue-500/30 pr-4">
            <h4 className="text-xl font-semibold flex items-center gap-2 justify-end">
              <span className="text-blue-400">2</span> Early Fatigue Detection™
            </h4>
            
            <div className="text-right">
              <p>We monitor performance in real-time and predict fatigue before it crashes:</p>
              
              <ul className="space-y-1 list-none pt-1 text-right">
                <li>→ Day 1-3: Peak performance tracking</li>
                <li>→ Day 4-7: Decline pattern analysis</li>
                <li>→ Day 8+: Automatic replacement trigger</li>
              </ul>
            </div>
            
            <div className="pt-2">
              <p className="text-right">Never get caught with a dying creative again.</p>
            </div>
          </div>
        </div>
        
        {/* Step 3 - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3 border-l-2 border-blue-500/30 pl-4">
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-blue-400">3</span> Seamless Replacement Protocol™
            </h4>
            
            <p>
              When fatigue is detected, the next creative automatically deploys.
            </p>
            
            <p>No gaps, no panic, no scrambling for content.</p>
            
            <div className="bg-blue-900/20 p-4 rounded-md mt-3">
              <p className="font-medium text-white flex items-center gap-1">
                <RefreshCw className="h-4 w-4 text-blue-400" />
                Continuous Flow
              </p>
              <p className="pt-2">
                Your campaigns run smoothly with fresh creatives cycling in before the old ones lose steam.
              </p>
            </div>
          </div>
          
          {/* Visual for Step 3 */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <RefreshCw className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Auto-Replacement</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-900/30 rounded-md">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded border border-red-500/30 flex items-center justify-center">
                      <span className="text-xs text-red-300">Old</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-blue-400" />
                    <div className="w-8 h-8 bg-green-500/20 rounded border border-green-500/30 flex items-center justify-center">
                      <span className="text-xs text-green-300">New</span>
                    </div>
                  </div>
                  <span className="text-xs text-blue-300">Auto</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Replacement trigger:</span>
                    <span className="text-blue-300">CTR &lt; 2.0%</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Next creative ready:</span>
                    <span className="text-green-400">Queued</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>Transition time:</span>
                    <span className="text-blue-300">&lt; 2 hours</span>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-blue-500/20">
                  <div className="text-center text-xs text-gray-400">
                    Zero downtime guaranteed
                  </div>
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
                <Calendar className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">30-day creative pipeline</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <Activity className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Early fatigue detection</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <RefreshCw className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Automatic replacement</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <CheckCircle className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Zero panic mode</p>
            </div>
          </div>
        </div>
        
         {/* CTA Button - Fixed styling */}
      <div className="w-full flex justify-center pt-4">
        <button
          onClick={handleCTAClick}
          className="w-full max-w-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 text-center"
        >
          Extend your creative lifespan
        </button>
      </div>
      </div>
    </ScrollArea>
  );
};

export default CreativeFatigueModalContent;
