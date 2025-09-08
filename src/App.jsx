function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Typo Flow 2025
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-2">
            I. országos tipográfiai biennálé
          </p>
          <p className="text-base md:text-lg text-gray-500">
            Győr, 2025 október 22-november 9
          </p>
          <p className="text-sm md:text-base text-gray-500">
            Széchenyi Egyetem, Design Campus
          </p>
        </header>
        
        <main className="max-w-4xl mx-auto">
          {/* Font Testing Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Font Testing
            </h2>
            
            {/* Big Shoulders Display */}
            <div className="mb-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Big Shoulders Display
              </h3>
              <div className="space-y-3">
                <p className="text-4xl font-bold" style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}>
                  Bold - Typo Flow 2025
                </p>
                <p className="text-3xl font-semibold" style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}>
                  Semibold - Typography Biennale
                </p>
                <p className="text-2xl font-extrabold" style={{ fontFamily: 'Big Shoulders Display, sans-serif' }}>
                  Extrabold - Design Campus
                </p>
              </div>
            </div>

            {/* Geist */}
            <div className="mb-8 p-6 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Geist
              </h3>
              <div className="space-y-3">
                <p className="text-2xl font-light" style={{ fontFamily: 'Geist, sans-serif' }}>
                  Light - Typo Flow 2025
                </p>
                <p className="text-2xl font-normal" style={{ fontFamily: 'Geist, sans-serif' }}>
                  Regular - Typography Biennale
                </p>
                <p className="text-2xl font-medium" style={{ fontFamily: 'Geist, sans-serif' }}>
                  Medium - Design Campus
                </p>
                <p className="text-2xl font-semibold" style={{ fontFamily: 'Geist, sans-serif' }}>
                  Semibold - Győr 2025
                </p>
                <p className="text-2xl font-bold" style={{ fontFamily: 'Geist, sans-serif' }}>
                  Bold - October 22 - November 9
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Website under construction
            </h2>
            <p className="text-gray-600">
              The official website for Typo Flow 2025 is being prepared.
              More information will be available soon.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
