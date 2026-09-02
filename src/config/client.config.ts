import type { ClientConfig } from "./client.schema";

/**
 * BRAVO BARBER CLUB — projeto demonstrativo Nexora.
 * Todos os dados comerciais abaixo são fictícios e centralizados aqui para
 * troca segura antes da publicação de um cliente real.
 */
export const clientConfig: ClientConfig = {
  platformVersion: "3.0.0",
  slug: "bravo-barber-club",
  segment: "barbershop",

  company: {
    name: "Bravo Barber Club",
    legalName: "",
    slogan: "Precisão é um ritual.",
    description:
      "Barbearia masculina de linguagem contemporânea, com cortes, barba e grooming em uma experiência focada em precisão, identidade e cuidado.",
    priceRange: "$$",
    cnpj: "",
  },

  contact: {
    phone: "(47) 99999-9999",
    whatsapp: "5547999999999",
    email: "contato@bravobarber.com.br",
  },

  address: {
    street: "Rua XV de Novembro",
    number: "123",
    complement: "Sala 1",
    district: "Centro",
    city: "Timbó",
    state: "SC",
    zipCode: "89120-000",
    country: "BR",
    geo: { latitude: -26.8233, longitude: -49.2718 },
    serviceAreas: ["Timbó", "Indaial", "Pomerode", "Rio dos Cedros"],
    mapsEmbedQuery: "Centro, Timbó - SC",
  },

  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    googleBusiness: "",
  },

  businessHours: {
    monday: { opens: "09:00", closes: "19:00", closed: false },
    tuesday: { opens: "09:00", closes: "19:00", closed: false },
    wednesday: { opens: "09:00", closes: "19:00", closed: false },
    thursday: { opens: "09:00", closes: "19:00", closed: false },
    friday: { opens: "09:00", closes: "20:00", closed: false },
    saturday: { opens: "08:00", closes: "18:00", closed: false },
    sunday: { closed: true },
    note: "Horários demonstrativos. Confirme a agenda pelo WhatsApp.",
  },

  strategy: {
    primaryConversion: "booking",
    audience: "b2c",
    urgency: "medium",
    salesCycle: "short",
    localSeoImportance: "critical",
    visualImportance: "critical",
    trustImportance: "high",
    technicalProofImportance: "low",
    notes: [
      "Fotografia e direção editorial carregam a percepção premium.",
      "O CTA de agendamento deve permanecer óbvio mesmo com alto impacto visual.",
      "Evitar números e avaliações inventadas em produção.",
    ],
  },

  design: {
    primaryColor: "#B8874D",
    primaryContrast: "#0C0B0A",
    secondaryColor: "#0C0B0A",
    accentColor: "#D9C9B8",
    backgroundColor: "#F1ECE4",
    surfaceColor: "#E7DED2",
    foregroundColor: "#171411",
    mutedColor: "#6D655C",
    borderColor: "#CFC3B5",
    headingFont: "Georgia",
    bodyFont: "Arial",
    fontProvider: "system",
    radius: 4,
    density: "spacious",
    archetype: "luxury",
    geometry: { cardStyle: "flat", borderWidth: 1, buttonRadius: "square", imageRadius: "none" },
    layout: { container: "wide", gridStyle: "asymmetric", sectionContrast: "high" },
    imagery: { treatment: "editorial", preferredRatio: "mixed", overlayStrength: "medium" },
    elevation: { cards: "none", header: "flat" },
    motion: { intensity: "subtle", reveal: "fade", speed: "slow" },
    backgrounds: { style: "editorial" },
  },

  sections: {
    hero: "hero-07",
    about: "about-06",
    services: "services-07",
    benefits: "benefits-05",
    stats: "stats-05",
    gallery: "gallery-06",
    testimonials: "testimonials-06",
    faq: "faq-04",
    cta: "cta-07",
    contact: "contact-05",
    footer: "footer-05",
  },

  // A homepage é custom neste projeto, mas a composição continua documentada
  // para manter compatibilidade com o Studio/gerador da plataforma.
  composition: {
    home: [
      { id: "hero", type: "custom", variant: "barber-hero" },
      { id: "manifesto", type: "custom", variant: "barber-manifesto" },
      { id: "services", type: "custom", variant: "barber-services" },
      { id: "editorial", type: "custom", variant: "barber-editorial" },
      { id: "gallery", type: "custom", variant: "barber-gallery" },
      { id: "ritual", type: "custom", variant: "barber-ritual" },
      { id: "booking", type: "custom", variant: "barber-booking" },
      { id: "faq", type: "custom", variant: "barber-faq" },
      { id: "contact", type: "custom", variant: "barber-contact" },
    ],
  },

  features: {
    whatsappFloating: false,
    contactForm: false,
    maps: true,
    testimonials: false,
    gallery: true,
    projects: false,
    products: false,
    team: false,
    faq: true,
    stats: false,
    benefits: false,
    cookieBanner: false,
    backToTop: false,
    animations: true,
    announcementBar: false,
    catalogSearch: false,
    catalogFilters: false,
    catalogBrands: false,
    mobileConversionBar: false,
  },

  pages: {
    about: true,
    services: true,
    products: false,
    projects: false,
    gallery: true,
    testimonials: false,
    faq: true,
    contact: true,
  },

  mobileConversion: {
    enabled: false,
    actions: ["whatsapp", "contact"],
  },

  forms: {
    contact: {
      enabled: false,
      delivery: ["resend", "webhook"],
      maxBodyBytes: 32768,
      rateLimit: { requests: 5, windowSeconds: 60 },
      fields: [
        { name: "name", label: "Nome", type: "text", required: true, minLength: 2, maxLength: 100 },
        { name: "phone", label: "WhatsApp", type: "tel", required: true },
        { name: "message", label: "Mensagem", type: "textarea", required: true, minLength: 10, maxLength: 2000 },
      ],
    },
  },

  seo: {
    siteUrl: "https://bravo-barber-demo.nexora.site",
    titleTemplate: "%s | %n",
    defaultTitle: "Barbearia premium em Timbó",
    description:
      "Cortes masculinos, barba e grooming em uma experiência de barbearia contemporânea em Timbó. Conheça serviços, referências de estilo e agende pelo WhatsApp.",
    keywords: [
      "barbearia Timbó",
      "barbeiro Timbó",
      "corte masculino Timbó",
      "barba Timbó",
      "barbearia premium",
      "grooming masculino",
    ],
    locale: "pt_BR",
    ogImage: "/opengraph-image",
    twitterHandle: "",
    businessType: "HealthAndBeautyBusiness",
    verification: { google: "", bing: "" },
  },

  legal: {
    controllerName: "Bravo Barber Club",
    dpoEmail: "",
    lastReviewed: "2026-09-01",
  },
};
