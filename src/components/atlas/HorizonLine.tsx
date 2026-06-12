"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * The Atlas horizon — a single golden filament fixed across the viewport.
 * Sections opt in with data-horizon="y,tilt,label" (y in vh, tilt in deg):
 *   <section data-horizon="62,-4,PL.02 · UNVEILED">
 * As each section crosses mid-viewport the line glides to its profile,
 * becoming ridgeline, dune crest, or sea horizon.
 */
export default function HorizonLine() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const wrap = wrapRef.current;
    const line = lineRef.current;
    const label = labelRef.current;
    if (!wrap || !line || !label) return;

    const triggers: ScrollTrigger[] = [];
    let raf = 0;

    const goTo = (y: number, tilt: number, text: string) => {
      gsap.to(wrap, { top: `${y}vh`, duration: 1.4, ease: "power3.inOut" });
      gsap.to(line, { rotate: tilt, duration: 1.4, ease: "power3.inOut" });
      if (label.textContent !== text) {
        gsap.to(label, {
          opacity: 0,
          duration: 0.25,
          onComplete: () => {
            label.textContent = text;
            gsap.to(label, { opacity: 1, duration: 0.4 });
          },
        });
      }
    };

    // let the new page paint before measuring
    raf = requestAnimationFrame(() => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-horizon]"));
      if (sections.length === 0) {
        gsap.to(wrap, { opacity: 0, duration: 0.6 });
        return;
      }
      gsap.to(wrap, { opacity: 1, duration: 0.6 });

      sections.forEach((el) => {
        const [y = "50", tilt = "0", text = ""] = (el.dataset.horizon ?? "").split(",");
        triggers.push(
          ScrollTrigger.create({
            trigger: el,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => {
              if (self.isActive) goTo(parseFloat(y), parseFloat(tilt), text.trim());
            },
          })
        );
      });
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      triggers.forEach((t) => t.kill());
    };
  }, [pathname, reduced]);

  if (reduced) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed left-0 right-0 z-[60] opacity-0 mix-blend-screen"
      style={{ top: "50vh" }}
    >
      <div ref={lineRef} className="relative mx-[-6vw] origin-center">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,162,39,0.55) 22%, rgba(226,174,69,0.9) 50%, rgba(201,162,39,0.55) 78%, transparent)",
            boxShadow: "0 0 18px rgba(226,174,69,0.35)",
          }}
        />
        <span
          className="absolute left-1/2 top-1/2 h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-amber"
          style={{ boxShadow: "0 0 10px rgba(226,174,69,0.9)" }}
        />
      </div>
      <span
        ref={labelRef}
        className="absolute right-[7vw] top-2 font-mono text-[9px] tracking-[0.3em] text-gold uppercase"
      />
    </div>
  );
}
