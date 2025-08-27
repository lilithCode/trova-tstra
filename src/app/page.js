import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "./../components/HeroSection";
import Loading from "./loading";

const BusinessComponent = dynamic(
  () => import("./../components/BusinessComponent"),
  { suspense: true }
);
const AboutComponent = dynamic(() => import("./../components/AboutComponent"), {
  suspense: true,
});
const ForestComponent = dynamic(
  () => import("./../components/ForestComponent"),
  { suspense: true }
);

export const metadata = {
  title: "Trova Tstra",
  description:
    "Welcome to Trova Tstra, where we turn your creative vision into reality. We partner with you to build innovative products and shape the future together.",
  keywords: [
    "home",
    "creative vision",
    "product development",
    "innovation",
    "tech partnership",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Trova Tstra ",
    description:
      "Welcome to Trova Tstra, where we turn your creative vision into reality. We partner with you to build innovative products and shape the future together.",
    url: "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app",
  },

  twitter: {
    title: "Trova Tstra ",
    description:
      "Welcome to Trova Tstra, where we turn your creative vision into reality. We partner with you to build innovative products and shape the future together.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection className="relative z-10" />
      <Suspense fallback={<Loading />}>
        <BusinessComponent className="relative z-10 mt-20" />
        <AboutComponent className="relative z-10 mt-20" />
        <ForestComponent className="relative z-20 mt-20" />
      </Suspense>
    </>
  );
}
