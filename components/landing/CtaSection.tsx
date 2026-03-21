"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#0A0F1A] border-t-2 border-white/5 relative overflow-hidden">
      
      {/* Background typographic noise */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[200px] lg:text-[400px] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap">
          PREDIZ.TECH
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center w-full"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[140px] font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
            Control <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A020F0] to-[#8B00FF]">The Future.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            
            <button className="bg-white text-black px-12 py-8 rounded-[40px] font-black text-2xl uppercase tracking-tighter hover:bg-[#A020F0] hover:text-white transition-colors duration-500 flex items-center justify-center gap-4 group">
              Start Building
              <span className="bg-black/10 rounded-full p-2 group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight strokeWidth={4} />
              </span>
            </button>
            
            <button className="bg-transparent border-2 border-white/20 text-white px-12 py-8 rounded-[40px] font-black text-2xl uppercase tracking-tighter hover:bg-white/10 transition-colors duration-500 flex items-center justify-center">
              Sales Call
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
