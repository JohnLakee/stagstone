import Image from "next/image";

export default function Home() {
  return (
    <main className="hero-viewport">
      {/* Explicit relative box so `fill` + % heights resolve on mobile WebKit */}
      <div className="relative h-full min-h-full w-full">
        <Image
          src="/stag-stone.png"
          alt="Stag & Stone — Regal retreat. Rugged beauty."
          fill
          priority
          fetchPriority="high"
          quality={92}
          sizes="100vw"
          className="object-contain object-center select-none"
          draggable={false}
        />
      </div>
    </main>
  );
}
