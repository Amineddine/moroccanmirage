import type { Metadata } from "next";
import CustomizeClient from "@/components/customize/CustomizeClient";

export const metadata: Metadata = {
  title: "Customize Your Trip",
  description:
    "Craft your signature journey. Eight questions, one exquisitely tailored Moroccan itinerary.",
};

export default function CustomizePage() {
  return <CustomizeClient />;
}
