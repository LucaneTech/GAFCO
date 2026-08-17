import Link from "next/link";
import { company, localizedHref, serviceKeys, type Locale } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo inverse" href={localizedHref(locale, "home")}>G.A.F.CO</Link>
          <p>
            {locale === "fr"
              ? "Groupe multiservice au Congo-Brazzaville, au service des particuliers, entreprises et organisations."
              : "A multiservice group in Congo-Brazzaville serving individuals, businesses and organizations."}
          </p>
          <ul className="footer-contact-list">
            <li><Icon name="location" />{company.location}</li>
            <li><Icon name="phone" /><a href={company.phoneHref}>{company.phoneDisplay}</a></li>
            <li><Icon name="email" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
          </ul>
        </div>
        <div>
          <h2>{dict.common.quickNav}</h2>
          <ul className="footer-links">
            <li><Link href={localizedHref(locale, "home")}>{dict.nav.home}</Link></li>
            <li><Link href={localizedHref(locale, "about")}>{dict.nav.about}</Link></li>
            <li><Link href={localizedHref(locale, "services")}>{dict.nav.services}</Link></li>
            <li><Link href={localizedHref(locale, "projects")}>{dict.nav.projects}</Link></li>
            <li><Link href={localizedHref(locale, "testimonials")}>{dict.nav.testimonials}</Link></li>
            <li><Link href={localizedHref(locale, "contact")}>{dict.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h2>{dict.common.divisions}</h2>
          <ul className="footer-links">
            {serviceKeys.map((key) => <li key={key}><Link href={`${localizedHref(locale, "services")}#${key}`}>{dict.services[key].shortTitle}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2>{dict.nav.contact}</h2>
          <p>{locale === "fr" ? "Une question ou un projet ? Notre équipe est à votre écoute." : "Have a question or a project? Our team is ready to listen."}</p>
          <Link className="button outline-light" href={localizedHref(locale, "contact")}>{dict.common.contactUs}</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <div>
          <Link href={localizedHref(locale, "legal")}>{dict.common.legal}</Link>
          <span aria-hidden="true">|</span>
          <Link href={localizedHref(locale, "privacy")}>{dict.common.privacy}</Link>
        </div>
        <p>© {new Date().getFullYear()} G.A.F.CO — {dict.common.rights}</p>
      </div>
    </footer>
  );
}
