import Image from "next/image";
import { Sparkles } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { blurDataURL } from "@/lib/blur";
import type { Locale } from "@/lib/i18n";

const characteristics: Record<Locale, readonly string[]> = {
  es: [
    "Transformaciones antes y después con resultado visible",
    "Tutoriales paso a paso orientados a guardados",
    "Reseñas honestas con contexto de uso real",
    "Actualizaciones post-uso (día 3 / día 7)",
    "Formato nativo optimizado para retención"
  ],
  en: [
    "Before-and-after transformations with visible outcomes",
    "Step-by-step tutorials optimized for saves",
    "Honest reviews with real-use context",
    "Post-use updates (day 3 / day 7)",
    "Native format optimized for retention"
  ]
};

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Sobre mí",
          title: "Creadora UGC enfocada en transformación + credibilidad.",
          alt: "Headshot principal de Daypaez",
          p1: "Soy Daypaez, creadora UGC especializada en cabello, maquillaje y skincare con una voz latina y enfoque en resultados reales.",
          p2: "En 30 días construí una comunidad de 817 seguidores, con +594 netos en 28 días y 826K vistas en los últimos 7 días.",
          p3: "Mi audiencia es mayoría mujeres (~90%) entre 18 y 44 años, principalmente en United States, México y Colombia.",
          label: "Mi contenido se diferencia por:",
          close: "No produzco anuncios genéricos.",
          close2: "Creo piezas nativas que generan confianza e intención de compra."
        }
      : {
          badge: "About",
          title: "UGC creator focused on transformation and credibility.",
          alt: "Main headshot of Daypaez",
          p1: "I am Daypaez, a UGC creator specialized in hair, makeup, and skincare with a Latina voice and a real-results approach.",
          p2: "In 30 days, I built a community of 817 followers, with +594 net in 28 days and 826K views in the last 7 days.",
          p3: "My audience is mostly women (~90%) between 18 and 44, mainly in the United States, Mexico, and Colombia.",
          label: "My content stands out for:",
          close: "I do not produce generic ads.",
          close2: "I build native pieces that drive trust and purchase intent."
        };

  return (
    <section id="sobre-mi" className="section-divider py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Card className="overflow-hidden border-border/75 bg-card/88 p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/assets/headshot/headshot-main.png"
                  alt={copy.alt}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full border-border/75 bg-card/88 p-7 md:p-9">
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>{copy.p1}</p>
                <p>{copy.p2}</p>
                <p>{copy.p3}</p>
                <div>
                  <p className="mb-3 font-semibold text-foreground">{copy.label}</p>
                  <ul className="space-y-2">
                    {characteristics[locale].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="pt-2 text-base font-semibold text-foreground md:text-lg">
                  {copy.close}
                  <br />
                  {copy.close2}
                </p>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
