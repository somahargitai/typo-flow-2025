import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'

import LandingHeader from './sections/LandingHeader'
import BelowFoldInfo from './sections/BelowFoldInfo'
import Competition from './sections/Competition'
import Awards from './sections/Awards'
import Jury from './sections/Jury'
import Conference from './sections/Conference'
import SupportersFooter from './sections/SupportersFooter'
import ImpressumFooter from './sections/ImpressumFooter'

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Landing Header - Above the fold */}
      <LandingHeader />

      {/* Below fold secondary information */}
      <BelowFoldInfo />

      {/* Competition Section */}
      <Competition />

      {/* Awards Section */}
      <Awards />

      {/* Jury Section */}
      <Jury />

      {/* Conference Section */}
      <Conference />

      {/* Supporters Footer */}
      <SupportersFooter />

      {/* Impressum Footer */}
      <ImpressumFooter />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
