"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ForestComponent from "./../../components/ForestComponent";

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

  const [validationErrors, setValidationErrors] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (validationErrors[name]) {
      setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleDropdownSelect = (value) => {
    setFormData((prevState) => ({ ...prevState, inquiryCategory: value }));
    setIsDropdownOpen(false);
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      inquiryCategory: "",
    }));
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

    const errors = {};
    const requiredFields = [
      "inquiryCategory",
      "firstName",
      "lastName",
      "companyName",
      "email",
      "phone",
      "inquiryDetails",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = "This field is required";
      }
    });

    if (!formData.privacyAgreement) {
      errors.privacyAgreement = "You must agree to the Privacy Policy.";
    }

    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form data submitted:", formData);
      alert("Thank you for your inquiry!");
      setFormData({
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
    }
  };

  const inquiryCategories = [
    "Digital Product Development",
    "System Development",
    "Offshore Development",
    "Other",
  ];

  const InputField = ({
    label,
    name,
    type = "text",
    required = false,
    placeholder = "",
    colSpan = 1,
  }) => (
    <div className={`col-span-${colSpan}`}>
      <label className="text-lg md:text-xl mb-2 block">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleInputChange}
        className={`bg-[#1a1a2e] text-white w-full focus:outline-none placeholder-gray-400 text-lg md:text-xl py-4 px-6 border border-transparent focus:border-orange-500 transition-colors duration-200`}
      />
      {validationErrors[name] && (
        <p className="text-red-500 text-sm mt-1">{validationErrors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-white min-h-screen w-full">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold pt-40 md:pt-60 lg:pt-80 text-center">
        CONTACT US
      </h1>
      <p className="mt-8 mb-20 text-center px-[10%] md:px-[25%] text-lg md:text-xl text-gray-300">
        For inquiries about our system development services, including project
        cost estimates and general questions, please contact us via the form
        below or by phone.
      </p>

      <div className="w-full max-w-5xl px-6 md:px-16 lg:px-32 pb-40 flex flex-col justify-center items-center">
        <div className="max-w-2xl border-2 border-gray-600 py-12 px-6 md:py-16 md:px-12 mb-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-8">
              CONTACT INFORMATION
            </h2>
            <p className="mb-2">Vauldex, Inc.</p>
            <p className="mb-2">
              6F, Hakataeki Higashi Ozaki Bld, 1-16-7 Hakataeki Higashi,
              Hakata-ku, Fukuoka-shi, Fukuoka
            </p>
            <p className="mb-2">+63 323540955</p>
            <p className="text-sm mt-4">Available Mon-Fri, 9 AM - 6 PM (PHT)</p>
          </div>
        </div>

        <form
          className="w-full space-y-8 md:space-y-12"
          onSubmit={handleSubmit}
        >
          <div className="relative" ref={dropdownRef}>
            <label
              htmlFor="inquiryCategory"
              className="text-lg md:text-xl mb-2 block "
            >
              Inquiry Category <span className="text-red-500">*</span>
            </label>
            <div
              className={`bg-[#1a1a2e] border-2 border-transparent focus-within:border-orange-500 transition-colors duration-200 cursor-pointer`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className="flex justify-between items-center py-4 px-6">
                <span
                  className={`text-lg md:text-xl ${
                    formData.inquiryCategory ? "text-white" : "text-gray-400"
                  }`}
                >
                  {formData.inquiryCategory || "Please select"}
                </span>
                <span className="text-gray-400 transform transition-transform duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06L10.56 12.5a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-full bg-[#1a1a2e] border border-gray-600 max-h-60 overflow-y-auto z-50">
                <li
                  key="default"
                  className={`py-4 px-6 text-lg md:text-xl cursor-pointer ${
                    formData.inquiryCategory === ""
                      ? "bg-gray-400 text-black"
                      : "text-white"
                  }`}
                  onClick={() => handleDropdownSelect("")}
                >
                  Please select
                </li>
                {inquiryCategories.map((category) => (
                  <li
                    key={category}
                    className={`py-4 px-6 text-lg md:text-xl cursor-pointer
                      ${
                        formData.inquiryCategory === category
                          ? "bg-gray-400 text-black"
                          : "text-white"
                      }
                      ${
                        formData.inquiryCategory !== category
                          ? "hover:bg-gray-500"
                          : ""
                      }`}
                    onClick={() => handleDropdownSelect(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
            {validationErrors.inquiryCategory && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.inquiryCategory}
              </p>
            )}
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-lg md:text-xl mb-2 block">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`bg-[#1a1a2e] text-white w-full focus:outline-none placeholder-gray-400 text-lg md:text-xl py-4 px-6 border border-transparent focus:border-orange-500 transition-colors duration-200`}
                />
                {validationErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="text-lg md:text-xl mb-2 block">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className={`bg-[#1a1a2e] text-white w-full focus:outline-none placeholder-gray-400 text-lg md:text-xl py-4 px-6 transition-colors duration-200 border border-transparent focus:border-orange-500`}
                />
              </div>
              <div>
                <label className="text-lg md:text-xl mb-2 block">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`bg-[#1a1a2e] text-white w-full focus:outline-none placeholder-gray-400 text-lg md:text-xl py-4 px-6 border border-transparent focus:border-orange-500 transition-colors duration-200`}
                />
                {validationErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {validationErrors.lastName}
                  </p>
                )}
              </div>
            </div>
          </div>

          <InputField label="Company Name" name="companyName" required />
          <InputField label="Department" name="department" />
          <InputField label="Job Title" name="jobTitle" />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            required
          />
          <InputField label="Phone Number" name="phone" type="tel" required />

          <div>
            <label className="text-lg md:text-xl mb-2 block">
              Inquiry Details <span className="text-red-500">*</span>
            </label>
            <textarea
              name="inquiryDetails"
              value={formData.inquiryDetails}
              onChange={handleInputChange}
              rows="5"
              className={`bg-[#1a1a2e] text-white w-full focus:outline-none resize-none text-lg md:text-xl py-4 px-6 border border-transparent focus:border-orange-500 transition-colors duration-200`}
            ></textarea>
            {validationErrors.inquiryDetails && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.inquiryDetails}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center">
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
              className={"ml-4 text-sm md:text-base text-gray-400"}
            >
              I agree to the{" "}
              <a href="#" className="underline text-gray-300">
                Privacy Policy
              </a>{" "}
              and consent to the handling of my personal data.
            </label>
          </div>
          {validationErrors.privacyAgreement && (
            <p className="text-red-500 text-sm mt-1 text-center">
              {validationErrors.privacyAgreement}
            </p>
          )}

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="cursor-pointer group px-10 py-4 text-white text-base md:text-lg font-bold rounded-full border-none flex items-center gap-2 transition-colors duration-300 bg-orange-600 hover:bg-orange-700"
            >
              <span>Send Inquiry</span>
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>
        </form>
      </div>
      <ForestComponent className="relative z-20 mt-20" />
    </div>
  );
};

export default Contact;
