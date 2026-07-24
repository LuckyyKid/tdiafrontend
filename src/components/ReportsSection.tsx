
import React from "react";
import { useCounter } from "../hooks/useCounter";
import { Mail } from "lucide-react";

const ReportsSection: React.FC = () => {
  return (
    <div className="w-full py-12 bg-[#0a0a1a]">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-[#161630] rounded-lg p-6 shadow-md">
            {/* En-tête avec bouton Send Email et avatars */}
            <div className="flex items-center mb-6">
              <div className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-bold flex items-center">
                <Mail size={14} className="mr-1" />
                SEND EMAIL
              </div>
              <div className="flex ml-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full -mr-2 border-2 border-[#161630]"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full -mr-2 border-2 border-[#161630]"></div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center border-2 border-[#161630]">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
            </div>
            
            {/* Corps avec les emails livrés */}
            <div className="bg-[#0c0c24] rounded-lg p-4 border border-gray-800">
              <div className="text-sm text-gray-400 mb-1 text-center">EMAILS DELIVERED</div>
              <div className="text-4xl font-bold text-white text-center mb-3">
                {useCounter({
                  end: 156,
                  duration: 2000,
                  decimals: 0,
                })}
              </div>
              <div className="flex items-center justify-center">
                <div className="text-red-500 text-sm font-bold">-43%</div>
                <div className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  ↓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsSection;
