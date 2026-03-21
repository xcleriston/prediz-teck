"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export function TrendingCarousel() {
  const trendingItems = [
    { title: "Quem será eleito Presidente do Brasil em 2026?", prob: "45%", change: "+12", isUp: true, vol: "603.4K", users: "9.1K" },
    { title: "S&P 500 acima de $6,800.00 em 1 semana?", prob: "68%", change: "-8", isUp: false, vol: "27.8K", users: "533" },
    { title: "BTC acima de $97,980 em 30 dias?", prob: "82%", change: "+25", isUp: true, vol: "26.8K", users: "510" },
    { title: "Memphis Grizzlies vencerá Los Angeles Clippers?", prob: "42%", change: "-5", isUp: false, vol: "25.4K", users: "464" },
    { title: "INTZ vencerá FURIA Academy? (Valorant - Play-In)", prob: "61%", change: "+18", isUp: true, vol: "22.1K", users: "428" },
    { title: "Vencedor do Campeonato da NBA de 2026?", prob: "36%", change: "-14", isUp: false, vol: "21.5K", users: "420" },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-[#ADFF2F]" />
        <h3 className="text-sm font-semibold text-white">Maiores Movimentos</h3>
      </div>
      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {trendingItems.map((item, i) => (
          <button 
            key={i} 
            className="flex-shrink-0 w-48 p-3 rounded-xl border transition-all bg-[#151c2c] border-[#242d40] hover:border-[#ADFF2F]/30 hover:shadow-lg hover:shadow-[#ADFF2F]/10 active:scale-95 text-left"
          >
            <p className="text-[11px] leading-tight line-clamp-2 font-medium mb-2 text-white h-8">{item.title}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-[#ADFF2F]">{item.prob}</span>
              <span className={`flex items-center gap-0.5 text-xs font-bold ${item.isUp ? 'text-green-400' : 'text-red-400'}`}>
                {item.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {item.change}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
              <span>🌿 {item.vol}</span>
              <span>·</span>
              <span>👥 {item.users}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function MarketFilters() {
  const [activeFilter, setActiveFilter] = useState("em-alta");
  
  const filters = [
    { id: "ao-vivo", label: "Ao Vivo", icon: "🔴", isLive: true, count: 7 },
    { id: "em-alta", label: "Em Alta", icon: "🔥", active: true },
    { id: "novos", label: "Novos", icon: "✨" },
    { id: "volume", label: "Volume", icon: "📊" },
    { id: "disputados", label: "Disputados", icon: "⚖️" },
    { id: "favoritos", label: "Favoritos", icon: "⭐" },
    { id: "resolvidos", label: "Resolvidos", icon: "✅" },
    { id: "urgente", label: "Urgente", icon: "📰" },
    { id: "fechando", label: "Fechando", icon: "⏰" },
    { id: "15min", label: "15min", icon: "⏱️" },
    { id: "30min", label: "30min", icon: "⏱️" },
    { id: "1h", label: "1h", icon: "⏰" },
  ];

  return (
    <div className="mb-6">
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
        {filters.map((f) => (
          <button 
            key={f.id}
            onClick={() => !f.isLive && setActiveFilter(f.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 
              ${f.isLive
                ? 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30'
                : activeFilter === f.id 
                  ? 'bg-[#ADFF2F] text-gray-900 shadow-md hover:bg-[#ADFF2F]/90' 
                  : 'bg-[#151c2c] text-gray-400 border border-[#242d40] hover:border-[#ADFF2F]/50 hover:text-gray-300'}`}
          >
            <span className="text-sm">{f.icon}</span>
            <span>{f.label}</span>
            {f.count && <span className="ml-0.5 text-[10px] px-1 py-0.5 rounded-full font-bold bg-red-500/30 text-red-300">{f.count}</span>}
            {f.isLive && (
              <span className="ml-1 relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-400"></span>
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
