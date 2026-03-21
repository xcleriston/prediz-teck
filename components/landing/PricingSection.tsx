"use client";

import { Check } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    price: "Grátis",
    desc: "Para testar a plataforma e criar sua primeira comunidade.",
    features: ["Até 1.000 usuários", "Mercados ilimitados", "Suporte da comunidade", "Taxa de 2% por trade"],
    cta: "Começar Grátis",
    highlight: false
  },
  {
    name: "Pro",
    price: "$299",
    period: "/mês",
    desc: "Para operadores em crescimento buscando profissionalização.",
    features: ["Até 50.000 usuários", "Domínio personalizado", "Suporte prioritário", "Taxa reduzida (1%)", "Liquidez automatizada"],
    cta: "Assinar Pro",
    highlight: true
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "Para corretoras e grandes marcas com necessidades específicas.",
    features: ["Usuários ilimitados", "API Dedicada", "SLA 99.99%", "Taxa personalizada", "Account Manager"],
    cta: "Falar com Vendas",
    highlight: false
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Escalável com o seu sucesso.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comece de graça. Pague apenas quando sua plataforma decolar e precisar de recursos institucionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-3xl p-8 relative ${
                plan.highlight 
                  ? "bg-gradient-primary border-transparent scale-105 shadow-[0_0_40px_rgba(160,32,240,0.3)] z-10" 
                  : "glass-panel-dark border border-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-xs font-bold shadow-xl">
                  MAIS POPULAR
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-white"}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 h-10 ${plan.highlight ? "text-white/80" : "text-gray-400"}`}>{plan.desc}</p>
              
              <div className="mb-8">
                <span className={`text-5xl font-black tracking-tight ${plan.highlight ? "text-white" : "text-white"}`}>{plan.price}</span>
                {plan.period && <span className={`${plan.highlight ? "text-white/70" : "text-gray-500"}`}>{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map(feat => (
                  <li key={feat} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-white" : "text-gray-300"}`}>
                    <Check size={18} className={`shrink-0 ${plan.highlight ? "text-white" : "text-[#A020F0]"}`} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.highlight 
                    ? "bg-white text-black hover:bg-gray-100" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
