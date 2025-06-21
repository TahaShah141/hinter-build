"use client";

import { Calendar, CheckCircle, Clock } from "lucide-react";

import { SlidingDiv } from "@/components/custom/SlidingDiv";

const CALL_TO_ACTION_TAGS = [
  "Growth-focused Strategies",
  "Personalized Support",
  "Results that Drive Success",
];

const Calendly = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SlidingDiv
          direction="top"
          px={50}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            {" "}
            <div className="relative">
              <Calendar className="w-12 h-12 md:w-16 md:h-16 text-blue-600 animate-pulse" />
              <Clock className="absolute -top-2 -right-2 w-6 h-6 text-purple-500 animate-bounce" />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Schedule a Meeting
            </h2>
          </div>{" "}
          <div className="relative mx-auto w-24 md:w-36 h-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
          </div>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-8">
            {"Ready to transform your business? Let's discuss how we can help you achieve your goals with our cutting-edge solutions."}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-12">
            {CALL_TO_ACTION_TAGS.map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gradient-to-br from-slate-800/60 to-slate-700/60 px-4 py-2 rounded-full border border-slate-600/50 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                <span className="font-semibold text-slate-200 group-hover:text-white transition-colors duration-300">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </SlidingDiv>{" "}
        <SlidingDiv direction="bottom" px={50} className="mb-16">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl p-8 md:p-12 border border-slate-600/50 shadow-lg backdrop-blur-sm">
            <div className="min-h-[600px] w-full rounded-2xl overflow-hidden shadow-inner">
              <iframe
                src="https://calendly.com/hinterbuild"
                width="100%"
                height="600"
                frameBorder="0"
                title="Schedule a meeting with HinterBuild"
                className="rounded-2xl"
              />
            </div>
          </div>{" "}
        </SlidingDiv>
      </div>
    </section>
  );
};

export default Calendly;
