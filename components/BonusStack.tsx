import Image from "next/image";
import RevealBlock from "./RevealBlock";

const bonuses = [
  {
    headline: "4 frisch gebackene Hokkaido Cheese Tarts",
    body: "Heute morgen aus dem Ofen.",
  },
  {
    headline: 'HOKO-Box mit Drop-Sticker "1 of 50"',
    body: "Nummeriertes Sammlerstück. Limited.",
  },
  {
    headline: "Handgeschriebene Karte vom Founder-Team",
    body: "Persönlich. Nicht maschinell.",
  },
  {
    headline: "Erste Reihe für Drop 02",
    body: "Wir informieren dich 24h vor allen anderen.",
  },
  {
    headline: "Geld-zurück, wenn nicht begeistert",
    body: "Keine Fragen. Keine Diskussion.",
  },
];

export default function BonusStack() {
  return (
    <section className="w-full bg-background border-b border-foreground py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20">

        <RevealBlock>
          <p className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase mb-12">
            Was du bekommst
          </p>
        </RevealBlock>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">

          {/* Image */}
          <RevealBlock direction="right" className="w-full md:w-[45%] shrink-0">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/box-open.png"
                alt="HOKO-Box geöffnet, 4 frisch gebackene Hokkaido Cheese Tarts in 2x2 Anordnung"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </RevealBlock>

          {/* List */}
          <div className="flex-1 flex flex-col justify-center">
            <RevealBlock>
              <h2
                className="font-bold text-foreground leading-tight tracking-tight mb-10"
                style={{ fontSize: "clamp(26px, 3.2vw, 42px)" }}
              >
                Was du beim Drop 01 bekommst:
              </h2>
            </RevealBlock>

            <ul className="divide-y divide-foreground/15">
              {bonuses.map((item, i) => (
                <RevealBlock key={item.headline} delay={i * 70}>
                  <li className="flex items-start gap-4 py-5">
                    <span className="text-accent font-bold text-[18px] leading-none mt-[3px] shrink-0">
                      ✓
                    </span>
                    <div>
                      <p className="text-[15px] md:text-[16px] font-bold text-foreground leading-snug">
                        {item.headline}
                      </p>
                      <p className="text-[14px] text-muted-foreground mt-1 leading-snug">
                        {item.body}
                      </p>
                    </div>
                  </li>
                </RevealBlock>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
