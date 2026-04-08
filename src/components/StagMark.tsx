/**
 * Stag mark extracted from the official reference mock (solid white silhouette on hero).
 * Source file: reference PNG in repo assets — not the charcoal square (line/negative-space art).
 */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/stag-silhouette.png"
      alt=""
      width={321}
      height={269}
      decoding="async"
      fetchPriority="high"
      className={`h-auto w-auto max-h-[min(11rem,32vh)] max-w-[min(92vw,21rem)] object-contain object-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.75)] sm:max-h-[min(12rem,34vh)] ${className}`}
      aria-hidden
    />
  );
}
