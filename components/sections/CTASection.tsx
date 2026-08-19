import Link from "next/link";
import { company, localizedHref, type Locale } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function CTASection({
  locale,
  title,
  text,
}: {
  locale: Locale;
  title?: string;
  text?: string;
}) {
  const dict = getDictionary(locale);
  return (
    <section className="cta-wrap" aria-label={dict.common.contactUs}>
      <Reveal className="container cta-section" direction="right">
        <span className="cta-icon"><Icon name="phone" /></span>
        <div className="cta-copy">
          <h2>{title ?? (locale === "fr" ? "Parlons de votre besoin" : "Let’s discuss your needs")}</h2>
          <p>{text ?? (locale === "fr" ? "Une question, un projet ? Notre équipe est à votre écoute." : "Have a question or a project? Our team is ready to listen.")}</p>
        </div>
        <a className="button primary" href={company.phoneHref}><Icon name="phone" />{company.phoneDisplay}</a>
        <Link className="button outline-light" href={localizedHref(locale, "contact")}>{dict.common.contactUs}</Link>
        <span className="cta-decoration" aria-hidden="true" />
      </Reveal>
    </section>
  );
}
