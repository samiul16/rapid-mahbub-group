import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    { image: "/services/industry/1.png", title: "Oil & Gas manpower" },
    { image: "/services/industry/2.png", title: "Manpower supply" },
    { image: "/services/industry/3.png", title: "Facilities Management" },
    { image: "/services/industry/4.png", title: "Aviation" },
    { image: "/services/industry/5.png", title: "Paramedical" },
    { image: "/services/industry/6.png", title: "Banking" },
    { image: "/services/industry/7.png", title: "IT" },
    { image: "/services/industry/8.png", title: "Engineering" },
    { image: "/services/industry/9.png", title: "Civil Construction" },
    { image: "/services/industry/10.png", title: "Manufacturing" },
    { image: "/services/industry/11.png", title: "Supply Chain" },
    { image: "/services/industry/12.png", title: "Agricultural" },
    { image: "/services/industry/13.png", title: "Civil Construction" },
    { image: "/services/industry/14.png", title: "Hospitality" },
    { image: "/services/industry/15.png", title: "Warehousing" },
    { image: "/services/industry/16.png", title: "Renewable energy" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-sky-500 text-base font-bold font-anek uppercase mb-2">
            Our Services
          </div>
          <h2 className="text-stone-950 text-4xl font-bold font-anek mb-4">
            Our Industry Specialisations
          </h2>
          <div className="w-11 h-1 bg-cyan-600 rounded-[30px] mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-sky-500 text-lg font-semibold font-anek">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
