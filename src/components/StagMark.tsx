import Image from "next/image";

/** Solid stag mark — Game Icons stag-head (game-icons.net, CC BY 3.0) */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stag-icon.svg"
      alt=""
      width={512}
      height={512}
      priority
      className={`h-auto w-auto max-h-[4rem] object-contain brightness-0 invert drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] sm:max-h-[4.75rem] md:max-h-[5.25rem] ${className}`}
      aria-hidden
    />
  );
}
