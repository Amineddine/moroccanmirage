"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { UNVEILED } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import Coordinates from "@/components/atlas/Coordinates";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Plate 02 — Morocco Unveiled.
 * A pinned cinematic sequence: four landscapes wipe upward over one another
 * while the expedition captions hand over, scrubbed to scroll.
 */
export default function Unveiled() {
  const scope = useRef<HTMLElement>(null);
  const desktop = useMediaQuery("(min-width: 1024px)");
  const reduced = useReducedMotion();
  const pinned = desktop && !reduced;

  useGSAP(
    () => {
      if (!pinned || !scope.current) return;

      const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", scope.current);
      const captions = gsap.utils.toArray<HTMLElement>("[data-caption]", scope.current);
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", scope.current);

      // initial states
      scenes.forEach((s, i) => {
        if (i > 0) gsap.set(s, { clipPath: "inset(100% 0% 0% 0%)" });
        gsap.set(s.querySelector("img"), { scale: i === 0 ? 1 : 1.18 });
      });
      captions.forEach((c, i) => gsap.set(c, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 36 }));
      gsap.set(dots[0], { color: "#e2ae45" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "+=280%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      UNVEILED.forEach((_, i) => {
        if (i === 0) return;
        const at = i;
        tl.to(scenes[i], { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "none" }, at)
          .to(scenes[i].querySelector("img"), { scale: 1, duration: 1.2, ease: "none" }, at)
          .to(scenes[i - 1].querySelector("img"), { scale: 1.08, duration: 1, ease: "none" }, at)
          .to(captions[i - 1], { opacity: 0, y: -28, duration: 0.35 }, at)
          .to(captions[i], { opacity: 1, y: 0, duration: 0.4 }, at + 0.3)
          .to(dots[i - 1], { color: "#6b5d49", duration: 0.2 }, at)
          .to(dots[i], { color: "#e2ae45", duration: 0.2 }, at + 0.2);
      });
    },
    { scope, dependencies: [pinned] }
  );

  if (!pinned) {
    /* static editorial fallback — mobile & reduced motion */
    return (
      <section data-horizon="36,3,PL.02 · UNVEILED" className="bg-abyss py-24">
        <div className="mx-auto max-w-[1680px] px-6">
          <p className="plate-label mb-10">Plate 02 — Morocco Unveiled</p>
          <div className="space-y-16">
            {UNVEILED.map((scene, i) => (
              <Reveal key={scene.name}>
                <figure>
                  <div className="img-grade aspect-[4/5] overflow-hidden sm:aspect-[16/10]">
                    <Image
                      src={scene.image}
                      alt={scene.name}
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-5">
                    <p className="mono-note">
                      {String(i + 1).padStart(2, "0")} — {scene.name}
                    </p>
                    <h3 className="font-display mt-2 text-3xl font-light italic text-bone">
                      {scene.heading}
                    </h3>
                    <p className="mt-2 text-[14.5px] text-muted">{scene.caption}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={scope}
      data-horizon="36,3,PL.02 · UNVEILED"
      className="relative h-screen overflow-hidden bg-abyss"
    >
      {/* scenes */}
      {UNVEILED.map((scene, i) => (
        <div key={scene.name} data-scene className="img-grade absolute inset-0" style={{ zIndex: i }}>
          <Image
            src={scene.image}
            alt={scene.name}
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* dark editorial scrim */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-night via-transparent to-night/55" />

      {/* plate annotation */}
      <div className="absolute left-12 top-28 z-30">
        <p className="plate-label">Plate 02 — Morocco Unveiled</p>
      </div>

      {/* captions — stacked in one grid cell so the column keeps its width */}
      <div className="absolute bottom-16 left-12 z-30 grid w-[min(40rem,calc(100vw-9rem))]">
        {UNVEILED.map((scene, i) => (
          <div key={scene.name} data-caption className="[grid-area:1/1] self-end">
            <p className="mono-note mb-3">
              {String(i + 1).padStart(2, "0")} / 04 — {scene.name}
            </p>
            <h3 className="font-display text-[clamp(2.2rem,4.2vw,4rem)] font-light italic leading-[1.05] text-bone">
              {scene.heading}
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-bone-dim">
              {scene.caption}
            </p>
          </div>
        ))}
      </div>

      {/* coordinates per scene, top right */}
      <div className="absolute right-12 top-28 z-30 text-right">
        <Coordinates value="EXPEDITION SURVEY — FOUR TERRAINS" />
      </div>

      {/* progress rail */}
      <div className="absolute right-12 top-1/2 z-30 flex -translate-y-1/2 flex-col items-end gap-5">
        {UNVEILED.map((scene, i) => (
          <span
            key={scene.name}
            data-dot
            className="font-mono text-[10px] tracking-[0.3em] text-faint transition-colors"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
        ))}
      </div>
    </section>
  );
}
