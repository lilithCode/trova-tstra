"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BusinessComponent = () => {
  const containerRef = useRef(null);
  const ourRef = useRef(null);
  const businessRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(ourRef.current.children, {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(businessRef.current.children, {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
        scale: 0.5,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      });

      tl.to(ourRef.current.children, {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
      });

      tl.to(businessRef.current.children, {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
        color: "#cc5200",
        stagger: 0.05,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  const renderCharacters = (text, ref) => {
    return (
      <span ref={ref} className="inline-flex overflow-hidden">
        {text.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <div
      ref={containerRef}
      className="relative z-10 mt-20 min-h-screen bg-transparent"
    >
      <div className="container mx-auto text-white text-center py-8">
        <h2 className="text-7xl mb-6">
          {renderCharacters("OUR", ourRef)}
          <span className="ml-4 font-bold text-orange-700">
            {renderCharacters("BUSINESS", businessRef)}
          </span>
        </h2>
        <p className="text-2xl mb-4">Vauldex In-House Solutions</p>
        <p className="text-xl mb-2 md:mb-8 px-6 md:px-32 lg:px-64">
          At Vauldex, we build products that blend fresh ideas with smart
          tech—ready to help your business grow with confidence.
        </p>
        <div className="relative w-[90%] md:w-[70%] h-[400px] md:h-[600px] left-[5%] md:left-[15%] flex justify-center items-center">
          <Image
            src="/business-home.svg"
            alt="Business Structure"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div id="button" className="mt-8 flex justify-center items-center">
          <button className="cursor-pointer group px-6 py-3 md:px-8 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-orange-500 flex items-center gap-2">
            <span>Business Overview</span>
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2 cursor-pointer">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessComponent;
