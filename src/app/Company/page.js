import React from "react";
import CompanyClientPage from "@/components/CompanyClientPage";
export const metadata = {
  title: "Company Profile",
  description:
    "Find detailed information about Vauldex Inc., including our address in Fukuoka, Japan, overseas office in the Philippines, capital, and establishment history.",
  keywords: [
    "company overview",
    "Vauldex Inc.",
    "company address",
    "overseas office",
    "Fukuoka",
    "Cebu",
    "corporate information",
  ],

  alternates: {
    canonical: "/Company",
  },

  openGraph: {
    title: "Trova Tstra | Company",
    description:
      "Find detailed information about Vauldex Inc., including our address, overseas offices, and corporate history.",
    url: "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app/Company",
  },

  twitter: {
    title: "Trova Tstra | Company",
    description:
      "Find detailed information about Vauldex Inc., including our address, overseas offices, and corporate history.",
  },
};

const Company = () => {
  return <CompanyClientPage />;
};

export default Company;
