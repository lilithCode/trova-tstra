"use client";
import React, { useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Use next/dynamic for the ForestComponent
const ForestComponent = dynamic(() => import("./ForestComponent"), {
  suspense: true,
});

const coreValuesData = [
  {
    title: "ACT WITH INTEGRITY",
    description:
      "We build trust through sincerity and earn respect through integrity. With every honest interaction—with customers, partners, and teammates—we strengthen the bonds that create lasting partnerships and powerful teams. By respecting one another, fostering a sense of security, and embracing empathy, we don't just work together—we grow together.",
  },
  {
    title: "INVENT THE FUTURE",
    description:
      "With an unstoppable passion for creation, we strive to unlock new value and endless possibilities. Humanity alone has the power to envision the future, invent, and transform the world. Among them, we choose to be the curious, the seekers, the creators—those who never lose the drive to explore, innovate, and shape what's next, no matter the era.",
  },
  {
    title: "LEAD THE GROWTH",
    description:
      "Growth is our guiding principle—both as individuals and as an organization. We believe in taking on challenges, learning through experience, and turning failure into fuel for new possibilities. Through the power of creation and collaboration, we expand our knowledge, drive progress, and build an environment where every individual can thrive and make an impact.",
  },
  {
    title: "OWN THE OUTCOME",
    description:
      "We take full ownership of our work, embracing our roles as our own and striving for excellence in everything we do. Pride drives us—anything less than our best is unacceptable. With a deep sense of responsibility and commitment, we create results we can stand behind. By building on each success, we foster growth, earn trust, and set new standards of excellence.",
  },
];

const AboutClientPage = () => {
  const philosophyRef = useRef(null);
  const missionRef = useRef(null);
  const coreValuesRef = useRef(null);
  const forestRef = useRef(null);
  const philosophyParagraphs = useRef([]);
  const missionParagraphs = useRef([]);
  const coreValueCards = useRef([]);

  useEffect(() => {
    const createdTriggers = [];

    const createScrollTriggerAnimation = (
      ref,
      yFrom = 50,
      duration = 1.2,
      startTrigger = "top 85%"
    ) => {
      const anim = gsap.fromTo(
        ref,
        { autoAlpha: 0, y: yFrom },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: startTrigger,
            toggleActions: "play none none reverse",
          },
        }
      );
      createdTriggers.push(anim.scrollTrigger);
    };

    createScrollTriggerAnimation(philosophyRef.current);
    createScrollTriggerAnimation(missionRef.current);
    createScrollTriggerAnimation(coreValuesRef.current);
    createScrollTriggerAnimation(forestRef.current);

    philosophyParagraphs.current.forEach((p) => {
      createScrollTriggerAnimation(p, 30, 1, "top 90%");
    });

    missionParagraphs.current.forEach((p) => {
      createScrollTriggerAnimation(p, 30, 1, "top 90%");
    });

    coreValueCards.current.forEach((card) => {
      const anim = gsap.fromTo(
        card,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
      createdTriggers.push(anim.scrollTrigger);
    });

    // Cleanup function
    return () => {
      createdTriggers.forEach((trigger) => {
        if (trigger) {
          trigger.kill();
        }
      });
      // Also kill any tweens associated with the elements to be safe
      gsap.killTweensOf([
        philosophyRef.current,
        missionRef.current,
        coreValuesRef.current,
        forestRef.current,
        ...philosophyParagraphs.current,
        ...missionParagraphs.current,
        ...coreValueCards.current,
      ]);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden z-20">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0 bg-radial-gradient-sunset"></div>

        <div className="relative z-40 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-wide">
            ABOUT TROVA TSTRA
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg font-light text-gray-200 leading-relaxed">
            We help individuals and organizations reach their full potential by
            providing innovative software and dedicated support, empowering them
            to create a better future.
          </p>
        </div>

        <div className="absolute inset-0 z-20">
          <Image
            src="/sunset/mountain-1.svg"
            alt="Mountain 1"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-10">
          <Image
            src="/sunset/mountain-2.svg"
            alt="Mountain 2"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 z-5">
          <Image
            src="/sunset/mountain-3.svg"
            alt="Mountain 3"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden">
          <Image
            src="/AboutUs/bears.svg"
            alt="Bears"
            width={1920}
            height={500}
            className="w-full h-auto object-cover origin-bottom
                 scale-[2] sm:scale-125 md:scale-100"
            sizes="(max-width: 640px) 170vw, (max-width: 768px) 125vw, 100vw"
            priority
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full z-40 overflow-hidden">
          <Image
            src="/AboutUs/land.svg"
            alt="Land"
            width={1920}
            height={500}
            className="w-full h-auto object-cover origin-bottom
                 scale-[1.9] sm:scale-135 md:scale-100"
            sizes="(max-width: 640px) 190vw, (max-width: 768px) 135vw, 100vw"
            priority
          />
        </div>
      </div>

      <section
        ref={philosophyRef}
        className="relative z-40 px-[10%] lg:px-[20%] py-24 w-full text-gray-200"
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className=" text-left text-4xl md:text-6xl mb-8">
          OUR <span className="text-accent-light font-bold">PHILOSOPHY</span>
        </h2>
        <div className="mb-10 mt-10 flex w-full flex-col  justify-center gap-8 ">
          <Image
            src="/AboutUs/qoute.svg"
            alt="Quote"
            height={100}
            width={100}
            className="ml-[10%] w-10 md:w-20 lg:w-30"
            loading="lazy"
          />
          <h3 className="text-center text-4xl md:text-6xl font-bold mb-10">
            The Pursuit of Kotowari
          </h3>
        </div>
        <div className=" text-left ml-auto text-lg md:text-xl leading-relaxed space-y-6">
          {[
            "We abide by the fundamental truths that shape the world—not just how things are, but how they should be. By embracing these principles, we create solutions that work naturally and effectively, helping you achieve success with clarity and confidence.",
            "Seeking fundamental truths means looking beyond the surface to understand the essence of things and acting with integrity. It's not about hanging onto existing frameworks or resisting change, but about embracing what is right and evolving with clarity and purpose.",
            "On the contrary, true understanding drives transformation—sparking innovation, developing new frameworks, and pushing beyond existing standards in pursuit of something better. With each breakthrough, new principles emerge, leading us to question, refine, and expand our understanding even further.",
            "The relentless pursuit of truth fuels progress—driving innovation, shaping the future, and turning bold ideas into reality. By constantly pushing the limits of what's possible, we believe we can transform the world and enrich lives in ways never imagined.",
          ].map((text, i) => (
            <p
              key={i}
              ref={(el) => (philosophyParagraphs.current[i] = el)}
              style={{ willChange: "transform, opacity" }}
            >
              {text}
            </p>
          ))}
        </div>
      </section>

      <section
        ref={missionRef}
        className="relative z-40 px-[10%] lg:px-[20%] py-24 w-full text-gray-200"
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className=" text-left text-4xl md:text-6xl mb-8">
          OUR <span className="text-accent-light font-bold">MISSION</span>
        </h2>
        <div className="mb-10 mt-10 flex w-full flex-col  justify-center gap-8 ">
          <Image
            src="/AboutUs/qoute.svg"
            alt="Quote"
            height={100}
            width={100}
            className="ml-[10%] w-10 md:w-20 lg:w-30"
            loading="lazy"
          />
          <h3 className="text-center text-4xl md:text-6xl font-bold mb-10">
            Realizing your creative vision
          </h3>
        </div>
        <div className=" text-left ml-auto text-lg md:text-xl leading-relaxed space-y-6">
          {[
            "The desire to create—it begins as a spark deep within, an unexpected idea, a stirring sense of challenge ahead. It is the thrill of stepping into the unknown, the anticipation of what's possible. At Trova Tstra, our purpose is to be the place where these creative aspirations take shape.",
            "As we pursue our own passion for creation, we hold the dreams of our customers and partners as dearly as our own.",
            "We exist to awaken the innate curiosity and creativity within people, transforming ideas into tangible reality. By cultivating and bringing these visions to life, we introduce new value to the world.",
            "The drive to create is something that resides in all of us. Believing in its limitless potential, we dedicate ourselves to its realization—continuously evolving, innovating, and pushing the boundaries of what's possible.",
          ].map((text, i) => (
            <p
              key={i}
              ref={(el) => (missionParagraphs.current[i] = el)}
              style={{ willChange: "transform, opacity" }}
            >
              {text}
            </p>
          ))}
        </div>
      </section>
      <section
        ref={coreValuesRef}
        className="relative z-40 px-[10%] lg:px-[20%] py-24 w-full text-gray-200 text-center"
        style={{ willChange: "transform, opacity" }}
      >
        <h2 className="text-4xl md:text-6xl mb-28">
          OUR <span className="text-accent-light font-bold">CORE VALUES</span>
        </h2>

        <div className="relative w-full">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent -translate-y-1/2 z-10"></div>

          <div className="hidden md:block  absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-transparent via-gray-500 to-transparent -translate-x-1/2 z-10"></div>

          <div
            className="hidden md:block absolute z-20 w-28 h-28 p-2 rounded-4xl border-2 border-gray-900 bg-gray-900 items-center justify-center transform transition-transform duration-500
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45"
          >
            <Image
              src="/logo.png"
              alt="Core Values Logo"
              width={80}
              height={80}
              className="p-2 w-full h-full object-contain -rotate-45"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-16 gap-y-24 w-full items-center justify-center relative z-0">
            {coreValuesData.map((value, i) => (
              <div
                key={i}
                ref={(el) => (coreValueCards.current[i] = el)}
                className="mt-6 relative flex flex-col p-8 rounded-xl transform transition duration-300"
                style={{ willChange: "transform, opacity" }}
              >
                <div
                  className="absolute z-30 w-28 h-28 p-6 rounded-4xl border-2 border-accent-light bg-gray-900 flex items-center justify-center transform transition-transform duration-300
                    -top-6 left-1/2 -translate-x-1/2 rotate-25
                    group-hover:scale-110"
                >
                  <Image
                    src="/AboutUs/bear-face.svg"
                    alt="Bear icon"
                    width={80}
                    height={80}
                    className=" w-full h-full object-contain -rotate-25"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-20 text-accent-light">
                  {value.title}
                </h3>
                <p className="text-base font-light text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div ref={forestRef}>
        <Suspense fallback={<div>Loading Forest...</div>}>
          <ForestComponent className="relative z-20 mt-20" />
        </Suspense>
      </div>
    </div>
  );
};

export default AboutClientPage;
