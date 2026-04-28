import PreHeroTagline from "@/components/PreHeroTagline";
import Hero from "@/components/Hero";
import CreedStrip from "@/components/CreedStrip";
import Story from "@/components/Story";
import DropMechanik from "@/components/DropMechanik";
import BonusStack from "@/components/BonusStack";
import PreOrderForm from "@/components/PreOrderForm";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

// Placeholder until Vercel KV is wired up (Step 7)
const SOLD_BOXES = 0;

export default function Home() {
  return (
    <>
      <main className="pb-[58px]">
        <PreHeroTagline />
        <Hero soldBoxes={SOLD_BOXES} />
        <CreedStrip />
        <Story />
        <DropMechanik />
        <BonusStack />
        <PreOrderForm soldBoxes={SOLD_BOXES} />
        <FAQ />
        <Newsletter />
        <Footer />
      </main>
      <StickyCTA soldBoxes={SOLD_BOXES} />
    </>
  );
}
