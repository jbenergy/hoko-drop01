"use client";

import { useEffect, useRef, useState } from "react";
import { TOTAL_BOXES } from "@/lib/constants";

interface StickyCTAProps {
  soldBoxes?: number;
}

export default function StickyCTA({ soldBoxes = 0 }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observe the end of the Hero section
    const hero = document.querySelector("section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Also hide when pre-order form is in view
  useEffect(() => {
    const form = document.getElementById("pre-order");
    if (!form) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.2 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  if (soldBoxes >= TOTAL_BOXES) return null;

  const available = TOTAL_BOXES - soldBoxes;

  const handleClick = () => {
    document.getElementById("pre-order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={sentinelRef} />
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button
          onClick={handleClick}
          className="group w-full h-[58px] bg-accent text-background font-bold text-[14px] md:text-[15px] flex items-center justify-between px-8 md:px-14 hover:bg-foreground transition-colors duration-200 border-t border-foreground cursor-pointer"
        >
          <span className="tracking-wide">Box sichern · 18 Euro</span>
          <span className="flex items-center gap-4">
            <span className="text-[12px] font-normal opacity-80 hidden md:inline">
              {available === TOTAL_BOXES
                ? `${TOTAL_BOXES} Boxen verfügbar`
                : available <= 10
                ? `Nur noch ${available} Boxen`
                : `${available} von ${TOTAL_BOXES} noch frei`}
            </span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </span>
        </button>
      </div>
    </>
  );
}
