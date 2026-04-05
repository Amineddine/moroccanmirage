import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moroccan Mirage — Editorial Luxury",
  description:
    "Curated luxury travel across Morocco's most iconic landscapes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-obsidian text-alabaster antialiased selection:bg-sandstone selection:text-obsidian flex flex-col">
        <LenisProvider>
          <main className="flex-1 w-full relative flex flex-col">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
