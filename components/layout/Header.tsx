import Link from "next/link";
import { company, localizedHref, routePaths, type Locale } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MobileMenu } from "./MobileMenu";

export function Header({ locale, active }: { locale: Locale; active: keyof typeof routePaths }) {
  const dict = getDictionary(locale);
  const otherLocale: Locale = locale === "fr" ? "en" : "fr";
  const items = [
    { key: "home", label: dict.nav.home, href: localizedHref(locale, "home") },
    { key: "about", label: dict.nav.about, href: localizedHref(locale, "about") },
    { key: "services", label: dict.nav.services, href: localizedHref(locale, "services") },
    { key: "projects", label: dict.nav.projects, href: localizedHref(locale, "projects") },
    { key: "contact", label: dict.nav.contact, href: localizedHref(locale, "contact") },
  ];

  return (
    <header className="site-header">
      <Reveal className="container header-inner" direction="none">
        <Link className="logo" href={localizedHref(locale, "home")} aria-label={`${company.shortName} — ${dict.nav.home}`}>
          G.A.F.CO
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {items.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={active === item.key ? "active" : undefined}
              aria-current={active === item.key ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-phone" href={company.phoneHref}>
            <Icon name="phone" />
            <span>{company.phoneDisplay}</span>
          </a>
          <Link className="language-switcher" href={localizedHref(otherLocale, active)} hrefLang={otherLocale}>
            {otherLocale.toUpperCase()}
          </Link>
          <Link className="button primary header-cta" href={localizedHref(locale, "contact")}>
            {dict.common.contactUs}
          </Link>
          <MobileMenu
            items={[...items, { key: "testimonials", label: dict.nav.testimonials, href: localizedHref(locale, "testimonials") }]}
            contactLabel={dict.common.contactUs}
            contactHref={localizedHref(locale, "contact")}
            localeLabel={getDictionary(otherLocale).localeName}
            localeHref={localizedHref(otherLocale, "home")}
          />
        </div>
      </Reveal>
    </header>
  );
}
