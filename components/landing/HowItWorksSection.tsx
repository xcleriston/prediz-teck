"use client";

import { motion } from "framer-motion";
import { PlusCircle, Droplet, Share2 } from "lucide-react";

const STEPS = [
  {
    icon: <PlusCircle size={24} className="text-[#A020F0]" />,
    title: "1. Crie seu mercado",
    desc: "Defina a pergunta, as opções de resposta e a data de resolução em segundos. Sem código necessário."
  },
  {
    icon: <Droplet size={24} className="text-[#A020F0]" />,
    title: "2. Adicione liquidez",
    desc: "Injete capital inicial para definir as probabilidades e atrair os primeiros traders para o seu mercado."
  },
  {
    icon: <Share2 size={24} className="text-[#A020F0]" />,
    title: "3. Compartilhe e monetize",
    desc: "Sua comunidade negocia. Você ganha uma porcentagem de todo o volume transacionado na plataforma."
  }
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative border-y border-white/5 bg-[#0a0f1a]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Simples, rápido e poderoso.
          </h2>
          <p className="text-gray-400">
            Lançar um mercado preditivo costumava levar meses de engenharia complexa. Com a Prediz.tech, você faz isso em minutos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#A020F0]/50 to-transparent -z-10" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col items-center text-center relative group"
            >
              <div className="w-14 h-14 rounded-2xl glass-panel-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(160,32,240,0.1)] group-hover:shadow-[0_0_30px_rgba(160,32,240,0.3)]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed shadow-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
