import Image from "next/image";
import RevealBlock from "./RevealBlock";
import { PICKUP_ADDRESS, PICKUP_DATE, PICKUP_TIME } from "@/lib/constants";

const steps = [
  {
    number: "01",
    headline: "PRE-ORDER",
    body: `Box online sichern. 50 Boxen, first come first serve.`,
  },
  {
    number: "02",
    headline: "WIR BACKEN",
    body: `Drop-Tag: Konditorin bäckt frisch am Morgen. 4 Tarts pro Box.`,
  },
  {
    number: "03",
    headline: "PICKUP",
    body: `${PICKUP_DATE}, ${PICKUP_TIME}. ${PICKUP_ADDRESS}. Box mitnehmen. Anschneiden. Bruch erleben.`,
  },
];

export default function DropMechanik() {
  return (
    <section className="w-full bg-background border-b border-foreground">
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20 pt-24 md:pt-32 pb-0">
        <RevealBlock>
          <p className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase mb-12">
            Der Ablauf
          </p>
          <h2
            className="font-bold text-foreground leading-tight tracking-tight mb-16"
            style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            So funktioniert&apos;s.
          </h2>
        </RevealBlock>
      </div>

      {/* Stacked strip layout — editorial */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20">
        <div className="border-t border-foreground">
          {steps.map((step, i) => (
            <RevealBlock key={step.number} delay={i * 80}>
              <div className="flex items-stretch border-b border-foreground min-h-[140px] md:min-h-[160px]">
                {/* Number column */}
                <div className="w-[100px] md:w-[180px] lg:w-[220px] shrink-0 border-r border-foreground flex items-center justify-center py-6">
                  <span
                    className="font-bold text-foreground leading-none tracking-tight"
                    style={{ fontSize: "clamp(56px, 9vw, 128px)" }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content column */}
                <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-8">
                  <p className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase mb-3">
                    {step.headline}
                  </p>
                  <p className="text-[15px] md:text-[17px] text-[#3a3a3a] leading-relaxed max-w-[600px]">
                    {step.body}
                  </p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>

      {/* Drop lineup image — full width */}
      <RevealBlock className="mt-0 px-8 md:px-14 lg:px-20 pb-24 md:pb-32 pt-12 max-w-[1200px] mx-auto">
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ height: "clamp(240px, 35vw, 440px)" }}
        >
          <Image
            src="/images/drop-lineup.png"
            alt="Vier HOKO-Boxen aufgereiht auf einem Holztresen, bereit für Pickup"
            fill
            className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            sizes="100vw"
          />
        </div>
      </RevealBlock>
    </section>
  );
}
