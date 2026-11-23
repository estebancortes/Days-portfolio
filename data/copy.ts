// All on-page text in both languages. The Spanish is written for Latin American brands and readers
// in Day's own voice (Colombian, tú with brands), not translated word for word.
export type Lang = "en" | "es";

export const copy = {
  en: {
    home: "/",
    switchTo: { href: "/es", label: "ES", aria: "Ver la página en español" },
    nav: { aria: "Main navigation", portfolio: "Portfolio", about: "About", cta: "Work with me" },
    role: "Content creator for beauty brands and local business",
    heroVideo: "Dayana showing her copper hair by a lake in autumn",
    about: {
      photo: "Dayana among the red rocks of southern Utah",
      stats: { followers: "Followers", views: "Views", viewsValue: "Millions", years: "Years in copper" },
      eyebrow: "About me",
      title: "Hi, brands!",
      lede: "Let people see your product work before they ever buy it.",
      points: [
        "I help beauty and haircare brands show exactly what their products do, in videos that feel like a recommendation from a friend, the kind viewers believe.",
        "I’m a Colombian UGC creator filming in English and Spanish, and copper hair is my specialty: I’ve colored my own curly hair for more than ten years. I’ve created for L’Oréal Paris, YSL Beauty, SHEGLAM, TYMO, Wavytalk and more, across hair color, styling tools, makeup, skincare and eyewear.",
        "Every video tells the whole story: the starting point, how the product goes on and the result in natural light. It feels native on TikTok and Instagram, and it’s ready to run as a paid ad.",
        "Based in Salt Lake City, I also film first looks at Utah restaurants, spas and salons."
      ],
      cta: "Let’s work together"
    },
    brands: {
      eyebrow: "Selected collaborations",
      title: "Brands I’ve worked with",
      more: "More brands I’ve created videos for",
      note: "Logos belong to their owners and identify past collaborations."
    },
    work: {
      eyebrow: "Selected work",
      title: "Portfolio",
      filtersAria: "Filter films by subject",
      filters: ["UGC", "Hair color", "Tutorial", "Utah", "Original films"],
      groups: { UGC: "UGC", Color: "Color", Tutorial: "Tutorial", Transformation: "Transformation", Utah: "Utah", "Original films": "Original films" } as Record<string, string>,
      railAria: "Portfolio films",
      prev: "Previous films",
      next: "Next films",
      viewAll: (n: number) => `View all ${n} films`,
      back: "Back to carousel",
      views: (v: string) => `${v} views`,
      play: (title: string, subject: string) => `Play ${title}, ${subject}`,
      failed: "Playback unavailable. Tap to retry."
    },
    contact: {
      photo: "Dayana in a white shirt in front of a sandstone arch in Arches National Park",
      eyebrow: "Get in touch",
      mark: "Let’s create content",
      rest: " that brings your brand’s story to life."
    }
  },
  es: {
    home: "/es",
    switchTo: { href: "/", label: "EN", aria: "View this page in English" },
    nav: { aria: "Navegación principal", portfolio: "Portafolio", about: "Sobre mí", cta: "Colaboremos" },
    role: "Creadora de contenido para marcas de belleza y negocios locales",
    heroVideo: "Dayana luciendo su cabello cobrizo junto a un lago en otoño",
    about: {
      photo: "Dayana entre las rocas rojas del sur de Utah",
      stats: { followers: "Seguidores", views: "Vistas", viewsValue: "Millones", years: "Años de cobrizo" },
      eyebrow: "Sobre mí",
      title: "¡Hola, marcas!",
      lede: "Que la gente vea tu producto en acción antes de comprarlo.",
      points: [
        "Ayudo a marcas de belleza y cuidado del cabello a mostrar lo que sus productos hacen de verdad, con videos que se sienten como la recomendación de una amiga, de esas en las que uno sí confía.",
        "Soy creadora UGC colombiana, grabo en español y en inglés, y el cobrizo es lo mío: llevo más de diez años tiñendo mi propio cabello rizado. He creado contenido para L’Oréal Paris, YSL Beauty, SHEGLAM, TYMO, Wavytalk y más, en coloración, herramientas de peinado, maquillaje, skincare y gafas.",
        "Cada video cuenta la historia completa: cómo empieza, cómo se aplica el producto y el resultado con luz natural. Se siente orgánico en TikTok e Instagram y queda listo para pautar como anuncio.",
        "Vivo en Salt Lake City y también grabo para restaurantes, spas y salones de Utah, mostrándolos como en una primera visita."
      ],
      cta: "Trabajemos juntos"
    },
    brands: {
      eyebrow: "Colaboraciones",
      title: "Marcas con las que he trabajado",
      more: "Otras marcas para las que he creado videos",
      note: "Los logos pertenecen a sus marcas y corresponden a colaboraciones anteriores."
    },
    work: {
      eyebrow: "Mi trabajo",
      title: "Portafolio",
      filtersAria: "Filtrar videos por tema",
      filters: ["UGC", "Color de cabello", "Tutoriales", "Utah", "Videos originales"],
      groups: { UGC: "UGC", Color: "Color", Tutorial: "Tutoriales", Transformation: "Transformaciones", Utah: "Utah", "Original films": "Videos originales" } as Record<string, string>,
      railAria: "Videos del portafolio",
      prev: "Videos anteriores",
      next: "Más videos",
      viewAll: (n: number) => `Ver los ${n} videos`,
      back: "Volver al carrusel",
      views: (v: string) => `${v} vistas`,
      play: (title: string, subject: string) => `Reproducir ${title}, ${subject}`,
      failed: "No se pudo reproducir. Toca para intentarlo de nuevo."
    },
    contact: {
      photo: "Dayana con camisa blanca frente a un arco de roca en el Parque Nacional Arches",
      eyebrow: "Hablemos",
      mark: "Creemos contenido",
      rest: " que cuente la historia de tu marca."
    }
  }
};

