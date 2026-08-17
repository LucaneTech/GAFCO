"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type Item = { label: string; href: string };

export function MobileMenu({
  items,
  contactLabel,
  contactHref,
  localeLabel,
  localeHref,
}: {
  items: Item[];
  contactLabel: string;
  contactHref: string;
  localeLabel: string;
  localeHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="mobile-menu-wrap">
      <button
        type="button"
        className="mobile-menu-button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <Icon name={open ? "x" : "menu"} />
      </button>
      {open ? (
        <div className="mobile-menu-backdrop" onClick={() => setOpen(false)}>
          <nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Navigation mobile"
            onClick={(event) => event.stopPropagation()}
          >
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link className="button primary" href={contactHref} onClick={() => setOpen(false)}>
              {contactLabel}
            </Link>
            <Link className="locale-mobile" href={localeHref} onClick={() => setOpen(false)}>
              {localeLabel}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
