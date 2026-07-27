
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, BarChart3, CalendarDays, LineChart, Target, Zap, AlertTriangle, Rocket, Layers, DollarSign } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

interface MarketingSpendModalContentProps {
  onClose: () => void;
}

const MarketingSpendModalContent: React.FC<MarketingSpendModalContentProps> = ({ onClose }) => {

  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'marketing_spend_modal');
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
            "I'm spending money but have no idea where it's going"
          </h2>
        </div>
        
        {/* Visual separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0a0b1d] px-4 text-sm text-gray-400">THE BLIND SPENDING TRAP</span>
          </div>
        </div>
        
        {/* Problem Section - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4 pl-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE PROBLEM:
            </h3>
            
            <p className="text-xl font-semibold text-gray-200 italic">
              "I'm spending money but have no idea where it's going."
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>You're launching ads, seeing metrics like ROAS or CTR… but you're operating blind.</p>
              <p>You don't know what's really working, why a campaign fails, or where to allocate your budget.</p>
              <p>Without a structured and segmented system, scaling feels like gambling, not growth.</p>
              
              <div className="pt-3">
                <p className="font-medium">Common issues:</p>
                <ul className="space-y-1 list-none pt-2">
                  <li>→ Unclear segmentation</li>
                  <li>→ Account structure is messy</li>
                  <li>→ No consistent naming system</li>
                  <li>→ Reactive, emotion-based decisions</li>
                  <li>→ ROAS fluctuates without explanation</li>
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
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative">
                  <DollarSign className="h-24 w-24 text-red-500/40 animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <AlertTriangle className="h-12 w-12 text-red-500" />
                  </div>
                </div>
                
                <div className="mt-6 w-full space-y-2">
                  <div className="h-2 w-3/4 bg-red-500/20 rounded-full mx-auto"></div>
                  <div className="h-2 w-1/2 bg-red-500/30 rounded-full mx-auto"></div>
                  <div className="h-2 w-5/6 bg-red-500/10 rounded-full mx-auto"></div>
                </div>
              </div>
              
              {/* Scattered elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 opacity-20">
                  <div className="text-xl text-red-400">$</div>
                </div>
                <div className="absolute top-2/3 right-1/4 opacity-30">
                  <div className="text-2xl text-red-400">$</div>
                </div>
                <div className="absolute bottom-1/4 left-1/4 opacity-20">
                  <div className="text-xl text-red-400">$</div>
                </div>
                <div className="absolute top-1/3 right-1/3 opacity-30">
                  <div className="text-lg text-red-400">$</div>
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
              
              {/* Structured data visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 border-2 border-blue-500/30 rounded-lg flex flex-col items-center justify-center">
                  {/* Three layers visualization */}
                  <div className="w-4/5 h-1/4 bg-blue-500/20 border border-blue-500/30 rounded-md mb-2 flex items-center justify-center">
                    <span className="text-blue-300 text-sm font-medium">SCALING LAYER</span>
                  </div>
                  <div className="w-4/5 h-1/4 bg-blue-500/20 border border-blue-500/30 rounded-md mb-2 flex items-center justify-center">
                    <span className="text-blue-300 text-sm font-medium">TESTING LAYER</span>
                  </div>
                  <div className="w-4/5 h-1/4 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                    <span className="text-blue-300 text-sm font-medium">PROFIT LAYER</span>
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
          
          <div className="space-y-4 pr-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE TDIA METHOD:
            </h3>
            
            <p className="text-lg font-medium text-gray-200">
              We bring clarity to your ad account and decision-making.
            </p>
            
            <div className="pt-2">
              <p className="text-lg">With our Profit-First Media Buying™ system, you get:</p>
              
              <ul className="space-y-2 list-none pt-3">
                <li>• A segmented and layered structure</li>
                <li>• A smart scaling framework based on data, not guesswork</li>
                <li>• Centralized reporting dashboards for full visibility</li>
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
              <span className="text-blue-400">1</span> Growth Layer System™
            </h4>
            
            <p>We restructure your account into 3 clear layers:</p>
            
            <ul className="space-y-1 list-none pt-1">
              <li>→ Scaling Layer / Testing Layer / Profit Layer</li>
              <li>Each with rules and objectives, so nothing overlaps or competes.</li>
            </ul>
            
            <div className="pt-2 text-lg">
              <p>No more confusion about which campaigns serve which purpose.</p>
            </div>
          </div>
          
          {/* Visual for Step 1 */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <Layers className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Growth Layer System™</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Scaling Layer</span>
                    <div className="px-2 py-1 bg-blue-500/30 rounded text-xs">Top 20%</div>
                  </div>
                  <div className="h-2 bg-blue-900/40 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/5"></div>
                  </div>
                </div>
                
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Testing Layer</span>
                    <div className="px-2 py-1 bg-blue-500/30 rounded text-xs">New Ideas</div>
                  </div>
                  <div className="h-2 bg-blue-900/40 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/5"></div>
                  </div>
                </div>
                
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-md p-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Profit Layer</span>
                    <div className="px-2 py-1 bg-blue-500/30 rounded text-xs">Baseline</div>
                  </div>
                  <div className="h-2 bg-blue-900/40 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/5"></div>
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
                <BarChart3 className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Segmentation Smart Stack™</h4>
              </div>
              
              <div className="relative h-48">
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    {/* Network visualization */}
                    <g stroke="#3b82f6" strokeWidth="1" fill="none">
                      <circle cx="100" cy="20" r="15" fill="#0c4a6e" opacity="0.6" />
                      <circle cx="60" cy="50" r="12" fill="#0c4a6e" opacity="0.6" />
                      <circle cx="140" cy="50" r="12" fill="#0c4a6e" opacity="0.6" />
                      <circle cx="80" cy="80" r="10" fill="#0c4a6e" opacity="0.6" />
                      <circle cx="120" cy="80" r="10" fill="#0c4a6e" opacity="0.6" />
                      
                      <line x1="100" y1="35" x2="60" y2="50" strokeDasharray="2,2" />
                      <line x1="100" y1="35" x2="140" y2="50" strokeDasharray="2,2" />
                      <line x1="60" y1="62" x2="80" y2="80" strokeDasharray="2,2" />
                      <line x1="140" y1="62" x2="120" y2="80" strokeDasharray="2,2" />
                    </g>
                    
                    {/* Labels */}
                    <g fill="#93c5fd" fontSize="8">
                      <text x="100" y="20" textAnchor="middle" dominantBaseline="middle">CAMPAIGN</text>
                      <text x="60" y="50" textAnchor="middle" dominantBaseline="middle">CBO</text>
                      <text x="140" y="50" textAnchor="middle" dominantBaseline="middle">ABO</text>
                      <text x="80" y="80" textAnchor="middle" dominantBaseline="middle">COLD</text>
                      <text x="120" y="80" textAnchor="middle" dominantBaseline="middle">WARM</text>
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="bg-blue-900/40 mt-3 p-3 rounded-md">
                <span className="text-sm text-blue-300">Visual mapping shows you exactly where every dollar goes & why</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 border-r-2 border-blue-500/30 pr-4">
            <h4 className="text-xl font-semibold flex items-center gap-2 justify-end">
              <span className="text-blue-400">2</span> Segmentation Smart Stack™
            </h4>
            
            <div className="text-right">
              <p>We define a consistent decision-making model (CBO vs ABO, cold vs warm).</p>
              <p className="mt-2">You get a visual map of your ad ecosystem, so you know where every dollar goes, and why.</p>
            </div>
            
            <div className="pt-2">
              <p className="text-right">No more confusion about campaign structure or naming.</p>
            </div>
          </div>
        </div>
        
        {/* Step 3 - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-3 border-l-2 border-blue-500/30 pl-4">
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <span className="text-blue-400">3</span> Controlled Scaling Protocol™
            </h4>
            
            <p>
              We replace emotion-driven scaling with smart automation.
            </p>
            
            <p>With clear rules and logic, you remove friction, guesswork, and mistakes.</p>
            
            <div className="bg-blue-900/20 p-4 rounded-md mt-3">
              <p className="font-medium text-white flex items-center gap-1">
                Rules over Reactions
              </p>
              <p className="pt-2">
                You know what to do when a campaign drops or spikes in performance, without the panic or confusion.
              </p>
            </div>
          </div>
          
          {/* Visual for Step 3 */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <LineChart className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Controlled Scaling Protocol™</h4>
              </div>
              
              <div className="relative h-48">
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
                    {/* Baseline */}
                    <line x1="0" y1="70" x2="200" y2="70" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4,2" />
                    
                    {/* Performance curve */}
                    <path 
                      d="M0,70 Q20,60 40,50 T70,35 T100,30 T130,25 T160,20 T200,15" 
                      stroke="#3b82f6" 
                      strokeWidth="2" 
                      fill="none" 
                    />
                    
                    {/* Decision points */}
                    <circle cx="40" cy="50" r="3" fill="#3b82f6" />
                    <circle cx="70" cy="35" r="3" fill="#3b82f6" />
                    <circle cx="100" cy="30" r="3" fill="#3b82f6" />
                    <circle cx="130" cy="25" r="3" fill="#3b82f6" />
                    <circle cx="160" cy="20" r="3" fill="#3b82f6" />
                    
                    {/* ROAS labels */}
                    <g fill="#93c5fd" fontSize="8">
                      <text x="10" y="90" textAnchor="start">START</text>
                      <text x="190" y="90" textAnchor="end">SCALE</text>
                      <text x="0" y="70" textAnchor="start" dominantBaseline="hanging">1.0x</text>
                      <text x="0" y="15" textAnchor="start">5.0x</text>
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="space-y-2 mt-3">
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
                  <span>Decision points based on data, not emotion</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-3 h-3 rounded-full bg-blue-400/50 mr-2"></div>
                  <span>Clear rules for budget changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Step 4 - Right aligned with left visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Visual for Step 4 */}
          <div className="flex items-center justify-center h-full order-last md:order-first">
            <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-500/20 w-full max-w-sm">
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-lg font-semibold text-white">Campaign Intelligence Loop™</h4>
              </div>
              
              <div className="relative h-48">
                {/* Circular loop visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-blue-500/40 relative">
                    {/* Arrow path */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100" fill="none">
                      <path 
                        d="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10" 
                        stroke="#3b82f6" 
                        strokeWidth="2" 
                        strokeDasharray="4,2"
                        pathLength="100"
                      />
                      <polygon points="50,5 55,15 45,15" fill="#3b82f6" className="animate-pulse">
                        <animateMotion
                          path="M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10"
                          dur="8s"
                          repeatCount="indefinite"
                        />
                      </polygon>
                    </svg>
                    
                    {/* Center point */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-900/60 flex items-center justify-center">
                        <Rocket className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Labels */}
                <div className="absolute top-1/6 left-1/4 text-xs px-2 py-1 bg-blue-900/40 rounded">
                  Test
                </div>
                <div className="absolute top-1/4 right-1/6 text-xs px-2 py-1 bg-blue-900/40 rounded">
                  Learn
                </div>
                <div className="absolute bottom-1/6 right-1/4 text-xs px-2 py-1 bg-blue-900/40 rounded">
                  Scale
                </div>
                <div className="absolute bottom-1/4 left-1/6 text-xs px-2 py-1 bg-blue-900/40 rounded">
                  Optimize
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 border-r-2 border-blue-500/30 pr-4">
            <h4 className="text-xl font-semibold flex items-center gap-2 justify-end">
              <span className="text-blue-400">4</span> Campaign Intelligence Loop™
            </h4>
            
            <div className="text-right">
              <p>Every campaign feeds your growth system.</p>
              <p className="mt-2">We track learnings, transform top-performers into playbooks, and build long-term intelligence.</p>
            </div>
            
            <div className="pt-2">
              <p className="text-right">Never lose the knowledge you've paid for with your ad spend.</p>
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
                <Layers className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">A visual and structured ad account</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <Target className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">A clear understanding of what works</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <LineChart className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Consistent ROAS and scale without the chaos</p>
            </div>
            
            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
              <div className="text-blue-400 mb-2">
                <BarChart3 className="h-8 w-8 mx-auto" />
              </div>
              <p className="text-sm">Total alignment between strategy, naming, and spend</p>
            </div>
          </div>
        </div>
        
        {/* CTA Button - Fixed styling */}
      <div className="w-full flex justify-center pt-4">
        <button
          onClick={handleCTAClick}
          className="w-full max-w-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/30 text-center"
        >
          Get Consistent ROAS
        </button>
      </div>
      </div>
    </ScrollArea>
  );
};

export default MarketingSpendModalContent;
