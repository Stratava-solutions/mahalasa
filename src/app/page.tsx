
import HeroSection from '@/components/HeroSection';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <section className="container mx-auto px-4 py-8">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Welcome to the divine abode of Goddess Mahalasa Narayani, the enchanting Mohini avatar of Lord Vishnu. 
            Experience the sacred traditions, rich history, and spiritual bliss that has blessed devotees for centuries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="bg-red-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🕉️</div>
            <h3 className="text-xl font-semibold mb-3 text-red-600">Sacred Darshan</h3>
            <p className="text-gray-700">
              Experience the divine presence through daily aarti, special pujas, and festival celebrations.
            </p>
          </div>
          
          <div className="bg-orange-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">📿</div>
            <h3 className="text-xl font-semibold mb-3 text-orange-600">Spiritual Journey</h3>
            <p className="text-gray-700">
              Discover the rich chronicles, ancient traditions, and spiritual teachings of Goddess Mahalasa.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-600">Community</h3>
            <p className="text-gray-700">
              Join our global community of devotees through seva, festivals, and spiritual programs.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4 md:p-8 mb-8 md:mb-12">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-red-700">Daily Darshan Times</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-600">Mangala Aarti</h4>
                <p className="text-gray-700">5:00 AM</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-600">Madhyana Aarti</h4>
                <p className="text-gray-700">12:00 PM</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-600">Sandhya Aarti</h4>
                <p className="text-gray-700">7:00 PM</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-orange-600">Shayan Aarti</h4>
                <p className="text-gray-700">9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
          <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-600">Upcoming Celebrations</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <div>
                  <h4 className="font-semibold">Mahalasa Jayanti</h4>
                  <p className="text-sm text-gray-600">Grand celebration</p>
                </div>
                <span className="text-blue-600 font-bold">Aug 15</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <div>
                  <h4 className="font-semibold">Ganesha Chaturthi</h4>
                  <p className="text-sm text-gray-600">Festival celebration</p>
                </div>
                <span className="text-blue-600 font-bold">Aug 20</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <div>
                  <h4 className="font-semibold">Navratri</h4>
                  <p className="text-sm text-gray-600">9-day celebration</p>
                </div>
                <span className="text-blue-600 font-bold">Sep 15</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 md:p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-600">Temple Services</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Daily worship and aarti</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Special occasion pujas</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Wedding and ceremony blessings</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Spiritual guidance and counseling</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                <span>Community programs and education</span>
              </div>
            </div>
          </div>
        </div>

        {/* Deity Images Section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 mb-6">Divine Darshan</h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
            {/* Main Deity Image - god.jpg (410x551 - portrait) */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/god.jpg"
                  alt="Goddess Mahalasa Narayani"
                  width={410}
                  height={551}
                  className="w-full h-auto max-w-sm mx-auto"
                  priority
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-red-600 mb-2">श्री महालसा नारायणी</h3>
                <p className="text-gray-700">Sacred darshan of Goddess Mahalasa Narayani</p>
              </div>
            </div>
            
            {/* Secondary Temple Image - god2.jpg (300x218 - landscape) */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <Image
                  src="/god2.jpg"
                  alt="Temple Divine View"
                  width={300}
                  height={218}
                  className="w-full h-auto max-w-xs mx-auto"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-orange-600 mb-2">Sacred Temple</h3>
                <p className="text-gray-700">Holy sanctum of divine blessings</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-4 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-purple-700">Sacred Mantra</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl font-semibold text-purple-600 mb-2">
              ॐ श्री महालसायै नमः
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Om Shree Mahalasayai Namah
            </p>
            <p className="text-sm text-gray-600">
              Chant this sacred mantra to invoke the blessings of Goddess Mahalasa Narayani
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
