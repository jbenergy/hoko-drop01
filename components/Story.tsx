import Image from "next/image";
import RevealBlock from "./RevealBlock";

export default function Story() {
  return (
    <section className="w-full bg-background border-b border-foreground py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20">

        <RevealBlock>
          <p className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase mb-12">
            Warum HOKO
          </p>
        </RevealBlock>

        <div className="flex flex-col md:flex-row items-start gap-16 md:gap-20">

          {/* Text block */}
          <div className="flex-1">
            <RevealBlock>
              <h2
                className="font-bold text-foreground mb-10 leading-tight tracking-tight"
                style={{ fontSize: "clamp(30px, 4vw, 48px)" }}
              >
                Hokkaido Cheese Tart,
                <br />
                jetzt in Berlin.
              </h2>
            </RevealBlock>

            <RevealBlock delay={80}>
              <div className="space-y-5 text-[16px] md:text-[17px] text-[#3a3a3a] leading-[1.75] max-w-[560px]">
                <p>
                  In Tokyo gibt es eine Bakery-Tradition: Cheese Tarts, die heute morgen aus dem Ofen
                  kommen, und heute Abend weg sind. Knusprige Sablé-Kruste, fließende
                  Hokkaido-Milch-Käse-Füllung. Frisch ist nicht verhandelbar.
                </p>
                <p>
                  Hokkaido Cheese Tart ist nicht süß. Sie ist käsig. Cremige Hokkaido-Milch trifft auf
                  Frischkäse, leicht salzig, buttrig. Ein anderer Bissen, ein anderes Tart-Erlebnis.
                </p>
                <p>In Berlin gibt es das nicht. Bis jetzt.</p>
                <p>
                  HOKO ist eine Drop-Bakery: 50 Boxen pro Drop, an einem Tag, an einem Ort. Heute frisch
                  gebacken. Morgen weg. Das ist Hokkaido-Wahrheit, Berlin-direkt.
                </p>
              </div>
            </RevealBlock>

            {/* Baker profile */}
            <RevealBlock delay={160}>
              <div className="mt-12 pt-8 border-t border-foreground/20 flex items-center gap-5">
                <div className="relative w-[80px] h-[80px] shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/images/baker-portrait.png"
                    alt="HOKO Konditorin"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-foreground tracking-[0.08em] uppercase">
                    [Name TBA]
                  </p>
                  <p className="text-[13px] text-muted-foreground mt-1 leading-snug">
                    Konditorin-Meisterin · [X] Jahre Patisserie-Erfahrung · Bäckt für HOKO.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>

          {/* Image */}
          <RevealBlock direction="left" className="w-full md:w-[380px] shrink-0">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src="/images/crust-macro.png"
                alt="Detailaufnahme der knusprigen Sablé-Kruste einer Hokkaido Cheese Tart"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground tracking-[0.12em] uppercase">
              Sablé-Kruste — nicht Blätterteig
            </p>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
