"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { Stories } from "./components/Stories";
import { Treatments } from "./components/Treatments";
import { Doctors } from "./components/Doctors";
import { ContactForm } from "./components/ContactForm";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white selection:bg-ruby-primary selection:text-white overflow-x-hidden max-w-[100vw]">
      <Navbar />

      <div className="relative">
        <Hero />

        {/* Gradient transition between sections */}
        <div className="absolute w-full h-32 bg-gradient-to-b from-transparent to-[#0f0f0f] -mt-32 pointer-events-none z-20" />
      </div>

      <div className="space-y-0">
        <BeforeAfterSlider />
        <Stories />
        <Treatments />
        <ContactForm />
        <Doctors />
        <Location />
      </div>

      <Footer />
    </main>
  );
}
