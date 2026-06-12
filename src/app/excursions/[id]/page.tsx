import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/atlas/PageHero";
import Reveal from "@/components/ui/Reveal";
import AtlasLink from "@/components/ui/AtlasLink";
import { EXCURSIONS, getExcursion } from "@/data/excursions";

export function generateStaticParams() {
  return EXCURSIONS.map((e) => ({ id: e.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const ex = getExcursion(id);
  if (!ex) return {};
  return { title: ex.title, description: ex.blurb };
}

export default async function ExcursionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ex = getExcursion(id);
  if (!ex) notFound();
  const others = EXCURSIONS.filter((e) => e.id !== ex.id).slice(0, 3);

  return (
    <main>
      <PageHero
        image={ex.hero}
        alt={ex.location}
        label={`Day Escape — ${ex.location}`}
        title={ex.title}
        sub={ex.blurb}
        coordinates={ex.coordinates}
        horizon="72,0,DAY ESCAPE"
        meta={
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div>
              <p className="mono-note">Duration</p>
              <p className="mt-1 font-mono text-[13px] tracking-[0.18em] text-gold uppercase">
                {ex.duration}
              </p>
            </div>
            <div>
              <p className="mono-note">Departure</p>
              <p className="mt-1 font-mono text-[13px] tracking-[0.18em] text-gold uppercase">
                From your accommodation
              </p>
            </div>
          </div>
        }
      />

      <section data-horizon="46,-2,PROGRAM" className="bg-night py-20 md:py-28">
        <div className="mx-auto grid max-w-[1680px] gap-16 px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:px-12">
          <div>
            <Reveal>
              <div className="mb-10 flex items-center gap-4">
                <span className="plate-label">The Program</span>
                <span className="rule-gold w-16" />
                <span className="mono-note">{ex.location}</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-[17px] leading-[1.9] text-bone-dim first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-light first-letter:leading-[0.85] first-letter:text-gold">
                {ex.program}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-16">
                <p className="plate-label mb-8">Highlights of the Day</p>
                <ul className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2">
                  {ex.highlights.map((h, i) => (
                    <li key={h} className="bg-night p-6">
                      <p className="font-mono text-[10px] tracking-[0.3em] text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 text-[14.5px] leading-relaxed text-bone-dim">{h}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* rail */}
          <div className="space-y-10 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <aside className="corner-ticks border border-bone/15 bg-panel p-7 md:p-9">
                <p className="plate-label">Reserve This Escape</p>
                <div className="mt-7 space-y-5">
                  <Row label="Excursion" value={ex.location} />
                  <Row label="Duration" value={ex.duration} />
                  <Row label="Vehicle" value="Luxury 4x4 / Minivan" />
                  <Row label="Guide" value="Local Expert" />
                  <div className="border-t border-dashed border-bone/20 pt-5">
                    <div className="flex items-baseline justify-between">
                      <span className="mono-note">Price</span>
                      <span className="font-display text-xl italic text-amber">Contact for Price</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="mt-8 block border border-gold/60 bg-gold/10 py-4 text-center font-mono text-[11px] tracking-[0.3em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-abyss"
                >
                  Inquire Now →
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* other escapes */}
      <section data-horizon="55,2,RELATED" className="border-t border-bone/[0.07] bg-abyss py-20 md:py-28">
        <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-display text-3xl font-light text-bone md:text-4xl">
                More single-day <span className="italic text-amber">escapes</span>
              </h2>
              <AtlasLink href="/excursions" variant="bare">
                All excursions
              </AtlasLink>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-px border border-bone/10 bg-bone/10 md:grid-cols-3">
            {others.map((o, i) => (
              <Link
                key={o.id}
                href={`/excursions/${o.id}`}
                className="group bg-night p-8 transition-colors duration-500 hover:bg-panel"
              >
                <p className="font-mono text-[10px] tracking-[0.3em] text-gold uppercase">
                  {String(i + 1).padStart(2, "0")} — {o.duration}
                </p>
                <h3 className="font-display mt-4 text-xl font-light leading-snug text-bone transition-colors duration-300 group-hover:text-amber">
                  {o.title}
                </h3>
                <p className="mono-note mt-5 transition-colors group-hover:text-gold">
                  View program →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="mono-note shrink-0">{label}</span>
      <span className="text-right font-mono text-[12px] tracking-[0.14em] text-bone uppercase">
        {value}
      </span>
    </div>
  );
}
