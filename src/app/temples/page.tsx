export default function Temples() {
  const temples = [
    {
      name: "Shree Mahalasa Narayani Temple, Mardol",
      location: "Mardol, Ponda, Goa",
      established: "17th Century",
      significance: "Original and primary temple after migration from Verna",
      features: ["Main sanctum with original idol", "Traditional Goan architecture", "Daily elaborate rituals", "Major festival celebrations"],
      image: "🏛️",
      status: "Primary Temple"
    },
    {
      name: "Shree Mahalasa Narayani Temple, Konchady",
      location: "Konchady, Mangalore, Karnataka",
      established: "1987",
      significance: "Established by devotees who migrated from Goa",
      features: ["Modern temple complex", "Community hall", "Vedic study center", "Cultural programs"],
      image: "🏛️",
      status: "Major Temple"
    },
    {
      name: "Shree Mahalasa Narayani Temple, Basrur",
      location: "Basrur, Dakshina Kannada, Karnataka",
      established: "16th Century",
      significance: "One of the oldest temples, over 500 years old",
      features: ["Ancient architecture", "Historical artifacts", "Traditional rituals", "Coastal heritage"],
      image: "🏛️",
      status: "Heritage Temple"
    },
    {
      name: "Shree Mahalasa Temple, Mumbai",
      location: "Dadar, Mumbai, Maharashtra",
      established: "1950s",
      significance: "Serves large Konkani community in Mumbai",
      features: ["Urban temple complex", "Community services", "Cultural center", "Educational programs"],
      image: "🏛️",
      status: "Community Temple"
    },
    {
      name: "Shree Mahalasa Temple, Karkal",
      location: "Karkal, Udupi District, Karnataka",
      established: "18th Century",
      significance: "Important pilgrimage center in coastal Karnataka",
      features: ["Unique architectural style", "Annual chariot festival", "Devotee accommodation", "Spiritual discourses"],
      image: "🏛️",
      status: "Pilgrimage Center"
    },
    {
      name: "Shree Mahalasa Temple, Pune",
      location: "Pune, Maharashtra",
      established: "1960s",
      significance: "Serves migrant Konkani families",
      features: ["Modern facilities", "Language classes", "Cultural preservation", "Youth programs"],
      image: "🏛️",
      status: "Cultural Center"
    }
  ];

  const internationalTemples = [
    { name: "Mahalasa Temple, USA", location: "California, USA", community: "Diaspora community" },
    { name: "Mahalasa Temple, UK", location: "London, UK", community: "European devotees" },
    { name: "Mahalasa Temple, Canada", location: "Toronto, Canada", community: "North American Konkanis" },
    { name: "Mahalasa Temple, Australia", location: "Melbourne, Australia", community: "Australian Hindus" }
  ];

  return (
    <div className="container text-primary mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Temples</h1>
      
      <div className="max-w-6xl mx-auto">
        <section className="mb-8 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-700">
              🕉️ Sacred Abodes of Goddess Mahalasa 🕉️
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover the network of Mahalasa temples across India and around the world, 
              each preserving the divine traditions and serving devoted communities.
            </p>
            <div className="mt-4 text-orange-600 font-semibold">
              "यत्र देवी स्थिता तत्र नमामि" - Where the Goddess resides, there I bow
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Major Temples in India</h2>
          <div className="space-y-6">
            {temples.map((temple, index) => (
              <div key={index} className="bg-white border-2 border-orange-200 rounded-lg overflow-hidden shadow-lg">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/4 bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">{temple.image}</div>
                      <span className={`px-3 py-1 rounded text-sm font-medium ${
                        temple.status === 'Primary Temple' ? 'bg-red-200 text-red-800' :
                        temple.status === 'Major Temple' ? 'bg-orange-200 text-orange-800' :
                        temple.status === 'Heritage Temple' ? 'bg-yellow-200 text-yellow-800' :
                        temple.status === 'Pilgrimage Center' ? 'bg-purple-200 text-purple-800' :
                        'bg-blue-200 text-blue-800'
                      }`}>
                        {temple.status}
                      </span>
                    </div>
                  </div>
                  <div className="lg:w-3/4 p-6">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{temple.name}</h3>
                        <p className="text-gray-600 mb-1">📍 {temple.location}</p>
                        <p className="text-gray-600 mb-3">🏗️ Established: {temple.established}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{temple.significance}</p>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-orange-600">Temple Features:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {temple.features.map((feature, i) => (
                          <div key={i} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibent mb-6 text-orange-700">Temple Network Map</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Western India</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span className="font-medium">Goa</span>
                    <span className="text-blue-600 font-bold">3 Temples</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span className="font-medium">Maharashtra</span>
                    <span className="text-blue-600 font-bold">5 Temples</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span className="font-medium">Karnataka</span>
                    <span className="text-blue-600 font-bold">8 Temples</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-700">Other Regions</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span className="font-medium">Kerala</span>
                    <span className="text-green-600 font-bold">2 Temples</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span className="font-medium">Tamil Nadu</span>
                    <span className="text-green-600 font-bold">1 Temple</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded shadow-sm">
                    <span className="font-medium">Other States</span>
                    <span className="text-green-600 font-bold">4 Temples</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">International Temples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {internationalTemples.map((temple, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-700 mb-2">{temple.name}</h3>
                <p className="text-gray-700 mb-1">📍 {temple.location}</p>
                <p className="text-sm text-gray-600">👥 Serving: {temple.community}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibent mb-6 text-orange-700">Temple Services & Facilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🛕</div>
              <h3 className="text-lg font-semibold mb-3 text-yellow-700">Daily Worship</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Morning & Evening Aarti</li>
                <li>• Special occasion pujas</li>
                <li>• Personal prayer services</li>
                <li>• Festival celebrations</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-lg font-semibent mb-3 text-green-700">Education</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Sanskrit classes</li>
                <li>• Vedic studies</li>
                <li>• Cultural programs</li>
                <li>• Youth activities</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibent mb-3 text-blue-700">Community</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Wedding ceremonies</li>
                <li>• Community halls</li>
                <li>• Guest accommodation</li>
                <li>• Social services</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Pilgrimage Circuit</h2>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Sacred Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                Experience the complete spiritual journey by visiting the interconnected network of Mahalasa temples, 
                each offering unique blessings and cultural experiences.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-pink-700">Traditional Route</h4>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-pink-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">1</span>
                    Mardol, Goa (Original Temple)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-pink-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">2</span>
                    Basrur, Karnataka (Heritage)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-pink-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">3</span>
                    Konchady, Mangalore (Modern)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-pink-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">4</span>
                    Karkal, Udupi (Pilgrimage)
                  </li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibent text-lg mb-3 text-purple-700">Modern Circuit</h4>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">1</span>
                    Mumbai, Maharashtra (Urban)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">2</span>
                    Pune, Maharashtra (Cultural)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">3</span>
                    Bangalore, Karnataka (Tech Hub)
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-200 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">4</span>
                    International Temples
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibent mb-4 text-red-700">Connect with Temples</h2>
          <p className="text-lg text-gray-700 mb-6">
            Each temple welcomes visitors and pilgrims. Contact individual temples for specific 
            information about timings, ceremonies, and accommodation facilities.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-orange-600 mb-2">📞 Temple Directory</h3>
              <p className="text-sm text-gray-600">Complete contact information for all temples</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibent text-green-600 mb-2">🗓️ Event Calendar</h3>
              <p className="text-sm text-gray-600">Synchronized festival dates and special events</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibent text-blue-600 mb-2">🏨 Accommodation</h3>
              <p className="text-sm text-gray-600">Pilgrim lodging and nearby facilities</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}