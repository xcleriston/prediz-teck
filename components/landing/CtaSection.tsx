"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#121A2F] to-[#0A0F1A] border border-white/10 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
        
        {/* GLOWS */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A020F0]/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B00FF]/20 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para revolucionar seu mercado?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Lance sua própria plataforma de previsões em menos de 10 minutos. Nenhuma infraestrutura web3 ou equipe de engenharia necessária.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
              Começar Gratuitamente
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center">
              Falar com o Vendas
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
