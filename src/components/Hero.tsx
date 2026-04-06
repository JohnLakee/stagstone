"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { LOCATION_LINE, PROPERTY_NAME, TAGLINE } from "@/config/rental";

const highlights = [
  { icon: Sparkles, label: "Opening soon" },
  { icon: MapPin, label: LOCATION_LINE },
  { icon: Calendar, label: "Booking & rates to follow" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-sea/25 to-transparent"
            style={{
              top: `${18 + i * 16}%`,
              width: "40%",
              left: "-10%",
            }}
            animate={{
              x: ["0%", "300%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-sea/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 translate-y-1/4 rounded-full bg-sea/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center pt-20 text-center lg:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-sea/20 bg-sea/5 px-4 py-1.5 text-sm text-sea-light"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Vacation rental · Coming soon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {PROPERTY_NAME}
            <span className="block pt-2 text-3xl font-semibold text-slate-300 sm:text-4xl md:text-5xl">
              <span className="text-gradient">Your next getaway</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
          >
            {TAGLINE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="btn-primary group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
            >
              Get on the list
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#property"
              className="btn-secondary inline-flex items-center justify-center rounded-xl px-8 py-4 text-base"
            >
              See what&apos;s planned
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-5"
              >
                <item.icon className="h-5 w-5 text-sea" />
                <span className="text-center text-sm font-medium text-slate-400">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto mt-24 max-w-3xl">
          <div className="glow-line opacity-40" />
        </div>
      </div>
    </section>
  );
}
