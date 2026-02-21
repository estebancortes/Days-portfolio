"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
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
            title: "UGC que se siente real. Y convierte.",
            subtitle: "Cabello • Maquillaje • Skincare",
            subtitle2: "Contenido nativo optimizado para TikTok y Reels.",
            paragraph:
              "En solo 30 días construí una audiencia real en 2026, generando más de 800,000 vistas en una semana con contenido orgánico estratégico.",
            ctaPrimary: "Ver Portafolio",
            ctaSecondary: "Descargar Media Kit",
            coverAlt: "Banner principal de portafolio UGC beauty",
            sampleAlt: "Muestra de contenido UGC",
            creatorLabel: "UGC Beauty Creator · 2026"
          }
        : {
            title: "UGC that feels real. And converts.",
            subtitle: "Hair • Makeup • Skincare",
            subtitle2: "Native content optimized for TikTok and Reels.",
            paragraph:
              "In just 30 days, I built a real audience in 2026, generating over 800,000 views in one week with strategic organic content.",
            ctaPrimary: "View Portfolio",
            ctaSecondary: "Download Media Kit",
            coverAlt: "Main banner for UGC beauty portfolio",
            sampleAlt: "UGC content sample",
            creatorLabel: "UGC Beauty Creator · 2026"
          },
    [locale]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/85 via-background/95 to-background" />

      <div className="container pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-4 inline-flex rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {copy.creatorLabel}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-5 text-base font-medium text-muted-foreground md:text-xl">
              {copy.subtitle}
              <br />
              {copy.subtitle2}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {copy.paragraph}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#portafolio">
                  {copy.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="/assets/media-kit/media-kit.pdf" download>
                  {copy.ctaSecondary}
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative overflow-hidden rounded-[2.4rem] border border-border bg-card p-2.5 shadow-soft">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
              <div className="relative aspect-[9/18] overflow-hidden rounded-[2rem] bg-muted">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroImages[activeImage]}
                    initial={{ opacity: 0.25, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.25, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full bg-card/90 p-5">
                <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label[locale]}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
