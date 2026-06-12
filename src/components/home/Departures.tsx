"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { CITIES } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { useReducedMotion } from "@/lib/useReducedMotion";

const NUMERALS = ["I", "II", "III", "IV"];

/**
 * Plate 05 — Departure Charts.
 * Four city sheets travel horizontally beneath a pinned viewport,
 * like leafing through the plates of an atlas.
 */
export default function Departures() {
  const scope = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();
  const pinned = desktop && !reduced;

  useGSAP(
    () => {
      if (!pinned || !scope.current || !trackRef.current) return;
      const track = trackRef.current;
      const distance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope, dependencies: [pinned] }
  );

  return (
    <section
      ref={scope}
      data-horizon="58,2,PL.05 · DEPARTURES"
      className={`relative overflow-hidden bg-night ${pinned ? "h-screen" : "py-24"}`}
    >
      {/* heading row */}
      <div
        className={`mx-auto max-w-[1680px] px-6 lg:px-12 ${pinned ? "pt-28" : ""}`}
      >
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4">
                <span className="plate-label">Plate 05</span>
                <span className="rule-gold w-16" />
                <span className="mono-note">Departure Charts</span>
              </div>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,5vw,4.6rem)] font-light leading-none text-bone">
                Choose your <span className="italic text-amber">meridian</span>
              </h2>
            </div>
            {pinned && <p className="mono-note pb-2">Scroll — the charts advance</p>}
          </div>
        </Reveal>
      </div>

      {/* charts */}
      <div
        ref={trackRef}
        className={
          pinned
            ? "mt-14 flex w-max gap-10 pl-12 pr-[12vw]"
            : "mx-auto mt-12 grid max-w-[1680px] gap-10 px-6 sm:grid-cols-2 lg:px-12"
        }
      >
        {CITIES.map((city, i) => (
          <Link
            key={city.id}
            href={city.href}
            className={`group relative block ${pinned ? "shrink-0" : ""}`}
            style={
              pinned
                ? { width: "min(56vw, calc((100svh - 460px) * 1.6), 860px)" }
                : undefined
            }
          >
            <div className="corner-ticks border border-bone/10 bg-panel p-3 transition-colors duration-500 group-hover:border-gold/40">
              <div className="img-grade relative aspect-[16/10] overflow-hidden">
                <Image
                  src={city.image}
                  alt={`${city.name} — ${city.epithet}`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 92vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                {/* chart numeral */}
                <span className="font-display absolute right-5 top-4 z-10 text-5xl font-light text-bone/70">
                  {NUMERALS[i]}
                </span>
                {/* city name overlapping bottom edge */}
                <h3 className="font-display absolute bottom-4 left-5 z-10 text-[clamp(2.6rem,4.6vw,4.6rem)] font-light leading-none text-bone drop-shadow-[0_2px_18px_rgba(8,6,4,0.8)]">
                  {city.name}
                </h3>
              </div>

              <div className="flex flex-wrap items-baseline justify-between gap-3 px-2 pt-5 pb-2">
                <div>
                  <p className="font-display text-lg italic text-amber">{city.epithet}</p>
                  <p className="mono-note mt-2">{city.coordinates}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[11px] tracking-[0.26em] text-gold uppercase">
                    {String(city.tourCount).padStart(2, "0")} itineraries
                  </p>
                  <p className="mono-note mt-2 transition-colors group-hover:text-gold">
                    Open chart →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
