"use client";

import { ArrowRight, Package, Shield, Sparkles, Star, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProductCarousel } from "@/components/custom/ProductCarousel";
import React from "react";
import { SlidingDiv } from "@/components/custom/SlidingDiv";
import { products } from "@/lib/constants/products";

export const Products = () => {
  return (
    <section
      id="products"
      className="bg-white text-slate-800 py-12 md:py-24 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced header section */}
        <SlidingDiv direction="top" px={50} className="text-center relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Package className="w-12 h-12 md:w-16 md:h-16 text-blue-500 animate-spin-slow" />
              <Star className="absolute -top-2 -right-2 w-6 h-6 text-purple-500 animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              Products
            </h2>
          </div>

          {/* Enhanced underline with multiple layers */}
          <div className="relative mx-auto w-24 md:w-36 h-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          </div>

          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-medium mb-8">
            Discover our premium collection of innovative products designed to
            elevate your experience and exceed your expectations.
          </p>

          {/* Enhanced product stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm md:text-base mb-8">
            <div className="flex items-center gap-2 text-blue-600 bg-slate-50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Premium Quality</span>
            </div>
            <div className="hidden min-[500px]:block w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-purple-600 bg-slate-50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Top Rated</span>
            </div>
            <div className="hidden min-[500px]:block w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center gap-2 text-orange-600 bg-slate-50 px-4 py-2 rounded-full backdrop-blur-sm border border-slate-200">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Fast Delivery</span>
            </div>
          </div>

          {/* Key benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                Quality Guarantee
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every product undergoes rigorous testing to ensure the highest
                standards of quality and reliability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                Award Winning
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our products have received industry recognition for innovation,
                design, and customer satisfaction.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800">
                Instant Impact
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Experience immediate results with products designed for maximum
                efficiency and user satisfaction.
              </p>
            </div>
          </div>
        </SlidingDiv>

        {/* Original carousel - untouched */}
        <SlidingDiv direction="bottom" px={50}>
          <ProductCarousel
            products={Array.from({ length: 8 }, () => products[0])}
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
              Ready to Explore Our Products?
            </h3>
            <p className="text-slate-600 text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto leading-relaxed">
              Browse our complete collection and find the perfect solution for
              your needs.
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="inline-flex items-center justify-center gap-3 w-56 py-6 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                <Package className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Browse Products
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              <Button className="inline-flex items-center justify-center gap-3 w-56 py-6 bg-gradient-to-r from-[#0A5EB0] to-[#2A3335] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                View Catalog
              </Button>
            </div>
          </div>
        </SlidingDiv>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};
