"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import AcademicProjects from "@/components/sections/AcademicProjects";
import FreelanceProjects from "@/components/sections/FreelanceProjects";
import Events from "@/components/sections/Events";
import Footer from "@/components/layout/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {/* 
        Wrap the main content in a div that handles visibility based on loading state.
        This prevents scroll jumping while the loader is active.
      */}
      <div className={`transition-opacity duration-700 ${loading ? "opacity-0 overflow-hidden h-screen" : "opacity-100"}`}>
        <Hero />
        <About />
        <Experience />
        <AcademicProjects />
        <FreelanceProjects />
        <Events />
        <Footer />
      </div>
    </>
  );
}
