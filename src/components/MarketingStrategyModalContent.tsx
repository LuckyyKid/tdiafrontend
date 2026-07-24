
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowRight, Target, Zap, Smile, Lock, CheckCircle } from 'lucide-react';

interface MarketingStrategyModalContentProps {
  onClose: () => void;
}

const MarketingStrategyModalContent: React.FC<MarketingStrategyModalContentProps> = ({ onClose }) => {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-12 p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Creative Pipeline System™
          </h2>
          <p className="text-xl text-gray-300">
            Turn creative chaos into a predictable performance machine
          </p>
        </div>

        {/* Pain Point */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 p-6 rounded-lg border border-red-500/20">
          <h3 className="text-2xl font-bold text-white mb-2">Pain Point</h3>
          <p className="text-lg text-gray-300 italic">"No backlog, no cadence, no clarity."</p>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-300">
            Our Creative Pipeline System™ eliminates random creative testing and provides a structured approach to ensure your creative production never runs dry. It consists of three integrated modules that work together to maintain a consistent flow of high-performing creatives.
          </p>
        </div>

        {/* Three Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20 text-center">
            <div className="text-4xl mb-2">1.</div>
            <h4 className="text-lg font-semibold text-white">Creative Battle Plan™</h4>
          </div>
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20 text-center">
            <div className="text-4xl mb-2">2.</div>
            <h4 className="text-lg font-semibold text-white">Cadence Machine™</h4>
          </div>
          <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-500/20 text-center">
            <div className="text-4xl mb-2">3.</div>
            <h4 className="text-lg font-semibold text-white">Creative Vault™</h4>
          </div>
        </div>

        {/* How to make it worth it */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-8 w-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-white">How to make it worth it</h3>
          </div>
          <p className="text-gray-300 mb-4">
            Each client receives a pre-built backlog of testable ideas, organized by:
          </p>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li>• Ad format</li>
            <li>• Psychological angle (pain, gain, social proof, etc.)</li>
            <li>• Objection handled</li>
            <li>• Target avatar</li>
          </ul>
          <p className="text-gray-300 font-semibold mb-6">
            The backlog isn't random — it's a learning engine.
          </p>

          {/* Creative Backlog Visual */}
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-500/10 p-6 rounded-lg border border-blue-500/20">
            <h4 className="text-lg font-semibold text-white mb-4">Creative Backlog</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-300 font-medium">To Test</span>
                  <span className="text-white font-bold">5</span>
                </div>
                <p className="text-sm text-gray-400">UGC • Story<br/>Problem-agitation hook w/ quick solution reveal</p>
                <p className="text-xs text-blue-300 mt-2">Avatar 1</p>
              </div>
              <div className="bg-purple-900/20 p-4 rounded-lg border border-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-300 font-medium">In Progress</span>
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-sm text-gray-400">Animation • Feature<br/>Before/After transformation sequence</p>
                <p className="text-xs text-purple-300 mt-2">Avatar 2</p>
              </div>
              <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-orange-300 font-medium">Testimonial</span>
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-sm text-gray-400">Social Proof<br/>Client success story with ROI callout</p>
                <p className="text-xs text-orange-300 mt-2">Avatar 3</p>
              </div>
              <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-300 font-medium">Approved</span>
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-sm text-gray-400">Product Demo • Features<br/>Quick-win benefit sequence</p>
                <p className="text-xs text-green-300 mt-2">Avatar 1</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to make it faster */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white">How to make it faster</h3>
          </div>
          <p className="text-gray-300 mb-6">
            An AI-powered scoring engine ranks upcoming tests based on past performance (e.g., hooks that worked get derivatives prioritized first).
          </p>

          {/* Angle Distribution Visual */}
          <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
            <h4 className="text-lg font-semibold text-white mb-4">Angle Distribution</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-300 w-32">Problem</span>
                <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: '32%' }}></div>
                </div>
                <span className="text-white font-semibold w-12 text-right">32%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 w-32">Solution</span>
                <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full" style={{ width: '24%' }}></div>
                </div>
                <span className="text-white font-semibold w-12 text-right">24%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 w-32">Social Proof</span>
                <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                  <div className="bg-green-500 h-full rounded-full" style={{ width: '40%' }}></div>
                </div>
                <span className="text-white font-semibold w-12 text-right">40%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 w-32">Objection</span>
                <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                  <div className="bg-purple-500 h-full rounded-full" style={{ width: '14%' }}></div>
                </div>
                <span className="text-white font-semibold w-12 text-right">14%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-300 w-32">Scarcity</span>
                <div className="flex-1 bg-gray-700/30 rounded-full h-6 overflow-hidden">
                  <div className="bg-orange-500 h-full rounded-full" style={{ width: '20%' }}></div>
                </div>
                <span className="text-white font-semibold w-12 text-right">20%</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to make it easier */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Smile className="h-8 w-8 text-green-400" />
            <h3 className="text-2xl font-bold text-white">How to make it easier</h3>
          </div>
          <p className="text-gray-300 mb-6">
            Clients drag and drop assets they approve into a Notion-style 'Approved' column, eliminating email validation hell.
          </p>

          {/* Approval Status Visual */}
          <div className="bg-gradient-to-br from-green-900/30 to-green-500/10 p-6 rounded-lg border border-green-500/20">
            <h4 className="text-lg font-semibold text-white mb-4">Approval Status</h4>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-12 w-12 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-white">2/7 Approved</p>
                <p className="text-sm text-gray-400">5 pending review</p>
              </div>
            </div>
          </div>
        </div>

        {/* How to make it believable */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-8 w-8 text-purple-400" />
            <h3 className="text-2xl font-bold text-white">How to make it believable</h3>
          </div>
          <p className="text-gray-300 mb-4">
            The strategy is visualized before testing:
          </p>
          <p className="text-lg text-gray-300 italic mb-6">
            "This week: 5 hooks across 3 avatars. Objective: isolate top performer."
          </p>

          {/* Weekly Strategy Visual */}
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-500/10 p-6 rounded-lg border border-purple-500/20">
            <h4 className="text-lg font-semibold text-white mb-4">Weekly Strategy</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Hook Testing</p>
                <p className="text-xl font-bold text-white">5 variants</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Avatar Coverage</p>
                <p className="text-xl font-bold text-white">3 personas</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Testing Budget</p>
                <p className="text-xl font-bold text-white">$750</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Expected Outcome</p>
                <p className="text-xl font-bold text-white">Top 20% identified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4 pt-6 text-center">
          <p className="text-lg font-medium text-white">
            Ready to transform your creative process?
          </p>
          <p className="text-gray-300">
            The Creative Pipeline System™ is part of our comprehensive 90-Day Profit Sprint for e-commerce brands.
          </p>
          
          <Button 
            onClick={onClose} 
            className="mt-4 text-white font-semibold flex items-center gap-2 px-8 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg shadow-blue-500/30 mx-auto"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default MarketingStrategyModalContent;
