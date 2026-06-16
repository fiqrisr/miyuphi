export interface PricingStyle {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly color: string;
  readonly features: readonly string[];
}

export type OrderStepIcon =
  | "pick-style"
  | "fill-brief"
  | "secure-slot"
  | "send-ingredients"
  | "cooking-time"
  | "tasting-review"
  | "payment-delivery";

export interface OrderStep {
  readonly n: string;
  readonly title: string;
  readonly description: string;
  readonly icon: OrderStepIcon;
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
        icon: "pick-style",
        title: "Pick Your Style",
        description:
          "Pilih paket editing yang paling pas. Ada custom request? Feel free to ask!",
      },
      {
        n: "02",
        icon: "fill-brief",
        title: "Fill the Brief",
        description:
          "Isi form order dengan detail. Semakin jelas brief-nya, hasil videonya bakal makin sesuai ekspektasi.",
      },
      {
        n: "03",
        icon: "secure-slot",
        title: "Secure Your Slot",
        description:
          "Lakukan pembayaran DP min. 50% untuk lock jadwal editing kamu, dan jangan lupa kirim bukti transfernya ya.",
      },
      {
        n: "04",
        icon: "send-ingredients",
        title: "Send the Ingredients",
        description:
          "Upload raw footage kamu ke Google Drive. Pastikan file-nya sudah urut dan rapi supaya proses edit bisa lebih sat-set.",
      },
      {
        n: "05",
        icon: "cooking-time",
        title: "Cooking Time",
        description:
          "Proses edit memakan waktu 3-5 hari, dihitung sejak footage & brief aku terima dengan lengkap.",
      },
      {
        n: "06",
        icon: "tasting-review",
        title: "Tasting & Review",
        description:
          "Aku akan kirim preview video sesuai tanggal kesepakatan. Kalau ada yang kurang pas, kamu punya jatah Free Revisi 2x.",
      },
      {
        n: "07",
        icon: "payment-delivery",
        title: "Payment & Delivery",
        description:
          "Setelah video di-ACC dan lunas, file final HD akan dikirim via GDrive. Videomu siap upload dan viral!",
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
