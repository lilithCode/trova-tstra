
import React, { lazy, Suspense } from "react";
import { Metadata } from "next";

const ForestComponent = lazy(() =>
  import("./../../components/ForestComponent")
);

const companyInfo = [
  { label: "Company Name", value: "Vauldex Inc." },
  { label: "Capital", value: "10,000,000 Yen" },
  { label: "Founding", value: "April 2013" },
  { label: "Establishment", value: "June 2018" },
  {
    label: "Address",
    value:
      "6F, Hakataeki Higashi Ozaki Bld, 1-16-7 Hakataeki Higashi, Hakata-ku, Fukuoka-shi, Fukuoka 812-0013, Japan",
  },
  { label: "Phone Number", value: "050-5213-9400" },
  { label: "Officer", value: "Ryo Ejima" },
  { label: "Number of Employees", value: "50 (December 2024 in group)" },
];

const OverseasInfo = [
  {
    label: "Philippines",
    address:
      "6F, FLB Corporate Center, Archbishop Reyes Ave, Cebu City, 6000 Cebu",
  },
  {
    label: "Phone Number",
    value: "+63 323540955",
  },
];

const Company = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-white">
      <h1 className="min-h-screen text-5xl md:text-7xl lg:text-8xl font-bold flex justify-center items-center">
        COMPANY
      </h1>

      <div className="w-full px-[5%] md:px-[10%] lg:px-[20%] pb-40">
        <div className="flex flex-col w-full pb-10">
          <h2 className="text-left text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            COMPANY OVERVIEW
          </h2>
          <div className="w-full h-px bg-gray-700 mt-10" />
        </div>

        <div className="w-full space-y-8 md:space-y-12">
          {companyInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start border-b border-gray-600 pb-4 md:pb-8"
            >
              <span className="font-semibold text-xl sm:text-2xl md:text-2xl md:w-[35%] lg:w-[30%] xl:w-[25%] min-w-[200px]">
                {item.label}
              </span>
              <span className="text-gray-300 mt-2 md:mt-0 md:ml-12 w-full text-lg sm:text-xl md:text-xl">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full pt-16 pb-10">
          <h2 className="text-left text-4xl sm:text-5xl md:text-6xl text-white font-bold">
            OVERSEAS OFFICE
          </h2>
          <div className="w-full h-px bg-gray-700 mt-10" />
        </div>

        <div className="w-full space-y-8 md:space-y-12">
          {OverseasInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start border-b border-gray-600 pb-4 md:pb-8"
            >
              <span className="font-semibold text-xl sm:text-2xl md:text-2xl md:w-[35%] lg:w-[30%] xl:w-[25%] min-w-[200px]">
                {item.label}
              </span>
              <span className="text-gray-300 mt-2 md:mt-0 md:ml-12 w-full text-lg sm:text-xl md:text-xl">
                {item.value || item.address}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ForestComponent className="relative z-20 mt-20" />
      </Suspense>
    </div>
  );
};

export default Company;
