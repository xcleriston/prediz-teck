"use client";

import { motion } from "framer-motion";
import { PlusCircle, Webhook, Coins } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Market Creation",
    desc: "Define parameters, dates, and outcomes. Our engine instantly compiles the deterministic smart contract logic.",
    icon: <PlusCircle size={40} className="text-[#A020F0]" />
  },
  {
    num: "02",
    title: "Inject Liquidity",
    desc: "Seed the LMSR pool. This establishes the initial probability curve and guarantees execution for the first traders.",
    icon: <Coins size={40} className="text-white" />
  },
  {
    num: "03",
    title: "Earn Volume Fees",
    desc: "As your community trades, you automatically collect a percentage of every transaction directly to your treasury.",
    icon: <Webhook size={40} className="text-[#A020F0]" />
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 relative bg-[#0f1524] border-y-2 border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-24">
          <h2 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            Operational Flow.
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:gap-24 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[40px] lg:left-[80px] top-0 bottom-0 w-1 bg-white/5" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center md:items-start gap-8 lg:gap-16 group"
            >
              {/* Step Icon / Number node */}
              <div className="w-[80px] h-[80px] lg:w-[160px] lg:h-[160px] shrink-0 bg-[#0A0F1A] border-2 border-white/10 rounded-full flex flex-col items-center justify-center relative z-10 group-hover:border-[#A020F0] group-hover:scale-110 transition-all duration-500">
                <div className="text-[#A020F0] font-black text-2xl lg:text-5xl opacity-50 mb-1 lg:mb-2">{step.num}</div>
                <div className="scale-50 lg:scale-100">{step.icon}</div>
              </div>

              {/* Content Panel */}
              <div className="flex-1 bg-white/[0.02] border-2 border-white/5 rounded-[32px] p-8 lg:p-12 hover:bg-white/[0.04] transition-colors relative mt-0 lg:mt-8">
                <h3 className="text-2xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
