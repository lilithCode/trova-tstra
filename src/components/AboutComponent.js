"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import your SVG as a React component

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutComponent = () => {
  const containerRef = useRef(null);
  const ourRef = useRef(null);
  const NameRef = useRef(null);
  const svgRef = useRef(null); // Ref for the SVG
  useGSAP(
    () => {
      gsap.set(ourRef.current.children, {
        yPercent: 100,
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(NameRef.current.children, {
        yPercent: 100,
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(svgRef.current, {
        opacity: 0,
      });

      // Create a sequence of animations using two separate ScrollTriggers

      // ScrollTrigger for the text animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center bottom",
            end: "center center",
            scrub: true,
          },
        })
        .to(ourRef.current.children, {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          stagger: 0.05,
          ease: "power2.out",
        })
        .to(
          NameRef.current.children,
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            color: "#cc5200",
            stagger: 0.05,
            ease: "power2.out",
          },
          "<"
        );

      // ScrollTrigger for the SVG animation
      gsap.to(svgRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "center center", // Starts when the text animation is complete
          end: "50% top", // Ends 50% down the viewport
          scrub: true,
          markers: true, // Set to true for debugging
        },
      });
    },
    { scope: containerRef }
  );
  const renderCharacters = (text, ref) => {
    return (
      <span ref={ref} className="inline-flex overflow-hidden">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10 mt-60 min-h-screen bg-transparent flex items-center justify-center overflow-hidden" // Added overflow-hidden to the main container
    >
      {/* Render the SVG with the ref and position it */}
      <div ref={svgRef} className="absolute inset-0 z-0 pointer-events-none opacity-0">
  <Image
                  src="/backgroundPattern.svg"
                  alt="Business Structure"
                  layout="fill"
                  objectFit="contain"
                  priority
                />      </div>
      <div className="flex flex-col items-center justify-center text-white py-8 relative z-10">
        {" "}
        {/* Added relative z-10 to ensure text is above SVG */}
        <h2 className="text-7xl mb-6 text-center">
          {renderCharacters("WHO IS", ourRef)}
          <span className="ml-4 font-bold">
            {renderCharacters("VAULDEX?", NameRef)}
          </span>
        </h2>
        <div className="flex justify-center items-center">
          <button className="px-8 py-4 text-white text-lg font-bold rounded-full border-2 border-orange-500">
            About Us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
