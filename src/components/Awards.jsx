import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Awards = () => {
  const { t, language } = useLanguage();

  return (
    <section id="awards" className="py-16 bg-white rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 
            className="text-4xl md:text-6xl font-bold text-black mb-8"
            style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
          >
            {t.navigation.awards}
          </h2>
          <p 
            className="text-lg md:text-xl font-light text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {language === 'HU' 
              ? 'Díjak és elismerések részletei hamarosan...'
              : 'Awards and recognition details coming soon...'
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
