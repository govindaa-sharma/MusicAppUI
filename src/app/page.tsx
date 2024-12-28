import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars,tsx";
import WhyChoseUs from "@/components/WhyChoseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-blck/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChoseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
