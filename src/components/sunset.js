"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "./particles";

const SUNSET_BG = "#E87722";
const NIGHT_BG = "#0B1633";

export default function SunsetScene() {
  const [particlesOpacity, setParticlesOpacity] = useState(0);
  const sceneRef = useRef(null);
  const sunRef = useRef(null);
  const moonRef = useRef(null);
  const bearGroupRef = useRef(null);
  const mountainsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const scene = sceneRef.current;
    const sun = sunRef.current;
    const moon = moonRef.current;
    const bearGroup = bearGroupRef.current;
    const mountains = mountainsRef.current;

    if (!scene || !sun || !moon || !bearGroup || !mountains) return;

    gsap.set(moon, { y: "100vh", opacity: 0 });
    gsap.set(bearGroup, { x: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scene,
        start: "top top",
        end: "bottom+=1000",
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          const opacity = Math.max(0, (self.progress - 0.3) * 2.5);
          setParticlesOpacity(opacity);
        },
      },
    });

    tl.to(scene, {
      backgroundImage: `linear-gradient(to bottom, ${SUNSET_BG}, ${NIGHT_BG})`,
    })
      .to(
        sun,
        {
          y: "100vh",
          opacity: 0,
          duration: 1,
        },
        "<"
      )
      .to(
        moon,
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        "<0.3"
      )
      .to(
        bearGroup,
        {
          x: "-100vw",
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ background: SUNSET_BG }}
    >
      {}
      <div ref={mountainsRef} className="absolute inset-0 z-10">
        <Image
          src="/sunset/mountain-1.svg"
          alt="Mountain 1"
          fill
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/sunset/mountain-2.svg"
          alt="Mountain 2"
          fill
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/sunset/mountain-3.svg"
          alt="Mountain 3"
          fill
          style={{ objectFit: "cover" }}
        />
        <Image
          src="/sunset/landscape.svg"
          alt="Landscape"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {}
      <div ref={sunRef} className="absolute top-20 right-20 z-20">
        <Image src="/sunset/sun.svg" alt="Sun" width={150} height={150} />
      </div>

      {}
      <div ref={moonRef} className="absolute top-20 right-20 z-20">
        <div className="w-32 h-32 rounded-full bg-white shadow-[0_0_50px_#fff]" />
      </div>

      {}
      <div
        ref={bearGroupRef}
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-30 flex items-end space-x-12"
      >
        <Image
          src="/sunset/big-bear.svg"
          alt="Big Bear"
          width={300}
          height={300}
          className="transform scale-125"
        />
        <Image
          src="/sunset/small-bears.svg"
          alt="Small Bears"
          width={600}
          height={150}
          className="transform scale-125"
        />
        <Image 
          src="/sunset/flag.svg" 
          alt="Flag" 
          width={150} 
          height={300}
          className="transform scale-125"
        />
      </div>

      {}
      <div className="absolute top-0 left-0 w-full z-40">
        <Image
          src="/sunset/cloud.svg"
          alt="Clouds"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {}
      <div style={{ opacity: particlesOpacity, transition: 'opacity 0.3s ease' }}>
        <Particles />
      </div>
    </div>
  );
}
