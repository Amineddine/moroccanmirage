"use client";

import { motion } from "framer-motion";

export default function BookingCTA() {
  return (
    <section id="book" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-obsidian text-alabaster">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1543881512-4217743d4cff?w=2400&q=80"
        alt="Desert night"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.15] mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/90 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[1440px] px-6 lg:px-16 py-48 lg:py-72 flex flex-col items-center justify-center text-center"
      >
        <span className="mb-20 lg:mb-24 font-sans text-sm font-semibold uppercase tracking-[0.6em] text-sandstone">
          The Next Step
        </span>
        <h2 className="mb-56 lg:mb-72 font-serif text-[4rem] sm:text-7xl lg:text-[8.5rem] leading-[0.9] tracking-tighter">
          Ready to <span className="text-sandstone-light">Begin?</span>
        </h2>
        <p className="mx-auto mb-32 lg:mb-48 max-w-xl font-sans text-lg lg:text-xl font-light leading-[2.2] text-alabaster/60">
          Contact our concierges to craft a bespoke itinerary tailored entirely
          to your absolute desires.
        </p>

        {/* Minimal input form simulation instead of just a button for higher end vibe */}
        <div className="flex w-full max-w-3xl lg:max-w-4xl flex-col sm:flex-row border border-alabaster/20 bg-alabaster/[0.05] backdrop-blur-xl p-4 pl-10">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full bg-transparent font-sans text-lg lg:text-xl text-alabaster px-6 py-8 sm:py-0 outline-none placeholder:text-alabaster/40 uppercase tracking-[0.2em] focus:ring-0"
          />
          <button className="whitespace-nowrap bg-alabaster px-16 py-8 font-sans text-sm font-bold uppercase tracking-[0.4em] text-obsidian transition-colors hover:bg-sandstone-light">
            Inquire
          </button>
        </div>
      </motion.div>
    </section>
  );
}
