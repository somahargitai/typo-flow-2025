import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { X } from 'lucide-react'

const Conference = () => {
  const { t, language } = useLanguage()
  const [openOverlay, setOpenOverlay] = useState(null)

  const handleTileTap = index => {
    if (openOverlay === index) {
      setOpenOverlay(null) // Close if already open
    } else {
      setOpenOverlay(index) // Open this one and close others
    }
  }

  /* CONFERENCE PRESENTATIONS */
  const conference = [
    {
      firstName: 'GÁL',
      lastName: 'KRISZTIÁN',
      image: 'Gal_Krisz4_static.webp',
      role_hu: 'képzőművész, tervezőgrafikus',
      role_en: `visual artistm graphic designer`,
      presentationTitle_hu: 'SOR- ÉS SZENTSÉGTÖRÉS',
      presentationTitle_en: 'BREAKING THE LINE AND THE CODE',
      presentationTime: '10:00',
      description_hu: `1998-ban alapította stúdióját. Számos arculat, zenei album és kulturális plakát
tervezője. Mellette készíti autonóm alkotásait, főként a kísérleti grafika és tipográfia,
kollázs területein. Felfogásában a konstruktív grafikai szemléletet ütközteti egy
szabadabb, expresszívebb grafikai világgal. Évek óta tanít a Budapesti Metropolitan
Egyetemen tervezőgrafikát, kísérleti grafikát. A Bükki Művésztelep és az Opla
művészeti projekt egyik alapítója. Aktív tagja a Magyar Plakát Társaságnak.
Rendszeresen szerepel hazai és nemzetközi kiállításokon, önálló kiállításain
általában tematikus sorozatait mutatja be.`,
      description_en: `He founded his studio in 1998 and has since designed numerous visual identities, music albums, and cultural posters. Alongside this, he creates autonomous works, mainly in the fields of experimental graphics, typography, and collage. His approach confronts a 
constructive graphic mindset with a freer, more expressive visual world. For many years, he has been teaching graphic design and experimental graphics at the Budapest Metropolitan University. He is a co-founder of the Bükk Art Colony and the Opla art project, 
and an active member of the Hungarian Poster Association. He regularly exhibits both in Hungary and internationally, with his solo shows typically presenting thematic series.`,
    },
    {
      firstName: 'PETRUCZ',
      lastName: 'ÁGNES',
      image: 'Petrucz_Agnes2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu:
        'FOLYAMATOS BETŰK - SZABÁLYKÖVETÉS, VÁLTOZÁS ÉS ESETLEGESSÉG A GENERATÍV TIPOGRÁFIÁBAN',
      presentationTitle_en:
        'CONTINUOUS TYPES – RULE-FOLLOWING, CHANGE, AND RANDOMNESS IN GENERATIVE TYPOGRAPHY ',
      presentationTime: '10:45',
      description_hu: `Munkássága az újmédia-művészet, adatvezérelt tervezés és kreatív kódolás metszéspontjában
helyezkedik el, különös hangsúlyt fektetve az adatvizualizáció és generatív
rendszerek esztétikai és konceptuális lehetőségeire. Elméleti és vizuáliskutatásai többek
között a dataizmus, a poszt-digitális kultúra, valamint az ember-gép közötti alternatív
interakciók témáit járják körül. Munkái megjelentek számos hazai és nemzetközi
kiállításon, többek között az Ars Electronica Fesztiválon (Linz, Ausztria), a London Design
Weeken, valamint Dél-Koreában, Indonéziában és Cipruson. Szakmai elismerései között
szerepel a Tipozóna hallgatói díj (2024), valamint a Moholy-Nagy Művészeti Egyetemen
kétszer elnyert Stefan Lengyel Kiválósági Ösztöndíj (2023/2024).`,
      description_en: `His practice lies at the intersection of new media art, data-driven design, and creative coding, with a particular focus on the aesthetic and conceptual possibilities of data visualization and generative systems. His theoretical and visual research explores themes such as dataism, post-digital culture, and alternative forms of human–machine 
interaction. His works have been showcased at numerous national and international exhibitions, including Ars Electronica Festival (Linz, Austria), London Design Week, as well as in South Korea, Indonesia, and Cyprus. His professional recognition includes the Tipozóna Student Award (2024) and the Stefan Lengyel Excellence Scholarship, which he received twice (2023/2024) at the Moholy-Nagy University of Art and Design.`,
    },
    {
      firstName: 'POLGÁRDI',
      lastName: 'ÁKOS',
      image: 'Polgardi_jav_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu: 'A KÖZLEKEDÉSI MÚZEUM BETŰCSALÁDJA',
      presentationTitle_en:
        'THE TYPEFACE FAMILY OF THE HUNGARIAN MUSEUM OF SCIENCE, TECHNOLOGY AND TRANSPORT',
      presentationTime: '11:30',
      description_hu: `A SUBMACHINE tervezőgrafikai kollektíva egyik fele, a Magyar Könyvtervezés díj
alapítója. Soma és Léna édesapja, Zita férje.`,
      description_en: `One half of the graphic design collective SUBMACHINE and founder 
of the Hungarian Book Design Award. Father of Soma and Léna, husband of Zita.`,
    },
    {
      firstName: 'ANNA WIELUŃSKA - MATEUSZ MACHALSKI',
      lastName: '',
      image: 'Mateusz_Anna2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle:
        'CONNECTING THE DOTS. TYPOTEKA – A LENGYEL TIPOGRÁFIA TÖRTÉNETE',
      presentationTitle_en:
        'CONNECTING THE DOTS. TYPOTEKA – HISTORY OF POLISH TYPOGRAPHY',
      presentationTime: '14:00',
      description_hu: `Anna Tipográfus, tervezőgrafikus és a Varsói Képzőművészeti Akadémia tanára. Munkája
főként a tipográfia és annak a vizuális kommunikációra gyakorolt szerepének vizsgálatára
irányul. Tervezői tevékenysége mellett előadásokat tart, és a lengyel tipográfia történetét
kutatja.
Mateusz díjnyertes grafikusművész, munkássága fókuszában a tipográfia és a vizuális
kommunikáció áll. A Varsói Képzőművészeti Akadémia professzora és rektor helyettese.
Tervezői munkája mellett kutatásokban vesz részt, előadásokat tart, kiállítások kurátora
és aktívan népszerűsíti a lengyel tervezőgrafikát nemzetközi színtéren.`,
      description_en: `Anna typographer, graphic designer, and lecturer at the Academy of Fine Arts in Warsaw. Her work focuses on typography and its influence on visual communication. In addition to her design work, she lectures and conducts research on the history of Polish typography.

Mateusz an award-winning designer specializing in typography and visual communication, he is a professor at the Academy of Fine Arts in Warsaw and the Rector's Representative. In addition to his design work, he is involved in research, lectures, exhibition curation, and the promotion of Polish design worldwide.`,
    },
    {
      firstName: 'UGLY BUT USELESS',
      lastName: '',
      image: 'UBU2_static.webp',
      role_hu: 'Asztalos Ádám, Batke Bendegúz',
      role_en: 'Ádám Asztalos, Bendegúz Batke',
      presentationTitle_hu: 'SORJA',
      presentationTitle_en: 'BURR',
      presentationTime: '15:00',
      description_hu: `A fáramászás és a dunába való szikladobálás mellett a csúnya betűk iránti vonzalmunk
hozott össze minket a MOME mesterképzésén 2018-ban. Egyetem után különöző helyeken
dolgoztunk, 2024-ben pedig végérvényesen elköteleződtünk a rusnya betűk és az otromba
grafikák mellett. Munkáinkat a tipográfia felőli megközelítés határozza meg, legyen az akár
fesztivál branding, étterem arculat vagy csupán egy logó. A kommmunikációnk elengedhetetlen
összetevője az önirónia és a humor. Szóval ne lepődjön meg senki, ha a projektjeinket
vizsgálva az éktelen betűformák és förtelmes színek mellett, eddig ismeretlen
egérfajok neveivel vagy a kőolajiparban használt kifejezésekkel is találkozna!`,
      description_en: `Besides climbing trees and throwing rocks into the Danube, it was our love for ugly letters that first brought us together during our MA at MOME back in 2018. After 
graduation, we went our separate ways work-wise, but by 2024 we had fully pledged allegiance to grotesque type and awkward graphics. Typography is always at the core of what we do—whether it's branding a festival, shaping the identity of a restaurant, or designing a simple logo. And since self-irony and humor are key to how we communicate, don't be alarmed if, while exploring our projects, you bump into not only monstrous letterforms and atrocious colors, but also the names of obscure mouse species or random jargon borrowed from the oil industry!`,
    },
    {
      firstName: 'ESZTER',
      lastName: 'MISZTARKA',
      image: 'Misztarka_Eszter2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu: 'EZ CSAK EGY BETŰ',
      presentationTitle_en: "IT'S JUST A TYPE",
      presentationTime: '15:45',
      description_hu: `A Képzőművészeti Egyetemen végzett díjnyertes szabadúszó tervezőgrafikus,
társalapítója a szintén díjnyertes Classmate Stúdiónak. Közel tíz évet töltött hazai kreatív
stúdiókban, ahol elsősorban elegáns és minimalista arculati projekteken, csomagolás- és
kiadványtervezésen dolgozott. Elhivatottja a koncepcionális és strukturális tervezésnek, de
nem mond nemet a kísérleti grafikára és a véletlenek folyamán kialakuló grafikai elemekre
sem, hiszen szerinte ezek teszik igazán színessé és izgalmassá ezt a szakmát. Az évek
során munkái számos díjat nyertek: Red Dot Design Award, Indigo Design Award, RGB
Kreatív Design Díj és Aranyrajzszög Díj – Év grafikai Stúdiója kategória
(Classmate Studio).`,
      description_en: `An award-winning freelance graphic designer and graduate of the Hungarian University of Fine Arts, she is also the co-founder of the likewise award-winning Classmate Studio. She spent nearly a decade working at Hungarian creative studios, primarily on elegant and minimalist identity projects, packaging, and publication design. She is dedicated to 
conceptual and structural design, yet she also embraces experimental graphics and the visual elements born of chance—believing these are what make the profession truly colorful and exciting. Over the years, her work has been recognized with numerous awards, including the Red Dot Design Award, Indigo Design Award, RGB Creative Design Award, and the Golden Drawing Pin Award – Graphic Design Studio of the Year (Classmate Studio).`,
    },
    {
      firstName: 'REBEKA',
      lastName: 'OROSZ',
      image: 'Rebeka_Orosz2_static.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      presentationTitle_hu: 'RECYCLING, REVIVING',
      presentationTitle_en: 'RECYCLING, REVIVING',
      presentationTime: '16:30',
      description_hu: `Orosz Rebeka tervezőgrafikus, tipográfus, okleves betűtervező. A Soproni Egyetem
Tervezőgrafika szakán végezte az alapképzést 2019-ben, majd a Moholy-Nagy Művészeti
Egyetem tervezőgrafika szakán szerezte meg a mesterképesítést 2022-ben.
A mesterképzés alatt és azt követően főleg arculattervezés területén szerzett jelentős
tapasztalatokat. A betűtervezés az alapszak óta foglalkoztatta, végül az elmúlt évben
jelentkezett a hágai Royal Academy of Art (KABK) TypeMedia nevű mesterképzésére, ahol
idén átvette a betűtervező diplomáját. Jelenleg szabadúszóként dolgozik.`,
      description_en: `Rebeka Orosz is a graphic designer, typographer, and certified type designer. She earned her BA in Graphic Design from the University of Sopron in 2019, followed by an MA in Graphic Design from Moholy-Nagy University of Art and Design in 2022. During and after her master's studies, she gained significant experience in visual identity design. 
Her interest in type design began during her BA years, and last year she was admitted to the TypeMedia master's program at the Royal Academy of Art (KABK) in The Hague, where she recently graduated as a type designer. She is currently working as a freelancer.`,
    },
  ]

  return (
    <section id="conference" className="py-0 bg-white">
      <div className="w-full">
        {/* Conference Title Section - Separate from grid */}
        <div className="w-full flex flex-col items-center justify-center py-16 px-8">
          <h1
            className="font-bold uppercase tracking-wide text-center mb-4"
            style={{
              fontFamily: 'Big Shoulders Display, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 12rem)',
              color: '#ff5251',
            }}
          >
            {language === 'hu' ? 'TYPOFLOW KONFERENCIA' : 'TYPOFLOW CONFERENCE'}
          </h1>
          <p
            className=" text-center mb-8"
            style={{
              fontFamily: 'Big Shoulders Display, sans-serif',
              fontSize: 'clamp(1.5rem, 3vw, 3rem)',
              color: '#ff5251',
            }}
          >
            {language === 'hu' ? '2025. október 22.' : '2025. October 22.'}
          </p>
          <div className="text-center">
            <p
              className="font-normal"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                color: '#004bff',
              }}
            >
              {language === 'hu'
                ? 'Helyszín: Széchenyi Egyetem, Menedzsment Campus'
                : 'Location: Széchenyi University, Management Campus'}
            </p>
            <p
              className="font-normal"
              style={{
                fontFamily: 'Geist, sans-serif',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                color: '#004bff',
              }}
            >
              Győr, Egyetem tér 1.
            </p>
          </div>
        </div>

        {/* Conference Grid - No title tile, only presentations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-16 py-20">
          {/* Left Column */}
          <div className="space-y-0">
            {conference.slice(0, 4).map((speaker, index) => (
              <div key={index} className="relative group flex my-8">
                <PhotoOfTile
                  image={speaker.image}
                  firstName={speaker.firstName}
                  lastName={speaker.lastName}
                />
                <TextOfTile
                  firstName={speaker.firstName}
                  lastName={speaker.lastName}
                  role={language === 'hu' ? speaker.role_hu : speaker.role_en}
                  presentationTitle={
                    language === 'hu'
                      ? speaker.presentationTitle_hu
                      : speaker.presentationTitle_en
                  }
                  presentationTime={speaker.presentationTime}
                  description={
                    language === 'hu'
                      ? speaker.description_hu
                      : speaker.description_en
                  }
                  onTap={() => handleTileTap(index)}
                />
                <HoverOverlay
                  firstName={speaker.firstName}
                  lastName={speaker.lastName}
                  role={language === 'hu' ? speaker.role_hu : speaker.role_en}
                  presentationTitle={
                    language === 'hu'
                      ? speaker.presentationTitle_hu
                      : speaker.presentationTitle_en
                  }
                  presentationTime={speaker.presentationTime}
                  description={
                    language === 'hu'
                      ? speaker.description_hu
                      : speaker.description_en
                  }
                  isOpen={openOverlay === index}
                  onTap={() => handleTileTap(index)}
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {conference.slice(4).map((speaker, index) => (
              <div key={index} className="relative group flex my-8">
                <PhotoOfTile
                  image={speaker.image}
                  firstName={speaker.firstName}
                  lastName={speaker.lastName}
                />
                <TextOfTile
                  firstName={speaker.firstName}
                  lastName={speaker.lastName}
                  role={language === 'hu' ? speaker.role_hu : speaker.role_en}
                  presentationTitle={
                    language === 'hu'
                      ? speaker.presentationTitle_hu
                      : speaker.presentationTitle_en
                  }
                  presentationTime={speaker.presentationTime}
                  description={
                    language === 'hu'
                      ? speaker.description_hu
                      : speaker.description_en
                  }
                  onTap={() => handleTileTap(index + 4)}
                />
                <HoverOverlay
                  firstName={speaker.firstName}
                  lastName={speaker.lastName}
                  role={language === 'hu' ? speaker.role_hu : speaker.role_en}
                  presentationTitle={
                    language === 'hu'
                      ? speaker.presentationTitle_hu
                      : speaker.presentationTitle_en
                  }
                  presentationTime={speaker.presentationTime}
                  description={
                    language === 'hu'
                      ? speaker.description_hu
                      : speaker.description_en
                  }
                  isOpen={openOverlay === index + 4}
                  onTap={() => handleTileTap(index + 4)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* PHOTO OF TILE */
const PhotoOfTile = ({ image, firstName, lastName }) => {
  const { language } = useLanguage()
  return (
    <div className="w-1/2 aspect-square overflow-hidden">
      <img
        src={`/images/${image}`}
        alt={
          language === 'hu'
            ? `${lastName} ${firstName}`
            : `${firstName} ${lastName}`
        }
        className="w-full h-full object-cover"
      />
    </div>
  )
}

/* TEXT OF TILE */
const TextOfTile = ({
  firstName,
  lastName,
  role,
  presentationTitle,
  presentationTime,
  description,
  onTap,
}) => {
  const { language } = useLanguage()
  return (
    <div
      className="w-1/2 flex flex-col justify-start p-6 aspect-square cursor-pointer md:cursor-default"
      style={{ backgroundColor: 'white' }}
      onClick={onTap}
    >
      <h3
        className="text-black text-xl md:text-2xl xl:text-3xl font-bold uppercase tracking-wide mb-3"
        style={{
          fontFamily: 'Big Shoulders Display, sans-serif',
          color: '#ff5251',
        }}
      >
        {firstName === 'MATEUSZ' && lastName === 'MACHALSKI' ? (
          <>
            {firstName}
            <br />
            {lastName}
          </>
        ) : language === 'HU' ? (
          <>
            {lastName}
            <br />
            {firstName}
          </>
        ) : (
          <>
            {firstName}
            <br />
            {lastName}
          </>
        )}
      </h3>
      <p
        className="text-black text-sm md:text-base font-normal mb-2"
        style={{
          fontFamily: 'Geist, sans-serif',
          color: '#004bff',
        }}
      >
        {role}
      </p>
      {/* Decorative lines */}
      <img
        src="/lines-button-blue.svg"
        alt="Decorative lines"
        className="w-8 h-8 md:w-16 md:h-16"
      />
      <p
        className="text-black text-sm md:text-base font-bold mb-2"
        style={{
          fontFamily: 'Geist, sans-serif',
          color: '#ff5251',
        }}
      >
        {presentationTitle}
      </p>
      <p
        className="text-black text-sm md:text-base font-normal mb-0"
        style={{
          fontFamily: 'Geist, sans-serif',
          color: '#004bff',
        }}
      >
        Előadás időpontja: {presentationTime}
      </p>
    </div>
  )
}

/* HOVER OVERLAY */
const HoverOverlay = ({
  firstName,
  lastName,
  role,
  presentationTitle,
  presentationTime,
  description,
  isOpen,
  onTap,
}) => {
  const { language } = useLanguage()
  return (
    <>
      {/* Desktop hover overlay */}
      <div
        className={`hidden xl:flex absolute inset-0 flex-col justify-start px-8 pt-12 transition-opacity duration-300 cursor-default ${
          isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        style={{ backgroundColor: 'white' }}
        onClick={onTap}
      >
        <h3
          className="text-white text-3xl font-bold uppercase tracking-wide mb-4"
          style={{
            fontFamily: 'Big Shoulders Display, sans-serif',
            color: '#004bff',
          }}
        >
          {firstName === 'MATEUSZ' && lastName === 'MACHALSKI' ? (
            <>
              {firstName} {lastName}
            </>
          ) : language === 'HU' ? (
            <>
              {lastName} {firstName}
            </>
          ) : (
            <>
              {firstName} {lastName}
            </>
          )}
        </h3>

        <p
          className=" text-base font-normal leading-relaxed"
          style={{
            fontFamily: 'Geist, sans-serif',
            color: '#004bff',
          }}
        >
          {description}
        </p>
      </div>

      {/* Mobile and iPad fullscreen modal */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: '#ff5251' }}
        >
          {/* Close button */}
          <button
            onClick={onTap}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-6 pt-20 pb-8">
            <h3
              className="text-white text-2xl font-bold uppercase tracking-wide mb-4"
              style={{
                fontFamily: 'Big Shoulders Display, sans-serif',
                color: '#ff5251',
              }}
            >
              {firstName === 'MATEUSZ' && lastName === 'MACHALSKI' ? (
                <>
                  {firstName} {lastName}
                </>
              ) : language === 'HU' ? (
                <>
                  {lastName} {firstName}
                </>
              ) : (
                <>
                  {firstName} {lastName}
                </>
              )}
            </h3>

            <p
              className="text-white text-base font-normal leading-relaxed"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Conference
