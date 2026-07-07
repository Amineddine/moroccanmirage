"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Reveal from "@/components/ui/Reveal";
import type { ItineraryDay } from "@/data/tours";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * The route, drawn as it is travelled — a golden survey line that
 * extends down the margin as the reader scrolls, day markers igniting in turn.
 * Each day is a full log entry in the Grand Traverse style: drive figure,
 * plate photograph, narrative and highlight chips.
 */
export default function RouteItinerary({ itinerary }: { itinerary: ItineraryDay[] }) {
  const scope = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useGSAP(
    () => {
      if (reduced || !scope.current) return;
      const line = scope.current.querySelector("[data-route-line]");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: scope.current,
              start: "top 70%",
              end: "bottom 75%",
              scrub: 0.6,
            },
          }
        );
      }
      gsap.utils.toArray<HTMLElement>("[data-route-node]", scope.current).forEach((node) => {
        gsap.fromTo(
          node,
          { backgroundColor: "rgba(244,237,221,1)", borderColor: "rgba(163,144,111,0.7)" },
          {
            backgroundColor: "#8f6f14",
            borderColor: "#a8761d",
            duration: 0.3,
            scrollTrigger: { trigger: node, start: "top 72%" },
          }
        );
      });
    },
    { scope, dependencies: [reduced] }
  );

  return (
    <div ref={scope} className="relative">
      {/* survey line */}
      <div
        aria-hidden
        className="absolute top-2 bottom-2 left-[7px] w-px bg-bone/10 md:left-[9px]"
      />
      <div
        aria-hidden
        data-route-line
        className="absolute top-2 bottom-2 left-[7px] w-px origin-top md:left-[9px]"
        style={{
          background: "linear-gradient(180deg, #a8761d, #8f6f14)",
          boxShadow: "0 0 8px rgba(168,118,29,0.35)",
        }}
      />

      <ol className="space-y-16 md:space-y-20">
        {itinerary.map((d) => (
          <li key={d.day} className="relative pl-10 md:pl-14">
            {/* node */}
            <span
              aria-hidden
              data-route-node
              className="absolute left-0 top-[6px] h-[15px] w-[15px] rotate-45 border bg-night md:h-[19px] md:w-[19px]"
              style={{ borderColor: "rgba(163,144,111,0.7)" }}
            />
            <Reveal y={20}>
              <p className="font-mono text-[10.5px] tracking-[0.32em] text-gold uppercase">
                Day {String(d.day).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-2xl font-light text-bone md:text-[1.7rem]">
                {d.title}
              </h3>
              {d.drive && (
                <p className="mono-note mt-4">
                  <span className="text-faint">Drive — {d.drive}</span>
                </p>
              )}
            </Reveal>

            {d.image && (
              <Reveal y={26} delay={0.06}>
                <figure className="img-grade corner-ticks mt-7 aspect-[16/9] max-w-2xl overflow-hidden">
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    width={1920}
                    height={1080}
                    sizes="(min-width: 1024px) 48vw, 92vw"
                    className="h-full w-full object-cover"
                  />
                </figure>
              </Reveal>
            )}

            <Reveal y={20} delay={0.08}>
              <p className="mt-7 max-w-2xl text-[14.5px] leading-[1.85] text-muted">
                {d.description}
              </p>

              {d.highlights && d.highlights.length > 0 && (
                <ul className="mt-6 flex max-w-2xl flex-wrap gap-2">
                  {d.highlights.map((h) => (
                    <li
                      key={h}
                      className="border border-bone/10 px-3 py-1.5 font-mono text-[9.5px] tracking-[0.18em] text-bone-dim uppercase"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
