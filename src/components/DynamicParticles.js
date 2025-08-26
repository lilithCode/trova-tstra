
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Particles = dynamic(() => import("./Particles"), {
  ssr: false,
});

export default function DynamicParticles() {
  return (
    <Suspense fallback={null}>
      <Particles />
    </Suspense>
  );
}
