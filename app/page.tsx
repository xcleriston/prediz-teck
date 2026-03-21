import { ModernHeader } from "@/components/layout/ModernHeader";
import { ModernFooter } from "@/components/layout/ModernFooter";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { DashboardPreviewSection } from "@/components/landing/DashboardPreviewSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CtaSection } from "@/components/landing/CtaSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-[#A020F0]/30 selection:text-white">
      <ModernHeader />
      
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DashboardPreviewSection />
        <PricingSection />
        <CtaSection />
      </main>

      <ModernFooter />
    </div>
  );
}
