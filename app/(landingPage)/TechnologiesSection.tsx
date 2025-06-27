"use client";

import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { TechnologyType, technologies } from "@/lib/constants/technologies";

import Marquee from "react-fast-marquee";
import { SlidingDiv } from "@/components/custom/SlidingDiv";

const TechnologyCard = ({ src }: TechnologyType & { index: number }) => {
  return (
    <div className="h-16 w-16 md:size-20 lg:size-24 flex items-center justify-center">
      {/* Logo section */}
      <img
        src={src}
        className="h-full w-full drop-shadow-md transition-all duration-300 hover:scale-110"
        alt="Technology logo"
      />
    </div>
  );
};

export const TechnologiesSection = () => {
  return (
    <section className="py-24 flex flex-col items-center gap-12 text-gray-800 bg-white relative">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-100/20 rounded-full blur-2xl -translate-x-1/2" />

      {/* Enhanced header */}
      <SlidingDiv direction="top" px={50} className="text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="relative">
            <Code2 className="w-12 h-12 md:w-16 md:h-16 text-blue-600 animate-pulse" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-600 animate-bounce" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent relative">
            Our Technologies
          </h2>
        </div>

        {/* Enhanced underline */}
        <div className="relative mx-auto w-20 md:w-32 h-1 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8 font-medium">
          Cutting-edge technologies and frameworks we leverage to build
          innovative, scalable solutions for your business needs.
        </p>

        <div className="flex justify-center items-center gap-8 mt-8 text-sm md:text-base">
          <div className="flex items-center gap-2 text-blue-600">
            <Code2 className="w-5 h-5" />
            <span className="font-semibold">
              {technologies.length}+ Technologies
            </span>
          </div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="flex items-center gap-2 text-purple-600">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Modern Stack</span>
          </div>
        </div>
      </SlidingDiv>

      <Marquee
        pauseOnHover={true}
        gradient={false}
        speed={60}
        className="py-16"
      >
        {technologies.map((technology, index) => (
          <div key={index} className="mx-8 ">
            <TechnologyCard {...technology} index={index} />
          </div>
        ))}
      </Marquee>

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

        .animate-gradient-rotate {
          animation: gradient-rotate 3s linear infinite;
        }

        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};
