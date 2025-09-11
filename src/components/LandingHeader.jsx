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
        {/* Logo */}
        <img
          src="/images/logo.svg"
          alt="Typo Flow Logo"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
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
          {/* Mobile labels container */}
        <div
          id="mobile-labels"
          className="absolute bottom-0 left-0 right-0 flex md:hidden justify-center items-end px-4"
          style={{ paddingBottom: '0rem' }}
        >
          <div className="text-center">
            <p
              className="font-bold mb-0"
              style={{
                fontFamily: 'Big Shoulders Display, sans-serif',
                fontSize: 'clamp(1.2rem, 4vh, 2rem)',
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
                fontSize: 'clamp(0.6rem, 2.5vh, 1rem)',
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

      {/* Main Title and Date */}
      <div id="main-title" className="container mx-auto px-4 text-center mt-20">
        <h1
          className="text-white font-bold text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] xl:text-[5rem] 2xl:text-[5rem] mb-4 uppercase tracking-wide"
          style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
        >
          {t.hero.subtitle}
        </h1>
        <p
          className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-5xl"
          style={{
            fontFamily: 'Big Shoulders Display, sans-serif',
            color: '#231f20',
          }}
        >
          {t.hero.date}
        </p>
      </div>
    </header>
  )
}

export default LandingHeader
