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
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          AI for Deal Evaluation — Not Judgment Replacement
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Valedex removes the mechanical work of financial reconstruction. Investment teams still
          make the decisions. Valedex simply provides structured information faster through Valedex
          Signal — so analysts spend time on judgment, not data entry.
        </p>
      </div>
    </section>
  );
}
