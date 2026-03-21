"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Typographic Header (Left Side) */}
          <div className="md:w-1/3 sticky top-32">
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Clear. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A020F0] to-[#8B00FF]">Scale.</span>
            </h2>
            <p className="text-gray-400 font-medium text-lg leading-relaxed mb-12">
              Start building for free. Upgrade to institutional tools only when your volume demands it. No hidden fees.
            </p>
          </div>

          {/* Pricing Cards (Right Side Asymmetry) */}
          <div className="md:w-2/3 flex flex-col gap-8 w-full">
            
            {/* Starter Plan - Minimal */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group border-2 border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-white/30 transition-colors bg-[#0f1524]"
            >
               <div>
                  <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-2">Starter</h3>
                  <p className="text-gray-400 font-medium">Up to 1,000 active traders / 2% fee</p>
               </div>
               <div className="mt-6 sm:mt-0 flex items-center gap-6">
                  <span className="text-white font-black text-4xl uppercase tracking-tighter">Free</span>
                  <button className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                     <MoveRight />
                  </button>
               </div>
            </motion.div>

            {/* Pro Plan - Brutalist & Massive */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative bg-gradient-to-br from-[#A020F0] to-[#8B00FF] rounded-[40px] p-10 md:p-12 shadow-[0_30px_60px_rgba(160,32,240,0.3)] transform lg:scale-105 z-10 overflow-hidden group"
            >
               {/* Decorative background typography */}
               <div className="absolute -right-10 -bottom-10 text-[180px] font-black text-black/10 tracking-tighter leading-none select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                 PRO
               </div>

               <div className="absolute top-8 right-8 bg-black text-white text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
                 Most Volume
               </div>

               <h3 className="text-white font-black text-4xl uppercase tracking-tighter mb-4 relative z-10">Pro</h3>
               <div className="flex items-end gap-2 mb-8 relative z-10">
                 <span className="text-white font-black text-7xl uppercase tracking-tighter leading-none">$299</span>
                 <span className="text-white/70 font-bold mb-2 uppercase">/mo</span>
               </div>
               
               <ul className="space-y-4 mb-12 relative z-10 text-white font-medium text-lg">
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-black" /> Up to 50,000 active traders
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-black" /> Custom Domain & Branding
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-black" /> Automated Liquidity Bots
                 </li>
                 <li className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-black" /> Reduced Fee (1%)
                 </li>
               </ul>

               <button className="w-full bg-black text-white hover:bg-white hover:text-black font-black uppercase py-6 rounded-2xl tracking-widest transition-colors relative z-10 text-lg">
                 Deploy Pro Network
               </button>
            </motion.div>

            {/* Scale Plan - Minimal */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="group border-2 border-white/10 rounded-[32px] p-8 md:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center hover:border-white/30 transition-colors bg-[#0f1524]"
            >
               <div>
                  <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-2">Scale</h3>
                  <p className="text-gray-400 font-medium">Unlimited / Dedicated API / Custom Fee</p>
               </div>
               <div className="mt-6 sm:mt-0 flex items-center gap-6">
                  <span className="text-white font-black text-2xl uppercase tracking-tighter">Custom</span>
                  <button className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                     <MoveRight />
                  </button>
               </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
