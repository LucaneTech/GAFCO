import Link from "next/link";
import { localizedHref, type Locale, type ServiceKey } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { Icon } from "@/components/ui/Icon";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceCard({ locale, service, index = 0 }: { locale: Locale; service: ServiceKey; index?: number }) {
  const dict = getDictionary(locale);
  const content = dict.services[service];
  return (
    <Reveal
      className="service-card-reveal"
      delay={index * 0.1}
      direction={index % 2 === 0 ? "left" : "right"}
    >
      <article className="service-card">
      <ServiceIcon service={service} />
      <h3>{content.shortTitle}</h3>
      <p>{content.description}</p>
      <Link href={`${localizedHref(locale, "services")}#${service}`}>
        {dict.common.learnMore}<Icon name="arrow" />
      </Link>
      </article>
    </Reveal>
  );
}
