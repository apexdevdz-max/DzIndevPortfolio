import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp, Dribbble, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import DotField from "@/components/kokonutui/dot-field";
import MorphicNavbar from "@/components/kokonutui/morphic-navbar";
import PullCord from "@/components/kokonutui/pull-cord";
import SlideTextButton from "@/components/kokonutui/slide-text-button";
import TypewriterTitle from "@/components/kokonutui/type-writer";
import { MobileNavigation } from "@/components/mobile-navigation";

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
      <header className="fixed inset-x-0 top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border bg-background/95 px-5 py-3 backdrop-blur-md md:top-4 md:flex md:justify-between md:border-0 md:bg-transparent md:px-6 md:py-0 md:backdrop-blur-none">
        <a href="#accueil" className="min-w-0 font-display text-lg font-bold">
          DZIN<span className="text-primary">DEV</span>
        </a>
        <MorphicNavbar
          className="hidden md:flex"
          compact
          items={{
            "#accueil": { name: "Accueil" },
            "#projets": { name: "Projets" },
            "#services": { name: "Services" },
            "#contact": { name: "Contact" },
          }}
        />
        <MobileNavigation />
        <span className="hidden w-24 md:block" />
      </header>

      <section id="accueil" className="relative h-[88svh] min-h-[480px] overflow-hidden md:h-[92svh] md:min-h-[600px]">
        <DotField className="absolute inset-0" interactive>
          <div className="pointer-events-none relative z-10 flex h-full min-w-0 flex-col items-center justify-center px-5 pt-16 text-center md:px-6 md:pt-0">
            <p className="max-w-full font-mono text-xs font-medium uppercase leading-relaxed text-primary sm:text-sm">Équipe de développeurs web</p>
            <h1 className="font-display mt-5 text-5xl font-bold sm:text-6xl md:mt-6 md:text-8xl">DZINDEV</h1>
            <TypewriterTitle
              as="h2"
              className="mt-5 min-w-0 max-w-xl font-mono text-foreground/85 md:mt-6"
              textClassName="w-full min-w-0 whitespace-normal text-center justify-items-center text-lg leading-relaxed @lg:text-xl @2xl:text-2xl [&>span]:w-full"
              autoLoop
              sequences={[
                { text: "Nous créons des sites web.", deleteAfter: true },
                { text: "Nous construisons des applications.", deleteAfter: true },
                { text: "Nous donnons vie à vos idées.", deleteAfter: true },
              ]}
            />
            <div className="pointer-events-auto mt-7 md:mt-10">
              <SlideTextButton text="Voir nos projets" hoverText="C'est parti →" href="#projets" />
            </div>
          </div>
        </DotField>
      </section>

      <section id="projets" className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-28">
        <SectionTitle k="Portfolio" t="Projets sélectionnés" />
        <div className="mt-8 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
          {projects.map((p, i) => (
            <article key={p.title} className="group min-w-0 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary md:p-8">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 font-mono text-xs text-muted-foreground">
                <span>0{i + 1} · {p.tag}</span><span>{p.year}</span>
              </div>
              <h3 className="font-display mt-6 text-2xl font-semibold group-hover:text-primary md:mt-10 md:text-3xl">{p.title}</h3>
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
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-6 md:py-28">
          <SectionTitle k="Expertise" t="Ce que nous faisons" />
          <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.n} className="min-w-0 bg-background p-6 md:p-8">
                <span className="font-mono text-sm text-primary">{s.n}</span>
                <h3 className="font-display mt-6 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12 md:px-6 md:py-28">
        <div className="min-w-0">
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

      <SiteFooter />
    </div>
  );
}

const footerNav = [
  {
    t: "Navigation",
    links: [
      { label: "Accueil", href: "#accueil" },
      { label: "Projets", href: "#projets" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    t: "Services",
    links: [
      { label: "Sites web", href: "#services" },
      { label: "Applications", href: "#services" },
      { label: "E-commerce", href: "#services" },
      { label: "UI / UX", href: "#services" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com", Icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "X", href: "https://x.com", Icon: Twitter },
  { label: "Dribbble", href: "https://dribbble.com", Icon: Dribbble },
];

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-10">
          <div className="col-span-2 min-w-0 lg:col-span-1">
            <a href="#accueil" className="font-display text-2xl font-bold tracking-tight">
              DZIN<span className="text-primary">DEV</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Équipe de développeurs web. Nous concevons et développons des sites et applications rapides, clairs et sur mesure.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.t} className="min-w-0">
              <h4 className="font-mono text-xs uppercase text-primary">{col.t}</h4>
              <ul className="mt-4 space-y-3 md:mt-6">
                {col.links.map((l) => (
                  <li key={l.label + l.href}>
                    <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 min-w-0 lg:col-span-1">
            <h4 className="font-mono text-xs uppercase text-primary">Contact</h4>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:contact@dzindev.com" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
                  <Mail className="h-4 w-4" /> contact@dzindev.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Lagos, Nigeria
              </li>
            </ul>
            <div className="mt-6">
              <SlideTextButton text="Démarrer un projet" hoverText="Écrivez-nous →" href="mailto:contact@dzindev.com" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center font-mono text-xs leading-relaxed text-muted-foreground md:mt-16 md:flex-row md:pt-8">
          <p>© {new Date().getFullYear()} DZINDEV — Tous droits réservés</p>
          <p className="hidden xl:block">Conçu et développé par l'équipe DZINDEV</p>
          <a
            href="#accueil"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary"
          >
            Haut de page <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ k, t }: { k: string; t: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase text-primary">{k}</p>
      <h2 className="font-display mt-3 text-3xl font-bold md:mt-4 md:text-6xl">{t}</h2>
    </div>
  );
}
