"use client";

import { motion } from "framer-motion";
import { Search, Bell, Settings, TrendingUp, BarChart2, DollarSign } from "lucide-react";

export function DashboardPreviewSection() {
  return (
    <section id="dashboard" className="py-32 relative bg-[#0A0F1A] overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
            The <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A020F0] to-[#8B00FF]">Terminal.</span>
          </h2>
          <p className="text-gray-400 font-medium max-w-sm text-right leading-relaxed">
            Not a generic SaaS dashboard. A professional trading terminal engineered for speed, legibility, and conversion.
          </p>
        </div>

        {/* FRAGMENTED DASHBOARD MOCKUP - Breaking the single box "Bento Trap" */}
        <div className="relative mx-auto max-w-6xl h-[700px]">
          
          {/* Main Chart Area (Pushed Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 w-[90%] md:w-[75%] h-[500px] bg-[#0f1524] border-2 border-[#A020F0]/40 rounded-[32px] overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="h-16 border-b-2 border-white/5 flex items-center justify-between px-8 bg-[#0a0f1a]/80">
              <div className="flex items-center gap-4">
                 <div className="w-4 h-4 rounded-full bg-[#ff4d4d]" />
                 <h3 className="text-white font-bold tracking-tighter uppercase">X Election 2024</h3>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-gray-500 font-semibold text-sm">VOL: $45.2M</span>
                <button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-xl transition"><Settings size={18} /></button>
              </div>
            </div>

            {/* Chart SVG */}
            <div className="w-full h-full relative p-8">
              <div className="absolute top-8 left-8 text-[#A020F0] font-black text-6xl tracking-tighter opacity-20">
                65.4%
              </div>
              
              <svg viewBox="0 0 100 40" className="w-full h-[300px] preserve-aspect-ratio-none mt-4" preserveAspectRatio="none">
                <path d="M0,35 L10,32 L20,38 L30,20 L40,25 L50,15 L60,18 L70,8 L80,12 L90,5 L100,2" fill="none" stroke="#A020F0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M0,35 L10,32 L20,38 L30,20 L40,25 L50,15 L60,18 L70,8 L80,12 L90,5 L100,2 L100,40 L0,40 Z" fill="url(#term-gradient)" opacity="0.3"/>
                <defs>
                  <linearGradient id="term-gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#A020F0" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Action Bar (Overlapping Bottom Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 left-0 lg:left-12 w-[85%] md:w-[450px] bg-[#1a2333] border-2 border-white/10 rounded-[32px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 backdrop-blur-xl"
          >
             <h4 className="text-white font-black text-xl uppercase tracking-tighter mb-6">Trade Execution</h4>
             <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#00c74d]/10 border-2 border-[#00c74d]/30 hover:border-[#00c74d] rounded-2xl p-4 cursor-pointer transition-colors group">
                  <div className="text-[#00c74d] text-sm font-bold uppercase mb-1">Buy Yes</div>
                  <div className="text-white font-black text-2xl group-hover:scale-105 origin-left transition-transform">65¢</div>
                </div>
                <div className="bg-[#ff4d4d]/10 border-2 border-[#ff4d4d]/30 hover:border-[#ff4d4d] rounded-2xl p-4 cursor-pointer transition-colors group">
                  <div className="text-[#ff4d4d] text-sm font-bold uppercase mb-1">Buy No</div>
                  <div className="text-white font-black text-2xl group-hover:scale-105 origin-left transition-transform">35¢</div>
                </div>
             </div>
             <button className="w-full bg-white text-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#A020F0] hover:text-white transition-colors">
               Confirm Trade
             </button>
          </motion.div>

          {/* Sidebar Navigation (Floating Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-12 left-0 w-[80px] md:w-[240px] bg-[#0a0f1a] border-2 border-white/10 rounded-[32px] py-8 px-4 z-30 hidden sm:flex flex-col gap-4 shadow-2xl shadow-black"
          >
             <div className="w-12 h-12 rounded-2xl bg-gradient-secondary flex items-center justify-center text-white font-black mb-8 mx-auto md:mx-0 md:ml-2">
               P
             </div>
             
             <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl text-white">
               <TrendingUp size={24} className="text-[#A020F0] shrink-0" />
               <span className="font-bold hidden md:block">Markets</span>
             </div>
             <div className="flex items-center gap-4 hover:bg-white/5 p-4 rounded-2xl text-gray-500 transition-colors cursor-pointer">
               <BarChart2 size={24} className="shrink-0" />
               <span className="font-bold hidden md:block">Portfolio</span>
             </div>
             <div className="flex items-center gap-4 hover:bg-white/5 p-4 rounded-2xl text-gray-500 transition-colors cursor-pointer">
               <DollarSign size={24} className="shrink-0" />
               <span className="font-bold hidden md:block">Cashier</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
