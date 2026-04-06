"use client";

import { Bath, BedDouble, Coffee, Wifi } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "./AnimatedSection";

const amenities = [
  {
    icon: BedDouble,
    title: "Comfortable bedrooms",
    description:
      "Thoughtfully furnished sleeping spaces — exact layout and photos will be posted before booking opens.",
  },
  {
    icon: Bath,
    title: "Spa-ready baths",
    description:
      "Clean, modern bathrooms with everything you need to unwind after a day out.",
  },
  {
    icon: Coffee,
    title: "Full kitchen",
    description:
      "Cook at home with a full kitchen — perfect for morning coffee and family meals.",
  },
  {
    icon: Wifi,
    title: "Stay connected",
    description:
      "Reliable Wi‑Fi for remote work, streaming, and planning your next day’s adventure.",
  },
];

export function RentalAmenities() {
  return (
    <section id="amenities" className="relative py-28">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[400px] -translate-y-1/2 rounded-full bg-sea/[0.06] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sea-light">
            The stay
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What to expect
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            We&apos;re finishing the space and will share full details, photos,
            and house rules here. For now, here&apos;s a preview of what
            we&apos;re building for guests.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="stagger" className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <AnimatedItem key={item.title}>
              <div className="card-surface group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sea/25">
                <div className="mb-4 inline-flex rounded-xl bg-sea/10 p-3 text-sea transition-colors group-hover:bg-sea/15">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
