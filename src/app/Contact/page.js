"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  value,
  onChange,
}) => (
  <div className="w-full">
    <label className="text-lg md:text-xl mb-2 block">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-[#1a1a2e] text-white w-full focus:outline-none placeholder-gray-400 text-lg md:text-xl py-4 px-6 focus:border-orange-500 border border-transparent transition-colors duration-200"
    />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    inquiryCategory: "",
    firstName: "",
    middleName: "",
    lastName: "",
    companyName: "",
    department: "",
    jobTitle: "",
    email: "",
    phone: "",
    inquiryDetails: "",
    privacyAgreement: false,
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDropdownSelect = (value) => {
    setFormData((prevState) => ({ ...prevState, inquiryCategory: value }));
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    alert("Thank you for your inquiry!");
  };

  const inquiryCategories = [
    "Digital Product Development",
    "System Development",
    "Offshore Development",
    "Other",
  ];

  return (
    <div className="relative z-30 flex flex-col items-center justify-center text-white min-h-screen w-full">
      <h1 className="text-7xl md:text-8xl font-bold pt-40 md:pt-60 lg:pt-80 text-center">
        CONTACT US
      </h1>
      <p className="mt-8 mb-20 text-center px-[10%] md:px-[25%] text-lg md:text-xl text-gray-300">
        For inquiries about our system development services, please contact us
        via the form below.
      </p>

      <div className="w-full max-w-5xl px-6 md:px-16 lg:px-32 pb-40 flex flex-col justify-center items-center">
        <div className="max-w-2xl border-2 border-gray-600 py-12 px-6 md:py-16 md:px-12 mb-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl md:text-2xl font-bold">
              CONTACT INFORMATION
            </h2>
            <div className="w-20 h-px bg-white my-6" />
            <p className="mb-2">Vauldex, Inc.</p>
            <p className="mb-2">
              6F, Hakataeki Higashi Ozaki Bld, Fukuoka, Japan
            </p>
            <p className="mb-2">+63 323540955</p>
          </div>
        </div>

        <form
          className="w-full space-y-8 md:space-y-12"
          onSubmit={handleSubmit}
        >
          {}
          <div className="relative" ref={dropdownRef}>
            <label className="text-lg md:text-xl mb-2 block">
              Inquiry Category <span className="text-red-500">*</span>
            </label>
            <div
              className="bg-[#1a1a2e] border-2 border-transparent focus-within:border-orange-500 transition-colors duration-200 cursor-pointer"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex justify-between items-center py-4 px-6">
                <span
                  className={
                    formData.inquiryCategory ? "text-white" : "text-gray-400"
                  }
                >
                  {formData.inquiryCategory || "Please select"}
                </span>
                <span>▼</span>
              </div>
            </div>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-full bg-[#1a1a2e] border border-gray-600 max-h-60 overflow-y-auto z-50">
                {inquiryCategories.map((category) => (
                  <li
                    key={category}
                    className="py-4 px-6 text-lg md:text-xl text-white hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleDropdownSelect(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {}
          <div>
            <label className="text-lg md:text-xl mb-2 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <InputField
                name="middleName"
                placeholder="Middle Name"
                value={formData.middleName}
                onChange={handleInputChange}
              />
              <InputField
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <InputField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />

          <div>
            <label className="text-lg md:text-xl mb-2 block">
              Inquiry Details <span className="text-red-500">*</span>
            </label>
            <textarea
              name="inquiryDetails"
              value={formData.inquiryDetails}
              onChange={handleInputChange}
              rows="5"
              className="bg-[#1a1a2e] text-white w-full focus:outline-none resize-none text-lg md:text-xl py-4 px-6 focus:border-orange-500 border border-transparent transition-colors duration-200"
            ></textarea>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="privacyAgreement"
              name="privacyAgreement"
              checked={formData.privacyAgreement}
              onChange={handleInputChange}
              className="mt-1"
            />
            <label
              htmlFor="privacyAgreement"
              className="ml-4 text-sm md:text-base text-gray-400"
            >
              I agree to the{" "}
              <a href="#" className="underline text-gray-300">
                Privacy Policy
              </a>
            </label>
          </div>

          <div className="flex justify-start pt-8">
            <button
              type="submit"
              className="cursor-pointer group px-10 py-4 text-white text-base md:text-lg font-bold rounded-full transition-colors duration-300 bg-orange-600 hover:bg-orange-700"
            >
              Send Inquiry →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
