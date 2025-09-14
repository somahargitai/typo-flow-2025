import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { X } from 'lucide-react'

const Jury = () => {
  const { language } = useLanguage()
  const [openOverlay, setOpenOverlay] = useState(null)

  const handleTileTap = index => {
    if (openOverlay === index) {
      setOpenOverlay(null) // Close if already open
    } else {
      setOpenOverlay(index) // Open this one and close others
    }
  }

  /* JURY MEMBERS */
  const jury = [
    {
      firstName: 'DÓRA',
      lastName: 'BALLA',
      image: 'Balla_D2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Balla Dóra Ferenczy Noémi-díjas grafikusművész, habilitált egyetemi
docens. Hazai és nemzetközi kiállítások aktív résztvevője, szakmai
események, kiállítások szervezője. Elsődleges kutatási területe a kortárs
tervezőgrafika története és elmélete, a grafikai tervezés experimentális
vonatkozásai és határterületei. Saját kiadású, autonóm művészeti és
tipográfiai projekteken alapuló művészkönyvek és grafika szakelméleti
könyvek szerzője. Mint grafikus tervező, elsődlegesen a kulturális szféra
megrendelői számára dolgozik, kiemelten a könyv- és kiadványtervezés
területén. Az AGI (Alliance Graphique Internationale) tagja.`,
      description_en: `Dóra Balla, Ferenczy Noémi Award-winning graphic artist, habilitated 
associate professor. An active participant in national and international exhibitions, as well as an organizer of professional events and exhibitions. Her primary research focuses on the history and theory of contemporary graphic design, along with the experimental aspects and border areas 
of design practice. She is the author of self-published artists’ books and graphic design theory books based on autonomous artistic and typographic projects. As a graphic designer, she primarily works for clients in the cultural sector, with a particular emphasis on book and publication design. She is a member of the AGI (Alliance Graphique Internationale).
`,
    },
    {
      firstName: 'OSZKÁR',
      lastName: 'BOSKOVITZ',
      image: 'Oszi2.webp',
      role_hu: 'tervezőgrafikus, tipográfus',
      role_en: 'graphic designer, typographer',
      description_hu: `A professzionális betűtervezésben és annak oktatásában látja a hazai
betűtervezés felélesztését. ,,Next’’ betűtípus sorozatával, elfeledett
magyar tervezők betűtípusait gondolja újra és teszi elérhetővé
folyamatosan. Oktat, témavezet művészeti egyetemeken mint: PTE MK,
METU, MKE, MOME. Betűtervezői munkáiért Magyar Tervezőgrafikai
Biennálé Díjat, Magyar Formatervezési Díjat, Pécs Innovációs Díjat és
Arany Rajzszög Díjat kapott.`,
      description_en: `He sees the revival of Hungarian type design in professional typeface creation and its teaching. Through his "Next" typeface series, he 
reinterprets and continuously makes available the forgotten fonts 
of Hungarian designers. He teaches and supervises theses at art 
universities such as PTE MK, METU, MKE, and MOME. For his type design work, he has received the Hungarian Graphic Design Biennial Award, 
the Hungarian Design Award, the Pécs Innovation Award, 
and the Golden Drawing Pin Award.`,
    },
    {
      firstName: 'GERGŐ',
      lastName: 'CUBA',
      image: 'Cuba_Gergo2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `15+ éve dolgozom szabadúszó tervezőgrafikusként, közel 5 éve egy brit
fintech platform kreatív vezetője vagyok. Munkám fókuszában az
arculattervezés és digitális megoldások mellett a tipográfia áll — könyvés
borítótervezőként is dolgozom, emellett tipográfiai workshopokat
tartok. A FontFront tipográfiai pályázat és kiállítás egyik újraalapítója és
főszervezője vagyok. Több mint 10 éve tanítok a felsőoktatásban; az
arculattervezés mellett többek között tipográfiát és kiadványszerkesztést
is. Munkáimat hazai és nemzetközi díjakkal ismerték el, köztük egy Red
Dot Design Awarddal.`,
      description_en: `I have been working as a freelance graphic designer for over 15 years and have served as the creative director of a UK-based fintech platform for nearly 5 years. In addition to brand identity design and digital solutions, my work focuses strongly on typography — I also work as a book and cover designer, and I lead typography workshops. I am a co-founder and chief organizer of FontFront, a typography competition and exhibition. 
I have been teaching in higher education for more than 10 years; alongside brand identity design, I also teach typography and publication design, among other subjects. My work has been recognized with national and international awards, including a Red Dot Design Award.`,
    },
    {
      firstName: 'ANNA',
      lastName: 'FARKAS',
      image: 'Farkasanna2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Red Dot: Grand Prix-, Ferenczy Noémi-, valamint többszörös Red Dot
Winner-, Graphis-, CommArts-, TDC-, MFD- és Aranyrajszög-díjas
tervezőgrafikus. A Magyar Képzőművészeti Egyetem oktatója. Több mint
25 éve alapította saját stúdióját Anagraphic néven. Olyan tervezőgrafikai
munkák köthetők a nevéhez, mint az Anaptár, a Zeneakadémia arculata,
a Magvető, a Graphifest vagy a Szabó Magda 100 logói és elsősorban
kulturális intézményekkel, múzeumoknak dolgozik. Rendszeres
résztvevője hazai és nemzetközi tervezőgrafikai kiállításoknak.`,
      description_en: `Red Dot: Grand Prix, Ferenczy Noémi Award, as well as multiple Red Dot Winner, Graphis, CommArts, TDC, MFD, and Golden Drawing Pin award-winning graphic designer. She is a lecturer at the Hungarian 
University of Fine Arts. More than 25 years ago, she founded her own studio under the name Anagraphic. Her design work includes projects such as Anaptár, the visual identity of the Liszt Academy of Music, as well as logos for Magvető, Graphifest, and Szabó Magda 100. She primarily works with cultural institutions and museums. She is a regular participant in both national and international graphic design exhibitions.`,
    },

    {
      firstName: 'ZOLTÁN',
      lastName: 'HALASI',
      image: 'Halasi_Zoltan2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Ferenczy Noémi-díjas, többszörös Országos Tervezőgrafikai Biennálé és
Arany Rajzszög Díjas tervezőgrafikus, tipográfus. Szakterületei
a márkaépítés, termékarculat tervezés és az experimentális tipográfia.
Az Art Force Design kreatív igazgatója, a győri Széchenyi István Egyetem
Design Campusának docense, a Metropolitan Egyetem szaktanára,
a FontFront tipográfiai verseny alapítója.`,
      description_en: `Ferenczy Noémi Award-winning graphic designer and typographer, 
multiple recipient of the National Graphic Design Biennial and Golden Drawing Pin Awards. His areas of expertise include branding, product identity design, and experimental typography. He is the creative director of Art Force Design, an associate professor at the Design Campus 
of Széchenyi István University in Győr, a lecturer at Metropolitan 
University, and the founder of the FontFront typography competition.`,
    },
    {
      firstName: 'NÓRA',
      lastName: 'KASZANYI',
      image: 'kaszanyi_nora2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `World Brand Design Society & DNA Paris díjas, többszörös
ArtHungry-díjas tervezőgrafikus, 2020-ban elnyerte az Emberi
Erőforrások Minisztériumának fődíját a XXII. Tervezőgrafikai Biennálén.
Munkái több nemzetközi könyvben és magazinban is helyet kaptak,
úgy, mint a Novum, IdN, BranD, It's Nice That, Dieline magazin.
2018-ban szerezte meg mesterdiplomáját tervezőgrafika szakon
a Moholy-Nagy Művészeti Egyetemen, ahol diplomamunkáját ‘Rektori
Díjban’ részesítették. Jelenleg szabadúszó grafikusként dolgozik, főként
vizuális arculatok, kiadványok és csomagolások tervezésével foglalkozik.`,
      description_en: `World Brand Design Society and DNA Paris award-winning graphic 
designer, multiple ArtHungry Award recipient, and winner of the Grand Prize of the Ministry of Human Capacities at the 22nd Graphic Design Biennial in 2020. Her work has been featured in several international books and magazines, including Novum, IdN, BranD, It’s Nice That, and Dieline magazine. She earned her master’s degree in graphic design from the Moholy-Nagy University of Art and Design in 2018, where her diploma project received the Rector’s Award. She currently works as a freelance graphic designer, focusing mainly on visual identities, publications, 
and packaging design.`,
    },
    {
      firstName: 'MATEUSZ',
      lastName: 'MACHALSKI',
      image: 'Machalski2.webp',
      role_hu: 'tervezőgrafikus, zsűrielnök',
      role_en: `graphic designer, chair of the jury`,
      description_hu: `Díjnyertes grafikusművész, munkássága fókuszában a tipográfia és
  a vizuális kommunikáció áll. A Varsói Képzőművészeti Akadémia
  professzora és rektor helyettese. Tervezői munkája mellett kutatásokban
  vesz részt, előadásokat tart, kiállítások kurátora és aktívan népszerűsíti
  a lengyel tervezőgrafikát nemzetközi színtéren.`,
      description_en: `An award-winning designer specializing in typography and visual 
communication, he is a professor at the Academy of Fine Arts in Warsaw and the Rector's Representative. In addition to his design work, he is involved in research, lectures, exhibition curation, and the promotion 
of Polish design worldwide.
`,
    },
    {
      firstName: 'JÁNOS',
      lastName: 'KŐRÖS',
      image: 'Koros_Janos2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `2004-2009, Zirc, III. Béla Gimnázium, Művészeti Szakgimnázium és
Alapfokú Művészeti Iskola - gimnázium és grafikus (OKJ) szakma.
2009-2014, Sopron, Nyugat-Magyarországi Egyetem, Alkalmazott
Művészeti intézet, tervezőgrafikus BA és MA diploma. 2014-től
jelenleg - a Halisten Stúdió tagjaként tervezőgrafikusként dolgozom.`,
      description_en: `2004–2009, Zirc – III. Béla Secondary Grammar School, Secondary School of Arts and Elementary Art School – Secondary education and Graphic Designer qualification (OKJ). 2009–2014, Sopron – University 
of West Hungary, Institute of Applied Arts – BA and MA degrees in 
Graphic Design. 2014–present – Working as a graphic designer as 
a member of Halisten Studio.`,
    },
    {
      firstName: 'DOROTTYA',
      lastName: 'NAGY',
      image: 'nagydorottya2.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Alap- és mesterdiplomámat a Moholy-Nagy Művészeti Egyetem
tervezőgrafika szakán szereztem 2021-ben és 2025-ben. Szakmai
pályafutásomat 2019-ben kezdtem a Salt Communications-nél
tervezőgrafikusként. Az állandó szabadúszó grafikai tevékenység
mellett 2025-től a NUR&MOR csapatában dolgoztam, jelenleg pedig
a MOME-n tevékenykedem tervezőként. Az egyetemen Stefan Lengyel
Kiválósági Ösztöndíj és Best of Grafika díjazott voltam, 2021-ben Red-,
2023-ban pedig Green- és Különdíjat kaptam az RGB – Kreatív Design
Award-on. 2025-ben Scroll című munkám megjelent a Slanted
Experimental Type 2.0 című kiadványban.`,
      description_en: `I obtained my bachelor's and master's degrees in graphic design from Moholy-Nagy University of Art and Design in 2021 and 2025. I started 
my professional career in 2019 as a graphic designer at Salt 
Communications. In addition to my permanent freelance graphic design work, I worked for the NUR&MOR team from 2025, and I am currently working as a designer at MOME. At university, I was awarded the Stefan Lengyel Excellence Scholarship and the Best of Grafika award, and in 2021 I received the Red Award and in 2023 the Green Award and Special Award at the RGB – Creative Design Award. In 2025, my work Scroll was published in Slanted Experimental Type 2.0.`,
    },
    {
      firstName: 'LÁSZLÓ',
      lastName: 'NASKE',
      image: 'Naske_Laci2.webp',
      role_hu: 'betűtervező',
      role_en: 'graphic designer',
      description_hu: `Laci tervezőgrafikusként főként betűfókuszú arculatokat, logókat és
letteringeket készít, betűtervezőként pedig saját betűtervei mellett több
arculati betűtípust készített. Jelenleg a tervezés mellett betűtervezést
oktat a győri Széchenyi Egyetem Design Campusán, és workshopokon.`,
      description_en: `As a graphic designer, Laci mainly creates typography-focused visual identities, logos, and letterings, while as a type designer he has developed several custom brand typefaces in addition to his own typefaces. 
Currently, alongside his design work, he also teaches type design at the Design Campus of Széchenyi University in Győr, as well as in workshops.`,
    },
    {
      firstName: 'PÉTER',
      lastName: 'SERFŐZŐ',
      image: 'Sese2.webp',
      role_hu: 'brandstratéga',
      role_en: `brand strategist`,
      description_hu: `Gyermekkoromban kreatív környezetben nőttem fel. Szüleim
a szocializmus szűkös lehetőségeiben is keresték a megoldásokat. Kora
felnőttkoromra az igény a szép vizuális környezetre csak növekedett,
ezért sodródtam a tervezőgrafikai és tipográfiai pályára. Mára ez az igény
hitté erősödött, amely hit segít abban, hogy tegyek azért, ne csak
a legszűkebb környezetem vizuális kultúrája legyen rendben, hanem az
egyre távolabbi környezetemé is. Ezt szolgáljuk csapatommal
a zwoelfben, és ezért jött létre a brandguide is, hogy erre a változásra
még nagyobb hatásunk lehessen. Talán jó úton haladunk, de van még
mit tenni…`,
      description_en: `In my childhood, I grew up in a creative environment. Even within the 
limited possibilities of socialism, my parents always looked for solutions. By the time I reached early adulthood, my need for a beautiful visual 
environment had only grown stronger, which led me to the path of 
graphic design and typography. Today, this need has become a 
conviction—one that drives me not only to nurture the visual culture of my immediate surroundings but also to improve that of the broader world around me. This is what we serve with my team at zwoelf, and it is also the reason we created brandguide: to have an even greater impact on this change. Perhaps we are on the right path, but there is still much to do…`,
    },
    {
      firstName: 'JOSÉ',
      lastName: 'TÁBORI-SIMON',
      image: 'Jose3.webp',
      role_hu: 'tervezőgrafikus',
      role_en: `graphic designer`,
      description_hu: `Magyar Formatervezési Díjas, Arany Rajzszög Díjas, többszörös Országos
Tervezőgrafikai Biennálé Díjas tervezőgrafikus művész. Elsősorban
arculattervezéssel, brandépítéssel, csomagolástervezéssel és
kiadványtervezéssel foglalkozik 1999 óta. Számos kreatív kollektíva és
projekt fűződik a nevéhez; többek között a Grotesque Design, majd
később a Simon Says Grafikai Stúdió alapítója, az ArtHungry.com
közösségi művészeti platform és a Phenom.hu online popkulturális
magazin művészeti vezetője, valamint társalapítója a kortárs művészeti
eseményeknek helyet adó Bäse – Creatív Clubhouse-nak. A TypoHungry
– Tipográfia Magyarországon a XXI. században és STANC – Kreatív
magyar gasztrocsomagolások című művészeti albumok szerkesztője.`,
      description_en: `An award-winning graphic designer and artist, recipient of the Hungarian Design Award, the Golden Drawing Pin Award, and multiple prizes at the National Graphic Design Biennale. Since 1999, he has specialized in visual identity design, branding, packaging, and publication design. He has been the driving force behind numerous creative collectives and projects; founder of Grotesque Design and later Simon Says Graphic Studio, art director of the community art platform ArtHungry.com and the online pop culture magazine Phenom.hu, as well as co-founder of Bäse – Creative Clubhouse, a venue for contemporary art events. He is also the editor of the art books TypoHungry – Typography in Hungary in the 21st Century and STANC – Creative Hungarian Food Packaging.`,
    },
    {
      firstName: 'SZABÓ',
      lastName: 'ANDREA',
      image: 'Szabo_Andrea.webp',
      role_hu: 'tervezőgrafikus',
      role_en: 'graphic designer',
      description_hu: `Ferenczy Noémi-díjas grafikusművész, a Magyar Képzőművészeti
Egyetem adjunktusa. Az elmúlt közel két évtizedes kiállító és
tervezőgrafikusi tevékenysége számos hazai és nemzetközi elismerést,
díjat, valamint meghívást hozott számára. Alkotói munkásságát finoman
kimunkált könyvek, plakátok, kulturális arculatok, autonóm alkotások
jellemzik. 2022-ben a zsűri neki ítélte az utóbbi évek kiemelkedő
tervezőgrafikai tevékenységéért járó Aranyrajzszög díjat.`,
      description_en: `Ferenczy Noémi Award-winning graphic artist and assistant professor at the Hungarian University of Fine Arts. Over the past two decades, his 
exhibitions and graphic design practice have earned him numerous 
national and international recognitions, awards, and invitations. 
His creative work is characterized by finely crafted books, posters, cultural identities, and autonomous artworks. In 2022, the jury honored him with the Golden Drawing Pin Award for his outstanding achievements in 
graphic design in recent years.`,
    },
  ]

  return (
    <section id="jury" className="py-0" style={{ backgroundColor: '#004bff' }}>
      <div className="w-full">
        {/* Two Column Layout - Each column has photo-text pairs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column */}
          <div className="space-y-0">
            {/* Section Title */}
            <div
              className="w-full flex items-center justify-center h-[35vw]
                lg:h-[25vw]"
              style={{ backgroundColor: '#004bff' }}
            >
              <h2
                className="font-bold text-white uppercase tracking-wide"
                style={{
                  fontFamily: 'Big Shoulders Display, sans-serif',
                  fontSize: 'clamp(4rem, 10vw, 20rem)',
                }}
              >
                {language === 'HU' ? 'ZSŰRI' : 'JURY'}
              </h2>
            </div>

            {/*  Left Column */}
            {jury.slice(0, 6).map((member, index) => (
              <div key={index} className="relative group flex">
                <PhotoOfTile
                  image={member.image}
                  firstName={member.firstName}
                  lastName={member.lastName}
                />
                <TextOfTile
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role_hu={member.role_hu}
                  role_en={member.role_en}
                  description={
                    language === 'hu'
                      ? member.description_hu
                      : member.description_en
                  }
                  onTap={() => handleTileTap(index)}
                />
                <HoverOverlay
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role_hu={member.role_hu}
                  role_en={member.role_en}
                  description_hu={member.description_hu}
                  description_en={member.description_en}
                  isOpen={openOverlay === index}
                  onTap={() => handleTileTap(index)}
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {jury.slice(6).map((member, index) => (
              <div key={index} className="relative group flex">
                <PhotoOfTile
                  image={member.image}
                  firstName={member.firstName}
                  lastName={member.lastName}
                />
                <TextOfTile
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role_hu={member.role_hu}
                  role_en={member.role_en}
                  description_hu={member.description_hu}
                  description_en={member.description_en}
                  onTap={() => handleTileTap(index + 6)}
                />
                <HoverOverlay
                  firstName={member.firstName}
                  lastName={member.lastName}
                  role_hu={member.role_hu}
                  role_en={member.role_en}
                  description_hu={member.description_hu}
                  description_en={member.description_en}
                  isOpen={openOverlay === index + 6}
                  onTap={() => handleTileTap(index + 6)}
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
  role_hu,
  role_en,
  description_hu,
  description_en,
  onTap,
}) => {
  const { language } = useLanguage()
  return (
    <div
      className="w-1/2 flex flex-col justify-top p-6 aspect-square
        cursor-pointer md:cursor-default"
      style={{ backgroundColor: '#004bff' }}
      onClick={onTap}
    >
      {/* Name */}
      <h3
        className="text-white text-lg md:text-xl xl:text-4xl font-semibold
          uppercase tracking-wide mb-2"
        style={{ fontFamily: 'Geist, sans-serif' }}
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
      {/* Role */}
      <p
        className="text-white text-lg md:text-2xl font-normal mb-0"
        style={{
          fontFamily: 'Geist, sans-serif',
          color: '#00caff',
        }}
      >
        {language === 'HU' ? role_hu : role_en}
      </p>
      {/* Decorative lines */}
      <div className="w-8 h-8 md:w-16 md:h-16 group/lines">
        <svg
          className="w-full h-full"
          viewBox="0 0 46.54 20.76"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <style>
              {`
                .jury-line-1, .jury-line-2, .jury-line-3 {
                  stroke: #fff !important;
                  stroke-miterlimit: 10;
                  stroke-width: 2.53px;
                  fill: none;
                  transition: all 0.3s ease;
                }
                .group\\/lines:hover .jury-line-1 {
                  animation: wave1 0.8s ease-in-out infinite;
                }
                .group\\/lines:hover .jury-line-2 {
                  animation: wave2 0.8s ease-in-out infinite 0.2s;
                }
                .group\\/lines:hover .jury-line-3 {
                  animation: wave3 0.8s ease-in-out infinite 0.4s;
                }
                @keyframes wave1 {
                  0%, 100% { transform: translateX(0) scaleX(1); }
                  25% { transform: translateX(3px) scaleX(1.1); }
                  50% { transform: translateX(6px) scaleX(1.2); }
                  75% { transform: translateX(3px) scaleX(1.1); }
                }
                @keyframes wave2 {
                  0%, 100% { transform: translateX(0) scaleX(1); }
                  25% { transform: translateX(-2px) scaleX(0.9); }
                  50% { transform: translateX(-4px) scaleX(0.8); }
                  75% { transform: translateX(-2px) scaleX(0.9); }
                }
                @keyframes wave3 {
                  0%, 100% { transform: translateX(0) scaleX(1); }
                  25% { transform: translateX(4px) scaleX(1.15); }
                  50% { transform: translateX(8px) scaleX(1.3); }
                  75% { transform: translateX(4px) scaleX(1.15); }
                }
              `}
            </style>
          </defs>
          <line 
            className="jury-line-1" 
            y1="1.51" 
            x2="36.99" 
            y2="1.51" 
            stroke="#fff"
            strokeWidth="2.53"
            fill="none"
          />
          <line 
            className="jury-line-2" 
            y1="18.48" 
            x2="27.68" 
            y2="18.48" 
            stroke="#fff"
            strokeWidth="2.53"
            fill="none"
          />
          <line 
            className="jury-line-3" 
            y1="10" 
            x2="44.85" 
            y2="10" 
            stroke="#fff"
            strokeWidth="2.53"
            fill="none"
          />
        </svg>
      </div>
    </div>
  )
}

/* HOVER OVERLAY */
const HoverOverlay = ({
  firstName,
  lastName,
  role_hu,
  role_en,
  description_hu,
  description_en,
  isOpen,
  onTap,
}) => {
  const { language } = useLanguage()
  return (
    <>
      {/* Desktop click overlay */}
      {isOpen && (
        <div
          className="hidden xl:flex absolute inset-0 flex-col justify-top px-8
            pt-8 2xl:px-16 2xl:pt-16 transition-opacity duration-300
            cursor-default opacity-100"
          style={{ backgroundColor: '#ff5251' }}
          onClick={onTap}
        >
          <h3
            className="text-white text-4xl font-semibold uppercase tracking-wide
              mb-3 2xl:mb-6"
            style={{ fontFamily: 'Geist, sans-serif' }}
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
            className="text-white font-normal leading-tight
              custom-description-size"
            style={{
              fontFamily: 'Geist, sans-serif',
            }}
          >
            {language === 'HU' ? description_hu : description_en}
          </p>
        </div>
      )}

      {/* Mobile and iPad fullscreen modal */}
      {isOpen && (
        <div
          className="xl:hidden fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: '#ff5251' }}
        >
          {/* Close button */}
          <button
            onClick={onTap}
            className="absolute top-6 right-6 text-white hover:text-gray-300
              transition-colors z-10"
          >
            <X size={32} />
          </button>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto px-6 pt-20 pb-8">
            <h3
              className="text-white text-3xl font-semibold uppercase
                tracking-wide mb-6"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {firstName === 'MATEUSZ' && lastName === 'MACHALSKI'
                ? `${firstName} ${lastName}`
                : language === 'HU'
                  ? `${lastName} ${firstName}`
                  : `${firstName} ${lastName}`}
            </h3>

            <p
              className="text-white font-normal leading-relaxed
                custom-description-size"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {language === 'HU' ? description_hu : description_en}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default Jury
