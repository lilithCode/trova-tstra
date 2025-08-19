
"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';



const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'BUSSINESS', href: '/business' },
  { name: 'COMPANY', href: '/company' },
  { name: 'CAREERS', href: '/careers' },
  { name: 'CONTACT', href: '/contact' },
];

const Navbar = () => {
  const activeHref = '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

return (
    <nav className="w-full bg-[#E87722] ">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center cursor-pointer">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Vauldex Logo" width={100} height={100} priority className="w-[100px] h-[100px] object-contain" />
            </Link>
        </div>
        <div className="flex items-center">
          {/* Desktop links */}
          <ul className="hidden xl:flex items-center gap-2 ml-12 whitespace-nowrap">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <li>
                  <Link href={link.href}>
                    <span
                      className={`px-4 py-1 font-medium text-base tracking-wide relative transition-colors whitespace-nowrap ${activeHref === link.href ? 'text-white' : 'text-white/80 hover:text-white'}`}
                    >
                      {link.name}
                      {activeHref === link.href && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px]" style={{background:'#FF7F32', height:'2px', width:'100%', left:0, bottom:'-4px', position:'absolute'}}></span>
                      )}
                    </span>
                  </Link>
                </li>
                {idx < navLinks.length - 1 && (
                  <li aria-hidden="true" className="mx-1 text-white/40 text-lg font-bold select-none">//////</li>
                )}
              </React.Fragment>
            ))}
          </ul>
          {/* Hamburger for screens <= 1215px, now on right */}
          <button
            className="block xl:hidden ml-4 p-2 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="6" width="32" height="4" rx="2" fill="white" />
              <rect y="14" width="32" height="4" rx="2" fill="white" />
              <rect y="22" width="32" height="4" rx="2" fill="white" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu dropdown, slides in from right, links centered */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-40 xl:hidden" style={{background:'rgba(0,0,0,0.1)'}} />
          <div ref={menuRef} className="xl:hidden fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-[#793909] shadow-lg z-50 flex flex-col animate-slidein">
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
                    className={`block px-4 py-2 font-medium text-lg tracking-wide transition-colors whitespace-nowrap w-full text-left ${activeHref === link.href ? 'text-white border-b-2 border-[#FF7F32]' : 'text-white/80 hover:text-white'}`}
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

