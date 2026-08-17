import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "G.A.F.CO SARLU",
  description: "Groupe multiservice au Congo-Brazzaville.",
};

export default function RedirectRootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr" className={geist.variable}><body>{children}</body></html>;
}
