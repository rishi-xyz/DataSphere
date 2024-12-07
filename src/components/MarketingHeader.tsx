import { MenuIcon } from 'lucide-react'
import {Button} from "@/components/ui/button"
import React from 'react'

export const MarketingHeader = () => {
    return (
        <header className='sticky top-0 bg-zinc-900/50 backdrop-blur-lg'>
            <div className='container' >
                <div className='flex justify-between items-center h-24'>
                    <h2 className='text-xl md:text-4xl md:leading-none font-semibold tracking-tighter  text-[radial-gradient(100%_100%_at_top_left,#4a208a,white,rgb(74,32,138,.5))] text-center'>
                        DataSphere
                    </h2>
                    <div className='flex'>
                        <Button>Get Started</Button>
                        <MenuIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}