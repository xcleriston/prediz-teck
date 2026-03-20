import { Header } from "@/components/layout/Header";
import { db } from "@/lib/db";
import { markets } from "@/drizzle/schema";
import { Plus, Settings, BarChart3, Users } from "lucide-react";

export default async function AdminPage() {
  const allMarkets = await db.select().from(markets);

  const stats = [
    { label: "Total de Mercados", value: allMarkets.length, icon: BarChart3 },
    { label: "Usuários Ativos", value: "1,240", icon: Users },
    { label: "Volume Total", value: "$45.2M", icon: BarChart3 },
  ];

  return (
    <div className="bg-background min-h-screen text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-fredoka font-bold">Painel Administrativo</h1>
            <p className="text-gray-400 text-sm mt-1">Gerencie mercados, usuários e configurações globais</p>
          </div>
          <button className="bg-primary text-black px-6 py-2.5 rounded-xl font-black text-sm flex items-center gap-2 hover:brightness-110 transition">
            <Plus size={18} />
            CRIAR NOVO MERCADO
          </button>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {stats.map((stat) => (
             <div key={stat.label} className="bg-[#151c2c] border border-[#242d40] p-6 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold font-fredoka text-white">{stat.value}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-xl">
                  <stat.icon size={24} className="text-primary" />
                </div>
             </div>
          ))}
        </div>

        {/* MARKET LIST */}
        <div className="bg-[#151c2c] border border-[#242d40] rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-[#242d40] flex justify-between items-center">
            <h2 className="font-fredoka font-bold">Mercados Recentes</h2>
            <button className="text-xs text-primary font-bold hover:underline">Ver Todos</button>
          </div>
          
          <table className="w-full text-left text-sm">
            <thead className="text-gray-500 text-[10px] uppercase font-black bg-[#0d1421]/50 border-b border-[#242d40]">
              <tr>
                <th className="px-6 py-4">Título</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Liquidez (b)</th>
                <th className="px-6 py-4">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242d40]">
              {allMarkets.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-gray-500 italic">
                    Nenhum mercado cadastrado ainda.
                  </td>
                </tr>
              ) : (
                allMarkets.map((market) => (
                  <tr key={market.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 font-bold">{market.title}</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-green-500/10 text-green-500 rounded-md text-[10px] font-black border border-green-500/20">
                        {market.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{market.liquidity_b}</td>
                    <td className="px-6 py-4">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition">
                        <Settings size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
