import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { Icon } from "@/components/ui/Icon";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { imagePaths, isLocale, localizedHref, serviceImages, serviceKeys } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "fr";
  return pageMetadata({ locale, route: "services", title: locale === "fr" ? "Nos services" : "Our services", description: locale === "fr" ? "Découvrez les six domaines d’intervention de G.A.F.CO SARLU." : "Explore G.A.F.CO SARLU’s six service areas." });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const fr = locale === "fr";
  const dict = getDictionary(locale);
  return (
    <SiteShell locale={locale} active="services">
      <PageHero title={fr ? "Des solutions pour des besoins multiples" : "Solutions for a wide range of needs"} text={fr ? "G.A.F.CO SARLU met à votre disposition des services complets et adaptés pour vous accompagner avec efficacité, transparence et sens du service." : "G.A.F.CO SARLU offers comprehensive, tailored services delivered with efficiency, transparency and a strong sense of service."} image={imagePaths.hero} alt={fr ? "Professionnels G.A.F.CO sur le terrain" : "G.A.F.CO professionals in the field"}>
        <Link className="button primary" href={localizedHref(locale, "contact")}>{dict.common.contactUs}<Icon name="arrow" /></Link>
      </PageHero>

      <nav className="container service-jump-nav" aria-label={fr ? "Catégories de services" : "Service categories"}>
        {serviceKeys.map((key) => <a key={key} href={`#${key}`}><ServiceIcon service={key} compact /><span>{dict.services[key].shortTitle}</span></a>)}
      </nav>

      <div className="container service-detail-list">
        {serviceKeys.map((key, index) => {
          const content = dict.services[key];
          return (
            <section id={key} className={index % 2 ? "service-detail reverse" : "service-detail"} key={key}>
              <div className="service-detail-copy">
                <div className="service-title-row"><ServiceIcon service={key} /><h2>{content.title}</h2></div>
                <p>{content.intro}</p>
                <ul>{content.items.map((item) => <li key={item}><Icon name="check" />{item}</li>)}</ul>
              </div>
              <div className="service-detail-image"><Image src={serviceImages[key]} alt={content.title} fill unoptimized sizes="(max-width: 768px) 100vw, 50vw" /></div>
            </section>
          );
        })}
      </div>
      <CTASection locale={locale} title={fr ? "Un besoin spécifique ? Échangeons sur votre projet." : "A specific need? Let’s discuss your project."} />
    </SiteShell>
  );
}
