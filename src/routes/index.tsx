import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import DotField from "@/components/kokonutui/dot-field";
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import PullCord from "@/components/kokonutui/pull-cord";
import SlideTextButton from "@/components/kokonutui/slide-text-button";
import TypewriterTitle from "@/components/kokonutui/type-writer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DZINDEV — Portfolio d'une équipe de développeurs web" },
      { name: "description", content: "DZINDEV conçoit et développe des sites et applications web modernes. Découvrez nos projets." },
      { property: "og:title", content: "DZINDEV — Portfolio" },
      { property: "og:description", content: "Sites et applications web sur mesure par l'équipe DZINDEV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { title: "Nova Commerce", tag: "E-commerce", year: "2026", desc: "Boutique en ligne headless, paiement intégré et back-office temps réel.", stack: ["React", "Node", "Stripe"] },
  { title: "Atlas Dashboard", tag: "SaaS", year: "2025", desc: "Tableau de bord analytique pour équipes logistiques, 40k utilisateurs.", stack: ["TypeScript", "Postgres", "Charts"] },
  { title: "Kora Studio", tag: "Site vitrine", year: "2025", desc: "Identité web animée pour un studio d'architecture à Lagos.", stack: ["Next", "GSAP", "CMS"] },
  { title: "Pulse Mobile", tag: "Web app", year: "2024", desc: "PWA de réservation de salles de sport avec notifications push.", stack: ["PWA", "Firebase", "Tailwind"] },
];

const services = [
  { n: "01", t: "Sites web", d: "Vitrines rapides, élégantes et optimisées SEO." },
  { n: "02", t: "Applications", d: "SaaS, dashboards et outils métiers sur mesure." },
  { n: "03", t: "E-commerce", d: "Boutiques performantes qui convertissent." },
  { n: "04", t: "UI / UX", d: "Interfaces pensées pour vos utilisateurs." },
];

function Index() {
  const [lightsOn, setLightsOn] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("light", lightsOn);
    document.documentElement.classList.toggle("dark", !lightsOn);
  }, [lightsOn]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-6">
        <a href="#accueil" className="font-display text-lg font-bold tracking-tight">
          DZIN<span className="text-primary">DEV</span>
        </a>
        <MorphicNavbar
          compact
          items={{
            "#accueil": { name: "Accueil" },
            "#projets": { name: "Projets" },
            "#services": { name: "Services" },
            "#contact": { name: "Contact" },
          }}
        />
        <span className="hidden w-24 md:block" />
      </header>

      <section id="accueil" className="relative h-screen min-h-[640px] overflow-hidden">
        <DotField className="absolute inset-0" interactive>
          <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.3em] text-primary">Équipe de développeurs web</p>
            <h1 className="font-display mt-6 text-6xl font-bold tracking-tighter md:text-8xl">DZINDEV</h1>
            <TypewriterTitle
              as="h2"
              className="mt-6 font-mono text-lg text-foreground/85 md:text-2xl"
              autoLoop
              sequences={[
                { text: "Nous créons des sites web.", deleteAfter: true },
                { text: "Nous construisons des applications.", deleteAfter: true },
                { text: "Nous donnons vie à vos idées.", deleteAfter: true },
              ]}
            />
            <div className="pointer-events-auto mt-10">
              <SlideTextButton text="Voir nos projets" hoverText="C'est parti →" href="#projets" />
            </div>
          </div>
        </DotField>
      </section>

      <section id="projets" className="mx-auto max-w-6xl px-6 py-28">
        <SectionTitle k="Portfolio" t="Projets sélectionnés" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.title} className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary">
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>0{i + 1} · {p.tag}</span><span>{p.year}</span>
              </div>
              <h3 className="font-display mt-10 text-3xl font-semibold tracking-tight group-hover:text-primary">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <SectionTitle k="Expertise" t="Ce que nous faisons" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
            {services.map((s) => (
              <div key={s.n} className="bg-background p-8">
                <span className="font-mono text-sm text-primary">{s.n}</span>
                <h3 className="font-display mt-6 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-[1fr_auto]">
        <div>
          <SectionTitle k="Contact" t="Un projet en tête ?" />
          <p className="mt-6 max-w-md text-muted-foreground">Parlons-en. Nous répondons sous 24h.</p>
          <div className="mt-8">
            <SlideTextButton text="contact@dzindev.com" hoverText="Écrivez-nous" href="mailto:contact@dzindev.com" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <PullCord label={lightsOn ? "Lumière allumée" : "Tirez pour allumer"} checked={lightsOn} onCheckedChange={setLightsOn} />
        </div>
      </section>

      <footer className="border-t border-border px-6 py-8 text-center font-mono text-xs text-muted-foreground">
        © 2026 DZINDEV — Tous droits réservés
      </footer>
    </div>
  );
}

function SectionTitle({ k, t }: { k: string; t: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{k}</p>
      <h2 className="font-display mt-4 text-4xl font-bold tracking-tighter md:text-6xl">{t}</h2>
    </div>
  );
}
