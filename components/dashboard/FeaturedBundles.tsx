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
    <div className="mb-6">
      <h2 className="text-base md:text-lg font-bold mb-3 text-white">🔥 Coleções em Destaque</h2>
      <div className="relative w-full">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 pb-2">
            {bundles.map((bundle, i) => (
              <div key={i} className="min-w-0 shrink-0 basis-[85%] sm:basis-[60%] md:basis-1/3">
                <div className="bg-card text-card-foreground shadow-sm relative overflow-hidden h-[200px] md:h-[240px] cursor-pointer border-0 rounded-2xl group">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${bundle.img})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
                  <div className="relative z-10 h-full p-4 flex flex-col justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="text-lg">{bundle.groupIcon}</span>
                      <span className="text-white/70 text-xs font-medium uppercase tracking-wide">{bundle.group}</span>
                      {bundle.featured && (
                        <span className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ADFF2F]/20 text-[#ADFF2F] border border-[#ADFF2F]/30">⭐ Featured</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-bold text-base md:text-lg leading-tight line-clamp-2">{bundle.title}</h3>
                      <p className="text-white/60 text-xs line-clamp-1">{bundle.desc}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-white/70 text-xs">
                          <span>{bundle.markets} mercados</span>
                          <span>•</span>
                          <span>{bundle.vol} 🌿</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#ADFF2F] text-xs font-semibold">
                          <Layers className="w-3 h-3" />
                          <span>Apostar em Todos</span>
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
