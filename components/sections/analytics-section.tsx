import Image from "next/image";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Card } from "@/components/ui/card";
import { blurDataURL } from "@/lib/blur";
import type { Locale } from "@/lib/i18n";

const analyticsCards: Record<
  Locale,
  Array<{ title: string; metric: string; image: string; alt: string }>
> = {
  es: [
    {
      title: "Video top",
      metric: "400k+ vistas",
      image: "/assets/analytics/analytics-video-top.jpg",
      alt: "Captura analítica del video más visto con más de 400 mil vistas"
    },
    {
      title: "Últimos 7 días",
      metric: "800k+ vistas",
      image: "/assets/analytics/analytics-7days.jpg",
      alt: "Captura analítica de vistas acumuladas en 7 días"
    },
    {
      title: "Interacciones",
      metric: "35k+ likes",
      image: "/assets/analytics/analytics-likes.jpg",
      alt: "Captura analítica de likes totales del perfil"
    },
    {
      title: "Comunidad",
      metric: "800+ seguidores",
      image: "/assets/analytics/analytics-followers.jpg",
      alt: "Captura analítica de crecimiento orgánico de seguidores"
    }
  ],
  en: [
    {
      title: "Top video",
      metric: "400k+ views",
      image: "/assets/analytics/analytics-video-top.jpg",
      alt: "Analytics screenshot of the top-performing video with over 400k views"
    },
    {
      title: "Last 7 days",
      metric: "800k+ views",
      image: "/assets/analytics/analytics-7days.jpg",
      alt: "Analytics screenshot of accumulated views in 7 days"
    },
    {
      title: "Engagement",
      metric: "35k+ likes",
      image: "/assets/analytics/analytics-likes.jpg",
      alt: "Analytics screenshot of total profile likes"
    },
    {
      title: "Community",
      metric: "800+ followers",
      image: "/assets/analytics/analytics-followers.jpg",
      alt: "Analytics screenshot of organic follower growth"
    }
  ]
};

type AnalyticsSectionProps = {
  locale: Locale;
};

export function AnalyticsSection({ locale }: AnalyticsSectionProps) {
  const copy =
    locale === "es"
      ? {
          badge: "Resultados",
          title: "Performance orgánico respaldado por datos reales",
          description:
            "Las métricas se presentan en formato limpio para mostrar alcance, constancia y calidad de interacción en tiempo real."
        }
      : {
          badge: "Results",
          title: "Organic performance backed by real data",
          description:
            "Metrics are presented in a clean format to show reach, consistency, and engagement quality in real time."
        };

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <SectionHeading badge={copy.badge} title={copy.title} description={copy.description} />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {analyticsCards[locale].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Card className="overflow-hidden p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold md:text-lg">{item.title}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.metric}
                  </span>
                </div>
                <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-xl border border-border bg-muted/30 p-2 shadow-sm">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-contain"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
