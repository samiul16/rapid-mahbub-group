import React from "react";
import {
  Plane,
  Store,
  Building2,
  Shield,
  Zap,
  Utensils,
  Heart,
  Truck,
  Fuel,
  Car,
  Headphones,
  Settings,
} from "lucide-react";

const WeServe = () => {
  const sectors = [
    {
      icon: <Plane size={32} />,
      title: "Aviation",
    },
    {
      icon: <Store size={32} />,
      title: "Retail",
    },
    {
      icon: <Building2 size={32} />,
      title: "Banking & Finance",
    },
    {
      icon: <Shield size={32} />,
      title: "Government",
    },
    {
      icon: <Zap size={32} />,
      title: "Energy",
    },
    {
      icon: <Utensils size={32} />,
      title: "Hospitality",
    },
    {
      icon: <Heart size={32} />,
      title: "Healthcare",
    },
    {
      icon: <Truck size={32} />,
      title: "Logistics",
    },
    {
      icon: <Fuel size={32} />,
      title: "Oil and Gas",
    },
    {
      icon: <Car size={32} />,
      title: "Automotive",
    },
    {
      icon: <Headphones size={32} />,
      title: "Customer Care",
    },
    {
      icon: <Settings size={32} />,
      title: "Manufacturing",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sky-500 text-4xl md:text-5xl font-bold font-anek mb-4">
            Industries We Serve
          </h2>
          <p className="text-cyan-900 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Specialized expertise across key sectors in the UAE and GCC markets
            with deep industry knowledge.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100/80 to-sky-200/80 rounded-2xl flex items-center justify-center text-cyan-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  {sector.icon}
                </div>
              </div>
              <h3 className="text-cyan-600 text-lg font-semibold font-anek">
                {sector.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeServe;
