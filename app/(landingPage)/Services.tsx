import { ServiceType, services } from "@/lib/constants/services"

import Marquee from "react-fast-marquee";

const ServiceImage = ({name, src}: ServiceType) => {
  return (
    <div className="bg-white drop-shadow-2xl p-px rounded-md">
      <div className="relative h-96 rounded-md overflow-hidden">
        <img src={src} className="h-full"/>
        <p className="absolute bottom-2 left-2 text-xs p-1 rounded-md bg-gradient-to-br from-black/40 to-black/80 text-white font-bold">{name}</p>
      </div>
    </div>
  )
}

export const Services = () => {

  return (
    <div className="min-h-96 py-10 flex flex-col gap-8 text-white bg-gradient-to-r from-dark to-primary/70">
      <header className="text-center  relative">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 relative inline-block">
          Services
          <div className="absolute -bottom-2 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-white rounded-full"></div>
        </h2>
        <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-4">
          Custom software solutions crafted with modern frameworks and technologies to drive your business forward.
        </p>
      </header>
      <Marquee pauseOnHover={false} gradient={false} speed={60}>
        {services.map((service, index) => (
          <div key={index} className="mr-4">
            <ServiceImage {...service} />
          </div>
        ))}
      </Marquee>
    </div>
  )
}
