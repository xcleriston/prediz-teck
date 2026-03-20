"use client";

import { Search, Globe, User, ShieldCheck } from "lucide-react";
import { ConnectWallet } from "../web3/ConnectWallet";
import { useState } from "react";
import { DepositModal } from "../payment/DepositModal";
import { KycModal } from "../kyc/KycModal";

export function Header() {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isKycOpen, setIsKycOpen] = useState(false);

  return (
    <header className="bg-[#0d1421] border-b border-[#242d40] px-6 py-4 flex items-center justify-between sticky top-0 z-50 font-nunito">
      
      {/* LOGO */}
      <div className="text-white font-bold text-xl font-fredoka tracking-tight flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-black font-black">P</div>
        Prediz.teck
      </div>

      {/* SEARCH */}
      <div className="hidden lg:flex items-center bg-[#151c2c] px-4 py-2 rounded-lg w-[400px] border border-[#242d40] focus-within:border-primary/50 transition">
        <Search size={16} className="text-gray-400" />
        <input
          placeholder="Buscar mercados preditivos..."
          className="bg-transparent outline-none ml-2 text-white w-full text-sm"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-4 mr-2">
           <button 
             onClick={() => setIsKycOpen(true)}
             className="text-gray-400 hover:text-primary transition flex items-center gap-1 text-xs font-bold"
           >
             <ShieldCheck size={16} />
             KYC
           </button>
           <Globe className="text-gray-400 hover:text-white cursor-pointer transition" size={18} />
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 bg-[#151c2c] rounded-lg border border-[#242d40] shadow-inner">
           <span className="text-primary text-[10px] font-black uppercase tracking-tighter">Saldo</span>
           <span className="text-white text-xs font-bold">🌿 120.00</span>
        </div>

        <button 
          onClick={() => setIsDepositOpen(true)}
          className="bg-primary text-black px-5 py-2 rounded-lg font-black hover:brightness-110 active:scale-95 transition text-xs shadow-[0_4px_10px_rgba(173,255,47,0.3)]"
        >
          DEPOSITAR
        </button>

        <div className="h-8 w-px bg-[#242d40] mx-1" />

        <ConnectWallet />

        <div className="w-9 h-9 rounded-full bg-[#151c2c] border border-[#242d40] flex items-center justify-center text-gray-500 hover:text-white cursor-pointer transition">
           <User size={18} />
        </div>
      </div>

      <DepositModal isOpen={isDepositOpen} onClose={() => setIsDepositOpen(false)} />
      <KycModal isOpen={isKycOpen} onClose={() => setIsKycOpen(false)} />
    </header>
  );
}
