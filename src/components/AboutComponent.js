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

  const svgContainerRef = useRef(null);
  const mainSvgRef = useRef(null);
  const devRefs = useRef([]);
  const nextTextRef = useRef(null);
  const gradientRef = useRef(null);

  const addToDevRefs = (el) => {
    if (el && !devRefs.current.includes(el)) devRefs.current.push(el);
  };

  useGSAP(
    () => {
      gsap.set([ourRef.current.children, NameRef.current.children], {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
        scale: 0.5,
      });
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.5 });
      gsap.set(
        [mainSvgRef.current, backgroundRef.current, ...devRefs.current],
        {
          opacity: 0,
          scale: 0,
        }
      );
      gsap.set(nextTextRef.current, { opacity: 0, scale: 0 });
      gsap.set(gradientRef.current, { opacity: 0 });

      gsap.set(
        [svgContainerRef.current, gradientRef.current, backgroundRef.current],
        {
          pointerEvents: "none",
        }
      );

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
        "+=0.2"
      );

      masterTl.to(
        backgroundRef.current,
        { opacity: 1, scale: 1, ease: "power2.out" },
        ">"
      );

      masterTl.to(
        [contentContainerRef.current, buttonRef.current],
        { scale: 0, opacity: 0, ease: "power1.in" },
        ">1"
      );

      masterTl.to(
        backgroundRef.current,
        { opacity: 0, ease: "power1.in" },
        "<"
      );

      masterTl.to(
        mainSvgRef.current,
        { opacity: 1, scale: 1, ease: "power2.out" },
        ">"
      );

      devRefs.current.forEach((devSvg) => {
        masterTl.to(
          devSvg,
          { opacity: 1, scale: 1, ease: "power2.out" },
          "+=0.05"
        );
      });

      const newContentStartTime = ">0.5";
      masterTl.to(
        nextTextRef.current,
        { opacity: 1, scale: 1, ease: "power2.out" },
        newContentStartTime
      );
      masterTl.to(gradientRef.current, { opacity: 1, ease: "power2.out" }, "<");
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
      className="relative z-10 min-h-screen bg-transparent flex items-center justify-center overflow-hidden"
    >
      {}
      <div
        ref={backgroundRef}
        className="absolute w-[90%] max-w-3xl mx-auto z-10"
      >
        <Image
          src="/backgroundPattern.svg"
          alt="pattern SVG"
          width={1000}
          height={1000}
          className="w-full h-auto object-contain relative z-0"
        />
      </div>

      {}
      <div
        ref={contentContainerRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-20"
      >
        <h2 className="text-4xl md:text-7xl mb-6 text-center font-thin">
          {renderCharacters("WHO IS", ourRef)}
          <span className="ml-2 md:ml-4 font-bold text-[#cc5200]">
            {renderCharacters("TROVA TSTRA?", NameRef)}
          </span>
        </h2>
      </div>

      {}
      <div className="absolute z-50 bottom-[35%] left-0 right-0 flex justify-center">
        <button
          ref={buttonRef}
          className="cursor-pointer group px-6 py-3 md:px-8 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-orange-500 flex items-center gap-2"
        >
          <span>About Us</span>
          <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </button>
      </div>

      {}
      <div
        ref={svgContainerRef}
        className="absolute w-[90%] max-w-3xl mx-auto z-20"
      >
        <Image
          src="/bears/main.svg"
          alt="Main SVG"
          ref={mainSvgRef}
          width={1000}
          height={1000}
          className="w-full h-auto object-contain relative z-0"
        />

        {}
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ top: "37%", left: "0%" }}
        >
          <Image
            src="/bears/dev01.svg"
            alt="Developer 01"
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
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ bottom: "15%", left: "30%" }}
        >
          <Image
            src="/bears/dev03.svg"
            alt="Developer 03"
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
            width={150}
            height={150}
          />
        </div>
        <div
          ref={addToDevRefs}
          className="absolute w-[14%] h-auto"
          style={{ top: "15%", left: "70%" }}
        >
          <Image
            src="/bears/dev06.svg"
            alt="Developer 06"
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
            width={150}
            height={150}
          />
        </div>
      </div>

      {}
      <div
        ref={gradientRef}
        className="absolute z-20 w-[500px] h-[200px] rounded-full filter blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 57, 128, 0.9) 0%, rgba(0, 46, 102, 0.2) 70%)",
        }}
      />

      {}
      <div
        ref={nextTextRef}
        className="absolute z-40 text-center text-white text-5xl md:text-8xl font-thin"
      >
        TROVA TSTRA
        <br />
        <span>WANTS</span>
        <span className="text-[#cc5200] font-bold">YOU!</span>
        <div id="button" className="mt-8 flex justify-center items-center">
          <button className="cursor-pointer group px-6 py-3 md:px-8 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-orange-500 flex items-center gap-2">
            <span>Be a Part</span>
            <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
