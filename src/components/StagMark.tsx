import Image from "next/image";

/** Official stag mark: full head + antlers (source art has a dark gap between antlers, so extraction uses the full vertical span). */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stag-icon.png"
      alt=""
      width={258}
      height={129}
      priority
      className={`h-auto w-auto max-h-[8rem] max-w-[min(92vw,20rem)] object-contain object-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.75)] sm:max-h-[9rem] ${className}`}
      aria-hidden
    />
  );
}
