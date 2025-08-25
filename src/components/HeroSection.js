"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

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
  const textContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px)",
          isMobile: "(max-width: 1023px)",
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            gsap.set(flagRef.current, { y: "10%" });
            gsap.set([textContainerRef.current], { opacity: 1 });
            gsap.set(textContainerRef.current.children[1], { opacity: 0 });
            gsap.set(textContainerRef.current.children[2], { opacity: 0 });

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
              { x: 0, filter: "grayscale(0) brightness(1) opacity(1)" },
              {
                x: 100,
                filter: "grayscale(1) brightness(0.5) opacity(0.5) ",
                ease: "none",
              },
              0
            );
            tl.to(backgroundRef.current, { opacity: 0, ease: "none" }, 0);
            tl.to(mountain1Ref.current, { y: 50, x: -50, ease: "none" }, 0);
            tl.to(mountain2Ref.current, { y: 50, x: 50, ease: "none" }, 0);
            tl.to(mountain3Ref.current, { y: 50, x: 50, ease: "none" }, 0);
            tl.to(sun.current, { y: 300, x: -300, ease: "none" }, 0);
            tl.fromTo(
              sun.current,
              { filter: "brightness(1) saturate(1)" },
              { filter: "brightness(2) saturate(0)", ease: "none" },
              0
            );
            tl.set(
              sun.current,
              {
                top: "70%",
                right: "20px",
                x: "0%",
                y: "0%",
                filter: "brightness(1) saturate(0)",
              },
              0.5
            );
            tl.to(sun.current, { y: -300, x: -50, ease: "none" }, 0.5);
            tl.fromTo(
              [
                mountain1Ref.current,
                mountain2Ref.current,
                mountain3Ref.current,
              ],
              { filter: "grayscale(0) brightness(1)" },
              { filter: "grayscale(1) brightness(0.5)", ease: "none" },
              0
            );
            tl.to(bigBearRef.current, { y: "150%", x: 0, ease: "none" }, 0);
            tl.to(smallBearsRef.current, { y: "150%", x: 0, ease: "none" }, 0);
            tl.to(
              flagRef.current,
              {
                y: () => -landscapeRef.current.offsetHeight * 0.2,
                ease: "none",
                onUpdate: function () {
                  if (
                    this.targets()[0]._gsap.y <
                    -landscapeRef.current.offsetHeight * 0.2
                  ) {
                    gsap.set(flagRef.current, {
                      y: -landscapeRef.current.offsetHeight * 0.2,
                    });
                  }
                },
              },
              0
            );

            tl.to(landscapeRef.current, { y: 20, x: 0, ease: "none" }, 0);
            tl.to(
              textContainerRef.current.children[0],
              { scale: 0.8, ease: "power2.inOut" },
              0.1
            );
            tl.fromTo(
              textContainerRef.current.children[1],
              { opacity: 0, y: "50%" },
              { scale: 0.9, opacity: 1, y: "0%", ease: "power2.inOut" },
              0.3
            );
            tl.fromTo(
              textContainerRef.current.children[2],
              { y: 0, opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1, y: 0, ease: "power2.inOut" },
              0.6
            );

            const secondHalfStart = 1;
            tl.to(
              [
                mountain1Ref.current,
                mountain2Ref.current,
                mountain3Ref.current,
                landscapeRef.current,
                flagRef.current,
                sun.current,
              ],
              { y: "200%", ease: "none" },
              secondHalfStart
            );
            tl.to(".cloud", { y: "500%", ease: "none" }, secondHalfStart);

            // Removed the y: "-100%" animation from textContainerRef to keep the button in place.
            tl.to(
              textContainerRef.current,
              { opacity: 0, ease: "none" },
              secondHalfStart
            );
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at bottom, #F9D390 0%, #E87722 70%)",
        }}
      ></div>

      <div
        ref={sun}
        className="w-80 h-80 absolute top-[60%] right-[200px] -translate-x-1/2 z-2"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.7) 30%, rgba(255, 255, 255, 0.3) 30%, rgba(255, 255, 255, 0) 70%)",
          borderRadius: "50%",
        }}
      ></div>

      <div className="cloud absolute w-[10%] h-[15%] top-[20%] left-[5%] z-8">
        <Image
          fill
          priority
          src="/sunset/cloud.svg"
          alt="Cloud"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="cloud absolute w-[15%] h-[15%] top-[40%] right-[5%] z-6">
        <Image
          fill
          priority
          src="/sunset/cloud.svg"
          alt="Cloud"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="cloud absolute w-[15%] h-[25%] top-[40%] left-[20%] z-7">
        <Image
          fill
          priority
          src="/sunset/cloud.svg"
          alt="Cloud"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="cloud absolute w-[10%] h-[18%] top-[20%] right-[15%] z-7">
        <Image
          fill
          priority
          src="/sunset/cloud.svg"
          alt="Cloud"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="cloud absolute w-[15%] h-[22%] top-[20%] left-[35%] z-8">
        <Image
          fill
          priority
          src="/sunset/cloud.svg"
          alt="Cloud"
          className="w-full h-full object-contain"
        />
      </div>

      <div ref={mountain1Ref} className="absolute inset-0 z-13">
        <Image
          src="/sunset/mountain-1.svg"
          alt="Mountain 1"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div ref={mountain2Ref} className="absolute inset-0 z-9">
        <Image
          src="/sunset/mountain-2.svg"
          alt="Mountain 2"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div ref={mountain3Ref} className="absolute inset-0 z-5">
        <Image
          src="/sunset/mountain-3.svg"
          alt="Mountain 3"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        ref={textContainerRef}
        className="absolute inset-0 z-110 flex flex-col items-center justify-center text-center text-white p-4"
      >
        <div className="w-full">
          <span className="text-4xl md:text-5xl lg:text-6xl">
            REALIZING YOUR
          </span>
          <div className="mt-2 text-5xl md:text-7xl lg:text-8xl font-extrabold">
            CREATIVE VISION
          </div>
        </div>
        <div className="mt-6 w-full md:w-4/5 lg:w-[60%] text-lg md:text-xl lg:text-2xl">
          Vauldex is the place where your imagination comes to life.
          <br />
          We bring your vision into reality, walking beside you as we shape the
          future together.
        </div>
        <Link href="/Contact">
          <div id="button" className=" mt-8 flex justify-center items-center">
            <button className="cursor-pointer group px-6 py-3 md:px-8 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-orange-500 flex items-center gap-2">
              <span>Tell us your vision</span>
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2 ">
                →
              </span>
            </button>
          </div>
        </Link>
      </div>

      {}
      <div
        ref={bigBearRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[60]"
      >
        <Image
          src="/sunset/big-bear.svg"
          alt="Big Bear"
          width={1600}
          height={1500}
          className="w-[100vw] max-w-[1500px] h-auto object-contain"
          priority
        />
      </div>

      <div
        ref={smallBearsRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[60]"
      >
        <Image
          src="/sunset/small-bears.svg"
          alt="Small Bears"
          width={1600}
          height={1500}
          className="w-[100vw] max-w-[1500px] h-auto object-contain"
          priority
        />
      </div>

      <div
        ref={flagRef}
        className="absolute w-30 h-60 bottom-[-200px] left-1/2 transform -translate-x-1/2 z-40 lg:z-40"
      >
        <Image
          src="/sunset/flag.svg"
          alt="Flag"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div
        ref={landscapeRef}
        className="absolute bottom-0 left-0 w-full h-auto z-[100]"
      >
        <Image
          src="/sunset/landscape.svg"
          alt="Landscape"
          width={1920}
          height={500}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
