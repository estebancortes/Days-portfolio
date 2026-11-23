"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Clapperboard, HeartHandshake, Mail, MapPin, Palette } from "lucide-react";
import { FilmLibrary } from "@/components/day/film-library";
import { BrandStrip } from "@/components/day/brand-strip";
import { InstagramIcon, TikTokIcon } from "@/components/day/icons";
import { creator } from "@/data/creator";
import { copy, type Lang } from "@/data/copy";

gsap.registerPlugin(ScrollTrigger);
// Phones hide and show the address bar while scrolling; don't recalculate every trigger when that happens.
ScrollTrigger.config({ ignoreMobileResize: true });

const [instagram, tiktok] = creator.social;

function ContactPills({ email = false }: { email?: boolean }) {
  return (
    <ul className="pills">
      <li><a className="pill" href={instagram.href} target="_blank" rel="noreferrer"><span className="pill-icon"><InstagramIcon /></span>{instagram.handle}</a></li>
      <li><a className="pill" href={tiktok.href} target="_blank" rel="noreferrer"><span className="pill-icon"><TikTokIcon /></span>{tiktok.handle}</a></li>
      {email && <li><a className="pill" href={"mailto:" + creator.email}><span className="pill-icon"><Mail size={14} /></span>{creator.email}</a></li>}
    </ul>
  );
}

// Written for the brands reading the page. Same arc as a strong UGC pitch: what she does for a brand,
// why she is credible, how every video is made. Text lives in data/copy.ts in both languages.
const pointIcons = [HeartHandshake, Palette, Clapperboard, MapPin];

