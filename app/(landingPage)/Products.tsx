"use client";

import { Package, Shield, Star, Zap } from "lucide-react";
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
        </SlidingDiv>

        {/* Original carousel - untouched */}
        <SlidingDiv direction="bottom" px={50}>
          <ProductCarousel
            products={Array.from({ length: 8 }, () => products[0])}
          />
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
