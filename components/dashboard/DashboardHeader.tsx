import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Gamepad2, Globe, Plus, CircleArrowDown, User, Menu } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-[#0f1729] border-[#1f2937]" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          {/* Logo & Status */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-[#ADFF2F] font-black text-xl tracking-tighter">PREDIZ.TECH</span>
            </Link>
            <button className="flex items-center gap-1.5 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ADFF2F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ADFF2F]"></span>
              </span>
            </button>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden sm:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
              <input 
                type="text" 
                className="flex rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-10 h-9 text-sm bg-[#1f2937] border-[#2d3748] focus:border-[#ADFF2F] focus:ring-[#ADFF2F] text-white" 
                placeholder="Buscar mercados..." 
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-0 sm:gap-2">
            {/* Playground Switch */}
            <div className="flex items-center gap-1.5 playground-switch" style={{ minHeight: 'unset' }}>
              <div className="hidden sm:flex items-center gap-1">
                <Gamepad2 className="w-3 h-3 text-gray-500" />
                <span className="text-[10px] font-semibold hidden md:block text-gray-500">Treino</span>
              </div>
              <button role="switch" aria-checked="false" className="playground-switch relative inline-flex items-center rounded-full transition-colors focus:outline-none bg-gray-700 h-[18px] w-[32px]">
                <span className="block rounded-full bg-white shadow transition-transform h-[14px] w-[14px] translate-x-[2px]"></span>
              </button>
            </div>

            {/* Language */}
            <button type="button" className="h-8 px-2 gap-1.5 rounded-md inline-flex items-center hover:bg-accent/50 text-base">
              🇧🇷<Globe className="w-4 h-4 text-white/70" />
            </button>

            {/* Create Market */}
            <button className="items-center justify-center gap-2 whitespace-nowrap transition-all duration-150 active:scale-95 border hover:text-accent-foreground active:bg-accent/80 h-9 rounded-md px-3 hidden sm:inline-flex border-[#ADFF2F] bg-transparent font-semibold text-xs text-[#ADFF2F] hover:bg-[#ADFF2F]/10">
              <Plus className="w-4 h-4 mr-1" />
              Criar Mercado
            </button>

            {/* Balance */}
            <button className="hidden sm:flex items-center gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#ADFF2F]/20 border border-[#ADFF2F]/50 transition-colors">
              <span className="text-sm sm:text-base">🌿</span>
              <span className="font-semibold text-xs sm:text-sm text-white">2,00</span>
            </button>

            {/* Deposit */}
            <button className="items-center justify-center gap-2 whitespace-nowrap text-sm transition-all duration-150 active:scale-95 h-9 rounded-md px-3 hidden sm:inline-flex bg-[#ADFF2F] hover:bg-[#9AE626] text-gray-900 font-semibold">
              <CircleArrowDown className="w-4 h-4 mr-1" />
              Depositar
            </button>

            {/* Profile Menu */}
            <button type="button" className="relative rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-accent/50 transition-colors">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#ADFF2F] to-[#7CB518] flex items-center justify-center pointer-events-none">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900" />
              </div>
            </button>

            {/* Mobile Menu */}
            <button className="md:hidden w-8 h-8 -mr-2 text-white inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar - Mobile */}
      <div className="sm:hidden px-4 pb-3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
          <input 
            type="text" 
            className="flex rounded-md border px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm w-full pl-10 h-9 text-sm bg-[#1a2235] border-[#2a3548] focus:border-[#ADFF2F] focus:ring-[#ADFF2F] text-white" 
            placeholder="Buscar mercados..." 
          />
        </div>
      </div>

      {/* Category Navigation */}
      <div className="border-t border-[#1f2937]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            <button className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 bg-[#ADFF2F]/25 text-[#ADFF2F] border border-[#ADFF2F]/50 hover:bg-[#ADFF2F]/35">
              <span className="text-sm sm:text-base">🌐</span><span className="hidden xs:inline">Todos</span>
            </button>
            {['🏛️ Política', '⚽ Esportes', '₿ Cripto', '📈 Finanças', '💹 Economia', '📱 Social', '♻️ Meio Ambiente', '💻 Tecnologia', '🎬 Entretenimento', '🎮 Jogos', '🌎 Mundo'].map((cat, i) => (
              <button key={i} className="flex items-center gap-1 px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 text-gray-500 hover:text-gray-300 hover:bg-[#1f2937]">
                <span className="text-sm sm:text-base">{cat.split(' ')[0]}</span>
                <span className="hidden xs:inline">{cat.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
