"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight, Clapperboard, HeartHandshake, Mail, MapPin, Palette } from "lucide-react";
import { FilmLibrary } from "@/components/day/film-library";
import { BrandStrip } from "@/components/day/brand-strip";
import { InstagramIcon, TikTokIcon } from "@/components/day/icons";
import { creator } from "@/data/creator";

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
// why she is credible, how every video is made. Facts only from the handoff and owner-supplied lists.
const points = [
  { icon: HeartHandshake, text: "I help beauty and haircare brands show exactly what their products do, in videos that feel like a recommendation from a friend, the kind viewers believe." },
  { icon: Palette, text: "I’m a Colombian UGC creator filming in English and Spanish, and copper hair is my specialty: I’ve colored my own curly hair for more than ten years. I’ve created for L’Oréal Paris, YSL Beauty, SHEGLAM, TYMO, Wavytalk and more, across hair color, styling tools, makeup, skincare and eyewear." },
  { icon: Clapperboard, text: "Every video tells the whole story: the starting point, how the product goes on and the result in natural light. It feels native on TikTok and Instagram, and it’s ready to run as a paid ad." },
  { icon: MapPin, text: "Based in Salt Lake City, I also film first looks at Utah restaurants, spas and salons." }
];

export function HomePageClient() {
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
    });
    return () => media.revert();
  }, { scope: root });

  // Draw the highlighter under the contact headline once it scrolls into view.
  const title = useRef<HTMLHeadingElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const el = title.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setDrawn(true); observer.disconnect(); }
    }, { rootMargin: "0px 0px -20% 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={root} className="day">
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark nav-mark" href="#top">{creator.name}</a>
        <div className="nav-links">
          <a href="#work">Portfolio</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Work with me</a>
        </div>
      </nav>

      <header id="top" className="panel hero">
        <div className="hero-media">
          <video muted autoPlay loop playsInline disablePictureInPicture disableRemotePlayback preload="metadata" poster="/assets/films/hero-poster.jpg" src="/assets/films/hero.mp4" aria-label="Dayana showing her copper hair by a lake in autumn" />
        </div>
        <div className="hero-copy dotted">
          <h1 className="wordmark hero-name">{creator.name}</h1>
          <p className="hero-role">{creator.role}</p>
          <ContactPills email />
        </div>
      </header>

      <section id="about" className="panel about" aria-labelledby="about-title">
        <div className="about-media">
          <Image src="/assets/headshot/headshot-main.jpg" alt="Dayana with long copper hair against a winter sky" fill sizes="(max-width: 760px) 100vw, 46vw" className="about-photo" />
          <dl className="stat-card">
            <div><dt>Followers</dt><dd>{creator.combinedFollowers}</dd></div>
            <div><dt>Views</dt><dd>Millions</dd></div>
            <div><dt>Years in copper</dt><dd>10+</dd></div>
          </dl>
        </div>
        <div className="about-copy" data-reveal>
          <p className="eyebrow">About me</p>
          <h2 id="about-title">Hi, brands!</h2>
          <p className="lede">Let people see your product work before they ever buy it.</p>
          <ul className="points">
            {points.map(({ icon: Icon, text }) => (
              <li key={text}><span className="point-icon"><Icon size={16} /></span><p>{text}</p></li>
            ))}
          </ul>
          <div className="about-foot">
            <p className="signature">Dayana</p>
            <a className="button" href="#contact">Let’s work together <ArrowRight size={16} /></a>
          </div>
        </div>
        <span className="clip" aria-hidden="true">
          <Image src="/assets/objects/copper-comb.png" alt="" width={640} height={480} sizes="(max-width: 760px) 170px, 330px" data-drop />
        </span>
      </section>

      <BrandStrip />
      <FilmLibrary />

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="receiver" aria-hidden="true">
          <span className="receiver-cord" />
          <Image src="/assets/objects/rose-receiver.png" alt="" width={366} height={550} sizes="(max-width: 760px) 90px, 170px" />
        </div>
        <div className="panel contact-card">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow">Get in touch</p>
            <h2 id="contact-title" ref={title} className={drawn ? "contact-title is-drawn" : "contact-title"}><mark>Let’s create content</mark> that brings your brand’s story to life.</h2>
            <a className="contact-email" href={"mailto:" + creator.email}>{creator.email} <ArrowUpRight size={22} /></a>
            <ContactPills />
          </div>
          <div className="contact-media">
            <Image src="/assets/films/utah-portrait.jpg" alt="Dayana among the red rocks of southern Utah" fill sizes="(max-width: 760px) 90vw, 32vw" />
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
