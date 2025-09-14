import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const BelowFoldInfo = () => {
  const { translationsOfLanguage, language } = useLanguage()

  return (
    <section className="py-20" style={{ backgroundColor: '#004bff' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-center max-w-4xl mx-auto">
            <p
              className="text-lg md:text-3xl font-light text-white
                leading-relaxed mb-12"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {language === 'HU' ? (
                <>
                  A <strong>TypoFlow - I. Országos Tipográfiai Biennále</strong>{' '}
                  keretében a tipográfia minden területét felölelő munkákból
                  válogatunk. A zsűri által kiválasztott alkotások a győri
                  Science Parkban, a Széchenyi István Egyetem Design Campusán
                  kerülnek bemutatásra.
                </>
              ) : (
                <>
                  Within the framework of{' '}
                  <strong>TypoFlow - 1st National Typography Biennale</strong>,
                  we select works covering all areas of typography. The works
                  selected by the jury will be presented at the Science Park in
                  Győr, at the Design Campus of Széchenyi István University.
                </>
              )}
            </p>

            <div className="text-white">
              <h3
                className="text-4xl sm:text-6xl md:text-9xl font-bold mb-1
                  text-white"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                {language === 'HU' ? 'MEGNYITÓ' : 'OPENING'}
              </h3>
              <p
                className="text-4xl md:text-7xl font-semibold text-white mb-10"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                {language === 'HU'
                  ? '2025. október 22. 19.00'
                  : '2025. October 22. 19.00'}
              </p>
              <p
                className="text-lg md:text-3xl font-light text-white
                  leading-relaxed"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {language === 'HU'
                  ? 'Helyszín: Science Park – Design Campus, Győr, Töltésszer u.13.'
                  : 'Location: Science Park – Design Campus, Győr, Töltésszer u. 13.'}
              </p>
              <p
                className="text-lg md:text-4xl font-semibold text-white
                  leading-relaxed"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {language === 'HU'
                  ? 'A kiállítást 1 napos szakmai konferencia kíséri.'
                  : 'The exhibition is accompanied by a 1-day professional conference.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BelowFoldInfo
