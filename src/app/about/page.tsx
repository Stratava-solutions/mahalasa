export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-50 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6 text-center">
            About Shree Mahalasa Narayani Temple
          </h1>
          
          <div className="prose max-w-none">
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                The Shree Mahalasa Narayani Temple stands as a beacon of divine grace and spiritual heritage, 
                dedicated to Goddess Mahalasa Narayani, the enchanting Mohini avatar of Lord Vishnu. Located in 
                the heart of devotional tradition, this sacred temple has been a center of worship, culture, 
                and community gathering for centuries.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Goddess Mahalasa is revered as the presiding deity of the Gaud Saraswat Brahmin community 
                and is worshipped across many regions of India. Known for her compassionate nature and 
                protective powers, she blesses devotees with prosperity, wisdom, and spiritual enlightenment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="bg-red-50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-3">
                  Temple History
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Established centuries ago, this temple has withstood the test of time, preserving ancient 
                  rituals and traditions. The temple's architecture reflects the rich cultural heritage 
                  of the region, blending traditional design with spiritual symbolism.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-orange-600 mb-3">
                  Divine Significance
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Mahalasa Narayani represents the perfect balance of power and compassion. As the Mohini 
                  avatar, she embodies beauty, wisdom, and divine protection, making this temple a sacred 
                  destination for spiritual seekers and devotees worldwide.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Temple Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">🏛️</div>
                  <h4 className="font-semibold text-red-600 mb-2">Sacred Architecture</h4>
                  <p className="text-gray-700 text-sm">Traditional temple design with intricate carvings and spiritual symbolism</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">🕯️</div>
                  <h4 className="font-semibold text-orange-600 mb-2">Daily Rituals</h4>
                  <p className="text-gray-700 text-sm">Four times daily aarti with traditional prayers and offerings</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">🎭</div>
                  <h4 className="font-semibold text-red-600 mb-2">Cultural Programs</h4>
                  <p className="text-gray-700 text-sm">Regular festivals, bhajan sessions, and community gatherings</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-red-700 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To preserve and promote the sacred traditions of Goddess Mahalasa worship while 
                fostering spiritual growth, community unity, and cultural preservation for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
