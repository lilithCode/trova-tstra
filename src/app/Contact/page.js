import React from "react";
import ContactClientPage from "@/components/ContactClientPage";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Trova Tstra for inquiries about system development, project cost estimates, or general questions. Contact us via our online form or by phone.",
  keywords: [
    "contact Trova Tstra",
    "get in touch",
    "inquiry form",
    "system development",
    "project estimate",
    "business inquiry",
    "support",
  ],

  alternates: {
    canonical: "/Contact",
  },

  openGraph: {
    title: "Trova Tstra | Contact Us ",
    description:
      "Get in touch with Trova Tstra for inquiries about system development, project cost estimates, or general questions.",
    url: "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app/Contact",
  },

  twitter: {
    title: "Trova Tstra | Contact Us ",
    description:
      "Get in touch with Trova Tstra for inquiries about system development, project cost estimates, or general questions.",
  },
};

const Contact = () => {
  return <ContactClientPage />;
};

export default Contact;
