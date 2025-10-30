"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Engineering = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    nameOfProject: "",
    emailId: "",
    phoneNumber: "",
    designation: "",
    expectedStartDate: "",
    projectLocation: "",
    manpowerType: "",
    projectDuration: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Construction/Engineering Background Pattern */}
        <div className="w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-90">
          {/* Geometric Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                linear-gradient(45deg, rgba(156, 163, 175, 0.1) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(156, 163, 175, 0.1) 25%, transparent 25%)
              `,
              backgroundSize: "200px 200px, 200px 200px, 40px 40px, 40px 40px",
              backgroundPosition: "0 0, 100px 100px, 0 0, 20px 20px",
            }}
          />

          {/* Construction Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-sky-400 rounded-full"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border-4 border-sky-500 rotate-45"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 border-4 border-sky-300 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-sky-600 rotate-12"></div>

            {/* Grid Pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        </div>

        {/* Try to load actual background image if available */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('/arco.png'), url('/arco.png')`,
            filter: "brightness(0.8) contrast(1.1)",
          }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Form Card */}
        <div className="bg-white/95 rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-sm">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-sky-500 text-2xl md:text-3xl lg:text-4xl font-bold font-anek mb-4">
              Partner with ARCO Engineering Limited —<br />
              Manpower Solutions
            </h1>

            {/* Decorative Line */}
            <div className="w-16 h-1 bg-sky-500 mx-auto mb-6"></div>

            {/* Button */}
            <div className="mb-8">
              <span className="bg-cyan-700 text-white px-8 py-3 rounded-full font-semibold text-lg">
                Man Power Supply
              </span>
            </div>

            {/* Form Title */}
            <h2 className="text-gray-800 text-xl md:text-2xl font-bold mb-4">
              ARCO Engineering Limited — Man Power Application Form
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Partner with SMITS Limited as a trusted subcontractor for
              prestigious projects across the UAE and Saudi Arabia. Submit your
              company&apos;s details and project experience to be considered for
              upcoming construction, industrial, and infrastructure contracts.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="clientName"
                  placeholder="Client Name"
                  value={formData.clientName}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="nameOfProject"
                  placeholder="Name of Project"
                  value={formData.nameOfProject}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  name="emailId"
                  placeholder="Email ID"
                  value={formData.emailId}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="+971XXXXXXXXX"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            {/* Row 3 - Full Width */}
            <div>
              <input
                type="text"
                name="designation"
                placeholder="Enter Your Designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  name="expectedStartDate"
                  value={formData.expectedStartDate}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 focus:outline-none focus:border-sky-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    Expected Start Date
                  </option>
                  <option value="immediate">Immediate</option>
                  <option value="1-week">Within 1 Week</option>
                  <option value="2-weeks">Within 2 Weeks</option>
                  <option value="1-month">Within 1 Month</option>
                  <option value="3-months">Within 3 Months</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <div>
                <input
                  type="text"
                  name="projectLocation"
                  placeholder="Project Name / Location"
                  value={formData.projectLocation}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <select
                  name="manpowerType"
                  value={formData.manpowerType}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 focus:outline-none focus:border-sky-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    Type of Manpower Required
                  </option>
                  <option value="skilled">Skilled Workers</option>
                  <option value="semi-skilled">Semi-Skilled Workers</option>
                  <option value="unskilled">Unskilled Workers</option>
                  <option value="technical">Technical Staff</option>
                  <option value="management">Management Staff</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  name="projectDuration"
                  value={formData.projectDuration}
                  onChange={handleInputChange}
                  className="w-full px-0 py-3 border-0 border-b-2 border-sky-300 bg-transparent text-gray-700 focus:outline-none focus:border-sky-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-gray-400">
                    Project Duration
                  </option>
                  <option value="1-3-months">1-3 Months</option>
                  <option value="3-6-months">3-6 Months</option>
                  <option value="6-12-months">6-12 Months</option>
                  <option value="1-2-years">1-2 Years</option>
                  <option value="2-years-plus">2+ Years</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="bg-sky-500/70 hover:bg-sky-600 text-white font-bold text-lg px-12 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Engineering;
