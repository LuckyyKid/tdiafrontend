
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, AlertTriangle, Database, Target, Zap, TrendingUp, CheckCircle, BarChart3, DollarSign, Package } from 'lucide-react';
import { trackCTAClick } from '@/lib/analytics';

interface InventoryManagementModalContentProps {
  onClose: () => void;
}

const InventoryManagementModalContent: React.FC<InventoryManagementModalContentProps> = ({ onClose }) => {
  const handleCTAClick = () => {
    trackCTAClick('Book Your Strategy Call', 'inventory_management_modal');
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
            "Every time I scale, my margins vanish"
          </h2>
        </div>
        
        {/* Visual separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0a0b1d] px-4 text-sm text-gray-400">THE SCALING MARGIN TRAP</span>
          </div>
        </div>
        
        {/* Problem Section - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4 pl-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE PROBLEM:
            </h3>
            
            <p className="text-xl font-semibold text-gray-200 italic">
              "Every time I scale, my margins vanish"
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>You increase ad spend, but instead of more profit, you get more headaches. ROAS stays flat. Logistics spiral. Creative fatigue hits harder.</p>
              
              <p className="font-medium">Your funnel wasn't built for scale, it was built to survive, not grow.</p>
              
              <div className="pt-3">
                <p className="font-medium text-orange-300 mb-2">Symptoms:</p>
                <ul className="space-y-2 list-none pt-2">
                  <li>• Scaling decisions based on emotions, not data</li>
                  <li>• Margins and logistics not accounted for in growth plans</li>
                  <li>• No unified view of cashflow, CAC, and LTV</li>
                  <li>• "ROAS-first" media buying leads to burnout and plateaus</li>
                </ul>
              </div>
              
              <div className="pt-4 bg-red-900/20 p-4 rounded-md border border-red-500/20">
                <p className="font-medium text-red-200">
                  Welcome to the scaling margin trap, where every growth push kills your profitability.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced visual element for problem section */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-orange-900/10"></div>
              
              {/* Scaling vs Margins visualization */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative w-4/5 h-4/5 border-2 border-red-500/30 rounded-lg overflow-hidden">
                  {/* Split screen effect */}
                  <div className="absolute inset-0 flex">
                    {/* Left side - Scaling up */}
                    <div className="w-1/2 bg-gradient-to-br from-green-900/40 to-blue-900/20 flex flex-col items-center justify-center p-2">
                      <TrendingUp className="h-8 w-8 text-green-400 mb-2" />
                      <span className="text-xs text-green-300 text-center">Ad Spend Up</span>
                      <div className="mt-2 text-xs text-green-400">Growing</div>
                    </div>
                    
                    {/* Right side - Margins down */}
                    <div className="w-1/2 bg-gradient-to-br from-red-900/40 to-orange-900/20 flex flex-col items-center justify-center p-2">
                      <DollarSign className="h-8 w-8 text-red-400 mb-2" />
                      <span className="text-xs text-red-300 text-center">Margins Down</span>
                      <div className="mt-2 text-xs text-red-400">Shrinking</div>
                    </div>
                  </div>
                  
                  {/* Divider line */}
                  <div className="absolute top-0 left-1/2 w-px h-full bg-red-500/50"></div>
                </div>
                
                {/* Arrow pointing to transformation */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-red-400 rotate-90" />
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
              
              {/* Growth OS visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 border-2 border-blue-500/30 rounded-lg flex flex-col items-center justify-center">
                  {/* Dashboard components */}
                  <div className="w-4/5 space-y-2">
                    <div className="h-6 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-blue-300 text-xs font-medium">COMMAND CENTER</span>
                    </div>
                    <div className="h-6 bg-green-500/20 border border-green-500/30 rounded-md flex items-center justify-center">
                      <span className="text-green-300 text-xs font-medium">PROFIT-FIRST</span>
                    </div>
                    <div className="h-6 bg-purple-500/20 border border-purple-500/30 rounded-md flex items-center justify-center">
                      <span className="text-purple-300 text-xs font-medium">FORECASTING</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute top-3/5 right-1/3 w-4 h-4 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 pr-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              THE TDIA METHOD:
            </h3>
            
            <p className="text-lg font-medium text-gray-200">
              We turn your growth into a predictable, profit-first engine.
            </p>
            
            <div className="pt-2">
              <p className="text-lg">With our <span className="text-blue-500 font-semibold">Growth OS™</span>, we replace gut-feel scaling with a real-time business cockpit:</p>
              
              <ul className="space-y-2 list-none pt-3">
                <li>• <span className="text-blue-500 font-semibold">Growth Command Center™</span> - A dashboard combining CAC, ROAS, LTV, margin, and stock status. Updated live.</li>
                <li>• <span className="text-green-500 font-semibold">Profit-First Media Buying™</span> - Every campaign scored on direct profit contribution, LTV impact, and logistics stress.</li>
                <li>• <span className="text-purple-500 font-semibold">Simulated Forecasting Layer</span> - Notion-based simulation showing cash buffer needs for scaling.</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Why It Works Section Header - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            WHY IT WORKS:
          </h3>
        </div>
        
        {/* Why It Works - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">Strategic Scaling</h4>
            </div>
            <p className="text-gray-300">You know exactly when to push, pause, or pivot with margin protection.</p>
          </div>
          
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <BarChart3 className="h-8 w-8 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">Clear Forecasts</h4>
            </div>
            <p className="text-gray-300">Profitability forecasts before pushing spend, no surprises, just clarity.</p>
          </div>
          
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">Aligned Teams</h4>
            </div>
            <p className="text-gray-300">Single source of growth truth across your entire organization.</p>
          </div>
        </div>
        
        {/* Outcome Section - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            THE OUTCOME:
          </h3>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-green-900/20 p-6 rounded-lg border border-blue-500/20 max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-white">
              Scale with confidence <span className="text-green-400">and</span> protected margins.
            </p>
            <p className="text-gray-300 mt-2">
              No more growth that kills profitability, just strategic scaling that compounds your success.
            </p>
          </div>
        </div>
        
        {/* Call to Action Section - Centered */}
        <div className="space-y-3 pt-6 text-center">
          <p className="text-lg font-medium flex items-center gap-2 justify-center">
            Ready to scale profitably?
          </p>
          
          <Button 
            onClick={handleCTAClick} 
            className="mt-4 text-white font-semibold flex items-center gap-2 px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 mx-auto"
          >
            Talk to a growth strategist <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default InventoryManagementModalContent;
