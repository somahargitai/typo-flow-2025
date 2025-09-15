import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('HU')

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'HU' ? 'EN' : 'HU'))
  }

  const translations = {
    HU: {
      conference: {
        title: 'TYPOFLOW KONFERENCIA',
        date: '2025. október 22.',
        location: 'Helyszín: Széchenyi Egyetem, Menedzsment Campus',
      },
      navigation: {
        competition: 'Pályázat',
        awards: 'Díjak',
        jury: 'Zsűri',
        conference: 'Konferencia',
      },
      competition: {
        title: 'PÁLYÁZAT',
        description:
          'A pályázatra olyan 2015 után készült munkákat várunk, melyek tipográfiai megoldásokra épülnek vagy a tipográfia értékelhető fókuszban van. A beválogatott versenymunkák plakát formában lesznek kiállítva. Tárgyak, termékek kiállítására nincs lehetőség. A pályázat ingyenes.',
        exception:
          'A pályázaton nem vehetnek részt a szervezők,  zsűritagok, előadók és ezek hozzátartozói.',
        noCheating:
          'A pályázat egy tipográfiai verseny, ami az egyéni látásmódot és kimagasló tervezői készségeket hivatott támogatni, ezért kérjük, hogy csak teljes mértékben saját készítésű munkákkal jelentkezzenek a pályázók (AI kizárva).',
        fileRequirements: 'Beküldendő fájl:',
        imageParameters: '70 × 100 cm',
        fileSize: 'CMYK PDF (max. 15 Mb)',
        fileOrientation: 'álló formátum',
        fileNameRule:
          'A fájlnévben szerepeljen a kategória és a pályázó neve ékezetek nélkül!',
        fileNameExample: 'Fájlnév minta: plakat_palyazoneve.pdf',
        emailLabel: 'A pályamunkákat erre az emailcímre várjuk:',
        email: 'info@typoflow.hu',
        deadlineLabel: 'Beküldési határidő:',
        deadline: '2025. szeptember 29.',
        categoriesTitle: 'KATEGÓRIÁK',
        categories: [
          'plakát',
          'könyv',
          'betűtervezés',
          'kiadvány',
          'magazin',
          'logó',
          'csomagolás',
          'kalligráfia',
          'experimentális tipográfia',
          'webdesign',
        ],
      },
      hero: {
        title: 'TYPO FLOW',
        year: '2025',
        eventTitle: 'I. országos tipográfiai biennálé',
        date: '2025 október 22. – november 9.',
        location: 'Széchenyi Egyetem, Design Campus',
      },
      participants: {
        title: 'RÉSZTVEVŐK',
      },
      partners: {
        title: 'PARTNEREINK',
      },
      eventInfo: {
        title: 'ESEMÉNY INFORMÁCIÓK',
        date: 'Időpont',
        dateValue: '2025. október 22. – november 9.',
        location: 'Helyszín',
        locationValue: 'Széchenyi Egyetem\nDesign Campus, Győr',
        participation: 'RÉSZTVÉTEL',
      },
      awards: {
        title: 'DÍJAK',
        awards: [
          {
            name: 'A MAGYAR MŰVÉSZETI AKADÉMIA FŐDÍJA',
            description: 'MMA oklevél és 250 000 Ft',
          },
          {
            name: 'KÁLMÁN TÜNDE DÍJ',
            description: '',
          },
          {
            name: 'A SZÉCHENYI ISTVÁN EGYETEM DESIGN CAMPUSÁNAK KÜLÖNDÍJA',
            description: '',
          },
          {
            name: 'BRANDGUIDE KÜLÖNDÍJ',
            description: 'Yellow Designer Közösség 3 havi előfizetés',
          },
          {
            name: 'ARTHUNGRY KÜLÖNDÍJ',
            description: 'Artbooks könyvcsomag',
          },
          {
            name: 'FONTFRONT KÜLÖNDÍJ',
            description: '',
          },
        ],
      },
      footer: {
        copyright: '© 2025 Typo Flow - I. országos tipográfiai biennálé',
      },
      dataProtection: {
        title: 'Adatkezelési tájékoztató',
        content:
          'A pályázatra jelentkezők vállalják, hogy a pályázatra benyújtott tervek kiállításra kerülhetnek, a Széchenyi István Egyetem és/vagy a Design Campus kommunikációs felületein megjelenhetnek. A pályázók elfogadják, hogy pályázatuk részeként megadott adataikat a TypoFlow szervezői megismerik és a TypoFlow 2025 projekthez felhasználják.\n\nAz oldal használatával elfogadod a sütihasználatot. A sütiket azért használjuk, hogy hatékonyabb legyen az oldal működése.\n\nCopyright © 2025 — Minden jog fenntartva',
      },
    },
    EN: {
      conference: {
        title: 'TYPOFLOW CONFERENCE',
        date: '2025. October 22.',
        location: 'Location: Széchenyi University, Management Campus',
      },
      navigation: {
        competition: 'Competition',
        awards: 'Awards',
        jury: 'Jury',
        conference: 'Conference',
      },
      competition: {
        title: 'COMPETITION',
        description:
          'We welcome works created after 2015 that are based on typographic solutions or have typography as a clearly appreciable focus. Selected competition works will be exhibited in poster format. There is no possibility to exhibit objects or products. Participation is free of charge.',
        exception:
          'The competition is not open to organizers, jury members, speakers and their associated persons.',
        noCheating:
          'The competition is a typography contest designed to support individual vision and outstanding design skills, therefore we ask that applicants only submit works that are entirely their own creation (AI excluded).',
        fileRequirements: 'File requirements:',
        imageParameters: '70 × 100 cm',
        fileSize: 'CMYK PDF (max. 15 Mb)',
        fileOrientation: 'portrait format',
        fileNameRule:
          "The file name must include the category and the applicant's name without accents!",
        fileNameExample: 'File name example: plakat_applicantname.pdf',
        emailLabel: 'Send entries to:',
        email: 'info@typoflow.hu',
        deadlineLabel: 'Submission deadline:',
        deadline: 'September 29, 2025',
        categoriesTitle: 'CATEGORIES',
        categories: [
          'poster',
          'book',
          'type design',
          'periodical',
          'brochure',
          'logo',
          'packaging design',
          'calligraphy',
          'experimental typography',
          'web design',
        ],
      },
      hero: {
        title: 'TYPO FLOW',
        year: '2025',
        eventTitle: '1st National Typography Biennale',
        date: 'October 22 - November 9, 2025',
        location: 'Széchenyi University, Design Campus',
      },
      participants: {
        title: 'PARTICIPANTS',
      },
      partners: {
        title: 'OUR PARTNERS',
      },
      eventInfo: {
        title: 'EVENT INFORMATION',
        date: 'Date',
        dateValue: 'October 22 - November 9, 2025',
        location: 'Location',
        locationValue: 'Széchenyi University\nDesign Campus, Győr',
        participation: 'PARTICIPATE',
      },
      awards: {
        title: 'AWARDS',
        awards: [
          {
            name: 'GRAND PRIZE OF THE HUNGARIAN ACADEMY OF ARTS',
            description: 'MMA certificate and 250,000 HUF',
          },
          {
            name: 'TÜNDE KÁLMÁN AWARD',
            description: '',
          },
          {
            name: 'SPECIAL AWARD OF THE SZÉCHENYI ISTVÁN UNIVERSITY DESIGN CAMPUS',
            description: '',
          },
          {
            name: 'BRANDGUIDE SPECIAL AWARD',
            description: 'YELLOW Designer Community 3-month subscription',
          },
          {
            name: 'ARTBOOKS SPECIAL AWARD',
            description: 'Artbooks book package',
          },
          {
            name: 'FONTFRONT SPECIAL AWARD',
            description: '',
          },
        ],
      },
      footer: {
        copyright: '© 2025 Typo Flow - 1st National Typography Biennale',
      },
      dataProtection: {
        title: 'Data Protection Information',
        content:
          'Applicants agree that the designs submitted for the competition may be exhibited and may appear on the communication channels of Széchenyi István University and/or Design Campus. Applicants accept that the data provided as part of their application will be known by the TypoFlow organizers and used for the TypoFlow 2025 project.\n\nBy using this site, you accept the use of cookies. We use cookies to make the site more efficient.\n\nCopyright © 2025 — All rights reserved',
      },
    },
  }

  const translationsOfLanguage = translations[language]

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translationsOfLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
