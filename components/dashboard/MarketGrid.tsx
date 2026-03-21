/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Code, Share2, Star, Clock, Users, Sparkles } from "lucide-react";

interface BinaryMarketProps {
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

function BinaryMarketCard({ m }: { m: BinaryMarketProps }) {
  return (
    <div className="group p-4 sm:p-5 rounded-2xl border bg-[#151c2c] border-[#242d40] transition-all cursor-pointer relative">
      <div className="flex items-center justify-between mb-2 pr-0">
        <div className="flex items-center gap-1.5 flex-wrap min-w-0">
          {m.badge && (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${m.badge.colorClass}`}>
              <span>{m.badge.icon}</span>{m.badge.name}
            </span>
          )}
          {!m.badge && m.category && (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${m.category.colorClass}`}>
              <span>{m.category.icon}</span>{m.category.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="p-1 text-gray-500 hover:text-white"><Code className="w-3 h-3 sm:w-4 sm:h-4" /></button>
          <button className="p-1 text-gray-500 hover:text-white"><Share2 className="w-4 h-4 sm:w-5 sm:h-5" /></button>
          <button className="p-1 text-gray-500 hover:text-[#ADFF2F]"><Star className="w-4 h-4 sm:w-5 sm:h-5" /></button>
        </div>
      </div>

      <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0">
          <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold line-clamp-2 text-sm sm:text-base transition-colors text-white">{m.title}</h3>
          <div className="flex items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /><span className="hidden xs:inline">{m.timeLeft}</span>
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />{m.participants}
              <Sparkles className="w-3 h-3 text-[#ADFF2F] opacity-70" title="Enhanced liquidity" />
            </span>
          </div>
        </div>
      </div>

      <div className="mb-3 sm:mb-4">
        <div className="flex justify-between items-center mb-1 sm:mb-1.5">
          <span className="text-xs sm:text-sm font-semibold text-gray-300">Sim</span>
          <span className="text-xs sm:text-sm font-bold text-[#ADFF2F]">{m.yesProb}%</span>
        </div>
        <div className="h-1.5 sm:h-2 rounded-full overflow-hidden bg-[#242d40]">
          <div className="h-full bg-gradient-to-r from-[#ADFF2F] to-[#7CB518] rounded-full transition-all duration-500" style={{ width: `${m.yesProb}%` }}></div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm transition-colors flex flex-col items-center bg-[#ADFF2F]/10 border-[#ADFF2F]/50 text-[#ADFF2F] hover:bg-[#ADFF2F]/20">
          <span className="font-semibold">Comprar Sim {m.yesProb}%</span>
          <span className="text-[10px] sm:text-xs opacity-80">Paga {m.paysYes}</span>
        </button>
        <button className="flex-1 py-2.5 sm:py-3 rounded-xl border text-xs sm:text-sm transition-colors flex flex-col items-center bg-red-500/10 border-red-500/50 text-red-400 hover:bg-red-500/20">
          <span className="font-semibold">Comprar Não {100 - m.yesProb}%</span>
          <span className="text-[10px] sm:text-xs opacity-80">Paga {m.paysNo}</span>
        </button>
      </div>

      <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t flex items-center justify-between text-[10px] sm:text-xs border-[#242d40] text-gray-400">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span>{m.volume} Vol.</span>
          <span className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full ${m.spi.bgClass} ${m.spi.textClass} text-[9px] font-medium`}>
            <span>{m.spi.dot}</span><span>SPI {m.spi.value}</span>
          </span>
          {m.lmsr && (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-blue-500/15 text-blue-400 text-[9px] font-medium">LMSR {m.lmsr}</span>
          )}
        </div>
        <span className="text-[#ADFF2F] font-medium cursor-pointer hover:underline">Negociar →</span>
      </div>
    </div>
  );
}

function MultiChoiceMarketCard() {
  return (
    <div className="rounded-2xl border overflow-hidden bg-[#151c2c] border-[#242d40] cursor-pointer transition-all hover:border-[#ADFF2F]/50">
      <div className="relative h-28 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80" alt="Quando BTC atingirá $200k?" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#ADFF2F]" />
          <span className="text-[10px] font-medium text-[#ADFF2F] uppercase tracking-wider">Quando irá</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white mb-4 line-clamp-2">Quando BTC atingirá $200k?</h3>
        <div className="relative">
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-[#242d40]"></div>
          <div className="flex justify-between relative">
            {['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', '2027+'].map((q, i) => (
              <div key={i} className="flex flex-col items-center gap-1 z-10">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold ${i === 0 ? 'bg-[#ADFF2F] text-black' : 'bg-[#1a2235] border border-[#242d40] text-gray-400'}`}>17%</div>
                <span className={`text-[9px] text-center max-w-[60px] truncate ${i === 0 ? 'text-[#ADFF2F] font-semibold' : 'text-gray-400'}`}>{q}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 pt-2 border-t border-[#242d40]">
          <span className="text-[10px] text-gray-400">🌿 16.1K</span>
          <span className="text-[10px] text-gray-400">6 até</span>
        </div>
      </div>
    </div>
  );
}

export function MarketGrid() {
  const markets: BinaryMarketProps[] = [
    {
      title: "Elon Musk anuncia projeto oficial de COLÔNIA LUNAR até dezembro/2026?",
      image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&q=80",
      category: { icon: "🚀", name: "Tecnologia", colorClass: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      timeLeft: "em 9 meses",
      participants: 84,
      yesProb: 63,
      paysYes: "1.6x",
      paysNo: "2.7x",
      volume: "$4.0k",
      spi: { value: 57, label: "Justo", dot: "⚪", bgClass: "bg-gray-500/15", textClass: "text-gray-400" },
      lmsr: "51%"
    },
    {
      title: "João Fonseca entrará no Top 15 do mundo até o fim de 2026?",
      image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=400&q=80",
      category: { icon: "🎾", name: "Esportes", colorClass: "bg-lime-500/20 text-lime-400 border-lime-500/30" },
      timeLeft: "em 10 meses",
      participants: 8,
      yesProb: 50,
      paysYes: "2.0x",
      paysNo: "2.0x",
      volume: "$1.2k",
      spi: { value: 43, label: "Justo", dot: "⚪", bgClass: "bg-gray-500/15", textClass: "text-gray-400" },
    },
    {
      title: "Os ETs de Varginha retornam até 31/12/2029?",
      image: "https://images.unsplash.com/photo-1518292837494-0610757a7d48?w=400&q=80",
      badge: { icon: "📰", name: "Urgente", colorClass: "bg-red-500/20 text-red-400 border-red-500/30" },
      category: { icon: "", name: "", colorClass: "" },
      timeLeft: "em quase 4 anos",
      participants: 51,
      yesProb: 13,
      paysYes: "7.6x",
      paysNo: "1.2x",
      volume: "$2.4k",
      spi: { value: 59, label: "Justo", dot: "⚪", bgClass: "bg-gray-500/15", textClass: "text-gray-400" },
      lmsr: "48%"
    },
    {
      title: "MrBeast atinge 500 milhões de inscritos até agosto?",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80",
      category: { icon: "🎬", name: "Entretenimento", colorClass: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      timeLeft: "em 5 meses",
      participants: 39,
      yesProb: 71,
      paysYes: "1.4x",
      paysNo: "3.5x",
      volume: "$2.5k",
      spi: { value: 62, label: "Justo", dot: "⚪", bgClass: "bg-gray-500/15", textClass: "text-gray-400" },
      lmsr: "51%"
    },
    {
      title: "Brasil será campeão da Copa do Mundo 2026?",
      image: "https://images.unsplash.com/photo-1518605368461-1ee7e1633917?w=400&q=80",
      category: { icon: "⚽", name: "Esportes", colorClass: "bg-green-500/20 text-green-400 border-green-500/30" },
      timeLeft: "em 4 meses",
      participants: 22,
      yesProb: 74,
      paysYes: "1.3x",
      paysNo: "3.9x",
      volume: "$932",
      spi: { value: 55, label: "Superavaliado", dot: "🔴", bgClass: "bg-red-500/15", textClass: "text-red-400" },
      lmsr: "55%"
    },
    {
      title: "Brasil terá pelo menos 10 medalhas de ouro nas Olimpíadas de 2028?",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&q=80",
      category: { icon: "⚽", name: "Esportes", colorClass: "bg-green-500/20 text-green-400 border-green-500/30" },
      timeLeft: "em mais de 2 anos",
      participants: 389,
      yesProb: 50,
      paysYes: "2.0x",
      paysNo: "2.0x",
      volume: "$114.7k",
      spi: { value: 50, label: "Justo", dot: "⚪", bgClass: "bg-gray-500/15", textClass: "text-gray-400" },
      lmsr: "50%"
    }
  ];

  return (
    <div id="markets-section" className="space-y-6 sm:space-y-8">
      <section>
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span className="text-xl">🔥</span>
          <h2 className="text-base sm:text-lg font-bold text-white">Destaques</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          <BinaryMarketCard m={markets[0]} />
          <BinaryMarketCard m={markets[1]} />
          <BinaryMarketCard m={markets[2]} />
          <MultiChoiceMarketCard />
          <BinaryMarketCard m={markets[3]} />
          <BinaryMarketCard m={markets[4]} />
          <BinaryMarketCard m={markets[5]} />
        </div>
      </section>
    </div>
  );
}
