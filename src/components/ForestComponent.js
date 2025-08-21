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
      gsap.set(bearRef.current, { y: 150 });
      gsap.set(textBlockRef.current, { y: 0, opacity: 1 });

      const clouds = gsap.utils.toArray(".cloud", containerRef.current);
      clouds.forEach((cloud, i) => {
        gsap.set(cloud, {
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
        y: -200,
        x: -90,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
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

      const width = typeof window !== "undefined" ? window.innerWidth : 1920;
      clouds.forEach((cloud, i) => {
        gsap.fromTo(
          cloud,
          {
            opacity: 0.4,
            filter: "grayscale(100%)",
            x: -50 - i * 50,
          },
          {
            x: width + 100,
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

      // Bear rises but stays on mountain peak
      gsap.fromTo(
        bearRef.current,
        { y: 150 },
        {
          y: -3, // just enough movement
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 30%",
            end: "bottom center",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        textBlockRef.current,
        { y: 0, opacity: 1 },
        {
          y: -200,
          opacity: 0.8,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 2,
          },
        }
      );
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
      />

      {}
      <div
        ref={sunsetRef}
        className="absolute inset-0 z-10"
        style={{
          background: "radial-gradient(circle, #FFA500 0%, #FF6347 100%)",
        }}
      />

      {}
      <div
        ref={sunRef}
        className="absolute z-10 left-2/3 bottom-[10%] -translate-x-1/2"
      >
        <Image src="/forest/sun.svg" alt="Sun" width={2500} height={2500} />
      </div>

      {}
      <div className="cloud absolute z-30 top-[0%] right-[50%]">
        <Image
          src="/forest/night-cloud.svg"
          alt="Cloud1"
          width={200}
          height={200}
        />
      </div>
      <div className="cloud absolute z-30 top-[20%] left-[-20%]">
        <Image src="/forest/cloud.svg" alt="Cloud2" width={220} height={220} />
      </div>
      <div className="cloud absolute z-30 top-[45%] left-[-50%]">
        <Image src="/forest/cloud.svg" alt="Cloud3" width={220} height={220} />
      </div>
      <div className="cloud absolute z-30 top-[30%] left-[50%]">
        <Image src="/forest/cloud.svg" alt="Cloud4" width={240} height={240} />
      </div>

      {}
      <div ref={leftBackgroundRef} className="absolute z-40 bottom-0 left-0">
        <Image
          src="/forest/trees-left-background.svg"
          alt="Left Background Trees"
          width={2000}
          height={2000}
        />
      </div>
      <div ref={rightBackgroundRef} className="absolute z-40 bottom-0 right-0">
        <Image
          src="/forest/trees-right-background.svg"
          alt="Right Background Trees"
          width={2000}
          height={2000}
        />
      </div>

      {}
      <div ref={leftForegroundRef} className="absolute z-50 bottom-0 left-0">
        <Image
          src="/forest/trees-left-foreground.svg"
          alt="Left Foreground Trees"
          width={2000}
          height={2000}
        />
      </div>
      <div ref={rightForegroundRef} className="absolute z-50 bottom-0 right-0">
        <Image
          src="/forest/trees-right-foreground.svg"
          alt="Right Foreground Trees"
          width={2000}
          height={2000}
        />
      </div>

      {}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-[1400px] flex justify-center">
        {}
        <Image
          src="/forest/mountain.svg"
          alt="Mountain"
          width={1600}
          height={800}
          className="object-contain relative z-30"
        />

        {}
        <div ref={bearRef} className="absolute bottom-[0px] z-20">
          <Image
            src="/forest/big-bear.svg"
            alt="Bear"
            width={2500}
            height={2500}
            className="object-contain"
          />
        </div>
      </div>

      {}
      <div
        ref={textBlockRef}
        className="absolute z-70 top-20 md:top-32 px-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-full"
      >
        <div className="mb-6">
          <span className="px-6 py-3 rounded-full bg-black/40 border border-white/20 text-sm text-white flex items-center gap-2">
            <span className="relative flex items-center justify-center">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 relative z-10"></span>
              <span className="absolute w-4 h-4 rounded-full bg-green-400 opacity-70 animate-ping"></span>
            </span>
            Available for work
          </span>
        </div>

        <h1 className="text-4xl w-full md:text-6xl font-bold text-white">
          Let's build your <br /> product together.
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/80">
          Partner with us for a seamless product development journey. <br />
          Our team is dedicated to working closely with you to achieve your
          goals.
        </p>

        <div className="pt-8 flex justify-center items-center">
          <button className="bg-black px-6 py-3 md:px-8 md:py-4 text-white text-lg font-bold rounded-full border-2 border-orange-500 cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForestComponent;
