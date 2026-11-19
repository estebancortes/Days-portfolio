"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, GalleryHorizontalEnd, LayoutGrid, Play } from "lucide-react";
import { films } from "@/data/work-films";
import availableCovers from "@/data/film-covers.json";

gsap.registerPlugin(ScrollTrigger);

// Instagram blocks playback for this archived GRWM.
const playableFilms = films.filter(([id]) => id !== "Dfned_mS3at");
const covers = new Set(availableCovers);
const groups = ["UGC", "Color", "Tutorial", "Transformation", "Utah", "Original films"];
const filters = [
  { label: "UGC", match: ["UGC"] },
  { label: "Hair color", match: ["Color", "Transformation"] },
  { label: "Tutorial", match: ["Tutorial"] },
  { label: "Utah", match: ["Utah"] },
  { label: "Original films", match: ["Original films"] }
] as const;
type Film = typeof films[number];

// Only show play counts that help the pitch; small numbers on brand posts undersell the work.
const showViews = (views?: string) => !!views && (/[MK]$/.test(views) && parseFloat(views) >= (views.endsWith("M") ? 0 : 10));
const isOriginal = (film: Film) => film[2] === "Original films";
const posterFor = (film: Film) => isOriginal(film) ? `/assets/films/${film[0]}.jpg` : covers.has(film[0]) ? `/assets/film-covers/${film[0]}.jpg` : undefined;
const sourceFor = (film: Film) => isOriginal(film) ? `/assets/films/${film[0]}.mp4` : `/assets/reels/${film[0]}.mp4`;

export function FilmLibrary() {
  const [filter, setFilter] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; left: number } | null>(null);
  const moved = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  // Tiles rise in one after another: on first scroll into view, then again whenever the filter or view changes.
  const library = useRef<HTMLDivElement>(null);
  const seen = useRef(false);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const tiles = library.current?.querySelectorAll(".film");
      if (!tiles?.length) return;
      const visible = Array.from(tiles).slice(0, 12);
      gsap.from(visible, {
        y: 40, opacity: 0, duration: .75, ease: "power3.out", stagger: .07, clearProps: "transform,opacity",
        scrollTrigger: seen.current ? undefined : { trigger: library.current, start: "top 88%", onEnter: () => { seen.current = true; } }
      });
    });
    return () => media.revert();
  }, { dependencies: [filter, expanded], scope: library, revertOnUpdate: true });

  const { match } = filters[filter];
  const railFilms = playableFilms.filter(f => (match as readonly string[]).includes(f[2]));

  function reset() {
    setActive(null);
    setFailed(false);
  }
  function choose(index: number) {
    setFilter(index);
    setExpanded(false);
    reset();
    rail.current?.scrollTo({ left: 0 });
  }
  function toggleAll() {
    setExpanded(!expanded);
    reset();
    if (expanded) document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  }
  function scroll(direction: number) {
    const el = rail.current;
    const step = el?.firstElementChild?.getBoundingClientRect().width ?? 280;
    el?.scrollBy({ left: direction * (step + 24) * 2, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  function renderFilm(film: Film) {
    const [id, title, , subject, views] = film;
    const poster = posterFor(film);
    const playing = active === id && !failed;
    return (
      <article className="film" key={id}>
        <div className="film-frame">
          {playing ? (
            <video className="film-video" controls autoPlay playsInline poster={poster} src={sourceFor(film)} onError={() => setFailed(true)} />
          ) : (
            <button
              className="film-cover"
              onClick={() => { setActive(id); setFailed(false); }}
              aria-label={`Play ${title}, ${subject}`}
              style={poster ? { backgroundImage: `url("${poster}")` } : undefined}
            >
              {showViews(views) && <span className="film-views">{views} views</span>}
              <span className="film-play"><Play size={18} fill="currentColor" /></span>
            </button>
          )}
        </div>
        <h3>{title}</h3>
        <p className="film-subject">{subject}</p>
        {failed && active === id && <small role="status">Playback unavailable. Tap to retry.</small>}
      </article>
    );
  }

  return (
    <section id="work" className="work" aria-labelledby="portfolio-title">
      <Image className="pocket" src="/assets/objects/studio-pocket.png" alt="" width={700} height={700} sizes="(max-width: 760px) 150px, 340px" data-float="8" />
      <div className="section-head" data-reveal>
        <p className="eyebrow">Selected work</p>
        <h2 id="portfolio-title">Portfolio</h2>
      </div>

      <div className="filters" role="group" aria-label="Filter films by subject">
        {filters.map((f, i) => (
          <button key={f.label} type="button" className="filter" aria-pressed={!expanded && filter === i} onClick={() => choose(i)}>{f.label}</button>
        ))}
      </div>

      <div id="film-library" ref={library}>
        {expanded ? (
          groups.map(group => {
            const entries = playableFilms.filter(f => f[2] === group);
            return entries.length > 0 && (
              <section className="film-group" key={group} aria-label={group}>
                <h3 className="group-title">{group} <span>{entries.length}</span></h3>
                <div className="film-grid">{entries.map(renderFilm)}</div>
              </section>
            );
          })
        ) : (
          <div className="rail-window">
            <div
              ref={rail}
              className="film-rail"
              aria-label="Portfolio films"
              tabIndex={0}
              onScroll={e => {
                const wrapper = e.currentTarget.parentElement;
                if (!wrapper) return;
                wrapper.dataset.moving = "true";
                clearTimeout(timer.current);
                timer.current = setTimeout(() => delete wrapper.dataset.moving, 130);
              }}
              onPointerDown={e => {
                moved.current = false;
                if ((e.target as HTMLElement).closest("video")) return;
                if (e.pointerType === "mouse" && e.button === 0) drag.current = { x: e.clientX, left: e.currentTarget.scrollLeft };
              }}
              onPointerMove={e => {
                if (!drag.current || !(e.buttons & 1)) return;
                const distance = e.clientX - drag.current.x;
                if (Math.abs(distance) > 5) {
                  moved.current = true;
                  e.currentTarget.setPointerCapture(e.pointerId);
                  e.currentTarget.scrollLeft = drag.current.left - distance;
                }
              }}
              onPointerUp={() => { drag.current = null; }}
              onPointerCancel={() => { drag.current = null; }}
              onClickCapture={e => { if (moved.current && e.detail) { e.stopPropagation(); moved.current = false; } }}
            >
              {railFilms.map(renderFilm)}
            </div>
          </div>
        )}
      </div>

      <div className="rail-controls">
        {!expanded && <button type="button" className="icon-button" aria-label="Previous films" onClick={() => scroll(-1)}><ArrowLeft size={18} /></button>}
        <button type="button" className="button" aria-controls="film-library" aria-expanded={expanded} onClick={toggleAll}>
          {expanded ? <><GalleryHorizontalEnd size={16} /> Back to carousel</> : <><LayoutGrid size={16} /> View all {playableFilms.length} films</>}
        </button>
        {!expanded && <button type="button" className="icon-button" aria-label="Next films" onClick={() => scroll(1)}><ArrowRight size={18} /></button>}
      </div>
    </section>
  );
}
