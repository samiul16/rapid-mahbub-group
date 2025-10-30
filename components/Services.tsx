"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const ServicesSection = () => {
  // Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="relative bg-white py-20 px-4 md:px-8 overflow-hidden">
      {/* Large Watermark Text with Gradient Fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute inset-x-0 top-0 pointer-events-none select-none"
      ></motion.div>

      <div className="relative max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="flex flex-col items-center gap-6 mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-sky-500 text-center font-['Anek_Malayalam'] leading-[49.40px]">
            Our Services
          </h2>
          <p className="text-cyan-900 text-xl font-light text-center font-['Anek_Malayalam'] max-w-[1231px]">
            We deliver manpower supply services in the country, consistently
            with optimum performance, taking pride in the quality of our
            services ultimately resulting to customer satisfaction.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {/* First Row - 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 - On-Demand Labour Solutions */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-[20px] shadow cursor-pointer overflow-hidden max-w-[400px] mx-auto"
            >
              <div className="px-6 py-4 flex flex-col justify-center items-center h-full min-h-[320px] lg:min-h-[350px]">
                <div className="w-16 h-16 mb-6">
                  <Image
                    src="/services/1.svg"
                    alt="On-Demand Labour Solutions"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-cyan-800  text-2xl md:text-2xl font-semibold font-['Anek_Malayalam'] leading-9 mb-4">
                  On-Demand Labour
                </h3>
                <p className="text-cyan-800 text-base font-normal font-['Anek_Malayalam'] leading-relaxed mb-6">
                  Rapid, reliable manpower for construction, logistics, and
                  maintenance projects of any scale.
                </p>
                <button className="w-full px-5 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-2xl flex justify-between items-center transition-colors">
                  <span className="text-white text-base font-semibold font-['Anek_Malayalam'] leading-relaxed">
                    Explore More
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Card 2 - Executive Staffing Solutions */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-[20px] shadow cursor-pointer overflow-hidden max-w-[400px] mx-auto"
            >
              <div className="px-6 py-4 flex flex-col justify-center items-center h-full min-h-[320px] lg:min-h-[350px]">
                <div className="w-16 h-16 mb-6">
                  <Image
                    src="/services/2.svg"
                    alt="On-Demand Labour Solutions"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-cyan-800  text-2xl md:text-2xl font-semibold font-['Anek_Malayalam'] leading-9 mb-4">
                  Executive Staffing
                </h3>
                <p className="text-cyan-800 text-base font-normal font-['Anek_Malayalam'] leading-relaxed mb-6">
                  Proven leaders and professionals matched to drive results and
                  long-term growth.
                </p>
                <button className="w-full px-5 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-2xl flex justify-between items-center transition-colors">
                  <span className="text-white text-base font-semibold font-['Anek_Malayalam'] leading-relaxed">
                    Explore More
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Card 3 - PRO Services */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-[20px] shadow cursor-pointer overflow-hidden max-w-[400px] mx-auto"
            >
              <div className="px-6 py-4 flex flex-col justify-center items-center h-full min-h-[320px] lg:min-h-[350px]">
                <div className="w-16 h-16 mb-6">
                  <Image
                    src="/services/3.svg"
                    alt="On-Demand Labour Solutions"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-cyan-800  text-2xl md:text-2xl font-semibold font-['Anek_Malayalam'] leading-9 mb-4">
                  PRO Services
                </h3>
                <p className="text-cyan-800 text-base font-normal font-['Anek_Malayalam'] leading-relaxed mb-6">
                  Proven leaders and professionals matched to drive results and
                  long-term growth.
                </p>
                <button className="w-full px-5 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-2xl flex justify-between items-center transition-colors">
                  <span className="text-white text-base font-semibold font-['Anek_Malayalam'] leading-relaxed">
                    Explore More
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Card 4 - PEO Services */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-[20px] shadow cursor-pointer overflow-hidden max-w-[400px] mx-auto"
            >
              <div className="px-6 py-4 flex flex-col justify-center items-center h-full min-h-[320px] lg:min-h-[350px]">
                <div className="w-16 h-16 mb-6">
                  <Image
                    src="/services/4.svg"
                    alt="On-Demand Labour Solutions"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-cyan-800  text-2xl md:text-2xl font-semibold font-['Anek_Malayalam'] leading-9 mb-4">
                  PEO Services
                </h3>
                <p className="text-cyan-800 text-base font-normal font-['Anek_Malayalam'] leading-relaxed mb-6">
                  Complete HR, payroll, and compliance management so you can
                  focus on growth.
                </p>
                <button className="w-full px-5 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-2xl flex justify-between items-center transition-colors">
                  <span className="text-white text-base font-semibold font-['Anek_Malayalam'] leading-relaxed">
                    Explore More
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Second Row - 2 Cards + CTA Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Card 5 - EoR Services */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="lg:col-span-3 bg-white rounded-[20px] shadow cursor-pointer overflow-hidden max-w-[400px] mx-auto"
            >
              <div className="px-6 py-4 flex flex-col justify-center items-center h-full min-h-[320px] lg:min-h-[350px]">
                <div className="w-16 h-16 mb-6">
                  <Image
                    src="/services/5.svg"
                    alt="On-Demand Labour Solutions"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-cyan-800  text-2xl md:text-2xl font-semibold font-['Anek_Malayalam'] leading-9 mb-4">
                  EoR Services
                </h3>
                <p className="text-cyan-800 text-base font-normal font-['Anek_Malayalam'] leading-relaxed mb-6">
                  Hire and manage staff in the UAE quickly and legally without
                  setting up a local entity.
                </p>
                <button className="w-full px-5 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-2xl flex justify-between items-center transition-colors">
                  <span className="text-white text-base font-semibold font-['Anek_Malayalam'] leading-relaxed">
                    Explore More
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Card 6 - Recruitment Process Outsourcing */}
            <motion.div
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="lg:col-span-3 bg-white rounded-[20px] shadow cursor-pointer overflow-hidden max-w-[400px] mx-auto"
            >
              <div className="px-6 py-4 flex flex-col justify-center items-center h-full min-h-[320px] lg:min-h-[350px]">
                <div className="w-16 h-16 mb-6">
                  <Image
                    src="/services/6.svg"
                    alt="On-Demand Labour Solutions"
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-cyan-800  text-2xl md:text-2xl font-semibold font-['Anek_Malayalam'] leading-9 mb-4">
                  Recruitment Process
                </h3>
                <p className="text-cyan-800 text-base font-normal font-['Anek_Malayalam'] leading-relaxed mb-6">
                  End-to-end hiring support that speeds placements and elevates
                  talent quality.
                </p>
                <button className="w-full px-5 py-2.5 bg-sky-500 hover:bg-sky-600 rounded-2xl flex justify-between items-center transition-colors">
                  <span className="text-white text-base font-semibold font-['Anek_Malayalam'] leading-relaxed">
                    Explore More
                  </span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              variants={ctaVariants}
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-6 bg-gradient-to-l from-white/25 to-sky-500 rounded-[20px] shadow relative overflow-hidden min-h-[350px] flex items-center cursor-pointer border border-sky-100"
            >
              <div className="relative z-10 p-10 md:p-15 max-w-md">
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-[48px] font-['Anek_Malayalam']">
                  Solutions That Work, Just in Time
                </h2>
                <p className="text-white text-base font-normal font-['Anek_Malayalam'] leading-relaxed mb-8 max-w-sm">
                  Your business deserves a workforce that&apos;s fast, reliable,
                  and perfectly aligned with your goals. Ontime delivers
                  tailored solutions that help you plan, grow, and succeed every
                  time, on time.
                </p>
              </div>

              {/* Image on the right side */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[434px] h-[325px] hidden xl:block">
                {/* <Image
                  width={434}
                  height={325}
                  src="/serviceman.png"
                  alt="Business professionals"
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* CTA Button - Bottom Right */}
              <Link href="/quote" className="absolute bottom-10 right-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-[20px] outline-1 outline-zinc-200 hover:bg-gray-50 transition-colors shadow flex items-center overflow-hidden cursor-pointer"
                >
                  <div className="bg-sky-500 rounded-2xl p-4 m-4">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="px-6 text-sky-500  text-base font-['Anek_Malayalam'] capitalize font-semibold">
                    Get a Quote
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
