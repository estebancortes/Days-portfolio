export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";

export const localeLabel: Record<Locale, string> = {
  es: "ES",
  en: "EN"
};

export function toggleLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
