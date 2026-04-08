/**
 * Full stag head + antlers from brand art (crop includes muzzle; earlier crops ended ~y355 and cut the face).
 * Plain <img> avoids Next/Image optimizer/CDN serving a cached older asset.
 */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/stag-head-full.png"
      alt=""
      width={258}
      height={243}
      decoding="async"
      fetchPriority="high"
      className={`h-auto w-auto max-h-[min(10rem,28vh)] max-w-[min(92vw,20rem)] object-contain object-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.75)] sm:max-h-[min(11rem,30vh)] ${className}`}
      aria-hidden
    />
  );
}
