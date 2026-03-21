"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { MarketCard } from "@/components/market/MarketCard";
import { MarketFilters } from "@/components/market/MarketFilters";
import { FloatingBot } from "@/components/layout/FloatingBot";
import { Footer } from "@/components/layout/Footer";

const ALL_MARKETS = [
  {
    title: "O Bitcoin atingirá US$ 100.000 antes de 2025?",
    image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    yesPrice: 0.65, noPrice: 0.35, volume: 1254000, expiresAt: "12d", traders: 450, trending: true, category: "Cripto",
  },
  {
    title: "O Brasil vencerá a Copa América 2024?",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    yesPrice: 0.42, noPrice: 0.58, volume: 540200, expiresAt: "5d", traders: 890, trending: false, category: "Esportes",
  },
  {
    title: "Elon Musk deixará de ser CEO do X este ano?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/320px-Logo_of_Twitter.svg.png",
    yesPrice: 0.15, noPrice: 0.85, volume: 230000, expiresAt: "25d", traders: 1200, trending: true, category: "Tecnologia",
  },
  {
    title: "Ouro atingirá nova máxima histórica em Outubro?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Gold_nugget_%28Australia%29_4_%28aka%29.jpg/320px-Gold_nugget_%28Australia%29_4_%28aka%29.jpg",
    yesPrice: 0.55, noPrice: 0.45, volume: 89000, expiresAt: "3h", traders: 156, trending: false, category: "Finanças",
  },
  {
    title: "ChatGPT vai superar Google em buscas até 2026?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/256px-ChatGPT_logo.svg.png",
    yesPrice: 0.38, noPrice: 0.62, volume: 320000, expiresAt: "60d", traders: 2100, trending: true, category: "Tecnologia",
  },
  {
    title: "Ethereum vai superar US$ 5.000 em 2024?",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    yesPrice: 0.71, noPrice: 0.29, volume: 980000, expiresAt: "8d", traders: 635, trending: true, category: "Cripto",
  },
  {
    title: "Haverá recessão nos EUA em 2024?",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
    yesPrice: 0.29, noPrice: 0.71, volume: 450000, expiresAt: "30d", traders: 3200, trending: false, category: "Economia",
  },
  {
    title: "Apple vai lançar um novo produto wearable em 2024?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/256px-Apple_logo_black.svg.png",
    yesPrice: 0.82, noPrice: 0.18, volume: 120000, expiresAt: "45d", traders: 410, trending: true, category: "Tecnologia",
  },
  {
    title: "Lula será reeleito nas próximas eleições?",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
    yesPrice: 0.54, noPrice: 0.46, volume: 760000, expiresAt: "180d", traders: 5400, trending: true, category: "Política",
  },
  {
    title: "Temperatura em SP passará de 40°C este verão?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Thermometer_lo.svg/160px-Thermometer_lo.svg.png",
    yesPrice: 0.48, noPrice: 0.52, volume: 55000, expiresAt: "45d", traders: 310, trending: false, category: "Meio Ambiente",
  },
  {
    title: "Grand Theft Auto VI será lançado em 2025?",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/GTAVI_logo.jpg/320px-GTAVI_logo.jpg",
    yesPrice: 0.61, noPrice: 0.39, volume: 890000, expiresAt: "90d", traders: 7800, trending: true, category: "Jogos",
  },
  {
    title: "Flamengo será campeão da Libertadores 2024?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flamengo_braz_logo.svg/160px-Flamengo_braz_logo.svg.png",
    yesPrice: 0.45, noPrice: 0.55, volume: 420000, expiresAt: "20d", traders: 3100, trending: true, category: "Esportes",
  },
];

export default function Home() {
  const [category, setCategory] = useState("Todos");

  const filtered =
    category === "Todos"
      ? ALL_MARKETS
      : ALL_MARKETS.filter((m) => m.category === category);

  return (
    <div className="bg-background min-h-screen text-gray-900">
      <Header />
      <MarketFilters onFilter={setCategory} />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* MARKET GRID — explicit .markets-grid class to ensure 4 cols in production */}
        <section className="markets-grid">
          {filtered.map((market, i) => (
            <MarketCard key={i} {...market} />
          ))}
        </section>

        {filtered.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <p className="text-lg">Nenhum mercado nessa categoria ainda.</p>
          </div>
        )}
      </main>

      <Footer />
      <FloatingBot />
    </div>
  );
}
