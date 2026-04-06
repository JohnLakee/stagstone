"use client";

import { ImageIcon } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function GalleryPlaceholder() {
  return (
    <section id="property" className="relative py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-sea/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sea-light">
            Gallery
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Photos coming soon
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Professional images of the home, views, and neighborhood will go
            here. Follow along as we get ready to welcome our first guests.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="mt-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card-surface flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border-dashed border-white/10 p-8 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-slate-500">
                  <ImageIcon className="h-7 w-7" />
                </div>
                <p className="text-sm font-medium text-slate-500">
                  Image placeholder {i}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
