import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LandingHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="relative bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center bg-blue-600">
          <img
            src="/images/logo.svg"
            alt="Typo Flow Logo"
            className="h-24 md:h-32 w-auto"
            style={{ width: 'auto', height: '96px' }}
          />
        </div>
        
        <h1 
          className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight"
          style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
        >
          {t.hero.title}
        </h1>
        <div className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}>
          {t.hero.year}
        </div>
        <p className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
          {t.hero.subtitle}
        </p>
        <p className="text-base md:text-lg font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
          {t.hero.date}
        </p>
        <p className="text-sm md:text-base font-light opacity-80" style={{ fontFamily: 'Geist, sans-serif' }}>
          {t.hero.location}
        </p>
      </div>
    </header>
  );
};

export default LandingHeader;
