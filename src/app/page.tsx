import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ExperienceShowcase />
      <WhyChooseUs />
      <Story />
      <Testimonials />
      <Gallery />
      <BookingCTA />
    </>
  );
}
