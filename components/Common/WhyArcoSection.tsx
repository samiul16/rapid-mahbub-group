import React from "react";
import { Award, Shield, Users, Clock, Zap, Globe } from "lucide-react";

const WhyArcoSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="w-full">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-500 mb-8 font-['Anek_Malayalam']">
              Why Arco?
            </h2>
            <div className="w-full mx-auto">
              <p className="text-base md:text-lg text-cyan-900 leading-relaxed font-['Anek_Malayalam'] text-start">
                The UAE&apos;s most trusted staffing and manpower solutions
                partner, combining excellence and cost competency with fast
                delivery capabilities. Smooth provide tailored staffing and
                manpower solutions to leading brands and prominent businesses
                with specialisation in multiple segments. Our tailored solutions
                manage global and local recruitment, onboarding, deployment,
                housing and transportation throughout the employee life cycle.
                From site based through to office based staff, to C-level
                recruitment, we provide solutions for all our clients&apos;
                needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
            {/* Quality Services */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <Award className="w-12 h-12 text-sky-500" />
              </div>
              <h6 className="text-xl font-bold text-sky-500 mb-4 font-['Anek_Malayalam']">
                Quality Services
              </h6>
              <p className="text-cyan-900 font-['Anek_Malayalam']">
                No quota limitations.
              </p>
            </div>

            {/* Authorized Company */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <Shield className="w-12 h-12 text-sky-500" />
              </div>
              <h6 className="text-xl font-bold text-sky-500 mb-4 font-['Anek_Malayalam']">
                Authorized Company
              </h6>
              <p className="text-gray-600 font-['Anek_Malayalam']">
                Ministry of labour authorized company.
              </p>
            </div>

            {/* Trained Workers */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <Users className="w-12 h-12 text-sky-500" />
              </div>
              <h6 className="text-xl font-bold text-sky-500 mb-4 font-['Anek_Malayalam']">
                Trained Workers
              </h6>
              <p className="text-cyan-900 font-['Anek_Malayalam']">
                Dedicated delivery teams with local and global experience.
              </p>
            </div>

            {/* Time Availability */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <Clock className="w-12 h-12 text-sky-500" />
              </div>
              <h6 className="text-xl font-bold text-sky-500 mb-4 font-['Anek_Malayalam']">
                Time Availability
              </h6>
              <p className="text-cyan-900 font-['Anek_Malayalam']">
                Project-Managed transitions.
              </p>
            </div>

            {/* Quick Response */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <Zap className="w-12 h-12 text-sky-500" />
              </div>
              <h6 className="text-xl font-bold text-sky-500 mb-4 font-['Anek_Malayalam']">
                Quick Response
              </h6>
              <p className="text-cyan-900 font-['Anek_Malayalam']">
                Quicker delivery at lower costs.
              </p>
            </div>

            {/* Trusted Partner */}
            <div className="bg-white border border-gray-100 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-6">
                <Globe className="w-12 h-12 text-sky-500" />
              </div>
              <h6 className="text-xl font-bold text-sky-500 mb-4 font-['Anek_Malayalam']">
                Trusted partner
              </h6>
              <p className="text-cyan-900 font-['Anek_Malayalam']">
                Exclusive partnerships and access to global networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArcoSection;
