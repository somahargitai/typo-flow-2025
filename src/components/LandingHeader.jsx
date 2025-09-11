import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import TopBar from './TopBar'

const LandingHeader = () => {
  const { t } = useLanguage()

  return (
    <header
      id="landing-header"
      className="relative text-white h-screen flex flex-col pt-15 pb-10"
      style={{ backgroundColor: '#ff5251' }}
    >
      {/* Top Bar */}
      <TopBar />

      {/* Logo container */}
      <div
        id="logo-container"
        className="flex-1 w-full relative pt-32 md:pt-40"
        style={{
          display: 'grid',
          placeItems: 'center',
          height: '100%',
        }}
      >
        {/* Logo - Mobile: centered, Desktop: bottom positioned */}
        <img
          src="/images/logo.svg"
          alt="Typo Flow Logo"
          className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 md:top-auto md:bottom-0 md:translate-y-0"
          style={{
            width: 'min(60vw, 60vh)',
            height: 'min(60vw, 60vh)',
            maxWidth: '60vw',
            maxHeight: '52vh',
            objectFit: 'contain',
            display: 'block',
          }}
        />
        {/* Labels container with two text lines positioned at bottom - Desktop only */}
        <div
          id="labels"
          className="absolute bottom-0 left-0 right-0 hidden md:flex justify-center items-end px-4"
          style={{ paddingBottom: '0rem' }}
        >
          <div className="flex w-full">
            {/* Left half */}
            <div
              className="w-1/2 flex justify-end"
              style={{ paddingRight: 'clamp(2rem, 6vh, 8rem)' }}
            >
              <div className="text-right whitespace-nowrap">
                <p
                  className="font-bold mb-0"
                  style={{
                    fontFamily: 'Big Shoulders Display, sans-serif',
                    fontSize: 'clamp(1.5rem, 6.1vh, 100rem)',
                    lineHeight: 1.0,
                    color: '#231f20',
                  }}
                >
                  Győr
                </p>
                <p
                  className="font-bold mt-0"
                  style={{
                    fontFamily: 'Big Shoulders Display, sans-serif',
                    fontSize: 'clamp(0.75rem, 3.5vh, 10.5rem)',
                    lineHeight: 1.0,
                    verticalAlign: 'baseline',
                    position: 'relative',
                    top: '0.2em',
                    color: '#231f20',
                  }}
                >
                  {t.hero.location}
                </p>
              </div>
            </div>
            {/* Right half */}
            <div className="w-1/2">{/* Empty right half */}</div>
          </div>
        </div>
      </div>

      {/* Main Title and Date */}
      <div id="main-title" className="container mx-auto px-4 text-center mt-20 pt-8 pb-12 md:pt-0 md:pb-0">
        <h1
          className="text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[4.5rem]  mb-4 uppercase tracking-wide font-big-shoulders"
          style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
        >
          {t.hero.subtitle}
        </h1>
        {/* Desktop date */}
        <p
          className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-5xl font-big-shoulders hidden md:block"
          style={{
            fontFamily: 'Big Shoulders Display, sans-serif',
            color: '#231f20',
          }}
        >
          {t.hero.date}
        </p>
        {/* Mobile and iPad date and location */}
        <div className="lg:hidden">
          <p
            className="font-semibold text-xl md:text-2xl font-big-shoulders mb-2"
            style={{
              fontFamily: 'Big Shoulders Display, sans-serif',
              color: '#231f20',
            }}
          >
            {t.hero.date}
          </p>
          <p
            className="font-bold text-lg md:text-xl font-big-shoulders"
            style={{
              fontFamily: 'Big Shoulders Display, sans-serif',
              color: '#231f20',
            }}
          >
            Győr • {t.hero.location}
          </p>
        </div>
      </div>
    </header>
  )
}

export default LandingHeader
