export interface HeroContent {
  readonly title: string;
  readonly greeting: string;
}

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly value: string;
}

export interface AboutContent {
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly contacts: readonly ContactLink[];
}

export interface OrderFlowStep {
  readonly step: number;
  readonly title: string;
}

export interface PricingTier {
  readonly id: string;
  readonly name: string;
  readonly pricePerMinute: number;
  readonly currency: string;
  readonly unit: string;
  readonly features: readonly string[];
}

export interface FooterContent {
  readonly message: string;
}

export interface SiteContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: HeroContent;
  readonly about: AboutContent;
  readonly orderFlow: {
    readonly heading: string;
    readonly steps: readonly OrderFlowStep[];
  };
  readonly pricing: {
    readonly heading: string;
    readonly tiers: readonly PricingTier[];
  };
  readonly footer: FooterContent;
}

export const siteContent = {
  meta: {
    title: "Yuphi — Shimazaki Miyu | Video Editor Portfolio",
    description:
      "Portfolio and pricelist for Shimazaki Miyu (Yuphi), a freelance video editor specializing in Beauty, F&B, and Lifestyle content with K-vibe and Japanese aesthetics.",
  },
  hero: {
    title: "Shimazaki Miyu",
    greeting: "Hello, I'm Miyu!",
  },
  about: {
    heading: "About Me",
    paragraphs: [
      "Hello, Yuphi here! I am a passionate Video Editor dedicated to turning your raw footage into engaging and dynamic visual stories.",
      "With a strong eye for detail and aesthetics, I specialize in editing for the Beauty, F&B, and Lifestyle niches — including bilingual content and K-vibe / Japanese aesthetics.",
    ],
    contacts: [
      {
        label: "Email",
        href: "mailto:shimazaki.miyu20@gmail.com",
        value: "shimazaki.miyu20@gmail.com",
      },
      {
        label: "Instagram / TikTok",
        href: "https://www.instagram.com/miyureiss20",
        value: "@miyureiss20",
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/62895388924697",
        value: "+62 895-388-924-697",
      },
    ],
  },
  orderFlow: {
    heading: "How to Order",
    steps: [
      { step: 1, title: "Pick Your Style" },
      { step: 2, title: "Fill the Brief" },
      { step: 3, title: "Secure Your Slot (Min 50% DP)" },
      { step: 4, title: "Send the Ingredients (GDrive)" },
      { step: 5, title: "Cooking Time (3-5 days)" },
      { step: 6, title: "Tasting & Review (Free 2x Revision)" },
      { step: 7, title: "Payment & Delivery" },
    ],
  },
  pricing: {
    heading: "Pricelist",
    tiers: [
      {
        id: "style-1",
        name: "Style 1",
        pricePerMinute: 60_000,
        currency: "IDR",
        unit: "/min",
        features: [
          "Basic edit",
          "Text overlay",
          "BGM / SFX",
          "Basic color & audio correction",
        ],
      },
      {
        id: "style-2",
        name: "Style 2",
        pricePerMinute: 100_000,
        currency: "IDR",
        unit: "/min",
        features: ["Everything in Style 1", "Subtitle / captions"],
      },
      {
        id: "style-3",
        name: "Style 3",
        pricePerMinute: 120_000,
        currency: "IDR",
        unit: "/min",
        features: [
          "Everything in Style 1 & 2",
          "Visual effects",
          "Dynamic transitions",
          "Viral memes",
          "Trending SFX",
        ],
      },
      {
        id: "style-4",
        name: "Style 4",
        pricePerMinute: 150_000,
        currency: "IDR",
        unit: "/min",
        features: [
          "Everything in Style 1, 2 & 3",
          "B-Roll integration",
          "Custom animation",
          "Complex editing",
        ],
      },
    ],
  },
  footer: {
    message: "Thank You / Arigatou gozaimasu / Kamsahamnida Much!",
  },
} as const satisfies SiteContent;
