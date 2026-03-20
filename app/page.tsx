import { Header } from "@/components/layout/Header";
import { MarketCard } from "@/components/market/MarketCard";
import { MarketFilters } from "@/components/market/MarketFilters";
import { FloatingBot } from "@/components/layout/FloatingBot";
import { Footer } from "@/components/layout/Footer";

// Dummy data for initial visual check
const MOCK_MARKETS = [
  {
    title: "O Bitcoin atingirá US$ 100.000 antes de 2025?",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    yesPrice: 0.65,
    noPrice: 0.35,
    volume: 1254000,
    expiresAt: "12d",
    traders: 450,
  },
  {
    title: "O Brasil vencerá a Copa América 2024?",
    image: "https://flagcdn.com/w160/br.png",
    yesPrice: 0.42,
    noPrice: 0.58,
    volume: 540200,
    expiresAt: "5d",
    traders: 890,
  },
  {
    title: "Elon Musk deixará de ser CEO do X este ano?",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/X_logo.png",
    yesPrice: 0.15,
    noPrice: 0.85,
    volume: 230000,
    expiresAt: "25d",
    traders: 1200,
  },
  {
    title: "Ouro atingirá nova máxima histórica em Outubro?",
    image: "https://cdn-icons-png.flaticon.com/512/2932/2932608.png",
    yesPrice: 0.55,
    noPrice: 0.45,
    volume: 89000,
    expiresAt: "3h",
    traders: 156,
  },
];

export default function Dashboard() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-primary/30">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        
        {/* HERO SECTION */}
        <section className="mb-12">
           <h1 className="text-4xl font-fredoka font-bold mb-2">
             Mergulhe no Futuro do <span className="text-primary italic">Trading Social</span>
           </h1>
           <p className="text-gray-400 text-sm max-w-[600px] font-nunito">
             Participe de discussões, faça suas previsões e negocie com base na sabedoria da multidão. 
             A maior plataforma de mercados preditivos do mundo.
           </p>
        </section>

        <MarketFilters />

        {/* MARKET GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {Array.from({ length: 4 }).map((_, i) => (
            MOCK_MARKETS.map((market, j) => (
              <MarketCard
                key={`${i}-${j}`}
                {...market}
              />
            ))
          ))}
        </section>
      </main>

      <Footer />
      <FloatingBot />
    </div>
  );
}
