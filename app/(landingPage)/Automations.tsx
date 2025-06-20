import { AutomationCarousel } from '@/components/custom/AutomationCarousel'
import React from 'react'
import { SlidingDiv } from '@/components/custom/SlidingDiv'
import { automations } from '@/lib/constants/automations'

export const Automations = () => {
  return (
    <section className="bg-white text-slate-800 py-12 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header section */}
        <SlidingDiv direction='top' px={50} className="text-center relative">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 relative inline-block">
            Automations
            <div className="absolute -bottom-2 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-blue-600 rounded-full"></div>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-4">
            Streamline complex workflows with custom-built automation solutions tailored to your unique needs.
          </p>
        </SlidingDiv>
        <SlidingDiv direction='bottom' px={50}>
          <AutomationCarousel automations={Array.from({length: 8}, () => automations[0])} />
        </SlidingDiv>
      </div>
    </section>
  )
}
