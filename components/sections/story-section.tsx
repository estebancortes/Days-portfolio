import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";

const highlights: Record<Locale, readonly string[]> = {
  es: [
    "Empezó hace exactamente un mes.",
    "Publica contenido diario, entre 1 y 3 piezas por día.",
    "Cada 1 o 2 días logra un video con alcance viral.",
    "Su sistema se basa en hook fuerte, resultado visible y retención alta.",
    "Su crecimiento orgánico en 2026 valida la calidad del contenido, no el presupuesto en ads."
  ],
  en: [
    "She started exactly one month ago.",
    "She posts daily, between 1 and 3 pieces per day.",
    "Every 1 to 2 days, one video reaches viral-level traction.",
    "Her system is based on a strong hook, visible result, and high retention.",
    "Her organic growth in 2026 validates content quality, not ad spend."
  ]
};

type StorySectionProps = {
  locale: Locale;
};

export function StorySection({ locale }: StorySectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Cómo empezó",
          title: "Estrategia clara. Ejecución diaria. Resultados medibles.",
          description:
            "Todo comenzó hace un mes con una decisión simple: publicar contenido real todos los días y optimizar cada pieza para retención.",
          p1: "En lugar de perseguir tendencias sin dirección, construyó un proceso: primer segundo con intención, demostración visual clara y edición pensada para sostener atención hasta el final. Ese enfoque convirtió contenido orgánico en crecimiento acelerado.",
          p2: "Hoy, su portafolio demuestra que en 2026 todavía se puede crecer rápido en belleza cuando el contenido combina autenticidad, estructura y resultados que la audiencia puede validar por sí misma."
        }
      : {
          badge: "How it started",
          title: "Clear strategy. Daily execution. Measurable results.",
          description:
            "It all started one month ago with one simple decision: publish real content every day and optimize each piece for retention.",
          p1: "Instead of chasing trends without direction, she built a process: intention in the first second, clear visual proof, and editing designed to hold attention until the end. That approach turned organic content into accelerated growth.",
          p2: "Today, her portfolio proves that in 2026 you can still grow fast in beauty when content combines authenticity, structure, and results the audience can validate on their own."
        };

  return (
    <section id="historia" className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <Card className="h-full p-7 md:p-9">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{copy.p1}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{copy.p2}</p>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="h-full p-7 md:p-9">
              <ul className="space-y-4">
                {highlights[locale].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
