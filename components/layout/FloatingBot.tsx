"use client";

import { MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingBot() {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative group cursor-pointer"
      >
        
        {/* PING ANIMATION */}
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping"></span>

        <button className="relative bg-primary p-4 rounded-full shadow-[0_0_20px_rgba(173,255,47,0.4)] transition-all">
          <MessageSquareText size={24} className="text-black" />
        </button>

        {/* TOOLTIP */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-bold py-1 px-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
          Dúvidas? Fale com a IA
        </div>
      </motion.div>
    </div>
  );
}
