import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Server, Brain, Lock, Eye } from "lucide-react";

const items = [
  { icon: Lock, title: "Encrypted Upload & Storage", desc: "End-to-end encryption for all uploaded documents and extracted data. Nothing leaves the secure environment." },
  { icon: Brain, title: "Private AI Environment", desc: "Your deal data is never used to train or improve AI models. Processing is fully isolated." },
  { icon: Eye, title: "No Human Access", desc: "Fully automated document processing. No analyst, engineer, or third party views your documents." },
  { icon: Server, title: "Enterprise-Grade Infrastructure", desc: "Institutional-quality cloud infrastructure with SOC 2 compliance, 99.9% uptime, and audit logging." },
];

export default function SecuritySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="security" className="border-t border-border py-24" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className={`mb-3 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Security & Trust
          </p>
          <h2 className={`text-3xl font-bold tracking-tight text-foreground sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Built for Confidential Deal Materials
          </h2>
          <p className={`mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            We understand the sensitivity of deal documents. Every aspect of Valedex is designed for enterprise-grade confidentiality.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-xl border border-border bg-card p-5 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-muted/50">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
