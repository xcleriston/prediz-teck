"use client";

import { useState } from "react";

const FILTERS = [
  { id: "Todos", label: "Todos" },
  { id: "Política", label: "Política" },
  { id: "Esportes", label: "Esportes" },
  { id: "Cripto", label: "Cripto" },
  { id: "Finanças", label: "Finanças" },
  { id: "Economia", label: "Economia" },
  { id: "Social", label: "Social" },
  { id: "Meio Ambiente", label: "Meio Ambiente" },
  { id: "Tecnologia", label: "Tecnologia" },
  { id: "Entretenimento", label: "Entretenimento" },
  { id: "Jogos", label: "Jogos" },
];

type Props = {
  onFilter?: (category: string) => void;
};

export function MarketFilters({ onFilter }: Props) {
  const [active, setActive] = useState("Todos");

  function handleClick(id: string) {
    setActive(id);
    onFilter?.(id);
  }

  return (
    <div className="flex gap-1.5 flex-wrap items-center py-3 border-b border-gray-200 bg-white sticky top-[56px] z-40 px-4">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          onClick={() => handleClick(f.id)}
          className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all whitespace-nowrap ${
            active === f.id
              ? "bg-primary text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
