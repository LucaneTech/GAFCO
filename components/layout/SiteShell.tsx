import type { ReactNode } from "react";
import { routePaths, type Locale } from "@/data/site";
import { getDictionary } from "@/lib/i18n";
import { PageTransition } from "@/components/ui/Reveal";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteShell({
  locale,
  active,
  children,
}: {
  locale: Locale;
  active: keyof typeof routePaths;
  children: ReactNode;
}) {
  const dict = getDictionary(locale);
  return (
    <>
      <a className="skip-link" href="#main-content">{dict.common.skip}</a>
      <Header locale={locale} active={active} />
      <PageTransition><main id="main-content" lang={locale}>{children}</main></PageTransition>
      <Footer locale={locale} />
    </>
  );
}
