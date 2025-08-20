"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const BackgroundSVG = () => {
  const svgRef = useRef(null);

  useGSAP(() => {
    gsap.to(svgRef.current, {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
    });
  }, []);

  return (
    <div ref={svgRef} className="absolute inset-0 z-0 opacity-0 scale-125">
       <Image
                  src="/backgroundPattern.svg"
                  alt="Business Structure"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
    </div>
  );
};

export default BackgroundSVG;
