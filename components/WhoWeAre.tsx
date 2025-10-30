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
        "To deliver exceptional dining experiences through quality food, warm hospitality, and authentic flavors that bring people together and create lasting memories.",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To become a recognized name in the culinary world, expanding our reach while maintaining our commitment to quality, authenticity, and customer satisfaction.",
    },
    {
      id: "values",
      title: "Our Values",
      content:
        "Quality, authenticity, hospitality, innovation, and community. We believe in serving food that not only tastes great but also brings people together.",
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
                Excellency was born from a passion for authentic flavor, warm
                hospitality, and an unwavering commitment to quality.
                Established in 2014, we started as a small dining spot with a
                big dream — to bring people together over food that feels like
                home. Our founders, inspired by culinary traditions from around
                the world, laid the foundation for a restaurant that values
                heart, heritage, and honest taste.Over the years, our name has
                become a symbol of consistency, taste, and trust. What began
                with a few tables and a handful of signature dishes has now
                grown into a destination for food lovers seeking a memorable
                experience.
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
