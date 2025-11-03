"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ChevronDown, Download, Award } from "lucide-react";

const WhoWeAre = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const sections = [
    {
      id: "mission",
      title: "Our Mission",
      content:
        "To be a globally recognized group of companies that exemplifies integrity, innovation, and excellence in every field we operate—contributing meaningfully to economic growth and community development.",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To deliver world-class products and services across industries, driven by innovation, quality, and a commitment to ethical business practices—creating lasting value for clients, partners, and communities.",
    },
    {
      id: "values",
      title: "Our Values",
      content:
        "Our core values define who we are and how we work. We operate with integrity by conducting business with honesty and transparency, while always pursuing excellence and the highest standards in every task we take on.. Above all, we value people — empowering individuals to grow, succeed, and make a meaningful impact.",
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

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

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-[690px] flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* About ARCO Section */}
            <motion.div className="flex flex-col gap-4" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-semibold text-sky-500 leading-10 tracking-widest">
                About Mahbub
              </h2>
              <p className="text-base text-sky-900 leading-relaxed text-justify">
                The Mahbub Group of Companies stands as a dynamic and
                diversified enterprise built on a foundation of trust,
                innovation, and a relentless pursuit of excellence. Guided by a
                shared vision of progress and integrity, the Group continues to
                expand its footprint across multiple industries—uniting
                expertise, innovation, and people to create sustainable value
                worldwide. Across its four key subsidiaries, Mahbub Group has
                established itself as a trusted leader delivering quality,
                reliability, and growth opportunities in every venture it
                undertakes.
              </p>
            </motion.div>

            {/* Expandable Sections */}
            <motion.div
              className="flex flex-col gap-3"
              variants={containerVariants}
            >
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  className="flex flex-col overflow-hidden"
                  variants={itemVariants}
                >
                  <motion.button
                    className="h-14 px-6 bg-sky-500 rounded-[50px] flex justify-between items-center cursor-pointer group hover:bg-sky-600 transition-colors mx-3"
                    onClick={() => toggleSection(section.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-lg sm:text-2xl font-medium text-white leading-normal tracking-wider">
                      {section.title}
                    </span>
                    <motion.div
                      animate={{
                        rotate: expandedSection === section.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.button>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === section.id ? "auto" : 0,
                      opacity: expandedSection === section.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 px-2">
                      <p className="text-base text-zinc-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="w-full lg:w-[683px] flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Top Large Image */}
            <motion.div
              className="relative w-full h-52 sm:h-64 rounded-3xl overflow-hidden"
              variants={imageVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <Image
                src="/about/about-arco-1.jpg"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Bottom Two Images */}
            <div className="flex gap-4">
              <motion.div
                className="relative flex-1 h-48 sm:h-56 rounded-3xl overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/about/about-arco-2.jpg"
                  alt="Food presentation"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="relative w-32 sm:w-44 h-48 sm:h-56 rounded-3xl overflow-hidden"
                variants={imageVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <Image
                  src="/about/about-arco-3.jpg"
                  alt="Dining experience"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
