import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { imagePaths, isLocale, serviceImages, type ServiceKey } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "fr";
  return pageMetadata({ locale, route: "projects", title: locale === "fr" ? "Nos réalisations" : "Our projects", description: locale === "fr" ? "Un espace dédié aux futures réalisations documentées de G.A.F.CO." : "A space for G.A.F.CO’s future documented projects." });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const fr = locale === "fr";
  const dict = getDictionary(locale);
  const projects: Array<{ service: ServiceKey; title: string }> = [
    { service: "construction", title: fr ? "Projet à présenter" : "Project to be presented" },
    { service: "cleaning", title: fr ? "Réalisation à documenter" : "Project to be documented" },
    { service: "logistics", title: fr ? "Étude de cas à venir" : "Case study coming soon" },
    { service: "agriculture", title: fr ? "Projet à présenter" : "Project to be presented" },
    { service: "training", title: fr ? "Réalisation à documenter" : "Project to be documented" },
    { service: "security", title: fr ? "Étude de cas à venir" : "Case study coming soon" },
  ];
  return (
    <SiteShell locale={locale} active="projects">
      <PageHero title={fr ? "Nos réalisations" : "Our projects"} text={fr ? "Découvrez prochainement une sélection de projets qui illustreront notre savoir-faire et nos domaines d’intervention." : "A selection of projects illustrating our expertise and service areas will be published here soon."} image={imagePaths.construction} alt={fr ? "Chantier de construction" : "Construction site"} />

      <section className="section projects-intro container">
        <div><SectionHeading title={fr ? "Un espace dédié à nos futurs projets" : "A space dedicated to future projects"} /><p>{fr ? "Cette page présentera prochainement des projets menés dans nos différents domaines d’intervention. Chaque réalisation sera documentée avec rigueur après validation." : "This page will soon present work across our service areas. Each project will be carefully documented after approval."}</p><p>{fr ? "Revenez bientôt pour découvrir nos études de cas, photos et informations détaillées." : "Check back soon for case studies, photographs and detailed information."}</p></div>
        <aside className="coming-card"><Icon name="clipboard" /><div><h2>{fr ? "Contenu à venir" : "Content coming soon"}</h2><p>{fr ? "Nos projets sont en cours de documentation. Les contenus seront publiés après validation." : "Our projects are being documented. Content will be published after approval."}</p></div></aside>
      </section>

      <section className="section section-tint">
        <div className="container">
          <SectionHeading title={fr ? "Nos projets à venir" : "Upcoming projects"} />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={`${project.service}-${index}`}>
                <div className="project-image"><Image src={serviceImages[project.service]} alt="" fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /><span>{dict.services[project.service].shortTitle}</span></div>
                <div><h3>{project.title}</h3><p>{fr ? "Contenu en cours de préparation. Détails à venir après validation." : "Content is being prepared. Details will follow after approval."}</p><Icon name="arrow" /></div>
              </article>
            ))}
          </div>
          <div className="references-card"><Icon name="values" /><h2>{fr ? "Références disponibles après validation" : "References available after approval"}</h2><p>{fr ? "Cette section présentera prochainement des références sélectionnées pour illustrer la diversité de nos interventions." : "This section will soon feature selected references illustrating the diversity of our work."}</p></div>
        </div>
      </section>
      <CTASection locale={locale} title={fr ? "Vous avez un projet ? Parlons-en." : "Have a project? Let’s talk."} />
    </SiteShell>
  );
}
