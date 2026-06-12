import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import HorizonLine from "@/components/atlas/HorizonLine";
import GrainOverlay from "@/components/atlas/GrainOverlay";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Moroccan Mirage — Curated Luxury Travel Across Morocco",
    template: "%s — Moroccan Mirage",
  },
  description:
    "Curated luxury travel across Morocco's most iconic landscapes. Where the golden Sahara meets the silence of the Atlas peaks. Est. 2018, Marrakech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable} ${marcellus.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-night text-bone">
        <SmoothScroll>
          <Navbar />
          <HorizonLine />
          {children}
          <Footer />
        </SmoothScroll>
        <GrainOverlay />
      </body>
    </html>
  );
}
