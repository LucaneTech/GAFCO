import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/metadata";
import { localizedHref, locales, routePaths } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = Object.keys(routePaths) as Array<keyof typeof routePaths>;
  return locales.flatMap((locale) => routes.map((route) => ({
    url: new URL(localizedHref(locale, route), base).toString(),
    lastModified: new Date(),
    changeFrequency: route === "home" ? "monthly" as const : "yearly" as const,
    priority: route === "home" ? 1 : route === "services" || route === "contact" ? .8 : .6,
    alternates: { languages: {
      fr: new URL(localizedHref("fr", route), base).toString(),
      en: new URL(localizedHref("en", route), base).toString(),
    } },
  })));
}
