import type { Metadata } from "next";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's craft your journey. Contact our concierges to begin a bespoke Moroccan itinerary.",
};

export default function ContactPage() {
  return <ContactClient />;
}
