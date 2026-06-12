import { STATS, PILLARS } from "@/data/site";
import PlateHeading from "@/components/atlas/PlateHeading";
import AnimatedNumber from "@/components/ui/AnimatedNumber";
import Reveal from "@/components/ui/Reveal";

/** Plate 03 — The Expedition Ledger: figures and field notes, set like a survey table. */
export default function Ledger() {
  return (
    <section data-horizon="52,0,PL.03 · LEDGER" className="bg-night py-28 md:py-40">
      <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <PlateHeading
            plate="Plate 03"
            label="Expedition Ledger"
            title={
              <>
                Eight years, <span className="italic text-amber">measured</span>
              </>
            }
          />
          <Reveal delay={0.15}>
            <p className="mono-note md:pb-3">Audited — Marrakech HQ</p>
          </Reveal>
        </div>

        {/* figures */}
        <div className="mt-16 grid grid-cols-2 border-t border-bone/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-b border-bone/10 px-2 py-10 md:px-8 md:py-14 lg:border-b-0 lg:border-r lg:border-bone/10 lg:first:pl-0 lg:last:border-r-0"
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">
                Fig. {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-display mt-4 text-[clamp(2.6rem,5vw,4.6rem)] font-light leading-none text-bone">
                <AnimatedNumber value={s.value} />
                <span className="text-amber">{s.suffix}</span>
              </p>
              <p className="mt-3 text-[15px] text-bone-dim">{s.label}</p>
              <p className="mt-1 text-[13px] text-muted">{s.note}</p>
            </Reveal>
          ))}
        </div>

        {/* field notes */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <p className="plate-label mb-10">Field Notes — Standards of Service</p>
          </Reveal>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="group">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="h-[7px] w-[7px] rotate-45 border border-gold transition-colors duration-500 group-hover:bg-gold"
                    />
                    <h3 className="font-display text-xl font-light text-bone">{p.title}</h3>
                  </div>
                  <div className="rule-bone mt-4 mb-4 w-full" />
                  <p className="text-[14px] leading-relaxed text-muted">{p.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
