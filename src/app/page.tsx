import { HeroBackground } from "@/components/HeroBackground";

export default function Home() {
  return (
    <main className="hero-viewport">
      <div className="relative h-full min-h-full w-full">
        <HeroBackground />
        <h1 className="sr-only">Stag &amp; Stone — Regal retreat. Rugged beauty.</h1>
      </div>
    </main>
  );
}
