import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/atlas/PageHero";
import Reveal from "@/components/ui/Reveal";
import { CITY_IDS, CITY_META, TOURS_BY_CITY } from "@/data/tours";

export const metadata: Metadata = {
  title: "Morocco Tours",
  description:
    "Select your starting point and embark on an unforgettable journey across the dunes, mountains, and ancient medinas.",
};

const NUMERALS = ["I", "II", "III", "IV"];

export default function ToursPage() {
  return (
    <main>
      <PageHero
        image="/generated/hero-tours-hub.jpg"
        alt="A desert caravan route at dusk in southern Morocco"
        label="The Atlas of Departures"
        title={
          <>
            Discover <span className="italic text-amber">Your</span> Morocco
          </>
        }
        sub="Select your starting point and embark on an unforgettable journey across the dunes, mountains, and ancient medinas."
        coordinates="FOUR MERIDIANS — TWENTY-TWO ROUTES"
        horizon="72,0,ATLAS · DEPARTURES"
      />

      {/* typographic table of departures */}
      <section
        data-horizon="48,-2,ATLAS · INDEX"
        className="bg-night py-24 md:py-36"
      >
        <div className="mx-auto max-w-[1680px] px-6 lg:px-12">
          <Reveal>
            <p className="plate-label mb-14">Table of Departures — select a meridian</p>
          </Reveal>

          {CITY_IDS.map((id, i) => {
            const city = CITY_META[id];
            const count = TOURS_BY_CITY(id).length;
            return (
              <Reveal key={id} delay={i * 0.06}>
                <Link
                  href={`/tours/${id}`}
                  className="group block border-t border-bone/10 py-10 last:border-b md:py-14"
                >
                  <div className="grid items-center gap-5 md:grid-cols-[64px_1fr_auto]">
                    <span className="font-display hidden text-2xl font-light text-gold/70 md:block">
                      {NUMERALS[i]}
                    </span>

                    <div>
                      <h2 className="text-outline font-display text-[clamp(2.8rem,8vw,7.2rem)] font-light leading-[0.95] uppercase tracking-[0.02em] transition-colors duration-700 group-hover:text-bone">
                        {city.name}
                      </h2>
                      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span className="font-display text-lg italic text-amber">{city.epithet}</span>
                        <span className="mono-note">{city.coordinates}</span>
                      </div>
                    </div>

                    <div className="text-left md:text-right">
                      <p className="font-mono text-[12px] tracking-[0.3em] text-gold uppercase">
                        {String(count).padStart(2, "0")} itineraries
                      </p>
                      <p className="mono-note mt-3 transition-colors duration-300 group-hover:text-gold">
                        Open chart{" "}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                          →
                        </span>
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 max-w-2xl text-[14.5px] leading-relaxed text-muted md:ml-[64px]">
                    {city.intro}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
