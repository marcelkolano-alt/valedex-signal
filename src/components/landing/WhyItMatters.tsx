import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Clock, FileWarning, Filter } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Manual Financial Reconstruction",
    desc: "Analysts spend hours rebuilding financials from inconsistent, narrative-heavy CIMs before any evaluation can begin.",
  },
  {
    icon: FileWarning,
    title: "Inconsistent & Biased Documents",
    desc: "CIMs are seller-prepared. Key risks are buried, metrics are selectively presented, and comparability is limited.",
  },
  {
    icon: Filter,
    title: "Inefficient Early-Stage Filtering",
    desc: "Most deals don't proceed past initial review. Yet each consumes significant analyst time before a pass/proceed decision.",
  },
];

export default function WhyItMatters() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className={`mb-3 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            The Problem
          </p>
          <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            First-Pass Evaluation Is the Bottleneck
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Valedex is the first checkpoint before deep diligence — structuring what matters so your team focuses on judgment, not data entry.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((p, i) => (
            <div
              key={p.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <p.icon className="h-5 w-5 text-destructive" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
