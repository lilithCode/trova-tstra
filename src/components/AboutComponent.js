"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutComponent = () => {
  const containerRef = useRef(null);
  const ourRef = useRef(null);
  const NameRef = useRef(null);
  const backgroundRef = useRef(null);
  const buttonRef = useRef(null);
  const contentContainerRef = useRef(null);

  useGSAP(
    () => {
      // Set initial state for all elements to be hidden
      gsap.set(backgroundRef.current, {
        opacity: 0,
      });

      gsap.set(
        [ourRef.current.children, NameRef.current.children, buttonRef.current],
        {
          xPercent: 100,
          yPercent: -100,
          opacity: 0,
          scale: 0.5,
        }
      );

      // Create a single master timeline that will control everything
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Pin the container to the top of the viewport
          end: "+=2000", // Total scroll distance for the entire animation (intro + hold + outro)
          pin: true, // Keep the container fixed in place during the scroll
          scrub: 1, // Smoothly scrub the animation with the scroll
          markers: false,
        },
      });

      // Phase 1: Animate the text and button into view
      masterTl.to(
        [ourRef.current.children, NameRef.current.children, buttonRef.current],
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
        }
      );

      // Phase 2: Animate the SVG background to be visible
      // This happens after the text animation is complete. The total timeline is 2000px, so we can use a relative position
      masterTl.to(
        backgroundRef.current,
        {
          opacity: 0.5,
          ease: "power2.inOut",
        },
        "+=0.5"
      ); // Start this animation 0.5 seconds after the previous one ends

      // Phase 3: Hold the view
      // The timeline will now simply "play" and hold the scene for a period
      // The scroll will continue for the duration of the pin

      // Phase 4: Animate the text, button, and SVG to fade out and shrink
      // We use a specific position to start this outro animation.
      // The `start` parameter here is relative to the start of the master timeline.
      masterTl.to(
        contentContainerRef.current,
        {
          scale: 0,
          opacity: 0,
          ease: "power1.in",
        },
        ">1"
      ); // Start this animation 1 second after the previous one finishes

      masterTl.to(
        backgroundRef.current,
        {
          opacity: 0,
          ease: "power1.in",
        },
        "<"
      ); // Start this animation at the exact same time as the previous one
    },
    { scope: containerRef }
  );

  const renderCharacters = (text, ref) => {
    return (
      <span ref={ref} className="inline-flex overflow-hidden">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char} {}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10 min-h-screen bg-transparent flex items-center justify-center"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <Image
          src="/backgroundPattern.svg"
          alt="Background Pattern"
          width={1000}
          height={1000}
          className="w-[70%] h-[90%] object-cover"
        />
      </div>
      <div
        ref={contentContainerRef}
        className="flex flex-col items-center justify-center text-white py-8 z-10"
      >
        <h2 className="text-7xl mb-6 text-center">
          {renderCharacters("WHO IS", ourRef)}
          <span className="ml-4 font-bold text-[#cc5200]">
            {renderCharacters("TROVA TSTRA?", NameRef)}
          </span>
        </h2>
        <div className="flex justify-center items-center">
          <button
            ref={buttonRef}
            className="px-8 py-4 text-white text-lg font-bold rounded-full border-2 border-orange-500"
          >
            About Us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
