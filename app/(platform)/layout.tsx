import { DashboardSidebar } from '@/components/Dashboard/DashboardSidebar'
import { Header } from '@/components/Header'
import React from 'react'

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex flex-1 overflow-hidden'>
        <DashboardSidebar />
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default PlatformLayout