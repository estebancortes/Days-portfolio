export const creator = {
  name: "DAYPAEZ",
  fullName: "Dayana",
  combinedFollowers: "14K",
  role: "Content creator for beauty brands and local business",
  location: "Salt Lake City, Utah",
  email: "daypaezugc@gmail.com",
  social: [
    {
      platform: "Instagram",
      handle: "@daypaez.ugc",
      href: "https://www.instagram.com/daypaez.ugc"
    },
    {
      platform: "TikTok",
      handle: "@daypaez30",
      href: "https://www.tiktok.com/@daypaez30"
    }
  ]
} as const;

export const serviceList = [
  "Haircare tutorials and transformations",
  "Makeup applications and beauty looks",
  "Skincare routines",
  "Product demonstrations",
  "Before-and-after videos",
  "Authentic reviews and testimonials",
  "Unboxings and first impressions",
  "Problem-and-solution videos",
  "TikTok videos and Instagram Reels",
  "Organic and paid social media content"
] as const;

export const workCategories = [
  {
    title: "Beauty Brands"
  },
  {
    title: "Hair Products"
  },
  {
    title: "Hair Transformations"
  },
  {
    title: "Local Business"
  }
] as const;

// These remain intentionally generic until approved partner logos are supplied.
export const brandPlaceholders = [
  "BRAND LOGO",
  "BRAND LOGO",
  "BRAND LOGO",
  "BRAND LOGO",
  "BRAND LOGO"
] as const;
