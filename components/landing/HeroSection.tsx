"use client";

import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, Activity, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* GLOW BACKGROUNDS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#A020F0]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-[-20%] w-[600px] h-[600px] bg-[#8B00FF]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#A020F0] text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A020F0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A020F0]"></span>
            </span>
            Prediz.tech Engine 2.0 Disponível
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Crie sua própria <br />
            <span className="text-gradient">plataforma de previsões.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            O software SaaS white-label definitivo para lançar seu próprio mercado preditivo. Liquidez inteligente, resolução automatizada e design de ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(160,32,240,0.4)] transition-all flex items-center justify-center gap-2 group">
              Começar Agora
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center">
              Ver Demo
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-gray-500 font-semibold">
            <div className="flex items-center gap-2"><Activity size={16} className="text-[#A020F0]" /> +99.9% Uptime</div>
            <div className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#A020F0]" /> Auditoria Web3</div>
          </div>
        </motion.div>

        {/* VISUAL ELEMENTS (Floating Cards) */}
        <div className="relative h-[500px] hidden lg:block">
          {/* Main big card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -15, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] glass-panel-dark rounded-2xl p-6 border border-white/10 shadow-2xl z-20"
            style={{ transformStyle: "preserve-3d" }}
          >
             <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="px-2.5 py-1 bg-white/5 text-white text-[10px] font-bold rounded uppercase tracking-wider">Market</span>
                  <h3 className="text-white font-semibold text-lg mt-3 leading-snug">Elon Musk deixará o conselho do X em 2026?</h3>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10">
                  <TrendingUp size={20} className="text-[#A020F0]" />
                </div>
             </div>

             <div className="space-y-3">
               <div className="flex justify-between items-center text-sm font-bold">
                 <span className="text-[#00c74d]">Sim 32%</span>
                 <span className="text-red-500">Não 68%</span>
               </div>
               <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-[rgba(160,32,240,0.5)] to-[#A020F0]" style={{ width: '32%' }} />
               </div>
             </div>

             <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-[#00c74d]/10 border border-[#00c74d]/20 text-[#00c74d] rounded-xl py-3 text-center font-bold text-sm cursor-pointer hover:bg-[#00c74d]/20 transition">Comprar SIM</div>
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl py-3 text-center font-bold text-sm cursor-pointer hover:bg-red-500/20 transition">Comprar NÃO</div>
             </div>
          </motion.div>

          {/* Floating background card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="absolute -right-12 bottom-10 w-[300px] glass-panel rounded-2xl p-4 border border-white/5 opacity-50 z-10 blur-[1px]"
          >
            <div className="h-4 w-24 bg-white/10 rounded mb-3"></div>
            <div className="h-3 w-full bg-white/5 rounded mb-2"></div>
            <div className="h-3 w-2/3 bg-white/5 rounded"></div>
          </motion.div>

          {/* Floating background card 2 */}
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-0 top-10 w-[240px] glass-panel rounded-xl p-4 border border-white/5 opacity-40 z-10 blur-[2px]"
          >
            <div className="h-10 w-10 rounded-full bg-white/10 mb-3"></div>
            <div className="h-3 w-full bg-white/5 rounded mb-2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
