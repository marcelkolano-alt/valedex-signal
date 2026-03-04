import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: 50000, suffix: "+", label: "Documents Processed" },
  { value: 1200000, suffix: "+", label: "Metrics Extracted", prefix: "" },
  { value: 120000, suffix: "+", label: "Hours Eliminated" },
  { value: 300000, suffix: "+", label: "Deal Signals Generated" },
];

function formatNum(n: number) {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(0) + "K";
  return n.toString();
}

function AnimatedNumber({ target, isVisible }: { target: number; isVisible: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, target]);
  return <>{formatNum(val)}</>;
}

export default function CredibilityStrip() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-t border-border bg-muted/30 py-20" ref={ref}>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <p className="text-3xl font-bold text-foreground sm:text-4xl">
              <AnimatedNumber target={s.value} isVisible={isVisible} />
              {s.suffix}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
