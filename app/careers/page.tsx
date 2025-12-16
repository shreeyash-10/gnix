import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CareersPage() {
    return (
        <div className="page-shell">
            <div className="section-shell space-y-14">
                <div className="section-header mx-auto items-center text-center gap-4">
                    <span className="eyebrow">Careers</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Careers at GNIX</h1>
                    <p className="text-xl text-muted-foreground max-w-[720px]">
                        We are building systems that will exist for decades. If you care about hard problems, deep technology, and long-term impact, GNIX is where you belong.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 max-w-6xl mx-auto">
                    {/* Culture / Why Join */}
                    <div className="bg-card border border-white/10 rounded-xl p-8 flex flex-col gap-6">
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="text-2xl font-bold">Why Join Us?</h3>
                            <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">Build the stack</span>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Work on sovereign, national-scale problems",
                                "Collaborate with world-class architects and researchers",
                                "Ownership of full-stack engineering",
                                "Competitive equity and compensation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                    <CheckCircle2 className="text-primary h-5 w-5 mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-3 pt-2">
                            <Button size="lg">Start a conversation</Button>
                            <Button size="lg" variant="outline">Refer someone</Button>
                        </div>
                    </div>

                    {/* Open Roles */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold">Open Roles</h3>
                            <span className="text-sm text-muted-foreground">Noida · Hybrid</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                "Silicon Architect - AI Acceleration",
                                "Photonics Design Engineer",
                                "Embedded Systems Lead",
                                "AI Systems Engineer",
                                "Research Scientist - Deep Learning Hardware"
                            ].map((role, i) => (
                                <div key={i} className="group flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5 hover:border-primary/50 hover:bg-white/10 transition-all cursor-pointer">
                                    <span className="font-semibold">{role}</span>
                                    <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-2" size="lg">View All Positions</Button>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        "Hardware + software co-design culture",
                        "Long-term ownership of products",
                        "Access to global research partners",
                        "Transparent, fast decision cycles"
                    ].map((item, i) => (
                        <div key={i} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground leading-relaxed">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
