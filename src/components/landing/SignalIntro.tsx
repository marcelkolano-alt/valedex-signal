import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Cpu, BarChart3 } from "lucide-react";

const nodes = [
  { icon: FileText, label: "CIM Document", sub: "Unstructured deal data" },
  { icon: Cpu, label: "Valedex Signal", sub: "Proprietary AI engine", highlight: true },
  { icon: BarChart3, label: "Structured Deal Intelligence", sub: "Metrics, ratios & risk flags" },
];

export default function SignalIntro() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="signal" className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Core Engine</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Meet Valedex Signal
        </h2>
        <p className="mx-auto mb-16 max-w-2xl text-muted-foreground leading-relaxed">
          Valedex Signal is the proprietary intelligence engine powering the Valedex platform. It
          converts unstructured deal documents into structured investment intelligence by extracting
          financial metrics, computing derived ratios, and surfacing structural risk signals.
        </p>

        <div className="flex flex-col items-center gap-0 md:flex-row md:justify-center md:gap-0">
          {nodes.map((n, i) => (
            <div key={n.label} className="flex items-center">
              <div
                className={`flex flex-col items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-xl border ${
                    n.highlight
                      ? "border-primary/40 bg-primary/10 glow-primary"
                      : "border-border bg-card"
                  }`}
                >
                  <n.icon className={`h-8 w-8 ${n.highlight ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <p className={`mt-3 text-sm font-semibold ${n.highlight ? "text-primary" : "text-foreground"}`}>
                  {n.label}
                </p>
                <p className="text-xs text-muted-foreground">{n.sub}</p>
              </div>
              {i < nodes.length - 1 && (
                <div className="mx-6 hidden h-px w-16 bg-border md:block">
                  <div
                    className={`h-full bg-primary/40 transition-all duration-1000 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                    style={{ transitionDelay: `${(i + 1) * 300}ms` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
