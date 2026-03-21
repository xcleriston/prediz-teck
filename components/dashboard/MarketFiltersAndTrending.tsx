import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export function TrendingCarousel() {
  const trendingItems = [
    { title: "Quem será eleito Presidente do Brasil em 2026?", prob: "0%", change: "-50", isUp: false, vol: "603.4K", users: "9.1K" },
    { title: "S&P 500 acima de $6,800.00 em 1 semana?", prob: "0%", change: "-50", isUp: false, vol: "27.8K", users: "533" },
    { title: "BTC acima de $97,980 em 30 dias?", prob: "100%", change: "+50", isUp: true, vol: "26.8K", users: "510" },
    { title: "Memphis Grizzlies vencerá Los Angeles Clippers?", prob: "0%", change: "-50", isUp: false, vol: "25.4K", users: "464" },
    { title: "INTZ vencerá FURIA Academy? (Valorant - Play-In)", prob: "0%", change: "-50", isUp: false, vol: "22.1K", users: "428" },
    { title: "Vencedor do Campeonato da NBA de 2026?", prob: "36%", change: "-14", isUp: false, vol: "21.5K", users: "420" },
  ];

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp className="w-4 h-4 text-[#ADFF2F]" />
        <h3 className="text-sm font-semibold text-white">Maiores Movimentos</h3>
      </div>
      <div className="flex gap-2.5 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1">
        {trendingItems.map((item, i) => (
          <button key={i} className="flex-shrink-0 w-44 p-2.5 rounded-xl border transition-all bg-[#151c2c] border-[#242d40] active:scale-95 text-left">
            <p className="text-[11px] leading-tight line-clamp-2 font-medium mb-1.5 text-white h-8">{item.title}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#ADFF2F]">{item.prob}</span>
              <span className={`flex items-center gap-0.5 text-xs font-bold ${item.isUp ? 'text-green-500' : 'text-red-500'}`}>
                {item.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {item.change}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-1">
              <span>{item.vol} 🌿</span>
              <span>·</span>
              <span>{item.users} 👥</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export function MarketFilters() {
  const filters = [
    { label: "Em Alta", icon: "🔥", active: true },
    { label: "Novos", icon: "✨" },
    { label: "Volume", icon: "📊" },
    { label: "Disputados", icon: "⚖️" },
    { label: "Favoritos", icon: "⭐" },
    { label: "Resolvidos", icon: "✅" },
    { label: "Urgente", icon: "📰" },
    { label: "Fechando", icon: "⏰" },
    { label: "15min", icon: "⏱️" },
    { label: "30min", icon: "⏱️" },
    { label: "1 hora", icon: "⏰" },
  ];

  return (
    <div className="mb-4">
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide pb-1 -mx-1 px-1">
        <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all flex-shrink-0 bg-[#1a2235] text-red-400 border border-red-500/50 hover:border-red-500 hover:bg-red-500/10">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
          </span>
          <span>Ao Vivo</span>
          <span className="ml-0.5 text-[10px] px-1 py-0.5 rounded-full font-bold bg-red-500/20 text-red-400">7</span>
        </button>
        
        {filters.map((f, i) => (
          <button key={i} className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all flex-shrink-0 
            ${f.active 
              ? 'bg-[#ADFF2F] text-gray-900 shadow-md' 
              : 'bg-[#1a2235] text-gray-400 border border-[#242d40] hover:border-[#ADFF2F] hover:bg-[#242d40]'}`}>
            <span className="text-sm">{f.icon}</span>
            <span>{f.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
