import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileText, Cpu, BarChart3, AlertTriangle } from "lucide-react";

const layers = [
  { icon: FileText, label: "Extraction", sub: "Structured financial metrics from unstructured documents", color: "text-primary" },
  { icon: BarChart3, label: "Derivation", sub: "Computed ratios — margins, growth rates, leverage", color: "text-primary" },
  { icon: AlertTriangle, label: "Flags", sub: "Evidence-linked structural risks and anomalies", color: "text-primary" },
];

export default function SignalIntro() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="signal" className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <p className={`mb-3 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Core Engine
          </p>
          <h2 className={`mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Valedex Signal
          </h2>
          <p className={`mx-auto max-w-2xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            A deterministic, evidence-linked analysis engine. Not a chatbot. Not a summarizer. Signal structures deals and highlights what actually matters — with every data point traceable to its source.
          </p>
        </div>

        {/* 3 layers */}
        <div className="grid gap-6 md:grid-cols-3">
          {layers.map((l, i) => (
            <div key={l.label} className="flex flex-col items-center text-center">
              <div
                className={`flex flex-col items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + i * 200}ms` }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-border bg-card mb-4">
                  <l.icon className={`h-7 w-7 ${l.color}`} />
                </div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Layer {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{l.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{l.sub}</p>
              </div>
              {i < layers.length - 1 && (
                <div className="hidden md:block absolute">
                  {/* connecting handled by grid gap */}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-[900ms] ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-sm text-muted-foreground italic">
            Deterministic logic. Reliable outputs. No black-box inference.
          </p>
        </div>
      </div>
    </section>
  );
}
