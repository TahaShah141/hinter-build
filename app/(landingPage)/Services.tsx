"use client";

import { ArrowRight, Play, Settings, Sparkles } from "lucide-react";
import { ServiceType, services } from "@/lib/constants/services";

import Marquee from "react-fast-marquee";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { useState } from "react";

const ServiceImage = ({
  name,
  src,
  index,
}: ServiceType & { index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm drop-shadow-2xl p-1 rounded-2xl transition-all duration-500 hover:scale-105 hover:drop-shadow-3xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-rotate">
        <div className="w-full h-full bg-gradient-to-br from-white/95 to-white/90 rounded-2xl"></div>
      </div>

      <div className="relative h-96 w-80 rounded-xl overflow-hidden">
        {/* Image with overlay effects */}
        <div className="relative h-full w-full">
          <img
            src={src}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
            alt={name}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-500"></div>

          {/* Spotlight effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </div>

        {/* Enhanced content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Service name with enhanced styling */}
          <div className="transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
              {name}
            </h3>

            {/* Subtitle/description that appears on hover */}
            <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 leading-relaxed">
              Professional {name.toLowerCase()} solutions tailored to your needs
            </p>
          </div>

          {/* Action button */}
          <div className="flex items-center justify-between mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Play className="w-4 h-4" />
              <span>View Details</span>
            </div>
            <ArrowRight className="w-5 h-5 text-white/90 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        {/* Floating particles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/60 rounded-full animate-float-up"
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${60 + i * 5}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + i * 0.2}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Service number badge */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
          {(index % services.length) + 1}
        </div>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <section className="py-16 flex flex-col items-center gap-12 text-white bg-gradient-to-r from-slate-900 to-blue-900 relative">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/15 rounded-full blur-2xl -translate-x-1/2" />

      {/* Enhanced header */}
      <SlidingDiv direction="top" px={50} className="text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative">
            <Settings className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-spin-slow" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent relative">
            Our Services
          </h2>
        </div>

        {/* Enhanced underline */}
        <div className="relative mx-auto w-20 md:w-32 h-1 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        </div>

        <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-medium">
          Custom software solutions crafted with modern frameworks and
          technologies to drive your business forward.
        </p>

        {/* Service stats */}
        <div className="flex justify-center items-center gap-8 mt-8 text-sm md:text-base">
          <div className="flex items-center gap-2 text-blue-300">
            <Settings className="w-5 h-5" />
            <span className="font-semibold">{services.length}+ Services</span>
          </div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2 text-purple-300">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Premium Quality</span>
          </div>
        </div>
      </SlidingDiv>

      <Marquee pauseOnHover={true} gradient={false} speed={40} className="py-4">
        {services.map((service, index) => (
          <div key={index} className="mr-6">
            <ServiceImage {...service} index={index} />
          </div>
        ))}
      </Marquee>

      {/* Call to action */}
      <SlidingDiv
        direction="top"
        px={50}
        className="text-center relative z-10 mt-8"
      >
        <p className="text-neutral-300 text-lg md:text-xl font-medium mb-6">
          Ready to transform your ideas into reality?
        </p>
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group">
          <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          <span>Start Your Project</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </SlidingDiv>

      <style jsx>{`
        @keyframes gradient-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-30px);
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-gradient-rotate {
          animation: gradient-rotate 3s linear infinite;
        }

        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }

        .animate-slide-right {
          animation: slide-right 8s linear infinite;
        }

        .animate-slide-left {
          animation: slide-left 10s linear infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};
