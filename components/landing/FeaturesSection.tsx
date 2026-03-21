"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, LayoutTemplate, TerminalSquare, PieChart } from "lucide-react";
import { useRef } from "react";

const FEATURES = [
  {
    icon: <Activity strokeWidth={1.5} size={32} className="text-[#A020F0]" />,
    title: "LMSR Physics Engine",
    desc: "A fully decentralized Logarithmic Market Scoring Rule engine. Prices adapt instantly to every fractional volume, guaranteeing perfect market efficiency without counterparty risk.",
    align: "left"
  },
  {
    icon: <LayoutTemplate strokeWidth={1.5} size={32} className="text-white" />,
    title: "Sovereign White-Label",
    desc: "Your brand, your liquidity, your rules. Zero references to our infrastructure. Full component sovereignty via an intuitive no-code dashboard.",
    align: "right"
  },
  {
    icon: <TerminalSquare strokeWidth={1.5} size={32} className="text-[#00c74d]" />,
    title: "Headless API Architecture",
    desc: "RESTful and GraphQL endpoints designed for <10ms latencies. Build bespoke frontends or integrate directly into your existing fintech ecosystem.",
    align: "left"
  },
  {
    icon: <PieChart strokeWidth={1.5} size={32} className="text-[#ff4d4d]" />,
    title: "Institutional Analytics",
    desc: "Real-time ledger tracking, trader retention metrics, and volume heatmaps. See the money flow before the market even reacts.",
    align: "right"
  }
];

export function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="features" ref={containerRef} className="py-32 relative bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-24 flex justify-between items-end">
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase max-w-2xl">
            Raw <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A020F0] to-[#8B00FF]">Infrastructure.</span>
          </h2>
          <div className="hidden md:block w-32 h-1 bg-[#A020F0]/50 mb-4" />
        </div>

        <div className="relative space-y-12 lg:space-y-0">
          {/* Connecting central line for visual tension */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#A020F0]/0 via-[#A020F0]/30 to-[#A020F0]/0" />

          {FEATURES.map((feat, i) => {
            const isLeft = feat.align === "left";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`lg:w-1/2 flex ${isLeft ? "justify-end lg:pr-20" : "justify-start lg:pl-20 lg:ml-auto"} pb-12 lg:pb-32`}
              >
                <div className={`glass-panel-dark p-10 md:p-12 rounded-[32px] border border-white/5 hover:border-[#A020F0]/30 transition-colors duration-500 max-w-lg relative group ${isLeft ? "origin-top-right" : "origin-top-left"}`}>
                   
                   {/* Background Glow on Hover */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[#A020F0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px] pointer-events-none" />

                   <div className="w-16 h-16 rounded-[20px] bg-[#0A0F1A] border border-white/10 flex items-center justify-center mb-8 shrink-0 relative z-10">
                     {feat.icon}
                   </div>
                   
                   <h3 className="text-2xl font-bold text-white mb-4 tracking-tight uppercase relative z-10">{feat.title}</h3>
                   <p className="text-lg text-gray-400 leading-relaxed font-medium relative z-10">
                     {feat.desc}
                   </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
