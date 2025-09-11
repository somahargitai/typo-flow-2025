import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const TopBar = () => {
  const { t, toggleLanguage, language } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    handleResize() // Check initial size

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const shouldShowHamburger = isMobile || isScrolled

  const navigationItems = [
    { id: 'competition', label: t.navigation.competition },
    { id: 'awards', label: t.navigation.awards },
    { id: 'jury', label: t.navigation.jury },
    { id: 'conference', label: t.navigation.conference },
  ]

  return (
    <nav
      className={`fixed top-0 md:top-9 left-0 right-0 z-50 transition-all duration-300 bg-transparent`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Navigation */}
          {shouldShowHamburger ? (
            <div className="relative">
              {/* Hamburger button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors text-white`}
              >
                <div className="w-8 h-8 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 w-full transition-all duration-300 bg-white ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full transition-all duration-300  bg-white ${isMenuOpen ? 'opacity-0' : ''}`}
                  ></span>
                  <span
                    className={`block h-0.5 w-full transition-all duration-300 bg-white  ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                  ></span>
                </div>
              </button>

              {/* Mobile Menu - Full Screen */}
              {isMenuOpen && isMobile && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8">
                  {/* Close button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-gray-800 hover:text-gray-600 transition-colors"
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
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-800 font-semibold text-4xl uppercase tracking-wider hover:text-gray-600 transition-colors"
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
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 z-40">
                  {navigationItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full text-left px-6 py-3 text-gray-800 font-semibold text-lg uppercase tracking-wider hover:bg-gray-100 transition-colors"
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
            <div className="flex space-x-12">
              {navigationItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-gray-600 transition-colors font-semibold text-xl md:text-xl lg:text-[2.1rem] uppercase tracking-wider"
                  style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Right side - Language switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 md:px-4 md:py-2 transition-colors font-medium border-gray-300 hover:text-gray-600 text-xl md:text-xl lg:text-[2.1rem] tracking-wider ${
                isScrolled
                  ? 'text-white border-white'
                  : 'text-white border-gray-300'
              }`}
              style={{
                backgroundColor: isScrolled ? '#004bff' : 'transparent',
                fontFamily: 'Big Shoulders Display, sans-serif',
              }}
            >
              EN / HU
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
