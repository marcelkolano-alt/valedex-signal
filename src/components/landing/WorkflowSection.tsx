import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Upload, BarChart3, CheckCircle } from "lucide-react";

const steps = [
  { icon: Upload, num: "01", title: "Upload CIM", desc: "Securely upload a CIM or deal document. Processing begins immediately." },
  { icon: BarChart3, num: "02", title: "Get Structured Metrics & Flags", desc: "Receive extracted financials, computed ratios, and evidence-linked structural risk flags." },
  { icon: CheckCircle, num: "03", title: "Decide Whether to Proceed", desc: "Make a faster, more informed pass/proceed decision before committing to deep diligence." },
];

export default function WorkflowSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className={`mb-3 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            How It Works
          </p>
          <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Three Steps to Structured Intelligence
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{s.num}</span>
              <h3 className="mt-1 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
