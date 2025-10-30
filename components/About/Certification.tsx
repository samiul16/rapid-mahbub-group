"use client";

import React from "react";
import Image from "next/image";

const Certification = () => {
  const certifications = [
    {
      id: 1,
      name: "BASIS",
      logo: "/certificate/1.png",
      alt: "BASIS Certification",
    },
    {
      id: 2,
      name: "Verification",
      logo: "/certificate/2.png",
      alt: "Verification Certification",
    },
    {
      id: 3,
      name: "e-Cab",
      logo: "/certificate/3.png",
      alt: "e-Cab Certification",
    },
    {
      id: 4,
      name: "BACCO",
      logo: "/certificate/4.png",
      alt: "BACCO Certification",
    },
    {
      id: 5,
      name: "BGCI",
      logo: "/certificate/5.png",
      alt: "BGCI Certification",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 lg:gap-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={cert.logo}
                alt={cert.alt}
                width={120}
                height={80}
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
