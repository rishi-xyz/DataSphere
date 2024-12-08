"use client";
import { MarketingFeaturesSection } from "@/components/MarketingPage/MarketingFeatures";
import { MarketingFooter } from "@/components/MarketingPage/MarketingFooter";
import { Header } from "@/components/Header";
import { MarketingHero } from "@/components/MarketingPage/MarketingHero";

export default function Home() {
  return (
    <>
      <Header />
      <MarketingHero />
      <MarketingFeaturesSection />
      <MarketingFooter />
    </>
  );
}
