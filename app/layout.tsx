import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LogoStrip from "@/components/LogoStrip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HOKO Drop 01 — Hokkaido Cheese Tart, Berlin",
  description:
    "50 Boxen. Frisch gebacken. Pickup Sa 30.05.2026, 16–18 Uhr in Berlin. Hokkaido Cheese Tart — crispy, cremig, limitiert.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "HOKO Drop 01 — Hokkaido Cheese Tart, Berlin",
    description:
      "50 Boxen. Frisch gebacken. Pickup Sa 30.05.2026, 16–18 Uhr in Berlin. Crispy außen, cremig innen — limitiert.",
    url: "https://hoko-drop01.vercel.app",
    siteName: "HOKO",
    images: [
      {
        url: "https://hoko-drop01.vercel.app/images/hero-bruchkanten.png",
        width: 1200,
        height: 630,
        alt: "Hokkaido Cheese Tart — HOKO Drop 01 Berlin",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HOKO Drop 01 — Hokkaido Cheese Tart, Berlin",
    description: "50 Boxen. Frisch gebacken. Pickup Sa 30.05.2026.",
    images: ["https://hoko-drop01.vercel.app/images/hero-bruchkanten.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground font-sans">
        <LogoStrip />
        {children}
      </body>
    </html>
  );
}
