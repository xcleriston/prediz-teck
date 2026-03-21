"use client";

import React, { useState } from "react";
import { X, TrendingUp, Coins, Trophy } from "lucide-react";

export function WelcomeBanner() {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div className="relative rounded-2xl border overflow-hidden cursor-pointer border-[#242d40] bg-[#151c2c] mb-6 hover:border-[#ADFF2F]/30 transition-all">
      {/* Close button */}
      <button 
        onClick={() => setClosed(true)}
        className="absolute top-3 right-3 p-2 rounded-full hover:bg-[#242d40] transition-colors z-20" 
        aria-label="Fechar"
      >
        <X className="w-5 h-5 text-gray-400 hover:text-white" />
      </button>

      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Bem-vindo à Prediz.tech!</h2>
          <p className="text-sm sm:text-base text-gray-400">Preveja eventos do mundo real e ganhe dinheiro</p>
        </div>

        {/* Info Cards Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-start p-5 rounded-xl bg-[#1a2235] border border-[#242d40] hover:border-[#ADFF2F]/20 transition-all">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-[#ADFF2F]/20">
              <TrendingUp className="w-5 h-5 text-[#ADFF2F]" />
            </div>
            <h3 className="font-semibold text-white mb-1 text-sm">Escolha um Mercado</h3>
            <p className="text-xs text-gray-400">Navegue por centenas de mercados sobre política, esportes, crypto e mais</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start p-5 rounded-xl bg-[#1a2235] border border-[#242d40] hover:border-[#ADFF2F]/20 transition-all">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-[#ADFF2F]/20">
              <Coins className="w-5 h-5 text-[#ADFF2F]" />
            </div>
            <h3 className="font-semibold text-white mb-1 text-sm">Compre SIM ou NÃO</h3>
            <p className="text-xs text-gray-400">Aposte se o evento vai acontecer ou não com qualquer valor</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start p-5 rounded-xl bg-[#1a2235] border border-[#242d40] hover:border-[#ADFF2F]/20 transition-all">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-[#ADFF2F]/20">
              <Trophy className="w-5 h-5 text-[#ADFF2F]" />
            </div>
            <h3 className="font-semibold text-white mb-1 text-sm">Ganhe se Acertar</h3>
            <p className="text-xs text-gray-400">Receba até 100% de retorno se sua previsão estiver correta</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm transition-all duration-150 active:scale-95 h-11 py-2 bg-[#ADFF2F] text-gray-900 hover:bg-[#9AE626] font-bold px-10 shadow-lg shadow-[#ADFF2F]/20">
            Explorar Mercados
          </button>
        </div>
      </div>
    </div>
  );
}
