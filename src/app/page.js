"use client";

import React from "react";
import HeroSection from "./../components/HeroSection";
import BusinessComponent from "./../components/BusinessComponent";
import AboutComponent from "./../components/AboutComponent";
import ForestComponent from "./../components/ForestComponent";

export default function Home() {
  return (
    <>
      <HeroSection className="relative z-10" />
      <BusinessComponent className="relative z-10 mt-20" />
      <AboutComponent className="relative z-10 mt-20" />
      <ForestComponent className="relative z-20 mt-20" />
    </>
  );
}
