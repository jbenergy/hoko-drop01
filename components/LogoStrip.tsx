import Image from "next/image";

export default function LogoStrip() {
  return (
    <div className="w-full bg-background border-b border-foreground flex items-center justify-center h-[56px] md:h-[72px]">
      <Image
        src="/images/hoko-logo-dark.svg"
        alt="HOKO"
        width={120}
        height={32}
        className="h-[28px] w-auto"
        priority
      />
    </div>
  );
}
