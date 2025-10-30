import React from "react";
import { ArrowRight } from "lucide-react";

const Section = () => {
  return (
    <section className="bg-[#021928] relative overflow-hidden py-24 px-4 md:px-8 lg:px-32">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.08] z-0">
        <div className="w-full h-full bg-[#333] bg-opacity-20">
          <img
            src="/about/arco-deliver.png"
            alt="Arco quality service"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute top-24 right-0 w-[40%] h-[315px] opacity-20 z-0">
        <div className="w-full h-full bg-[#333]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Section header */}
          <div className="w-full text-center mb-5">
            <h6 className="text-[#209bd6] font-bold text-lg tracking-[-0.4px]">
              Our Quality
            </h6>
          </div>

          <div className="w-full text-center mb-5">
            <h2 className="text-white font-['Anek_Malayalam'] text-3xl md:text-4xl tracking-[-0.4px]">
              What Arco Deliver
            </h2>
          </div>

          {/* Main content */}
          <div className="w-full mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
              {/* First image */}
              <div className="lg:col-span-3 md:col-span-6">
                <div className="w-full aspect-square bg-[#333] overflow-hidden">
                  <img
                    src="/about/about-us-12.jpg"
                    alt="Arco quality service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Second image */}
              <div className="lg:col-span-3 md:col-span-6">
                <div className="w-full aspect-square bg-[#333] overflow-hidden">
                  <img
                    src="/about/about-us-11.jpg"
                    alt="Arco quality service"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text content */}
              <div className="lg:col-span-6 md:col-span-12 mt-6 lg:mt-0">
                <div className="lg:pl-12 md:pl-6">
                  <div className="mb-2.5">
                    <h6 className="text-[#209bd6] font-bold font-['Anek_Malayalam'] text-lg tracking-[-0.4px]">
                      1993 - 2023
                    </h6>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-white font-bold font-['Anek_Malayalam'] text-2xl tracking-[-0.4px] mb-5">
                      Our Solutions are tailormade.
                    </h4>

                    <div className="text-white text-base md:text-lg space-y-0.5 font-['Anek_Malayalam']">
                      <p>
                        We support from head hunting and direct recruitment,
                        payroll management
                      </p>
                      <p>
                        and entire outsourcing of workforce. From initial
                        engagement through to
                      </p>
                      <p>
                        deployment, Arco Engineering and Staffing Solutions
                        experienced team will identify the key milestones and
                      </p>
                      <p>
                        agree schedules of delivery to ensure your staff are
                        deployed in line with
                      </p>
                      <p>
                        your requirements. Smooth will manage the full
                        recruitment, deployment,
                      </p>
                      <p>
                        HR and payroll process throughout the duration of the
                        project alongside a
                      </p>
                      <p>dedicated contract management team.</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center bg-[#209bd6] text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
