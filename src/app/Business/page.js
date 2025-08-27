import React from "react";
import BusinessClientPage from "@/components/BusinessClientPage";

export const metadata = {
  title: "Business",
  description:
    "Explore Vauldex in-house solutions from Trova Tstra. Discover our portfolio of products designed to blend fresh ideas with smart technology for business growth.",
  keywords: [
    "business solutions",
    "in-house products",
    "Vauldex",
    "Clockme",
    "Passnize",
    "e-learning platform",
    "fintech solutions",
    "CRM",
    "HRM",
  ],

  alternates: {
    canonical: "/Business",
  },

  openGraph: {
    title: "Trova Tstra | Business",
    description:
      "Explore Vauldex in-house solutions. We build products that blend fresh ideas with smart tech to help your business grow.",
    url: "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app/Business",
  },

  twitter: {
    title: "Trova Tstra | Business",
    description:
      "Explore Vauldex in-house solutions. We build products that blend fresh ideas with smart tech to help your business grow.",
  },
};

const Business = () => {
  return (
    <BusinessClientPage />
  );
};

export default Business;
