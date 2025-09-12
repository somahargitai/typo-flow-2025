import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const SupportersFooter = () => {
  const { translationsOfLanguage } = useLanguage()

  return (
    <section className="py-16" style={{ backgroundColor: '#004bff' }}>
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
          style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
        >
          {translationsOfLanguage.partners.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          <div className="p-4">
            <img
              src="/images/brand-logo-05.svg"
              alt="Brand Logo 05"
              className="h-16 w-auto object-contain"
              style={{ width: 'auto', height: '64px' }}
            />
          </div>
          <div className="p-4">
            <img
              src="/images/brand-logo-06.svg"
              alt="Brand Logo 06"
              className="h-16 w-auto object-contain"
              style={{ width: 'auto', height: '64px' }}
            />
          </div>
          <div className="p-4">
            <img
              src="/images/brand-logo-07.svg"
              alt="Brand Logo 07"
              className="h-16 w-auto object-contain"
              style={{ width: 'auto', height: '64px' }}
            />
          </div>
          <div className="p-4">
            <img
              src="/images/brand-logo-08.svg"
              alt="Brand Logo 08"
              className="h-16 w-auto object-contain"
              style={{ width: 'auto', height: '64px' }}
            />
          </div>
          <div className="p-4">
            <img
              src="/images/brand-logo-09.svg"
              alt="Brand Logo 09"
              className="h-16 w-auto object-contain"
              style={{ width: 'auto', height: '64px' }}
            />
          </div>
          <div className="p-4">
            <img
              src="/images/brand-logo-10.svg"
              alt="Brand Logo 10"
              className="h-16 w-auto object-contain"
              style={{ width: 'auto', height: '64px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportersFooter
