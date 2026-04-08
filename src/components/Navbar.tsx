"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-700 ${isScrolled
          ? "bg-obsidian/95 backdrop-blur-2xl py-6 border-b border-white/5 shadow-2xl"
          : "bg-gradient-to-b from-obsidian/80 to-transparent py-10"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-8 lg:px-16">
          {/* Main Logo */}
          <div className="flex-1">
            <Link href="/" className="flex items-center group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/moroccanmiragelogo.png" alt="Logo" className="h-20 w-auto lg:h-32 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] contrast-150 transition-transform group-hover:scale-105" />
              <span className="font-serif text-xl lg:text-xl tracking-widest text-alabaster hidden sm:block -ml-2 lg:-ml-6">
                MOROCCAN <span className="text-sandstone">MIRAGE</span>
              </span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 xl:flex">
            <Link href="/" className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-alabaster/70 transition-all hover:text-alabaster hover:tracking-[0.3em]">
              Home
            </Link>
            <Link href="#about" className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-alabaster/70 transition-all hover:text-alabaster hover:tracking-[0.3em]">
              About Us
            </Link>
            <div className="group relative py-8">
              <Link href="/tours" className="flex items-center gap-1 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-alabaster/70 transition-all group-hover:text-alabaster">
                Morocco Tours <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full mt-0 hidden flex-col whitespace-nowrap bg-white py-4 shadow-xl group-hover:flex">
                {[
                  { name: "From Marrakech", path: "marrakech" },
                  { name: "From Casablanca", path: "casablanca" },
                  { name: "From Tangier", path: "tangier" },
                  { name: "From Fes", path: "fes" }
                ].map((item) => (
                  <Link key={item.path} href={`/tours/${item.path}`} className="px-6 py-3 font-sans text-[13px] text-obsidian hover:bg-slate-50 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="group relative py-8">
              <button className="flex items-center gap-1 font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-alabaster/70 transition-all group-hover:text-alabaster">
                Excursions <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-0 hidden flex-col whitespace-nowrap bg-white py-4 shadow-xl group-hover:flex">
                {[
                  "1 day trip from Marrakech to Imlil",
                  "1 Day trip to Ourika",
                  "1 Day trip from Marrakech to Agafay desert",
                  "1 Day Trip To Cefchaouen",
                  "1 Day Trip To Essaouira",
                  "1 Day Trip To Ait Ben Haddou",
                  "1 Day trip Marrakech to Ouzoud Waterfalls"
                ].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="px-6 py-3 font-sans text-[13px] text-obsidian hover:bg-slate-50 transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/contact" className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-alabaster/70 transition-all hover:text-alabaster hover:tracking-[0.3em]">
              Contact
            </Link>
          </div>

          {/* Right Action */}
          <div className="hidden xl:block">
            <a
              href="/contact"
              className="group relative overflow-hidden bg-obsidian px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.3em] text-alabaster transition-colors hover:bg-sandstone hover:text-obsidian border border-sandstone/30"
            >
              <span className="relative z-10">Book Now</span>
            </a>
          </div>

          <button
            className="xl:hidden z-[110] text-alabaster p-3 bg-white/5 backdrop-blur-md rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        className="fixed inset-0 z-[105] flex flex-col items-center justify-center bg-obsidian backdrop-blur-3xl"
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: "-100%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center gap-8 overflow-y-auto w-full h-full justify-center pb-20">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/#about" },
            { label: "Morocco Tours", href: "/tours" },
            { label: "Excursions", href: "/#excursions" },
            { label: "Contact", href: "/contact" }
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl sm:text-5xl uppercase tracking-[0.2em] text-alabaster hover:text-sandstone transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 bg-obsidian border border-sandstone/30 px-12 py-5 font-sans text-base font-bold uppercase tracking-[0.3em] text-alabaster transition-colors hover:bg-sandstone hover:text-obsidian"
          >
            Book Now
          </Link>
        </div>
      </motion.div>
    </>
  );
}
