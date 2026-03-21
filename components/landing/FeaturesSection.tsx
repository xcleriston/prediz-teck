"use client";

import { motion } from "framer-motion";
import { Activity, LayoutTemplate, TerminalSquare, PieChart } from "lucide-react";

const FEATURES = [
  {
    icon: <Activity className="text-white" size={20} />,
    title: "Odds em tempo real (LMSR)",
    desc: "Nosso motor de precificação ajusta as probabilidades perfeitamente a cada centavo apostado, garantindo mercados sempre eficientes.",
    glow: "rgba(160,32,240,0.5)"
  },
  {
    icon: <LayoutTemplate className="text-white" size={20} />,
    title: "White-label Completo",
    desc: "Sua marca, seu domínio, suas regras. Personalize cores, logos e taxas globais sem escrever uma única linha de código.",
    glow: "rgba(139,0,255,0.5)"
  },
  {
    icon: <TerminalSquare className="text-white" size={20} />,
    title: "API Developer-Ready",
    desc: "Integre nossos mercados preditivos no seu app existente usando nossa API RESTful rápida e documentação SDK abrangente.",
    glow: "rgba(0,199,77,0.5)"
  },
  {
    icon: <PieChart className="text-white" size={20} />,
    title: "Dashboard Analítico",
    desc: "Acompanhe volume de negociação, receita de taxas, retenção de usuários e mercados mais ativos em tempo real.",
    glow: "rgba(255,77,77,0.5)"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Infraestrutura de ponta.
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Projetado para suportar desde pequenas comunidades até operações institucionais com milhares de transações por minuto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel-dark p-8 rounded-3xl group hover:bg-white/[0.08] transition-colors border border-white/5 hover:border-white/10"
            >
               <div 
                 className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-1"
                 style={{ background: `linear-gradient(135deg, ${feat.glow}, transparent)` }}
               >
                 {feat.icon}
               </div>
               <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
               <p className="text-sm text-gray-400 leading-relaxed">
                 {feat.desc}
               </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
