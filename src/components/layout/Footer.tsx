"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import SectionLabel from "@/components/ui/SectionLabel"

function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-sandstone text-obsidian text-xs uppercase tracking-widest px-4 py-2 hover:bg-sandstone-light transition-colors font-body"
    >
      Back to Top
    </button>
  )
}

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-sandstone/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16 border-b border-sandstone/20 pb-16">
          <p className="font-display text-6xl lg:text-8xl text-sandstone/20 tracking-widest uppercase">
            MOROCCAN MIRAGE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          <div>
            <div className="mb-6">
              <Image
                src="/moroccanmiragelogo.png"
                alt="Moroccan Mirage"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-alabaster/50 font-body text-sm leading-relaxed">
              Elevating your Moroccan journey with unparalleled luxury, bespoke itineraries, and elite professional transportation.
            </p>
          </div>

          <div>
            <div className="mb-6">
              <SectionLabel>Get In Touch</SectionLabel>
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+212777767855"
                  className="flex items-center gap-3 text-alabaster/50 hover:text-sandstone transition-colors font-body text-sm"
                >
                  <Phone size={14} className="shrink-0 text-sandstone/60" />
                  +212 777-767-855
                </a>
              </li>
              <li>
                <a
                  href="mailto:moroccomirage@gmail.com"
                  className="flex items-center gap-3 text-alabaster/50 hover:text-sandstone transition-colors font-body text-sm"
                >
                  <Mail size={14} className="shrink-0 text-sandstone/60" />
                  moroccomirage@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-alabaster/50 font-body text-sm">
                  <MapPin size={14} className="shrink-0 text-sandstone/60" />
                  Marrakech, Morocco
                </span>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-6">
              <SectionLabel>Explore</SectionLabel>
            </div>
            <ul className="space-y-3">
              {[
                { label: "Tours", href: "/tours" },
                { label: "Excursions", href: "/excursions" },
                { label: "Contact", href: "/contact" },
                { label: "Customize", href: "/customize" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-alabaster/50 hover:text-sandstone transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-6">
              <SectionLabel>Legal</SectionLabel>
            </div>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="font-body text-sm text-alabaster/50 hover:text-sandstone transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-body text-sm text-alabaster/50 hover:text-sandstone transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
            <p className="mt-6 font-display italic text-sandstone/50 text-sm">
              Est. 2018
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-sandstone/10">
          <p className="font-body text-xs text-alabaster/30">
            © {new Date().getFullYear()} Moroccan Mirage. All rights reserved.
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
