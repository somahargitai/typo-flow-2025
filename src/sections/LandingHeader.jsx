import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Navigation from '../components/Navigation'
import LandingBottomBar from '../components/LandingBottomBar'

const LandingHeader = () => {
  const { translationsOfLanguage } = useLanguage()
  const [logoWrapperHeight, setLogoWrapperHeight] = useState('60vh')

  useEffect(() => {
    const calculateHeight = () => {
      const viewportHeight = window.innerHeight
      const topBar = document.querySelector('nav')
      const mainTitle = document.getElementById('main-title')

      if (topBar && mainTitle) {
        const topBarHeight = topBar.offsetHeight
        const mainTitleHeight = mainTitle.offsetHeight
        let availableHeight = viewportHeight - topBarHeight - mainTitleHeight
        if (viewportHeight < 768) {
          availableHeight = viewportHeight
        }
        setLogoWrapperHeight(`${availableHeight}px`)
      }
    }

    calculateHeight()
    window.addEventListener('resize', calculateHeight)

    return () => window.removeEventListener('resize', calculateHeight)
  }, [])

  return (
    <header
      id="landing-header"
      className="relative text-white h-screen flex flex-col pb-10"
      style={{ backgroundColor: '#ff5251' }}
    >
      {/* <Navigation /> */}

      {/* Logo wrapper - calculated height with padding */}
      <div
        id="logo-wrapper"
        className="w-full flex items-center justify-center pt-0"
        style={{
          height: logoWrapperHeight,
        }}
      >
        {/* Logo container */}
        <div
          id="logo-container"
          className="relative w-full"
          style={{
            height: 'min(60vw, 60vh)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <style>
            {`
              @media (max-height: 599px) {
                #logo-container {
                  height: min(40vw, 40vh) !important;
                }
              }
            `}
          </style>
          {/* Logo - Mobile: centered, Desktop: bottom positioned */}
          <img
            src="/images/logo.svg"
            alt="Typo Flow Logo"
            className="absolute left-1/2 transform -translate-x-1/2 top-1/2
              -translate-y-1/2 md:top-auto md:bottom-0 md:translate-y-0"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
          {/* Labels container with two text lines positioned at bottom - Desktop only */}
          <div
            id="labels"
            className="absolute bottom-0 left-0 right-0 hidden lg:flex
              justify-center items-end px-4"
            style={{ paddingBottom: '0rem' }}
          >
            <div className="flex w-full full-width">
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
                      paddingBottom: '0.05em',
                    }}
                  >
                    {translationsOfLanguage.hero.location}
                  </p>
                </div>
              </div>
              {/* Right half */}
              <div className="w-1/2">{/* Empty right half */}</div>
            </div>
          </div>
        </div>
      </div>

      <LandingBottomBar />
    </header>
  )
}

export default LandingHeader
