"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./../components/HeroSection";
import Particles from "./../components/Particles";
import BusinessComponent from "./../components/BusinessComponent";
import AboutComponent from "./../components/AboutComponent";
import BackgroundSVG from "./../components/BackgroundSVG";

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center", // Animation starts when the top of the hero section hits the center of the viewport
        end: "bottom top", // Animation ends when the bottom of the hero section leaves the top of the viewport
        scrub: true,
      },
    });

    // Animate the hero section background to blue in the first half of the scroll
    tl.to(heroRef.current, {
      background: "#000066",
      ease: "none",
    });

    // Animate the hero section background back to black in the second half of the scroll
    tl.to(heroRef.current, {
      background: "#000000",
      ease: "none",
    });
  }, []);

  return (
    <main className="min-h-screen">
      <>
        <div className="relative min-h-screen bg-black">
          <Particles className="absolute inset-0 z-0" />
          <HeroSection ref={heroRef} className="relative z-10" />
          <BusinessComponent className="relative z-10 mt-20" />
          <AboutComponent className="relative z-10 mt-20" />
        </div>
      </>
    </main>
  );
}
