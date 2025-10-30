"use client";

// import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutCompany from "@/components/AboutCompany";
import ClientTestimonials from "../components/ClientTestimonials";
import OurBlog from "@/components/OurBlog";
import Subscribe from "@/components/Subscribe";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />

        <div data-aos="fade-up" data-aos-delay="200">
          <AboutCompany />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <OurBlog />
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <Subscribe />
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <ClientTestimonials />
        </div>
      </main>
    </div>
  );
}
