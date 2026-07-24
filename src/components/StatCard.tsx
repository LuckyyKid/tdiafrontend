
import React from "react";
import { Card } from "@/components/ui/card";
import { useCounter } from "@/hooks/useCounter";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  subtitle?: string;
  currency?: string;
  change?: number; // pourcentage de changement
  arrow?: "up" | "down";
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  currency = "€",
  change,
  arrow = "up",
  className = ""
}) => {
  // Animation du compteur
  const formattedValue = useCounter({
    end: value,
    duration: 2000,
    decimals: 0,
  });

  return (
    <Card className={`p-6 shadow-md relative backdrop-blur-lg bg-blue-500/20 border border-blue-400/20 ${className}`}>
      <div className="mb-1 text-sm text-gray-300">{title}</div>
      <div className="text-2xl md:text-3xl font-bold text-white text-shadow-glow">
        {formattedValue}{currency}
      </div>
      {subtitle && <div className="text-xs text-gray-300 mt-1">{subtitle}</div>}
      
      {/* Flèche bleue */}
      {arrow === "up" && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
            <ArrowUp size={30} />
          </div>
        </div>
      )}
      
      {/* Flèche rouge en cas de baisse */}
      {arrow === "down" && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
            <ArrowDown size={30} />
          </div>
        </div>
      )}
    </Card>
  );
};

export default StatCard;
