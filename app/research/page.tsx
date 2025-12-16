"use client";

import { Microscope, Globe, Cpu, Zap, Trophy } from "lucide-react";

export default function ResearchPage() {
    return (
        <div className="page-shell">
            <div className="section-shell space-y-14">
                <div className="section-header gap-4">
                    <span className="eyebrow">Research</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Research & Innovation</h1>
                    <p className="text-xl text-muted-foreground max-w-[780px]">
                        Invested in long-horizon research to push the frontier from concept to silicon.
                    </p>
                </div>

                <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-14 items-start max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            GNIX Semicon invests deeply in long-horizon research across AI-hardware co-design, energy-efficient compute, photonics, and sovereign semiconductor systems.
                            We believe that true innovation happens at the intersection of disciplines.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "AI-Hardware Co-Design", icon: <Cpu className="text-primary" /> },
                                { title: "Energy-Efficient Compute", icon: <Zap className="text-primary" /> },
                                { title: "Photonics & Optical Switching", icon: <Globe className="text-primary" /> },
                                { title: "Edge-First Architectures", icon: <Microscope className="text-primary" /> },
                                { title: "Sovereign Semiconductor Systems", icon: <Trophy className="text-primary" /> }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-white/5 hover:border-primary/40 hover:bg-white/5 transition-colors">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="font-semibold">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        {/* Visual Representation */}
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-20" />
                        <div className="relative h-full min-h-[400px] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 flex flex-col justify-center gap-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold">Collaborative Innovation</h3>
                                <p className="text-muted-foreground">
                                    We collaborate with academic institutions, national labs, and industry partners.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full">
                                <div className="h-24 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                    <span className="text-sm font-mono text-muted-foreground">National Labs</span>
                                </div>
                                <div className="h-24 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                    <span className="text-sm font-mono text-muted-foreground">Academia</span>
                                </div>
                                <div className="h-24 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                    <span className="text-sm font-mono text-muted-foreground">Industry</span>
                                </div>
                                <div className="h-24 bg-white/5 rounded-lg flex items-center justify-center border border-white/5">
                                    <span className="text-sm font-mono text-muted-foreground">Govt</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
