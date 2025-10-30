"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const StatsSection: React.FC = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Target values
  const targetYears = 11;
  const targetProjects = 2600;
  const targetClients = 1500;
  const targetEmployees = 250;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setYears(Math.round(easedProgress * targetYears));
      setProjects(Math.round(easedProgress * targetProjects));
      setClients(Math.round(easedProgress * targetClients));
      setEmployees(Math.round(easedProgress * targetEmployees));

      if (frame === totalFrames) {
        clearInterval(counter);
        // Ensure final values are exact
        setYears(targetYears);
        setProjects(targetProjects);
        setClients(targetClients);
        setEmployees(targetEmployees);
      }
    }, frameRate);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "k";
    }
    return num.toString();
  };

  return (
    <div className="bg-white py-12 md:py-10 px-4" ref={sectionRef}>
      <div
        className="w-full max-w-[1800px] mx-auto rounded-[30px] shadow-lg bg-gradient-to-r from-[#3B9AE1] via-[#4BA3E8] to-[#5BADEE] flex flex-col md:flex-row items-center justify-between py-8 md:py-20 px-6 md:px-12 gap-8 md:gap-4"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        {/* Growing Years */}
        <div
          className="text-center flex-1 transform transition-all duration-500 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tabular-nums mb-2">
            {years}
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium text-white/90">
            Growing Years
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-16 bg-white/30" />

        {/* Project Completed */}
        <div
          className="text-center flex-1 transform transition-all duration-500 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tabular-nums mb-2">
            {projects.toLocaleString()}
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium text-white/90">
            Project Completed
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-16 bg-white/30" />

        {/* Happy Clients */}
        <div
          className="text-center flex-1 transform transition-all duration-500 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tabular-nums mb-2">
            {clients.toLocaleString()}
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium text-white/90">
            Happy Clients
          </p>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px h-16 bg-white/30" />

        {/* Employees Deployed */}
        <div
          className="text-center flex-1 transform transition-all duration-500 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tabular-nums mb-2">
            {formatNumber(employees)}k
          </h2>
          <p className="text-sm md:text-base lg:text-lg font-medium text-white/90">
            Employees Deployed
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
