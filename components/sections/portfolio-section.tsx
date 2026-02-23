"use client";

import Image from "next/image";
import { ExternalLink, PlayCircle } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { portfolioItems, portfolioTypeLabel } from "@/data/portfolio";
import { blurDataURL } from "@/lib/blur";
import type { Locale } from "@/lib/i18n";

type PortfolioSectionProps = {
  locale: Locale;
};

export function PortfolioSection({ locale }: PortfolioSectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Portafolio",
          title: "Piezas editoriales diseñadas para atención, confianza e intención.",
          description:
            "Selección de videos en cabello, skincare, pestañas y lifestyle con foco en retención y conversión.",
          openAria: "Abrir",
          thumbnailAlt: "Thumbnail de",
          modalAlt: "Imagen ampliada de",
          views: "vistas",
          likes: "likes",
          desc: "Descripción",
          objective: "Objetivo del video",
          solved: "Problema que resuelve",
          watchTikTok: "Ver en TikTok"
        }
      : {
          badge: "Portfolio",
          title: "Editorial pieces built for attention, trust, and intent.",
          description:
            "Selected videos in hair, skincare, lashes, and lifestyle focused on retention and conversion.",
          openAria: "Open",
          thumbnailAlt: "Thumbnail of",
          modalAlt: "Large image of",
          views: "views",
          likes: "likes",
          desc: "Description",
          objective: "Video objective",
          solved: "Problem solved",
          watchTikTok: "Watch on TikTok"
        };

  return (
    <section id="portafolio" className="section-divider py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group block w-full text-left"
                    aria-label={`${copy.openAria} ${item.title[locale]}`}
                  >
                    <Card className="overflow-hidden border-border/70 bg-card/90">
                      <div className="relative aspect-[9/16] overflow-hidden rounded-none">
                        <Image
                          src={item.image}
                          alt={`${copy.thumbnailAlt} ${item.title[locale]}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          placeholder="blur"
                          blurDataURL={blurDataURL}
                        />
                        <div className="absolute inset-x-0 top-0 flex justify-between p-3">
                          <Badge variant="secondary" className="bg-background/85">
                            {portfolioTypeLabel[locale][item.type]}
                          </Badge>
                          <span className="rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
                            {item.views} {copy.views}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-4">
                        <div>
                          <p className="font-semibold text-foreground">{item.title[locale]}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.likes} {copy.likes}
                          </p>
                        </div>
                        <PlayCircle className="h-5 w-5 text-primary" />
                      </div>
                    </Card>
                  </button>
                </DialogTrigger>

                <DialogContent>
                  <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-muted/50">
                      <Image
                        src={item.image}
                        alt={`${copy.modalAlt} ${item.title[locale]}`}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                      />
                    </div>
                    <div>
                      <DialogHeader>
                        <DialogTitle>{item.title[locale]}</DialogTitle>
                        <DialogDescription>
                          {portfolioTypeLabel[locale][item.type]} · {item.views} {copy.views} · {item.likes} {copy.likes}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                        <div>
                          <p className="mb-1 font-semibold text-foreground">{copy.desc}</p>
                          <p>{item.description[locale]}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-semibold text-foreground">{copy.objective}</p>
                          <p>{item.objective[locale]}</p>
                        </div>
                        <div>
                          <p className="mb-1 font-semibold text-foreground">{copy.solved}</p>
                          <p>{item.problemSolved[locale]}</p>
                        </div>
                      </div>
                      <Button asChild className="mt-6">
                        <a href={item.tiktokUrl} target="_blank" rel="noreferrer noopener">
                          {copy.watchTikTok}
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
