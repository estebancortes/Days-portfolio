import type { Locale } from "@/lib/i18n";

export type PortfolioType =
  | "transformation"
  | "review"
  | "tutorial"
  | "lifestyle";

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
      es: "Transformación capilar paso a paso en formato corto, mostrando textura, color y resultado final real.",
      en: "Step-by-step hair transformation in short format, showing texture, color, and the real final result."
    },
    objective: {
      es: "Demostrar credibilidad con un resultado visible en menos de 20 segundos.",
      en: "Build credibility with a visible result in under 20 seconds."
    },
    problemSolved: {
      es: "Resuelve dudas sobre cómo lograr un cambio impactante sin estudio profesional.",
      en: "Solves doubts about getting an impactful change without a professional studio."
    }
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
      en: "Direct before/after comparison with natural light and close-ups to validate results."
    },
    objective: {
      es: "Aumentar retención con prueba visual inmediata y cierre con CTA.",
      en: "Increase retention with immediate visual proof and a CTA close."
    },
    problemSolved: {
      es: "Ayuda a identificar si un producto realmente da resultados.",
      en: "Helps identify if a product truly delivers results."
    }
  },
  {
    id: "p3",
    title: { es: "Review honesta pestañas", en: "Honest eyelash review" },
    type: "review",
    views: "1k",
    likes: "20",
    image: "/assets/portfolio/portfolio-review-01.jpg",
    description: {
      es: "Reseña sin filtros con aplicación en cámara y opinión de pestañas de TikTok shop.",
      en: "No-filter review with on-camera application and honest feedback on TikTok Shop lashes."
    },
    objective: {
      es: "Construir confianza con feedback auténtico de uso real.",
      en: "Build trust through authentic real-use feedback."
    },
    problemSolved: {
      es: "Aclara si las pestañas dan el efecto deseado.",
      en: "Clarifies whether the lashes provide the desired effect."
    }
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
      en: "Product follow-up to show real progress and consistency."
    },
    objective: {
      es: "Sostener interés con narrativa de progreso y expectativa.",
      en: "Sustain interest through progress-driven storytelling."
    },
    problemSolved: {
      es: "Responde cómo se ve el producto después de varios días de aplicación.",
      en: "Shows how the product looks after several days of application."
    }
  },
  {
    id: "p5",
    title: { es: "Skincare natural de diario", en: "Everyday natural skincare" },
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
    }
  },
  {
    id: "p6",
    title: {
      es: "Paso a paso de tintura de cabello copper",
      en: "Copper hair dye step-by-step"
    },
    type: "tutorial",
    views: "7k",
    likes: "231",
    image: "/assets/portfolio/portfolio-skincare-01.jpg",
    description: {
      es: "Secuencia de tintura, explicada en lenguaje simple y ritmo dinámico.",
      en: "Hair dye sequence explained in simple language and dynamic pacing."
    },
    objective: {
      es: "Educar y convertir interés en intención de compra.",
      en: "Educate and convert interest into purchase intent."
    },
    problemSolved: {
      es: "Ordena pasos y evita errores comunes en la tintura.",
      en: "Organizes the process and avoids common mistakes during hair dyeing."
    }
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
      en: "Educational list-format content with step-by-step examples to improve technique."
    },
    objective: {
      es: "Generar autoridad y retención con valor práctico inmediato.",
      en: "Build authority and retention with immediate practical value."
    },
    problemSolved: {
      es: "Corrige fallas frecuentes que afectan el resultado final de las ondas sin calor.",
      en: "Fixes frequent mistakes that affect the final no-heat wave result."
    }
  },
  {
    id: "p8",
    title: { es: "Lifestyle phrase", en: "Lifestyle phrase" },
    type: "lifestyle",
    views: "13k",
    likes: "500",
    image: "/assets/portfolio/portfolio-lifestyle-01.jpg",
    description: {
      es: "Contenido relacionable de copper lifestyle.",
      en: "Relatable copper lifestyle content."
    },
    objective: {
      es: "Contenido fácil de compartir o guardar con un audio que capte atención.",
      en: "Easy-to-share or save content with an attention-grabbing audio."
    },
    problemSolved: {
      es: "Aporta una pieza lifestyle breve y relatable para aumentar shares y guardados.",
      en: "Delivers a short and relatable lifestyle piece to increase shares and saves."
    }
  }
];
