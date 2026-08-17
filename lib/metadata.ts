import type { Metadata } from "next";
import { localizedHref, type Locale } from "@/data/site";

const fallbackSiteUrl = "https://example.com";

export function getSiteUrl(): URL {
  const value = process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;
  try { return new URL(value); } catch { return new URL(fallbackSiteUrl); }
}

export function pageMetadata({ locale, route, title, description }: {
  locale: Locale;
  route: Parameters<typeof localizedHref>[1];
  title: string;
  description: string;
}): Metadata {
  const canonical = localizedHref(locale, route);
  const frUrl = localizedHref("fr", route);
  const enUrl = localizedHref("en", route);
  return {
    title,
    description,
    alternates: { canonical, languages: { fr: frUrl, en: enUrl, "x-default": frUrl } },
    openGraph: { title, description, url: canonical, siteName: "G.A.F.CO SARLU", locale: locale === "fr" ? "fr_FR" : "en_US", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}
