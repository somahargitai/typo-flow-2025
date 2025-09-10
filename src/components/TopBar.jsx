import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TopBar = () => {
  const { t, toggleLanguage, language } = useLanguage();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Navigation buttons */}
          <div className="flex space-x-8">
            <button
              onClick={() => scrollToSection('competition')}
              className="text-black hover:text-gray-600 transition-colors font-medium"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t.navigation.competition}
            </button>
            <button
              onClick={() => scrollToSection('awards')}
              className="text-black hover:text-gray-600 transition-colors font-medium"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t.navigation.awards}
            </button>
            <button
              onClick={() => scrollToSection('jury')}
              className="text-black hover:text-gray-600 transition-colors font-medium"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t.navigation.jury}
            </button>
            <button
              onClick={() => scrollToSection('conference')}
              className="text-black hover:text-gray-600 transition-colors font-medium"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t.navigation.conference}
            </button>
          </div>

          {/* Right side - Language switcher */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 text-black hover:text-gray-600 transition-colors font-medium border border-gray-300 rounded-lg hover:border-gray-400"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {language}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;
