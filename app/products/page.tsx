"use client";

import { Cpu, Share2, Box } from "lucide-react";

export default function ProductsPage() {
    const products = [
        {
            title: "GNIX Edge Series",
            icon: <Cpu className="h-6 w-6" />,
            description: "AI processors for real-time voice, vision, and perception at the edge.",
            targets: ["Voice AI systems", "Robotics", "Smart devices", "Industrial automation"],
            tag: "Edge Compute"
        },
        {
            title: "GNIX Photonic Fabric",
            icon: <Share2 className="h-6 w-6" />,
            description: "High-speed optical interconnect platforms for AI clusters.",
            targets: ["AI data centers", "Distributed AI systems", "High-performance inference fabrics"],
            tag: "Interconnect"
        },
        {
            title: "Reference Systems",
            icon: <Box className="h-6 w-6" />,
            description: "Validated platforms combining silicon, software, and systems.",
            targets: ["Rapid deployment", "OEM integration", "National-scale infrastructure"],
            tag: "Systems"
        }
    ];

    return (
        <div className="page-shell">
            <div className="section-shell space-y-12">
                <div className="section-header gap-4">
                    <span className="eyebrow">Products</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">High-performance silicon and systems</h1>
                    <p className="text-xl text-muted-foreground max-w-[780px]">
                        Purpose-built platforms for the intelligent edge, accelerated fabrics, and deployable reference systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {products.map((product, i) => (
                        <div key={i} className="group relative bg-card border border-white/10 rounded-xl overflow-hidden p-8 hover:border-primary/50 transition-colors flex flex-col gap-6 h-full">
                            <div className="flex items-center justify-between gap-3">
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    {product.icon}
                                </div>
                                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground font-semibold">
                                    {product.tag}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                                <p className="text-muted-foreground">
                                    {product.description}
                                </p>
                            </div>
                            <div className="space-y-2 text-sm text-foreground/80">
                                <p className="font-semibold text-primary">Built for:</p>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                    {product.targets.map((target) => (
                                        <li key={target}>{target}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
