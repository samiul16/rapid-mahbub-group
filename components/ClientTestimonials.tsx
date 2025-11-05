"use client";
import React, { useState } from "react";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialData {
  id: number;
  name: string;
  title: string;
  image: string;
  testimonial: string;
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 ease-in-out hover:shadow hover:scale-105 hover:-translate-y-2 cursor-pointer group">
      <div className="relative h-[550px] bg-[#4BA3E8]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#333] z-0">
          <Image
            height={800}
            width={800}
            src={testimonial.image}
            alt="Testimonial background"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-l from-sky-600/10 to-sky-600/80" />

        {/* Content */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl mt-4 font-medium text-[#E9F5FB]">
              {testimonial.title}
            </h3>
            <Image
              height={800}
              width={800}
              src="/client/Icon.svg"
              alt="Quote icon"
              className="w-7 h-7 object-cover"
            />
          </div>

          <p className="text-white text-shadow-2xs text-sm md:text-base mb-8 mt-4">
            {testimonial.testimonial}
          </p>

          <div className="flex items-center mt-auto">
            <div className="w-5 h-[1px] bg-white"></div>
            <span className="ml-2 text-white opacity-90 text-sm">
              {testimonial.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Update cards per view based on screen size
  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(3); // Desktop: 3 cards
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const testimonialsData: TestimonialData[] = [
    {
      id: 1,
      name: "Omar Al-Farsi,",
      title: "",
      image: "/client/1.jpg",
      testimonial:
        "Excellency General Trading manages our global commodity supply chain with remarkable efficiency. Their proactive communication and flawless documentation make them a truly trusted, strategic logistics partner. On-time delivery with zero compromise on quality standards.",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      title: "",
      image: "/client/2.jpg",
      testimonial:
        "The Mahbub Group's construction team delivered our new corporate headquarters ahead of schedule, exceeding our quality expectations. Their project management was professional, highly transparent, and they maintained exceptional health and safety standards throughout the entire build.",
    },
    {
      id: 3,
      name: " David Miah",
      title: "",
      image: "/client/3.jpg",
      testimonial:
        "Switching to Mahbub Group’s feed products gave us the consistency and quality we needed. We've seen measurable improvements in our livestock productivity, thanks to their valuable nutritional consultation and technical support. It's a truly supportive partnership.",
    },
    {
      id: 4,
      name: "David Brown",
      title: "",
      image: "/client/1.jpg",
      testimonial:
        "Exceptional service quality and an impressive fleet of vehicles. The booking process is straightforward, and the customer service team is always available to help. Will definitely use their services again.",
    },
    {
      id: 5,
      name: "Emma Davis",
      title: "",
      image: "/client/2.jpg",
      testimonial:
        "As a frequent business traveler, I need reliable transportation. This service has never let me down. Professional drivers, clean vehicles, and always on time. Perfect for corporate needs.",
    },
    {
      id: 6,
      name: "James Wilson",
      title: "",
      image: "/client/3.jpg",
      testimonial:
        "Great selection of luxury vehicles at competitive prices. The staff is knowledgeable and helpful in choosing the right car for your needs. The entire experience from booking to return is smooth and professional.",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonialsData.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonialsData.length - cardsPerView);
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  return (
    <div className="bg-white flex flex-col items-center w-full py-20 gap-16">
      <div className="flex flex-col items-center gap-4 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-sky-500 font-anek mb-4">
          Hear From Our Clients
        </h2>
        <p className="text-cyan-900 text-lg md:text-xl leading-relaxed">
          Our clients consistently express satisfaction with our services,
          highlighting our strong attention to detail and fast communication.
          Their feedback reflects how our solutions have improved their daily
          operations and overall performance.
        </p>
      </div>

      <div className="relative w-full max-w-[1740px] px-6 mx-auto rounded-xl -mt-6">
        <div className="overflow-hidden px-4 py-6">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              gap: cardsPerView === 1 ? "0px" : "24px",
            }}
          >
            {testimonialsData.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0"
                style={{
                  width:
                    cardsPerView === 1
                      ? "100%"
                      : cardsPerView === 2
                      ? "calc((100% - 24px) / 2)"
                      : "calc((100% - 48px) / 3)",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-[98%] flex justify-between pl-5 pr-8">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="w-[50px] h-[50px] rounded-full bg-sky-400/80 hover:bg-sky-500 flex items-center justify-center transform rotate-270 cursor-pointer transition-colors duration-300"
          >
            <div className="text-white">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.66699V17.0003M8 1.66699L1.33334 8.33366M8 1.66699L14.6667 8.33366"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="w-[50px] h-[50px] rounded-full bg-sky-400/80 hover:bg-sky-500 flex items-center justify-center transform -rotate-270 cursor-pointer transition-colors duration-300"
          >
            <div className="text-white">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.66699V17.0003M8 1.66699L1.33334 8.33366M8 1.66699L14.6667 8.33366"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({
            length: Math.max(1, 5),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out hover:scale-125 active:scale-90 ${
                currentIndex === index
                  ? "bg-sky-500 shadow-lg scale-110"
                  : isAnimating
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-sky-200 hover:bg-sky-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
