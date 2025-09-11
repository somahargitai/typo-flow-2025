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
