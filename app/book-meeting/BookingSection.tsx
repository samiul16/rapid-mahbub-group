"use client";

import React, { useState } from "react";
import Image from "next/image";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    serviceDescription: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#051C36] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <div className="rounded-2xl p-2 shadow-2xl">
                <Image
                  src="/get.png"
                  alt="Professional team working together"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl">
              <div className="bg-neutral-50/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-600/30">
                <h2 className="text-white text-3xl lg:text-4xl font-bold mb-3">
                  Input Your Details
                </h2>

                <form onSubmit={handleSubmit} className="">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>

                  {/* Service Description */}
                  <div>
                    <input
                      type="text"
                      name="serviceDescription"
                      placeholder="Service Description"
                      value={formData.serviceDescription}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b-2 border-slate-500 text-white placeholder-slate-300 py-4 px-0 text-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-10 rounded-full transition-all duration-300 uppercase tracking-wider text-lg shadow hover:shadow-xl transform hover:scale-105 cursor-pointer"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
