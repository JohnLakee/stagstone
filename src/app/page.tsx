import Image from "next/image";

export default function Home() {
  return (
    <main className="hero-fullscreen relative isolate w-full overflow-hidden bg-black">
      <Image
        src="/stag-stone.png"
        alt="Stag & Stone — Regal retreat. Rugged beauty."
        fill
        priority
        fetchPriority="high"
        quality={92}
        sizes="100vw"
        className="object-cover object-center select-none"
        draggable={false}
      />
    </main>
  );
}
