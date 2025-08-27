import React from "react";
import AboutClientPage from "@/components/AboutClientPage";

export const metadata = {
  title: "About Us",
  description:
    "Discover Trova Tstra's philosophy, mission, and core values. Learn how we pursue fundamental truths to build trust, invent the future, and realize creative visions.",
  keywords: [
    "about Trova Tstra",
    "company philosophy",
    "mission statement",
    "core values",
    "Kotowari",
    "tech innovation",
    "creative vision",
  ],

  alternates: {
    canonical: "/About",
  },

  openGraph: {
    title: "Trova Tstra | About Us",
    description:
      "Discover Trova Tstra's philosophy, mission, and core values that drive our passion for innovation and creation.",
    url: "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app/About",
  },

  twitter: {
    title: "Trova Tstra | About Us",
    description:
      "Discover Trova Tstra's philosophy, mission, and core values that drive our passion for innovation and creation.",
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}
