"use client";

import { FormEvent, useMemo, useState } from "react";
import { Mail, Sparkles, ExternalLink } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
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
              "Disponible para campañas orgánicas, ads UGC y paquetes mensuales.",
            namePlaceholder: "Nombre",
            emailPlaceholder: "Email",
            msgPlaceholder: "Cuéntame sobre tu marca, objetivos y tipo de colaboración.",
            submit: "Enviar propuesta por email",
            subjectPrefix: "Colaboración UGC",
            subjectFallback: "Marca",
            mailGreet: "Hola",
            mailName: "Mi nombre es",
            mailEmail: "Correo",
            mailMessage: "Mensaje"
          }
        : {
            badge: "Contact",
            title: "I'm available for collaborations with beauty brands.",
            description:
              "Share your brief and goals. I reply with proposal, timeline, and deliverables.",
            cardTitle: "Professional contact",
            availability:
              "Available for organic campaigns, UGC ads, and monthly packages.",
            namePlaceholder: "Name",
            emailPlaceholder: "Email",
            msgPlaceholder: "Tell me about your brand, goals, and collaboration type.",
            submit: "Send proposal by email",
            subjectPrefix: "UGC collaboration",
            subjectFallback: "Brand",
            mailGreet: "Hi",
            mailName: "My name is",
            mailEmail: "Email",
            mailMessage: "Message"
          },
    [locale]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`${copy.subjectPrefix} - ${name || copy.subjectFallback}`);
    const body = encodeURIComponent(
      `${copy.mailGreet},\n\n${copy.mailName} ${name || ""}.\n${copy.mailEmail}: ${email || ""}\n\n${copy.mailMessage}:\n${message || ""}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading
            badge={copy.badge}
            title={copy.title}
            description={copy.description}
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full p-7 md:p-8">
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
              <p className="mt-6 rounded-xl bg-primary/10 p-4 text-sm text-primary">
                <Sparkles className="mr-1 inline h-4 w-4" />
                {copy.availability}
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-7 md:p-8">
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
