"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Flame, Users, Clock } from "lucide-react";

type Props = {
  title: string;
  image: string;
  yesPrice: number;
  noPrice: number;
  volume: number;
  expiresAt: string;
  traders: number;
  trending?: boolean;
};

export function MarketCard({
  title,
  image,
  yesPrice,
  noPrice,
  volume,
  expiresAt,
  traders,
  trending = true
}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-[#151c2c] border border-[#242d40] rounded-xl p-4 hover:shadow-xl hover:shadow-black/40 transition-all group"
    >
      
      {/* IMAGE CONTAINER */}
      <div className="flex gap-4">
        <motion.div
           whileHover={{ scale: 1.1 }}
           className="w-[80px] h-[80px] rounded-lg overflow-hidden flex-shrink-0 bg-[#0d1421] border border-[#242d40]"
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>

        <div className="flex flex-col justify-between py-1">
          <h3 className="text-white font-semibold text-sm line-clamp-2 leading-tight group-hover:text-primary transition">
            {title}
          </h3>

          {/* INFO CHIPS */}
          <div className="flex gap-3 text-[10px] sm:text-xs text-gray-400 mt-2 font-spartan">
            <span className="flex items-center gap-1">
              <Clock size={12} /> {expiresAt}
            </span>
            <span className="flex items-center gap-1">
              <Users size={12} /> {traders}
            </span>
            {trending && (
              <span className="flex items-center gap-1 text-primary">
                <Flame size={12} /> Em Alta
              </span>
            )}
          </div>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="mt-4">
        <div className="flex justify-between text-[10px] text-gray-500 mb-1 font-bold uppercase tracking-wider">
           <span>Sim {Math.round(yesPrice * 100)}%</span>
           <span>Não {Math.round(noPrice * 100)}%</span>
        </div>
        <div className="h-1.5 bg-[#242d40] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-dark transition-all duration-500"
            style={{ width: `${yesPrice * 100}%` }}
          />
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-green-500/10 text-green-400 py-2.5 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition font-bold text-xs">
          Sim {yesPrice.toFixed(2)}x
        </button>
        <button className="flex-1 bg-red-500/10 text-red-400 py-2.5 rounded-lg border border-red-500/20 hover:bg-red-500/20 transition font-bold text-xs">
          Não {noPrice.toFixed(2)}x
        </button>
      </div>

      {/* FOOTER */}
      <div className="text-[10px] text-gray-500 mt-3 pt-3 border-t border-[#242d40] flex justify-between items-center">
        <span className="font-spartan">Vol: <span className="text-gray-300 font-bold">${volume.toLocaleString()}</span></span>
        <button className="text-primary font-bold hover:underline">Negociar</button>
      </div>
    </motion.div>
  );
}
