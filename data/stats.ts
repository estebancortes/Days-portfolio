import type { Locale } from "@/lib/i18n";

export type StatItem = {
  label: Record<Locale, string>;
  value: number;
  prefix?: string;
  suffix?: string;
};

export const heroStats: StatItem[] = [
  { label: { es: "seguidores", en: "followers" }, value: 800, prefix: "+" },
  { label: { es: "vistas (7 días)", en: "views (7 days)" }, value: 800, suffix: "k+" },
  { label: { es: "video más visto", en: "top video" }, value: 400, suffix: "k+" },
  { label: { es: "likes", en: "likes" }, value: 35, suffix: "k+" }
];
