"use client";

import React from "react";
import Image from "next/image";

const Division = () => {
  const industries = [
    {
      id: 1,
      name: "Excellence Catering",
      backgroundImage: "/division/1.png",
      logo: "/division/11.png",
      description: "Premium catering services",
    },
    {
      id: 2,
      name: "Al Buraq Garments",
      backgroundImage: "/division/2.png",
      logo: "/division/22.png",
      description: "Quality garments and embroidery",
    },
    {
      id: 3,
      name: "General Trading",
      backgroundImage: "/division/3.png",
      logo: "/division/33.png",
      description: "Import and export solutions",
    },
    {
      id: 4,
      name: "Excellence Restaurant",
      backgroundImage: "/division/4.png",
      logo: "/division/44.png",
      description: "Fine dining experience",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-sky-500 mb-4">
            Our Industries
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Embracing change and advancing through creativity.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="space-y-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${industry.backgroundImage}')`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>

              {/* Logo Overlay - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="backdrop-blur-sm rounded-2xl p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={industry.logo}
                    alt={industry.name}
                    width={200}
                    height={100}
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Optional: Industry Name at Bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {industry.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Division;
