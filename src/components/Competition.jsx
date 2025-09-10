import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Competition = () => {
  const { t, language } = useLanguage();

  return (
    <section id="competition" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-6xl font-bold text-black mb-8"
            style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
          >
            {t.navigation.competition}
          </h2>
          <p 
            className="text-lg md:text-xl font-light text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {language === 'HU' 
              ? 'Részvételi feltételek és pályázati információk hamarosan...'
              : 'Competition rules and application information coming soon...'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Competition;
