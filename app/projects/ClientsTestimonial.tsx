"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // ✅ Import Swiper type
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientTestimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null); // ✅ Properly typed ref
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al Maktoum",
      position: "Project Manager",
      company: "Dubai Construction LLC",
      image: "/clients/client1.jpg",
      rating: 5,
      testimonial:
        "Arco Engineering provided exceptional staffing solutions for our metro project. Their team was professional, skilled, and delivered beyond our expectations. Highly recommended!",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "HR Director",
      company: "Global Oil & Gas",
      image: "/clients/client2.jpg",
      rating: 5,
      testimonial:
        "We've been working with Arco for over 3 years now. Their payroll management and overseas recruitment services are top-notch. They truly understand our needs.",
    },
    {
      id: 3,
      name: "Mohammed Hassan",
      position: "Operations Head",
      company: "Industrial Solutions UAE",
      image: "/clients/client3.jpg",
      rating: 5,
      testimonial:
        "The shutdown manpower services provided by Arco were excellent. They supplied qualified technicians on time and helped us complete the project within the deadline.",
    },
    {
      id: 4,
      name: "Emily Roberts",
      position: "CEO",
      company: "Manufacturing Corp",
      image: "/clients/client4.jpg",
      rating: 5,
      testimonial:
        "Outstanding service! Arco's executive search team found us the perfect candidates for our senior positions. Their screening process is thorough and efficient.",
    },
    {
      id: 5,
      name: "Khalid Ibrahim",
      position: "Site Manager",
      company: "Construction Masters",
      image: "/clients/client5.jpg",
      rating: 5,
      testimonial:
        "Arco's project staffing solutions have been invaluable to our business. They provide skilled workers who are well-trained and ready to work from day one.",
    },
  ];

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    // ✅ Typed parameter
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="bg-gradient-to-br from-sky-50 to-white py-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-28">
        {/* Header Section */}
        <div
          className="flex flex-col items-center mb-12"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <div className="text-center text-sky-500 text-base font-bold font-anek uppercase leading-loose">
            Testimonials
          </div>
          <div className="pb-5">
            <h2 className="text-center text-stone-950 text-4xl font-bold font-anek leading-10">
              What Our Clients Say
            </h2>
          </div>
          <div className="w-11 h-1 bg-cyan-600 rounded-[30px]" />
        </div>

        {/* Testimonials Slider */}
        <div className="relative" data-aos="fade-up" data-aos-duration="800">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ Set ref on swiper init
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onSlideChange={handleSlideChange}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.10)] p-8 h-full transition-all duration-300 hover:shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] hover:-translate-y-2 group">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-sky-500 opacity-50" />
                  </div>

                  {/* Testimonial Text */}
                  <div className="mb-6">
                    <p className="text-cyan-800 text-base font-normal font-anek leading-relaxed italic">
                      {testimonial.testimonial}
                    </p>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-cyan-900 text-lg font-bold font-anek">
                        {testimonial.name}
                      </h4>
                      <p className="text-cyan-700 text-sm font-anek">
                        {testimonial.position}
                      </p>
                      <p className="text-cyan-600 text-xs font-anek">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={isBeginning}
              className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-sky-500 hover:text-white group ${
                isBeginning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:scale-110"
              }`}
            >
              <ChevronLeft className="w-6 h-6 text-cyan-900 group-hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              disabled={isEnd}
              className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer hover:bg-sky-500 hover:text-white group ${
                isEnd ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
              }`}
            >
              <ChevronRight className="w-6 h-6 text-cyan-900 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #0891b2;
          opacity: 0.3;
          width: 10px;
          height: 10px;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ClientTestimonials;
