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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <WelcomeBanner />
        
        <MarketFilters />
        
        <TrendingCarousel />
        
        <FeaturedBundles />
        
        {/* Create Market Banner */}
        <Link href="/create" className="block rounded-xl border border-dashed border-[#ADFF2F]/40 p-4 mb-6 transition-all hover:border-[#ADFF2F]/70 hover:shadow-lg bg-[#151c2c]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ADFF2F]/15 flex items-center justify-center flex-shrink-0">
              <Plus className="w-5 h-5 text-[#ADFF2F]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm text-white">Crie seu próprio mercado</h3>
              <p className="text-xs mt-0.5 text-gray-400">Proponha uma pergunta e deixe a comunidade decidir. Qualquer um pode criar!</p>
            </div>
            <div className="flex items-center gap-1 text-[#ADFF2F]">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </Link>
        
        <MarketGrid />
      </main>
    </div>
  );
}
