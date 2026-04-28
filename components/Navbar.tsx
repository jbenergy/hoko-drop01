"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCTA = () => {
    document.getElementById("pre-order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 h-[52px] transition-all duration-300 ${
        solid
          ? "bg-background border-b border-foreground"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 h-full flex items-center justify-between">
        <Image
          src="/images/hoko-logo-on-cream.svg"
          alt="HOKO"
          width={88}
          height={26}
          className="h-[20px] w-auto"
          priority
        />
        <button
          onClick={handleCTA}
          className="hidden md:flex items-center gap-2 text-[12px] font-bold tracking-[0.14em] uppercase text-accent hover:text-foreground transition-colors duration-150"
        >
          Box sichern · 18 Euro <span>→</span>
        </button>
      </div>
    </nav>
  );
}
