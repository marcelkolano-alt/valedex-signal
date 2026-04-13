import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta" className="border-t border-border py-32" ref={ref}>
      <div
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          See how it works on your deal flow.
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          Upload a CIM. Get structured metrics, derived insights, and evidence-linked flags in minutes.
        </p>
        <Button
          size="lg"
          className="glow-primary-strong bg-primary px-10 text-primary-foreground hover:bg-primary/90 gap-2"
        >
          Book a Demo
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
