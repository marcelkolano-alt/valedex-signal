import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

export default function ProductPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="platform" className="border-t border-border bg-muted/20 py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className={`mb-3 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>Product</p>
          <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Institutional-Grade Analytics
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Metric Extraction */}
          <div className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Metric Extraction
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs text-muted-foreground">
                  <th className="pb-2 font-medium">Metric</th>
                  <th className="pb-2 font-medium">Value</th>
                  <th className="pb-2 font-medium">Source</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                {[
                  ["Revenue", "$42.3M", "p.12"],
                  ["EBITDA", "$8.7M", "p.18"],
                  ["Total Debt", "$33.1M", "p.24"],
                  ["Gross Profit", "$25.8M", "p.14"],
                ].map(([m, v, s], i) => (
                  <tr
                    key={m}
                    className={`border-b border-border/50 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                    style={{ transitionDelay: `${400 + i * 120}ms` }}
                  >
                    <td className="py-2 text-muted-foreground">{m}</td>
                    <td className={`py-2 font-medium transition-colors duration-700 ${isVisible ? "text-foreground" : "text-transparent"}`} style={{ transitionDelay: `${600 + i * 120}ms` }}>{v}</td>
                    <td className="py-2 text-xs text-primary">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Derived Metrics */}
          <div className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Derived Metrics
            </h3>
            <div className="space-y-3">
              {[
                ["EBITDA Margin", "20.6%"],
                ["Revenue CAGR (3Y)", "12.4%"],
                ["Debt / EBITDA", "3.8x"],
                ["Gross Margin", "61.0%"],
              ].map(([label, val], i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between rounded-md bg-muted/50 px-3 py-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  style={{ transitionDelay: `${500 + i * 100}ms` }}
                >
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className={`text-sm font-semibold transition-colors duration-700 ${isVisible ? "text-foreground" : "text-transparent"}`} style={{ transitionDelay: `${700 + i * 100}ms` }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Flags */}
          <div className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Risk Flags
            </h3>
            <div className="space-y-2">
              {[
                { flag: "Customer concentration >30%", severity: "High" },
                { flag: "Significant addbacks (~40% of EBITDA)", severity: "Medium" },
                { flag: "Leverage ratio above 3.5x threshold", severity: "High" },
              ].map((r, i) => (
                <div
                  key={r.flag}
                  className={`flex items-start gap-3 rounded-md bg-muted/50 px-3 py-2 transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                  style={{ transitionDelay: `${600 + i * 150}ms` }}
                >
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-[10px] transition-all duration-500 ${
                      r.severity === "High"
                        ? "border-amber-500/40 text-amber-400"
                        : "border-yellow-500/30 text-yellow-400"
                    } ${isVisible ? "opacity-100" : "opacity-0"}`}
                    style={{ transitionDelay: `${800 + i * 150}ms` }}
                  >
                    {r.severity}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{r.flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Panel */}
          <div className={`rounded-xl border border-border bg-card p-5 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Evidence Trail
            </h3>
            <div className="space-y-3">
              {[
                { metric: "Revenue: $42.3M", page: "Page 12", quote: '"Total net revenue for fiscal year 2024 was $42.3 million..."' },
                { metric: "EBITDA: $8.7M", page: "Page 18", quote: '"Adjusted EBITDA reached $8.7 million, representing..."' },
                { metric: "Customer Concentration", page: "Page 31", quote: '"Top 3 customers accounted for approximately 34% of..."' },
              ].map((e, i) => (
                <div
                  key={e.metric}
                  className={`rounded-md border border-border/50 bg-muted/30 px-3 py-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
                  style={{ transitionDelay: `${700 + i * 130}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">{e.metric}</span>
                    <span className={`text-[10px] text-primary transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${900 + i * 130}ms` }}>{e.page}</span>
                  </div>
                  <p className={`mt-1 text-[11px] italic text-muted-foreground leading-relaxed transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: `${1000 + i * 130}ms` }}>{e.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
