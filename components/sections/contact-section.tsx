"use client";

import { FormEvent, useMemo, useState } from "react";
import { ExternalLink, Mail, Sparkles } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type ContactSectionProps = {
  locale: Locale;
};

export function ContactSection({ locale }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const copy = useMemo(
    () =>
      locale === "es"
        ? {
            badge: "Contacto",
            title: "Estoy disponible para colaboraciones con marcas de belleza.",
            description:
              "Compárteme tu brief y objetivos. Respondo con propuesta, tiempos y entregables.",
            cardTitle: "Contacto profesional",
            availability:
              "Disponible para UGC orgánico, UGC ads, formatos before/after y paquetes mensuales.",
            quickCTA: "Enviar Brand Inquiry",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Email",
            msgPlaceholder: "Cuéntame sobre tu marca, objetivos, producto y tipo de colaboración.",
            submit: "Enviar propuesta por email",
            subject: "UGC Collaboration — Daypaez",
            subjectPrefix: "UGC Collaboration — Daypaez",
            subjectFallback: "Marca",
            mailGreet: "Hola",
            mailName: "Mi nombre es",
            mailEmail: "Correo",
            mailMessage: "Mensaje",
            accordionTitle: "Brand Inquiry",
            q1: "¿Cuál es el brief y objetivo principal?",
            a1: "Incluye objetivo de negocio (awareness, conversion, affiliates), producto clave y mensaje que debe quedarse en la audiencia.",
            q2: "¿Cuál es la fecha de entrega ideal?",
            a2: "La ventana base es 3–5 días hábiles. Para urgencias, incluye deadline final y fecha de feedback.",
            q3: "¿Qué derechos de uso necesitan?",
            a3: "Uso orgánico incluido. Para paid ads, indicar duración estimada (30–180 días) y plataformas.",
            q4: "¿Qué entregables necesitan?",
            a4: "Define cantidad de videos, variaciones de hook, raw footage y versión final por formato/plataforma."
          }
        : {
            badge: "Contact",
            title: "I’m available for collaborations with beauty brands.",
            description:
              "Share your brief and goals. I reply with proposal, timeline, and deliverables.",
            cardTitle: "Professional contact",
            availability:
              "Available for organic UGC, UGC ads, before/after formats, and monthly retainers.",
            quickCTA: "Send Brand Inquiry",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            msgPlaceholder: "Tell me about your brand, goals, product, and collaboration type.",
            submit: "Send proposal by email",
            subject: "UGC Collaboration — Daypaez",
            subjectPrefix: "UGC Collaboration — Daypaez",
            subjectFallback: "Brand",
            mailGreet: "Hi",
            mailName: "My name is",
            mailEmail: "Email",
            mailMessage: "Message",
            accordionTitle: "Brand Inquiry",
            q1: "What is the brief and primary objective?",
            a1: "Include business goal (awareness, conversion, affiliates), hero product, and core message for the audience.",
            q2: "What is your ideal delivery timeline?",
            a2: "Base timeline is 3–5 business days. For rush requests, include final deadline and feedback date.",
            q3: "What usage rights do you need?",
            a3: "Organic usage included. For paid ads, specify estimated duration (30–180 days) and platforms.",
            q4: "What deliverables do you need?",
            a4: "Define number of videos, hook variations, raw footage, and final versions by format/platform."
          },
    [locale]
  );

  const quickMailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(copy.subject)}`;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`${copy.subjectPrefix} - ${name || copy.subjectFallback}`);
    const body = encodeURIComponent(
      `${copy.mailGreet},\n\n${copy.mailName} ${name || ""}.\n${copy.mailEmail}: ${email || ""}\n\n${copy.mailMessage}:\n${message || ""}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="section-divider py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="h-full border-border/75 bg-card/90 p-7 md:p-8">
              <h3 className="font-display text-2xl font-semibold">{copy.cardTitle}</h3>
              <div className="mt-5 space-y-4 text-sm text-muted-foreground md:text-base">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:bg-accent"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border p-3 transition-colors hover:bg-accent"
                >
                  <ExternalLink className="h-4 w-4 text-primary" />
                  {siteConfig.tiktokHandle}
                </a>
              </div>

              <Button asChild className="mt-5 w-full sm:w-auto">
                <a href={quickMailto}>{copy.quickCTA}</a>
              </Button>

              <p className="mt-6 rounded-xl bg-primary/10 p-4 text-sm text-primary">
                <Sparkles className="mr-1 inline h-4 w-4" />
                {copy.availability}
              </p>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{copy.accordionTitle}</p>
                <Accordion type="single" collapsible className="mt-2">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{copy.q1}</AccordionTrigger>
                    <AccordionContent>{copy.a1}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>{copy.q2}</AccordionTrigger>
                    <AccordionContent>{copy.a2}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>{copy.q3}</AccordionTrigger>
                    <AccordionContent>{copy.a3}</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>{copy.q4}</AccordionTrigger>
                    <AccordionContent>{copy.a4}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="border-border/75 bg-card/90 p-7 md:p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    required
                    placeholder={copy.namePlaceholder}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <Input
                    required
                    type="email"
                    placeholder={copy.emailPlaceholder}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <Textarea
                  required
                  placeholder={copy.msgPlaceholder}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {copy.submit}
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
