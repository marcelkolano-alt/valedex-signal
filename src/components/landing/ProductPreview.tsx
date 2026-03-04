import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";

export default function ProductPreview() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="platform" className="border-t border-border bg-muted/20 py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Product</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Institutional-Grade Analytics
          </h2>
        </div>

        <div
          className={`grid gap-4 md:grid-cols-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Metric Extraction */}
          <div className="rounded-xl border border-border bg-card p-5">
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
                ].map(([m, v, s]) => (
                  <tr key={m} className="border-b border-border/50">
                    <td className="py-2 text-muted-foreground">{m}</td>
                    <td className="py-2 font-medium">{v}</td>
                    <td className="py-2 text-xs text-primary">{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Derived Metrics */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Derived Metrics
            </h3>
            <div className="space-y-3">
              {[
                ["EBITDA Margin", "20.6%"],
                ["Revenue CAGR (3Y)", "12.4%"],
                ["Debt / EBITDA", "3.8x"],
                ["Gross Margin", "61.0%"],
              ].map(([label, val]) => (
                <div key={label} className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2">
                  <span className="text-sm text-muted-foreground">{label}</span>
                  <span className="text-sm font-semibold text-foreground">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Flags */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Risk Flags
            </h3>
            <div className="space-y-2">
              {[
                { flag: "Customer concentration >30%", severity: "High" },
                { flag: "Significant addbacks (~40% of EBITDA)", severity: "Medium" },
                { flag: "Leverage ratio above 3.5x threshold", severity: "High" },
              ].map((r) => (
                <div key={r.flag} className="flex items-start gap-3 rounded-md bg-muted/50 px-3 py-2">
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-[10px] ${
                      r.severity === "High"
                        ? "border-amber-500/40 text-amber-400"
                        : "border-yellow-500/30 text-yellow-400"
                    }`}
                  >
                    {r.severity}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{r.flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Panel */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Evidence Trail
            </h3>
            <div className="space-y-3">
              {[
                { metric: "Revenue: $42.3M", page: "Page 12", quote: '"Total net revenue for fiscal year 2024 was $42.3 million..."' },
                { metric: "EBITDA: $8.7M", page: "Page 18", quote: '"Adjusted EBITDA reached $8.7 million, representing..."' },
                { metric: "Customer Concentration", page: "Page 31", quote: '"Top 3 customers accounted for approximately 34% of..."' },
              ].map((e) => (
                <div key={e.metric} className="rounded-md border border-border/50 bg-muted/30 px-3 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-foreground">{e.metric}</span>
                    <span className="text-[10px] text-primary">{e.page}</span>
                  </div>
                  <p className="mt-1 text-[11px] italic text-muted-foreground leading-relaxed">{e.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
