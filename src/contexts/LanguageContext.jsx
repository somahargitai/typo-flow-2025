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
      navigation: {
        competition: 'Pályázat',
        awards: 'Díjak',
        jury: 'Zsűri',
        conference: 'Konferencia',
      },
      competition: {
        title: 'PÁLYÁZAT',
        description: 'A pályázatra olyan 2015 után készült munkákat várunk, melyek tipográfiai megoldásokra épülnek vagy a tipográfia értékelhető fókuszban van. A beválogatott versenymunkák plakát formában lesznek kiállítva. Tárgyak, termékek kiállítására nincs lehetőség. A pályázat ingyenes.',
        fileRequirements: 'Beküldendő fájl:',
        fileSize: '70 × 100 cm, CMYK PDF (max. 15 Mb)',
        fileOrientation: 'álló formátum',
        fileNameRule: 'A fájlnévben szerepeljen a kategória és a pályázó neve ékezetek nélkül!',
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
          'webdesign'
        ]
      },
      hero: {
        title: 'TYPO FLOW',
        year: '2025',
        subtitle: 'I. országos tipográfiai biennálé',
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
      footer: {
        copyright: '© 2025 Typo Flow - I. országos tipográfiai biennálé',
      },
    },
    EN: {
      navigation: {
        competition: 'Competition',
        awards: 'Awards',
        jury: 'Jury',
        conference: 'Conference',
      },
      competition: {
        title: 'COMPETITION',
        description: 'We welcome works created after 2015 that are based on typographic solutions or have typography as a clearly appreciable focus. Selected competition works will be exhibited in poster format. There is no possibility to exhibit objects or products. Participation is free of charge.',
        fileRequirements: 'File requirements:',
        fileSize: '70 × 100 cm, CMYK PDF (max. 15 Mb)',
        fileOrientation: 'portrait format',
        fileNameRule: 'The file name must include the category and the applicant\'s name without accents!',
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
          'web design'
        ]
      },
      hero: {
        title: 'TYPO FLOW',
        year: '2025',
        subtitle: '1st National Typography Biennale',
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
      footer: {
        copyright: '© 2025 Typo Flow - 1st National Typography Biennale',
      },
    },
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
