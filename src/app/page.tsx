import { Playfair_Display } from "next/font/google";
import { HeroBackground } from "@/components/HeroBackground";
import { StagMark } from "@/components/StagMark";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="hero-viewport">
      <div className="relative h-full min-h-full w-full">
        <HeroBackground />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/10 to-black/40"
          aria-hidden
        />
        <div className="absolute inset-0 z-[1] flex flex-col items-center justify-center px-5 text-center">
          <StagMark className="mb-5 shrink-0 sm:mb-6" />
          <h1
            className={`${playfair.className} max-w-[min(100%,20ch)] text-[clamp(1.65rem,6.5vw,3.5rem)] font-semibold leading-tight tracking-[0.02em] text-white drop-shadow-[0_2px_28px_rgba(0,0,0,0.9)]`}
          >
            STAG &amp; STONE
          </h1>
          <p className="mt-4 max-w-[min(100%,24rem)] font-sans text-[0.625rem] font-medium uppercase leading-relaxed tracking-[0.32em] text-white/95 sm:text-xs sm:tracking-[0.38em] md:mt-5 md:text-sm md:tracking-[0.42em]">
            Regal retreat. Rugged beauty.
          </p>
        </div>
      </div>
    </main>
  );
}
