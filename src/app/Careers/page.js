import React from "react";
import Link from "next/link";
import ForestComponent from "./../../components/ForestComponent";

const Careers = () => {
  return (
    <>
      <div className="relative min-h-screen z-10 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold">
            Coming Soon
          </h1>
          <Link href="/">
            <div id="button" className="mt-20 flex justify-center items-center">
              <button className="cursor-pointer group px-5 md:px-10 py-3 lg:px-20 md:py-4 text-white text-base md:text-lg font-bold rounded-full border-2 border-orange-500 flex items-center gap-2">
                <span>{"Back to Home"}</span>
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </Link>
        </div>
      </div>
      <ForestComponent className="relative z-20 mt-20" />
    </>
  );
};

export default Careers;
