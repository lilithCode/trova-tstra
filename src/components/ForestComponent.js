"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ForestComponent = () => {
  const containerRef = useRef(null);

  const blueRef = useRef(null);
  const sunsetRef = useRef(null);

  const leftBackgroundRef = useRef(null);
  const rightBackgroundRef = useRef(null);
  const leftForegroundRef = useRef(null);
  const rightForegroundRef = useRef(null);

  const bearRef = useRef(null);
  const sunRef = useRef(null);

  const cloudRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const textBlockRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(sunsetRef.current, { opacity: 0 });
      gsap.set([leftBackgroundRef.current, leftForegroundRef.current], {
        xPercent: -50,
      });
      gsap.set([rightBackgroundRef.current, rightForegroundRef.current], {
        xPercent: 50,
      });
      gsap.set(sunRef.current, { opacity: 1, x: 0, y: 100 });
      gsap.set(bearRef.current, { opacity: 0, y: 150 });

      gsap.set(textBlockRef.current, { y: 0, x: 0, opacity: 1 });

      cloudRefs.forEach((ref, i) => {
        gsap.set(ref.current, {
          opacity: 0.4,
          filter: "grayscale(100%)",
          x: -100 * (i + 1),
        });
      });

      gsap.to(sunsetRef.current, {
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "center center",
          scrub: 2,
        },
      });

      gsap.to(sunRef.current, {
        y: -400,
        x: -200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "+=500",
          scrub: 2,
        },
      });


      gsap.to(
        [
          leftBackgroundRef.current,
          rightBackgroundRef.current,
          leftForegroundRef.current,
          rightForegroundRef.current,
        ],
        {
          xPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 2,
          },
        }
      );

      cloudRefs.forEach((ref, i) => {
        gsap.fromTo(
          ref.current,
          {
            opacity: 0.4,
            filter: "grayscale(100%)",
            x: -50 - i * 50,
          },
          {
            x: window.innerWidth + 50,
            opacity: 0.8,
            filter: "grayscale(0%)",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              end: "bottom top",
              scrub: 2,
            },
          }
        );
      });

      gsap.fromTo(
        bearRef.current,
        { y: 150, opacity: 0 },
        {
          y: -100,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom center",
            scrub: 1,

        },
        }
      );

      gsap.to(textBlockRef.current, {
        y: -200,
        opacity: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {}
      <div
        ref={blueRef}
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, #000000, #000033, #00004d,#000066)",
          opacity: 0.8,
        }}
      ></div>

      {}
      <div
        ref={sunsetRef}
        className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(circle, #FFA500 0%, #FF6347 100%)",
        }}
      ></div>

      {}
      <Image
        ref={sunRef}
        src="/forest/sun.svg"
        alt="Sun"
        width={1500}
        height={1500}
        priority
        className="absolute z-20 right-[-10%] bottom-[-30%] translate-x-1/2"
      />

      {}
      <Image
        ref={cloudRefs[0]}
        src="/forest/night-cloud.svg"
        alt="Cloud1"
        width={250}
        height={250}
        className="absolute z-30 top-[0%] right-[50%]"
      />
      <Image
        ref={cloudRefs[1]}
        src="/forest/cloud.svg"
        alt="Cloud2"
        width={250}
        height={250}
        className="absolute z-30 top-[20%] left-[-20%]"
      />
      <Image
        ref={cloudRefs[2]}
        src="/forest/cloud.svg"
        alt="Cloud3"
        width={250}
        height={250}
        className="absolute z-30 top-[45%] left-[-50%]"
      />
      <Image
        ref={cloudRefs[3]}
        src="/forest/cloud.svg"
        alt="Cloud4"
        width={280}
        height={280}
        className="absolute z-30 top-[30%] left-[50%]"
      />

      {}
      <Image
        ref={leftBackgroundRef}
        src="/forest/trees-left-background.svg"
        alt="Left Background Trees"
        width={2500}
        height={2500}
        className="absolute z-40 bottom-0 left-0"
      />
      <Image
        ref={rightBackgroundRef}
        src="/forest/trees-right-background.svg"
        alt="Right Background Trees"
        width={2500}
        height={2500}
        className="absolute z-40 bottom-0 right-0"
      />

      {}
      <Image
        ref={leftForegroundRef}
        src="/forest/trees-left-foreground.svg"
        alt="Left Foreground Trees"
        width={2500}
        height={2500}
        className="absolute z-50 bottom-0 left-0"
      />
      <Image
        ref={rightForegroundRef}
        src="/forest/trees-right-foreground.svg"
        alt="Right Foreground Trees"
        width={2500}
        height={2500}
        className="absolute z-50 bottom-0 right-0"
      />

      {}
      <div className="pt-[20%] absolute bottom-[-10%] left-1/2 -translate-x-1/2 z-10 w-[1500px] h-[1500px] flex items-end justify-center">
        <Image
          src="/forest/mountain.svg"
          alt="Mountain"
          fill
          priority
          className="object-contain z-40"
        />
        <Image
          ref={bearRef}
          src="/forest/big-bear.svg"
          alt="Bear"
          width={1500}
          height={1500}
          className="absolute bottom-[50px] z-20"
        />
      </div>

      {}
      <div
        ref={textBlockRef}
        className="absolute z-20 top-30 left-1/2 -translate-x-1/2 flex flex-col items-center text-center px-6"
      >
        {}
        <div className="mb-6">
          <span className="px-8 py-4 rounded-full bg-black/40 border border-white/20 text-sm text-white flex items-center gap-2">
            <span className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 relative z-10"></span>
              <span className="absolute w-4 h-4 rounded-full bg-green-400 opacity-70 animate-ping"></span>
            </span>
            Available for work
          </span>
        </div>

        {}
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Let's build your <br /> product together.
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-xl text-white/80 max-w-2xl">
          Partner with us for a seamless product development journey. <br />
          Our team is dedicated to working closely with you to achieve your
          goals.
        </p>

        {/* Button */}
        <div className="pt-8 flex justify-center items-center">
          <button className="bg-black px-8 py-4 text-white text-lg font-bold rounded-full border-2 border-orange-500 cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForestComponent;
