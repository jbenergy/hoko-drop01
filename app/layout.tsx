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
