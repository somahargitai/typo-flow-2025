import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Jury = () => {
  const { t, language } = useLanguage();

  // Jury members data - you can expand this with actual jury member information
  const juryMembers = [
    { name: "Balla D.", image: "Balla_D2.webp", role: language === 'HU' ? 'Tipográfus' : 'Typography Designer' },
    { name: "Cuba Gergő", image: "Cuba_Gergo2_static.webp", role: language === 'HU' ? 'Grafikus tervező' : 'Graphic Designer' },
    { name: "Farkas Anna", image: "Farkasanna2_static.webp", role: language === 'HU' ? 'Tipográfus' : 'Typography Designer' },
    { name: "Gal Krisztián", image: "Gal_Krisz4_static.webp", role: language === 'HU' ? 'Grafikus tervező' : 'Graphic Designer' },
    { name: "Halasi Zoltán", image: "Halasi_Zoltan2_static.webp", role: language === 'HU' ? 'Tipográfus' : 'Typography Designer' },
    { name: "Jose", image: "Jose3_static.webp", role: language === 'HU' ? 'Grafikus tervező' : 'Graphic Designer' }
  ];

  return (
    <section id="jury" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center text-black mb-16"
            style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
          >
            {t.navigation.jury}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {juryMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <img
                    src={`/images/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 
                  className="text-sm font-semibold text-gray-800 mb-1"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-xs text-gray-600"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p 
              className="text-lg font-light text-gray-700 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {language === 'HU' 
                ? 'A zsűri tagjai a tipográfia területén elismert szakemberek, akik a pályázatok értékelésében vesznek részt.'
                : 'The jury members are recognized professionals in the field of typography who participate in evaluating the applications.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jury;
