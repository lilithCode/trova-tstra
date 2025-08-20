"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SunsetScene() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const mountain1Ref = useRef(null);
  const mountain2Ref = useRef(null);
  const mountain3Ref = useRef(null);
  const landscapeRef = useRef(null);
  const bigBearRef = useRef(null);
  const smallBearsRef = useRef(null);
  const flagRef = useRef(null);
  const sun = useRef(null);
  const sunGlow = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      tl.fromTo(
        ".cloud",
        {
          x: 0,
          filter: "grayscale(0) brightness(1) saturate(1)",
        },
        {
          x: 100,
          filter: "grayscale(1) brightness(0.5) saturate(1)",
          ease: "none",
        },
        0
      );

      tl.to(backgroundRef.current, { opacity: 0, ease: "none" }, 0);
      tl.to(mountain1Ref.current, { y: 50, x: -50, ease: "none" }, 0);
      tl.to(mountain2Ref.current, { y: 50, x: 50, ease: "none" }, 0);
      tl.to(mountain3Ref.current, { y: 50, x: 50, ease: "none" }, 0);

      tl.to(sun.current, { y: 300, x: -500, ease: "none" }, 0);
      tl.fromTo(
        sun.current,
        { filter: "brightness(1) saturate(1)" },
        { filter: "brightness(2) saturate(0)", ease: "none" },
        0
      );

      tl.to(sunGlow.current, { y: 400, x: -500, ease: "none" }, 0);
      tl.fromTo(
        sunGlow.current,
        {
          background:
            "radial-gradient(circle, #f0e08aff 0%, rgba(240, 224, 138, 0.5) 50%, rgba(240, 224, 138, 0) 70%)",
        },
        {
          background:
            "radial-gradient(circle, #ffffffcc 0%, #ffffff80 50%, #ffffff00 70%)",
          ease: "none",
        },
        0
      );

      tl.set(
        sun.current,
        {
          top: "70%",
          right: "20px",
          x: "-50%",
          y: "0%",
          filter: "brightness(1) saturate(0)",
        },
        1
      );
      tl.set(
        sunGlow.current,
        { top: "60%", right: "-180px", x: "0%", y: "0%", opacity: 0.2 },
        1
      );
      tl.to(sun.current, { y: -300, x: -50, ease: "none" }, 1);
      tl.to(sunGlow.current, { y: -300, x: -50, ease: "none" }, 1);

      tl.fromTo(
        [mountain1Ref.current, mountain2Ref.current, mountain3Ref.current],
        { filter: "grayscale(0) brightness(1)" },
        { filter: "grayscale(1) brightness(0.5)", ease: "none" },
        0
      );

      tl.to(bigBearRef.current, { y: 700, x: 0, ease: "none" }, 0);
      tl.to(smallBearsRef.current, { y: 300, x: 0, ease: "none" }, 0);
      tl.to(flagRef.current, { y: -148, x: 0, ease: "none" }, 0);
      tl.to(landscapeRef.current, { y: 20, x: 0, ease: "none" }, 0);
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at bottom, #F9D390 0%, #E87722 70%)",
        }}
      ></div>

      <div
        ref={sunGlow}
        className="w-100 h-100 absolute top-[59%] right-[85px] -translate-x-1/2 z-18"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 230, 180, 0.6) 0%, rgba(240, 224, 138, 0.3) 50%, rgba(240, 224, 138, 0) 70%)",
          borderRadius: "50%",
        }}
      ></div>

      <div
        ref={sun}
        className="w-50 h-50 absolute top-[64%] right-[300px] -translate-x-1/2 z-19"
        style={{
          background:
            "radial-gradient(circle, #eeb671ff 0%, #eebb7dff 50%, #eec694ff 100%)",
          borderRadius: "50%",
        }}
      ></div>

      <div className="cloud absolute w-[20%] h-[20%] top-[10%] left-[3%] z-5">
        <Image
          src="/forest/cloud.svg"
          alt="Cloud"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </div>

      <div className="cloud absolute w-[15%] h-[15%] top-[40%] right-[5%] z-6">
        <Image
          src="/forest/cloud.svg"
          alt="Cloud"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </div>

      <div className="cloud absolute w-[15%] h-[25%] top-[40%] left-[20%] z-4">
        <Image
          src="/forest/cloud.svg"
          alt="Cloud"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </div>

      <div className="cloud absolute w-[18%] h-[18%] top-[20%] right-[15%] z-7">
        <Image
          src="/forest/cloud.svg"
          alt="Cloud"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </div>

      <div className="cloud absolute w-[15%] h-[22%] top-[20%] left-[35%] z-8">
        <Image
          src="/forest/cloud.svg"
          alt="Cloud"
          fill
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </div>

      <div ref={mountain1Ref} className="absolute inset-0 z-30">
        <Image
          src="/sunset/mountain-1.svg"
          alt="Mountain 1"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>

      <div ref={mountain2Ref} className="absolute inset-0 z-20">
        <Image
          src="/sunset/mountain-2.svg"
          alt="Mountain 2"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>

      <div ref={mountain3Ref} className="absolute inset-0 z-10">
        <Image
          src="/sunset/mountain-3.svg"
          alt="Mountain 3"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>

      <div ref={bigBearRef} className=" absolute inset-0 z-40">
        <Image
          src="/sunset/big-bear.svg"
          alt="Big Bear"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <div ref={smallBearsRef} className="absolute inset-0 z-40">
        <Image
          src="/sunset/small-bears.svg"
          alt="Small Bears"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>

      <div
        ref={flagRef}
        className="absolute w-30 h-60 bottom-[-150px] left-1/2 transform -translate-x-1/2 z-50 "
      >
        <Image
          src="/sunset/flag.svg"
          alt="Flag"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <div ref={landscapeRef} className="absolute inset-0 z-90">
        <Image
          src="/sunset/landscape.svg"
          alt="Landscape"
          fill
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
    </div>
  );
}