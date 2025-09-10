import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ImpressumFooter = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p 
              className="text-sm font-light opacity-80 mb-4"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t.footer.copyright}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                {language === 'HU' ? 'SZERVEZŐK' : 'ORGANIZERS'}
              </h3>
              <p 
                className="text-sm font-light opacity-80 mb-2"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {language === 'HU' 
                  ? 'Széchenyi István Egyetem\nDesign Campus'
                  : 'Széchenyi István University\nDesign Campus'
                }
              </p>
              <p 
                className="text-sm font-light opacity-80"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                Győr, Töltésszer u. 13.
              </p>
            </div>
            
            <div>
              <h3 
                className="text-lg font-semibold mb-4"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                {language === 'HU' ? 'KAPCSOLAT' : 'CONTACT'}
              </h3>
              <p 
                className="text-sm font-light opacity-80 mb-2"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                info@typoflow.hu
              </p>
              <p 
                className="text-sm font-light opacity-80"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                +36 96 503-400
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p 
              className="text-xs font-light opacity-60"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {language === 'HU' 
                ? 'Minden jog fenntartva. A weboldal tartalma szerzői jogi védelem alatt áll.'
                : 'All rights reserved. The content of this website is protected by copyright.'
              }
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ImpressumFooter;
