"use client";

import React from "react";
import { Settings, Cog, Wrench, Users } from "lucide-react";
import Image from "next/image";

const WeHear = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sky-500 text-3xl md:text-4xl lg:text-5xl font-bold font-anek mb-4">
            We&apos;d love to hear from you.
          </h2>
          <p className="text-cyan-900 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We are confident in the products which we supply and know we can
            rely on their quality and performance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 shadow-xl border-2 border-gray-100 rounded-2xl">
          {/* Left Side - Features Grid */}
          <div className="lg:col-span-2 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quality Assurance */}
              <div className=" p-8 transition-all duration-300 border-r border-r-gray-300 border-b border-b-gray-300">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-sky-500 mb-4">
                    <Image
                      src="/quote/2.svg"
                      alt="Quality Assurance"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h3 className="text-sky-500 text-xl font-bold font-anek mb-3">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Committed to delivering the highest standards.
                  </p>
                </div>
              </div>

              {/* Metal Expertise */}
              <div className="p-8 transition-all duration-300 border-r border-r-gray-300 border-b border-b-gray-300">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-sky-500 mb-4">
                    <Image
                      src="/quote/1.svg"
                      alt="Quality Assurance"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h3 className="text-sky-500 text-xl font-bold font-anek mb-3">
                    Metal Expertise
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Decades of experience in crafting industry.
                  </p>
                </div>
              </div>

              {/* Steel Strength */}
              <div className=" p-8 transition-all duration-300 border-r border-r-gray-300 border-b border-b-gray-300">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-sky-500 mb-4">
                    <Image
                      src="/quote/3.svg"
                      alt="Quality Assurance"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h3 className="text-sky-500 text-xl font-bold font-anek mb-3">
                    Steel Strength
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Delivering high-performance steel products.
                  </p>
                </div>
              </div>

              {/* Trusted Partners */}
              <div className="p-8 transition-all duration-300 border-r border-r-gray-300 border-b border-b-gray-300">
                <div className="mb-6">
                  <div className="w-16 h-16  rounded-2xl flex items-center justify-center text-sky-500 mb-4">
                    <Image
                      src="/quote/4.svg"
                      alt="Quality Assurance"
                      width={46}
                      height={46}
                    />
                  </div>
                  <h3 className="text-sky-500 text-xl font-bold font-anek mb-3">
                    Trusted Partners
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Building partnerships by providing dependable products.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Section */}
          <div className="lg:col-span-1">
            <div className="bg-cyan-600 rounded-tr-2xl rounded-br-2xl p-8 h-full flex flex-col justify-center text-center text-white shadow-lg">
              <div className="mb-6">
                <p className="text-sky-100 text-lg font-medium uppercase tracking-wider mb-4">
                  LEARN MORE ABOUT SMITS ENGINEERING
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-tight mb-6">
                  We will help you to testing and analysis of materials crucial
                </h3>
                <p className="text-sky-100 text-base leading-relaxed mb-8">
                  Our mission is to ensure the integrity, durability, and safety
                  of infrastructure projects through meticulous examination
                </p>
              </div>
              {/* <div className="mt-auto">
                <button className="bg-sky-800 hover:bg-sky-900 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHear;
