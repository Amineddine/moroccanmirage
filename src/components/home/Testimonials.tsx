"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

/** Plate 06 — Voices. One testimony at a time, set like a pull-quote in a journal. */
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, [reduced]);

  const item = TESTIMONIALS[index];

  return (
    <section data-horizon="50,0,PL.06 · VOICES" className="bg-abyss py-28 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-12">
        <Reveal>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="plate-label">Plate 06</span>
              <span className="rule-gold w-16" />
              <span className="mono-note">Travellers&apos; Testimony</span>
            </div>
            <span className="font-mono text-[11px] tracking-[0.3em] text-gold">
              {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
            </span>
          </div>
        </Reveal>

        <div className="relative mt-16 min-h-[320px] md:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={reduced ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <span aria-hidden className="font-display block text-7xl leading-none text-gold/60">
                “
              </span>
              <blockquote className="font-display mt-2 text-[clamp(1.6rem,3.2vw,2.8rem)] font-light leading-[1.3] text-bone">
                {item.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="rule-gold inline-block h-px w-10" />
                <span className="font-mono text-[11px] tracking-[0.26em] text-gold uppercase">
                  {item.name}
                </span>
                <span className="mono-note">— {item.place}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* manual index */}
        <div className="mt-12 flex gap-6">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              className={`font-mono text-[10px] tracking-[0.3em] transition-colors ${
                i === index ? "text-amber" : "text-faint hover:text-gold"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
