"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./../components/HeroSection";
import Particles from "./../components/Particles";
import BusinessComponent from "./../components/BusinessComponent";
import AboutComponent from "./../components/AboutComponent";
import Footer from "./../components/Footer";
import ForestComponent from "./../components/ForestComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(heroRef.current, {
      background: "#000066",
      ease: "none",
    });

    tl.to(heroRef.current, {
      background: "#000000",
      ease: "none",
    });
  }, []);

  return (
    <main className="min-h-screen">
      <>
        <div className="relative min-h-screen bg-black overflow-hidden">
          <Particles className="absolute inset-0 z-0" />
          <div className="w-full bg-transparent fixed inset-x-0 top-0 z-100">
            <Navbar />
          </div>
          <HeroSection ref={heroRef} className="relative z-10" />
          <BusinessComponent className="relative z-10 mt-20" />
          <AboutComponent className="relative z-10 mt-20" />
          <ForestComponent className="relative z-10 mt-20" />
          <Footer className="relative z-10 mt-20" />
        </div>
      </>
    </main>
  );
}
