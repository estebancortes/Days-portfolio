import Image from "next/image";
import { Sparkles } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { blurDataURL } from "@/lib/blur";
import type { Locale } from "@/lib/i18n";

const characteristics: Record<Locale, readonly string[]> = {
  es: [
    "Transformaciones antes y después",
    "Resultados reales en luz natural",
    "Actualizaciones post uso (día 3, día 7)",
    "Reseñas auténticas",
    "Formato nativo optimizado para retención"
  ],
  en: [
    "Before-and-after transformations",
    "Real results in natural light",
    "Post-use updates (day 3, day 7)",
    "Authentic reviews",
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
          title: "Sobre mí",
          alt: "Headshot de creadora UGC de belleza",
          p1: "Soy creadora de contenido UGC especializada en cabello, maquillaje y skincare, con un enfoque fuerte en transformaciones reales y reseñas honestas.",
          p2: "En menos de un mes construí una comunidad de más de 800 seguidores, generando más de 800,000 vistas en los últimos 7 días y superando las 35,000 interacciones totales.",
          p3: "Mi video más visto supera las 400,000 vistas orgánicas.",
          label: "Mi contenido se caracteriza por:",
          close: "No creo anuncios tradicionales.",
          close2: "Creo contenido que se siente real y genera confianza."
        }
      : {
          badge: "About me",
          title: "About me",
          alt: "Headshot of UGC beauty creator",
          p1: "I am a UGC content creator specialized in hair, makeup, and skincare, with a strong focus on real transformations and honest reviews.",
          p2: "In less than a month, I built a community of 800+ followers, generated 800,000+ views in the last 7 days, and surpassed 35,000 total interactions.",
          p3: "My top-performing video has over 400,000 organic views.",
          label: "My content is defined by:",
          close: "I don't create traditional ads.",
          close2: "I create content that feels real and builds trust."
        };

  return (
    <section id="sobre-mi" className="bg-soft-radial py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Card className="overflow-hidden p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src="/assets/headshot/headshot-main.jpg"
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
            <Card className="h-full p-7 md:p-9">
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
