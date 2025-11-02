export default function ContactPage() {
  return (
    <div className="min-h-screen bg-orange-50 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6 text-center">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Temple Information
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-600 mb-2 flex items-center">
                    <span className="mr-2">🏭</span> Address
                  </h3>
                  <p className="text-gray-700">
                    Shree Mahalasa Narayani Temple<br/>
                    Temple Street<br/>
                    Sacred City, State - 12345
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-600 mb-2 flex items-center">
                    <span className="mr-2">📞</span> Phone Numbers
                  </h3>
                  <p className="text-gray-700">
                    Temple Office: +91 12345 67890<br/>
                    Priest: +91 98765 43210<br/>
                    Emergency: +91 11111 22222
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-600 mb-2 flex items-center">
                    <span className="mr-2">✉️</span> Email
                  </h3>
                  <p className="text-gray-700">
                    info@mahalasatemple.org<br/>
                    seva@mahalasatemple.org<br/>
                    events@mahalasatemple.org
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-600 mb-2 flex items-center">
                    <span className="mr-2">🕰️</span> Visiting Hours
                  </h3>
                  <div className="text-gray-700">
                    <p><strong>Daily:</strong> 5:00 AM - 9:30 PM</p>
                    <p><strong>Aarti Times:</strong></p>
                    <ul className="ml-4 mt-2 space-y-1">
                      <li>• Mangala Aarti: 5:00 AM</li>
                      <li>• Madhyana Aarti: 12:00 PM</li>
                      <li>• Sandhya Aarti: 7:00 PM</li>
                      <li>• Shayan Aarti: 9:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Get In Touch
              </h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Seva Booking</option>
                    <option>Festival Information</option>
                    <option>Donation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500" 
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-6 md:mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">
                  📍 Directions
                </h3>
                <p className="text-gray-700 text-sm mb-3">
                  The temple is easily accessible by public transportation and has parking facilities available.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                  Get Directions on Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