// Spanish titles for films whose original title is in English. Spanish originals stay as they are.
export const esTitles: Record<string, string> = {
  "Libre Berry Crush fragrance": "Perfume Libre Berry Crush",
  "Styling with the 5-in-1 dryer": "Peinado con el secador 5 en 1",
  "Hair oil routine": "Rutina con aceite capilar",
  "Lip stain in natural light": "Tinta de labios con luz natural",
  "Eyewear try-on": "Probándome gafas",
  "Skin tint": "Skin tint",
  "Tinted sunscreen": "Protector solar con color",
  "Glossy lip look": "Labios con brillo",
  "Steam straightening": "Alisado con vapor",
  "Fashion haul": "Haul de moda",
  "At-home copper reveal": "Mi cobrizo hecho en casa",
  "Copper hairstyle": "Peinado cobrizo",
  "Everyday makeup routine": "Mi maquillaje de diario",
  "Copper hair dye": "Tinte cobrizo",
  "Copper shade reveal": "Así quedó el tono cobrizo",
  "HiColor result": "Resultado con HiColor",
  "Copper before & after": "Cobrizo: antes y después",
  "Changing my shade": "Cambiando de tono",
  "Postpartum color change": "Cambio de color después del parto",
  "Copper hairstyle tutorial": "Tutorial de peinado cobrizo",
  "Hair tutorial": "Tutorial de peinado",
  "Red rock portrait": "Entre rocas rojas",
  "Lakeside in autumn": "Junto al lago en otoño",
  "Halloween in Sandy": "Halloween en Sandy",
  "Answering copper-hair questions": "Respondiendo preguntas sobre el cobrizo",
  "Get ready with me": "Arréglate conmigo",
  "Copper tone glow": "Brillo cobrizo",
  "Ginger hair meme": "Meme de pelirroja",
  "Copper": "Cobre",
  "Copper hair color": "Color cobrizo",
  "Copper hair": "Cabello cobrizo",
  "Copper tones": "Tonos cobrizos",
  "Copper haircut": "Corte y color cobrizo",
  "Coppertone": "Tono cobre",
  "Cobrizo natural light edit": "Cobrizo con luz natural",
  "Copper tone": "Tono cobrizo",
  "Copper hair edit": "Edit cobrizo",
  "Copper head": "Toda cobriza",
  "Fall color": "Color de otoño"
};

export const esSubjects: Record<string, string> = {
  "Hair color": "Color de cabello",
  Beauty: "Belleza",
  Haircare: "Cuidado del cabello",
  "Local Utah": "Utah"
};
