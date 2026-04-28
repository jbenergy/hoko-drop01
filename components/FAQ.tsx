import RevealBlock from "./RevealBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was wenn ich nicht kommen kann?",
    a: "Schreib uns bis Donnerstag vor Drop. Wir geben deine Box an die nächste Person auf der Warteliste und erstatten dir den Preis.",
  },
  {
    q: "Welche Allergene?",
    a: "HOKO Cheese Tart enthält: Milch, Weizen, Eier, Butter. Vegan oder glutenfrei können wir aktuell nicht anbieten.",
  },
  {
    q: "Wie lange ist die Cheese Tart frisch?",
    a: "Heute frisch. Optimal innerhalb von 2 Stunden nach Pickup essen. Maximal 24h kühl gelagert.",
  },
  {
    q: "Ist das wie eine Pastel de Nata?",
    a: "Nein. Pastel de Nata ist süßer Vanillepudding in Blätterteig. Hokkaido Cheese Tart ist cremige Käsefüllung in Mürbteig-Sablé. Andere Kategorie, anderer Geschmack. Beides gut, aber nicht das Gleiche.",
  },
  {
    q: "Kann ich mehr als 3 Boxen bestellen?",
    a: "Nicht für Drop 01. Wir wollen, dass möglichst viele Foodies die Chance haben. Bei Drop 02 schauen wir das an.",
  },
  {
    q: "Wie ist der Pickup-Spot zu finden?",
    a: "Adresse und Detail-Anweisung kommen 24h vor Drop per Email. Pickup zwischen 16:00 und 18:00 Uhr in Berlin.",
  },
  {
    q: "Gibt's Versand?",
    a: "Nein. Pickup-only. Eine Hokkaido Cheese Tart durch Berlin schicken wäre nicht frisch. Wenn du nicht in Berlin bist, abonnier den Newsletter für Drop in deiner Stadt.",
  },
  {
    q: "Wer steckt hinter HOKO?",
    a: "[Bruder-Name] und [dein Name], plus Konditorin [Name]. Mehr unter der Story-Sektion oben.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-background border-b border-foreground py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-14 lg:px-20">

        <RevealBlock>
          <p className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground uppercase mb-12">
            FAQ
          </p>
        </RevealBlock>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

          <RevealBlock className="md:w-[35%] shrink-0">
            <h2
              className="font-bold text-foreground leading-tight tracking-tight"
              style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
            >
              Häufige Fragen.
            </h2>
          </RevealBlock>

          <RevealBlock delay={100} className="flex-1">
            <Accordion className="space-y-0">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={i}
                  className="border-t border-foreground/20 last:border-b last:border-foreground/20"
                >
                  <AccordionTrigger className="text-[15px] md:text-[16px] font-bold text-foreground text-left hover:no-underline py-5 gap-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-[#3a3a3a] leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
