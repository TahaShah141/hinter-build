"use client";

import { ArrowRight, Bot, Cpu, Settings, Sparkles, Zap } from "lucide-react";

import { AutomationCarousel } from "@/components/custom/AutomationCarousel";
import React from "react";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { automations } from "@/lib/constants/automations";

export const Automations = () => {
  return (
    <section
      id="automations"
      className="bg-white text-slate-800 py-12 md:py-24 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced header section */}
        <SlidingDiv direction="top" px={50} className="text-center relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Bot className="w-12 h-12 md:w-16 md:h-16 text-cyan-400 animate-spin-slow" />
              <Zap className="absolute -top-2 -right-2 w-6 h-6 text-indigo-400 animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent relative">
              Automations
            </h2>
          </div>

          {/* Enhanced underline with multiple layers */}
          <div className="relative mx-auto w-24 md:w-36 h-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
          </div>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-medium mb-8">
            Streamline complex workflows with intelligent automation solutions
            that adapt and evolve with your business needs.
          </p>

          {/* Enhanced automation stats */}
          <div className="flex justify-center items-center gap-8 text-sm md:text-base mb-8">
            <div className="flex items-center gap-2 text-cyan-600 bg-slate-50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
              <Cpu className="w-5 h-5" />
              <span className="font-semibold">AI-Powered</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-indigo-600 bg-slate-50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Lightning Fast</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-blue-600 bg-slate-50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
              <Settings className="w-5 h-5" />
              <span className="font-semibold">Fully Customizable</span>
            </div>
          </div>

          {/* Key benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                Instant Deployment
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ready-to-use automation templates that can be deployed in
                minutes, not weeks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                Smart Learning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                AI-driven automations that learn from your patterns and optimize
                over time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                Seamless Integration
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with your existing tools and workflows without
                disruption.
              </p>
            </div>
          </div>
        </SlidingDiv>

        {/* Enhanced carousel section */}
        <SlidingDiv direction="bottom" px={50}>
          <AutomationCarousel
            automations={Array.from({ length: 8 }, () => automations[0])}
          />
        </SlidingDiv>

        {/* Enhanced call to action */}
        <SlidingDiv
          direction="top"
          px={50}
          className="text-center relative mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-8 md:p-12 border border-slate-200 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Ready to Automate Your Workflow?
            </h3>
            <p className="text-slate-600 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation
              solutions designed for the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start Automating</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <div className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-700 rounded-full font-semibold border border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:scale-105 cursor-pointer group">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View Demo</span>
              </div>
            </div>
          </div>
        </SlidingDiv>
      </div>

      <style jsx>{`
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
