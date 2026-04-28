import Image from "next/image";

export default function ProductShots() {
  return (
    <section className="w-full border-b border-foreground">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr]">

        {/* Ensemble: 4 Tarts in der Box */}
        <div className="relative border-b md:border-b-0 md:border-r border-foreground overflow-hidden group">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-[560px]">
            <Image
              src="/images/box-open.png"
              alt="4 Hokkaido Cheese Tarts in der geöffneten HOKO Box"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 px-6 py-4 bg-background/90 border-t border-r border-foreground">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60">
              4 Tarts · 1 Box · 18 Euro
            </p>
          </div>
        </div>

        {/* Ensemble: ganz & aufgebrochen */}
        <div className="relative overflow-hidden group">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-[560px]">
            <Image
              src="/images/assamble.png"
              alt="Hokkaido Cheese Tart – ganz und aufgebrochen mit fließender Cremefüllung"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 px-6 py-4 bg-background/90 border-t border-r border-foreground">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60">
              Crispy außen · Cremig innen
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
