import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/atlas/PageHero";
import Reveal from "@/components/ui/Reveal";
import AtlasLink from "@/components/ui/AtlasLink";
import { EXCURSIONS } from "@/data/excursions";

export const metadata: Metadata = {
  title: "Curated Excursions",
  description:
    "Immerse yourself deeply for just a day. From cascading waterfalls to ancient red-clay citadels, these exclusive short journeys are designed for maximal impact.",
};

export default function ExcursionsPage() {
  return (
    <main>
      <PageHero
        image="/generated/hero-excursions-hub.jpg"
        alt="Golden hour over the Moroccan landscape"
        label="Single Day Escapes"
        title={
          <>
            Curated <span className="italic text-amber">Excursions</span>
          </>
        }
        sub="Immerse yourself deeply for just a day. From cascading waterfalls to ancient red-clay citadels, these exclusive short journeys are designed for maximal impact."
        coordinates="SEVEN ESCAPES — ONE DAY EACH"
        horizon="72,0,DAY ESCAPES"
      />

      <section data-horizon="46,-2,ESCAPES" className="bg-night py-24 md:py-32">
        <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
          <Reveal>
            <p className="plate-label mb-16">07 escapes — surveyed for maximum impact</p>
          </Reveal>

          <div className="space-y-24 md:space-y-32">
            {EXCURSIONS.map((ex, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={ex.id}>
                  <article
                    className={`group grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 ${
                      flip ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <Link
                      href={`/excursions/${ex.id}`}
                      className="corner-ticks block border border-bone/10 p-3 transition-colors duration-500 hover:border-gold/40"
                    >
                      <div className="img-grade relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={ex.image}
                          alt={ex.location}
                          fill
                          sizes="(min-width: 1024px) 52vw, 92vw"
                          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                        />
                        <span className="font-display absolute right-5 top-3 z-10 text-4xl font-light text-bone/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </Link>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <span className="font-mono text-[11px] tracking-[0.26em] text-gold uppercase">
                          {ex.duration}
                        </span>
                        <span className="mono-note">{ex.location}</span>
                      </div>

                      <h2 className="font-display mt-5 text-[clamp(1.9rem,3.2vw,3rem)] font-light leading-[1.12] text-bone transition-colors duration-500 group-hover:text-amber">
                        <Link href={`/excursions/${ex.id}`}>{ex.title}</Link>
                      </h2>

                      <p className="font-display mt-4 text-lg italic text-amber/90">{ex.blurb}</p>

                      <ul className="mt-6 space-y-2.5">
                        {ex.highlights.slice(0, 3).map((h) => (
                          <li key={h} className="flex items-start gap-3 text-[14px] text-muted">
                            <span aria-hidden className="mt-[7px] h-[5px] w-[5px] shrink-0 rotate-45 bg-gold/80" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8">
                        <AtlasLink href={`/excursions/${ex.id}`} variant="bare">
                          Read the day&apos;s program
                        </AtlasLink>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
