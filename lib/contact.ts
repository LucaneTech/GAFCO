export type ContactPayload = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
  website: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, max) : "";
}

export function validateContactPayload(input: unknown): { data?: ContactPayload; errors?: Record<string, string> } {
  const value = input && typeof input === "object" ? input as Record<string, unknown> : {};
  const data: ContactPayload = {
    name: clean(value.name, 100),
    company: clean(value.company, 120),
    phone: clean(value.phone, 30),
    email: clean(value.email, 160).toLowerCase(),
    service: clean(value.service, 80),
    message: clean(value.message, 2000),
    consent: value.consent === true,
    website: clean(value.website, 160),
  };
  const errors: Record<string, string> = {};
  if (data.website) errors.website = "Spam détecté.";
  if (data.name.length < 2) errors.name = "Veuillez renseigner votre nom.";
  if (data.phone.length < 7) errors.phone = "Veuillez renseigner un numéro valide.";
  if (!emailPattern.test(data.email)) errors.email = "Veuillez renseigner une adresse e-mail valide.";
  if (!data.service) errors.service = "Veuillez sélectionner un service.";
  if (data.message.length < 10) errors.message = "Votre message doit contenir au moins 10 caractères.";
  if (!data.consent) errors.consent = "Votre consentement est requis pour être recontacté.";
  return Object.keys(errors).length ? { errors } : { data };
}

export async function sendContactMessage(_payload: ContactPayload): Promise<void> {
  void _payload;
  if (!process.env.CONTACT_TO_EMAIL || !process.env.EMAIL_API_KEY) {
    throw new Error("CONTACT_PROVIDER_NOT_CONFIGURED");
  }
  throw new Error("CONTACT_PROVIDER_NOT_IMPLEMENTED");
}
