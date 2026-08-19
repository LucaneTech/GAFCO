import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { SiteShell } from "@/components/layout/SiteShell";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { imagePaths, isLocale, localizedHref, serviceKeys } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "fr";
  return pageMetadata({
    locale,
    route: "home",
    title: locale === "fr" ? "Votre besoin, notre savoir-faire" : "Your needs, our expertise",
    description: locale === "fr" ? "Découvrez les services de G.A.F.CO SARLU au Congo-Brazzaville." : "Explore G.A.F.CO SARLU multiservice expertise in Congo-Brazzaville.",
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const dict = getDictionary(locale);
  const fr = locale === "fr";
  const features: Array<[IconName, string]> = [
    ["people", fr ? "Expertise multisectorielle" : "Multisector expertise"],
    ["target", fr ? "Solutions adaptées" : "Tailored solutions"],
    ["handshake", fr ? "Accompagnement de proximité" : "Close support"],
    ["building", fr ? "Particuliers & entreprises" : "People & businesses"],
  ];
  const steps: Array<[IconName, string, string]> = [
    ["people", fr ? "Comprendre le besoin" : "Understand the need", fr ? "Nous écoutons, analysons votre contexte et définissons ensemble vos priorités." : "We listen, assess your context and define priorities with you."],
    ["target", fr ? "Proposer la solution" : "Design the solution", fr ? "Nous concevons une réponse claire et réaliste pour atteindre vos objectifs." : "We design a clear, realistic response to meet your objectives."],
    ["check", fr ? "Accompagner la réalisation" : "Support delivery", fr ? "Nous mettons en œuvre et restons à vos côtés jusqu’à l’atteinte des résultats." : "We deliver and stay by your side through completion."],
  ];

  return (
    <SiteShell locale={locale} active="home">
      <PageHero
        title={fr ? "Votre besoin, notre savoir-faire" : "Your needs, our expertise"}
        text={fr ? "G.A.F.CO SARLU accompagne particuliers, entreprises et organisations au Congo-Brazzaville avec des solutions fiables, adaptées et durables." : "G.A.F.CO SARLU supports individuals, businesses and organizations in Congo-Brazzaville with reliable, tailored and durable solutions."}
        image={imagePaths.hero}
        alt={fr ? "Équipe G.A.F.CO sur un site d’intervention" : "G.A.F.CO field team on site"}
      >
        <Link className="button primary" href={localizedHref(locale, "services")}>{dict.common.discoverServices}<Icon name="arrow" /></Link>
        <Link className="button outline-light" href={localizedHref(locale, "contact")}>{dict.common.contactUs}</Link>
      </PageHero>

      <section className="feature-strip" aria-label={fr ? "Nos engagements" : "Our commitments"}>
        <div className="container feature-grid">
          {features.map(([icon, label]) => <div key={label}><Icon name={icon} /><strong>{label}</strong></div>)}
        </div>
      </section>

      <section className="section split-section container">
        <div className="split-copy">
          <SectionHeading title={fr ? "Un groupe, plusieurs savoir-faire" : "One group, many areas of expertise"} />
          <p>{fr ? "G.A.F.CO SARLU réunit des compétences complémentaires pour répondre à des besoins variés. Notre force : comprendre chaque contexte pour y apporter des solutions efficaces, pratiques et respectueuses des réalités locales." : "G.A.F.CO SARLU brings together complementary expertise to address a wide range of needs. Our strength lies in understanding each context and delivering effective, practical solutions grounded in local realities."}</p>
          <p>{fr ? "Nous nous engageons à vos côtés à chaque étape, avec rigueur, transparence et sens du service." : "We stand by your side at every step with discipline, transparency and a genuine sense of service."}</p>
          <Link className="button secondary" href={localizedHref(locale, "about")}>{dict.common.learnMore}</Link>
        </div>
        <div className="media-card landscape"><Image src={imagePaths.headquarters} alt={fr ? "Bâtiment professionnel moderne" : "Modern professional building"} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" /></div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading title={fr ? "Nos domaines d’intervention" : "Our service areas"} centered />
          <div className="service-grid">{serviceKeys.map((service, index) => <ServiceCard key={service} locale={locale} service={service} index={index} />)}</div>
        </div>
      </section>

      <section className="section approach-section">
        <div className="container">
          <SectionHeading title={fr ? "Notre approche en 3 étapes" : "Our 3-step approach"} centered />
          <div className="approach-grid">
            {steps.map(([icon, title, text], index) => (
              <article key={title}>
                <span className="approach-icon"><Icon name={icon} /></span>
                <span className="step-number">0{index + 1}</span>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section container">
        <div className="media-card wide"><Image src={imagePaths.meeting} alt={fr ? "Équipe en réunion avec un client" : "Team meeting with a client"} fill unoptimized sizes="(max-width: 768px) 100vw, 56vw" /></div>
        <div className="split-copy">
          <SectionHeading title={fr ? "Un partenaire de confiance à vos côtés" : "A trusted partner at your side"} />
          <p>{fr ? "Chez G.A.F.CO, nous plaçons la qualité, l’éthique et la satisfaction de nos clients au cœur de nos actions." : "At G.A.F.CO, quality, integrity and client satisfaction are central to everything we do."}</p>
          <p>{fr ? "Nous bâtissons des relations durables fondées sur la confiance, le respect des engagements et la recherche constante de la meilleure solution." : "We build lasting relationships based on trust, reliable commitments and the constant pursuit of the right solution."}</p>
        </div>
      </section>
      <CTASection locale={locale} />
    </SiteShell>
  );
}
