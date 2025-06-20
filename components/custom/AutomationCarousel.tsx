'use client'

import { Carousel3D } from './Carousel3D'
import { ProductType } from "@/lib/constants/products"

type AutomationCarouselProps = {
  automations: ProductType[]
}

export const AutomationCarousel = ({ automations }: AutomationCarouselProps) => {
  return (
    <Carousel3D transparent={false} items={automations.map(({name, src, desc}, i) => (
      <div key={i} className='size-full p-8 flex flex-col items-center gap-8'>
        <h4 className='text-2xl font-bold'>{name}</h4>
        <img src={src} className='bg-neutral-200 rounded-2xl overflow-hidden aspect-video w-full' />
        <p className='text-muted-foreground text-center max-w-[80%]'>{desc}</p>
      </div>
    ))} />
  )
}