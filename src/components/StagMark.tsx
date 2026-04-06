import Image from "next/image";

/** Official stag silhouette — full head + antlers (brand art has a dark gap between antlers, so the mark must include the full vertical span ~234–367px, not stop at the wordmark row). */
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
