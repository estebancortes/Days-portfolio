import type { Locale } from "@/lib/i18n";

export type PortfolioType = "transformation" | "review" | "tutorial" | "lifestyle";

type LocalizedString = Record<Locale, string>;

export type PortfolioItem = {
  id: string;
  title: LocalizedString;
  type: PortfolioType;
  views: string;
  likes: string;
  image: string;
  description: LocalizedString;
  objective: LocalizedString;
  problemSolved: LocalizedString;
  tiktokUrl: string;
};

export const portfolioTypeLabel: Record<Locale, Record<PortfolioType, string>> = {
  es: {
    transformation: "Transformación",
    review: "Review",
    tutorial: "Tutorial",
    lifestyle: "Lifestyle"
  },
  en: {
    transformation: "Transformation",
    review: "Review",
    tutorial: "Tutorial",
    lifestyle: "Lifestyle"
  }
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: { es: "Cambio de look en casa", en: "At-home look transformation" },
    type: "transformation",
    views: "56k",
    likes: "1.4k",
    image: "/assets/portfolio/portfolio-transformacion-01.jpg",
    description: {
      es: "Cambio de tono cobrizo mostrando proceso real y resultado final con close-ups en luz natural.",
      en: "Copper tone change showing the real process and final result with natural-light close-ups."
    },
    objective: {
      es: "Captar atención en los primeros segundos con prueba visual de transformación.",
      en: "Capture attention in the first seconds with visual transformation proof."
    },
    problemSolved: {
      es: "Ayuda a validar si el resultado final coincide con lo que promete el producto.",
      en: "Helps validate if the final result matches the product promise."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  },
  {
    id: "p2",
    title: { es: "Antes y después", en: "Before and after" },
    type: "transformation",
    views: "10k",
    likes: "300",
    image: "/assets/portfolio/portfolio-transformacion-02.jpg",
    description: {
      es: "Comparativa directa antes/después con luz natural y close-ups para validar el resultado.",
      en: "Direct before/after comparison in natural light with close-ups to validate results."
    },
    objective: {
      es: "Aumentar retención con prueba visual inmediata y cierre con CTA.",
      en: "Increase retention with immediate visual proof and a closing CTA."
    },
    problemSolved: {
      es: "Ayuda a identificar si un producto realmente da resultados.",
      en: "Helps identify whether a product truly delivers results."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  },
  {
    id: "p3",
    title: { es: "Review honesta pestañas", en: "Honest lash review" },
    type: "review",
    views: "1k",
    likes: "20",
    image: "/assets/portfolio/portfolio-review-01.jpg",
    description: {
      es: "Reseña sin filtros con aplicación en cámara y opinión de pestañas de TikTok Shop.",
      en: "Unfiltered review with on-camera application and opinion on TikTok Shop lashes."
    },
    objective: {
      es: "Construir confianza con feedback auténtico de uso real.",
      en: "Build trust with authentic real-use feedback."
    },
    problemSolved: {
      es: "Aclara si las pestañas dan el efecto deseado.",
      en: "Clarifies whether lashes deliver the expected effect."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  },
  {
    id: "p4",
    title: { es: "Update día 3", en: "Day 3 update" },
    type: "review",
    views: "10k",
    likes: "360",
    image: "/assets/portfolio/portfolio-update-01.jpg",
    description: {
      es: "Seguimiento de producto para mostrar evolución real y consistencia.",
      en: "Product follow-up to show real evolution and consistency."
    },
    objective: {
      es: "Sostener interés con narrativa de progreso y expectativa.",
      en: "Sustain interest through a progress-driven narrative and expectation."
    },
    problemSolved: {
      es: "Responde cómo se ve el producto después de varios días de aplicación.",
      en: "Answers how the product looks after several days of use."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  },
  {
    id: "p5",
    title: { es: "Skincare natural de diario", en: "Daily natural skincare" },
    type: "tutorial",
    views: "2k",
    likes: "21",
    image: "/assets/portfolio/portfolio-makeup-01.jpg",
    description: {
      es: "Tutorial práctico de skincare y productos accesibles.",
      en: "Practical skincare tutorial with accessible products."
    },
    objective: {
      es: "Posicionar formatos educativos con potencial de guardados.",
      en: "Position educational formats with strong save potential."
    },
    problemSolved: {
      es: "Facilita una rutina de skincare simple para poco tiempo.",
      en: "Makes a simple skincare routine easier for limited time."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  },
  {
    id: "p6",
    title: {
      es: "Paso a paso de tintura de cabello copper",
      en: "Copper hair dye step by step"
    },
    type: "tutorial",
    views: "7k",
    likes: "231",
    image: "/assets/portfolio/portfolio-skincare-01.jpg",
    description: {
      es: "Secuencia de tintura explicada en lenguaje simple y ritmo dinámico.",
      en: "Dye sequence explained in simple language and dynamic rhythm."
    },
    objective: {
      es: "Educar y convertir interés en intención de compra.",
      en: "Educate and convert interest into purchase intent."
    },
    problemSolved: {
      es: "Ordena pasos y evita errores comunes en la tintura.",
      en: "Organizes steps and avoids common dye mistakes."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  },
  {
    id: "p7",
    title: { es: "Tutorial ondas sin calor", en: "No-heat waves tutorial" },
    type: "tutorial",
    views: "3k",
    likes: "70",
    image: "/assets/portfolio/portfolio-educativo-01.jpg",
    description: {
      es: "Contenido educativo con formato lista y ejemplos paso a paso para mejorar técnica.",
      en: "Educational list-style content with step-by-step examples to improve technique."
    },
    objective: {
      es: "Generar autoridad y retención con valor práctico inmediato.",
      en: "Build authority and retention with immediate practical value."
    },
    problemSolved: {
      es: "Corrige fallas frecuentes que afectan el resultado final de las ondas sin calor.",
      en: "Fixes frequent mistakes that affect the final no-heat wave result."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  },
  {
    id: "p8",
    title: { es: "Lifestyle phrase", en: "Lifestyle phrase" },
    type: "lifestyle",
    views: "13k",
    likes: "500",
    image: "/assets/portfolio/portfolio-lifestyle-01.jpg",
    description: {
      es: "Contenido relacionable de copper lifestyle para conectar en contexto real.",
      en: "Relatable copper-lifestyle content to connect in real context."
    },
    objective: {
      es: "Crear una pieza fácil de compartir o guardar con audio que capte atención.",
      en: "Create an easy-to-share or save piece with attention-grabbing audio."
    },
    problemSolved: {
      es: "Aporta contexto de uso real para aumentar identificación de la audiencia.",
      en: "Provides real-use context to improve audience identification."
    },
    tiktokUrl: "https://www.tiktok.com/@daypaez30"
  }
];
