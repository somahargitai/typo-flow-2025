import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const SupportersFooter = () => {
  const { translationsOfLanguage } = useLanguage()

  return (
    <section className="py-16" style={{ backgroundColor: '#004bff' }}>
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-12
            text-white"
          style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
        >
          {translationsOfLanguage.partners.title}
        </h2>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8
            items-center justify-items-center"
        >
          <div className="p-4">
            <a
              href="https://uni.sze.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/Szechenyi-Egyetem.svg"
                alt="Széchenyi Egyetem"
                className="h-16 w-auto object-contain"
                style={{ width: 'auto', height: '64px' }}
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://designcampus.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/Design-Campus.svg"
                alt="Design Campus"
                className="h-16 w-auto object-contain"
                style={{ width: 'auto', height: '64px' }}
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://www.fontfront.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/Font-Front.svg"
                alt="Font Front"
                className="h-16 w-auto object-contain"
                style={{ width: 'auto', height: '64px' }}
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://arthungry.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/Art-Hungry.svg"
                alt="Art Hungry"
                className="h-16 w-auto object-contain"
                style={{ width: 'auto', height: '64px' }}
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://phenom.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/Phenom.svg"
                alt="Phenom"
                className="h-16 w-auto object-contain"
                style={{ width: 'auto', height: '64px' }}
              />
            </a>
          </div>
          <div className="p-4">
            <a
              href="https://brandguide.hu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/Brandguide.svg"
                alt="Brandguide"
                className="h-16 w-auto object-contain"
                style={{ width: 'auto', height: '64px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportersFooter
