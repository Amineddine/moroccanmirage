"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { GALLERY } from "@/data/site";
import PlateHeading from "@/components/atlas/PlateHeading";
import Reveal from "@/components/ui/Reveal";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { useReducedMotion } from "@/lib/useReducedMotion";

/* broken-grid placement: column span, start, vertical drift speed */
const PLACEMENTS = [
  { cls: "col-span-12 sm:col-span-7 lg:col-span-5 lg:col-start-1", ratio: "aspect-[4/5]", speed: -8 },
  { cls: "col-span-12 sm:col-span-5 lg:col-span-3 lg:col-start-7 lg:mt-24", ratio: "aspect-[3/4]", speed: 6 },
  { cls: "col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-10 lg:mt-48", ratio: "aspect-[3/4]", speed: -14 },
  { cls: "col-span-12 sm:col-span-6 lg:col-span-4 lg:col-start-2 lg:-mt-10", ratio: "aspect-[1/1]", speed: 10 },
  { cls: "col-span-12 sm:col-span-7 lg:col-span-5 lg:col-start-7 lg:mt-16", ratio: "aspect-[16/11]", speed: -6 },
  { cls: "col-span-12 sm:col-span-5 lg:col-span-3 lg:col-start-1 lg:mt-20", ratio: "aspect-[3/4]", speed: 12 },
  { cls: "col-span-12 sm:col-span-6 lg:col-span-4 lg:col-start-5 lg:mt-32", ratio: "aspect-[4/5]", speed: -10 },
  { cls: "col-span-12 sm:col-span-6 lg:col-span-3 lg:col-start-10 lg:mt-10", ratio: "aspect-[3/4]", speed: 8 },
];

/** Plate 07 — Visual Diary. A drifting editorial collage; frames move at different speeds. */
export default function Gallery() {
  const scope = useRef<HTMLElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();
  const drift = desktop && !reduced;

  useGSAP(
    () => {
      if (!drift || !scope.current) return;
      gsap.utils.toArray<HTMLElement>("[data-speed]", scope.current).forEach((el) => {
        const speed = parseFloat(el.dataset.speed ?? "0");
        gsap.fromTo(
          el,
          { y: -speed * 8 },
          {
            y: speed * 8,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope, dependencies: [drift] }
  );

  return (
    <section
      ref={scope}
      data-horizon="44,-3,PL.07 · DIARY"
      className="overflow-hidden bg-night py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <PlateHeading
            plate="Plate 07"
            label={GALLERY.label}
            title={
              <>
                Vol. 01 — Essence <span className="italic text-amber">of Morocco</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="max-w-sm text-[14.5px] leading-relaxed text-muted lg:pb-3 lg:text-right">
              {GALLERY.caption}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-12 lg:gap-y-0">
          {GALLERY.frames.map((frame, i) => {
            const p = PLACEMENTS[i % PLACEMENTS.length];
            return (
              <div key={frame.src} data-speed={p.speed} className={p.cls}>
                <Reveal delay={(i % 3) * 0.07}>
                  <figure className="group">
                    <div className={`img-grade relative overflow-hidden border border-bone/10 ${p.ratio}`}>
                      <Image
                        src={frame.src}
                        alt={frame.note}
                        fill
                        sizes="(min-width: 1024px) 33vw, 92vw"
                        className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.07]"
                      />
                    </div>
                    <figcaption className="mt-3 flex items-baseline justify-between">
                      <span className="mono-note">
                        Frame {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.18em] text-gold/80 uppercase">
                        {frame.note}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
