export const company = {
  legalName: "Groupe d'affaire francophone du Congo, G.A.F.CO SARLU",
  shortName: "G.A.F.CO",
  slogan: "Votre besoin, notre savoir-faire",
  phoneDisplay: "+242 06 915 63 23",
  phoneHref: "tel:+242069156323",
  email: "pas-encore@gmail.com",
  location: "Congo-Brazzaville",
  contactName: "Mr GAMBOU GOLET NGALAYENDO OPHDA",
  address: null,
  hours: null,
  socialLinks: [] as Array<{ label: string; url: string }>,
  otherActivitiesToConfirm: ["G.A.F.CO Village", "G.A.F.CO Parc"],
} as const;

export const imagePaths = {
  hero: "/images/hero-field.webp",
  aboutTeam: "/images/about-team.webp",
  contactAgent: "/images/contact-agent.webp",
  headquarters: "/images/headquarters.webp",
  construction: "/images/service-construction.webp",
  security: "/images/service-security.webp",
  cleaning: "/images/service-cleaning.webp",
  logistics: "/images/service-logistics.webp",
  agriculture: "/images/service-agriculture.webp",
  training: "/images/service-training.webp",
  meeting: "/images/partner-meeting.webp",
  family: "/images/audience-family.webp",
  business: "/images/audience-business.webp",
} as const;

export type ServiceKey =
  | "construction"
  | "security"
  | "cleaning"
  | "logistics"
  | "agriculture"
  | "training";

export const serviceKeys: ServiceKey[] = [
  "construction",
  "security",
  "cleaning",
  "logistics",
  "agriculture",
  "training",
];

export const serviceIcons: Record<ServiceKey, string> = {
  construction: "building",
  security: "shield",
  cleaning: "sparkles",
  logistics: "truck",
  agriculture: "sprout",
  training: "graduation",
};

export const serviceImages: Record<ServiceKey, string> = {
  construction: imagePaths.construction,
  security: imagePaths.security,
  cleaning: imagePaths.cleaning,
  logistics: imagePaths.logistics,
  agriculture: imagePaths.agriculture,
  training: imagePaths.training,
};

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const routePaths = {
  home: "",
  about: "a-propos",
  services: "services",
  projects: "realisations",
  testimonials: "temoignages",
  contact: "contact",
  legal: "mentions-legales",
  privacy: "politique-de-confidentialite",
} as const;

export function localizedHref(
  locale: Locale,
  route: keyof typeof routePaths,
): string {
  const suffix = routePaths[route];
  return suffix ? `/${locale}/${suffix}` : `/${locale}`;
}
