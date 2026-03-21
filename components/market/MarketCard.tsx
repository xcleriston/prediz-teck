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
    <div className="group rounded-lg border bg-[#0f1729] border-[#1f2937] overflow-hidden transition-all hover:border-[#ADFF2F]/40">
      {/* Header: Badge + Actions */}
      <div className="px-2 pt-2 pb-1 flex items-start justify-between gap-1 min-h-6">
        <div className="flex-1 min-w-0">
          {badge && (
            <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[8px] font-semibold border ${badge.colorClass}`}>
              {badge.icon}{badge.name}
            </span>
          )}
          {!badge && category && (
            <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[8px] font-semibold border ${category.colorClass}`}>
              {category.icon}{category.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-0.5 flex-shrink-0">
          <button className="p-1 text-gray-600 hover:text-gray-400">
            <Share2 className="w-3 h-3" />
          </button>
          <button className="p-1 text-gray-600 hover:text-[#ADFF2F]" onClick={() => setStarred(!starred)}>
            <Star className={`w-3 h-3 ${starred ? 'fill-[#ADFF2F] text-[#ADFF2F]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="px-2">
        <div className="w-full h-20 rounded-lg overflow-hidden bg-[#1f2937]">
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

      {/* Title + Meta */}
      <div className="px-2 py-1.5">
        <h3 className="font-bold text-[11px] leading-tight line-clamp-2 text-white mb-1">{title}</h3>
        <div className="flex items-center gap-1.5 text-[9px] text-gray-500">
          <span className="flex items-center gap-0.5 line-clamp-1">
            <Clock className="w-2.5 h-2.5 flex-shrink-0" /> {timeLeft}
          </span>
          <span className="flex items-center gap-0.5">
            <Users className="w-2.5 h-2.5 flex-shrink-0" /> {participants}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-2 pb-1.5">
        <div className="flex justify-between items-center mb-0.5">
          <span className="text-[8px] font-semibold text-gray-500">Sim</span>
          <span className="text-[8px] font-bold text-[#ADFF2F]">{yesProb}%</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden bg-[#1f2937]">
          <div 
            className="h-full bg-[#ADFF2F]" 
            style={{ width: `${yesProb}%` }}
          />
        </div>
      </div>

      {/* Buy buttons */}
      <div className="px-2 pb-1.5 flex gap-1">
        <button className="flex-1 px-1 py-1.5 rounded-lg text-[8px] font-semibold transition-colors bg-[#ADFF2F]/15 border border-[#ADFF2F]/40 text-[#ADFF2F] hover:bg-[#ADFF2F]/25">
          SIM {yesProb}%
        </button>
        <button className="flex-1 px-1 py-1.5 rounded-lg text-[8px] font-semibold transition-colors bg-red-500/15 border border-red-500/40 text-red-400 hover:bg-red-500/25">
          NÃO {100 - yesProb}%
        </button>
      </div>

      {/* Footer */}
      <div className="px-2 py-1 border-t border-[#1f2937] flex items-center justify-between text-[8px]">
        <div className="flex items-center gap-1 flex-wrap">
          <span className="text-gray-600">{volume}</span>
          {spi && (
            <span className={`inline-flex items-center gap-0.5 px-1 py-0.5 rounded text-[7px] font-semibold ${spi.bgClass} ${spi.textClass}`}>
              {spi.dot}SPI {spi.value}
            </span>
          )}
        </div>
        <span className="text-[#ADFF2F] font-semibold cursor-pointer">→</span>
      </div>
    </div>
  );
}
