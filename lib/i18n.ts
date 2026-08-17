import type { Locale, ServiceKey } from "@/data/site";

type ServiceContent = {
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  items: string[];
};

export type Dictionary = {
  localeName: string;
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    testimonials: string;
    contact: string;
  };
  common: {
    contactUs: string;
    discoverServices: string;
    learnMore: string;
    callUs: string;
    rights: string;
    quickNav: string;
    divisions: string;
    legal: string;
    privacy: string;
    skip: string;
    infoComing: string;
  };
  services: Record<ServiceKey, ServiceContent>;
};

const fr: Dictionary = {
  localeName: "Français",
  nav: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Réalisations",
    testimonials: "Témoignages",
    contact: "Contact",
  },
  common: {
    contactUs: "Nous contacter",
    discoverServices: "Découvrir nos services",
    learnMore: "En savoir plus",
    callUs: "Appelez-nous",
    rights: "Tous droits réservés.",
    quickNav: "Navigation rapide",
    divisions: "Nos divisions principales",
    legal: "Mentions légales",
    privacy: "Politique de confidentialité",
    skip: "Aller au contenu",
    infoComing: "Informations à venir",
  },
  services: {
    construction: {
      title: "BTP, construction, rénovation & suivi de chantier",
      shortTitle: "BTP, construction & rénovation",
      description:
        "Des travaux de construction, de rénovation et d’aménagement conduits avec rigueur.",
      intro:
        "Nous réalisons vos travaux de construction et d’aménagement, du gros œuvre aux finitions, avec un suivi professionnel.",
      items: [
        "Construction de bâtiments et travaux publics",
        "Rénovation et aménagement",
        "Études et suivi de chantier",
        "Maisons, immeubles et hôtels",
      ],
    },
    security: {
      title: "Sécurité & gardiennage",
      shortTitle: "Sécurité & gardiennage",
      description:
        "Des solutions de surveillance pour protéger les biens, les personnes et les accès.",
      intro:
        "Nous accompagnons la sécurité de vos sites grâce à des agents qualifiés, attentifs et rigoureux.",
      items: [
        "Gardiennage et surveillance",
        "Contrôle d’accès",
        "Sécurité des biens et des personnes",
        "Gardiens de surveillance",
      ],
    },
    cleaning: {
      title: "Assainissement, entretien & mise à disposition de personnel",
      shortTitle: "Assainissement, entretien & personnel",
      description:
        "Nettoyage, hygiène, salubrité et personnel d’entretien pour vos espaces.",
      intro:
        "Nous assurons la propreté de vos espaces et mettons à disposition du personnel adapté à vos besoins.",
      items: [
        "Nettoyage et entretien de locaux",
        "Hygiène et salubrité",
        "Femmes de ménage et personnel d’entretien",
        "Baby-sitters et chauffeurs",
      ],
    },
    logistics: {
      title: "Logistique, voyage, vente & location de véhicules",
      shortTitle: "Logistique, voyage & automobile",
      description:
        "Transport, logistique et solutions de mobilité pour faciliter vos déplacements.",
      intro:
        "Nous vous accompagnons dans vos déplacements et vos opérations logistiques avec des solutions adaptées.",
      items: [
        "Transport et logistique",
        "Organisation de déplacements et voyages",
        "Vente de véhicules",
        "Location de véhicules",
      ],
    },
    agriculture: {
      title: "Restauration, agriculture & élevage",
      shortTitle: "Restauration, agriculture & élevage",
      description:
        "Des activités de restauration et de production agricole au service des besoins locaux.",
      intro:
        "Nous contribuons au bien-être et à l’autonomie alimentaire grâce à des activités de restauration, d’agriculture et d’élevage.",
      items: [
        "Restauration",
        "Production agricole",
        "Agriculture et élevage",
        "Activités alimentaires liées au groupe",
      ],
    },
    training: {
      title: "Formation professionnelle & enseignement",
      shortTitle: "Formation professionnelle & enseignement",
      description:
        "Des formations professionnelles et un accompagnement pédagogique adapté.",
      intro:
        "Nous soutenons le développement des compétences à travers la formation professionnelle et l’enseignement.",
      items: [
        "G.A.F.CO Institut Professionnel Technology",
        "Université Ngambou Albert Douckoure",
        "Formation professionnelle aux métiers",
        "Accompagnement pédagogique",
      ],
    },
  },
};

const en: Dictionary = {
  localeName: "English",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    testimonials: "Testimonials",
    contact: "Contact",
  },
  common: {
    contactUs: "Contact us",
    discoverServices: "Explore our services",
    learnMore: "Learn more",
    callUs: "Call us",
    rights: "All rights reserved.",
    quickNav: "Quick links",
    divisions: "Our main divisions",
    legal: "Legal notice",
    privacy: "Privacy policy",
    skip: "Skip to content",
    infoComing: "Information coming soon",
  },
  services: {
    construction: {
      title: "Construction, renovation & site supervision",
      shortTitle: "Construction & renovation",
      description:
        "Construction, renovation and fitting-out work delivered with care and discipline.",
      intro:
        "We deliver construction and fitting-out projects, from structural work to finishes, with professional supervision.",
      items: [
        "Building construction and public works",
        "Renovation and fitting-out",
        "Studies and site supervision",
        "Houses, buildings and hotels",
      ],
    },
    security: {
      title: "Security & guarding",
      shortTitle: "Security & guarding",
      description:
        "Monitoring solutions designed to protect people, property and access points.",
      intro:
        "We help protect your sites with qualified, attentive and disciplined security personnel.",
      items: [
        "Guarding and monitoring",
        "Access control",
        "Protection of people and property",
        "Security guards",
      ],
    },
    cleaning: {
      title: "Sanitation, maintenance & staffing",
      shortTitle: "Sanitation, maintenance & staffing",
      description:
        "Cleaning, hygiene, sanitation and maintenance personnel for your premises.",
      intro:
        "We maintain clean, healthy spaces and provide personnel suited to your operational needs.",
      items: [
        "Cleaning and premises maintenance",
        "Hygiene and sanitation",
        "Housekeeping and maintenance staff",
        "Babysitters and drivers",
      ],
    },
    logistics: {
      title: "Logistics, travel, vehicle sales & rental",
      shortTitle: "Logistics, travel & mobility",
      description:
        "Transport, logistics and mobility solutions that support your journeys and operations.",
      intro:
        "We support your travel and logistics needs with practical solutions tailored to each situation.",
      items: [
        "Transport and logistics",
        "Travel and trip organization",
        "Vehicle sales",
        "Vehicle rental",
      ],
    },
    agriculture: {
      title: "Catering, agriculture & livestock",
      shortTitle: "Catering, agriculture & livestock",
      description:
        "Catering and agricultural activities designed to serve local needs.",
      intro:
        "We contribute to well-being and food resilience through catering, farming and livestock activities.",
      items: [
        "Catering",
        "Agricultural production",
        "Farming and livestock",
        "Food-related group activities",
      ],
    },
    training: {
      title: "Vocational training & education",
      shortTitle: "Vocational training & education",
      description:
        "Professional training and educational support adapted to learners’ needs.",
      intro:
        "We support skills development through vocational training and education initiatives.",
      items: [
        "G.A.F.CO Institut Professionnel Technology",
        "Université Ngambou Albert Douckoure",
        "Vocational skills training",
        "Educational support",
      ],
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
