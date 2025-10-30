import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
          <div className="pr-0 md:pr-12">
            <div className="mb-10">
              <h6 className="text-[#209bd6] font-bold text-lg font-['Anek_Malayalam']">
                About Us
              </h6>
            </div>
            <div className="mb-10">
              <h3 className="text-black font-bold text-3xl leading-tight font-['Anek_Malayalam'] letter-spacing-[-0.4px]">
                Professional and Expert Manpower
                <br />
                Service
              </h3>
            </div>
            <div className="mt-2">
              <div className="text-[#171717] text-lg font-['Anek_Malayalam'] space-y-4">
                <p>
                  Arco Engineering and staffing solutions is a leading HR
                  company in UAE providing the best manpower solutions across
                  blue collar, white collar and grey collar, with 18 years of
                  experience as a trusted manpower solution company in the UAE,
                  we are your go-to partner for all your staffing needs.
                </p>
                <p>
                  Our extensive track record includes successfully completing
                  over 1000 projects, showcasing our commitment to excellence.
                  Our workforce of over 2000 skilled professionals covers a wide
                  range of roles, including white collar, blue collar, and grey
                  collar jobs. Led by a top-level management team with extensive
                  industry knowledge, we ensure that every aspect of your
                  workforce is managed efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="pr-0 md:pr-12">
            <div className="mb-20">
              <div className="text-[#171717] text-lg font-['Anek_Malayalam'] space-y-4">
                <p>
                  Our quality control team guarantees the highest standards,
                  while our experienced HR team ensures the right fit for your
                  organization. With over 10,000 staffing resources at our
                  disposal, we possess the strength and flexibility to handle
                  any demand. Moreover, our strong network of manpower and
                  recruitment partners in India, Pakistan, the Philippines, Sri
                  Lanka, Bangladesh, and Nepal enables us to tap into diverse
                  talent pools.
                </p>
              </div>
            </div>
            <div>
              <div className="text-[#171717] text-lg font-['Anek_Malayalam'] space-y-4">
                <p>
                  From our humble beginnings in 2005 as an MEP specialized
                  manpower company, we have expanded our expertise to serve all
                  sectors, ensuring that we deliver exceptional service and
                  solutions tailored to your unique requirements. Trust Smooth
                  Manpower Service Solutions for all your staffing needs and
                  experience the smoothest, most reliable manpower service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
