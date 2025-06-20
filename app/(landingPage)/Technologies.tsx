'use client'

import { TechnologyType, technologies } from "@/lib/constants/technologies"
import { useRef, useState } from "react"

import { SlidingDiv } from "@/components/custom/SlidingDiv"

const TechnologyCard = ({ name, desc, src, index }: TechnologyType & { index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / cardRef.current.clientWidth) * 100
    const y = ((e.clientY - rect.top) / cardRef.current.clientHeight) * 100
    setMousePosition({ x, y })
  }

  return (
    <SlidingDiv repeat direction="bottom" delay={0.1 * index}>
      <div 
        ref={cardRef}
        className="group relative bg-white rounded-xl p-10 text-center cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 shadow-lg hover:shadow-xl"
        style={{
          animationDelay: `${index * 0.1}s`,
          animation: 'fadeInUp 0.5s ease-out backwards'
        }}
        onMouseMove={handleMouseMove}
        >
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-br from-blue-600 to-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
          <div className="w-full h-full bg-white rounded-xl"></div>
        </div>
        
        {/* Mouse follow effect */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
          ></div>
        
        <div className="relative z-10">
          <div className="mb-4 md:mb-6 lg:mb-8 inline-block animate-float">
            <img 
              src={src} 
              className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 transition-all duration-300 group-hover:scale-110" 
              alt={name}
              />
          </div>
          <h3 className="font-semibold text-lg md:text-xl text-slate-800 mb-3 md:mb-4 lg:mb-6 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-[240px] md:max-w-[280px] mx-auto opacity-90 group-hover:opacity-100 group-hover:text-slate-800 transition-all duration-300">
            {desc}
          </p>
        </div>
      </div>
    </SlidingDiv>
  )
}

export const Technologies = () => {
  return (
    <section className="min-h-screen bg-white text-slate-800 py-12 md:py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(10, 94, 176, 0.05) 0%, transparent 25%),
              radial-gradient(circle at 80% 80%, rgba(42, 51, 53, 0.05) 0%, transparent 25%)
            `
          }}
        ></div>
      </div>
      
      <div className="max-w-8xl mx-auto animate-fadeInUp px-4">
        {/* Header section */}
        <header className="text-center mb-12 md:mb-20 relative">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 relative inline-block">
            Technologies Using
            <div className="absolute -bottom-2 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-blue-600 rounded-full"></div>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-4">
            Leveraging cutting-edge tools and frameworks to build robust, scalable solutions
          </p>
        </header>

        {/* Technologies grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 p-4 md:p-8">
          {technologies.map((technology, i) => (
            <TechnologyCard key={i} {...technology} index={i} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}