"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="relative w-full h-[528px] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full"
        >
          <Image
            src="/projects/Projects.png"
            alt="About Us Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        {/* Dark overlay with fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 bg-black/30"
        />
      </div>

      {/* Logo watermark with subtle animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute w-[692px] h-[315px] left-[374px] top-[142px] pointer-events-none"
      >
        {/* Uncomment if you have a logo */}
        {/* <Image
          src="/logo.png"
          alt="Logo Watermark"
          fill
          className="object-contain"
        /> */}
      </motion.div>

      {/* Content container */}
      <div className="relative px-4 sm:px-8 md:px-[120px] py-[179px] h-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-3xl sm:text-4xl md:text-[48px] font-bold font-[Anek_Malayalam] text-white text-center tracking-[-0.4px]"
            >
              Projects
            </motion.h1>

            {/* Optional: Add a subtle underline animation */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
