"use client";

import { useEffect, useRef } from "react";

const text =
  "Frische ist nicht verhandelbar · Heute frisch · Morgen weg · Hokkaido Cheese Tart · Berlin · 50 Boxen · Drop 01 · ";

export default function CreedStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.6; // px per frame

    const tick = () => {
      posRef.current -= speed;
      // Reset when first half has scrolled out
      const halfWidth = track.scrollWidth / 2;
      if (Math.abs(posRef.current) >= halfWidth) {
        posRef.current = 0;
      }
      track.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="w-full bg-foreground border-b border-foreground overflow-hidden py-[14px]">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="text-[11px] font-bold text-background tracking-[0.18em] uppercase shrink-0 pr-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
