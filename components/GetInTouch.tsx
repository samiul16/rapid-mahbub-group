"use client";
import React, { useState } from "react";

export default function ManpowerContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(8, 61, 88, 0.85), rgba(8, 61, 88, 0.85)), url('/getintouch.jpg')`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-4 py-12 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-white text-base mb-3 tracking-wide">
            Don&apos;t Know What To Start With?
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Get A Solutions For All Manpower Services
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Offices Info */}
            <div className="space-y-10">
              {/* Head Office */}
              <div className="bg-gradient-to-br from-teal-900/10 to-teal-800/20 backdrop-blur-sm p-8 rounded-lg border border-teal-700/50">
                <p className="text-gray-300 text-sm mb-2 tracking-wide">
                  Offices
                </p>
                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                  Head Office
                </h2>
                <div className="space-y-2 text-gray-200">
                  <p className="text-lg">404, Al Mazrouei Building</p>
                  <p className="text-lg">Al A&apos;sam Street, Al Nahyan</p>
                  <p className="text-lg">Abu Dhabi</p>
                  <p className="text-lg font-semibold">UAE</p>
                </div>
              </div>

              {/* Branch Office */}
              <div className="bg-gradient-to-br from-teal-800/10 to-teal-700/10 backdrop-blur-sm p-8 rounded-lg border border-teal-700/50">
                <h2 className="text-white text-3xl sm:text-4xl font-bold mb-6">
                  Branch Office
                </h2>
                <div className="space-y-2 text-gray-200">
                  <p className="text-lg">Al Majaz Jamal Abdul Nasser</p>
                  <p className="text-lg">Street Ground Floor (G-1)</p>
                  <p className="text-lg font-semibold">Sharjah</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-gradient-to-br from-slate-600/30 to-slate-700/20 backdrop-blur-sm p-8 sm:p-10 rounded-lg border border-slate-500/50">
              <p className="text-gray-200 text-sm mb-2 font-semibold tracking-wide">
                Get In Touch
              </p>
              <h2 className="text-white text-3xl sm:text-4xl font-bold mb-8">
                Write Down And Send Us
              </h2>

              <div className="space-y-5">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-5 py-4 bg-slate-500/10 backdrop-blur-sm border border-slate-400/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition-all"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-5 py-4 bg-slate-500/10 backdrop-blur-sm border border-slate-400/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition-all"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-5 py-4 bg-slate-500/10 backdrop-blur-sm border border-slate-400/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition-all"
                />

                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Service Description"
                  className="w-full px-5 py-4 bg-slate-500/10 backdrop-blur-sm border border-slate-400/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition-all"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={5}
                  className="w-full px-5 py-4 bg-slate-500/10 backdrop-blur-sm border border-slate-400/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:border-transparent transition-all resize-none"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-sky-600 hover:bg-cyan-700 text-white font-bold py-4 px-10 rounded-full uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-105 shadow hover:shadow-cyan-500/50 cursor-pointer"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
