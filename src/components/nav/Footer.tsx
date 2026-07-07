import Image from "next/image";
import Link from "next/link";
import { BRAND, FOOTER } from "@/data/site";
import BackToTop from "./BackToTop";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-bone/[0.07] bg-abyss">
      <div className="mx-auto max-w-[1680px] px-6 pt-20 pb-10 lg:px-12">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr_auto]">
          {/* brand + about */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={BRAND.logo}
                alt="Moroccan Mirage"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div className="leading-none">
                <p className="font-display text-lg text-bone">Moroccan Mirage</p>
                <p className="mono-note mt-1 !text-[8.5px] !tracking-[0.4em]">{BRAND.est} — {BRAND.city}</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-muted">
              {FOOTER.about}
            </p>
          </div>

          {/* contact */}
          <div>
            <p className="plate-label mb-6">Contact</p>
            <ul className="space-y-3 text-[15px]">
              <li>
                <a href={BRAND.phoneHref} className="text-bone-dim transition-colors hover:text-gold">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="text-bone-dim transition-colors hover:text-gold">
                  {BRAND.email}
                </a>
              </li>
              <li className="text-muted">{BRAND.city}</li>
            </ul>
          </div>

          {/* nav */}
          <div>
            <p className="plate-label mb-6">Navigate</p>
            <ul className="space-y-3 text-[15px]">
              {FOOTER.nav.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-bone-dim transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <BackToTop />
        </div>

        {/* giant brand mark — slow marquee so the full name always reads */}
        <div className="mt-20 select-none overflow-hidden" aria-hidden>
          <div className="animate-marquee flex w-max">
            {[0, 1].map((copy) => (
              <p
                key={copy}
                className="text-outline font-brand whitespace-nowrap text-[clamp(2.6rem,9.5vw,10rem)] leading-none tracking-[0.08em]"
              >
                MOROCCAN MIRAGE&nbsp;✦&nbsp;MOROCCAN MIRAGE&nbsp;✦&nbsp;
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-bone/[0.07] pt-8 sm:flex-row">
          <p className="mono-note">© {year} Moroccan Mirage. All rights reserved.</p>
          <ul className="flex gap-8">
            {FOOTER.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="mono-note transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
