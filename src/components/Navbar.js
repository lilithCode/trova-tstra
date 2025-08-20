"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered globally once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/Particles" },
  { name: "BUSSINESS", href: "/business" },
  { name: "COMPANY", href: "/company" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT", href: "/contact" },
];

const Navbar = () => {
  const activeHref = "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  // New ref for the divider lines
  const dividersRef = useRef([]);
  const addToDividersRef = (el) => {
    if (el && !dividersRef.current.includes(el)) {
      dividersRef.current.push(el);
    }
  };

  useEffect(() => {
    // Event listener for closing menu on outside click
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  useGSAP(() => {
    // GSAP ScrollTrigger animation for navbar background
    gsap.to(navRef.current, {
      backgroundColor: "rgb(0,0,0)",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top -50%",
        end: "top -100%",
        scrub: true,
      },
    });

    // New GSAP animation to hide the dividers on scroll
    gsap.to(dividersRef.current, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top -200%", // Adjust this value to control when the animation starts
        end: "top -300%", // Adjust this value to control when the animation ends
        scrub: true,
      },
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full bg-transparent fixed inset-x-0 top-0 z-50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Vauldex Logo"
              width={150}
              height={150}
              priority
              className="w-[150px] h-[150px] object-contain"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="hidden xl:flex items-center gap-2 ml-12 whitespace-nowrap">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <li>
                  <Link href={link.href}>
                    <span
                      className={`py-1 font-medium text-base tracking-wide relative transition-colors whitespace-nowrap ${
                        activeHref === link.href
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {activeHref === link.href && (
                        <span
                          className="absolute left-0 -bottom-1 w-full h-[2px]"
                          style={{
                            background: "#FF7F32",
                            height: "2px",
                            width: "100%",
                            left: 0,
                            bottom: "-4px",
                            position: "absolute",
                          }}
                        ></span>
                      )}
                    </span>
                  </Link>
                </li>
                {idx < navLinks.length - 1 && (
                  // Assign the ref to the list item
                  <li
                    ref={addToDividersRef}
                    aria-hidden="true"
                    className="text-[#794f35] text-lg font-bold select-none transition-opacity duration-300 opacity-100"
                  >
                    /////
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <button
            className="block xl:hidden ml-4 p-2 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="6" width="32" height="4" rx="2" fill="white" />
              <rect y="14" width="32" height="4" rx="2" fill="white" />
              <rect y="22" width="32" height="4" rx="2" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 xl:hidden"
            style={{ background: "rgba(0,0,0,0.1)" }}
          />
          <div
            ref={menuRef}
            className="xl:hidden fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-[#793909] shadow-lg z-50 flex flex-col animate-slidein"
          >
            <button
              className="absolute top-4 right-4 text-5xl p-2 focus:outline-none text-[#FF7F32]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-start pt-24 px-6 gap-6 w-full">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span
                    className={`block px-4 py-2 font-medium text-lg tracking-wide transition-colors whitespace-nowrap w-full text-left ${
                      activeHref === link.href
                        ? "text-white border-b-2 border-[#FF7F32]"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
