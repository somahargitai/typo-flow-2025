import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const BelowFoldInfo = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-6xl font-bold text-black mb-8"
            style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
          >
            {t.about.title}
          </h2>
          <p 
            className="text-lg md:text-xl font-light text-gray-700 leading-relaxed mb-8"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {t.about.description}
          </p>
          
          <div className="text-left max-w-3xl mx-auto">
            <p 
              className="text-base md:text-lg font-light text-gray-700 leading-relaxed mb-6"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {language === 'HU' 
                ? 'A TypoFlow - I. Országos Tipográfiai Biennále keretében a tipográfia minden területét felölelő munkákból válogatunk. A zsűri által kiválasztott alkotások a győri Science Parkban, a Széchenyi István Egyetem Design Campusán kerülnek bemutatásra.'
                : 'Within the framework of TypoFlow - 1st National Typography Biennale, we select works covering all areas of typography. The works selected by the jury will be presented at the Science Park in Győr, at the Design Campus of Széchenyi István University.'
              }
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 
                className="text-xl font-semibold mb-4 text-black"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                {language === 'HU' ? 'MEGNYITÓ' : 'OPENING'}
              </h3>
              <p 
                className="text-lg font-medium text-gray-800 mb-2"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                2025. október 22. 19.00
              </p>
              <p 
                className="text-base font-light text-gray-700"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {language === 'HU' 
                  ? 'Helyszín: Science Park – Design Campus, Győr, Töltésszer u. 13.\nA kiállítást 1 napos szakmai konferencia kíséri.'
                  : 'Location: Science Park – Design Campus, Győr, Töltésszer u. 13.\nThe exhibition is accompanied by a 1-day professional conference.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BelowFoldInfo;
