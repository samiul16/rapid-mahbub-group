"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeImageIndices, setActiveImageIndices] = useState<{
    [key: number]: number;
  }>({});

  const categories = [
    "All",
    "Civil",
    "Electrical",
    "Mechanical",
    "Construction",
    "Oil and Gas",
    "Transportation",
    "Manufacturing",
    "Hospitality",
  ];

  const projects = [
    {
      title: "Pumping Station",
      projectName: "Pumping Station",
      projectType: "Water Infrastructure",
      work: "Project Awarding Authority: DEWA",
      projectValue: "45,500,000.00",
      currency: "SAR",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/1.jpg", "/projects/2.jpg", "/projects/3.jpg"],
    },
    {
      title: "Falcon City",
      projectName: "Falcon City",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "SAR",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/2.jpg", "/projects/1.jpg", "/projects/4.jpg"],
    },
    {
      title: "Al Saaf Residential",
      projectName: "Al Saaf Residential",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "SAR",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/3.jpg", "/projects/5.jpg", "/projects/6.jpg"],
    },
    {
      title: "Baniyas North Phase",
      projectName: "Baniyas North Phase",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "AED",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/4.jpg", "/projects/7.jpg", "/projects/8.jpg"],
    },
    {
      title: "Al Maktoum Airport",
      projectName: "Al Maktoum Airport",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "SAR",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/5.jpg", "/projects/1.jpg", "/projects/2.jpg"],
    },
    {
      title: "Al Jada Development",
      projectName: "Al Jada Development",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "SAR",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/6.jpg", "/projects/3.jpg", "/projects/4.jpg"],
    },
    {
      title: "Emaar South - Parkside",
      projectName: "Emaar South - Parkside",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "AED",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/7.jpg", "/projects/5.jpg", "/projects/6.jpg"],
    },
    {
      title: "Dubai Investment Park",
      projectName: "Dubai Investment Park",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "AED",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/8.jpg", "/projects/1.jpg", "/projects/3.jpg"],
    },
    {
      title: "Sharjah Sustainable City",
      projectName: "Sharjah Sustainable City",
      projectType: "Boundary Wall Construction",
      work: "Project Awarding Authority: SEPCOII",
      projectValue: "57,631,881.00",
      currency: "AED",
      location: "Makkah, Saudi Arabia",
      images: ["/projects/8.jpg", "/projects/2.jpg", "/projects/5.jpg"],
    },
  ];

  const handleDotClick = (projectIndex: number, imageIndex: number) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

  const getCurrentImageIndex = (projectIndex: number) => {
    return activeImageIndices[projectIndex] || 0;
  };

  // Animation Variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header Section */}
        <motion.div
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <div className="justify-center">
            <span className="text-sky-500/80 text-4xl font-normal  leading-[60px] tracking-wide">
              |
            </span>
            <span className="text-sky-500/80 text-4xl font-bold  leading-[60px] tracking-wide">
              Recent Projects
            </span>
          </div>
          <p className="text-gray-600 text-base md:text-lg max-w-7xl leading-relaxed">
            Explore the innovative projects that showcase our steadfast
            commitment to excellence and the creativity we passionately bring to
            life. Each endeavor reflects our dedication to pushing boundaries
            and achieving remarkable results
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-12 overflow-x-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="flex gap-4 md:gap-6 pb-2 min-w-max md:min-w-0">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                variants={categoryVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm md:text-base font-medium pb-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? "text-sky-600 border-sky-600 font-semibold"
                    : "text-sky-300 border-transparent hover:text-sky-700"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
          {/* <div className="border-b border-gray-300 -mt-0.5"></div> */}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {projects.map((project, projectIndex) => {
            const currentImageIndex = getCurrentImageIndex(projectIndex);
            const locationParts = project.location.split(", ");
            return (
              <motion.div
                key={projectIndex}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.12)] outline outline-2 outline-offset-[-2px] outline-gray-200 px-7 py-6 flex flex-col gap-4 cursor-pointer"
              >
                {/* Image Container with Browser-like Header */}
                <div className="flex flex-col">
                  {/* Browser Header with Title and Dots */}
                  <div className="h-9 pl-2 pr-1 bg-white rounded-tl-[10px] rounded-tr-[10px] shadow-[0px_-1px_6px_0px_rgba(0,0,0,0.10)] flex items-center">
                    <div className="flex-1 h-7 text-sky-500/80 text-xl font-bold  tracking-wide">
                      {project.title}
                    </div>
                    <div className="flex items-center gap-0">
                      {project.images.map((_, imageIndex) => (
                        <motion.button
                          key={imageIndex}
                          onClick={() =>
                            handleDotClick(projectIndex, imageIndex)
                          }
                          whileHover={{ scale: 1.3 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-4 h-2 pr-2.5 flex flex-col justify-start items-start cursor-pointer"
                          aria-label={`View image ${imageIndex + 1}`}
                        >
                          <div
                            className={`w-2 h-2 rounded transition-all ${
                              currentImageIndex === imageIndex
                                ? "bg-sky-500"
                                : "bg-black/40 hover:bg-black/60"
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                        className="w-full h-full"
                      >
                        <Image
                          width={700}
                          height={700}
                          src={project.images[currentImageIndex]}
                          alt={`${project.title} - Image ${
                            currentImageIndex + 1
                          }`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Project Details */}
                <div className="text-left ">
                  <span className="text-slate-900 text-sm font-semibold">
                    Project Name:
                  </span>
                  <span className="text-black text-sm font-normal"> </span>
                  <span className="text-black text-sm font-normal">
                    {project.projectName}
                    <br />
                  </span>
                  <span className="text-slate-900 text-sm font-semibold">
                    Project Type:{" "}
                  </span>
                  <span className="text-black text-sm font-normal">
                    {project.projectType}
                    <br />
                  </span>
                  <span className="text-slate-900 text-sm font-semibold">
                    Work:
                  </span>
                  <span className="text-black text-sm font-normal"> </span>
                  <span className="text-black text-sm font-normal">
                    {project.work}
                    <br />
                  </span>
                  <span className="text-slate-900 text-sm font-semibold">
                    Project Value:
                  </span>
                  <span className="text-black text-sm font-normal"> </span>
                  <span className="text-black text-sm font-normal">
                    {project.projectValue} {project.currency}
                    <br />
                  </span>
                  <span className="text-slate-900 text-sm font-semibold">
                    Project Location:
                  </span>
                  <span className="text-black text-sm font-normal">
                    {" "}
                    {locationParts[0]},{" "}
                  </span>
                  <span className="text-black text-sm font-normal">
                    {locationParts[1]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* See More Button */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={buttonVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 text-sky-600 border-2 border-sky-600 rounded-full font-medium hover:bg-blue-50 transition-colors cursor-pointer"
          >
            See more
            <motion.svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
