"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Dubai Metro Extension Project",
      description:
        "Provided 150+ skilled workers for the metro extension project including welders, electricians, and civil engineers.",
      location: "Dubai, UAE",
      startDate: "Jan 2023",
      endDate: "Dec 2023",
      image: "/projects/project-1.jpg",
      status: "Completed",
    },
    {
      id: 2,
      title: "Abu Dhabi Oil Refinery Shutdown",
      description:
        "Supplied specialized shutdown manpower including maintenance technicians, supervisors, and safety officers.",
      location: "Abu Dhabi, UAE",
      startDate: "Mar 2023",
      endDate: "Jun 2023",
      image: "/projects/project-2.jpg",
      status: "Completed",
    },
    {
      id: 3,
      title: "Sharjah Industrial Complex",
      description:
        "Deployed project staffing solutions with over 200 workers for industrial construction and maintenance.",
      location: "Sharjah, UAE",
      startDate: "May 2023",
      endDate: "Ongoing",
      image: "/projects/project-3.jpg",
      status: "Ongoing",
    },
    {
      id: 4,
      title: "Dubai Airport Terminal Expansion",
      description:
        "Provided white-collar and technical staff for terminal expansion including project managers and engineers.",
      location: "Dubai, UAE",
      startDate: "Aug 2023",
      endDate: "Mar 2024",
      image: "/projects/project-4.jpg",
      status: "Ongoing",
    },
    {
      id: 5,
      title: "Al Ain Water Treatment Plant",
      description:
        "Supplied skilled technicians and operators for water treatment facility installation and commissioning.",
      location: "Al Ain, UAE",
      startDate: "Feb 2023",
      endDate: "Sep 2023",
      image: "/projects/project-1.jpg",
      status: "Completed",
    },
    {
      id: 6,
      title: "Ras Al Khaimah Manufacturing Unit",
      description:
        "Deployed complete workforce solution including production staff, supervisors, and quality control personnel.",
      location: "Ras Al Khaimah, UAE",
      startDate: "Apr 2023",
      endDate: "Ongoing",
      image: "/projects/project-2.jpg",
      status: "Ongoing",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-28">
        {/* Header Section */}
        <div
          className="flex flex-col items-center mb-10"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <div className="text-center text-sky-500 text-base font-bold font-anek uppercase leading-loose">
            Our Portfolio
          </div>
          <div className="pb-5">
            <h1 className="text-center text-stone-950 text-4xl font-bold font-anek leading-10">
              Completed Projects
            </h1>
          </div>
          <div className="w-11 h-1 bg-cyan-600 rounded-[30px]" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="group"
            >
              <div className="h-full bg-white rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.10)] transition-all duration-300 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 cursor-pointer overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold font-anek ${
                        project.status === "Completed"
                          ? "bg-green-500 text-white"
                          : "bg-yellow-500 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col h-[calc(100%-12rem)]">
                  <div className="flex-grow flex flex-col gap-3">
                    {/* Title */}
                    <div className="transform transition-transform duration-300 group-hover:scale-105">
                      <h3 className="text-cyan-900 text-xl font-bold font-anek leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-cyan-700">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm font-anek">
                        {project.location}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="flex-grow">
                      <p className="text-cyan-800 text-sm font-normal font-anek leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Dates */}
                    <div className="flex items-center gap-2 text-cyan-700 pt-2 border-t border-gray-200">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-anek">
                        {project.startDate} - {project.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-4 mt-auto">
                    <button className="w-full h-11 px-7 py-3.5 bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-cyan-900 transition-all duration-300 hover:bg-cyan-900 hover:text-white group-hover:scale-105 active:scale-95">
                      <span className="text-center text-sm font-semibold font-anek leading-tight">
                        View Details
                      </span>
                    </button>
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

export default ProjectsPage;
