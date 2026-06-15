export interface PricingStyle {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly color: string;
  readonly features: readonly string[];
}

export interface OrderStep {
  readonly n: string;
  readonly title: string;
  readonly description: string;
}

export interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly value: string;
}

export interface SiteContent {
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
  readonly hero: {
    readonly subtitle: string;
    readonly title: string;
    readonly highlight: string;
    readonly description: string;
  };
  readonly about: {
    readonly heading: string;
    readonly paragraphs: readonly string[];
    readonly contacts: readonly ContactLink[];
  };
  readonly orderFlow: {
    readonly heading: string;
    readonly steps: readonly OrderStep[];
  };
  readonly pricing: {
    readonly heading: string;
    readonly subtitle: string;
    readonly styles: readonly PricingStyle[];
  };
  readonly contact: {
    readonly subtitle: string;
    readonly heading: string;
    readonly description: string;
    readonly links: readonly ContactLink[];
  };
  readonly footer: {
    readonly name: string;
  };
}

export const siteContent = {
  meta: {
    title: "Yuphi — Video Editor Pricelist",
    description:
      "Yuphi (Shimazaki Miyu) — Video editor for Beauty, F&B, and Lifestyle. Bilingual & K-vibe / Japanese aesthetic editing services.",
  },
  hero: {
    subtitle: "♡ VIDEO EDITOR PORTFOLIO ♡",
    title: "Shimazaki",
    highlight: "Miyu",
    description:
      "Turning raw footage into engaging, dreamy visual stories ☁ Specialized in Beauty, F&B, and Lifestyle with a K-vibe / Japanese aesthetic.",
  },
  about: {
    heading: "♡ ABOUT ME",
    paragraphs: [
      "Hello, Yuphi here! I am a passionate Video Editor dedicated to turning your raw footage into engaging and dynamic visual stories. With a strong eye for detail and aesthetics, I specialize in editing for the Beauty, F&B, and Lifestyle niches — including bilingual content and K-vibe / Japanese aesthetics.",
      "My goal is to help creators and brands capture their audience's attention through good pacing, the right audio choices, and creative storytelling. Let's bring your vision to life! ✨",
    ],
    contacts: [
      {
        label: "Email",
        href: "mailto:shimazaki.miyu20@gmail.com",
        value: "shimazaki.miyu20@gmail.com",
      },
      {
        label: "Phone",
        href: "https://wa.me/62895388924697",
        value: "+62 895-3889-24697",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/miyureiss20",
        value: "@miyureiss20",
      },
    ],
  },
  orderFlow: {
    heading: "♡ HOW TO ORDER",
    steps: [
      {
        n: "01",
        title: "Say Hi",
        description:
          "Reach out via email or Instagram DM with your project idea.",
      },
      {
        n: "02",
        title: "Pick a Style",
        description: "Choose the editing style that fits your vibe & budget.",
      },
      {
        n: "03",
        title: "Send Footage",
        description: "Share your raw footage, references, and brief.",
      },
      {
        n: "04",
        title: "Receive Magic",
        description: "Get your polished video, ready to publish ✨",
      },
    ],
  },
  pricing: {
    heading: "♡ PRICELIST",
    subtitle: "All prices are per minute (IDR) ☁",
    styles: [
      {
        id: "style-1",
        name: "Style 1",
        price: "60.000",
        color: "var(--color-blue-pale)",
        features: [
          "Basic Editing (Cut-to-cut & perapihan video)",
          "Penambahan Teks / Judul Standar",
          "Background Music (BGM) & Sound Effect (SFX) Standar",
          "Penyesuaian warna & audio dasar",
        ],
      },
      {
        id: "style-2",
        name: "Style 2",
        price: "100.000",
        color: "var(--color-yellow-soft)",
        features: [
          "Semua fitur di Style 1",
          "+ Subtitle (Pilihan 1 atau 2 bahasa)",
        ],
      },
      {
        id: "style-3",
        name: "Style 3",
        price: "120.000",
        color: "var(--color-pink-pastel)",
        features: [
          "Semua fitur di Style 1 dan 2",
          "+ Efek Visual & Transisi Dinamis (Advanced Editing)",
          "+ Elemen Meme Viral & SFX Trending",
        ],
      },
      {
        id: "style-4",
        name: "Style 4",
        price: "150.000",
        color: "var(--color-blue-pale)",
        features: [
          "Semua fitur di Style 1, 2, dan 3",
          "+ Penambahan B-Roll (sisipan foto/video/ilustrasi)",
          "+ Custom Animation & Complex Editing",
        ],
      },
    ],
  },
  contact: {
    subtitle: "ありがとう · 감사합니다",
    heading: "Thank You\nSo Much!",
    description: "Ready to bring your story to life? Let's chat ♡",
    links: [
      {
        label: "Email Me",
        href: "mailto:shimazaki.miyu20@gmail.com",
        value: "shimazaki.miyu20@gmail.com",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/miyureiss20",
        value: "@miyureiss20",
      },
    ],
  },
  footer: {
    name: "Shimazaki Miyu",
  },
} as const satisfies SiteContent;
