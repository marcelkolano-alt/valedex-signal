import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Search, Home, Users, Landmark } from "lucide-react";

const cases = [
  { icon: Building2, title: "Private Equity Firms", desc: "Accelerate deal screening by automating first-pass CIM analysis across hundreds of opportunities." },
  { icon: Search, title: "Search Funds", desc: "Evaluate more deals with limited resources by letting Signal handle financial reconstruction." },
  { icon: Home, title: "Family Offices", desc: "Quickly assess direct investment opportunities with structured, standardized deal intelligence." },
  { icon: Users, title: "Independent Sponsors", desc: "Move faster on proprietary deal flow with instant CIM analysis and risk flagging." },
  { icon: Landmark, title: "Investment Banks", desc: "Streamline buy-side and sell-side workflows with automated deal document processing." },
];

export default function UseCasesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="use-cases" className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Use Cases</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Every Investment Workflow
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 border-glow-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <c.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-2 text-base font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
