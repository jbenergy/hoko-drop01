"use client";

import Image from "next/image";
import { TOTAL_BOXES } from "@/lib/constants";

interface HeroProps {
  soldBoxes?: number;
}

export default function Hero({ soldBoxes = 0 }: HeroProps) {
  const isSoldOut = soldBoxes >= TOTAL_BOXES;
  const available = TOTAL_BOXES - soldBoxes;
  const soldPct = Math.min((soldBoxes / TOTAL_BOXES) * 100, 100);

  const handleCTAClick = () => {
    document.getElementById("pre-order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[92vh] min-h-[600px] overflow-hidden border-b border-foreground">

      {/* Full-bleed product image */}
      <Image
        src="/images/hero-bruchkanten.png"
        alt="Hokkaido Cheese Tart, Bruchkante mit fließender Cremefüllung"
        fill
        className="object-cover object-center animate-scale-in"
        priority
        sizes="100vw"
      />

      {/* Bottom-up gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #F5F0E8 0%, rgba(245,240,232,0.88) 22%, rgba(245,240,232,0.4) 52%, transparent 100%)",
        }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between px-6 md:px-14 lg:px-20 py-8 md:py-12">

        {/* Top: Drop label */}
        <p className="animate-fade-up text-[11px] font-bold tracking-[0.2em] text-foreground/50 uppercase">
          Drop 01&nbsp;&nbsp;·&nbsp;&nbsp;Berlin&nbsp;&nbsp;·&nbsp;&nbsp;30.05.2026
        </p>

        {/* Bottom: H1 left · CTA right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

          {/* Left: headline */}
          <div>
            <h1
              className="animate-fade-up-delay-1 font-bold text-foreground leading-[0.86] tracking-tight"
              style={{ fontSize: "clamp(36px, 10vw, 116px)" }}
            >
              CRISPY.
              <br />
              CREMIG.
              <br />
              <span className="text-accent">50&nbsp;BOXEN.</span>
            </h1>
            <p className="animate-fade-up-delay-2 mt-4 text-[15px] md:text-[17px] text-foreground/65 leading-snug">
              Hokkaido Cheese Tart · Heute frisch gebacken · Morgen weg.
            </p>
          </div>

          {/* Right: counter + CTA */}
          <div className="animate-fade-up-delay-3 shrink-0 flex flex-col gap-3 md:items-end">

            {!isSoldOut && (
              <div className="md:text-right">
                <p className="text-[11px] font-bold text-muted-foreground tracking-[0.14em] uppercase mb-2">
                  {soldBoxes === 0
                    ? `Noch alle ${TOTAL_BOXES} Boxen verfügbar`
                    : available <= 10
                    ? `Nur noch ${available} Boxen verfügbar`
                    : `${soldBoxes} von ${TOTAL_BOXES} Boxen vergeben`}
                </p>
                <div className="h-px w-full md:w-[200px] bg-foreground/15">
                  <div
                    className="h-full bg-accent transition-all duration-700"
                    style={{ width: `${soldPct}%` }}
                  />
                </div>
              </div>
            )}

            {isSoldOut ? (
              <a
                href="#newsletter"
                className="group flex items-center justify-between gap-6 bg-foreground text-background font-bold text-[15px] h-[54px] px-8 hover:bg-accent transition-colors duration-200 w-full md:min-w-[280px]"
              >
                <span>Newsletter für Drop 02</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={handleCTAClick}
                  className="group flex items-center justify-between gap-6 bg-accent text-background font-bold text-[15px] md:text-[16px] h-[54px] px-8 hover:bg-foreground transition-colors duration-200 cursor-pointer w-full md:min-w-[280px]"
                >
                  <span>Box sichern · 18 Euro</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </button>
                <p className="text-[11px] text-foreground/55 tracking-[0.1em] uppercase md:text-right">
                  Pickup Sa 30.05.2026 · 16:00–18:00 Uhr
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
