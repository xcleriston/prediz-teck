import { Search, Globe, User, ShieldCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

export function ModernHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel-dark border-b border-white/5 px-6 py-4 flex items-center justify-between">
      
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(160,32,240,0.5)]">
          P
        </div>
        <span className="font-bold text-white text-lg tracking-tight">Prediz.tech</span>
      </div>

      {/* MID NAVIGATION (Desktop) */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-400">
        <Link href="#features" className="hover:text-white transition-colors">Features</Link>
        <Link href="#how-it-works" className="hover:text-white transition-colors">Como Funciona</Link>
        <Link href="#dashboard" className="hover:text-white transition-colors">Plataforma</Link>
        <Link href="#pricing" className="hover:text-white transition-colors">Preços</Link>
      </nav>

      {/* RIGHT ACTIONS */}
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex text-gray-300 hover:text-white transition-colors text-sm font-semibold">
          Entrar
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold hover:bg-gray-200 transition-all flex items-center gap-1 group">
          Começar
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </header>
  );
}
