"use client";

import { useState } from "react";

const FILTERS = ["Tudo", "Ao Vivo", "Em Alta", "Novos", "Volume", "Política", "Esportes", "Cripto"];

export function MarketFilters() {
  const [active, setActive] = useState("Tudo");

  return (
    <div className="flex gap-2 flex-wrap items-center mt-6">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
            active === f
              ? "bg-primary text-black border-primary"
              : "bg-[#151c2c] text-gray-400 border-[#242d40] hover:text-white hover:border-gray-500"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
