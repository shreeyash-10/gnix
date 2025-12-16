"use client";

import { HeroSection } from "@/components/ui/hero-section";
import { FeatureCard } from "@/components/ui/feature-card";
import { Cpu, Zap, Layers, Network, Server, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* What We Build Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="section-shell relative z-10">
          <div className="section-header mx-auto items-center text-center mb-16 gap-4">
            <span className="eyebrow">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">What We Build</h2>
            <p className="text-muted-foreground text-lg max-w-[620px] mx-auto leading-relaxed">
              Foundational technologies for the next era of computing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              title="AI & Edge Silicon"
              icon={<Cpu className="h-6 w-6" />}
              description="Custom processors and accelerators optimized for voice AI, perception, and real-time reasoning at the edge — low latency, low power, production-ready."
            />
            <FeatureCard
              title="Photonics & Interconnect"
              icon={<Network className="h-6 w-6" />}
              description="Advanced silicon photonics and optical switching architectures enabling massive bandwidth, lower energy per bit, and next-gen AI infrastructure."
            />
            <FeatureCard
              title="Systems & Architecture"
              icon={<Layers className="h-6 w-6" />}
              description="From chip to board to system — we design deployable reference platforms for AI factories, edge clusters, and intelligent machines."
            />
          </div>
        </div>
      </section>

      {/* Why GNIX Section */}
      <section className="py-24 bg-muted/20">
        <div className="section-shell">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="section-header gap-4">
                <span className="eyebrow">Why GNIX</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Architecture-first thinking</h2>
                <p className="text-lg text-muted-foreground">
                  Designed in India, built for global scale. Every layer from silicon to systems is workload driven and manufacturable.
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "Architecture-first, workload-driven silicon",
                    "Deep integration across AI models, hardware, and systems",
                    "Focus on cost, efficiency, and manufacturability",
                    "Programs built for rapid productization"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-full min-h-[360px] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center">
                {/* Abstract Visual */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(118,185,0,0.1),transparent_70%)]" />
                <div className="grid grid-cols-4 gap-4 opacity-50">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="h-4 w-4 bg-primary/40 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-background">
        <div className="section-shell">
          <div className="section-header mx-auto items-center text-center mb-16 gap-4">
            <span className="eyebrow">Applications</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built to power the physical world</h2>
            <p className="text-muted-foreground text-lg max-w-[620px] leading-relaxed">
              From sovereign data centers to autonomous systems, GNIX silicon is tuned for real-world deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Voice & Multimodal AI", icon: <Zap />, copy: "Speech, copilots, ambient compute." },
              { title: "Robotics & Autonomous", icon: <Server />, copy: "Deterministic, safety-first stacks." },
              { title: "AI Data Centers", icon: <Network />, copy: "Disaggregated fabrics and acceleration." },
              { title: "Smart Infrastructure", icon: <Globe />, copy: "Edge intelligence for cities and grids." }
            ].map((app, i) => (
              <div key={i} className="p-6 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center text-center gap-3 h-full">
                <div className="p-3 rounded-full bg-primary/10 text-primary shadow-[0_0_10px_-4px_var(--primary)]">
                  {app.icon}
                </div>
                <h3 className="font-semibold text-lg">{app.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{app.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="section-shell relative z-10 text-center">
          <div className="section-header mx-auto items-center text-center gap-5">
            <span className="eyebrow">Vision</span>
            <h2 className="text-4xl md:text-6xl font-bold max-w-[840px] mx-auto leading-tight">
              &ldquo;To create a sovereign, globally competitive semiconductor stack.&rdquo;
            </h2>
            <p className="text-xl text-muted-foreground max-w-[720px] mx-auto">
              Powering the next decade of intelligent systems — efficiently, securely, and at scale.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
