import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { company, isLocale } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params; const locale = isLocale(raw) ? raw : "fr";
  return pageMetadata({ locale, route: "privacy", title: locale === "fr" ? "Politique de confidentialité" : "Privacy policy", description: locale === "fr" ? "Informations sur le traitement des données du formulaire G.A.F.CO." : "Information about data submitted through the G.A.F.CO contact form." });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const fr = raw === "fr";
  return <SiteShell locale={raw} active="privacy"><section className="compact-hero"><div className="container"><h1>{fr ? "Politique de confidentialité" : "Privacy policy"}</h1><p>{fr ? "Comment les données du formulaire de contact sont utilisées." : "How contact-form data is used."}</p></div></section><article className="section container prose-page"><h2>{fr ? "Données collectées" : "Data collected"}</h2><p>{fr ? "Le formulaire peut recueillir votre nom, entreprise, téléphone, adresse e-mail, service concerné et message. Seules les informations que vous choisissez de transmettre sont traitées." : "The form may collect your name, company, phone number, email address, service of interest and message. Only information you choose to submit is processed."}</p><h2>{fr ? "Finalité" : "Purpose"}</h2><p>{fr ? "Ces données servent uniquement à analyser votre demande et à vous recontacter. Elles ne doivent pas être utilisées à d’autres fins sans base appropriée." : "This data is used solely to review your request and contact you. It should not be used for other purposes without an appropriate basis."}</p><h2>{fr ? "Envoi et conservation" : "Delivery and retention"}</h2><p>{fr ? "Le fournisseur d’envoi e-mail et la durée de conservation restent à confirmer. Tant que l’infrastructure e-mail n’est pas configurée, le formulaire signale clairement qu’aucun message n’a été transmis." : "The email delivery provider and retention period remain to be confirmed. Until email infrastructure is configured, the form clearly states that no message has been delivered."}</p><h2>{fr ? "Vos demandes" : "Your requests"}</h2><p>{fr ? "Pour toute question liée à vos données, contactez G.A.F.CO à" : "For questions about your data, contact G.A.F.CO at"} <a href={`mailto:${company.email}`}>{company.email}</a> {fr ? "ou au" : "or by phone at"} <a href={company.phoneHref}>{company.phoneDisplay}</a>.</p></article></SiteShell>;
}
