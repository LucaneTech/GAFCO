import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { imagePaths, isLocale, serviceKeys } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "fr";
  return pageMetadata({ locale, route: "about", title: locale === "fr" ? "À propos de G.A.F.CO" : "About G.A.F.CO", description: locale === "fr" ? "Découvrez la vision, la mission et les domaines d’expertise de G.A.F.CO SARLU." : "Discover G.A.F.CO SARLU’s vision, mission and areas of expertise." });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const fr = locale === "fr";
  const dict = getDictionary(locale);
  return (
    <SiteShell locale={locale} active="about">
      <PageHero title={fr ? "À propos de G.A.F.CO" : "About G.A.F.CO"} text={fr ? "G.A.F.CO SARLU est un groupe multiservice basé au Congo-Brazzaville, au service des particuliers, entreprises et organisations." : "G.A.F.CO SARLU is a multiservice group based in Congo-Brazzaville, serving individuals, businesses and organizations."} image={imagePaths.aboutTeam} alt={fr ? "Équipe professionnelle G.A.F.CO réunie" : "G.A.F.CO professional team collaborating"} />

      <section className="section split-section container">
        <div className="split-copy">
          <SectionHeading title={fr ? "Un groupe au service de vos projets" : "A group committed to your projects"} />
          <p>{fr ? "Nous réunissons des compétences complémentaires dans des domaines essentiels à la vie quotidienne et au développement des activités." : "We bring together complementary expertise in areas that are essential to daily life and business development."}</p>
          <p>{fr ? "Notre force : comprendre chaque contexte pour proposer des solutions efficaces, pratiques et respectueuses des réalités locales." : "Our strength is understanding each context to offer effective, practical solutions that respect local realities."}</p>
          <p>{fr ? "Guidés par l’écoute, la réactivité et le sens du service, nous bâtissons des relations durables avec nos clients et partenaires." : "Guided by listening, responsiveness and service, we build lasting relationships with clients and partners."}</p>
        </div>
        <div className="media-card landscape"><Image src={imagePaths.headquarters} alt={fr ? "Siège professionnel moderne" : "Modern professional headquarters"} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" /></div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading title={fr ? "Vision / Mission / Valeurs" : "Vision / Mission / Values"} centered />
          <div className="values-grid">
            <article><span><Icon name="handshake" /></span><div><h3>{fr ? "Vision" : "Vision"}</h3><p>{fr ? "Être un groupe multiservice de référence au Congo-Brazzaville, reconnu pour la qualité de ses prestations et son impact positif." : "To become a benchmark multiservice group in Congo-Brazzaville, recognized for quality and positive impact."}</p></div></article>
            <article><span><Icon name="target" /></span><div><h3>{fr ? "Mission" : "Mission"}</h3><p>{fr ? "Apporter des solutions adaptées aux besoins de nos clients à travers des services fiables, accessibles et durables." : "To provide tailored solutions through reliable, accessible and sustainable services."}</p></div></article>
            <article><span><Icon name="values" /></span><div><h3>{fr ? "Valeurs" : "Values"}</h3><ul><li>{fr ? "Engagement" : "Commitment"}</li><li>{fr ? "Proximité" : "Closeness"}</li><li>{fr ? "Qualité de service" : "Service quality"}</li></ul></div></article>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <SectionHeading title={fr ? "Une expertise multisectorielle" : "Multisector expertise"} centered />
          <div className="expertise-line">
            {serviceKeys.map((key) => <article key={key}><ServiceIcon service={key} /><h3>{dict.services[key].shortTitle}</h3><p>{dict.services[key].description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-tint audience-section">
        <div className="container">
          <SectionHeading title={fr ? "À qui nous nous adressons" : "Who we serve"} centered />
          <div className="audience-grid">
            <article><div className="audience-image"><Image src={imagePaths.family} alt={fr ? "Famille congolaise" : "Congolese family"} fill unoptimized sizes="(max-width: 768px) 100vw, 25vw" /></div><div><Icon name="people" /><h3>{fr ? "Particuliers" : "Individuals"}</h3><p>{fr ? "Nous simplifions votre quotidien en vous proposant des services fiables et accessibles : entretien, sécurité, transport, accompagnement et plus encore." : "We make everyday life easier through reliable and accessible maintenance, security, transport and support services."}</p></div></article>
            <article><div className="audience-image"><Image src={imagePaths.business} alt={fr ? "Professionnels en réunion" : "Business professionals meeting"} fill unoptimized sizes="(max-width: 768px) 100vw, 25vw" /></div><div><Icon name="building" /><h3>{fr ? "Entreprises & organismes" : "Businesses & organizations"}</h3><p>{fr ? "Nous accompagnons les organisations dans la gestion de leurs besoins opérationnels pour améliorer leur performance et se concentrer sur l’essentiel." : "We help organizations manage operational needs so they can improve performance and focus on what matters."}</p></div></article>
          </div>
        </div>
      </section>

      <section className="section location-section container">
        <div className="congo-map" aria-label={fr ? "Représentation stylisée du Congo" : "Stylized map of Congo"}><span className="map-shape" /><Icon name="location" /></div>
        <div className="split-copy"><SectionHeading title={fr ? "Zones d’intervention" : "Service areas"} /><h3>{fr ? "Zones d’intervention à confirmer" : "Service areas to be confirmed"}</h3><p>{fr ? "Nous intervenons au Congo-Brazzaville. Les zones précises d’intervention sont confirmées au cas par cas selon les besoins et la nature des prestations." : "We operate in Congo-Brazzaville. Exact service areas are confirmed case by case according to the need and type of service."}</p><strong>{fr ? "Contactez-nous pour vérifier la disponibilité de nos services dans votre localité." : "Contact us to confirm service availability in your area."}</strong></div>
      </section>
      <CTASection locale={locale} title={fr ? "Vous souhaitez en savoir plus sur G.A.F.CO ?" : "Would you like to know more about G.A.F.CO?"} />
    </SiteShell>
  );
}
