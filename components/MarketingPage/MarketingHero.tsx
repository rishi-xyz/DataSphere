"use client"
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import DataSphere from "@/public/dataspherep.png";
import Node1 from "@/assets/node1.png";
import Node2 from "@/assets/node2.png";
import { Hexagon } from "../Hexagon";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export const MarketingHero = () => {
    const dataSphereiconRef = useRef(null);
    const node1Ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: dataSphereiconRef,
        offset: ["start end", "end start"]
    });

    const { scrollYProgress: Node1ScrollYProgress } = useScroll({
        target: node1Ref,
        offset: ["start end", "end start"]
    })

    const datasphereRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
    const node1Rotate = useTransform(Node1ScrollYProgress, [0, 1], [100, -45])

    return (
        <section className="md:py-52 py-24 overflow-x-clip">
            <div className="container">
                <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider ">
                    Intoducing Datasphere
                </p>
                <h1 className="font-black text-5xl md:text-6xl text-center mt-4 max-w-3xl mx-auto">
                    The Future of Storage is Here
                </h1>
                <p className="text-center text-xl mt-6 md:text-2xl text-zinc-500 max-w-xl mx-auto font-semibold">
                    Secure, Decentralized, and Infinite – Welcome to DataSphere.
                </p>
                <div className="flex justify-center mt-10">
                    <Link href={"/dashboard"}>
                        <Button variant={"fushia"} size={"lg"} className='transition duration-300 ease-in-out hover:bg-fuchsia-600  hidden md:inline-flex z-10'>
                            <div className='absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 rounded-xl'></div>
                            <span className='leading-5'>Start Now</span>
                        </Button>
                    </Link>
                </div>
                <div className="flex justify-center mt-24 relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon size={700} className="size-[700px]" reverse={true} />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon size={900} className="size-[900px]" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon size={1100} className="size-[1100px]" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon size={1800}  className="size-[1800px]" reverse={true} />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="bg-zinc-900 size-[250px] inline-flex items-center justify-center  relative left-[550px] -top-[620px] rounded-full p-2">
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    ease: "linear",
                                    duration: 10,
                                    repeat: Infinity
                                }}
                                className="absolute inset-0 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 rounded-full border-[6px] border-transparent border-l-fuchsia-500/90"
                            />
                            <motion.div
                                style={{
                                    rotate: node1Rotate
                                }}
                                ref={node1Ref}
                            >
                                <Image src={Node1} alt="Node1 image size-[140px]" />
                            </motion.div>

                        </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div
                            className="bg-zinc-900 size-[240px] inline-flex items-center justify-center rounded-full relative left-[100px] top-[395px]">
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    ease: "linear",
                                    duration: 10,
                                    repeat: Infinity
                                }}
                                className="absolute inset-0 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 rounded-full border-[6px] border-transparent border-t-fuchsia-500/90"
                            />
                            <motion.div
                                animate={{
                                    rotate: -360,
                                }}
                                transition={{
                                    ease: "linear",
                                    duration: 20,
                                    repeat: Infinity
                                }}
                            >
                                <Image src={Node2} alt="Node2 image size-[140px]" />
                            </motion.div>
                        </div>
                    </div>
                    <div
                        className="inline-flex flex-col items-center"
                    >
                        <motion.div
                            ref={dataSphereiconRef}
                            style={{
                                rotate: datasphereRotate
                            }}
                        >
                            <Image
                                src={DataSphere}
                                alt="DataSphere logo"
                                className="w-[500px] z-10"
                            />
                        </motion.div>

                        <Image
                            src={DataSphere}
                            alt="shadow of datasphere logo"
                            className="absolute w-[calc(100%+100px)] md:w-[calc(35%+100px)] max-w-none -z-10 -translate-y-1/2  top-40 md:top-[249px] saturate-[10%] brightness-[4%] hue-rotate-[240deg]"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-96 md:mt-80 gap-4">
                    <div className="h-12 w-5 outline outline-[6px] pt-2 justify-center outline-fuchsia-500/10 inline-flex rounded-full mb-5">
                        <motion.div
                            animate={{
                                translateY:12,
                                opacity:0.2
                            }}
                            transition={{
                                duration:4,
                                ease:"linear",
                                repeat:Infinity,
                                repeatType:"loop"
                            }}
                            className="h-3 w-1 bg-fuchsia-500 rounded-full" 
                        />
                    </div>
                    <p className="uppercase text-zinc-500 font-extrabold tracking-wider">Scroll to Learn More</p>
                </div>
            </div>
        </section>
    );
};
