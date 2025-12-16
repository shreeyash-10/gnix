import { Button } from "@/components/ui/button";

export default function AboutPage() {
    return (
        <div className="page-shell">
            <div className="section-shell space-y-16">
                <div className="section-header mx-auto items-center text-center gap-4">
                    <span className="eyebrow">About</span>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">About GNIX Semicon</h1>
                    <p className="text-2xl text-muted-foreground leading-relaxed">
                        &ldquo;Intelligence is scaling faster than the hardware that runs it.&rdquo;
                    </p>
                </div>

                <div className="max-w-4xl mx-auto rounded-xl border border-white/10 bg-white/5 p-6 text-center text-lg text-muted-foreground leading-relaxed">
                    Founded in 2016 as GNIX Technologies, GNIX Semicon builds AI-first silicon and systems with sustainability at their core, while investing in skill development for emerging technologies to grow the talent that will power resilient, energy-aware infrastructure.
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="section-header gap-5">
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our mission is to build foundational semiconductor technologies that enable the next wave of AI — responsibly, efficiently, and independently.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We believe the future belongs to companies that own the full stack: from algorithms to architecture to atoms.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <Button variant="default">Read Our Manifesto</Button>
                            <Button variant="outline">Contact Team</Button>
                        </div>
                    </div>
                    <div className="h-full w-full bg-gradient-to-br from-primary/20 via-black to-black rounded-2xl border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(118,185,0,0.12),transparent_50%)]" />
                        <div className="grid grid-cols-2 divide-x divide-white/10">
                            <div className="p-8">
                                <span className="text-primary font-mono text-sm block mb-2">FOUNDED</span>
                                <p className="text-4xl font-bold">2016</p>
                                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                    Started as GNIX Technologies; built in Bangalore with a global hardware network.
                                </p>
                            </div>
                            <div className="p-8">
                                <span className="text-primary font-mono text-sm block mb-2">FOCUS</span>
                                <p className="text-3xl font-bold">Full Stack</p>
                                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                    Architecture-first silicon, photonics, and systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Sovereign by Design", copy: "Local R&D with globally manufacturable platforms." },
                        { title: "Product-Centric Research", copy: "Applied research that ships, not just papers." },
                        { title: "Long-Term Ownership", copy: "We build systems meant to outlast AI cycles." }
                    ].map((item, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
                            <span className="text-primary text-xs font-semibold tracking-wide">{item.title}</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.copy}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
