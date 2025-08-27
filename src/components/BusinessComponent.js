"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BusinessComponent = () => {
  const containerRef = useRef(null);
  const ourRef = useRef(null);
  const businessRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

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
    { scope: containerRef }
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
    <section
      ref={containerRef}
      className="relative z-10 mt-20 min-h-screen bg-transparent flex flex-col justify-center items-center"
    >
      <div className="container text-center py-8">
        <h2 className="text-4xl md:text-7xl font-heading mb-6 text-white">
          {renderCharacters("OUR", ourRef)}
          <span className="ml-4 font-bold text-brand-dark">
            {renderCharacters("BUSINESS", businessRef)}
          </span>
        </h2>

        <p className="text-xl md:text-2xl mb-4 text-neutral-200">
          Trova Tstra In-House Solutions
        </p>

        <p className="text-base md:text-xl mb-6 md:mb-10 px-6 md:px-32 lg:px-64 text-neutral-300">
          At Trova Tstra, we build products that blend fresh ideas with smart
          tech—ready to help your business grow with confidence.
        </p>

        <div className="relative w-[90%] md:w-[70%] h-400 md:h-600 mx-auto flex justify-center items-center animate-float">
          <Image
            src="/business-home.svg"
            alt="Business Structure"
            fill
            className="object-contain "
            loading="lazy"
          />
        </div>

        <div className="mt-10 flex justify-center">
          <a href="/Business">
            <button className="group px-6 py-3 md:px-8 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-brand flex items-center gap-2 transition-colors duration-300 hover:bg-brand hover:text-neutral-900">
              <span>Business Overview</span>
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessComponent;
