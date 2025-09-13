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
        date: '2025 október 22-november 9',
        location: 'Széchenyi Egyetem, Design Campus',
      },
      participants: {
        title: 'RÉSZTVEVŐK',
      },
      partners: {
        title: 'PARTNEREK',
      },
      eventInfo: {
        title: 'ESEMÉNY INFORMÁCIÓK',
        date: 'Időpont',
        dateValue: '2025. október 22. - november 9.',
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
            description: 'Oklevél',
          },
          {
            name: 'A SZÉCHENYI ISTVÁN EGYETEM DESIGN CAMPUSÁNAK KÜLÖNDÍJA',
            description: 'Oklevél',
          },
          {
            name: 'BRANDGUIDE KÜLÖNDÍJ',
            description: 'Yellow Designer közösség 3 havi előfizetés',
          },
          {
            name: 'ARTHUNGRY KÜLÖNDÍJ',
            description: 'Oklevél',
          },
          {
            name: 'FONTFRONT KÜLÖNDÍJ',
            description: 'Oklevél',
          },
        ],
      },
      footer: {
        copyright: '© 2025 Typo Flow - I. országos tipográfiai biennálé',
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
        title: 'PARTNERS',
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
            description: 'Certificate',
          },
          {
            name: 'SPECIAL AWARD OF THE SZÉCHENYI ISTVÁN UNIVERSITY DESIGN CAMPUS',
            description: 'Certificate',
          },
          {
            name: 'BRANDGUIDE SPECIAL AWARD',
            description: 'YELLOW Designer Community 3-month subscription',
          },
        ],
      },
      footer: {
        copyright: '© 2025 Typo Flow - 1st National Typography Biennale',
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
