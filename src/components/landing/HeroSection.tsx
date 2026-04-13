import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Revenue", value: "$42.3M", source: "p.12", delay: 800 },
  { label: "EBITDA", value: "$8.7M", source: "p.18", delay: 1200 },
  { label: "Gross Margin", value: "61.2%", source: "p.14", delay: 1600 },
  { label: "Net Debt", value: "$12.1M", source: "p.24", delay: 2000 },
  { label: "CapEx", value: "$3.2M", source: "p.29", delay: 2200 },
];

const flags = [
  { label: "Customer concentration >30%", type: "red", delay: 2600 },
  { label: "Significant addbacks (~40% EBITDA)", type: "yellow", delay: 3000 },
  { label: "Revenue CAGR: 12.4%", type: "green", delay: 3400 },
];

const evidence = [
  { text: '"Top 3 customers accounted for approximately 34% of..."', page: "p.31" },
];

export default function HeroSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1400),
      setTimeout(() => setStep(4), 2400),
      setTimeout(() => setStep(5), 3200),
      setTimeout(() => setStep(6), 4000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(192_70%_51%/0.04)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(220_80%_40%/0.03)_0%,transparent_50%)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            Enterprise-Grade Deal Intelligence
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Turn CIMs into structured investment intelligence{" "}
            <span className="text-gradient">in minutes.</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Extract key metrics, compute derived ratios, and surface structural risks — before committing time to diligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="glow-primary-strong bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              Upload a Sample CIM
            </Button>
          </div>
        </div>

        {/* Right — animated product preview */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
            {/* Header bar */}
            <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-5 py-3">
              <FileText className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Valedex Signal — CIM Analysis
              </span>
              <span className={`ml-auto h-2 w-2 rounded-full transition-colors duration-500 ${step >= 1 ? "bg-primary animate-pulse-glow" : "bg-muted-foreground/30"}`} />
            </div>

            <div className="p-5 space-y-4">
              {/* Extracted Metrics */}
              <div>
                <p className={`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 transition-all duration-500 ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
                  Extracted Metrics
                </p>
                <div className="space-y-1.5">
                  {metrics.map((m, i) => (
                    <div
                      key={m.label}
                      className={`flex items-center justify-between rounded-md border border-border/50 bg-muted/40 px-3 py-1.5 transition-all duration-500 ${
                        step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <span className="text-[11px] text-muted-foreground">{m.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-foreground">{m.value}</span>
                        <span className="text-[9px] text-primary/70">{m.source}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Derived indicator */}
              <div className={`flex items-center gap-2 transition-all duration-500 ${step >= 4 ? "opacity-100" : "opacity-0"}`}>
                <TrendingUp className="h-3 w-3 text-primary" />
                <span className="text-[10px] text-primary font-medium">Derived ratios computed — EBITDA Margin: 20.6%, Debt/EBITDA: 3.8x</span>
              </div>

              {/* Flags */}
              <div>
                <p className={`text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 transition-all duration-500 ${step >= 5 ? "opacity-100" : "opacity-0"}`}>
                  Structural Flags
                </p>
                <div className="space-y-1">
                  {flags.map((f, i) => (
                    <div
                      key={f.label}
                      className={`flex items-center gap-2 rounded-md px-3 py-1.5 transition-all duration-500 ${
                        step >= 5 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      } ${f.type === "red" ? "bg-red-500/8" : f.type === "yellow" ? "bg-amber-500/8" : "bg-emerald-500/8"}`}
                      style={{ transitionDelay: `${i * 150}ms` }}
                    >
                      {f.type === "green" ? (
                        <CheckCircle className="h-3 w-3 text-emerald-400" />
                      ) : (
                        <AlertTriangle className={`h-3 w-3 ${f.type === "red" ? "text-red-400" : "text-amber-400"}`} />
                      )}
                      <span className={`text-[11px] ${f.type === "red" ? "text-red-300" : f.type === "yellow" ? "text-amber-300" : "text-emerald-300"}`}>
                        {f.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence snippet */}
              <div className={`rounded-md border border-border/50 bg-muted/20 px-3 py-2 transition-all duration-500 ${step >= 6 ? "opacity-100" : "opacity-0"}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">Evidence</span>
                  <span className="text-[9px] text-primary">{evidence[0].page}</span>
                </div>
                <p className="text-[10px] italic text-muted-foreground leading-relaxed">{evidence[0].text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
