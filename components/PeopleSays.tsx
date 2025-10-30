"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Reusable Review Card Component
interface ReviewCardProps {
  name: string;
  avatar: string | null;
  timeAgo: string;
  rating: number;
  review: string;
  initials: string;
  avatarColor: string;
}

const ReviewCard = ({
  name,
  avatar,
  timeAgo,
  rating,
  review,
  initials,
  avatarColor,
}: ReviewCardProps) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 min-h-[280px] flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-semibold text-lg"
          style={{ backgroundColor: avatarColor || "#64748b" }}
        >
          {avatar ? (
            <Image
              src={avatar}
              width={56}
              height={56}
              alt={name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            initials
          )}
        </div>
        <div className="flex-1">
          <h4 className="text-white font-semibold text-lg">{name}</h4>
          <p className="text-slate-400 text-sm">{timeAgo}</p>
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="flex-shrink-0"
        >
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
      </div>

      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${
              index < rating ? "text-yellow-400" : "text-slate-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-slate-300 leading-relaxed flex-1">{review}</p>
    </div>
  );
};

// Main Reviews Section Component
const GoogleReviewsSection = () => {
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

  const reviews = [
    {
      name: "Taniya Mathew",
      avatar: null,
      initials: "TM",
      avatarColor: "#64748b",
      timeAgo: "a year ago",
      rating: 5,
      review:
        "Iam dealing with ADMS company, It's a very good company for Manpower Supply and the Management is flexible to give",
    },
    {
      name: "shubha kamath",
      avatar: null,
      initials: "SK",
      avatarColor: "#94a3b8",
      timeAgo: "a year ago",
      rating: 5,
      review:
        "A professional company with good team. The organisation's culture is very friendly and supportive.Great team work with excellent",
    },
    {
      name: "Zaaik Alee",
      avatar: null,
      initials: "Z",
      avatarColor: "#a855f7",
      timeAgo: "a year ago",
      rating: 4,
      review:
        "Nice office setup. Good team. A well known Manpower supply company in abu dhabi",
    },
    {
      name: "Sarah Johnson",
      avatar: null,
      initials: "SJ",
      avatarColor: "#3b82f6",
      timeAgo: "8 months ago",
      rating: 5,
      review:
        "Outstanding service and professional team. Highly recommend for manpower solutions in the UAE region.",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, reviews.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, reviews.length - cardsPerView);
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
    <div
      className="py-2 bg-slate-900 relative overflow-hidden"
      style={{
        backgroundImage: "url('/peoplessay.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-16 py-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-wider uppercase mb-3">
            GOOGLE REVIEWS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What People Says
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative w-full max-w-[1200px] mx-auto rounded-xl -mt-6">
          {/* Navigation Buttons - Positioned outside the carousel */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute -left-16 top-40 -translate-y-1/2 z-20 w-[50px] h-[50px] rounded-full bg-slate-800/90 hover:bg-slate-700/90 flex items-center justify-center cursor-pointer shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute -right-16 top-40 -translate-y-1/2 z-20 w-[50px] h-[50px] rounded-full bg-slate-800/90 hover:bg-slate-700/90 flex items-centx items-center justify-center cursor-pointer shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>

          <div className="overflow-hidden px-4 py-6">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / cardsPerView)
                }%)`,
                gap: cardsPerView === 1 ? "0px" : "24px",
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
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
                  <div className="h-[400px]">
                    <ReviewCard {...review} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-2 gap-3">
            {Array.from({
              length: Math.max(1, reviews.length - cardsPerView + 1),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out hover:scale-125 active:scale-90 ${
                  currentIndex === index
                    ? "bg-cyan-400 shadow-lg scale-110"
                    : isAnimating
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-slate-600 hover:bg-cyan-400/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsSection;
