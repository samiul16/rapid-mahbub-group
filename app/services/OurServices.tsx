"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      title: "Civil Engineering",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Mechanical Engineering",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Electrical Engineering",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Constructions",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Oil & Gas",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Transportation",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Manufacturing",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Hospitality",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
    {
      title: "Executive Selection",
      description:
        "Open for welder tests and interviews for fabricators, painters, and riggers. Open for welder tests and interviews for fabricators, painters, and riggers. fabricators, painters, and riggers.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header Section */}
        <div
          className="flex flex-col items-center mb-10"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <div className="pb-5">
            <h2 className="text-center text-sky-500  text-4xl font-bold font-anek leading-10">
              Our Services
            </h2>
          </div>
          <div className="w-11 h-1 bg-cyan-600 rounded-[30px]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="group"
            >
              <div className="h-full 2xl:h-[300px] bg-white rounded-[15px] shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden border border-gray-200 pt-10">
                <div className="h-full p-6 lg:p-8 flex flex-col text-center">
                  {/* Title */}
                  <div className="mb-4">
                    <h3 className="text-sky-500 text-xl lg:text-2xl font-bold font-anek leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="flex-grow">
                    <p className="text-gray-600 text-sm lg:text-base font-normal font-anek leading-relaxed text-start">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
