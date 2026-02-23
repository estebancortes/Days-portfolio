import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n";

const highlights: Record<Locale, readonly string[]> = {
  es: [
    "Comenzó hace 1 mes con una estrategia clara de publicación diaria.",
    "Publica entre 1 y 3 piezas por día de forma consistente.",
    "Logra tracción viral cada 1–2 días con hooks fuertes y cierre claro.",
    "Optimiza cada video para retención: inicio rápido, prueba visual y ritmo dinámico.",
    "Su crecimiento orgánico en 2026 demuestra calidad creativa, no dependencia de ads."
  ],
  en: [
    "Started 1 month ago with a clear daily publishing strategy.",
    "Posts 1 to 3 pieces per day consistently.",
    "Gets viral traction every 1–2 days with strong hooks and clear closings.",
    "Optimizes every video for retention: quick start, visual proof, and dynamic pacing.",
    "Her organic growth in 2026 proves creative quality over ad dependence."
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
          title: "Momentum construido con consistencia, estructura y resultados visibles.",
          description:
            "En un mercado saturado, su diferenciador fue simple: contenido auténtico con dirección estratégica desde el primer día.",
          p1: "El sistema arrancó con una regla: publicar todos los días y medir retención por segundos, no por intuición. Cada pieza debía abrir con hook claro, promesa visual y payoff real para sostener watch time.",
          p2: "Ese enfoque convirtió un perfil nuevo en una cuenta con señales reales de conversión: preguntas técnicas, solicitudes de productos y conversaciones de compra en comentarios."
        }
      : {
          badge: "How it started",
          title: "Momentum built with consistency, structure, and visible results.",
          description:
            "In a saturated market, her edge was simple: authentic content with strategic direction from day one.",
          p1: "The system started with one rule: publish every day and measure retention by seconds, not intuition. Every piece had to open with a clear hook, visual promise, and real payoff to hold watch time.",
          p2: "That approach turned a new account into one with real conversion signals: technical questions, product requests, and purchase conversations in comments."
        };

  return (
    <section id="historia" className="section-divider py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Card className="h-full border-border/75 bg-card/85 p-7 md:p-9">
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{copy.p1}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{copy.p2}</p>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full border-border/75 bg-card/85 p-7 md:p-9">
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
