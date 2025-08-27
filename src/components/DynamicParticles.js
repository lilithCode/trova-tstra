
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const StarParticles = dynamic(() => import("./StarParticles"), {
  ssr: false,
});

export default function DynamicParticles() {
  return (
    <Suspense fallback={null}>
      <StarParticles />
    </Suspense>
  );
}
