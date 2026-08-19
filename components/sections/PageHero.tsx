import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  title,
  text,
  image,
  alt,
  children,
  compact = false,
}: {
  title: string;
  text: string;
  image: string;
  alt: string;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "page-hero compact" : "page-hero"}>
      <Image src={image} alt={alt} fill priority unoptimized sizes="100vw" className="hero-image" />
      <div className="hero-overlay" aria-hidden="true" />
      <Reveal className="container hero-content" direction="left">
        <h1>{title}</h1>
        <p>{text}</p>
        {children ? <div className="hero-actions">{children}</div> : null}
      </Reveal>
    </section>
  );
}
