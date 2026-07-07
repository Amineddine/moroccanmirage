import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/data/site";
import SmoothScroll from "@/components/providers/SmoothScroll";
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

const DESCRIPTION =
  "Curated luxury travel across Morocco's most iconic landscapes. Where the golden Sahara meets the silence of the Atlas peaks. Est. 2018, Marrakech.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Moroccan Mirage — Curated Luxury Travel Across Morocco",
    template: "%s — Moroccan Mirage",
  },
  description: DESCRIPTION,
  keywords: [
    "morocco tours",
    "luxury morocco travel",
    "sahara desert tour",
    "marrakech tours",
    "private morocco tour",
    "morocco travel agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Moroccan Mirage",
    url: SITE_URL,
    title: "Moroccan Mirage — Curated Luxury Travel Across Morocco",
    description: DESCRIPTION,
    images: [
      {
        url: "/generated/hero-tours-hub.jpg",
        width: 1920,
        height: 1080,
        alt: "A desert caravan route at dusk in southern Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moroccan Mirage — Curated Luxury Travel Across Morocco",
    description: DESCRIPTION,
    images: ["/generated/hero-tours-hub.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f4eddd",
};

const AGENCY_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Moroccan Mirage",
  url: SITE_URL,
  logo: `${SITE_URL}/moroccanmiragelogo.png`,
  description: DESCRIPTION,
  foundingDate: "2018",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  areaServed: { "@type": "Country", name: "Morocco" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(AGENCY_JSON_LD) }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <GrainOverlay />
      </body>
    </html>
  );
}
