"use client";

import { Share2, Star, Clock, Users } from "lucide-react";
import { useState } from "react";

interface BinaryMarketCardProps {
  title: string;
  image: string;
  category: { icon: string; name: string; colorClass: string };
  badge?: { icon: string; name: string; colorClass: string };
  timeLeft: string;
  participants: number;
  yesProb: number;
  paysYes: string;
  paysNo: string;
  volume: string;
  spi: { value: number; label: string; dot: string; bgClass: string; textClass: string };
  lmsr?: string;
}

export function MarketCard({ 
  title,
  image,
  category,
  badge,
  timeLeft,
  participants,
  yesProb,
  paysYes,
  paysNo,
  volume,
  spi,
  lmsr,
}: BinaryMarketCardProps) {
  const [starred, setStarred] = useState(false);

  return (
    <div className="group rounded-xl border bg-[#0f1729] border-[#1f2937] overflow-hidden transition-all hover:border-[#ADFF2F]/40 hover:shadow-lg hover:shadow-[#ADFF2F]/10">
      {/* Header with badge and actions */}
      <div className="px-3 pt-3 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap min-w-0 flex-1">
          {badge && (
            <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[9px] font-semibold border ${badge.colorClass}`}>
              {badge.icon} {badge.name}
            </span>
          )}
          {!badge && category && (
            <span className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded text-[9px] font-semibold border ${category.colorClass}`}>
              {category.icon} {category.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-0.5 ml-2 flex-shrink-0">
          <button className="p-1.5 text-gray-600 hover:text-gray-400 transition">
            <Share2 className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 text-gray-600 hover:text-[#ADFF2F] transition" onClick={() => setStarred(!starred)}>
            <Star className={`w-3.5 h-3.5 ${starred ? 'fill-[#ADFF2F] text-[#ADFF2F]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="px-3 pb-2">
        <div className="w-full h-24 rounded-lg overflow-hidden bg-[#1f2937]">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80";
            }}
          />
        </div>
      </div>

      {/* Title */}
      <div className="px-3 pb-2">
        <h3 className="font-bold text-xs leading-tight line-clamp-2 text-white mb-2">{title}</h3>
        
        {/* Meta info */}
        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <span className="flex items-center gap-0.5">
            <Clock className="w-3 h-3" /> {timeLeft}
          </span>
          <span className="flex items-center gap-0.5">
            <Users className="w-3 h-3" /> {participants}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-3 pb-2">
        <div className="flex justify-between items-center mb-1">
          <span className="text-[9px] font-semibold text-gray-400">Sim</span>
          <span className="text-[9px] font-bold text-[#ADFF2F]">{yesProb}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden bg-[#1f2937]">
          <div 
            className="h-full bg-[#ADFF2F] transition-all duration-500" 
            style={{ width: `${yesProb}%` }}
          />
        </div>
      </div>

      {/* Buy buttons */}
      <div className="px-3 pb-2 flex gap-1.5">
        <button className="flex-1 px-1.5 py-1.5 rounded-lg text-[9px] font-semibold transition-colors bg-[#ADFF2F]/15 border border-[#ADFF2F]/40 text-[#ADFF2F] hover:bg-[#ADFF2F]/25">
          SIM {yesProb}%
        </button>
        <button className="flex-1 px-1.5 py-1.5 rounded-lg text-[9px] font-semibold transition-colors bg-red-500/15 border border-red-500/40 text-red-400 hover:bg-red-500/25">
          NÃO {100 - yesProb}%
        </button>
      </div>

      {/* Footer */}
      <div className="px-3 py-2 border-t border-[#1f2937] flex items-center justify-between text-[9px]">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-gray-500">{volume}</span>
          <span className={`inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[8px] font-semibold ${spi.bgClass} ${spi.textClass}`}>
            {spi.dot} SPI {spi.value}
          </span>
        </div>
        <span className="text-[#ADFF2F] font-semibold cursor-pointer hover:underline">→</span>
      </div>
    </div>
  );
}
