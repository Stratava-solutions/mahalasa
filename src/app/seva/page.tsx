export default function Seva() {
  const sevaTypes = [
    {
      title: "Abhishek Seva",
      price: "₹501",
      description: "Sacred bath of the deity with milk, honey, ghee, and fragrant oils",
      includes: ["Panchamrit abhishek", "Fresh flower decoration", "Aarti participation", "Prasad distribution"]
    },
    {
      title: "Sahasranam Puja",
      price: "₹1001",
      description: "Recitation of 1000 names of Goddess Mahalasa with offerings",
      includes: ["Complete sahasranam", "108 lotus offerings", "Havan ceremony", "Special prasad"]
    },
    {
      title: "Annadan Seva",
      price: "₹2501",
      description: "Feeding devotees and community members",
      includes: ["Traditional meal preparation", "Serving 100+ devotees", "Kitchen blessing", "Merit certificate"]
    }
  ];

  const monthlySevas = [
    { name: "Daily Aarti Sponsorship", amount: "₹501/day" },
    { name: "Weekly Flower Decoration", amount: "₹1001/week" },
    { name: "Monthly Bhajan Program", amount: "₹2501/month" },
    { name: "Festival Sponsorship", amount: "₹5001+" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Seva</h1>
      
      <div className="max-w-6xl mx-auto">
        <section className="mb-8 text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-orange-700">
              🙏 सेवा धर्म 🙏
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Service to the Divine is the highest form of worship. Through seva, we purify our hearts 
              and connect with the divine essence of Goddess Mahalasa.
            </p>
            <div className="mt-4 text-orange-600 font-semibold">
              "सेवा परमो धर्म" - Service is the highest dharma
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Temple Seva Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sevaTypes.map((seva, index) => (
              <div key={index} className="bg-white border-2 border-red-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 text-center">
                  <h3 className="text-xl font-bold">{seva.title}</h3>
                  <p className="text-2xl font-bold mt-2">{seva.price}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{seva.description}</p>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-orange-600">Includes:</h4>
                    <ul className="space-y-2">
                      {seva.includes.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors">
                    Book Seva
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Daily Seva Activities</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <div>
                  <h3 className="font-semibold text-gray-800">Morning Cleaning</h3>
                  <p className="text-sm text-gray-600">Temple premises and deity decoration</p>
                </div>
                <span className="text-green-600 font-bold">5:00 AM</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <div>
                  <h3 className="font-semibold text-gray-800">Flower Arrangement</h3>
                  <p className="text-sm text-gray-600">Fresh garlands and altar decoration</p>
                </div>
                <span className="text-green-600 font-bold">6:00 AM</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <div>
                  <h3 className="font-semibold text-gray-800">Prasad Preparation</h3>
                  <p className="text-sm text-gray-600">Sacred food offerings</p>
                </div>
                <span className="text-green-600 font-bold">10:00 AM</span>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <div>
                  <h3 className="font-semibent text-gray-800">Evening Maintenance</h3>
                  <p className="text-sm text-gray-600">Lighting and general upkeep</p>
                </div>
                <span className="text-green-600 font-bold">6:00 PM</span>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Monthly Sponsorships</h2>
            <div className="space-y-4">
              {monthlySevas.map((seva, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-400">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-800">{seva.name}</h3>
                    <span className="text-blue-600 font-bold">{seva.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
              Become Monthly Sponsor
            </button>
          </section>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Special Occasion Sevas</h2>
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Festival Sevas</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Mahalasa Jayanti Sponsorship</span>
                    <span className="font-bold text-purple-600">₹10,001+</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Navratri Celebration</span>
                    <span className="font-bold text-purple-600">₹5,001+</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Diwali Decoration</span>
                    <span className="font-bold text-purple-600">₹3,001+</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Spiritual Sevas</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Vedic Study Sponsorship</span>
                    <span className="font-bold text-purple-600">₹2,501/month</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Bhajan Program</span>
                    <span className="font-bold text-purple-600">₹1,501/event</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-white rounded">
                    <span>Satsang Organization</span>
                    <span className="font-bold text-purple-600">₹1,001/session</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Physical Seva Opportunities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🧹</div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-700">Temple Cleaning</h3>
              <p className="text-sm text-gray-600">Daily maintenance and cleaning seva</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-lg font-semibold mb-2 text-green-700">Flower Decoration</h3>
              <p className="text-sm text-gray-600">Arranging flowers and garlands</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Prasad Seva</h3>
              <p className="text-sm text-gray-600">Preparation and distribution of prasad</p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold mb-2 text-pink-700">Crowd Management</h3>
              <p className="text-sm text-gray-600">Assisting devotees during festivals</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">How to Participate in Seva</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-orange-600">💳 Online Donation</h3>
              <p className="text-sm text-gray-700">Secure online payment gateway for all seva bookings</p>
              <button className="mt-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                Donate Now
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-green-600">🏛️ Temple Visit</h3>
              <p className="text-sm text-gray-700">Visit temple office for seva booking and arrangements</p>
              <p className="text-xs text-gray-600 mt-2">Open: 6:00 AM - 9:00 PM</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-600">📞 Phone Booking</h3>
              <p className="text-sm text-gray-700">Call temple office for advance seva reservations</p>
              <p className="text-xs text-gray-600 mt-2">+91-XXXX-XXXX-XX</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600">
              All seva contributions are tax-deductible under Section 80G. 
              Receipts will be provided for all donations.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}