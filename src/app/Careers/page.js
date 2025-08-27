import React from "react";
import CareersClientPage from "@/components/CareersClientPage";

export const metadata = {
  title: "Careers",
  description:
    "Exciting career opportunities at Trova Tstra are coming soon! We are looking for talented individuals to join our team. Check back for future job openings.",
  keywords: [
    "careers",
    "jobs",
    "hiring",
    "tech jobs",
    "software development careers",
    "job opportunities",
    "employment",
  ],

  alternates: {
    canonical: "/Careers",
  },

  openGraph: {
    title: "Trova Tstra | Careers",
    description:
      "Exciting career opportunities at Trova Tstra are coming soon! Check back for future job openings.",
    url: "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app/Careers",
  },

  twitter: {
    title: "Trova Tstra | Careers",
    description:
      "Exciting career opportunities at Trova Tstra are coming soon! Check back for future job openings.",
  },
};


const Careers = () => {
  return (
    <CareersClientPage />
  );
};

export default Careers;
