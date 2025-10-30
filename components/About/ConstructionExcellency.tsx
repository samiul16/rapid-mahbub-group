import React from "react";
import { Download } from "lucide-react";
import Image from "next/image";

const ConstructionExcellenceSection = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-32 xl:px-[120px]">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-[71px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-7">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.4px]">
            Building a Brighter Future: Our Commitment to Construction
            Excellence
          </h2>
          <p className="text-lg md:text-2xl text-[#555555] text-justify">
            We aim to be the world&apos;s most trusted ERP solutions provider,
            raising the bar for technology and service excellence. Our goal is
            to revolutionize business operations, helping them achieve
            scalability, adaptability, and enduring success.
          </p>

          <button className="mt-8 bg-[#209bd6] text-[#e9f7fc] rounded-full py-3 px-10 flex items-center gap-2.5 w-fit hover:bg-[#1a7ba8] transition-colors">
            <span className="font-bold text-xl">Download Company Profile</span>
            <Download className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-5">
              {/* Expert Team Card */}
              <div className="relative w-full h-[250px] rounded-[20px] border border-[#6acffc]/50 overflow-hidden">
                <Image
                  src="/images/construction-team.png"
                  alt="Expert construction team"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-3">
                    <h3 className="text-xl font-bold text-[#209bd6]">
                      Expert Team
                    </h3>
                    <p className="text-base font-bold text-[#e9f7fc]">
                      100% Expert Team
                    </p>
                  </div>
                </div>
              </div>

              {/* Construction Site Card */}
              <div className="relative w-full h-[260px] rounded-[20px] border border-[#6acffc]/50 overflow-hidden">
                <Image
                  src="/images/construction-site.png"
                  alt="Construction site"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Construction Building Card */}
              <div className="relative w-full h-[280px] rounded-[20px] border border-[#6acffc]/50 overflow-hidden">
                <Image
                  src="/images/construction-building.png"
                  alt="Construction building"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>

              {/* Certified Company Card */}
              <div className="relative w-full h-[250px] rounded-[20px] border border-[#6acffc]/50 overflow-hidden">
                <Image
                  src="/images/construction-site-2.png"
                  alt="Construction site certification"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="flex flex-col items-center gap-3">
                    <h3 className="text-xl font-bold text-[#209bd6]">
                      Certified Company
                    </h3>
                    <p className="text-base font-bold text-[#e9f7fc]">
                      Best Construction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionExcellenceSection;
