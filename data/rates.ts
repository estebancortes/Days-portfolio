import type { Locale } from "@/lib/i18n";

export const rateItems: Array<{ service: Record<Locale, string>; price: string }> = [
  { service: { es: "1 Video UGC (15–45s)", en: "1 UGC Video (15–45s)" }, price: "$150" },
  { service: { es: "Video + 30 días ads", en: "Video + 30 days ads" }, price: "$250" },
  { service: { es: "Paquete 3 videos", en: "3-video package" }, price: "$400" },
  { service: { es: "Raw footage", en: "Raw footage" }, price: "+$100" },
  { service: { es: "Variantes hook", en: "Hook variants" }, price: "+$75" }
];
