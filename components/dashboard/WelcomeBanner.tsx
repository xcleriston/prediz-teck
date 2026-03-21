import React from "react";
import { X, TrendingUp, Coins, Trophy } from "lucide-react";

export function WelcomeBanner() {
  return (
    <div className="relative rounded-2xl border p-6 mb-6 overflow-hidden cursor-pointer border-[#242d40] bg-[#1a2235]">
      {/* Background overlay if we had the image, for now just a dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#1a2235]/80"></div>
      
      <div className="relative z-10">
        <button className="absolute top-2 right-2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors" aria-label="Fechar">
          <X className="w-5 h-5 text-white" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Bem-vindo à Prediz.tech!</h2>
          <p className="text-sm sm:text-base text-gray-300">Preveja eventos do mundo real e ganhe dinheiro!</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#151c2c]">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#ADFF2F]/10">
              <TrendingUp className="w-6 h-6 text-[#ADFF2F]" />
            </div>
            <span className="text-sm font-medium text-gray-400 mb-1">1</span>
            <h3 className="font-semibold text-white mb-1">Escolha um Mercado</h3>
            <p className="text-xs text-gray-300">Navegue por centenas de mercados sobre política, esportes, crypto e mais</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#151c2c]">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#ADFF2F]/10">
              <Coins className="w-6 h-6 text-[#ADFF2F]" />
            </div>
            <span className="text-sm font-medium text-gray-400 mb-1">2</span>
            <h3 className="font-semibold text-white mb-1">Compre SIM ou NÃO</h3>
            <p className="text-xs text-gray-300">Aposte se o evento vai acontecer ou não</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 rounded-xl bg-[#151c2c]">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-[#ADFF2F]/10">
              <Trophy className="w-6 h-6 text-[#ADFF2F]" />
            </div>
            <span className="text-sm font-medium text-gray-400 mb-1">3</span>
            <h3 className="font-semibold text-white mb-1">Ganhe se Acertar</h3>
            <p className="text-xs text-gray-300">Receba até 100% de retorno se sua previsão estiver correta</p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-all duration-150 active:scale-95 h-10 py-2 bg-[#ADFF2F] text-black hover:bg-[#9AE62A] font-bold px-8">
            Entendi, vamos lá!
          </button>
        </div>
      </div>
    </div>
  );
}
