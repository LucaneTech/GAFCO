import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { company, imagePaths, isLocale, serviceKeys } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "fr";
  return pageMetadata({ locale, route: "contact", title: locale === "fr" ? "Contactez G.A.F.CO" : "Contact G.A.F.CO", description: locale === "fr" ? "Parlez-nous de votre besoin et contactez l’équipe G.A.F.CO SARLU." : "Tell us about your needs and contact the G.A.F.CO SARLU team." });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const fr = locale === "fr";
  const dict = getDictionary(locale);
  const contactItems: Array<[IconName, string, React.ReactNode]> = [
    ["phone", fr ? "Téléphone" : "Phone", <a href={company.phoneHref} key="phone">{company.phoneDisplay}</a>],
    ["email", "E-mail", <a href={`mailto:${company.email}`} key="email">{company.email}</a>],
    ["location", fr ? "Localisation" : "Location", company.location],
    ["clock", fr ? "Horaires" : "Hours", fr ? "Horaires à confirmer" : "Hours to be confirmed"],
  ];
  return (
    <SiteShell locale={locale} active="contact">
      <PageHero title={fr ? "Parlons de votre besoin" : "Let’s discuss your needs"} text={fr ? "Une question, un projet ou simplement besoin d’informations ? L’équipe G.A.F.CO est à votre écoute." : "Have a question, a project or simply need information? The G.A.F.CO team is ready to listen."} image={imagePaths.contactAgent} alt={fr ? "Conseillère du service client" : "Customer service advisor"} />

      <section className="section contact-main container">
        <aside className="contact-details">
          <SectionHeading title={fr ? "Contactez-nous" : "Contact us"} />
          <p>{fr ? "Nous sommes là pour vous accompagner. Choisissez le moyen qui vous convient." : "We are here to help. Choose the contact method that works for you."}</p>
          <ul>{contactItems.map(([icon, label, value]) => <li key={label}><span><Icon name={icon} /></span><div><strong>{label}</strong><p>{value}</p></div></li>)}</ul>
          <p>{fr ? "Notre équipe vous répondra dans les meilleurs délais." : "Our team will reply as soon as possible."}</p>
        </aside>
        <ContactForm locale={locale} />
      </section>

      <section className="section section-tint help-section">
        <div className="container">
          <SectionHeading title={fr ? "Comment pouvons-nous vous aider ?" : "How can we help you?"} centered />
          <div className="help-grid">{serviceKeys.map((key) => <article key={key}><ServiceIcon service={key} /><h3>{dict.services[key].shortTitle}</h3><p>{dict.services[key].description}</p></article>)}</div>
        </div>
      </section>

      <section className="section container location-card">
        <div className="city-map" aria-label={fr ? "Carte de localisation stylisée" : "Stylized location map"}><span className="street s1"/><span className="street s2"/><span className="street s3"/><span className="river"/><Icon name="location" /></div>
        <div><SectionHeading title={fr ? "Localisation précise à confirmer" : "Exact location to be confirmed"} /><p>{fr ? "Nos activités sont basées au Congo-Brazzaville. L’adresse précise et les détails d’accès seront communiqués sur demande." : "Our activities are based in Congo-Brazzaville. The exact address and access details will be shared upon request."}</p><div className="info-note"><Icon name="location" />{fr ? "Pour toute visite ou rendez-vous, merci de nous contacter à l’avance via le formulaire ou par téléphone." : "For visits or appointments, please contact us in advance using the form or by phone."}</div></div>
      </section>
      <CTASection locale={locale} title={fr ? "Parlons directement de votre projet" : "Let’s discuss your project directly"} />
    </SiteShell>
  );
}
