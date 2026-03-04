import { Button } from "@/components/ui/button";

const navLinks = ["Platform", "Signal", "Security", "Use Cases"];

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-foreground">Valedex</span>
          <span className="text-xl font-light tracking-tight text-primary">.</span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase().replace(" ", "-"))}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </button>
          ))}
        </div>

        <Button
          size="sm"
          className="glow-primary bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => scrollTo("cta")}
        >
          Request Pilot
        </Button>
      </div>
    </nav>
  );
}
