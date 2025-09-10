import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LandingHeader = () => {
  const { t } = useLanguage();

  return (
    <header className="relative text-white h-screen flex flex-col pt-15 pb-10" style={{ backgroundColor: '#ff5251' }}>
      <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
        <img
          src="/images/logo.svg"
          alt="Typo Flow Logo"
          className="w-auto h-auto object-contain"
          style={{ 
            width: 'min(90%, 90%)',
            height: 'min(90%, 90%)',
            maxWidth: '90vw',
            maxHeight: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      <div className="container mx-auto px-4 text-center">
        
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
