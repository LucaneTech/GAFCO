import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { company, isLocale } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params; const locale = isLocale(raw) ? raw : "fr";
  return pageMetadata({ locale, route: "legal", title: locale === "fr" ? "Mentions légales" : "Legal notice", description: locale === "fr" ? "Informations légales connues concernant G.A.F.CO SARLU." : "Known legal information about G.A.F.CO SARLU." });
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const fr = raw === "fr";
  return <SiteShell locale={raw} active="legal"><section className="compact-hero"><div className="container"><h1>{fr ? "Mentions légales" : "Legal notice"}</h1><p>{fr ? "Informations disponibles concernant l’éditeur du site." : "Available information about the website publisher."}</p></div></section><article className="section container prose-page"><h2>{fr ? "Éditeur" : "Publisher"}</h2><p><strong>{company.legalName}</strong></p><p>{fr ? "Représentant / contact client" : "Representative / client contact"} : {company.contactName}</p><p>{fr ? "Localisation" : "Location"} : {company.location}</p><p>{fr ? "Adresse précise : à confirmer" : "Exact address: to be confirmed"}</p><p>{fr ? "E-mail" : "Email"} : <a href={`mailto:${company.email}`}>{company.email}</a></p><p>{fr ? "Téléphone" : "Phone"} : <a href={company.phoneHref}>{company.phoneDisplay}</a></p><h2>{fr ? "Informations juridiques complémentaires" : "Additional legal information"}</h2><p>{fr ? "Numéro d’immatriculation, capital social, responsable de publication et coordonnées de l’hébergeur : informations à confirmer avant la mise en ligne sur le domaine final." : "Registration number, share capital, publication director and hosting provider details: to be confirmed before launch on the final domain."}</p><h2>{fr ? "Propriété intellectuelle" : "Intellectual property"}</h2><p>{fr ? "Les contenus validés de ce site sont destinés à présenter les activités de G.A.F.CO SARLU. Les conditions détaillées d’utilisation et de reproduction restent à confirmer." : "Approved content on this website is intended to present G.A.F.CO SARLU’s activities. Detailed use and reproduction terms remain to be confirmed."}</p></article></SiteShell>;
}
