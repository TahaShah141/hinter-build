import { ProductCarousel } from '@/components/custom/ProductCarousel'
import React from 'react'
import { products } from '@/lib/constants/products'

export const Products = () => {
  return (
    <section className="min-h-screen bg-white text-slate-800 py-12 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto animate-fadeInUp px-4">
        {/* Header section */}
        <header className="text-center mb-12 md:mb-20 relative">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 relative inline-block">
            Products
            <div className="absolute -bottom-2 md:-bottom-6 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-blue-600 rounded-full"></div>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mt-6 md:mt-8 leading-relaxed px-4">
            Uncover what we offer — quality products for every purpose.
          </p>
        </header>

        <ProductCarousel products={Array.from({length: 8}, () => products[0])} />
      </div>
    </section>
  )
}
