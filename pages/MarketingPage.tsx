import React from 'react'
import { MarketingHeader } from '../components/MarketingHeader'
import { MarketingHero } from '@/components/MarketingHero'
import { MarketingFeaturesSection } from '@/components/MarketingFeatures'
import { MarketingFooter } from '@/components/MarketingFooter'

export const MarketingPage = () => {
  return (
    <>
      <MarketingHeader />
      <MarketingHero />
      <MarketingFeaturesSection />
      <MarketingFooter />
    </>
  )
}