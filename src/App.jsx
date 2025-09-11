import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';

import LandingHeader from './components/LandingHeader';
import BelowFoldInfo from './components/BelowFoldInfo';
import Competition from './components/Competition';
import Awards from './components/Awards';
import Jury from './components/Jury';
import Conference from './components/Conference';
import SupportersFooter from './components/SupportersFooter';
import ImpressumFooter from './components/ImpressumFooter';

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
  );
}

export default App
