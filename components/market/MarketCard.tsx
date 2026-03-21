"use client";

import { motion } from "framer-motion";
import { Share2, Heart, Star, Users, Clock, TrendingUp } from "lucide-react";
import { useState } from "react";

// Category badge colors — matching satoshimkt.com
const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Esportes: { bg: "bg-orange-100", text: "text-orange-600" },
  Cripto: { bg: "bg-yellow-100", text: "text-yellow-700" },
  Política: { bg: "bg-blue-100", text: "text-blue-600" },
  Finanças: { bg: "bg-green-100", text: "text-green-700" },
  Tecnologia: { bg: "bg-purple-100", text: "text-purple-700" },
  Entretenimento: { bg: "bg-pink-100", text: "text-pink-600" },
  Economia: { bg: "bg-teal-100", text: "text-teal-700" },
  Social: { bg: "bg-red-100", text: "text-red-600" },
  "Meio Ambiente": { bg: "bg-emerald-100", text: "text-emerald-700" },
  Jogos: { bg: "bg-indigo-100", text: "text-indigo-600" },
  default: { bg: "bg-gray-100", text: "text-gray-600" },
};

type Props = {
  title: string;
  image: string;
  yesPrice: number;
  noPrice: number;
  volume: number;
  expiresAt: string;
  traders: number;
  trending?: boolean;
  category?: string;
};

export function MarketCard({
  title,
  image,
  yesPrice,
  noPrice,
  volume,
  expiresAt,
  traders,
  trending = false,
  category = "default",
}: Props) {
  const catStyle = CATEGORY_COLORS[category] ?? CATEGORY_COLORS.default;
  const [liked, setLiked] = useState(false);
  const [starred, setStarred] = useState(false);
  const likeCount = Math.floor(Math.random() * 40) + 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,0,0,0.10)" }}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all flex flex-col"
    >
      {/* TOP ACTIONS */}
      <div className="flex items-center justify-between px-3 pt-3 pb-1">
        {/* Category badge */}
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${catStyle.bg} ${catStyle.text}`}>
          {category !== "default" ? category : "Geral"}
        </span>

        {/* Action icons */}
        <div className="flex items-center gap-2 text-gray-400">
          <button className="hover:text-gray-600 transition flex items-center gap-0.5 text-[11px]">
            <Heart
              size={13}
              onClick={() => setLiked(!liked)}
              className={liked ? "fill-red-500 text-red-500" : ""}
            />
            <span>{liked ? likeCount + 1 : likeCount}</span>
          </button>
          <button className="hover:text-gray-600 transition">
            <Share2 size={13} />
          </button>
          <button className="hover:text-yellow-400 transition" onClick={() => setStarred(!starred)}>
            <Star size={13} className={starred ? "fill-yellow-400 text-yellow-400" : ""} />
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="px-3">
        <div className="w-full h-[140px] rounded-xl overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/400x140/f0f0f0/999?text=Market";
            }}
          />
        </div>
      </div>

      {/* TITLE */}
      <div className="px-3 pt-2 pb-1 flex-1">
        <h3 className="text-gray-900 font-semibold text-[13px] leading-tight line-clamp-2">
          {title}
        </h3>

        {/* META */}
        <div className="flex items-center gap-3 mt-1.5 text-[11px] text-gray-400">
          <span className="flex items-center gap-1">
            <Clock size={11} /> {expiresAt}
          </span>
          <span className="flex items-center gap-1">
            <Users size={11} /> {traders}
          </span>
          {trending && (
            <span className="flex items-center gap-1 text-primary font-semibold">
              <TrendingUp size={11} /> Em Alta
            </span>
          )}
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="px-3 mt-2">
        <div className="flex justify-between text-[10px] font-bold mb-1">
          <span className="text-primary">Sim {Math.round(yesPrice * 100)}%</span>
          <span className="text-red-500">Não {Math.round(noPrice * 100)}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${yesPrice * 100}%` }}
          />
        </div>
      </div>

      {/* BUY BUTTONS */}
      <div className="flex gap-2 px-3 mt-3">
        <button className="flex-1 py-2 rounded-lg bg-primary/10 text-primary border border-primary/30 text-[11px] font-bold hover:bg-primary hover:text-white transition-all">
          Comprar Sim {Math.round(yesPrice * 100)}%
          <span className="block text-[10px] opacity-70">Paga {(1 / yesPrice).toFixed(1)}x</span>
        </button>
        <button className="flex-1 py-2 rounded-lg bg-red-50 text-red-500 border border-red-200 text-[11px] font-bold hover:bg-red-500 hover:text-white transition-all">
          Comprar Não {Math.round(noPrice * 100)}%
          <span className="block text-[10px] opacity-70">Paga {(1 / noPrice).toFixed(1)}x</span>
        </button>
      </div>

      {/* FOOTER */}
      <div className="px-3 py-2 mt-2 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[11px] text-gray-400">
          Vol: <span className="text-gray-600 font-semibold">${(volume / 1000).toFixed(1)}k</span>
        </span>
        <button className="text-[11px] text-gray-400 font-semibold hover:text-primary transition">
          Negociar →
        </button>
      </div>
    </motion.div>
  );
}
