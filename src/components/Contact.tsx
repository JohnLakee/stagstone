"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-sea/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sea">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Plan a future stay
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            We&apos;re not taking reservations yet, but we&apos;d love to hear
            from you. Share your email and optional travel dates — we&apos;ll
            notify you when booking opens.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mx-auto mt-14 max-w-2xl">
            <div className="card-surface rounded-2xl p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sea/10">
                    <CheckCircle className="h-8 w-8 text-sea" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Thanks — we&apos;ll be in touch
                  </h3>
                  <p className="max-w-sm text-slate-400">
                    Your message is saved in this demo only. Connect a form
                    backend (e.g. Formspree, Resend, or your PMS) when
                    you&apos;re ready to go live.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Alex Rivera"
                        className="w-full rounded-xl border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-sea/40 focus:outline-none focus:ring-1 focus:ring-sea/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-sea/40 focus:outline-none focus:ring-1 focus:ring-sea/20"
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="checkin"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Preferred check-in
                        <span className="ml-1 text-slate-600">(optional)</span>
                      </label>
                      <input
                        id="checkin"
                        name="checkin"
                        type="date"
                        className="w-full rounded-xl border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-sea/40 focus:outline-none focus:ring-1 focus:ring-sea/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="checkout"
                        className="mb-1.5 block text-sm font-medium text-slate-300"
                      >
                        Preferred check-out
                        <span className="ml-1 text-slate-600">(optional)</span>
                      </label>
                      <input
                        id="checkout"
                        name="checkout"
                        type="date"
                        className="w-full rounded-xl border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-sea/40 focus:outline-none focus:ring-1 focus:ring-sea/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-slate-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Party size, occasion, or questions about the area..."
                      className="w-full resize-none rounded-xl border border-white/10 bg-navy-800/50 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-sea/40 focus:outline-none focus:ring-1 focus:ring-sea/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary group flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold"
                  >
                    Send inquiry
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-xs text-slate-600">
                    This form is a front-end placeholder — wire it to your email
                    or booking tool before launch.
                  </p>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
