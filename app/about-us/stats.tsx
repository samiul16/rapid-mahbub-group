"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      number: "32",
      suffix: "+",
      label: "Growing Years",
    },
    {
      id: 2,
      number: "2600",
      suffix: "",
      label: "Project Completed",
    },
    {
      id: 3,
      number: "350",
      suffix: "+",
      label: "Happy Customers",
    },
    {
      id: 4,
      number: "150k",
      suffix: "+",
      label: "Employees Deployed",
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const numberVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <motion.div
          className="relative bg-gradient-to-r from-cyan-400 via-sky-500 to-sky-600 rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.10)] p-8 sm:p-10 md:p-12 lg:p-16 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="flex flex-col items-center justify-center text-center"
                variants={itemVariants}
              >
                {/* Number with suffix */}
                <motion.div
                  className="flex items-start justify-center mb-3 sm:mb-4"
                  variants={numberVariants}
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none">
                    {stat.number}
                  </span>
                  {stat.suffix && (
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
                      {stat.suffix}
                    </span>
                  )}
                </motion.div>

                {/* Label */}
                <motion.p
                  className="text-sm sm:text-base md:text-lg font-medium text-white/90 leading-relaxed"
                  variants={itemVariants}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsSection;
