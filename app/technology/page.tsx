"use client";

import { Cpu, Zap, Network } from "lucide-react";

export default function TechnologyPage() {
    return (
        <div className="page-shell">
            <div className="section-shell space-y-16">
                {/* Header */}
                <div className="section-header gap-4">
                    <span className="eyebrow">Technology</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Architecture-first semiconductor design</h1>
                    <p className="text-xl text-muted-foreground max-w-[780px]">
                        We start with workloads, not wafers. Each layer is co-designed for deterministic, efficient AI.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-20 max-w-6xl mx-auto w-full">
                    {/* AI Compute */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="section-header gap-5">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Cpu className="text-primary" /> AI Compute
                            </h2>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Custom AI accelerators for speech, vision, and multimodal inference
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Optimized memory hierarchies for streaming workloads
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Hardware-aware AI pipelines
                                </li>
                            </ul>
                        </div>
                        <div className="h-[300px] w-full bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                            {/* Simplified chip visual */}
                            <div className="absolute inset-[20%] border border-primary/30 rounded flex items-center justify-center">
                                <div className="h-12 w-12 bg-primary/20 rounded-full animate-pulse" />
                            </div>
                        </div>
                    </section>

                    {/* Edge Intelligence */}
                    <section className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="order-2 md:order-1 h-[300px] w-full bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                            {/* Grid visual */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                        </div>
                        <div className="order-1 md:order-2 section-header gap-5">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Zap className="text-primary" /> Edge Intelligence
                            </h2>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Ultra-low-latency compute
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Deterministic performance
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Designed for harsh, real-world environments
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Photonics */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="section-header gap-5">
                            <h2 className="text-3xl font-bold flex items-center gap-3">
                                <Network className="text-primary" /> Photonics & Interconnect
                            </h2>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Silicon photonics for AI fabrics
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Optical switching & high-bandwidth links
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    Energy-efficient data movement at scale
                                </li>
                            </ul>
                        </div>
                        <div className="h-[300px] w-full bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
