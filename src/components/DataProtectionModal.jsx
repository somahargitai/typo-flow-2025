import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const DataProtectionModal = ({ isOpen, onClose }) => {
  const { translationsOfLanguage } = useLanguage()

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
        bg-black/50"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh]
          overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div
          className="flex justify-between items-center p-6 border-b
            border-gray-200"
        >
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{
              fontFamily: 'Big Shoulders Display, sans-serif',
              color: '#004bff',
            }}
          >
            {translationsOfLanguage.dataProtection.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div
            className="text-base md:text-lg leading-relaxed whitespace-pre-line"
            style={{
              fontFamily: 'Geist, sans-serif',
              color: '#333',
            }}
          >
            {translationsOfLanguage.dataProtection.content}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg
              hover:bg-blue-700 transition-colors"
            style={{
              fontFamily: 'Geist, sans-serif',
            }}
          >
            {translationsOfLanguage.language === 'HU' ? 'Bezár' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default DataProtectionModal
