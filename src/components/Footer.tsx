"use client";

import Link from "next/link";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-alabaster px-6 pb-12 pt-40 lg:px-20 lg:pt-56 overflow-hidden">
      <div className="mx-auto flex max-w-[1440px] flex-col w-full">
        
        {/* Top Info row - Centered structure */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 border-b border-obsidian/10 pb-24 lg:pb-32 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.4em] text-sandstone-dark mb-8">About</p>
            <p className="font-sans text-sm font-light leading-[2] text-obsidian/70 max-w-xs mb-8">
              Elevating your Moroccan journey with unparalleled luxury, bespoke
              itineraries, and elite professional transportation.
            </p>
            <a href="tel:+212777767855" className="flex items-center gap-3 font-sans text-xs text-obsidian/60 hover:text-sandstone-dark transition-colors mb-4 group">
              <Phone size={13} strokeWidth={1.5} className="text-sandstone-dark" />
              +212 777-767-855
            </a>
            <a href="mailto:moroccomirage@gmail.com" className="flex items-center gap-3 font-sans text-xs text-obsidian/60 hover:text-sandstone-dark transition-colors group">
              <Mail size={13} strokeWidth={1.5} className="text-sandstone-dark" />
              moroccomirage@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.4em] text-sandstone-dark mb-8">Navigate</p>
            <ul className="space-y-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-obsidian">
              <li><Link href="/tours" className="group flex items-center justify-center md:justify-start gap-2 hover:text-sandstone-dark transition-colors">Tours <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link href="/excursions" className="group flex items-center justify-center md:justify-start gap-2 hover:text-sandstone-dark transition-colors">Excursions <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
              <li><Link href="/contact" className="group flex items-center justify-center md:justify-start gap-2 hover:text-sandstone-dark transition-colors">Contact <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.4em] text-sandstone-dark mb-8">Legal</p>
            <ul className="space-y-6 font-sans text-xs font-medium uppercase tracking-[0.3em] text-obsidian/60">
              <li><Link href="#" className="hover:text-obsidian transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-obsidian transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Massive Centered Typography */}
        <div className="flex w-full items-center justify-center overflow-hidden border-b border-obsidian/10 pb-16 lg:pb-24">
          <h2 className="font-sans text-[clamp(2rem,8vw,8rem)] leading-[0.8] tracking-[0.3em] font-semibold text-obsidian select-none opacity-90 text-center">
            MOROCCAN <span className="text-sandstone-dark font-medium ml-4 lg:ml-8">MIRAGE</span>
          </h2>
        </div>

        {/* Very bottom row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] text-obsidian/40 uppercase tracking-[0.3em] font-sans mt-8">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-obsidian transition-colors flex items-center gap-2 font-semibold"
          >
            Back to Top <ArrowUpRight size={12} className="rotate-45" />
          </button>
        </div>

      </div>
    </footer>
  );
}
