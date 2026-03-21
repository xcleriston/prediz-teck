"use client";

import { Code, Share2, Star, Clock, Users, Sparkles } from "lucide-react";
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
    <div className="group p-4 sm:p-5 rounded-2xl border bg-[#151c2c] border-[#242d40] transition-all cursor-pointer relative hover:border-[#ADFF2F]/30 hover:shadow-lg hover:shadow-[#ADFF2F]/10">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-2 pr-0">
        <div className="flex items-center gap-1.5 flex-wrap min-w-0">
          {badge && (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${badge.colorClass}`}>
              <span>{badge.icon}</span>{badge.name}
            </span>
          )}
          {!badge && category && (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${category.colorClass}`}>
              <span>{category.icon}</span>{category.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-1 text-gray-500 hover:text-white transition"><Code className="w-3 h-3 sm:w-4 sm:h-4" /></button>
          <button className="p-1 text-gray-500 hover:text-white transition"><Share2 className="w-4 h-4 sm:w-5 sm:h-5" /></button>
          <button className="p-1 text-gray-500 hover:text-[#ADFF2F] transition" onClick={() => setStarred(!starred)}>
            <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${starred ? 'fill-[#ADFF2F] text-[#ADFF2F]' : ''}`} />
          </button>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* IMAGE */}
        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80";
            }}
          />
        </div>
        
        {/* TITLE & META */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold line-clamp-2 text-sm sm:text-base transition-colors text-white">{title}</h3>
          <div className="flex items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /><span className="hidden xs:inline">{timeLeft}</span>
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />{participants}
              <Sparkles className="w-3 h-3 text-[#ADFF2F] opacity-70" />
            </span>
          </div>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="mb-3 sm:mb-4">
        <div className="flex justify-between items-center mb-1 sm:mb-1.5">
          <span className="text-xs sm:text-sm font-semibold text-gray-300">Sim</span>
          <span className="text-xs sm:text-sm font-bold text-[#ADFF2F]">{yesProb}%</span>
        </div>
        <div className="h-1.5 sm:h-2 rounded-full overflow-hidden bg-[#242d40]">
          <div 
            className="h-full bg-gradient-to-r from-[#ADFF2F] to-[#7CB518] rounded-full transition-all duration-500" 
            style={{ width: `${yesProb}%` }}
          ></div>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-2">
        <button className="flex-1 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm transition-colors flex flex-col items-center bg-[#ADFF2F]/10 border-[#ADFF2F]/50 text-[#ADFF2F] hover:bg-[#ADFF2F]/20">
          <span className="font-semibold">Comprar Sim {yesProb}%</span>
          <span className="text-[10px] sm:text-xs opacity-80">Paga {paysYes}</span>
        </button>
        <button className="flex-1 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm transition-colors flex flex-col items-center bg-red-500/10 border-red-500/50 text-red-400 hover:bg-red-500/20">
          <span className="font-semibold">Comprar Não {100 - yesProb}%</span>
          <span className="text-[10px] sm:text-xs opacity-80">Paga {paysNo}</span>
        </button>
      </div>

      {/* FOOTER */}
      <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t flex items-center justify-between text-[10px] sm:text-xs border-[#242d40] text-gray-400">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span>{volume} Vol.</span>
          <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full ${spi.bgClass} ${spi.textClass} text-[9px] font-medium`}>
            <span>{spi.dot}</span><span>SPI {spi.value}</span>
          </span>
          {lmsr && (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[9px] font-medium">LMSR {lmsr}</span>
          )}
        </div>
        <span className="text-[#ADFF2F] font-medium cursor-pointer hover:underline">Negociar →</span>
      </div>
    </div>
  );
}
