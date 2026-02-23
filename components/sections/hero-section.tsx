"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { heroStats } from "@/data/stats";
import { blurDataURL } from "@/lib/blur";
import type { Locale } from "@/lib/i18n";

const heroImages = [
  "/assets/hero/hero-01.jpg",
  "/assets/hero/hero-02.jpg",
  "/assets/hero/hero-03.jpg",
  "/assets/hero/hero-04.jpg"
];

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const [activeImage, setActiveImage] = useState(0);

  const copy = useMemo(
    () =>
      locale === "es"
        ? {
            overline: "Daypaez · UGC Beauty Editorial",
            title: "UGC que se siente real. Y convierte.",
            subtitle:
              "Cabello • Maquillaje • Skincare | Transformaciones reales, contenido nativo para TikTok y Reels.",
            paragraph:
              "Empecé hace 1 mes. Publico de 1 a 3 veces por día, con videos virales cada 1 o 2 días. En los últimos 7 días alcancé 826K vistas con crecimiento orgánico sostenido.",
            ctaPrimary: "Ver Portafolio",
            ctaSecondary: "Descargar Media Kit (PDF)",
            coverAlt: "Banner editorial de Daypaez para portafolio UGC beauty",
            sampleAlt: "Muestra de contenido UGC",
            note: "Voice-led UGC para marcas de belleza que quieren conversión sin perder naturalidad.",
            statLabel: "Momentum orgánico en 30 días"
          }
        : {
            overline: "Daypaez · UGC Beauty Editorial",
            title: "UGC that feels real. And converts.",
            subtitle:
              "Hair • Makeup • Skincare | Real transformations, native content for TikTok and Reels.",
            paragraph:
              "I started 1 month ago. I post 1 to 3 times per day, with viral hits every 1 to 2 days. In the last 7 days, I reached 826K views with sustained organic growth.",
            ctaPrimary: "View Portfolio",
            ctaSecondary: "Download Media Kit (PDF)",
            coverAlt: "Editorial banner for Daypaez UGC beauty portfolio",
            sampleAlt: "UGC content sample",
            note: "Voice-led UGC for beauty brands that want conversion without losing authenticity.",
            statLabel: "30-day organic momentum"
          },
    [locale]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 2600);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden pb-14 pt-28 md:pb-20">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/cover-main.jpg"
          alt={copy.coverAlt}
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
      <div className="grain-overlay absolute inset-0 -z-10 bg-gradient-to-b from-background/78 via-background/93 to-background" />

      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary/85">
              {copy.overline}
            </p>
            <div className="editorial-line mb-5" />
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-muted-foreground md:text-lg">
              {copy.subtitle}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {copy.paragraph}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <a href="#portafolio">
                  {copy.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/media-kit.pdf" target="_blank" rel="noreferrer noopener">
                  {copy.ctaSecondary}
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              {copy.note}
            </p>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-[2.4rem] border border-border/90 bg-card/85 p-3 shadow-soft backdrop-blur-sm">
              <div className="relative aspect-[9/18] overflow-hidden rounded-[2rem] border border-border/70 bg-muted">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroImages[activeImage]}
                    initial={{ opacity: 0.2, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.2, scale: 0.95 }}
                    transition={{ duration: 0.55 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[activeImage]}
                      alt={`${copy.sampleAlt} ${activeImage + 1}`}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="mt-3 rounded-2xl border border-border/70 bg-background/80 px-4 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary/85">
                  {copy.statLabel}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label[locale]}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Card className="h-full border-border/70 bg-card/92 p-5 backdrop-blur-sm">
                <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label[locale]}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
