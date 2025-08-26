"use client";

import React, { Suspense } from "react";
import HeroSection from "./../components/HeroSection";

const BusinessComponent = React.lazy(() =>
  import("./../components/BusinessComponent")
);
const AboutComponent = React.lazy(() =>
  import("./../components/AboutComponent")
);
const ForestComponent = React.lazy(() =>
  import("./../components/ForestComponent")
);

export default function Home() {
  return (
    <>
      <HeroSection className="relative z-10" />
      <Suspense fallback={<div>Loading...</div>}>
        <BusinessComponent className="relative z-10 mt-20" />
        <AboutComponent className="relative z-10 mt-20" />
        <ForestComponent className="relative z-20 mt-20" />
      </Suspense>
    </>
  );
}
