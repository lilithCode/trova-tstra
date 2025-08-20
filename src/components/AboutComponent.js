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
  // NEW: Refs for the main SVG and the dev SVGs
  const mainSvgRef = useRef(null);
  const devRefs = useRef([]);

  // Use a helper function to add refs to the array
  const addToDevRefs = (el) => {
    if (el && !devRefs.current.includes(el)) {
      devRefs.current.push(el);
    }
  };

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

      // NEW: Set initial state for the new SVGs
      gsap.set([mainSvgRef.current, ...devRefs.current], {
        opacity: 0,
        scale: 0,
      });

      // Create a single master timeline that will control everything
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=8000", // Increased total scroll distance
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      // Phase 1: Animate the initial text and button into view
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
      masterTl.to(
        backgroundRef.current,
        {
          opacity: 0.5,
          ease: "power2.inOut",
        },
        "+=0.5"
      );

      // Phase 3: Hold the view

      // Phase 4: Animate the text, button, and first SVG to fade out and shrink
      masterTl.to(
        contentContainerRef.current,
        {
          scale: 0,
          opacity: 0,
          ease: "power1.in",
        },
        ">1"
      );

      masterTl.to(
        backgroundRef.current,
        {
          opacity: 0,
          ease: "power1.in",
        },
        "<"
      );

      // --- NEW ANIMATION PHASES ---

      // Phase 5: Reveal the main.svg after the initial content has disappeared
      masterTl.to(
        mainSvgRef.current,
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
        ">" // Start this immediately after the previous animations complete
      );

      // Phase 6: Sequentially reveal the dev SVGs
      // We loop through the devRefs array and add a new animation for each
      devRefs.current.forEach((devSvg, index) => {
        masterTl.to(
          devSvg,
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
          },
          "+=0.5" // Start each subsequent animation 0.5 seconds after the previous one
        );
      });
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
      {/* NEW: Container for the main SVG and dev SVGs */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <Image
          src="/main.svg"
          alt="Main SVG"
          ref={mainSvgRef}
          width={1000}
          height={1000}
          className="w-[70%] h-[90%] object-contain"
        />
        {/* Render dev SVGs with unique positions */}
        <Image
          src="/bears/dev01.svg"
          alt="Developer 01"
          ref={addToDevRefs}
          width={100}
          height={100}
          className="absolute"
          style={{ top: "30%", left: "20%" }}
        />
        <Image
          src="/bears/dev02.svg"
          alt="Developer 02"
          ref={addToDevRefs}
          width={100}
          height={100}
          className="absolute"
          style={{ top: "50%", left: "70%" }}
        />
        <Image
          src="/bears/dev03.svg"
          alt="Developer 03"
          ref={addToDevRefs}
          width={100}
          height={100}
          className="absolute"
          style={{ bottom: "20%", left: "45%" }}
        />
        <Image
          src="/bears/dev04.svg"
          alt="Developer 04"
          ref={addToDevRefs}
          width={100}
          height={100}
          className="absolute"
          style={{ top: "40%", left: "55%" }}
        />
        <Image
          src="/bears/dev05.svg"
          alt="Developer 05"
          ref={addToDevRefs}
          width={100}
          height={100}
          className="absolute"
          style={{ bottom: "10%", left: "30%" }}
        />
        <Image
          src="/bears/dev06.svg"
          alt="Developer 06"
          ref={addToDevRefs}
          width={100}
          height={100}
          className="absolute"
          style={{ top: "60%", left: "40%" }}
        />
        <Image
          src="/bears/dev07.svg"
          alt="Developer 07"
          ref={addToDevRefs}
          width={100}
          height={100}
          className="absolute"
          style={{ bottom: "5%", left: "60%" }}
        />
      </div>
    </div>
  );
};

export default AboutComponent;
