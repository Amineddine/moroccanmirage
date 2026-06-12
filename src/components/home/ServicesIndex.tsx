"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { SERVICES } from "@/data/site";
import PlateHeading from "@/components/atlas/PlateHeading";
import Reveal from "@/components/ui/Reveal";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * The Index of Services — an editorial table of contents.
 * On desktop, a floating image plate trails the cursor over the active row.
 */
export default function ServicesIndex() {
  const scope = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();
  const showPreview = desktop && !reduced;

  const xTo = useRef<((v: number) => void) | null>(null);
  const yTo = useRef<((v: number) => void) | null>(null);

  useGSAP(
    () => {
      if (!showPreview || !previewRef.current) return;
      xTo.current = gsap.quickTo(previewRef.current, "x", { duration: 0.55, ease: "power3.out" });
      yTo.current = gsap.quickTo(previewRef.current, "y", { duration: 0.55, ease: "power3.out" });
    },
    { scope, dependencies: [showPreview] }
  );

  const onMove = (e: React.MouseEvent) => {
    if (!showPreview) return;
    const rect = scope.current?.getBoundingClientRect();
    if (!rect) return;
    xTo.current?.(e.clientX - rect.left);
    yTo.current?.(e.clientY - rect.top);
  };

  return (
    <section
      ref={scope}
      data-horizon="46,-2,PL.01 · SERVICES"
      className="relative bg-night py-28 md:py-40"
      onMouseMove={onMove}
    >
      <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
        <PlateHeading
          plate="Plate 01"
          label="Index of Services"
          title={
            <>
              Four ways to <span className="italic text-amber">disappear</span>
            </>
          }
        />

        <div className="mt-16 md:mt-24">
          {SERVICES.map((s, i) => (
            <Reveal key={s.index} delay={i * 0.06}>
              <Link
                href={s.href}
                className="group relative block border-t border-bone/10 py-9 transition-colors duration-500 last:border-b hover:bg-gold/[0.025] md:py-12"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="grid items-baseline gap-4 md:grid-cols-[80px_1.2fr_1fr_60px]">
                  <span className="font-mono text-[12px] tracking-[0.3em] text-gold">
                    {s.index}
                  </span>
                  <h3 className="font-display text-[clamp(1.7rem,3.4vw,3.1rem)] font-light leading-tight text-bone transition-colors duration-500 group-hover:text-amber">
                    {s.title}
                  </h3>
                  <p className="max-w-md text-[14.5px] leading-relaxed text-muted md:justify-self-end md:text-right">
                    {s.description}
                  </p>
                  <span
                    aria-hidden
                    className="hidden justify-self-end text-xl text-gold opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 md:block"
                  >
                    →
                  </span>
                </div>

                {/* mobile inline image */}
                <div className="img-grade mt-6 aspect-[16/9] overflow-hidden lg:hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={900}
                    height={506}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {/* cursor-trailing preview plate */}
      {showPreview && (
        <div
          ref={previewRef}
          aria-hidden
          className={`pointer-events-none absolute left-0 top-0 z-10 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
            active !== null ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="corner-ticks img-grade relative h-[240px] w-[360px] overflow-hidden border border-bone/15">
            {SERVICES.map((s, i) => (
              <Image
                key={s.index}
                src={s.image}
                alt=""
                fill
                sizes="360px"
                className={`object-cover transition-all duration-500 ${
                  active === i ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
            ))}
            <span className="absolute bottom-2 left-3 z-10 font-mono text-[9px] tracking-[0.3em] text-gold uppercase">
              Fig. {active !== null ? SERVICES[active].index : "—"}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
