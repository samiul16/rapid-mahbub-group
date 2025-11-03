"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  // Array of background images
  const backgroundImages = [
    "/hero/1.png",
    "/hero/2.png",
    "/hero/3.png",
    "/hero/4.png",
    "/hero/5.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const heroRef = React.useRef<HTMLDivElement>(null);
  const totalSlides = backgroundImages.length;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
      offset: 50,
    });
  }, []);

  // Scroll-based visibility detection
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    console.log("Auto-slide check:", { isPaused, isTransitioning, isVisible });

    if (isPaused || isTransitioning || !isVisible) return;

    const autoSlideInterval = setInterval(() => {
      console.log("Auto-slide triggered");
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, [isPaused, isTransitioning, isVisible, totalSlides]);

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setIsPaused(true);
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

    // Resume auto-slide after 5 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setIsPaused(true);
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

    // Resume auto-slide after 5 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsPaused(true);
    setIsTransitioning(true);
    setCurrentSlide(index);

    // Resume auto-slide after 5 seconds of manual interaction
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Reset transition state after animation completes
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[663px] md:h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Advanced Animations */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-[#333] bg-cover bg-center transition-all duration-[800ms] ease-in-out transform ${
            index === currentSlide
              ? "opacity-100 scale-100 rotate-0"
              : index === (currentSlide - 1 + totalSlides) % totalSlides
              ? "opacity-0 scale-110 -rotate-1 translate-x-[-100px]"
              : index === (currentSlide + 1) % totalSlides
              ? "opacity-0 scale-110 rotate-1 translate-x-[100px]"
              : "opacity-0 scale-95 translate-y-[50px]"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter:
              index === currentSlide
                ? "brightness(0.8) contrast(1.05)"
                : "brightness(0.8) blur(2px)",
            transition:
              "all 800ms cubic-bezier(0.4, 0, 0.2, 1), filter 600ms ease-out",
          }}
        >
          {/* Sky Gradient Overlay */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? "opacity-30" : "opacity-50"
            }`}
            style={{
              background:
                index === currentSlide
                  ? "linear-gradient(45deg, rgba(135, 206, 235, 0.2) 0%, rgba(30, 144, 255, 0.7) 100%)"
                  : "linear-gradient(45deg, rgba(135, 206, 235, 0.4) 0%, rgba(30, 144, 255, 0.5) 100%)",
            }}
          ></div>

          {/* Animated Particles Effect */}
          {index === currentSlide && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "3s",
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Slide Transition Overlay */}
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 pointer-events-none ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Hero Content with Animations */}
      <div className="relative z-10 flex flex-col h-full px-4 justify-center items-center">
        {/* Main Content - Perfectly Centered */}
        <div
          className="max-w-[941px] mx-auto flex flex-col items-center space-y-5 text-center"
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <h1
            className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight tracking-[-0.4px] transition-all duration-700 transform font-anek ${
              isTransitioning
                ? "opacity-70 translate-y-2 scale-98"
                : "opacity-100 translate-y-0 scale-100"
            }`}
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
              animation: isTransitioning ? "none" : "fadeInUp 1s ease-out",
            }}
          >
            Empowering Lifestyle, Work & Business — All Under One Roof
          </h1>

          <p
            className="text-white/80 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-anek"
            style={{
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            From quality garments and fine dining to workforce solutions and
            trading excellence — we deliver across industries
          </p>
        </div>

        {/* Enhanced Slider Dots */}
        <div
          className="absolute bottom-[200px] md:bottom-[60px] left-1/2 transform -translate-x-1/2 flex space-x-3 z-30"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`h-3 rounded-full transition-all duration-500 cursor-pointer transform hover:scale-125 active:scale-90 ${
                currentSlide === index
                  ? "bg-sky-500 w-8 shadow-lg"
                  : "bg-indigo-50 hover:bg-indigo-100 w-3"
              } ${isTransitioning ? "opacity-50 cursor-not-allowed" : ""}`}
              style={{
                boxShadow:
                  currentSlide === index
                    ? "0 2px 8px rgba(14, 165, 233, 0.4), 0 0 0 2px rgba(255,255,255,0.2)"
                    : "0 1px 3px rgba(0,0,0,0.2)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* <div
          className="absolute bottom-10 right-[120px] md:right-[200px]"
          data-aos="fade-left"
          data-aos-delay="800"
        >
          <button className="relative w-[50px] h-[50px] rounded-full flex items-center justify-center hover:bg-[#f8eaea]/20 transition-colors cursor-pointer">
            <Image
              src="/message.svg"
              alt="Message"
              width={26}
              height={26}
              className="w-14 h-14 p-2"
            />

            <div className="absolute inset-0 flex items-center justify-center gap-0.5 -translate-y-[1px]">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
