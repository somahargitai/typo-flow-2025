import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Awards = () => {
  const { translationsOfLanguage, language } = useLanguage()

  return (
    <section id="awards" className="mb-24 bg-white rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-4">
          {/* Title */}
          <h2
            className="text-4xl md:text-7xl font-bold mb-8 text-left"
            style={{
              fontFamily: 'Big Shoulders Display, sans-serif',
              color: '#004bff',
            }}
          >
            {translationsOfLanguage.awards.title}
          </h2>

          {/* Awards List */}
          <div className="space-y-10">
            {translationsOfLanguage.awards.awards.map((award, index) => (
              <div key={index} className="text-left">
                <h3
                  className="text-xl md:text-4xl font-bold mb-2"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    color: '#004bff',
                  }}
                >
                  {award.name}
                </h3>
                <p
                  className="text-lg md:text-4xl font-normal"
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    color: '#004bff',
                  }}
                >
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
