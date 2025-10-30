"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ClientSection = () => {
  const clients = [
    { id: 1, logo: "/clients/1.png", alt: "Client 1" },
    { id: 2, logo: "/clients/2.png", alt: "Client 2" },
    { id: 3, logo: "/clients/3.png", alt: "Client 3" },
    { id: 4, logo: "/clients/4.png", alt: "Client 4" },
    { id: 5, logo: "/clients/2.png", alt: "Client 5" },
    { id: 6, logo: "/clients/4.png", alt: "Client 6" },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients];

  const headerVariants: Variants = {
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
        delay: 0.2,
      },
    },
  };

  return (
    <div className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-10 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-500 text-center tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={headerVariants}
          >
            Our Divisions
          </motion.h2>
          {/* <motion.p
            className="text-base sm:text-lg lg:text-2xl text-black/70 text-center tracking-wide max-w-[589px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={subtitleVariants}
          >
            Unveil the Finest Selection of High-end Vehicles
          </motion.p> */}
        </div>

        {/* Continuous Sliding Logos */}
        <div className="relative py-5">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Sliding container */}
          <motion.div
            className="flex gap-12 sm:gap-16 md:gap-24 lg:gap-32"
            animate={{
              x: [0, -100 * clients.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-20 sm:w-24 md:w-28 lg:w-32 h-12 sm:h-14 md:h-16 lg:h-20 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
