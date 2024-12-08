import React from 'react'
import { Button } from '../ui/button';
import { Plus, HomeIcon, WalletCards, FilesIcon, ShareIcon, ContactIcon } from 'lucide-react';

export const DashboardSidebar = () => {
    return (
        <div className='sticky left-0 bottom-0 flex flex-col border-r-2 border-t-2 rounded-2xl border-fuchsia-500/20 h-screen mr-4 p-8 gap-y-9'>
            <div className='items-center justify-center'>
                <Button variant={"fushia"} size={"lg"} className='p-5 gap-3 transition duration-300 ease-in-out hover:bg-fuchsia-600 hover:text-white md:inline-flex z-10'>
                    <div className='absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 rounded-xl' />
                    <Plus />
                    <span >New</span>
                </Button>
            </div>
            <div className='flex flex-col items-start justify-center gap-y-5'>
                <Button variant={"fushia"} size={"lg"}  className='w-full rounded-md justify-start tracking-normal hover:bg-fuchsia-400/30 hover:border-2 hover:border-fuchsia-500 bg-fuchsia-500/70 gap-3 items-center'>
                    <HomeIcon />
                    Dashboard
                </Button>
                <Button variant={"fushia"} size={"lg"} className='w-full rounded-md items-start justify-start tracking-normal hover:bg-fuchsia-400/30 hover:border-2 hover:border-fuchsia-500 bg-fuchsia-500/70' >
                    <WalletCards />
                    My WorkSpaces
                </Button>
                <Button variant={"fushia"} size={"lg"} className='w-full rounded-md items-start justify-start tracking-normal hover:bg-fuchsia-400/30 hover:border-2 hover:border-fuchsia-500 bg-fuchsia-500/70' >
                    <FilesIcon />
                    My Files
                </Button>
                <Button variant={"fushia"} size={"lg"} className='w-full rounded-md items-start justify-start tracking-normal hover:bg-fuchsia-400/30 hover:border-2 hover:border-fuchsia-500 bg-fuchsia-500/70' >
                    <ContactIcon />
                    Shared With Me
                </Button>
                <Button variant={"fushia"} size={"lg"} className='w-full rounded-md items-start justify-start tracking-normal hover:bg-fuchsia-400/30 hover:border-2 hover:border-fuchsia-500 bg-fuchsia-500/70' >
                    <ShareIcon />
                    Share Access
                </Button>
            </div>
        </div>
    )
};