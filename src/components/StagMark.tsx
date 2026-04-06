/** Minimal white stag mark — antler strokes + solid head */
export function StagMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 12 L38 36 L30 28 L24 44" />
        <path d="M50 12 L62 36 L70 28 L76 44" />
        <path d="M50 12 L50 42" />
      </g>
      <ellipse cx={50} cy={72} rx={16} ry={20} fill="currentColor" />
      <ellipse cx={50} cy={98} rx={10} ry={12} fill="currentColor" />
    </svg>
  );
}
