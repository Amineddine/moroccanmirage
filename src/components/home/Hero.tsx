"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HERO, BRAND } from "@/data/site";
import DustCanvas from "@/components/three/DustCanvas";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { y: "115%" },
          animate: { y: "0%" },
          transition: { duration: 1.15, delay, ease: EASE },
        };

  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: EASE },
        };

  return (
    <section
      data-horizon="66,0,PL.00 · MARRAKECH"
      className="relative h-[100svh] overflow-hidden bg-abyss"
    >
      {/* film layer */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={BRAND.heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* warm matte grade */}
      <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/15 to-night" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(110% 80% at 50% 100%, rgba(201,162,39,0.16), transparent 60%)",
        }}
      />

      <DustCanvas />

      {/* map-sheet frame */}
      <div
        aria-hidden
        className="corner-ticks pointer-events-none absolute inset-5 hidden border border-bone/10 md:block"
      />

      {/* top annotations */}
      <motion.div
        {...fade(1.5)}
        className="absolute inset-x-0 top-[100px] flex items-center justify-between px-8 md:px-14"
      >
        <span className="mono-note hidden sm:block">Sheet № 001 — The Kingdom</span>
        <span className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
          {HERO.coordinates}
        </span>
      </motion.div>

      {/* title block */}
      <div className="absolute inset-x-0 bottom-[16svh] px-8 md:px-14">
        <motion.p {...fade(0.4)} className="plate-label mb-5 md:mb-7">
          {HERO.eyebrow}
        </motion.p>

        <h1 className="font-brand leading-[1.06] text-bone uppercase">
          <span className="block overflow-hidden">
            <motion.span
              {...rise(0.55)}
              className="block text-[clamp(2.5rem,6.8vw,6.2rem)] tracking-[0.12em]"
            >
              Moroccan
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              {...rise(0.72)}
              className="block text-[clamp(2.5rem,6.8vw,6.2rem)] tracking-[0.3em] text-amber"
            >
              Mirage
            </motion.span>
          </span>
        </h1>

        <div className="mt-7 flex flex-col gap-8 md:mt-9 md:flex-row md:items-end md:justify-between">
          <motion.p {...fade(1.1)} className="max-w-md text-[15px] leading-relaxed text-bone-dim md:text-base">
            {HERO.sub}
          </motion.p>
          <motion.div {...fade(1.3)} className="mono-note hidden shrink-0 items-center gap-3 md:flex">
            <span className="rule-gold inline-block h-px w-12" />
            Scroll to survey
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        {...fade(1.7)}
        aria-hidden
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-px overflow-hidden bg-bone/15">
          <div className="h-1/2 w-px animate-[scrollcue_1.8s_ease-in-out_infinite] bg-gold" />
        </div>
      </motion.div>

      <style>{`@keyframes scrollcue { 0% { transform: translateY(-100%); } 100% { transform: translateY(220%); } }`}</style>
    </section>
  );
}
