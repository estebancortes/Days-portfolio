// Product mentions alone do not qualify a brand for this list.
// [name, logo file, relative height]. Logos render as one-colour silhouettes so no mark overpowers the others.
export const partners = [
  ["TYMO", "tymo-mark.png", 0.62],
  ["L’Oréal Paris", "loreal.svg", 1],
  ["Colorlomo Hair", "colorlomo.png", 0.42],
  ["YSL Beauty", "yves-saint-laurent-1.svg", 1.7],
  ["SHEGLAM", "sheglam.svg", 0.78]
] as const;

// Second row: brands Day has delivered videos for (paid, gifted or affiliate). Logos come from each brand's
// official site, converted to one-colour silhouettes. [name, logo file or null, logo width ÷ height].
// WiWiLINK and glow.m have no official site to source a logo from, so they show as names until logos are supplied.
export const moreBrands: ReadonlyArray<readonly [string, string | null, number]> = [
  ["Wavytalk", "wavytalk.svg", 11.58],
  ["VT Cosmetics", "vt-cosmetics.png", 6.34],
  ["Celladix", "celladix.svg", 4.38],
  ["Skindinavia", "skindinavia.png", 8.53],
  ["COLEYES", "coleyes.png", 3.41],
  ["Atopskins", "atopskins-mark.png", 2.68],
  ["EFE", "efe.png", 4.87],
  ["Veyes Beauty", "veyes-beauty.png", 3.91],
  ["WiWiLINK", null, 0],
  ["glow.m", null, 0]
];
