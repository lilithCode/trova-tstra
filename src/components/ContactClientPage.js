"use client";

import React, { useState, lazy, Suspense } from "react";
const ForestComponent = lazy(() => import("./ForestComponent"));

const InputField = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder = "",
  value,
  onChange,
  error,
  colSpan = 1,
}) => (
  <div className={`col-span-${colSpan}`}>
    <label htmlFor={name} className="text-lg md:text-xl mb-2 block">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="bg-field text-white w-full focus:outline-none placeholder-gray-400 text-lg md:text-xl py-4 px-6 border border-transparent focus:border-orange-500 transition-colors duration-200"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const ContactClientPage = () => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
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
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (response.ok) {
          setSubmitStatus({
            success: true,
            message: "Thank you for your inquiry!",
          });
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
        } else {
          setSubmitStatus({
            success: false,
            message: `Error: ${result.error || "Something went wrong."}`,
          });
        }
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: "An unexpected error occurred. Please try again.",
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const inquiryCategories = [
    "Digital Product Development",
    "System Development",
    "Offshore Development",
    "Other",
  ];

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
          <div>
            <label
              htmlFor="inquiryCategory"
              className="text-lg md:text-xl mb-2 block"
            >
              Inquiry Category <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryCategory"
              name="inquiryCategory"
              value={formData.inquiryCategory}
              onChange={handleInputChange}
              className="bg-field text-white w-full focus:outline-none text-lg md:text-xl py-4 px-6 border border-transparent focus:border-orange-500 transition-colors duration-200"
            >
              <option value="">Please select</option>
              {inquiryCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            {validationErrors.inquiryCategory && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.inquiryCategory}
              </p>
            )}
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                error={validationErrors.firstName}
                required
              />
              <InputField
                label="Middle Name"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                error={validationErrors.middleName}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                error={validationErrors.lastName}
                required
              />
            </div>
          </div>
          <InputField
            label="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            error={validationErrors.companyName}
            required
          />
          <InputField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            error={validationErrors.department}
          />
          <InputField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            error={validationErrors.jobTitle}
          />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={validationErrors.email}
            required
          />
          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            error={validationErrors.phone}
            required
          />
          <div>
            <label
              htmlFor="inquiryDetails"
              className="text-lg md:text-xl mb-2 block"
            >
              Inquiry Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="inquiryDetails"
              name="inquiryDetails"
              value={formData.inquiryDetails}
              onChange={handleInputChange}
              rows="5"
              className="bg-field text-white w-full focus:outline-none resize-none text-lg md:text-xl py-4 px-6 border border-transparent focus:border-orange-500 transition-colors duration-200"
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
              className="ml-4 text-sm md:text-base text-gray-400"
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
          <div className="text-center">
            {submitStatus && (
              <p
                className={`text-sm mt-4 ${
                  submitStatus.success ? "text-green-500" : "text-red-500"
                }`}
              >
                {submitStatus.message}
              </p>
            )}
          </div>
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer group px-10 py-4 text-white text-base md:text-lg font-bold rounded-full border-none flex items-center gap-2 transition-colors duration-300 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
              {!isSubmitting && (
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ForestComponent className="relative z-20 mt-20" />
      </Suspense>
    </div>
  );
};

export default ContactClientPage;
