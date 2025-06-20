import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

type Carousel3DProps = {
  items: React.ReactNode[]
  rotated?: boolean
  navigation?: boolean
  transparent?: boolean
}

export const Carousel3D = ({items, rotated=false, navigation=false, transparent=true}: Carousel3DProps) => {
  const [currentIndex, setCurrentIndex] = useState(2);

  const colors: string[] = [
    "bg-gradient-to-br from-neutral-100 to-neutral-300",
    // "bg-gradient-to-br from-purple-500 to-pink-600",
    // "bg-gradient-to-br from-blue-500 to-cyan-600",
    // "bg-gradient-to-br from-green-500 to-emerald-600",
    // "bg-gradient-to-br from-orange-500 to-red-600",
    // "bg-gradient-to-br from-indigo-500 to-purple-600",
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getItemStyle = (index: number) => {
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const baseX = screenWidth < 640 ? 120 : screenWidth < 768 ? 180 : screenWidth < 1024 ? 240 : 300;
    const baseZ = screenWidth < 640 ? 80 : screenWidth < 768 ? 100 : screenWidth < 1024 ? 120 : 150;

    const diff = index - currentIndex;
    // const absDistance = Math.abs(diff);
    
    // Base styles for all items
    let transform = '';
    let zIndex = 0;
    let opacity = 1;
    let scale = 1;
    
    if (diff === 0) {
      // Center item
      transform = `translateX(0) translateZ(0) ${rotated ? "rotateY(0deg)" : ""}`;
      zIndex = 50;
      scale = 1;
      opacity = transparent ? 1 : 1;
    } else if (diff === -1 || (diff === items.length - 1 && currentIndex === 0)) {
      // Left item
      transform = `translateX(-${baseX}px) translateZ(-${baseZ}px) ${rotated ? "rotateY(45deg)" : ""}`;
      zIndex = 40;
      scale = 0.8;
      opacity = transparent ? 0.7 : 1;
    } else if (diff === 1 || (diff === -(items.length - 1) && currentIndex === items.length - 1)) {
      // Right item
      transform = `translateX(${baseX}px) translateZ(-${baseZ}px) ${rotated ? "rotateY(-45deg)" : ""}`;
      zIndex = 40;
      scale = 0.8;
      opacity = transparent ? 0.7 : 1;
    } else if (diff === -2 || (diff >= 3)) {
      // Far left item
      transform = `translateX(-${baseX * 2}px) translateZ(-${baseZ + 100}px) ${rotated ? "rotateY(60deg)" : ""}`;
      zIndex = 30;
      scale = 0.6;
      opacity = transparent ? 0.4 : 1;
    } else if (diff === 2 || (diff <= -3)) {
      // Far right item
      transform = `translateX(${baseX * 2}px) translateZ(-${baseZ + 100}px) ${rotated ? "rotateY(-60deg)" : ""}`;
      zIndex = 30;
      scale = 0.6;
      opacity = transparent ? 0.4 : 1;
    } else {
      // Hidden items
      transform = `translateX(${baseX * 3}px) translateZ(-${baseZ + 200}px) ${rotated ? "rotateY(90deg)" : ""}`;
      zIndex = 10;
      scale = 0.4;
      opacity = transparent ? 0 : 1;
    }

    return {
      transform: `${transform} scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex items-center justify-center">
      <div className="relative w-full">
        {/* 3D Container */}
        <div 
          className="relative h-[700px] flex items-center justify-center"
          style={{ perspective: '1000px', perspectiveOrigin: 'center center' }}
        >
          {/* Carousel Items */}
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute overflow-hidden w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] rounded-2xl shadow-2xl cursor-pointer transition-all duration-700 ease-in-out ${colors[index % colors.length]}`}
              style={getItemStyle(index)}
              onClick={() => setCurrentIndex(index)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {navigation && <>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
          >
          <ChevronRight className="w-6 h-6 text-black" />
        </button>
        </>}

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black scale-125' 
                  : 'bg-black/40 hover:bg-black/60'
              }`}
            />
          ))}
        </div>

        {/* Current Item Info */}
        <div className="text-center mt-6 text-white">
          <p className="text-lg opacity-80">
            Item {currentIndex + 1} of {items.length}
          </p>
        </div>
      </div>
    </div>
  );
};
