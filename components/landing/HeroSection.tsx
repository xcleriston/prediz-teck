"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Activity } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pb-12 pt-40 px-6 lg:px-12 overflow-hidden bg-[#0A0F1A]">
      
      {/* EXTREME TYPOGRAPHY & ASYMMETRY (90/10 Layout) */}
      <div className="flex-1 w-full max-w-[1800px] mx-auto flex flex-col justify-between">
        
        {/* TOP LAYER: Navigational Tension & Status */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} /* Spring-like ease */
          className="flex justify-between items-start w-full"
        >
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A020F0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A020F0]"></span>
            </span>
            <span className="text-xs font-bold text-white tracking-widest uppercase">Engine 2.0 Live</span>
          </div>
        </motion.div>

        {/* BOTTOM LAYER: Typographic Brutalism + Overlapping Visuals */}
        <div className="relative mt-auto pt-20">
            
          {/* HUGE TYPOGRAPHY */}
          <motion.h1 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
            className="text-[12vw] leading-[0.85] font-black tracking-tighter text-white uppercase mix-blend-difference relative z-20"
          >
            Predict. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B00FF] to-[#A020F0]">Scale.</span> <br/>
            Dominate.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute right-0 top-0 lg:top-[20%] w-full max-w-[500px] z-10 pointer-events-none hidden md:block"
          >
             {/* THE GLOW TRAP AVOIDANCE: Using high contrast raw borders and solid darks instead of soft glass */}
             <div className="bg-[#0f1524] border-2 border-[#A020F0]/50 rounded-[32px] p-6 shadow-2xl shadow-[#A020F0]/20 transform rotate-[-4deg] hover:rotate-0 transition-transform duration-700 ease-out origin-bottom-right pointer-events-auto">
               <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                 <h3 className="text-white font-bold text-xl uppercase tracking-tighter">Live Market</h3>
                 <Activity className="text-[#A020F0]" />
               </div>
               <p className="text-white font-medium text-2xl leading-tight mb-8">
                 Will AI surpass human intelligence by 2030?
               </p>
               <div className="grid grid-cols-2 gap-4">
                 <button className="bg-[#00c74d] text-black font-black py-4 rounded-full hover:scale-105 transition-transform">
                   YES 72%
                 </button>
                 <button className="bg-[#ff4d4d] text-white font-black py-4 rounded-full hover:scale-105 transition-transform">
                   NO 28%
                 </button>
               </div>
             </div>
          </motion.div>

          <div className="mt-12 lg:mt-24 grid lg:grid-cols-3 gap-8 items-end relative z-30">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="col-span-1 text-gray-400 text-lg md:text-xl font-medium max-w-sm leading-relaxed"
            >
              The ultimate white-label infrastructure for sovereign prediction markets. High liquidity, zero friction.
            </motion.p>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 flex justify-start lg:justify-end"
            >
              <button className="bg-white text-[#0A0F1A] hover:bg-[#A020F0] hover:text-white px-10 py-6 rounded-[32px] font-black text-xl lg:text-3xl tracking-tight transition-colors duration-500 flex items-center gap-4 group">
                Deploy Now
                <span className="bg-black/10 rounded-full p-2 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight strokeWidth={3} />
                </span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
