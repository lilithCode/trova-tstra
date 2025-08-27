import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import DynamicParticles from "@/components/DynamicParticles";
import { Suspense } from "react";

export const metadata = {
  metadataBase: new URL(
    "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app"
  ),
  title: {
    default: "Trova Tstra ",
    template: "Trova Tstra | %s",
  },
  description:
    "Trova Tstra helps individuals and organizations reach their full potential by providing innovative software and dedicated support. We specialize in web development, mobile apps, and custom business solutions.",
  keywords: [
    "Trova Tstra",
    "web development",
    "digital solutions",
    "software development",
    "custom software",
    "tech solutions",
    "business solutions",
    "creative vision",
    "product development",
  ],
  creator: "Trova Tstra",
  publisher: "Trova Tstra",
  openGraph: {
    title: "Trova Tstra ",
    description:
      "We help individuals and organizations reach their full potential by providing innovative software and dedicated support.",
    url: "https://trova-tstra-git-stagging-ibrahim-devs-projects.vercel.app",
    siteName: "Trova Tstra",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "Trova Tstra Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trova Tstra ",
    description:
      "We provide innovative software and dedicated support to empower your business.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <NextTopLoader
          color="#E87722"
          height={3}
          showSpinner={false}
          crawlSpeed={200}
        />
        <ScrollToTop />
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Suspense fallback={null}>
            <DynamicParticles />
          </Suspense>
        </div>
        <div className="w-full bg-transparent fixed inset-x-0 top-0 z-100">
          <Navbar />
        </div>
        <main className="relative z-20">{children}</main>
        <Footer className="relative z-20 mt-20" />
      </body>
    </html>
  );
}
