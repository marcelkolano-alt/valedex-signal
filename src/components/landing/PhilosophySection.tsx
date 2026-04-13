import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="border-t border-border py-24" ref={ref}>
      <div
        className={`mx-auto max-w-3xl px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Philosophy</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Structured Analysis — Not Summarization
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Valedex doesn't summarize documents or generate opinions. It extracts, computes, and flags — deterministically. 
          Every metric is evidence-linked. Every ratio is derived from extracted inputs. Every flag has a source. 
          Your team retains full judgment. Valedex simply removes the mechanical work that slows it down.
        </p>
      </div>
    </section>
  );
}
