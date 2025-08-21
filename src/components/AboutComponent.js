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

  // --- NEW: A ref for the entire SVG "stage" ---
  const svgContainerRef = useRef(null);
  const mainSvgRef = useRef(null);
  const devRefs = useRef([]);

  const nextTextRef = useRef(null);
  const gradientRef = useRef(null);

  const addToDevRefs = (el) => {
    if (el && !devRefs.current.includes(el)) {
      devRefs.current.push(el);
    }
  };

  useGSAP(
    () => {
      // The animation logic remains the same, as it targets the same refs.
      // The change is in the HTML structure, not the animation itself.
      gsap.set(backgroundRef.current, { opacity: 0 });
      gsap.set([ourRef.current.children, NameRef.current.children], {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
        scale: 0.5,
      });
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.5 });
      gsap.set([mainSvgRef.current, ...devRefs.current], {
        opacity: 0,
        scale: 0,
      });
      gsap.set(nextTextRef.current, { opacity: 0, scale: 0 });
      gsap.set(gradientRef.current, { opacity: 0 });

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      masterTl.to([ourRef.current.children, NameRef.current.children], {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        ease: "power2.out",
      });
      masterTl.to(
        buttonRef.current,
        { opacity: 1, scale: 1, ease: "power2.out" },
        "+=0.2",
      );
      masterTl.to(
        backgroundRef.current,
        { opacity: 0.5, ease: "power2.inOut" },
        ">",
      );
      masterTl.to(
        contentContainerRef.current,
        { scale: 0, opacity: 0, ease: "power1.in" },
        ">1",
      );
      masterTl.to(
        backgroundRef.current,
        { opacity: 0, ease: "power1.in" },
        "<",
      );
      masterTl.to(
        mainSvgRef.current,
        { opacity: 1, scale: 1.5, ease: "power2.out" },
        ">",
      );
      devRefs.current.forEach((devSvg) => {
        masterTl.to(
          devSvg,
          { opacity: 1, scale: 1, ease: "power2.out" },
          "+=0.05",
        );
      });
      const newContentStartTime = ">0.5";
      masterTl.to(
        nextTextRef.current,
        { opacity: 1, scale: 1, ease: "power2.out" },
        newContentStartTime,
      );
      masterTl.to(gradientRef.current, { opacity: 1, ease: "power2.out" }, "<");
    },
    { scope: containerRef },
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
      className="relative z-10 min-h-screen bg-transparent flex items-center justify-center overflow-hidden"
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
          className="w-full h-full md:w-[60%] md:h-[80%] object-contain"
        />
      </div>

      {/* Container for the initial text content */}
      <div
        ref={contentContainerRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10"
      >
        <h2 className="text-4xl md:text-7xl mb-6 text-center font-thin">
          {renderCharacters("WHO IS", ourRef)}
          <span className="ml-2 md:ml-4 font-bold text-[#cc5200]">
            {renderCharacters("TROVA TSTRA?", NameRef)}
          </span>
        </h2>
        <div className="flex justify-center items-center">
          <button
            ref={buttonRef}
            className="px-8 py-2 text-white text-lg font-bold rounded-full border-2 border-orange-500"
          >
            About Us →
          </button>
        </div>
      </div>

      {/* --- NEW: Responsive SVG Stage Container --- */}
      {/* This container will scale, and all bears inside are positioned relative to it. */}
      {/* It's hidden initially and appears later in the animation. */}
      <div
        ref={svgContainerRef}
        className="absolute w-[90%] max-w-3xl mx-auto z-20"
      >
        {/* The main SVG now acts as the base layer of the stage */}
        <Image
          src="/bears/main.svg"
          alt="Main SVG"
          ref={mainSvgRef}
          width={1000}
          height={1000}
          className="w-full h-auto object-contain relative z-0" // z-0 so it's behind the bears
        />
        {/* Each developer bear is positioned absolutely *within* this container */}
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ top: "37%", left: "0%" }}
        >
          <Image
            src="/bears/dev01.svg"
            alt="Developer 01"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ top: "25%", left: "93%" }}
        >
          <Image
            src="/bears/dev02.svg"
            alt="Developer 02"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ bottom: "5%", left: "20%" }}
        >
          <Image
            src="/bears/dev03.svg"
            alt="Developer 03"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ top: "20%", left: "5%" }}
        >
          <Image
            src="/bears/dev04.svg"
            alt="Developer 04"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ bottom: "15%", left: "58%" }}
        >
          <Image
            src="/bears/dev05.svg"
            alt="Developer 05"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ bottom: "2%", left: "70%" }}
        >
          <Image
            src="/bears/dev06.svg"
            alt="Developer 06"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ top: "21%", left: "50%" }}
        >
          <Image
            src="/bears/dev07.svg"
            alt="Developer 07"
            layout="responsive"
            width={150}
            height={150}
          />
        </div>
      </div>

      <div
        ref={gradientRef}
        className="absolute z-20 w-[500px] h-[200px] rounded-full filter blur-3xl" // z-index lower than text
        style={{
          background:
            "radial-gradient(circle, rgba(0, 57, 128, 0.9) 0%, rgba(0, 46, 102, 0.2) 70%)",
        }}
      />

      <div
        ref={nextTextRef}
        className="absolute z-30 text-center text-white text-5xl md:text-8xl font-thin"
      >
        TROVA TSTRA
        <br />
        <span>WANTS</span>
        <span className="text-[#cc5200] font-bold">YOU!</span>
        <div className="pt-10 flex justify-center items-center">
          <button className="px-10 py-2 text-white text-lg font-bold rounded-full border-2 border-orange-500">
            Be a Part →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
