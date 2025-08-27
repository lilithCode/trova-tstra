"use client";
import React, { lazy, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import BusinessData from "@/components/BusinessData";

const ForestComponent = lazy(() => import("./ForestComponent"));
const BusinessClientPage = () => {
  return (
    <>
      <div className="min-h-full relative z-40 flex flex-col items-center justify-center text-center text-white px-4">
        <div className="pt-[50%] md:pt-[25%] lg:pt-[20%] px-[5%] md:px-[10%] lg:px-[20%] w-full">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center">
            BUSINESS
          </h1>

          <div className="my-16 text-center">
            <h2 className="text-xl mb-4">Vauldex In-House Solutions</h2>
            <p className="text-lg md:text-xl text-gray-400 mx-auto">
              At Vauldex, we build products that blend fresh ideas with smart
              tech—ready to help your business grow with confidence.
            </p>
          </div>

          <div className="mt-35 flex flex-col space-y-24">
            {BusinessData.map((item, index) => (
              <div key={item.id} className="flex flex-col">
                <div
                  className={`flex flex-col items-center justify-between p-8 rounded-xl ${
                    index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                      {}
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="contain"
                        loading="lazy"
                        sizes="(max-width: 640px) 192px, 256px"
                      />
                    </div>
                  </div>
                  <div
                    className={`md:w-2/3 ${
                      index % 2 === 1 ? "md:pr-16" : "md:pl-16"
                    } text-center md:text-left`}
                  >
                    <div className="pb-2 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mb-2">
                      <h3 className="text-3xl md:text-5xl font-bold">
                        {item.title}
                      </h3>
                      {item.endOfService && (
                        <span className="border bg-gray-400 font-bold px-2 py-1 text-black whitespace-nowrap">
                          End of Service
                        </span>
                      )}
                    </div>
                    <p className="text-xl font-semibold text-gray-300 mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                {index !== BusinessData.length - 1 && (
                  <div className="w-full h-px bg-gray-700 mt-12" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-35 border-2 border-gray-600 relative z-40 p-5 md:p-20 w-full text-gray-200">
            <p className="text-xl text-gray-300">
              {
                "We're happy to suggest solutions that fit your unique situation. Don't hesitate to reach out—we'd love to hear from you, just send us a quick message to get started."
              }
            </p>
            <Link href="/Contact">
              <div
                id="button"
                className="mt-8 flex justify-center items-center"
              >
                <button className="cursor-pointer group px-10 md:px-20 py-3 lg:px-40 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-orange-500 flex items-center gap-2">
                  <span>{"Let's Talk"}</span>
                  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <ForestComponent className="relative z-20 mt-20" />
        </Suspense>
      </div>
    </>
  );
};

export default BusinessClientPage;
