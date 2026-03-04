import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Server, Brain, Lock } from "lucide-react";

const items = [
  { icon: Shield, title: "Secure Document Processing", desc: "All documents processed in isolated, encrypted environments." },
  { icon: Server, title: "Enterprise-Grade Infrastructure", desc: "Built on institutional-quality cloud infrastructure with 99.9% uptime." },
  { icon: Brain, title: "No Model Training on Your Data", desc: "Your deal data is never used to train or improve AI models." },
  { icon: Lock, title: "Private & Encrypted Storage", desc: "End-to-end encryption for all uploaded documents and extracted data." },
];

export default function SecuritySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="security" className="border-t border-border bg-muted/20 py-24" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Security</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Enterprise Trust & Security
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card">
                <item.icon className="h-6 w-6 text-primary" />
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
