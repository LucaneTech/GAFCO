import type { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "building"
  | "check"
  | "clipboard"
  | "clock"
  | "email"
  | "graduation"
  | "handshake"
  | "location"
  | "menu"
  | "people"
  | "phone"
  | "shield"
  | "sparkles"
  | "sprout"
  | "target"
  | "truck"
  | "values"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  building: <><path d="M3 21h18"/><path d="M6 21V8l6-4 6 4v13"/><path d="M9 10h1M14 10h1M9 14h1M14 14h1M11 21v-4h2v4"/></>,
  check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 9h6M9 13h6M9 17h4"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  graduation: <><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12v5c3 2 7 2 10 0v-5M21 10v6"/></>,
  handshake: <><path d="m8 12 3 3a2 2 0 0 0 3-3l-3-3"/><path d="m13 10 2-2a2 2 0 0 1 3 0l3 3M3 11l4-4 3 2M3 11l5 5M21 11l-5 5"/></>,
  location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  people: <><circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c.5-5 3-7 6-7s5.5 2 6 7M14 15c4-1 7 1 8 5"/></>,
  phone: <path d="M6.6 3.5 9 7.7 6.8 10c1.5 3 3.7 5.2 6.8 6.7l2.2-2.2L20 17c.7.4.9 1.1.5 1.8-1 1.7-2.7 2.5-4.5 2.1C9.7 19.5 4.6 14.3 3.1 8 2.7 6.2 3.5 4.5 5.2 3.5c.5-.3 1-.3 1.4 0Z"/>,
  shield: <><path d="M12 3 4.5 6v5.5c0 4.5 3 7.5 7.5 9.5 4.5-2 7.5-5 7.5-9.5V6L12 3Z"/><path d="m9 12 2 2 4-5"/></>,
  sparkles: <><path d="m8 3 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3ZM17 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/><path d="m12 4 7 7M5 19l9-9"/></>,
  sprout: <><path d="M12 21V10M12 14c-4 0-7-2-7-6 4 0 7 2 7 6ZM12 11c4 0 7-2 7-6-4 0-7 2-7 6Z"/><path d="M6 21h12"/></>,
  target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/><path d="m15 9 6-6"/></>,
  truck: <><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></>,
  values: <><path d="m12 3 7 5-7 13L5 8l7-5Z"/><path d="m5 8 7 4 7-4M9 5l3 7 3-7"/></>,
  x: <><path d="m6 6 12 12M18 6 6 18"/></>,
};

export function Icon({
  name,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
