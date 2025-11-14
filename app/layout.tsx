import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahirou Moreau | Lead Developer Full-Stack & Cloud Engineer",
  description: "Portfolio de Tahirou Moreau - Lead Developer Full-Stack & Cloud Engineer passionné par les nouvelles technologies, l'IA et l'innovation. Spécialisé en DevOps, microservices et développement web moderne.",
  keywords: ["Tahirou Moreau", "Developer", "Full-Stack", "Cloud Engineer", "DevOps", "React", "Next.js", "TypeScript", "Kubernetes", "Docker"],
  authors: [{ name: "Tahirou Moreau" }],
  openGraph: {
    title: "Tahirou Moreau | Lead Developer Full-Stack & Cloud Engineer",
    description: "Portfolio de Tahirou Moreau - Lead Developer Full-Stack & Cloud Engineer",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisScroll />
        {children}
      </body>
    </html>
  );
}
