"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

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
        <h2 className="mb-20 lg:mb-24 font-serif text-[4rem] sm:text-7xl lg:text-[8.5rem] leading-[0.9] tracking-tighter">
          Ready to <span className="text-sandstone-light">Begin?</span>
        </h2>
        <p className="mx-auto mb-20 lg:mb-28 max-w-xl font-sans text-lg lg:text-xl font-light leading-[2.2] text-alabaster/60">
          Contact our concierges to craft a bespoke itinerary tailored entirely
          to your absolute desires.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-24 lg:mb-32">
          <Link
            href="/contact"
            className="group relative overflow-hidden bg-sandstone px-12 py-5 font-sans text-sm font-bold uppercase tracking-[0.4em] text-obsidian transition-all duration-500 hover:bg-alabaster flex items-center gap-4"
          >
            Plan My Journey
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <a
            href="tel:+212777767855"
            className="group border border-alabaster/20 px-12 py-5 font-sans text-sm font-bold uppercase tracking-[0.4em] text-alabaster/70 transition-all duration-500 hover:border-sandstone hover:text-sandstone flex items-center gap-4"
          >
            <Phone size={15} strokeWidth={1.5} />
            +212 777-767-855
          </a>
        </div>

        {/* Contact direct links */}
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 text-alabaster/30">
          <a href="tel:+212777767855" className="flex items-center gap-3 hover:text-sandstone transition-colors duration-300 group">
            <Phone size={13} strokeWidth={1.5} className="group-hover:text-sandstone transition-colors" />
            <span className="font-sans text-xs tracking-[0.2em]">+212 777-767-855</span>
          </a>
          <div className="hidden sm:block h-4 w-px bg-alabaster/20" />
          <a href="mailto:moroccomirage@gmail.com" className="flex items-center gap-3 hover:text-sandstone transition-colors duration-300 group">
            <Mail size={13} strokeWidth={1.5} className="group-hover:text-sandstone transition-colors" />
            <span className="font-sans text-xs tracking-[0.2em]">moroccomirage@gmail.com</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
