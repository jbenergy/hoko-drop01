export default function PreHeroTagline() {
  return (
    <div className="w-full bg-background border-b border-foreground pt-[52px]">
      <div className="flex items-center justify-center min-h-[48px] px-6 gap-4">
        <span className="text-accent text-[8px] shrink-0">●</span>
        <p className="text-[11px] md:text-[13px] font-bold text-foreground tracking-[0.14em] uppercase text-center leading-tight py-3">
          Wenn die Kruste bricht und die Creme fließt, weißt du, dass es echt ist.
        </p>
        <span className="text-accent text-[8px] shrink-0">●</span>
      </div>
    </div>
  );
}
