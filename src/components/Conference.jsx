import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Conference = () => {
  const { t, language } = useLanguage();

  // Conference speakers data - you can expand this with actual speaker information
  const speakers = [
    { name: "Mateusz Anna", image: "Mateusz_Anna2_static.webp", topic: language === 'HU' ? 'Tipográfia és branding' : 'Typography and Branding' },
    { name: "Misztarka Eszter", image: "Misztarka_Eszter2_static.webp", topic: language === 'HU' ? 'Digitális tipográfia' : 'Digital Typography' },
    { name: "Nagy Dorottya", image: "nagydorottya2_static.webp", topic: language === 'HU' ? 'Tipográfia története' : 'History of Typography' },
    { name: "Naske Laci", image: "Naske_Laci2_static.webp", topic: language === 'HU' ? 'Jövő a tipográfiában' : 'Future of Typography' },
    { name: "Oszi", image: "Oszi2_static.webp", topic: language === 'HU' ? 'Kreatív tipográfia' : 'Creative Typography' },
    { name: "Petrucz Ágnes", image: "Petrucz_Agnes2_static.webp", topic: language === 'HU' ? 'Tipográfia és művészet' : 'Typography and Art' }
  ];

  return (
    <section id="conference" className="py-16 bg-gray-50 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto px-8">
          <h2 
            className="text-4xl md:text-6xl font-bold text-center text-black mb-16"
            style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
          >
            {t.navigation.conference}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {speakers.map((speaker, index) => (
              <div key={index} className="text-center">
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-4">
                  <img
                    src={`/images/${speaker.image}`}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 
                  className="text-sm font-semibold text-gray-800 mb-1"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {speaker.name}
                </h3>
                <p 
                  className="text-xs text-gray-600"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  {speaker.topic}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p 
              className="text-lg font-light text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {language === 'HU' 
                ? 'A konferencia keretében a tipográfia legkiválóbb szakértői osztják meg tapasztalataikat és betekintést nyújtanak a szakma jövőjébe.'
                : 'Within the framework of the conference, the most outstanding experts in typography share their experiences and provide insight into the future of the profession.'
              }
            </p>
            <div className="bg-white rounded-lg p-6 inline-block">
              <p 
                className="text-base font-medium text-gray-800"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {language === 'HU' 
                  ? 'Konferencia időpontja: 2025. október 23.'
                  : 'Conference date: October 23, 2025'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conference;
