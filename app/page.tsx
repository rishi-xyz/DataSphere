"use client";
import { MarketingFeaturesSection } from "@/components/MarketingPage/MarketingFeatures";
import { MarketingFooter } from "@/components/MarketingPage/MarketingFooter";
import { MarketingHeader } from "@/components/MarketingPage/MarketingHeader";
import { MarketingHero } from "@/components/MarketingPage/MarketingHero";

export default function Home() {
  return (
    <>
      <MarketingHeader />
      <MarketingHero />
      <MarketingFeaturesSection />
      <MarketingFooter />
    </>
  );
}
