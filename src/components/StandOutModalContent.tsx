
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Eye, MousePointer, BarChart3, Target, Zap, AlertTriangle, Rocket, Layers, Star, TrendingUp, CheckCircle } from 'lucide-react';

interface StandOutModalContentProps {
  onClose: () => void;
}

const StandOutModalContent: React.FC<StandOutModalContentProps> = ({ onClose }) => {
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
            Struggling to Stand Out from Competition
          </h2>
        </div>
        
        {/* Visual separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-blue-900/30"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0a0b1d] px-4 text-sm text-gray-400">THE AESTHETIC TRAP</span>
          </div>
        </div>
        
        {/* Problem Section - Left aligned with right visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4 pl-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span className="text-orange-500"></span> THE PROBLEM:
            </h3>
            
            <p className="text-xl font-semibold text-gray-200 italic">
              Your site looks great — but it doesn't convert.
            </p>
            
            <div className="space-y-2 text-gray-300">
              <p>You've invested thousands in design, but results are stalling. The truth? A beautiful site ≠ a performant one.</p>
              
              <div className="pt-3">
                <ul className="space-y-2 list-none pt-2">
                  <li>• Visual hierarchy is off — CTAs aren't getting clicked.</li>
                  <li>• Visitors scroll without taking action — and you don't know why.</li>
                  <li>• Your pages aren't persuasive. They look "nice", but they don't sell.</li>
                  <li>• You lack visible social proof to reassure new visitors.</li>
                  <li>• You have no system to test and optimize what really works.</li>
                </ul>
              </div>
              
              <div className="pt-4 bg-orange-900/20 p-4 rounded-md border border-orange-500/20">
                <p className="font-medium text-orange-200">
                  Welcome to the aesthetic trap — where branding is polished, but performance is painful.
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced visual element for problem section */}
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full max-w-sm aspect-square overflow-hidden rounded-lg">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-red-900/10"></div>
              
              {/* Before/After visualization */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="relative w-4/5 h-4/5 border-2 border-orange-500/30 rounded-lg overflow-hidden">
                  {/* Split screen effect */}
                  <div className="absolute inset-0 flex">
                    {/* Left side - Pretty but broken */}
                    <div className="w-1/2 bg-gradient-to-br from-purple-900/40 to-pink-900/20 flex flex-col items-center justify-center p-2">
                      <Star className="h-8 w-8 text-purple-400 mb-2" />
                      <span className="text-xs text-purple-300 text-center">Pretty Design</span>
                      <div className="mt-2 text-xs text-red-400"> Low CVR</div>
                    </div>
                    
                    {/* Right side - Converting */}
                    <div className="w-1/2 bg-gradient-to-br from-blue-900/40 to-green-900/20 flex flex-col items-center justify-center p-2">
                      <TrendingUp className="h-8 w-8 text-green-400 mb-2" />
                      <span className="text-xs text-green-300 text-center">Growth Machine</span>
                      <div className="mt-2 text-xs text-green-400"> High CVR</div>
                    </div>
                  </div>
                  
                  {/* Divider line */}
                  <div className="absolute top-0 left-1/2 w-px h-full bg-orange-500/50"></div>
                </div>
                
                {/* Arrow pointing to transformation */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-orange-400 rotate-90" />
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
              
              {/* CRO Pipeline visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5 border-2 border-blue-500/30 rounded-lg flex flex-col items-center justify-center">
                  {/* Pipeline stages */}
                  <div className="w-4/5 space-y-2">
                    <div className="h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-blue-300 text-xs font-medium">AUDIT</span>
                    </div>
                    <div className="h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-blue-300 text-xs font-medium">ANALYZE</span>
                    </div>
                    <div className="h-8 bg-blue-500/20 border border-blue-500/30 rounded-md flex items-center justify-center">
                      <span className="text-blue-300 text-xs font-medium">OPTIMIZE</span>
                    </div>
                    <div className="h-8 bg-green-500/20 border border-green-500/30 rounded-md flex items-center justify-center">
                      <span className="text-green-300 text-xs font-medium">CONVERT</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute top-3/5 right-1/3 w-4 h-4 bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4 pr-4">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
              <span></span> THE TDIA METHOD:
            </h3>
            
            <p className="text-lg font-medium text-gray-200">
              We turn pretty sites into growth machines.
            </p>
            
            <div className="pt-2">
              <p className="text-lg">With our CRO Pipeline Engine™, you get:</p>
              
              <ul className="space-y-2 list-none pt-3">
                <li>• A full UX audit with InstantUX™ + LightningPack™ to identify friction points and deliver fixes within 72h</li>
                <li>• HeatSmart™ Replay Engine to reposition CTAs based on real user behavior</li>
                <li>• SocialProof Overlay System™ to automatically inject UGC, reviews, and trust badges</li>
                <li>• Design2Convert™ Framework — every block is scored by impact</li>
                <li>• A roadmap focused on ROI-first design, not vague aesthetics</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Why It Works Section Header - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            <span className="text-blue-400"></span> WHY IT WORKS:
          </h3>
        </div>
        
        {/* Why It Works - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">Stop Guessing</h4>
            </div>
            <p className="text-gray-300">You see exactly what's hurting conversion — and how to fix it.</p>
          </div>
          
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">Preview Changes</h4>
            </div>
            <p className="text-gray-300">You get "before/after" previews of every change, so implementation is plug & play.</p>
          </div>
          
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-white">Data-Driven Design</h4>
            </div>
            <p className="text-gray-300">You reclaim your creative direction — now rooted in performance data, not opinions.</p>
          </div>
        </div>
        
        {/* Outcome Section - Centered */}
        <div className="space-y-4 text-center pt-4">
          <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-2 justify-center">
            <span className="text-green-400"></span> THE OUTCOME:
          </h3>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-green-900/20 p-6 rounded-lg border border-blue-500/20 max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-white">
              Your site becomes both beautiful <span className="text-green-400">and</span> profitable.
            </p>
            <p className="text-gray-300 mt-2">
              No more design for design's sake — just strategic UX that drives revenue.
            </p>
          </div>
        </div>
        
        {/* Call to Action Section - Centered */}
        <div className="space-y-3 pt-6 text-center">
          <p className="text-lg font-medium flex items-center gap-2 justify-center">
            <span></span> Ready to transform your site?
          </p>
          
          <Button 
            onClick={onClose} 
            className="mt-4 text-white font-semibold flex items-center gap-2 px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 mx-auto"
          >
            Talk to a strategist who can rebuild your conversion flow <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default StandOutModalContent;
