"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Looping background video when `public/hero-bg.mp4` (and optionally `hero-bg.webm`) exists.
 * Until the video can play — or if it is missing — a slow Ken Burns pan/zoom runs on the static hero PNG.
 */
export function HeroBackground() {
  const [videoReady, setVideoReady] = useState(false);
  const [videoGone, setVideoGone] = useState(false);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* Motion fallback / underlay (always mounted; hidden when video is playing) */}
      <div
        className={`absolute inset-0 ${videoReady && !videoGone ? "opacity-0" : "opacity-100"}`}
        aria-hidden
      >
        <div className="hero-kenburns absolute left-1/2 top-1/2 h-[118%] w-[118%] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/stagstone-hero-bg.png"
            alt=""
            fill
            priority
            fetchPriority="high"
            quality={88}
            sizes="100vw"
            className="object-cover object-center select-none"
            draggable={false}
          />
        </div>
      </div>

      {!videoGone && (
        <video
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/stagstone-hero-bg.png"
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
