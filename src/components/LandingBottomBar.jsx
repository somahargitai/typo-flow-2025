import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LandingBottomBar = () => {
  const { translationsOfLanguage } = useLanguage()

  return (
    <div
      id="main-title"
      className="container mx-auto px-4 text-center mt-20 pt-0 pb-12 mmd:pb-0"
    >
      <h1
        className="text-white font-bold text-3xl sm:text-4xl md:text-6xl
          lg:text-[4.5rem] xl:text-[4.5rem] mb-4 uppercase tracking-wide
          font-big-shoulders"
        style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
      >
        {translationsOfLanguage.hero.eventTitle}
      </h1>
      {/* Date - responsive content */}
      <div>
        <p
          className="font-semibold text-2xl md:text-5xl lg:text-5xl 2xl:text-5xl
            font-big-shoulders"
          style={{
            fontFamily: 'Big Shoulders Display, sans-serif',
            color: '#231f20',
          }}
        >
          {translationsOfLanguage.hero.date}
        </p>
        {/* Location - only on mobile/tablet */}
        <p
          className="font-big-shoulders font-bold text-lg md:text-4xl lg:hidden
            pt-2 md:pt-4"
          style={{
            fontFamily: 'Big Shoulders Display, sans-serif',
            color: '#231f20',
          }}
        >
          Győr • {translationsOfLanguage.hero.location}
        </p>
      </div>
    </div>
  )
}

export default LandingBottomBar
