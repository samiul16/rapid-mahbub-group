"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const DownloadOurApp = () => {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-[1800px] mx-4 sm:mx-auto ">
        {/* Main Container with Gradient Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-sky-100/25 to-sky-600 rounded-[40px] overflow-visible shadow"
        >
          {/* Background Pattern/Decoration */}
          <div className="absolute inset-0 opacity-10 overflow-hidden rounded-[40px]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-600 rounded-full blur-3xl" />
          </div>

          {/* Content Container */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-16 items-center p-6 lg:px-8 lg:py-6">
            {/* Left Side - Images (5 columns) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center lg:justify-start gap-1 sm:gap-2 h-[320px] sm:h-[380px] lg:h-[450px] lg:pl-20"
            >
              {/* Straight Phone - Left (NO ROTATION) */}
              <div className="relative z-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-28 h-56 xs:w-32 xs:h-64 sm:w-40 sm:h-80 md:w-44 md:h-[350px] lg:h-[400px] lg:w-[220px] relative rounded-2xl sm:rounded-3xl shadow-[0px_8px_40px_0px_rgba(0,0,0,0.5)] outline-2 outline-sky-500 overflow-hidden"
                >
                  <Image
                    src="/download-our-app/1.png"
                    alt="App Preview 2"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                    sizes="(max-width: 480px) 128px, (max-width: 640px) 144px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 280px"
                  />
                </motion.div>
              </div>

              {/* Rotated Phone - Right (WITH ROTATION) */}
              <div className="relative z-10">
                <motion.div
                  initial={{ rotate: 0, opacity: 0 }}
                  whileInView={{ rotate: 15, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-28 h-56 xs:w-32 xs:h-64 sm:w-40 sm:h-80 md:w-44 md:h-[350px] lg:w-[220px] lg:h-[380px] relative rounded-2xl sm:rounded-3xl shadow-[0px_8px_40px_0px_rgba(0,0,0,0.5)] outline-2 outline-sky-500 overflow-hidden mt-6 sm:mt-8 lg:mt-12"
                  style={{ transformOrigin: "center center" }}
                >
                  <Image
                    src="/download-our-app/download-our-app-3.png"
                    alt="App Preview 1"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                    sizes="(max-width: 480px) 128px, (max-width: 640px) 144px, (max-width: 768px) 192px, (max-width: 1024px) 208px, 280px"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Text & Buttons (7 columns) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-7 flex flex-col justify-center items-start gap-6 lg:gap-8 text-center lg:text-left lg:pl-8 xl:pl-40"
            >
              {/* Text Content */}
              <div className="space-y-4 w-full">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-50 leading-tight">
                  Download our app
                </h2>
                <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-md">
                  Explore our wide range of car rental service even in your
                  smartphone easily
                </p>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:gap-6 w-full lg:w-auto">
                {/* App Store Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-[50px] shadow-[0px_6px_8px_0px_rgba(0,0,0,0.20)] outline outline-1 outline-offset-[-1px] outline-white/20 flex items-center justify-center gap-3 transition-colors cursor-pointer"
                >
                  <Image
                    src="/apple.svg"
                    className="w-8 h-8 text-rose-100"
                    alt="App Store"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-rose-100 text-xs font-normal leading-3">
                      Download On the
                    </span>
                    <span className="text-rose-100 text-base font-semibold leading-none">
                      App Store
                    </span>
                  </div>
                </motion.button>

                {/* Google Play Button */}
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-[50px] shadow-[0px_6px_8px_0px_rgba(0,0,0,0.20)] outline outline-1 outline-offset-[-1px] outline-white/20 flex items-center justify-center gap-3 transition-colors cursor-pointer"
                >
                  <Image
                    src="/play-store.svg"
                    className="w-8 h-8 text-rose-100"
                    alt="App Store"
                    width={32}
                    height={32}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-rose-100 text-xs font-normal uppercase leading-3">
                      Get it On
                    </span>
                    <span className="text-rose-100 text-base font-semibold leading-none">
                      Google Play
                    </span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadOurApp;
