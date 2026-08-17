import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SiteShell } from "@/components/layout/SiteShell";
import { Icon } from "@/components/ui/Icon";
import { isLocale } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params; const locale = isLocale(raw) ? raw : "fr";
  return pageMetadata({ locale, route: "testimonials", title: locale === "fr" ? "Témoignages" : "Testimonials", description: locale === "fr" ? "Les témoignages G.A.F.CO seront publiés après validation." : "G.A.F.CO testimonials will be published after approval." });
}

export default async function TestimonialsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound();
  const fr = raw === "fr";
  return (
    <SiteShell locale={raw} active="testimonials">
      <section className="compact-hero"><div className="container"><p className="eyebrow">G.A.F.CO SARLU</p><h1>{fr ? "Témoignages" : "Testimonials"}</h1><p>{fr ? "Les retours authentiques de nos clients seront présentés ici après leur validation." : "Authentic client feedback will be presented here after approval."}</p></div></section>
      <section className="section container empty-state"><Icon name="handshake" /><h2>{fr ? "Témoignages à venir" : "Testimonials coming soon"}</h2><p>{fr ? "Aucun témoignage fictif n’est publié. Cette page sera enrichie uniquement avec des retours réels, autorisés et vérifiés." : "No fictional testimonials are published. This page will only feature real, authorized and verified feedback."}</p></section>
      <CTASection locale={raw} />
    </SiteShell>
  );
}
