"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Full-bleed hero: `public/hero-stagstone.png` (1024×686) is the design comp with branding baked in.
 * Optional `public/hero-bg.webm` / `hero-bg.mp4` replaces the still when present.
 * No Ken Burns / oversized wrapper — those cropped the top of the artwork on some viewports.
 */
export function HeroBackground() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoGone, setVideoGone] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-black">
      <div
        className={`absolute inset-0 ${videoReady && !videoGone ? "opacity-0" : "opacity-100"}`}
        aria-hidden
      >
        <Image
          src="/hero-stagstone.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={92}
          sizes="100vw"
          className="hero-bg-photo select-none"
          draggable={false}
        />
      </div>

      {!videoGone && (
        <video
          className={`hero-bg-photo absolute inset-0 h-full w-full transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-stagstone.png"
          onCanPlay={() => setVideoReady(true)}
          onPlaying={() => setVideoReady(true)}
          onError={() => setVideoGone(true)}
          aria-hidden
        >
          <source src="/hero-bg.webm" type="video/webm" />
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
