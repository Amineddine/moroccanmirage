import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesIndex from "@/components/home/ServicesIndex";
import Unveiled from "@/components/home/Unveiled";
import Ledger from "@/components/home/Ledger";
import Philosophy from "@/components/home/Philosophy";
import Departures from "@/components/home/Departures";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import ClosingCTA from "@/components/home/ClosingCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesIndex />
      <Unveiled />
      <Ledger />
      <Philosophy />
      <Departures />
      <Testimonials />
      <Gallery />
      <ClosingCTA />
    </main>
  );
}
