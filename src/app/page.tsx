import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-dvh w-full">
      <Image
        src="/stag-stone.png"
        alt="Stag & Stone — Regal retreat. Rugged beauty."
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </div>
  );
}
