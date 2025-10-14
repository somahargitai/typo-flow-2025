import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const LandingTopBar = () => {
  const { translationsOfLanguage, toggleLanguage, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  // Add shake animation styles
  const shakeStyles = `
    @keyframes shake {
      0%, 100% { transform: rotate(-2deg) translateX(0); }
      10% { transform: rotate(-2deg) translateX(-4px) translateY(-1px); }
      20% { transform: rotate(-2deg) translateX(4px) translateY(1px); }
      30% { transform: rotate(-2deg) translateX(-3px) translateY(-1px); }
      40% { transform: rotate(-2deg) translateX(3px) translateY(1px); }
      50% { transform: rotate(-2deg) translateX(-2px) translateY(-1px); }
      60% { transform: rotate(-2deg) translateX(2px) translateY(1px); }
      70% { transform: rotate(-2deg) translateX(-1px) translateY(-1px); }
      80% { transform: rotate(-2deg) translateX(1px) translateY(1px); }
      90% { transform: rotate(-2deg) translateX(0) translateY(0); }
    }
    .shake-animation {
      animation: shake 0.6s ease-in-out;
    }
    .registration-button {
      transform: rotate(-2deg);
      transition: all 0.3s ease;
    }
    .registration-button:hover {
      transform: rotate(-2deg) scale(1.05) translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  `

  const scrollToSection = item => {
    if (item.isExternal && item.url) {
      window.open(item.url, '_blank')
    } else {
      const element = document.getElementById(item.id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  const handleLanguageToggle = () => {
    setIsAnimating(true)
    toggleLanguage()

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  useEffect(() => {
    // Add shake animation styles to document
    const styleElement = document.createElement('style')
    styleElement.textContent = shakeStyles
    document.head.appendChild(styleElement)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const landingHeader = document.getElementById('landing-header')

      if (landingHeader) {
        const headerHeight = landingHeader.offsetHeight
        setIsScrolled(scrollTop > headerHeight)
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Shake animation logic
    const startShakeAnimation = () => {
      // First shake after 5 seconds
      const firstShakeTimeout = setTimeout(() => {
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 500) // Shake for 0.5 seconds
      }, 5000)

      // Repeat shake every 15 seconds
      const shakeInterval = setInterval(() => {
        setIsShaking(true)
        setTimeout(() => setIsShaking(false), 500) // Shake for 0.5 seconds
      }, 15000)

      return () => {
        clearTimeout(firstShakeTimeout)
        clearInterval(shakeInterval)
      }
    }

    const cleanupShake = startShakeAnimation()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize() // Check initial size

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      cleanupShake()
      document.head.removeChild(styleElement)
    }
  }, [])

  const shouldShowHamburger = isMobile || isScrolled

  const navigationItems = [
    { id: 'competition', label: translationsOfLanguage.navigation.competition },
    { id: 'awards', label: translationsOfLanguage.navigation.awards },
    { id: 'jury', label: translationsOfLanguage.navigation.jury },
    { id: 'conference', label: translationsOfLanguage.navigation.conference },
    // {
    //   id: 'registration',
    //   label: translationsOfLanguage.navigation.registration,
    //   isExternal: true,
    //   url: 'https://docs.google.com/forms/d/e/1FAIpQLSepLK9MTlbs8c8jkbshG3csWF8cWmszOE8WzvfZwPE_UmhX5Q/viewform',
    // },
  ]

  return (
    <nav
      className={`relative top-0 left-0 right-0 z-50 transition-all duration-300
        bg-transparent`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Navigation */}
          {shouldShowHamburger ? (
            <div className="relative">
              {/* Hamburger button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={'p-2 transition-colors text-white'}
              >
                <div className="w-8 h-8 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 w-full transition-all duration-300
                      bg-white ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full transition-all duration-300
                      bg-white ${isMenuOpen ? 'opacity-0' : ''}`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full transition-all duration-300
                      bg-white
                      ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                  ></span>
                </div>
              </button>

              {/* Mobile Menu - Full Screen */}
              {isMenuOpen && isMobile && (
                <div
                  className="fixed inset-0 bg-white z-40 flex flex-col
                    items-center justify-center space-y-8"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-gray-800
                      hover:text-gray-600 transition-colors"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {navigationItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item)}
                       className={`font-semibold text-4xl uppercase
                         tracking-wider ${
                           item.id === 'registration'
                             ? `bg-white text-gray-800 px-3 py-2 rounded-lg
                               registration-button border-2 border-black
                               ${isShaking ? 'shake-animation' : ''}`
                             : `text-gray-800 hover:text-gray-600
                               transition-colors`
                         }`}
                      style={{
                        fontFamily: 'Big Shoulders Display, sans-serif',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Desktop Menu - Dropdown */}
              {isMenuOpen && !isMobile && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white
                    shadow-lg rounded-lg py-4 z-40"
                >
                  {navigationItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item)}
                      className={`block w-full text-left px-3 py-2 font-semibold
                        text-lg uppercase tracking-wider ${
                          item.id === 'registration'
                            ? `bg-white text-gray-800 registration-button
                              ${isShaking ? 'shake-animation' : ''}`
                            : `text-gray-800 hover:bg-gray-100
                              transition-colors`
                        }`}
                      style={{
                        fontFamily: 'Big Shoulders Display, sans-serif',
                      }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Desktop Navigation - Full Menu */
            <div className="flex space-x-12 items-center">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item)}
                  className={`font-semibold text-xl md:text-xl lg:text-[2.1rem]
                    uppercase tracking-wider ${
                      item.id === 'registration'
                        ? `bg-white text-gray-800 px-3 py-2 rounded-lg
                          registration-button
                          ${isShaking ? 'shake-animation' : ''}`
                        : 'text-white hover:text-gray-600 transition-colors'
                    }`}
                  style={{
                    fontFamily: 'Big Shoulders Display, sans-serif',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Right side - Language switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleLanguageToggle}
              className="px-2 py-1 md:px-4 md:py-2 font-medium text-white
                border-white text-xl md:text-xl lg:text-[2.1rem] tracking-wider
                transition-all duration-300 ease-in-out"
              style={{
                fontFamily: 'Big Shoulders Display, sans-serif',
                transform: isAnimating
                  ? 'scale(1.8) rotateY(360deg)'
                  : 'scale(1) rotateY(0deg)',
              }}
            >
              {isAnimating ? language : 'EN / HU'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LandingTopBar
