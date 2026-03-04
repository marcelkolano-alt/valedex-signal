import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Upload, Search, TrendingUp, AlertTriangle, FileCheck } from "lucide-react";

const steps = [
  { icon: Upload, title: "CIM Upload", desc: "Securely upload confidential deal documents" },
  { icon: Search, title: "Valedex Signal Extraction", desc: "AI extracts raw financial metrics from unstructured text" },
  { icon: TrendingUp, title: "Derived Ratio Computation", desc: "Automatic computation of margins, growth, and leverage ratios" },
  { icon: AlertTriangle, title: "Structural Risk Flags", desc: "Surface concentration risks, excessive addbacks, and red flags" },
  { icon: FileCheck, title: "Investor-Ready Deal Snapshot", desc: "A structured deal summary ready for investment committee review" },
];

export default function WorkflowSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Pipeline</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Document to Deal Signal
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-8">
            <div
              className={`w-full bg-primary/30 transition-all duration-[2000ms] ease-out ${
                isVisible ? "h-full" : "h-0"
              }`}
            />
          </div>

          <div className="space-y-10">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`relative flex items-start gap-6 pl-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-card md:h-16 md:w-16">
                  <s.icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
                </div>
                <div className="pt-1">
                  <h3 className="text-base font-semibold text-foreground md:text-lg">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
