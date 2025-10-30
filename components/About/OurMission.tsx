import React from "react";

const MissionVision = () => {
  return (
    <div className="w-full p-8 lg:p-20">
      <div className="relative w-full max-w-[1200px] h-[612px] mx-auto p-8 lg:p-20">
        {/* Background image - Left side */}
        <div className="absolute left-0 top-0 w-[709px] h-[612px] rounded-[24px] bg-[#333] overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/our-mission.png')",
            }}
          />
        </div>

        {/* Glass card - Right side with 20% overlap */}
        <div
          className="absolute right-0 top-[145px] w-[724px] h-[321px] rounded-[24px] p-10 flex flex-col gap-10 backdrop-blur-lg bg-[rgba(13,65,90,0.6)] border border-[rgba(33,183,249,0.5)]"
          style={{
            backdropFilter: "blur(24px)",
            left: "calc(709px - 20%)", // 20% overlap on the image
          }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-4xl font-bold tracking-[-0.4px]">
              Our Mission
              <br />& Vision
            </h2>
            <p className="text-[#e9f5fb] text-justify text-base font-medium">
              Our mission is to build innovative and sustainable structures that
              enhance communities and improve lives. We strive to deliver
              high-quality construction services that prioritize safety,
              efficiency, and environmental responsibility.
              <br />
              <br />
              Our vision is to be a leader in the construction industry,
              recognized for our commitment to excellence and integrity. We aim
              to redefine the construction experience by fostering
              collaboration, embracing new technologies, and creating spaces
              that inspire and endure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
