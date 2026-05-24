"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import Button from "@/components/ui/Button"

interface NavLink {
  label: string
  href: string
  dropdown?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Morocco Tours",
    href: "#",
    dropdown: [
      { label: "From Marrakech", href: "/tours/marrakech" },
      { label: "From Casablanca", href: "/tours/casablanca" },
      { label: "From Tangier", href: "/tours/tangier" },
      { label: "From Fes", href: "/tours/fes" },
    ],
  },
  {
    label: "Excursions",
    href: "#",
    dropdown: [
      { label: "Imlil", href: "/excursions" },
      { label: "Ourika", href: "/excursions" },
      { label: "Agafay Desert", href: "/excursions" },
      { label: "Chefchaouen", href: "/excursions" },
      { label: "Essaouira", href: "/excursions" },
      { label: "Ait Ben Haddou", href: "/excursions" },
      { label: "Ouzoud Falls", href: "/excursions" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-2 min-w-[200px] bg-obsidian border border-sandstone/20 py-2"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="block px-5 py-2.5 font-body text-sm text-alabaster/70 hover:text-sandstone hover:bg-obsidian-light transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  )
}

function DesktopNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <div className="hidden lg:flex items-center gap-8">
      {navLinks.map((link) => (
        <div
          key={link.label}
          className="relative"
          onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {link.dropdown ? (
            <button className="flex items-center gap-1 font-body text-sm text-alabaster/80 hover:text-sandstone transition-colors group">
              {link.label}
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
              />
            </button>
          ) : (
            <Link
              href={link.href}
              className="font-body text-sm text-alabaster/80 hover:text-sandstone transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-sandstone after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          )}
          {link.dropdown && (
            <AnimatePresence>
              {openDropdown === link.label && (
                <DropdownMenu items={link.dropdown} />
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </div>
  )
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-alabaster/60 hover:text-sandstone transition-colors"
        aria-label="Close menu"
      >
        <X size={28} />
      </button>

      <nav className="flex flex-col items-center gap-8">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
          >
            {link.dropdown ? (
              <div className="text-center">
                <span className="font-display text-3xl text-alabaster/50 italic">{link.label}</span>
                <div className="mt-3 flex flex-col items-center gap-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onClose}
                      className="font-body text-sm text-alabaster/60 hover:text-sandstone transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={link.href}
                onClick={onClose}
                className="font-display text-4xl text-alabaster hover:text-sandstone transition-colors italic"
              >
                {link.label}
              </Link>
            )}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.4 }}
        >
          <Button href="/contact" variant="primary">Book Now</Button>
        </motion.div>
      </nav>
    </motion.div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  const bgColor = useTransform(
    scrollY,
    [0, 60],
    ["rgba(10,10,10,0)", "rgba(10,10,10,0.85)"]
  )
  const blurAmount = useTransform(scrollY, [0, 60], [0, 1])
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 0.15])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: bgColor,
            backdropFilter: blurAmount.get() > 0 ? "blur(12px)" : "none",
            borderBottom: `1px solid rgba(194,178,163,${borderOpacity.get()})`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <Link href="/">
            <Image
              src="/moroccanmiragelogo.png"
              alt="Moroccan Mirage"
              width={140}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          <DesktopNav />

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary">Book Now</Button>
          </div>

          <button
            className="lg:hidden text-alabaster/80 hover:text-sandstone transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
