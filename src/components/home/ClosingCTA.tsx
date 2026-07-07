import { CLOSING } from "@/data/site";
import AtlasLink from "@/components/ui/AtlasLink";
import Reveal from "@/components/ui/Reveal";
import DuneCanvas from "@/components/three/DuneCanvas";

/** Plate 08 — The Next Step. A wireframe dune sea breathes beneath the final invitation. */
export default function ClosingCTA() {
  return (
    <section
      data-horizon="38,0,PL.08 · BEGIN"
      className="relative overflow-hidden bg-abyss py-36 md:py-52"
    >
      <DuneCanvas />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 70% at 50% 30%, transparent, rgba(235,225,202,0.85) 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 text-center lg:px-12">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <span className="rule-gold w-16" />
            <span className="plate-label">{CLOSING.label}</span>
            <span className="rule-gold w-16" />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 text-[clamp(3rem,8vw,7.5rem)] font-light leading-[1] text-bone">
            Ready to <span className="italic text-amber">Begin?</span>
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-bone-dim">
            {CLOSING.body}
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <AtlasLink href={CLOSING.primary.href}>{CLOSING.primary.label}</AtlasLink>
            <AtlasLink href={CLOSING.secondary.href} variant="ghost">
              {CLOSING.secondary.label}
            </AtlasLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
