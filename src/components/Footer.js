import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 relative w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between lg:gap-0 gap-5  mb-8">
          <div className="space-y-6 lg:w-1/2">
            <Link href="/" aria-label="Go to home page">
              <Image
                src="/logo.png"
                alt="Tstra Company Logo"
                width={100}
                height={100}
                className="hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
              />
            </Link>

            <div>
              <h3 className="text-[18px] font-semibold mb-3 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Realizing Your Creative Vision
              </h3>
              <p className="text-gray-300 text-[17px] max-w-[480px] leading-relaxed hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                Tstra is the place where your imagination comes to life. We
                bring your vision into reality, walking beside you as we shape
                the future together.
              </p>
            </div>

            <div className="flex lg:flex-row flex-col items-start lg:items-center gap-16">
              <div>
                <Link href="/contact">
                  <button className="border border-white rounded-full px-6 py-3 hover:cursor-pointer transition-all duration-300 flex items-center space-x-2 group">
                    <span>Message us</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>

              <div className="flex flex-col items-start lg:items-center gap-8">
                <h4 className="font-semibold hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  Follow us on
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  <div className="text-center">
                    <Link
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-14 h-14 bg-[#5a5a5a] hover:bg-[#1E73BE] hover:cursor-pointer transition-all duration-300 rounded-full border-10 border-[#1a1b22] hover:border-[#0f1016] flex items-center justify-center mx-auto mb-1">
                        <span className="text-sm pb-1 font-bold">in</span>
                      </div>
                      <span className="text-xs">Linkedin</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-14 h-14 bg-[#5a5a5a] hover:bg-[#1E73BE] hover:cursor-pointer transition-all duration-300 rounded-full border-10 border-[#1a1b22] hover:border-[#0f1016] flex items-center justify-center mx-auto mb-1">
                        <span className="text-sm font-bold">f</span>
                      </div>
                      <span className="text-xs">Facebook</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-14 h-14 bg-[#5a5a5a] hover:bg-[#1E73BE] hover:cursor-pointer transition-all duration-300 rounded-full border-10 border-[#1a1b22] hover:border-[#0f1016] flex items-center justify-center mx-auto mb-1">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <span className="text-xs">Instagram</span>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-14 h-14 bg-[#5a5a5a] hover:bg-[#1E73BE] hover:cursor-pointer transition-all duration-300 rounded-full border-10 border-[#1a1b22] hover:border-[#0f1016] flex items-center justify-center mx-auto mb-1">
                        <span className="text-sm font-bold">X</span>
                      </div>
                      <span className="text-xs">X</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-end gap-22 sm:gap-42 mt-10">
            <div className="space-y-3">
              <ul className="space-y-3 text-[16px] text-[#d1d5db]">
                <li className="flex items-center">
                  <Link
                    href="#"
                    className="border-l-4 border-transparent hover:text-gray-300 hover:border-orange-500 transition-all duration-500 pl-2"
                  >
                    HOME
                  </Link>
                </li>
                <li className="flex items-center ml-2 border-l-4 border-transparent hover:border-orange-500 transition-all duration-500 pl-2">
                  <span className="text-gray-400 mr-2">-</span>
                  <Link
                    href="/about"
                    className="hover:text-gray-300 transition-colors duration-500"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li className="flex items-center ml-2 border-l-4 border-transparent hover:border-orange-500 transition-all duration-500 pl-2">
                  <span className="text-gray-400 mr-2">-</span>
                  <Link
                    href="/business"
                    className="hover:text-gray-300 transition-colors duration-500"
                  >
                    BUSINESS
                  </Link>
                </li>
                <li className="flex items-center ml-2 border-l-4 border-transparent hover:border-orange-500 transition-all duration-500 pl-2">
                  <span className="text-gray-400 mr-2">-</span>
                  <Link
                    href="/company"
                    className="hover:text-gray-300 transition-colors duration-500"
                  >
                    COMPANY
                  </Link>
                </li>
                <li className="flex items-center ml-2 border-l-4 border-transparent hover:border-orange-500 transition-all duration-500 pl-2">
                  <span className="text-gray-400 mr-2">-</span>
                  <Link
                    href="/careers"
                    className="hover:text-gray-300 transition-colors duration-500"
                  >
                    CAREERS
                  </Link>
                </li>
                <li className="flex items-center ml-2 border-l-4 border-transparent hover:border-orange-500 transition-all duration-500 pl-2">
                  <span className="text-gray-400 mr-2">-</span>
                  <Link
                    href="/contact"
                    className="hover:text-gray-300 transition-colors duration-500"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-[16px]">
              <h4 className="font-semibold mb-3 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                Group company
              </h4>
              <p className="text-[#d1d5db] hover:cursor-pointer -ml-2 border-l-4 border-transparent hover:border-orange-500 transition-all duration-500 pl-2">
                Tstra Technologies
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#262626] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#d1d5db] text-[15px] md:text-[17px] hover:text-white transition-colors duration-300 cursor-pointer">
              © 2024 Tstra, Inc. All rights reserved.
            </div>
            <div className="flex justify-center gap-6 text-sm">
              <Link
                href="/information-security"
                className="text-[#d1d5db] hover:cursor-pointer text-[15px] md:text-[17px] hover:text-white underline transition-colors duration-300"
              >
                Information Security
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[#d1d5db] hover:cursor-pointer text-[15px] md:text-[17px] hover:text-white underline transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookie-policy"
                className="text-[#d1d5db] hover:cursor-pointer text-[15px] md:text-[17px] hover:text-white underline transition-colors duration-300"
              >
                Cookie Policy
              </Link>
              <Link
                href="/sns-policy"
                className="text-[#d1d5db] hover:cursor-pointer text-[15px] md:text-[17px] hover:text-white underline transition-colors duration-300"
              >
                SNS Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
