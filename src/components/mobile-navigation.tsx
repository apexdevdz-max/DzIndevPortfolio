import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#projets", label: "Projets" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shrink-0 md:hidden">
      <Button
        variant="outline"
        size="icon"
        className="h-11 w-11 bg-background"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </Button>
      {open && (
        <nav id="mobile-navigation" aria-label="Navigation mobile" className="absolute inset-x-4 top-full mt-2 rounded-lg border border-border bg-background p-2">
          {links.map(({ href, label }) => (
            <Button key={href} asChild variant="ghost" className="flex h-12 w-full justify-start px-4" onClick={() => setOpen(false)}>
              <a href={href}>{label}</a>
            </Button>
          ))}
        </nav>
      )}
    </div>
  );
}