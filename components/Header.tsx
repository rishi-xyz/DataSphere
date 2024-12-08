"use client"
import { ConnectKitButton } from "connectkit"
import React from 'react'

export const Header = () => {
    return (
        <header className='sticky z-40 top-0 bg-zinc-900/50 backdrop-blur-sm'>
            <div className='container' >
                <div className='flex justify-between items-center h-20'>
                    <h2 className='text-3xl md:text-4xl md:leading-none font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,#d946ef,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center ml-1 md:ml-5'>
                        DataSphere
                    </h2>
                    <div className='mr-5'>
                        <div className='absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500/30 rounded-xl'></div>
                        <ConnectKitButton />
                    </div>
                </div>
            </div>
        </header>
    )
}