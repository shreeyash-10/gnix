"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-background pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full opacity-30 animate-pulse" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest">
                        Next-Gen Semiconductor Architecture
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"
                >
                    Building India’s Intelligence Layer <br className="hidden md:block" />
                    <span className="text-primary glow-text">for the Physical World</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-[800px] text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
                >
                    GNIX Semicon designs next-generation AI compute, edge silicon, and high-speed interconnect systems.
                    Focused on energy-efficient intelligence from edge devices to data centers.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button size="lg" className="text-base font-semibold shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-shadow duration-300">
                        Explore Technology
                    </Button>
                    <Button size="lg" variant="outline" className="text-base font-semibold backdrop-blur-sm">
                        View Products
                    </Button>
                </motion.div>

            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
