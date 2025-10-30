"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Award, Wrench, Shield, Handshake } from "lucide-react";
import Image from "next/image";

interface FeatureCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const ContactHeader = () => {
  const features: FeatureCard[] = [
    {
      id: 1,
      icon: "/quote/2.svg",
      title: "Quality Assurance",
      description: "Committed to delivering the highest standards.",
    },
    {
      id: 2,
      icon: "/quote/1.svg",
      title: "Metal Expertise",
      description: "Decades of experience in crafting industry.",
    },
    {
      id: 3,
      icon: "/quote/3.svg",
      title: "Steel Strength",
      description: "Delivering high-performance steel products.",
    },
    {
      id: 4,
      icon: "/quote/4.svg",
      title: "Trusted Partners",
      description: "Building partnerships by providing dependable products.",
    },
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6 max-w-[989px] mx-auto mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Title */}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-sky-500 text-center leading-tight sm:leading-[48px]"
            variants={titleVariants}
          >
            We&apos;d love to hear from you.
          </motion.h2>

          {/* Subtitle */}
          <motion.div
            className="flex flex-col items-center w-full"
            variants={subtitleVariants}
          >
            <p className="text-base sm:text-lg md:text-xl text-cyan-900 text-center leading-relaxed">
              We are confident in the products which we supply and know we can
              rely on their quality and performance.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1800px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature) => {
            return (
              <motion.div
                key={feature.id}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="h-60 text-center bg-white rounded-[20px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.16)] p-6 flex flex-col gap-4 transition-shadow duration-300 group-hover:shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)]">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <motion.div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300"
                      whileHover={{ rotate: 5, scale: 1.05 }}
                    >
                      <Image
                        width={24}
                        height={24}
                        src={feature.icon}
                        alt={feature.title}
                        className="w-12 h-12 text-white"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    <h3 className="text-2xl font-bold text-sky-500 leading-loose">
                      {feature.title}
                    </h3>
                    <p className="text-base text-cyan-900/80 leading-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactHeader;
