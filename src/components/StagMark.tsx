import Image from "next/image";

/** Official stag silhouette from brand artwork (white on transparent PNG) */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/stag-icon.png"
      alt=""
      width={250}
      height={62}
      priority
      className={`h-auto max-h-[5rem] w-auto max-w-[min(90vw,20rem)] object-contain object-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.75)] sm:max-h-[5.5rem] md:max-h-[6rem] ${className}`}
      aria-hidden
    />
  );
}
