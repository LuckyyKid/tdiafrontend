
import React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceDot
} from "recharts";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { useCounter } from "@/hooks/useCounter";

// Données du graphique
const data = [
  { time: "10am", value: 25 },
  { time: "11am", value: 10 },
  { time: "12pm", value: 35 },
  { time: "01pm", value: 25 },
  { time: "02pm", value: 35 },
  { time: "03pm", value: 40 },
  { time: "04pm", value: 12 },
  { time: "05pm", value: 20 },
  { time: "06pm", value: 40 },
  { time: "07pm", value: 45 },
];

const chartConfig = {
  primaryLine: {
    label: "Revenue",
    theme: {
      light: "#8884d8",
      dark: "#8884d8",
    },
  },
};

interface RevenueCardProps {
  title: string;
  value: number;
  subtitle?: string;
  currency?: string;
  change?: number; // pourcentage de changement
  arrow?: "up" | "down";
  showProgressBar?: boolean;
}

const RevenueChart: React.FC<RevenueCardProps> = ({
  title,
  value,
  subtitle,
  currency = "€",
  change,
  arrow,
  showProgressBar = false
}) => {
  // Animation du compteur
  const formattedValue = useCounter({
    end: value,
    duration: 2000,
    decimals: 0,
  });

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 mt-8">
      {/* Carte à gauche */}
      <Card className="p-6 shadow-md w-full lg:w-1/4 flex flex-col justify-between">
        <div className="mb-4">
          <h3 className="text-xl text-gray-700 font-medium">{title}</h3>
          <div className="text-2xl md:text-4xl font-bold text-gray-900 mt-1">
            {formattedValue} {currency}
          </div>
          {subtitle && <div className="text-sm text-gray-500 mt-1">{subtitle}</div>}
        </div>
        
        {showProgressBar && (
          <div className="mt-auto">
            <div className="h-1.5 w-full bg-gray-100 rounded-full">
              <div 
                className="h-1.5 bg-blue-500 rounded-full" 
                style={{ width: '40%' }}
              />
            </div>
          </div>
        )}
      </Card>

      {/* Graphique à droite */}
      <Card className="p-6 shadow-md bg-white w-full lg:w-3/4">
        <ChartContainer config={chartConfig} className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8884d8" />
                  <stop offset="100%" stopColor="#d946ef" />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
              />
              <Tooltip
                content={<ChartTooltipContent labelKey="time" />}
                cursor={false}
              />
              <Line
                type="monotone"
                dataKey="value"
                name="primaryLine"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={false}
                activeDot={{ 
                  r: 6, 
                  fill: "#8884d8",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
              <ReferenceDot 
                x="12pm" 
                y={35} 
                r={5} 
                fill="#8884d8" 
                stroke="#fff" 
                strokeWidth={2} 
              />
              <ReferenceDot 
                x="02pm" 
                y={35} 
                r={5} 
                fill="#8884d8" 
                stroke="#fff" 
                strokeWidth={2} 
              />
              <ReferenceDot 
                x="06pm" 
                y={40} 
                r={5} 
                fill="#d946ef" 
                stroke="#fff" 
                strokeWidth={2} 
              />
              <ReferenceDot 
                x="07pm" 
                y={45} 
                r={5} 
                fill="#d946ef" 
                stroke="#fff" 
                strokeWidth={2} 
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Card>
    </div>
  );
};

export default RevenueChart;
