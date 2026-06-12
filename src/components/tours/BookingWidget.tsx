"use client";

import Link from "next/link";
import { useState } from "react";
import { CITY_META, CITY_IDS, type CityId } from "@/data/tours";

/** The booking manifest — a ticket-stub ledger pinned beside the route. */
export default function BookingWidget({ defaultCity }: { defaultCity: CityId }) {
  const [city, setCity] = useState<CityId>(defaultCity);
  const [vehicle, setVehicle] = useState("Luxury 4x4");

  return (
    <aside className="corner-ticks border border-bone/15 bg-panel p-7 md:p-9">
      <p className="plate-label">Booking Manifest</p>

      <div className="mt-8 space-y-7">
        <Field label="Departure City">
          <select
            className="field font-mono text-[13px] tracking-wider"
            value={city}
            onChange={(e) => setCity(e.target.value as CityId)}
          >
            {CITY_IDS.map((id) => (
              <option key={id} value={id}>
                {CITY_META[id].name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Vehicle">
          <select
            className="field font-mono text-[13px] tracking-wider"
            value={vehicle}
            onChange={(e) => setVehicle(e.target.value)}
          >
            <option>Luxury 4x4</option>
            <option>Minivan</option>
          </select>
        </Field>

        <Field label="Guide">
          <p className="py-2 font-mono text-[13px] tracking-wider text-bone">Local Expert</p>
        </Field>

        <div className="border-t border-dashed border-bone/20 pt-6">
          <div className="flex items-baseline justify-between">
            <span className="mono-note">Price</span>
            <span className="font-display text-xl italic text-amber">Contact for Price</span>
          </div>
        </div>
      </div>

      <Link
        href="/contact"
        className="mt-9 block border border-gold/60 bg-gold/10 py-4 text-center font-mono text-[11px] tracking-[0.3em] text-gold uppercase transition-colors duration-300 hover:bg-gold hover:text-abyss"
      >
        Inquire Now →
      </Link>

      <p className="mono-note mt-5 text-center !text-[9px]">
        No payment required — our concierge responds within 24 hours
      </p>
    </aside>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mono-note mb-1 block">{label}</span>
      {children}
    </label>
  );
}
