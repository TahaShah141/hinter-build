"use client";

import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { TechnologyType, technologies } from "@/lib/constants/technologies";

import Marquee from "react-fast-marquee";
import { SlidingDiv } from "@/components/custom/SlidingDiv";

const TechnologyCard = ({
  name,
  desc,
  src,
  index,
}: TechnologyType & { index: number }) => {

  return (
    <div
      className="group relative max-w-xs w-full mx-auto text-white backdrop-blur-md bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="p-4 sm:p-6">
        {/* Logo section */}
        <div className="flex items-center justify-center h-20 mb-4">
          <img
            src={src}
            className="max-h-full max-w-full drop-shadow-md transition-all duration-300 group-hover:scale-105"
            alt={name}
          />
        </div>

        {/* Content section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          
          <p className="text-sm leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Subtle accent */}
        <div className="mt-4 flex justify-center">
          <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full group-hover:w-8 transition-all duration-500"></div>
        </div>
      </div>

      {/* Optional: Small index indicator */}
      {index !== undefined && (
        <div className="absolute top-2 right-2 w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
          {(index % technologies.length) + 1}
        </div>
      )}
    </div>
  );
};

export const TechnologiesSection = () => {
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
            <Code2 className="w-12 h-12 md:w-16 md:h-16 text-blue-400 animate-pulse" />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-purple-400 animate-bounce" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent relative">
            Our Technologies
          </h2>
        </div>

        {/* Enhanced underline */}
        <div className="relative mx-auto w-20 md:w-32 h-1 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        </div>

        <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4 sm:px-6 md:px-8 font-medium">
          Cutting-edge technologies and frameworks we leverage to build
          innovative, scalable solutions for your business needs.
        </p>

        {/* Technology stats */}
        <div className="flex justify-center items-center gap-8 mt-8 text-sm md:text-base">
          <div className="flex items-center gap-2 text-blue-300">
            <Code2 className="w-5 h-5" />
            <span className="font-semibold">{technologies.length}+ Technologies</span>
          </div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2 text-purple-300">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Modern Stack</span>
          </div>
        </div>
      </SlidingDiv>

      <Marquee pauseOnHover={true} gradient={false} speed={60} className="py-4">
        {technologies.map((technology, index) => (
          <div key={index} className="mr-6">
            <TechnologyCard {...technology} index={index} />
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
          Ready to leverage these technologies for your project?
        </p>
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer group">
          <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          <span>Start Building</span>
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