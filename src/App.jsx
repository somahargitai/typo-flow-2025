function App() {
  // Portrait images data
  const portraits = [
    { name: "Balla D.", image: "Balla_D2.webp" },
    { name: "Cuba Gergő", image: "Cuba_Gergo2_static.webp" },
    { name: "Farkas Anna", image: "Farkasanna2_static.webp" },
    { name: "Gal Krisztián", image: "Gal_Krisz4_static.webp" },
    { name: "Halasi Zoltán", image: "Halasi_Zoltan2_static.webp" },
    { name: "Jose", image: "Jose3_static.webp" },
    { name: "Kaszányi Nóra", image: "kaszanyi_nora2_static.webp" },
    { name: "Körös János", image: "Koros_Janos2_static.webp" },
    { name: "Machalski", image: "Machalski2_static.webp" },
    { name: "Mateusz Anna", image: "Mateusz_Anna2_static.webp" },
    { name: "Misztarka Eszter", image: "Misztarka_Eszter2_static.webp" },
    { name: "Nagy Dorottya", image: "nagydorottya2_static.webp" },
    { name: "Naske Laci", image: "Naske_Laci2_static.webp" },
    { name: "Oszi", image: "Oszi2_static.webp" },
    { name: "Petrucz Ágnes", image: "Petrucz_Agnes2_static.webp" },
    { name: "Polgárdi", image: "Polgardi_jav_static.webp" },
    { name: "Rebeka Orosz", image: "Rebeka_Orosz2_static.webp" },
    { name: "Sese", image: "Sese2_static.webp" },
    { name: "Szabó Andrea", image: "Szabo_Andrea2_static.webp" },
    { name: "UBU", image: "UBU2_static.webp" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center bg-blue-600">
            <img
              src="/images/logo.svg"
              alt="Typo Flow Logo"
              className="h-24 md:h-32 w-auto"
              style={{ width: 'auto', height: '96px' }}
            />
          </div>
          
          <h1 
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
          >
            TYPO FLOW
          </h1>
          <div className="text-2xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}>
            2025
          </div>
          <p className="text-lg md:text-xl font-medium mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
            I. országos tipográfiai biennálé
          </p>
          <p className="text-base md:text-lg font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
            Győr, 2025 október 22-november 9
          </p>
          <p className="text-sm md:text-base font-light opacity-80" style={{ fontFamily: 'Geist, sans-serif' }}>
            Széchenyi Egyetem, Design Campus
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="text-4xl md:text-6xl font-bold text-black mb-8"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                TIPOGRAFIA
              </h2>
              <p 
                className="text-lg md:text-xl font-light text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                A tipográfia művészete és tudománya találkozik a modern design világában. 
                Fedezd fel a betűk rejtett szépségét és a tipográfia határtalan lehetőségeit.
              </p>
            </div>
          </section>

          {/* Participants Grid */}
          <section className="mb-20">
            <h2 
              className="text-3xl md:text-5xl font-bold text-center mb-16"
              style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
            >
              RÉSZTVEVŐK
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {portraits.map((portrait, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                    <img
                      src={`/images/${portrait.image}`}
                      alt={portrait.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p 
                    className="text-sm font-medium text-center text-gray-800"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    {portrait.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Brand Logos Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
              <h2 
                className="text-3xl md:text-5xl font-bold text-center mb-12 text-white"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                PARTNEREK
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                <div className="p-4">
                  <img
                    src="/images/brand-logo-05.svg"
                    alt="Brand Logo 05"
                    className="h-16 w-auto object-contain"
                    style={{ width: 'auto', height: '64px' }}
                  />
                </div>
                <div className="p-4">
                  <img
                    src="/images/brand-logo-06.svg"
                    alt="Brand Logo 06"
                    className="h-16 w-auto object-contain"
                    style={{ width: 'auto', height: '64px' }}
                  />
                </div>
                <div className="p-4">
                  <img
                    src="/images/brand-logo-07.svg"
                    alt="Brand Logo 07"
                    className="h-16 w-auto object-contain"
                    style={{ width: 'auto', height: '64px' }}
                  />
                </div>
                <div className="p-4">
                  <img
                    src="/images/brand-logo-08.svg"
                    alt="Brand Logo 08"
                    className="h-16 w-auto object-contain"
                    style={{ width: 'auto', height: '64px' }}
                  />
                </div>
                <div className="p-4">
                  <img
                    src="/images/brand-logo-09.svg"
                    alt="Brand Logo 09"
                    className="h-16 w-auto object-contain"
                    style={{ width: 'auto', height: '64px' }}
                  />
                </div>
                <div className="p-4">
                  <img
                    src="/images/brand-logo-10.svg"
                    alt="Brand Logo 10"
                    className="h-16 w-auto object-contain"
                    style={{ width: 'auto', height: '64px' }}
                  />
                </div>
              </div>
        </div>
      </section>

      {/* Main Content Continued */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* Event Info */}
          <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className="text-3xl md:text-5xl font-bold text-black mb-8"
                style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}
              >
                ESEMÉNY INFORMÁCIÓK
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    Időpont
                  </h3>
                  <p 
                    className="text-lg font-light"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    2025. október 22. - november 9.
                  </p>
                </div>
                
                <div>
                  <h3 
                    className="text-xl font-semibold mb-4"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    Helyszín
                  </h3>
                  <p 
                    className="text-lg font-light"
                    style={{ fontFamily: 'Geist, sans-serif' }}
                  >
                    Széchenyi Egyetem<br />
                    Design Campus, Győr
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button 
                  className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                  style={{ fontFamily: 'Geist, sans-serif' }}
                >
                  RÉSZTVÉTEL
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p 
            className="text-sm font-light opacity-80"
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            © 2025 Typo Flow - I. országos tipográfiai biennálé
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
