import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FileSearch, Cpu, TrendingUp, ShieldAlert, Link } from "lucide-react";

const features = [
  { icon: FileSearch, title: "Automated Financial Extraction", desc: "Extract revenue, EBITDA, debt, and operating metrics directly from CIMs." },
  { icon: Cpu, title: "Valedex Signal Engine", desc: "Proprietary AI system that transforms unstructured deal documents into structured investment data." },
  { icon: TrendingUp, title: "Derived Metrics Engine", desc: "Automatically compute margins, growth rates, leverage ratios, and other investment indicators." },
  { icon: ShieldAlert, title: "Structural Flagging System", desc: "Instantly surface potential deal risks before deeper diligence begins." },
  { icon: Link, title: "Evidence-Linked Data", desc: "Every metric links back to the exact page and source in the document." },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Capabilities</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Investment Workflows
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-700 border-glow-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
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
