import type { Metadata } from "next"
import { Playfair_Display, Raleway } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/layout/SmoothScroll"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CustomCursor from "@/components/layout/CustomCursor"
import PageTransition from "@/components/layout/PageTransition"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Moroccan Mirage — Editorial Luxury Travel",
  description:
    "Curated luxury travel across Morocco's most iconic landscapes. Where the golden Sahara meets the silence of the Atlas peaks.",
  keywords: [
    "Morocco tours",
    "luxury travel Morocco",
    "Sahara desert",
    "Marrakech",
    "Moroccan Mirage",
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${raleway.variable}`}>
      <body className="bg-obsidian text-alabaster font-body antialiased grain overflow-x-hidden">
        <SmoothScroll>
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
