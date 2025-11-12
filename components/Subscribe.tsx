"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="w-full bg-sky-700 my-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Left side - Icon and Text */}
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 text-center sm:text-left">
            {/* Mail Icon */}
            <div className="flex-shrink-0">
              <Image src={"/subs.svg"} alt="mail" width={200} height={200} />
            </div>

            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-2xl lg:text-4xl font-bold mb-2">
                Subscribe For More Info
              </h2>
              <p className="text-sm lg:text-lg opacity-90 max-w-md">
                Subscribe now to stay updated on our best offers and get our
                latest newsletter.
              </p>
            </div>
          </div>

          {/* Right side - Email Form */}
          <div className="w-full sm:w-auto flex-shrink-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:relative"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
                className="px-5 py-4 sm:pr-32 rounded-full bg-white text-gray-700 placeholder-gray-500 border-none outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-64 lg:w-96"
              />
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-4 rounded-full transition-colors duration-200 whitespace-nowrap sm:absolute sm:right-1 sm:top-1 sm:bottom-1 shadow cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
