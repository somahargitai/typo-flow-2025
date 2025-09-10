import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Jury = () => {
  const { t, language } = useLanguage();

  // Jury members data based on the design
  const juryMembers = [
    { name: "BALLA DÓRA", image: "Balla_D2.webp", role: "tervezőgrafikus", description: "Experienced graphic designer specializing in typography and visual identity." },
    { name: "CUBA GERGŐ", image: "Cuba_Gergo2_static.webp", role: "tervezőgrafikus", description: "Creative director with expertise in brand design and digital media." },
    { name: "HALASI ZOLTÁN", image: "Halasi_Zoltan2_static.webp", role: "tervezőgrafikus", description: "Senior designer focused on editorial design and print media." },
    { name: "KŐRÖS JÁNOS", image: "Koros_Janos2_static.webp", role: "tervezőgrafikus", description: "Innovative designer working at the intersection of art and technology." },
    { name: "NASKE LÁSZLÓ", image: "Naske_Laci2_static.webp", role: "betűtervező", description: "Type designer and font specialist with international recognition." },
    { name: "TÁBORI-SIMON JOSÉ", image: "Jose3_static.webp", role: "tervezőgrafikus", description: "Multidisciplinary designer with expertise in visual communication." },
    { name: "MATEUSZ MACHALSKI", image: "Machalski2_static.webp", role: "tervezőgrafikus, zsűrielnök", description: "Jury president and leading figure in contemporary graphic design." },
    { name: "BOSKOVITZ OSZKÁR", image: "Oszi2_static.webp", role: "tervezőgrafikus, tipográfus", description: "Typography expert and design educator with decades of experience." },
    { name: "FARKAS ANNA", image: "Farkasanna2_static.webp", role: "tervezőgrafikus", description: "Creative professional specializing in book design and layout." },
    { name: "KASZANYI NÓRA", image: "kaszanyi_nora2_static.webp", role: "tervezőgrafikus", description: "Visual designer with focus on sustainable and ethical design practices." },
    { name: "NAGY DOROTTYA", image: "nagydorottya2_static.webp", role: "tervezőgrafikus", description: "Emerging designer exploring new forms of digital typography." },
    { name: "SERFŐZŐ PÉTER", image: "Sese2_static.webp", role: "brandstratéga", description: "Brand strategist helping companies develop their visual identity." },
    { name: "SZABÓ ANDREA", image: "Szabo_Andrea2_static.webp", role: "tervezőgrafikus", description: "Experienced designer with expertise in corporate identity and branding." }
  ];

  return (
    <section id="jury" className="py-0 bg-blue-600">
      <div className="w-full">

        
        {/* Two Column Layout - Each column has photo-text pairs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="space-y-0">
            {/* Section Title */}
            <div className="w-full bg-blue-600 flex items-center justify-center" style={{ height: '25vw' }}>
              <h2 
                className="font-bold text-white uppercase tracking-wide"
                style={{ 
                  fontFamily: 'Big Shoulders Display, sans-serif',
                  fontSize: 'clamp(4rem, 12vw, 20rem)'
                }}
              >
                ZSŰRI
              </h2>
            </div>


            {juryMembers.slice(0, 7).map((member, index) => (
              <div key={index} className="relative group flex">
                {/* Photo */}
                <div className="w-1/2 aspect-square overflow-hidden">
                  <img
                    src={`/images/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Box */}
                <div className="w-1/2 bg-blue-600 flex flex-col justify-center p-6 aspect-square">
                  <h3 
                    className="text-white text-lg md:text-xl font-bold uppercase tracking-wide mb-2"
                    style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-white text-sm md:text-base font-medium mb-3"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {member.role}
                  </p>
                  {/* Decorative lines */}
                  <div className="flex space-x-1">
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>
                  </div>
                </div>
                
                {/* Hover Overlay - Covers both photo and text box */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#ff5251' }}>
                  <h3 
                    className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide mb-3"
                    style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-white text-sm md:text-base font-medium mb-4"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {member.role}
                  </p>
                  <p 
                    className="text-white text-sm md:text-base font-light leading-relaxed"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {member.description}
                  </p>
                  {/* Decorative lines */}
                  <div className="flex space-x-1 mt-4">
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {juryMembers.slice(7).map((member, index) => (
              <div key={index} className="relative group flex">
                {/* Photo */}
                <div className="w-1/2 aspect-square overflow-hidden">
                  <img
                    src={`/images/${member.image}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Text Box */}
                <div className="w-1/2 bg-blue-600 flex flex-col justify-center p-6 aspect-square">
                  <h3 
                    className="text-white text-lg md:text-xl font-bold uppercase tracking-wide mb-2"
                    style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-white text-sm md:text-base font-medium mb-3"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {member.role}
                  </p>
                  {/* Decorative lines */}
                  <div className="flex space-x-1">
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>
                    <div className="w-4 h-0.5 bg-white"></div>
                  </div>
                </div>
                
                {/* Hover Overlay - Covers both photo and text box */}
                <div className="absolute inset-0 flex flex-col justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#ff5251' }}>
                  <h3 
                    className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide mb-3"
                    style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
                  >
                    {member.name}
                  </h3>
                  <p 
                    className="text-white text-sm md:text-base font-medium mb-4"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {member.role}
                  </p>
                  <p 
                    className="text-white text-sm md:text-base font-light leading-relaxed"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {member.description}
                  </p>
                  {/* Decorative lines */}
                  <div className="flex space-x-1 mt-4">
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jury;