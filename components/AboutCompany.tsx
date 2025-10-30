"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CompanySection {
  id: number;
  title: string;
  description1: string;
  description2: string;
  description3: string;
  image: string;
  imageAlt: string;
  link?: string;
}

const CompanySections = () => {
  const companies: CompanySection[] = [
    {
      id: 1,
      title: "Mahbub Group of Companies",
      description1:
        "We are a dynamic and diversified organization operating across restaurants, manpower supply, garment e-commerce, and general trading. At Mahabub Group, our mission is to deliver exceptional products and services that cater to the evolving needs of our clients and communities. We take pride in blending innovation, quality, and reliability to create value in everything we do.",
      description2:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      description3:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      image: "/mahbub-about-1.jpg",
      imageAlt: "Mahbub Group of Companies",
    },
    {
      id: 2,
      title: "Alburaq Garments LLC",
      description1:
        "We are a dynamic and diversified organization operating across restaurants, manpower supply, garment e-commerce, and general trading. At Mahabub Group, our mission is to deliver exceptional products and services that cater to the evolving needs of our clients and communities. We take pride in blending innovation, quality, and reliability to create value in everything we do.",
      description2:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      description3:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      image: "/mahbub-about-2.jpg",
      imageAlt: "Alburaq Garments LLC",
    },
    {
      id: 3,
      title: "Excellency General Trading LLC",
      description1:
        "We are a dynamic and diversified organization operating across restaurants, manpower supply, garment e-commerce, and general trading. At Mahabub Group, our mission is to deliver exceptional products and services that cater to the evolving needs of our clients and communities. We take pride in blending innovation, quality, and reliability to create value in everything we do.",
      description2:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      description3:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      image: "/mahbub-about-3.jpg",
      imageAlt: "Excellency General Trading LLC",
    },
    {
      id: 4,
      title: "Excellency Restaurants",
      description1:
        "We are a dynamic and diversified organization operating across restaurants, manpower supply, garment e-commerce, and general trading. At Mahabub Group, our mission is to deliver exceptional products and services that cater to the evolving needs of our clients and communities. We take pride in blending innovation, quality, and reliability to create value in everything we do.",
      description2:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      description3:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      image: "/mahbub-about-4.png",
      imageAlt: "Excellency Restaurants",
    },
    {
      id: 5,
      title: "RM Orient Overseas Ltd",
      description1:
        "We are a dynamic and diversified organization operating across restaurants, manpower supply, garment e-commerce, and general trading. At Mahabub Group, our mission is to deliver exceptional products and services that cater to the evolving needs of our clients and communities. We take pride in blending innovation, quality, and reliability to create value in everything we do.",
      description2:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      description3:
        "From serving delicious culinary experiences to providing skilled workforce solutions, from offering stylish garments through our online store.",
      image: "/mahbub-about-5.jpg",
      imageAlt: "RM Orient Overseas Ltd",
    },
  ];

  return (
    <div className="w-full bg-white">
      {companies.map((company, index) => (
        <div
          key={company.id}
          className={`py-12 md:py-16 lg:py-20 ${
            index !== companies.length - 1 ? "border-b border-gray-100" : ""
          }`}
        >
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-24">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
              {/* Left Side - Image */}
              <motion.div
                className="w-full lg:w-[737px] h-[300px] sm:h-[400px] lg:h-[479px] relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-full h-full relative rounded-[20px] overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={company.image}
                    alt={company.imageAlt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                className="w-full lg:w-[837px] flex flex-col justify-start items-start gap-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Title */}
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-sky-500 tracking-wide"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {company.title}
                </motion.h2>

                {/* Content Paragraphs */}
                <div className="flex flex-col gap-4">
                  <motion.p
                    className="text-justify text-black text-lg sm:text-xl leading-7 sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {company.description1}
                  </motion.p>

                  <motion.p
                    className="text-justify text-black text-lg sm:text-xl leading-7 sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {company.description2}
                  </motion.p>

                  <motion.p
                    className="text-justify text-black text-lg sm:text-xl leading-7 sm:leading-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {company.description3}
                  </motion.p>

                  {/* Explore More Button */}
                  <motion.button
                    className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 text-lg sm:text-xl font-semibold leading-8 group mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ x: 5 }}
                    onClick={() => {
                      if (company.link) {
                        window.location.href = company.link;
                      }
                    }}
                  >
                    <span>Explore more</span>
                    <motion.div
                      className="flex items-center justify-center"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanySections;
