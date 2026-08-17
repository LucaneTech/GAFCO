import Link from "next/link";
import { localizedHref, type Locale, type ServiceKey } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function ServiceCard({ locale, service }: { locale: Locale; service: ServiceKey }) {
  const dict = getDictionary(locale);
  const content = dict.services[service];
  return (
    <article className="service-card">
      <ServiceIcon service={service} />
      <h3>{content.shortTitle}</h3>
      <p>{content.description}</p>
      <Link href={`${localizedHref(locale, "services")}#${service}`}>
        {dict.common.learnMore}<Icon name="arrow" />
      </Link>
    </article>
  );
}
