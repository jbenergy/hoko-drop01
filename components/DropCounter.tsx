import { TOTAL_BOXES } from "@/lib/constants";

interface DropCounterProps {
  soldBoxes?: number;
}

export default function DropCounter({ soldBoxes = 0 }: DropCounterProps) {
  const available = TOTAL_BOXES - soldBoxes;
  const isCritical = available <= 10 && available > 0;
  const isSoldOut = available <= 0;

  if (isSoldOut) {
    return (
      <p className="text-[18px] font-bold text-accent uppercase tracking-wide">
        Drop 01 ausverkauft.
      </p>
    );
  }

  return (
    <p
      className={`text-[18px] font-bold tracking-wide ${
        isCritical ? "text-accent" : "text-muted"
      }`}
    >
      {isCritical ? (
        <>Nur noch {available} {available === 1 ? "Box" : "Boxen"} verfügbar.</>
      ) : (
        <>{soldBoxes} von {TOTAL_BOXES} Boxen vergeben</>
      )}
    </p>
  );
}
