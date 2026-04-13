import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BarChart3, Target, GitCompareArrows, Layers } from "lucide-react";

const features = [
  {
    icon: GitCompareArrows,
    title: "Side-by-Side Deal Comparison",
    desc: "Compare extracted metrics, derived ratios, and risk profiles across multiple opportunities in a unified view.",
  },
  {
    icon: Target,
    title: "Investor Profile Alignment",
    desc: "Evaluate deals against your specific investment criteria — sector focus, size parameters, return thresholds, and risk tolerance.",
  },
  {
    icon: Layers,
    title: "Historical Pattern Recognition",
    desc: "Identify structural similarities with past deals to inform screening decisions with historical context.",
  },
  {
    icon: BarChart3,
    title: "Consistent Screening Decisions",
    desc: "Standardize early-stage evaluation across your team with structured, comparable deal intelligence.",
  },
];

export default function DealComparison() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-t border-border bg-muted/20 py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className={`mb-3 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Differentiator
          </p>
          <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Deal Comparison & Investor Alignment
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Not just single-deal analysis. Valedex enables systematic comparison across your pipeline, aligned to your investment thesis.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-700 border-glow-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
