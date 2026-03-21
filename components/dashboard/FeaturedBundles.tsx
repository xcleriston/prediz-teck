import React from "react";
import { Layers } from "lucide-react";

export function FeaturedBundles() {
  const bundles = [
    { title: "Oriente Médio em Chamas", desc: "Conflitos geopolíticos no Oriente Médio", group: "politics", groupIcon: "🏛️", markets: 5, vol: "22.6K", img: "https://images.unsplash.com/photo-1547489432-cfaaee383c27?w=800&q=80" },
    { title: "Geopolítica Global", desc: "Eleições, conflitos e decisões que moldam o mundo", group: "politics", groupIcon: "🏛️", markets: 4, vol: "19.2K", img: "https://images.unsplash.com/photo-1529434850403-ed729e8cce9b?w=800&q=80", featured: true },
    { title: "Tech & IA 2026", desc: "Inteligência artificial, Big Tech e inovação", group: "tech", groupIcon: "💻", markets: 5, vol: "27.1K", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", featured: true },
    { title: "Crypto Flash ⚡", desc: "Previsões de curto prazo para BTC e ETH", group: "crypto", groupIcon: "₿", markets: 1, vol: "13.8K", img: "https://images.unsplash.com/photo-1621415663737-1e5821c97efb?w=800&q=80", featured: true },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">🔥</span>
        <h2 className="text-base sm:text-lg font-bold text-white">Coleções em Destaque</h2>
      </div>
      <div className="relative w-full">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {bundles.map((bundle, i) => (
              <div key={i} className="min-w-0 shrink-0 basis-full sm:basis-[48%] lg:basis-1/3">
                <div className="relative overflow-hidden h-48 sm:h-56 md:h-64 cursor-pointer rounded-2xl border border-[#242d40] group transition-all hover:border-[#ADFF2F]/30 hover:shadow-lg hover:shadow-[#ADFF2F]/10">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${bundle.img})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1421]/95 via-[#0d1421]/60 to-transparent"></div>
                  <div className="relative z-10 h-full p-4 sm:p-5 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-xl">{bundle.groupIcon}</span>
                      <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">{bundle.group}</span>
                      {bundle.featured && (
                        <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ADFF2F]/20 text-[#ADFF2F] border border-[#ADFF2F]/40">⭐ Destaque</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight line-clamp-2">{bundle.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm line-clamp-1">{bundle.desc}</p>
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <span>{bundle.markets} mercados</span>
                          <span>•</span>
                          <span>{bundle.vol} 🌿</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#ADFF2F] text-xs font-semibold hover:text-[#ADFF2F]/80 transition">
                          <Layers className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Todos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
