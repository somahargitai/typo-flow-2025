import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Competition = () => {
  const { t, language } = useLanguage()

  return (
    <section id="competition" className="py-16 bg-white rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-8">
          {/* Title */}
          <h2
            className="text-4xl md:text-7xl font-bold mb-8 text-left"
            style={{
              fontFamily: 'Big Shoulders Display, sans-serif',
              color: '#004bff',
            }}
          >
            {t.competition.title}
          </h2>

          {/* Description */}
          <p
            className="text-lg md:text-2xl leading-normal mb-8"
            style={{
              fontFamily: 'Geist, sans-serif',
              color: '#004bff',
            }}
          >
            {t.competition.description}
          </p>

          {/* File Requirements Section */}
          <div className="mb-8">
            <h3
              className="text-xl md:text-2xl font-semibold mb-2"
              style={{
                fontFamily: 'Geist, sans-serif',
                color: '#004bff',
              }}
            >
              {t.competition.fileRequirements}
            </h3>
            <p
              className="text-lg md:text-2xl leading-normal mb-2"
              style={{
                fontFamily: 'Geist, sans-serif',
                color: '#004bff',
              }}
            >
              {t.competition.fileSize} <br />
              {t.competition.fileOrientation} <br />
              {t.competition.fileNameRule} <br />
              {t.competition.fileNameExample}
            </p>
          </div>

          {/* Email Section */}
          <div className="mb-8">
            <h3
              className="text-xl md:text-2xl font-semibold mb-2"
              style={{
                fontFamily: 'Geist, sans-serif',
                color: '#004bff',
              }}
            >
              {t.competition.emailLabel}
            </h3>
            <a
              href={`mailto:${t.competition.email}`}
              className="text-2xl md:text-3xl hover:underline transition-all duration-200"
              style={{
                fontFamily: 'Geist, sans-serif',
                color: '#004bff',
              }}
            >
              {t.competition.email}
            </a>
          </div>

          {/* Deadline Section */}
          <div className="mb-8">
            <h3
              className="text-xl md:text-2xl font-semibold text-red-600 mb-2"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t.competition.deadlineLabel}
            </h3>
            <p
              className="text-2xl md:text-3xl text-red-600"
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {t.competition.deadline}
            </p>
          </div>

          {/* Categories Section */}
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-6"
              style={{
                fontFamily: 'Geist, sans-serif',
                color: '#004bff',
              }}
            >
              {t.competition.categoriesTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {t.competition.categories.map((category, index) => (
                <div key={index} className="flex items-center">
                  <span
                    className="text-lg mr-2"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      color: '#004bff',
                    }}
                  >
                    /
                  </span>
                  <span
                    className="text-lg"
                    style={{
                      fontFamily: 'Geist, sans-serif',
                      color: '#004bff',
                    }}
                  >
                    {category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Competition
