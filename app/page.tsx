import React from "react";
import Link from "next/link";
import { Plus, Sparkles } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { TrendingCarousel, MarketFilters } from "@/components/dashboard/MarketFiltersAndTrending";
import { FeaturedBundles } from "@/components/dashboard/FeaturedBundles";
import { MarketGrid } from "@/components/dashboard/MarketGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1421] text-white">
      <DashboardHeader />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <WelcomeBanner />
        
        <MarketFilters />
        
        <TrendingCarousel />
        
        <FeaturedBundles />
        
        {/* Create Market Banner */}
        <Link href="/create" className="block rounded-2xl border border-dashed border-[#ADFF2F]/40 p-5 mb-8 transition-all hover:border-[#ADFF2F]/70 hover:shadow-lg hover:shadow-[#ADFF2F]/10 bg-[#0f1729]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#ADFF2F]/15 flex items-center justify-center flex-shrink-0">
              <Plus className="w-5 h-5 text-[#ADFF2F]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm sm:text-base text-white">Crie seu próprio mercado</h3>
              <p className="text-xs sm:text-sm mt-0.5 text-gray-400">Proponha uma pergunta e deixe a comunidade decidir. Qualquer um pode criar!</p>
            </div>
            <div className="flex items-center gap-1.5 text-[#ADFF2F] flex-shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </Link>
        
        <MarketGrid />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1f2937] bg-[#0d1421] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Produto</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Mercados</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Criar Mercado</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Comunidade</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Discord</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Twitter</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Fórum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Legal</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Termos</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Mais</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Blog</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Docs</a></li>
                <li><a href="#" className="hover:text-[#ADFF2F] transition">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#1f2937] pt-6">
            <p className="text-xs text-gray-500 text-center">© 2026 Prediz.tech. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
