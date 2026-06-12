"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Reveal from "@/components/ui/Reveal";
import type { ItineraryDay } from "@/data/tours";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * The route, drawn as it is travelled — a golden survey line that
 * extends down the margin as the reader scrolls, day markers igniting in turn.
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
          { backgroundColor: "rgba(13,10,7,1)", borderColor: "rgba(107,93,73,0.6)" },
          {
            backgroundColor: "#c9a227",
            borderColor: "#e2ae45",
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
          background: "linear-gradient(180deg, #e2ae45, #c9a227)",
          boxShadow: "0 0 8px rgba(226,174,69,0.4)",
        }}
      />

      <ol className="space-y-12 md:space-y-14">
        {itinerary.map((d) => (
          <li key={d.day} className="relative pl-10 md:pl-14">
            {/* node */}
            <span
              aria-hidden
              data-route-node
              className="absolute left-0 top-[6px] h-[15px] w-[15px] rotate-45 border bg-night md:h-[19px] md:w-[19px]"
              style={{ borderColor: "rgba(107,93,73,0.6)" }}
            />
            <Reveal y={20}>
              <p className="font-mono text-[10.5px] tracking-[0.32em] text-gold uppercase">
                Day {String(d.day).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-3 text-2xl font-light text-bone md:text-[1.7rem]">
                {d.title}
              </h3>
              <p className="mt-3 max-w-2xl text-[14.5px] leading-[1.8] text-muted">
                {d.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
