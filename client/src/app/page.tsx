"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Generator from "../components/Generator";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Generator />
      <Features />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
