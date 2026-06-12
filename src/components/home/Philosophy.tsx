"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { PHILOSOPHY } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import { useReducedMotion } from "@/lib/useReducedMotion";

/** Plate 04 — Philosophy. Editorial split with a rotating wax-seal stamp and parallax plate. */
export default function Philosophy() {
  const scope = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !scope.current) return;
      const img = scope.current.querySelector("[data-parallax-img]");
      if (!img) return;
      gsap.fromTo(
        img,
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope, dependencies: [reduced] }
  );

  return (
    <section
      id="philosophy"
      ref={scope}
      data-horizon="42,-2,PL.04 · PHILOSOPHY"
      className="relative overflow-hidden bg-abyss py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-[1680px] items-center gap-16 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:px-12">
        {/* text column */}
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="plate-label">Plate 04</span>
              <span className="rule-gold w-16" />
              <span className="mono-note">{PHILOSOPHY.label}</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display mt-8 text-[clamp(2.5rem,5vw,4.6rem)] font-light leading-[1.05] text-bone">
              More than a ride.
              <br />
              <span className="italic text-amber">A journey inside.</span>
            </h2>
          </Reveal>

          <div className="mt-10 max-w-xl space-y-6">
            {PHILOSOPHY.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.12 + i * 0.08}>
                <p className="text-[16px] leading-[1.85] text-bone-dim">
                  {i === 0 && (
                    <span className="font-display float-left mr-3 text-5xl font-light leading-[0.8] text-gold">
                      “
                    </span>
                  )}
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* rotating seal */}
          <Reveal delay={0.3}>
            <div className="mt-14 flex items-center gap-6">
              <div className="relative h-24 w-24 shrink-0">
                <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full">
                  <defs>
                    <path id="seal-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text className="fill-gold font-mono" style={{ fontSize: "9.2px", letterSpacing: "2.4px" }}>
                    <textPath href="#seal-circle">
                      EST. 2018 · MARRAKECH · MOROCCAN MIRAGE ·
                    </textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-[9px] w-[9px] rotate-45 border border-gold" />
                </span>
              </div>
              <p className="mono-note max-w-[220px]">
                Silence, discretion, and absolute comfort — since 2018.
              </p>
            </div>
          </Reveal>
        </div>

        {/* image column */}
        <Reveal delay={0.1}>
          <figure className="corner-ticks relative">
            <div className="img-grade relative aspect-[4/5] overflow-hidden border border-bone/10">
              <div data-parallax-img className="absolute inset-[-12%]">
                <Image
                  src={PHILOSOPHY.image}
                  alt="A quiet riad courtyard at dusk in Marrakech"
                  fill
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className="mt-4 flex items-center justify-between">
              <span className="mono-note">Fig. 04-A — The art of arrival</span>
              <span className="font-mono text-[10px] tracking-[0.22em] text-gold">{PHILOSOPHY.note}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
