"use client";

import {
  ArrowRight,
  Play,
  Settings,
  Sparkles,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ServiceType, services } from "@/lib/constants/services";
import { useRef, useState, useEffect } from "react";

import { SlidingDiv } from "@/components/custom/SlidingDiv";

const ServiceCard = ({
  name,
  src,
  index,
  isActive = false,
}: ServiceType & { index: number; isActive?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative w-[300px] md:w-[350px] h-[400px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 cursor-pointer transition-all duration-700 ease-out shadow-xl border border-white/20 ${
        isActive
          ? "hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:border-white/40"
          : "hover:-translate-y-2 hover:scale-102 hover:shadow-lg hover:border-white/30"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div
        className={`absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-blue-400 via-purple-400 to-blue-500 transition-all duration-700 -z-10 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="w-full h-full bg-gradient-to-br from-slate-900/95 to-blue-900/95 backdrop-blur-xl rounded-3xl"></div>
      </div>

      {/* Glow effect */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 transition-all duration-700 blur-xl ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      ></div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Enhanced Image container */}
        <div className="mb-6 flex-1 relative overflow-hidden rounded-2xl">
          <img
            src={src}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isActive ? "scale-110" : "group-hover:scale-110"
            }`}
            alt={name}
          />

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 ${
              isActive ? "opacity-80" : "opacity-60 group-hover:opacity-80"
            }`}
          ></div>

          {/* Floating particles on hover or active */}
          {(isHovered || isActive) && (
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/80 rounded-full animate-float-up"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Service name with gradient text */}
        <h3
          className={`font-bold text-xl md:text-2xl bg-gradient-to-r bg-clip-text text-transparent mb-4 transition-all duration-300 text-center ${
            isActive
              ? "from-blue-300 to-purple-300"
              : "from-white to-blue-200 group-hover:from-blue-300 group-hover:to-purple-300"
          }`}
        >
          {name}
        </h3>

        {/* Enhanced description */}
        <p
          className={`text-sm md:text-base transition-all duration-300 leading-relaxed text-center ${
            isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
          }`}
        >
          Professional {name.toLowerCase()} solutions tailored to your business
          needs
        </p>

        {/* Subtle accent line */}
        <div
          className={`mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-500 mt-4 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        ></div>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Limit to 5 services for better display
  const displayServices = services.slice(0, 5);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayServices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, displayServices.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayServices.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + displayServices.length) % displayServices.length
    );
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="services"
      className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24 px-4 sm:px-6 md:px-8 relative overflow-hidden"
    >
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header with enhanced animations */}
        <header className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              Services
            </span>
          </h2>

          <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            Cutting-edge solutions designed to elevate your business and drive
            exceptional results through innovative technology
          </p>

          <div className="flex justify-center items-center gap-8 mt-8 text-sm md:text-base">
            <div className="flex items-center gap-2 text-blue-300">
              <Settings className="w-5 h-5" />
              <span className="font-semibold">
                {displayServices.length}+ Services
              </span>
            </div>
            <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            <div className="flex items-center gap-2 text-purple-300">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Premium Quality</span>
            </div>
          </div>
        </header>

        {/* Innovative 3D Carousel */}
        <div className="relative mb-12">
          {/* Navigation buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>

          {/* 3D Carousel Container */}
          <div
            className="relative h-[500px] flex items-center justify-center perspective-1000"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {displayServices.map((service, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              const isActive = index === currentIndex;

              return (
                <div
                  key={service.name}
                  className={`absolute transition-all duration-700 ease-out cursor-pointer ${
                    isActive ? "z-10" : "z-5"
                  }`}
                  style={{
                    transform: `
                      translateX(${offset * 200}px) 
                      translateZ(${isActive ? 50 : -absOffset * 100}px) 
                      rotateY(${offset * 15}deg)
                      scale(${isActive ? 1 : 0.8 - absOffset * 0.1})
                    `,
                    opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                  }}
                  onClick={() => handleIndicatorClick(index)}
                >
                  <ServiceCard {...service} index={index} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="flex justify-center items-center gap-3 mb-12">
          {displayServices.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`relative h-3 rounded-full transition-all duration-500 overflow-hidden ${
                index === currentIndex
                  ? "w-12 bg-gradient-to-r from-blue-400 to-purple-400"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
              )}
            </button>
          ))}
        </div>

        {/* Infinite Marquee for Service Names */}
        <div className="relative overflow-hidden py-8 mb-12">
          <div className="marquee-wrapper">
            <div className="marquee-content">
              {[...displayServices, ...displayServices].map(
                (service, index) => (
                  <span
                    key={index}
                    className="inline-block mx-8 text-2xl md:text-3xl font-bold bg-gradient-to-r from-white/60 to-white/30 bg-clip-text text-transparent whitespace-nowrap"
                  >
                    {service.name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-neutral-300 text-lg md:text-xl font-medium mb-6">
            Ready to transform your ideas into reality?
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <Zap className="w-5 h-5" />
            {"Start Your Project"}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-30px);
            opacity: 0;
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-up {
          animation: float-up 2s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: flex;
          animation: marquee 20s linear infinite;
          width: fit-content;
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }

        /* Custom 3D transforms */
        .transform-3d {
          transform-style: preserve-3d;
        }

        /* Improved mobile responsiveness */
        @media (max-width: 768px) {
          .perspective-1000 {
            perspective: 500px;
          }

          .marquee-content {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};
