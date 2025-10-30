import React from "react";
import Image from "next/image";

const ValuableClients = () => {
  const clients = [
    {
      id: 1,
      name: "AMA",
      logo: "/valuable/1.png",
    },
    {
      id: 2,
      name: "Unipatch",
      logo: "/valuable/5.png",
    },
    {
      id: 3,
      name: "SIMEX",
      logo: "/valuable/2.png",
    },
    {
      id: 4,
      name: "Aramco",
      logo: "/valuable/4.png",
    },
    {
      id: 5,
      name: "Borsalis Build",
      logo: "/valuable/6.png",
    },
    {
      id: 6,
      name: "BCL",
      logo: "/valuable/3.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sky-500 text-4xl font-bold font-anek mb-4">
            Our Valuable Clients
          </h2>
          <p className="text-gray-600 text-lg font-normal font-anek">
            Unveil the Finest Selection of High-end Vehicles
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group flex items-center justify-center p-4 transition-all duration-300 hover:scale-110"
            >
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                width={120}
                height={80}
                className="w-auto h-12 md:h-15 object-contain filter transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuableClients;
