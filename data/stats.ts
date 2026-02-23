import type { Locale } from "@/lib/i18n";

export type LocalizedLabel = Record<Locale, string>;

export type StatItem = {
  label: LocalizedLabel;
  value: number;
  prefix?: string;
  suffix?: string;
};

export type PerformanceItem = {
  label: LocalizedLabel;
  value: string;
  helper?: LocalizedLabel;
};

export type AudienceBar = {
  label: LocalizedLabel;
  percentage: number;
  valueLabel: string;
};

export type ProofItem = {
  image: string;
  alt: LocalizedLabel;
  caption: LocalizedLabel;
};

export const heroStats: StatItem[] = [
  { label: { es: "seguidores totales", en: "total followers" }, value: 817 },
  { label: { es: "vistas (7 días)", en: "views (7 days)" }, value: 826, suffix: "k" },
  { label: { es: "likes (7 días)", en: "likes (7 days)" }, value: 26, suffix: "k" },
  { label: { es: "shares (7 días)", en: "shares (7 days)" }, value: 1417 }
];

export const performanceStats: PerformanceItem[] = [
  {
    label: { es: "Followers totales", en: "Total followers" },
    value: "817",
    helper: { es: "+594 netos (28 días)", en: "+594 net (28 days)" }
  },
  {
    label: { es: "Views (últimos 7 días)", en: "Views (last 7 days)" },
    value: "826K"
  },
  {
    label: { es: "Profile views (7 días)", en: "Profile views (7 days)" },
    value: "13K"
  },
  {
    label: { es: "Likes / Comments / Shares", en: "Likes / Comments / Shares" },
    value: "26K / 321 / 1,417"
  },
  {
    label: { es: "Tráfico For You", en: "For You traffic" },
    value: "91.5%"
  },
  {
    label: { es: "Engagement rate (28 días)", en: "Engagement rate (28 days)" },
    value: "~4.04%"
  }
];

export const audienceGenderBars: AudienceBar[] = [
  {
    label: { es: "Mujeres", en: "Women" },
    percentage: 90,
    valueLabel: "~90%"
  },
  {
    label: { es: "Hombres", en: "Men" },
    percentage: 10,
    valueLabel: "~10%"
  }
];

export const audienceAgeBars: AudienceBar[] = [
  {
    label: { es: "18–24", en: "18–24" },
    percentage: 30,
    valueLabel: "30%"
  },
  {
    label: { es: "25–34", en: "25–34" },
    percentage: 50,
    valueLabel: "50%"
  },
  {
    label: { es: "35–44", en: "35–44" },
    percentage: 20,
    valueLabel: "20%"
  }
];

export const audienceCountries: Record<Locale, readonly string[]> = {
  es: ["United States", "México", "Colombia"],
  en: ["United States", "Mexico", "Colombia"]
};

export const analyticsCards: Record<
  Locale,
  Array<{ title: string; metric: string; image: string; alt: string }>
> = {
  es: [
    {
      title: "Views últimos 7 días",
      metric: "826K",
      image: "/assets/analytics/analytics-7days.jpg",
      alt: "Captura de analíticas con 826K vistas en 7 días"
    },
    {
      title: "Crecimiento de followers",
      metric: "+594 netos (28 días)",
      image: "/assets/analytics/analytics-followers.jpg",
      alt: "Captura de crecimiento de seguidores en 28 días"
    },
    {
      title: "Interacciones",
      metric: "26K likes (7 días)",
      image: "/assets/analytics/analytics-total-likes.jpg",
      alt: "Captura de likes totales en los últimos 7 días"
    },
    {
      title: "Profile views",
      metric: "13K",
      image: "/assets/analytics/analytics-profile.jpg",
      alt: "Captura de vistas de perfil en 7 días"
    }
  ],
  en: [
    {
      title: "Last 7 days views",
      metric: "826K",
      image: "/assets/analytics/analytics-7days.jpg",
      alt: "Analytics screenshot with 826K views in 7 days"
    },
    {
      title: "Follower growth",
      metric: "+594 net (28 days)",
      image: "/assets/analytics/analytics-followers.jpg",
      alt: "Follower growth screenshot over 28 days"
    },
    {
      title: "Interactions",
      metric: "26K likes (7 days)",
      image: "/assets/analytics/analytics-total-likes.jpg",
      alt: "Likes screenshot in the last 7 days"
    },
    {
      title: "Profile views",
      metric: "13K",
      image: "/assets/analytics/analytics-profile.jpg",
      alt: "Profile views screenshot in 7 days"
    }
  ]
};

export const contentMix: Record<Locale, readonly string[]> = {
  es: [
    "Últimos 10 videos: 7 cabello, 1 skincare, 1 pestañas, resto beauty/lifestyle.",
    "Formato dominante: before/after + tutorial paso a paso.",
    "Posicionamiento: transformaciones + voz latina + soluciones accesibles."
  ],
  en: [
    "Last 10 videos: 7 hair, 1 skincare, 1 lash, remaining beauty/lifestyle.",
    "Dominant format: before/after plus step-by-step tutorial.",
    "Positioning: transformations + Latina beauty voice + accessible solutions."
  ]
};

export const proofCards: ProofItem[] = [
  {
    image: "/assets/proof/proof.jpg",
    alt: {
      es: "Captura de comentarios con preguntas sobre tono, marca y fórmula",
      en: "Comment screenshot with questions about tone, brand, and formula"
    },
    caption: {
      es: "Preguntas sobre tono, marca y fórmula -> intención de compra",
      en: "Questions about shade, brand, and formula -> purchase intent"
    }
  },
  {
    image: "/assets/proof/proof2.jpg",
    alt: {
      es: "Captura de comentarios solicitando el paso a paso",
      en: "Comment screenshot requesting step-by-step instructions"
    },
    caption: {
      es: "Piden paso a paso y dónde comprar -> alto interés",
      en: "Requests for step-by-step and where to buy -> high intent"
    }
  },
  {
    image: "/assets/proof/proof3.jpg",
    alt: {
      es: "Captura de comentarios con consultas técnicas",
      en: "Comment screenshot with technical questions"
    },
    caption: {
      es: "Consultas técnicas (volumen/peróxido) -> audiencia cualificada",
      en: "Technical questions (volume/peroxide) -> qualified audience"
    }
  },
  {
    image: "/assets/proof/proof4.jpg",
    alt: {
      es: "Captura de comentarios sobre recomendaciones de compra",
      en: "Comment screenshot about buying recommendations"
    },
    caption: {
      es: "Comentarios de guardado y compra -> señal de conversión",
      en: "Save and purchase comments -> conversion signal"
    }
  }
];
