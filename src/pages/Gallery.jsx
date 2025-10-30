import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

import PhotoGallery from '../components/PhotoGallery'

function Gallery() {
  const { translationsOfLanguage, language } = useLanguage()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ff5251' }}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-6xl font-bold font-big-shoulders text-center mb-8 text-white" style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}>
          {translationsOfLanguage.gallery.title}
        </h1>
        <div className="text-center text-white mb-8"></div>
        <PhotoGallery />
      </div>
    </div>
  )
}

export default Gallery
