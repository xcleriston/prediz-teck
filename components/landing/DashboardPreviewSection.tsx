"use client";

import { motion } from "framer-motion";
import { Search, Bell, Settings, TrendingUp, BarChart2, DollarSign } from "lucide-react";

export function DashboardPreviewSection() {
  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      {/* GLOW BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#A020F0]/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Uma interface desenhada para conversão.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Seus usuários desfrutam de uma experiência focada no trader, inspirada nas maiores plataformas financeiras do mundo. Totalmente white-label.
          </p>
        </div>

        {/* DASHBOARD MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl rounded-2xl md:rounded-[2rem] border border-white/10 glass-panel-dark overflow-hidden shadow-[0_0_50px_rgba(160,32,240,0.15)] bg-[#0B101E]"
        >
          {/* Mockup Header */}
          <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
             <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/80" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
               <div className="w-3 h-3 rounded-full bg-green-500/80" />
             </div>
             <div className="w-64 h-8 bg-black/40 rounded-md border border-white/5 flex items-center px-3 gap-2">
               <Search size={14} className="text-gray-500" />
               <div className="w-24 h-2 bg-gray-700/50 rounded-full" />
             </div>
             <div className="flex items-center gap-4">
               <Bell size={16} className="text-gray-400" />
               <Settings size={16} className="text-gray-400" />
               <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#A020F0] to-[#8B00FF]" />
             </div>
          </div>

          <div className="flex">
            {/* Mockup Sidebar */}
            <div className="w-16 md:w-56 border-r border-white/5 h-[600px] p-4 hidden sm:flex flex-col gap-2 bg-white/[0.01]">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 text-[#A020F0]">
                <TrendingUp size={18} /> <span className="hidden md:block text-sm font-bold">Mercados</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-gray-500 transition">
                <BarChart2 size={18} /> <span className="hidden md:block text-sm font-semibold">Portfólio</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-gray-500 transition">
                <DollarSign size={18} /> <span className="hidden md:block text-sm font-semibold">Depósitos</span>
              </div>
            </div>

            {/* Mockup Main Content */}
            <div className="flex-1 p-6 lg:p-10">
               <h3 className="text-2xl font-bold text-white mb-2">Trump vencerá novamente em 2024?</h3>
               <div className="flex gap-4 text-sm text-gray-400 font-semibold mb-8">
                 <span>Vol: $1.2M</span>
                 <span>Termina em 30 dias</span>
               </div>

               {/* Chart Placeholder Area */}
               <div className="w-full h-[250px] border border-white/5 rounded-2xl bg-gradient-to-b from-[#A020F0]/10 to-transparent relative mb-8 flex items-end">
                  {/* Fake SVG line chart */}
                  <svg viewBox="0 0 100 40" className="w-full h-full preserve-aspect-ratio-none" preserveAspectRatio="none">
                    <path d="M0,35 Q10,25 20,30 T40,20 T60,10 T80,15 T100,5" fill="none" stroke="#A020F0" strokeWidth="0.5" />
                    <path d="M0,35 Q10,25 20,30 T40,20 T60,10 T80,15 T100,5 L100,40 L0,40 Z" fill="url(#chart-gradient)" opacity="0.2"/>
                    <defs>
                      <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#A020F0" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="absolute right-4 top-4 bg-[#8B00FF]/20 text-[#A020F0] border border-[#A020F0]/30 px-3 py-1 rounded-full text-xs font-bold">
                    SIM 65%
                  </div>
               </div>

               {/* Action Bounds */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-[#00c74d]/10 border border-[#00c74d]/20 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-[#00c74d]/20 transition">
                   <span className="text-[#00c74d] font-bold">Comprar SIM</span>
                   <span className="text-white font-bold">65¢</span>
                 </div>
                 <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex justify-between items-center cursor-pointer hover:bg-red-500/20 transition">
                   <span className="text-red-500 font-bold">Comprar NÃO</span>
                   <span className="text-white font-bold">35¢</span>
                 </div>
               </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
