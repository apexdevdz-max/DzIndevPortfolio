import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, Dribbble, ExternalLink, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent, useReducedMotion, type MotionValue } from "motion/react";
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
  {
    title: "Shein Outlet",
    tag: "E-commerce",
    desc: "Plateforme de vente en ligne avec catalogue produits, recherche et système de panier intégré.",
    stack: ["React", "E-commerce", "Responsive"],
    url: "https://sheinoutlet.netlify.app/",
    image: "/projects/shein-outlet.png",
  },
  {
    title: "La Perle de Béthussy",
    tag: "Site vitrine",
    desc: "Site élégant pour un restaurant, avec menu, réservation et présentation de l'établissement.",
    stack: ["Design", "Restaurant", "SEO"],
    url: "https://la-perle-de-bethusy.netlify.app/",
    image: "/projects/la-perle-de-bethusy.png",
  },
  {
    title: "Rawaq",
    tag: "Site vitrine",
    desc: "Interface moderne et minimaliste pour une marque créative, design soigné et animations fluides.",
    stack: ["UI/UX", "Animations", "Branding"],
    url: "https://heroic-kringle-ce91e4.netlify.app/",
    image: "/projects/rawaq.png",
  },
  {
    title: "La Mie Dorée",
    tag: "Restaurant",
    desc: "Vitrine de spécialités pour une boulangerie-pâtisserie, avec catalogue détaillé des produits.",
    stack: ["Vitrine", "Catalogue", "CMS"],
    url: "https://lamiedoree-demo.netlify.app/specialites",
    image: "/projects/la-mie-doree.png",
  },
  {
    title: "Florentin",
    tag: "Boulangerie",
    desc: "Site complet pour une boulangerie-pâtisserie et salon de thé, avec carte et horaires.",
    stack: ["Next.js", "Design", "Responsive"],
    url: "https://florentin-demo.netlify.app/",
    image: "/projects/florentin.png",
  },
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

  // Scroll-spy: tell the navbar which section is in view via a custom
  // event.  We must NOT touch window.location.hash or history here —
  // changing the URL hash triggers the browser's native scroll-to-fragment
  // logic and causes upward-scroll jumps.
  useEffect(() => {
    const ids = ["accueil", "projets", "services", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            window.dispatchEvent(
              new CustomEvent("activeSection", { detail: `#${entry.target.id}` }),
            );
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

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

      <ProjectsSection />

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
                <MapPin className="h-4 w-4" /> Oran, Algérie
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

/* ──────────────────────────────────────────────────────────────────────
   Scroll-pinned Projects section
   ────────────────────────────────────────────────────────────────────── */

const PROJ_COUNT = projects.length;

function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(Math.floor(v * PROJ_COUNT), PROJ_COUNT - 1));
  });

  return (
    <div
      ref={containerRef}
      id="projets"
      className="relative"
      style={{ height: `${PROJ_COUNT * 100}dvh` }}
    >
      {/* Sticky viewport — the only visible layer while pinned */}
      <div className="sticky top-0 flex h-dvh w-full flex-col overflow-hidden bg-background pb-8 md:pb-12">
        {/* Section header — sits below the fixed navbar */}
        <div className="mx-auto w-full max-w-6xl shrink-0 px-5 pt-20 md:px-6 md:pt-28">
          <SectionTitle k="Portfolio" t="Projets sélectionnés" />
        </div>

        {/* Cards viewport — flex-1 min-h-0 lets it shrink to fit */}
        <div className="relative mx-auto mt-6 w-full max-w-6xl min-h-0 flex-1 px-5 md:mt-8 md:px-6">
          {projects.map((p, i) => (
            <ScrollCard
              key={p.title}
              project={p}
              index={i}
              scrollProgress={scrollYProgress}
              isActive={activeIndex === i}
              reducedMotion={reducedMotion ?? false}
            />
          ))}
        </div>

        {/* Progress indicator — vertically centred with the card area */}
        <div className="pointer-events-none absolute bottom-8 right-3 top-[40%] z-20 flex -translate-y-1/4 flex-col items-center justify-center gap-2 md:bottom-12 md:right-8">
          <span className="font-mono text-[11px] tabular-nums text-foreground/50">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <div className="h-16 w-px overflow-hidden rounded-full bg-foreground/10 md:h-20">
            <motion.div className="w-full rounded-full bg-primary" style={{ height: progressHeight }} />
          </div>
          <span className="font-mono text-[11px] tabular-nums text-foreground/50">
            {String(PROJ_COUNT).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/** A single project card whose opacity / y / scale are driven by scroll progress. */
function ScrollCard({
  project: p,
  index,
  scrollProgress,
  isActive,
  reducedMotion,
}: {
  project: (typeof projects)[0];
  index: number;
  scrollProgress: MotionValue<number>;
  isActive: boolean;
  reducedMotion: boolean;
}) {
  const n = PROJ_COUNT;
  const s = index / n;
  const e = (index + 1) / n;
  const fade = 0.35 / n; // 35 % of each segment used for transition
  const first = index === 0;
  const last = index === n - 1;

  /* ── opacity: first card starts at 1, last stays at 1 ── */
  const oKeys = [...(first ? [s] : [s, s + fade]), ...(last ? [e] : [e - fade, e])];
  const oVals = [...(first ? [1] : [0, 1]), ...(last ? [1] : [1, 0])] as number[];
  const opacity = useTransform(scrollProgress, oKeys, oVals);

  /* ── y / scale: slide up and shrink during transitions ── */
  const tKeys = first ? [e - fade, e] : last ? [s, s + fade] : [s, s + fade, e - fade, e];
  const y = useTransform(
    scrollProgress,
    tKeys,
    reducedMotion
      ? tKeys.map(() => 0)
      : first
        ? [0, -60]
        : last
          ? [60, 0]
          : [60, 0, 0, -60],
  );
  const scale = useTransform(
    scrollProgress,
    tKeys,
    reducedMotion
      ? tKeys.map(() => 1)
      : first
        ? [1, 0.96]
        : last
          ? [0.96, 1]
          : [0.96, 1, 1, 0.96],
  );

  return (
    <motion.div
      className={`absolute inset-0 overflow-hidden rounded-[28px] shadow-2xl ${!isActive ? "pointer-events-none" : ""}`}
      style={{ opacity, y, scale }}
    >
      <img
        src={p.image}
        alt={`Capture d'écran du projet ${p.title}`}
        className="absolute inset-0 h-full w-full object-cover object-top"
        loading={index === 0 ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white md:p-8">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-white/70">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-0.5 backdrop-blur-sm">{p.tag}</span>
        </div>
        <h3 className="font-display mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">{p.title}</h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">{p.desc}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {p.stack.map((st) => (
            <span key={st} className="rounded-full bg-white/10 px-3 py-1 font-mono text-xs text-white/80 backdrop-blur-sm">{st}</span>
          ))}
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 font-mono text-xs font-semibold text-zinc-900 transition-transform hover:scale-105"
          >
            Voir le site <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
