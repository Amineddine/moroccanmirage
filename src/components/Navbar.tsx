"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-700 ${
          isScrolled 
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
            <Link href="/" className="font-serif text-2xl lg:text-3xl tracking-widest text-alabaster">
              MOROCCAN <span className="text-sandstone">MIRAGE</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-16 xl:flex">
            {["Experiences", "Our Story", "Gallery"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-sans text-[13px] font-bold uppercase tracking-[0.4em] text-alabaster/70 transition-all hover:text-alabaster hover:tracking-[0.5em]"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Action */}
          <div className="hidden xl:block">
            <a
              href="#book"
              className="group relative overflow-hidden bg-sandstone px-12 py-5 font-sans text-sm font-bold uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-white"
            >
              <span className="relative z-10">Inquire Now</span>
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
        <div className="flex flex-col items-center gap-12">
          {["Experiences", "Our Story", "Gallery"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-5xl sm:text-6xl uppercase tracking-[0.2em] text-alabaster hover:text-sandstone transition-colors"
            >
              {item}
            </Link>
          ))}
          <a
            href="#book"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-12 bg-sandstone px-16 py-6 font-sans text-base font-bold uppercase tracking-[0.3em] text-obsidian"
          >
            Inquire Now
          </a>
        </div>
      </motion.div>
    </>
  );
}
