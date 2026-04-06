import Image from "next/image";

/** Official stag mark: full head + antlers (source art has a dark gap between antlers, so extraction uses the full vertical span). */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stag-icon.png"
      alt=""
      width={274}
      height={150}
      priority
      className={`h-auto max-h-[6.5rem] w-auto max-w-[min(92vw,19rem)] object-contain object-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.75)] sm:max-h-[7.25rem] md:max-h-[8rem] ${className}`}
      aria-hidden
    />
  );
}
