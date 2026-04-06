import Image from "next/image";

/** Official stag mark (from brand artwork — white on transparent) */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stag-icon.png"
      alt=""
      width={278}
      height={81}
      priority
      className={`h-auto w-auto max-h-[4rem] object-contain drop-shadow-[0_2px_16px_rgba(0,0,0,0.55)] sm:max-h-[4.75rem] md:max-h-[5.25rem] ${className}`}
      aria-hidden
    />
  );
}
