import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Revenue", value: "$42.3M", delay: 800 },
  { label: "EBITDA", value: "$8.7M", delay: 1200 },
  { label: "Gross Margin", value: "61.2%", delay: 1600 },
  { label: "Net Debt", value: "$12.1M", delay: 2000 },
];

const flags = [
  { label: "Customer concentration >30%", type: "warning", delay: 2600 },
  { label: "Leverage ratio: 3.8x", type: "warning", delay: 3000 },
  { label: "Revenue CAGR: 12.4%", type: "success", delay: 3400 },
];

export default function HeroSection() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 400),
      setTimeout(() => setStep(2), 800),
      setTimeout(() => setStep(3), 1400),
      setTimeout(() => setStep(4), 2400),
      setTimeout(() => setStep(5), 3600),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center pt-16">
      {/* Subtle gradient bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(192_70%_51%/0.04)_0%,transparent_60%)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Enterprise AI Infrastructure
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Infrastructure for Early‑Stage Deal Evaluation
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Valedex automates first‑pass CIM analysis through Valedex Signal, extracting financial
            metrics, computing key ratios, and surfacing structural risks so investment teams can
            evaluate deals faster.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="glow-primary-strong bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Request Pilot
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              View Platform
            </Button>
          </div>
        </div>

        {/* Right — animated product preview */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-lg rounded-xl border border-border bg-card p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-4 flex items-center gap-2 border-b border-border pb-3">
              <FileText className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                Valedex Signal — Processing CIM
              </span>
              <span className={`ml-auto h-2 w-2 rounded-full ${step >= 1 ? "bg-primary animate-pulse-glow" : "bg-muted-foreground/30"}`} />
            </div>

            {/* Metrics */}
            <div className="mb-4 space-y-2">
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex items-center justify-between rounded-md border border-border bg-muted/50 px-3 py-2 transition-all duration-500 ${
                    step >= 3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <span className="text-xs text-muted-foreground">{m.label}</span>
                  <span className="text-sm font-semibold text-foreground">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Ratios computing indicator */}
            <div className={`mb-4 flex items-center gap-2 transition-all duration-500 ${step >= 4 ? "opacity-100" : "opacity-0"}`}>
              <TrendingUp className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs text-primary">Derived ratios computed</span>
            </div>

            {/* Risk flags */}
            <div className="space-y-1.5">
              {flags.map((f, i) => (
                <div
                  key={f.label}
                  className={`flex items-center gap-2 rounded-md px-3 py-1.5 transition-all duration-500 ${
                    step >= 5 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  } ${f.type === "warning" ? "bg-amber-500/10" : "bg-emerald-500/10"}`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {f.type === "warning" ? (
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
                  ) : (
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  )}
                  <span className={`text-xs ${f.type === "warning" ? "text-amber-300" : "text-emerald-300"}`}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
