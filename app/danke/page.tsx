import Link from "next/link";
import { PICKUP_DATE, PICKUP_TIME, PICKUP_ADDRESS } from "@/lib/constants";

export default function DankePage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; quantity?: string }>;
}) {
  return (
    <main className="min-h-screen bg-background flex flex-col">

      {/* Top bar */}
      <div className="w-full border-b border-foreground px-8 md:px-14 py-4 flex items-center justify-between">
        <span className="text-[14px] font-bold tracking-tight">HOKO</span>
        <span className="text-[11px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
          Drop 01 · Berlin
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20">
        <div className="max-w-[640px]">

          {/* Headline */}
          <p className="text-[11px] font-bold tracking-[0.22em] text-accent uppercase mb-6">
            Bestellung bestätigt
          </p>
          <h1
            className="font-bold text-foreground leading-tight tracking-tight mb-4"
            style={{ fontSize: "clamp(40px, 6vw, 80px)" }}
          >
            Box gesichert.
          </h1>
          <h2 className="text-[20px] md:text-[24px] font-bold text-foreground mb-8">
            Drop 01 Berlin, Sa 30.05.2026.
          </h2>
          <p className="text-[16px] text-[#3a3a3a] mb-12 leading-relaxed">
            Du bekommst gleich eine Bestätigungs-Email mit allen Details.
          </p>

          {/* Pickup card */}
          <div className="border border-foreground p-8 mb-12 space-y-4">
            <p className="text-[11px] font-bold tracking-[0.18em] text-muted-foreground uppercase mb-5">
              Dein Pickup
            </p>
            <div className="grid grid-cols-[80px_1fr] gap-y-3 text-[15px]">
              <span className="text-muted-foreground font-bold text-[12px] tracking-wide uppercase pt-[2px]">Wann</span>
              <span className="font-bold">{PICKUP_DATE}, {PICKUP_TIME}</span>
              <span className="text-muted-foreground font-bold text-[12px] tracking-wide uppercase pt-[2px]">Wo</span>
              <span className="font-bold">{PICKUP_ADDRESS}</span>
            </div>
            <p className="text-[13px] text-muted-foreground pt-2 border-t border-foreground/15 mt-4">
              Wir schicken dir 24h vor Drop einen Reminder mit Detail-Anweisung per Email.
            </p>
          </div>

          {/* Social share */}
          <div className="mb-12">
            <p className="text-[12px] font-bold tracking-[0.14em] text-muted-foreground uppercase mb-4">
              Teile deinen Drop
            </p>
            <p className="text-[14px] text-[#3a3a3a] mb-4 italic">
              &quot;Ich bin beim ersten HOKO Drop in Berlin dabei.&quot;
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/eathoko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-bold border border-foreground px-5 py-2 hover:bg-foreground hover:text-background transition-colors duration-150"
              >
                Instagram →
              </a>
              <a
                href="https://tiktok.com/@eathoko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-bold border border-foreground px-5 py-2 hover:bg-foreground hover:text-background transition-colors duration-150"
              >
                TikTok →
              </a>
            </div>
          </div>

          {/* Back CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[14px] font-bold text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            ← Zurück zur Page
          </Link>

        </div>
      </div>
    </main>
  );
}