export function HomePageClient({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang];
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .fromTo(".hero-media", { clipPath: "inset(6% 6% 6% 6% round 22px)" }, { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1.3, clearProps: "clipPath" })
        .from(".hero-copy > *", { y: 28, opacity: 0, duration: .9, stagger: .08 }, "<.2");

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach(el => {
        gsap.from(el, { y: 48, opacity: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.utils.toArray<HTMLElement>("[data-float]").forEach(el => {
        gsap.fromTo(el, { yPercent: 8, rotation: Number(el.dataset.float) - 5 }, { yPercent: -6, rotation: Number(el.dataset.float) + 4, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });
      // The claw clip drops onto the edge of the About card and snaps shut.
      gsap.utils.toArray<HTMLElement>("[data-drop]").forEach(el => {
        gsap.from(el, { y: -110, rotation: -28, opacity: 0, duration: 1.1, ease: "back.out(1.6)", scrollTrigger: { trigger: el, start: "top 92%" } });
      });
      // The highlighter follows the scroll: it draws across the contact headline as it rises and erases on the way back up.
      gsap.fromTo(".contact-title", { "--draw": 0 }, { "--draw": 1, ease: "none", scrollTrigger: { trigger: ".contact-title", start: "top 88%", end: "top 52%", scrub: .6 } });
    });
    // Buttons and pills lean toward the cursor a little, then settle back with a small overshoot when it leaves.
    media.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const page = root.current;
      if (!page) return;
      const movers = new WeakMap<HTMLElement, [(v: number) => void, (v: number) => void]>();
      let current: HTMLElement | null = null;
      const release = (el: HTMLElement | null) => { const m = el && movers.get(el); if (m) { m[0](0); m[1](0); } };
      const move = (e: PointerEvent) => {
        const el = (e.target as Element).closest<HTMLElement>(".button, .pill, .nav-cta, .icon-button");
        if (el !== current) { release(current); current = el; }
        if (!el) return;
        if (!movers.has(el)) movers.set(el, [gsap.quickTo(el, "--mx", { duration: .6, ease: "back.out(2)" }), gsap.quickTo(el, "--my", { duration: .6, ease: "back.out(2)" })]);
        const [x, y] = movers.get(el)!;
        const r = el.getBoundingClientRect();
        x(((e.clientX - r.left) / r.width - .5) * Math.min(r.width * .18, 14));
        y(((e.clientY - r.top) / r.height - .5) * 10);
      };
      const leave = () => { release(current); current = null; };
      page.addEventListener("pointermove", move);
      page.addEventListener("pointerleave", leave);
      return () => { page.removeEventListener("pointermove", move); page.removeEventListener("pointerleave", leave); };
    });
    return () => media.revert();
  }, { scope: root });

  return (
    <main ref={root} className="day">
      <nav className="nav" aria-label={t.nav.aria}>
        <a className="wordmark nav-mark" href="#top">{creator.name}</a>
        <div className="nav-links">
          <a href="#work">{t.nav.portfolio}</a>
          <a href="#about">{t.nav.about}</a>
          <a className="nav-lang" href={t.switchTo.href} hrefLang={lang === "en" ? "es" : "en"} aria-label={t.switchTo.aria}>{t.switchTo.label}</a>
          <a className="nav-cta" href="#contact">{t.nav.cta}</a>
        </div>
      </nav>

      <header id="top" className="panel hero">
        <div className="hero-media">
          <video muted autoPlay loop playsInline disablePictureInPicture disableRemotePlayback preload="metadata" poster="/assets/films/hero-poster.jpg" src="/assets/films/hero.mp4" aria-label={t.heroVideo} />
        </div>
        <div className="hero-copy dotted">
          <h1 className="wordmark hero-name">{creator.name}</h1>
          <p className="hero-role">{t.role}</p>
          <ContactPills email />
        </div>
      </header>

      <section id="about" className="panel about" aria-labelledby="about-title">
        <div className="about-media">
          <Image src="/assets/films/utah-portrait.jpg" alt={t.about.photo} fill quality={90} sizes="(max-width: 760px) 100vw, 46vw" className="about-photo" />
          <dl className="stat-card">
            <div><dt>{t.about.stats.followers}</dt><dd>{creator.combinedFollowers}</dd></div>
            <div><dt>{t.about.stats.views}</dt><dd>{t.about.stats.viewsValue}</dd></div>
            <div><dt>{t.about.stats.years}</dt><dd>10+</dd></div>
          </dl>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title">{t.about.title}</h2>
          <p className="lede">{t.about.lede}</p>
          <ul className="points">
            {t.about.points.map((text, i) => {
              const Icon = pointIcons[i];
              return <li key={i}><span className="point-icon"><Icon size={16} /></span><p>{text}</p></li>;
            })}
          </ul>
          <div className="about-foot">
            <p className="signature">Dayana</p>
            <a className="button" href="#contact">{t.about.cta} <ArrowRight size={16} /></a>
          </div>
        </div>
        <span className="clip" aria-hidden="true">
          <Image src="/assets/objects/copper-comb.png" alt="" width={640} height={480} sizes="(max-width: 760px) 170px, 330px" data-drop />
        </span>
      </section>

      <BrandStrip lang={lang} />
      <FilmLibrary lang={lang} />

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="receiver" aria-hidden="true">
          <span className="receiver-cord" />
          <Image src="/assets/objects/rose-receiver.png" alt="" width={366} height={550} sizes="(max-width: 760px) 90px, 170px" />
        </div>
        <div className="panel contact-card">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">{t.contact.eyebrow}</p>
            <h2 id="contact-title" className="contact-title"><mark>{t.contact.mark}</mark>{t.contact.rest}</h2>
            <a className="contact-email" href={"mailto:" + creator.email}>{creator.email} <ArrowUpRight size={22} /></a>
            <ContactPills />
          </div>
          <div className="contact-media">
            <Image src="/assets/headshot/contact-portrait.jpg" alt={t.contact.photo} fill quality={90} sizes="(max-width: 760px) 92vw, (max-width: 1080px) 520px, 36vw" />
          </div>
        </div>
        <footer className="footer">
          <span className="wordmark">{creator.name}</span>
          <span>© 2026 · {creator.location}</span>
        </footer>
      </section>
    </main>
  );
}
