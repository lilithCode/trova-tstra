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
      gsap.set(backgroundRef.current, {
        opacity: 0,
      });

      gsap.set([ourRef.current.children, NameRef.current.children], {
        xPercent: 100,
        yPercent: -100,
        opacity: 0,
        scale: 0.5,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        scale: 0.5,
      });

      gsap.set([mainSvgRef.current, ...devRefs.current], {
        opacity: 0,
        scale: 0,
      });

      gsap.set(nextTextRef.current, {
        opacity: 0,
        scale: 0,
      });

      gsap.set(gradientRef.current, {
        opacity: 0,
      });

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
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
        "+=0.2"
      );

      masterTl.to(
        backgroundRef.current,
        {
          opacity: 0.5,
          ease: "power2.inOut",
        },
        ">"
      );

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

      masterTl.to(
        mainSvgRef.current,
        {
          opacity: 1,
          scale: 1.5,
          ease: "power2.out",
        },
        ">"
      );

      devRefs.current.forEach((devSvg) => {
        masterTl.to(
          devSvg,
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
          },
          "+=0.05"
        );
      });

      const newContentStartTime = ">0.5";

      masterTl.to(
        nextTextRef.current,
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
        },
        newContentStartTime
      );

      masterTl.to(
        gradientRef.current,
        {
          opacity: 1,
          ease: "power2.out",
        },
        "<"
      );
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
          className="w-[60%] h-[80%] object-cover"
        />
      </div>
      <div
        ref={contentContainerRef}
        className="flex flex-col items-center justify-center text-white py-8 z-10"
      >
        <h2 className="text-7xl mb-6 text-center font-thin">
          {renderCharacters("WHO IS", ourRef)}
          <span className="ml-4 font-bold text-[#cc5200]">
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
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <Image
          src="/bears/main.svg"
          alt="Main SVG"
          ref={mainSvgRef}
          width={1000}
          height={1000}
          className="w-[60%] h-[80%] object-contain"
        />
        <Image
          src="/bears/dev01.svg"
          alt="Developer 01"
          ref={addToDevRefs}
          width={150}
          height={150}
          className="absolute"
          style={{ top: "40%", left: "18%" }}
        />
        <Image
          src="/bears/dev02.svg"
          alt="Developer 02"
          ref={addToDevRefs}
          width={150}
          height={150}
          className="absolute"
          style={{ top: "15%", left: "65%" }}
        />
        <Image
          src="/bears/dev03.svg"
          alt="Developer 03"
          ref={addToDevRefs}
          width={150}
          height={150}
          className="absolute"
          style={{ bottom: "5%", left: "40%" }}
        />
        <Image
          src="/bears/dev04.svg"
          alt="Developer 04"
          ref={addToDevRefs}
          width={150}
          height={150}
          className="absolute"
          style={{ top: "15%", left: "28%" }}
        />
        <Image
          src="/bears/dev05.svg"
          alt="Developer 05"
          ref={addToDevRefs}
          width={150}
          height={150}
          className="absolute"
          style={{ bottom: "15%", left: "60%" }}
        />
        <Image
          src="/bears/dev06.svg"
          alt="Developer 06"
          ref={addToDevRefs}
          width={150}
          height={150}
          className="absolute"
          style={{ top: "40%", left: "72%" }}
        />
        <Image
          src="/bears/dev07.svg"
          alt="Developer 07"
          ref={addToDevRefs}
          width={150}
          height={150}
          className="absolute"
          style={{ top: "15%", left: "40%" }}
        />
      </div>

      <div
        ref={gradientRef}
        className="absolute z-25 w-[500px] h-[200px] rounded-full filter blur-3xl opacity-0.5"
        style={{
          background: "radial-gradient(circle, #003980 0%, #002e66 100%)",
        }}
      />

      <div
        ref={nextTextRef}
        className="absolute z-30 text-center text-white text-8xl font-thin"
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
