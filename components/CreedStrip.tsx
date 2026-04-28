export default function CreedStrip() {
  const text =
    "Frische ist nicht verhandelbar · Knappheit ist Ehrlichkeit · Der Bruch ist der Moment · Heute frisch · Morgen weg · ";

  return (
    <div className="w-full bg-foreground border-b border-foreground overflow-hidden py-[14px]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="text-[11px] font-bold text-background tracking-[0.18em] uppercase shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
