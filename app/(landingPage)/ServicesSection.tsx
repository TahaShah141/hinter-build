"use client";

import { ArrowRight, Code2, Play, Settings, Sparkles, Zap } from "lucide-react";
import { ServiceType, services } from "@/lib/constants/services";
import { useRef, useState } from "react";

import { SlidingDiv } from "@/components/custom/SlidingDiv";

const ServiceCard = ({
  name,
  src,
  index,
}: ServiceType & { index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / cardRef.current.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / cardRef.current.clientHeight) * 100;
    setMousePosition({ x, y });
  };

  return (
    <SlidingDiv repeat direction="bottom" delay={0.1 * index}>
      <div
        ref={cardRef}
        className="group relative h-full bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 text-center cursor-pointer transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 shadow-lg hover:shadow-2xl border border-white/20"
        style={{
          animationDelay: `${index * 0.1}s`,
          animation: "fadeInUp 0.6s ease-out backwards",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 animate-gradient-x">
          <div className="w-full h-full bg-gradient-to-br from-white/95 to-white/90 rounded-2xl"></div>
        </div>

        {/* Mouse follow spotlight effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle 150px at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.1) 40%, transparent 70%)`,
          }}
        ></div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {isHovered &&
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float-particle opacity-60"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + i * 0.3}s`,
                }}
              />
            ))}
        </div>

        <div className="relative z-10 h-full flex flex-col">
          {/* Enhanced Image container */}
          <div className="mb-6 flex-1 relative">
            {/* Service number badge */}
            <div className="absolute top-2 left-2 z-20 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
              {(index % services.length) + 1}
            </div>

            {/* Image container with enhanced effects */}
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-100 group-hover:border-blue-200 transition-all duration-300 overflow-hidden h-48">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-all duration-500 scale-110"></div>
              
              {/* Image with overlay effects */}
              <div className="relative h-full w-full">
                <img
                  src={src}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  alt={name}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Floating particles on hover */}
              {isHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/60 rounded-full animate-float-up"
                      style={{
                        left: `${25 + i * 20}%`,
                        top: `${60 + i * 8}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Hover content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="flex items-center justify-between text-white/90 text-xs">
                  <div className="flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    <span>View Details</span>
                  </div>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Service name with gradient text */}
          <h3 className="font-bold text-lg md:text-xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:from-blue-600 group-hover:to-purple-600">
            {name}
          </h3>

          {/* Enhanced description */}
          <p className="text-slate-600 text-sm scale-90 group-hover:scale-100 transition-all duration-300 leading-relaxed mb-4">
            Professional {name.toLowerCase()} solutions tailored to your needs
          </p>

          {/* Subtle accent line */}
          <div className="mx-auto w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </div>
      </div>
    </SlidingDiv>
  );
};

export const ServicesSection = () => {
  return (
    <section className="bg-white text-slate-800 py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-spin-slow"></div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-8xl mx-auto animate-fadeInUp px-4 relative z-10">
        {/* Enhanced header section */}
        <header className="text-center mb-16 md:mb-24 relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Settings className="w-12 h-12 md:w-16 md:h-16 text-blue-600 animate-pulse" />
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-500 animate-bounce" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              Our Services
            </h2>
          </div>

          {/* Animated underline */}
          <div className="relative mx-auto w-20 md:w-32 h-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
          </div>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-medium">
            Custom software solutions crafted with modern frameworks and
            technologies to drive your business forward.
          </p>

          {/* Stats or highlights */}
          <div className="flex justify-center items-center gap-8 mt-8 text-sm md:text-base">
            <div className="flex items-center gap-2 text-slate-600">
              <Settings className="w-5 h-5 text-blue-500" />
              <span className="font-semibold">
                {services.length}+ Services
              </span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-600">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">Premium Quality</span>
            </div>
          </div>
        </header>

        {/* Enhanced technologies grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 p-4 md:p-8">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} index={i} />
          ))}
        </div>

        {/* Call to action section */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-slate-600 text-lg md:text-xl font-medium mb-6">
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

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
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

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 2s ease-in-out infinite;
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
      `}</style>
    </section>
  );
};