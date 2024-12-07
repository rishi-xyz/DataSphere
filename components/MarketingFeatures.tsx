"use client"
import { Grid, Layout, ShieldCheck, Shuffle, Send, Scan, DivideCircle, UserCheck, LayoutDashboard, Leaf, Smartphone, RefreshCcw, Share2, Database, Cloud } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const features = [
    {
        title: "Decentralized Storage",
        description: "Store your data securely on blockchain-backed servers with no central point of failure.",
        icon: <Cloud />
    },
    {
        title: "End-to-End Encryption",
        description: "Ensure your files are safe and accessible only to you with state-of-the-art encryption.",
        icon: <ShieldCheck />
    },
    {
        title: "Unlimited Storage Capacity",
        description: "Expand your storage space as much as you need—no more worrying about limits.",
        icon: <Database />
    },
    {
        title: "Easy File Sharing",
        description: "Share files seamlessly with others using unique, secure links.",
        icon: <Share2 />
    },
    {
        title: "Version Control",
        description: "Access previous versions of your files to track and revert changes effortlessly.",
        icon: <RefreshCcw />
    },
    {
        title: "Access Anywhere, Anytime",
        description: "Securely access your data from any device, wherever you are.",
        icon: <Smartphone />
    },
    {
        title: "Energy-Efficient Protocol",
        description: "Leverage eco-friendly blockchain technology to minimize your digital footprint.",
        icon: <Leaf />
    },
    {
        title: "User-Friendly Dashboard",
        description: "Navigate your storage effortlessly with an intuitive and elegant interface.",
        icon: <LayoutDashboard />
    },
];

const FeatureItem = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
    const offsetx = useMotionValue(-100);
    const offsety = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 1100px at ${offsetx}px ${offsety}0px, black, transparent)`
    const border = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current.getBoundingClientRect();
            offsetx.set(e.x - borderRect.x);
            offsety.set(e.y - borderRect.y);
        };
        window.addEventListener("mousemove", updateMousePosition);
        return ()=>{
            window.removeEventListener("mousemove",updateMousePosition);
        }
    }, [offsetx, offsety]);
    return (<div className="border border-fuchsia-500/20 px-5 py-10 text-center rounded-xl flex-1 relative bg-zinc-900/10 hover:bg-black hover:scale-105 transition-transform duration-300">
        <motion.div className="absolute inset-0 border-4 border-fuchsia-500 rounded-xl" style={{
            WebkitMaskImage: maskImage,
            maskImage: maskImage
        }}
        ref={border}
        >
        </motion.div>
        <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg transition-transform duration-300 hover:scale-125">
            {icon}
        </div>
        <h3 className="mt-6 font-bold">{title}</h3>
        <p className="mt-2 text-white/70">{description}</p>
    </div>
    );
}

export const MarketingFeaturesSection = () => {
    return (
        <section className="bg-transparent text-white py-[72px] m-2" id="features">
            <div className="container">
                <h2 className="text-center mb-6 mt-3 md:leading-none font-black text-5xl md:text-6xl max-w-3xl mx-auto">
                    Decentralized Payment & Unified Experience
                </h2>
                <p className="text-lg text-white/70 mt-5 text-center md:text-xl max-w-xl mx-auto uppercase font-extrabold text-zinc-500 tracking-wider">
                    Everything You Need for Seamless Decentralized finance Experience
                </p>
                <div className="mt-16 flex flex-col gap-4">
                    <div className="flex flex-row gap-4" >
                        {features.slice(0, 3).map(({ title, description }) => (
                            <div key={title}>
                                <FeatureItem title={title} description={description} icon={<Grid />} />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        {features.slice(3, 6).map(({ title, description, icon }) => (
                            <FeatureItem key={title} title={title} description={description} icon={icon} />
                        ))}
                    </div>
                    <div className="flex flex-row gap-4">
                        {features.slice(6).map(({ title, description, icon }) => (
                            <FeatureItem key={title} title={title} description={description} icon={icon} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};