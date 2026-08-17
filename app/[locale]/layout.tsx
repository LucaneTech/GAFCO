import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { notFound } from "next/navigation";
import { company, isLocale, locales } from "@/data/site";
import { getSiteUrl } from "@/lib/metadata";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: "G.A.F.CO SARLU", template: "%s | G.A.F.CO" },
  description: "G.A.F.CO SARLU, groupe multiservice au Congo-Brazzaville pour les particuliers, entreprises et organisations.",
  applicationName: "G.A.F.CO SARLU",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  other: { "codex-preview": "development" },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const organizationJsonLd = {
    "@context": "https://schema.org", "@type": "Organization",
    name: company.legalName, alternateName: company.shortName,
    url: getSiteUrl().toString(), telephone: company.phoneDisplay,
    email: company.email, areaServed: company.location,
  };
  const websiteJsonLd = {
    "@context": "https://schema.org", "@type": "WebSite",
    name: "G.A.F.CO SARLU", url: getSiteUrl().toString(), inLanguage: ["fr", "en"],
  };
  return (
    <html lang={locale} className={geist.variable}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      </body>
    </html>
  );
}
