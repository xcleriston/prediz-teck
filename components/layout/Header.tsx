"use client";

import { useState } from "react";
import { Search, Bell, Globe, User, ChevronDown } from "lucide-react";
import { DepositModal } from "../payment/DepositModal";
import { KycModal } from "../kyc/KycModal";

export function Header() {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isKycOpen, setIsKycOpen] = useState(false);
  const [mode, setMode] = useState<"BRL" | "Token">("BRL");

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-2.5 flex items-center gap-3 sticky top-0 z-50 shadow-sm">
      
      {/* LOGO */}
      <div className="flex items-center gap-1.5 shrink-0 mr-2">
        <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm">P</div>
        <span className="font-bold text-gray-900 text-[15px] tracking-tight">Prediz.teck</span>
      </div>

      {/* SEARCH BAR — centered like satoshimkt */}
      <div className="flex-1 max-w-[480px] mx-auto">
        <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2 gap-2 border border-transparent focus-within:border-primary/30 focus-within:bg-white transition-all">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Buscar mercados..."
            className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 w-full"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 shrink-0 ml-auto">

        {/* BRL / Token toggle */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-lg p-0.5 text-[12px] font-bold">
          <button
            onClick={() => setMode("BRL")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              mode === "BRL" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            }`}
          >
            BRL
          </button>
          <button
            onClick={() => setMode("Token")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              mode === "Token" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"
            }`}
          >
            Token
          </button>
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl bg-gray-100 text-gray-500 hover:text-gray-800 transition">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </button>

        {/* Language */}
        <button className="hidden md:flex items-center gap-1 p-2 rounded-xl bg-gray-100 text-gray-500 hover:text-gray-800 transition">
          <Globe size={16} />
        </button>

        {/* Balance */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 text-sm">
          <span className="text-gray-400 text-[11px]">Saldo</span>
          <span className="font-bold text-gray-900">R$ 120,00</span>
        </div>

        {/* Deposit */}
        <button
          onClick={() => setIsDepositOpen(true)}
          className="hidden sm:block bg-primary text-white text-[12px] font-bold px-3 py-2 rounded-xl hover:bg-primary-dark transition"
        >
          Depositar
        </button>

        {/* Login / Profile */}
        <button className="flex items-center gap-1.5 bg-primary text-white text-[12px] font-bold px-3 py-2 rounded-xl hover:bg-primary-dark transition">
          <User size={14} />
          <span className="hidden sm:inline">Entrar</span>
          <ChevronDown size={12} />
        </button>
      </div>

      <DepositModal isOpen={isDepositOpen} onClose={() => setIsDepositOpen(false)} />
      <KycModal isOpen={isKycOpen} onClose={() => setIsKycOpen(false)} />
    </header>
  );
}
