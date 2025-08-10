export default function Invitation() {
  const upcomingEvents = [
    {
      title: "Mahalasa Jayanti Celebration",
      date: "August 15, 2025",
      time: "5:00 AM - 10:00 PM",
      location: "All Mahalasa Temples",
      description: "Grand celebration of Goddess Mahalasa's divine appearance day with special pujas, cultural programs, and community feast.",
      highlights: ["Abhishek ceremony", "Classical dance performances", "Bhajan sessions", "Prasad distribution"]
    },
    {
      title: "Ganesha Chaturthi Festival",
      date: "August 20, 2025",
      time: "6:00 AM - 9:00 PM",
      location: "Temple Premises",
      description: "Celebration of Lord Ganesha's birth with traditional rituals and community participation.",
      highlights: ["Ganesha installation", "Modak preparation", "Cultural programs", "Visarjan procession"]
    },
    {
      title: "Navratri Festival",
      date: "September 15-23, 2025",
      time: "Daily 6:00 AM - 10:00 PM",
      location: "Temple Complex",
      description: "Nine-day celebration honoring Divine Mother with daily pujas, cultural events, and spiritual discourse.",
      highlights: ["Daily aarti", "Garba nights", "Spiritual discourses", "Sacred offerings"]
    }
  ];

  const regularPrograms = [
    { day: "Daily", event: "Mangala Aarti", time: "5:00 AM" },
    { day: "Daily", event: "Madhyana Aarti", time: "12:00 PM" },
    { day: "Daily", event: "Sandhya Aarti", time: "7:00 PM" },
    { day: "Tuesday", event: "Devi Puja", time: "6:00 PM" },
    { day: "Friday", event: "Lakshmi Puja", time: "6:30 PM" },
    { day: "Saturday", event: "Bhajan Sandhya", time: "7:30 PM" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Invitation</h1>
      
      <div className="max-w-6xl mx-auto">
        <section className="mb-8 text-center">
          <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-700">
              🙏 सादर निमंत्रण 🙏
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Shree Mahalasa Narayani Temple cordially invites all devotees to participate in our sacred celebrations, 
              daily worship, and spiritual programs. Join us in divine bliss and community harmony.
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
              <p className="text-orange-600 font-semibold">
                "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
              </p>
              <p className="text-sm text-gray-600 mt-1">
                May all beings be happy, may all beings be free from illness
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Upcoming Grand Celebrations</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border-2 border-orange-200 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm">
                    <span>📅 {event.date}</span>
                    <span>⏰ {event.time}</span>
                    <span>📍 {event.location}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-orange-600">Event Highlights:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          <span className="text-orange-500 mr-2">🔸</span>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Regular Prayer Schedule</h2>
          <div className="bg-yellow-50 rounded-lg overflow-hidden">
            <div className="bg-yellow-200 p-4">
              <h3 className="text-xl font-semibold text-yellow-800">Daily & Weekly Programs</h3>
              <p className="text-yellow-700 mt-1">All devotees are welcome to join our regular worship services</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {regularPrograms.map((program, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border-l-4 border-yellow-400">
                    <div>
                      <h4 className="font-semibold text-gray-800">{program.event}</h4>
                      <p className="text-sm text-gray-600">{program.day}</p>
                    </div>
                    <div className="text-lg font-bold text-yellow-600">
                      {program.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-green-700">Special Invitations</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-green-600">Wedding Blessings</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Seek divine blessings for your sacred union. Contact temple authorities for ceremony arrangements.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-green-600">Griha Pravesh</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Housewarming ceremonies with Vastu Puja and divine blessings for new beginnings.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-green-600">Naming Ceremonies</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Traditional Namkaran sanskar for newborns with astrological consultation.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-green-600">Upanayana</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Sacred thread ceremony for spiritual initiation of young devotees.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Community Programs</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-blue-600">Satsang Sessions</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Weekly spiritual discourses and group meditation every Sunday at 5:00 PM.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-blue-600">Bhajan Classes</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Learn devotional songs and classical music every Wednesday and Saturday.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-blue-600">Sanskrit Classes</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Study sacred scriptures and learn Sanskrit language every Monday evening.
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-blue-600">Yoga & Meditation</h3>
                <p className="text-gray-700 text-sm mt-1">
                  Daily yoga sessions at 6:00 AM and guided meditation at 8:00 PM.
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">Devotee Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Special Pujas</h3>
              <p className="text-gray-700 text-sm">
                Personalized rituals for health, prosperity, and spiritual growth
              </p>
            </div>
            
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-3 text-indigo-700">Home Visits</h3>
              <p className="text-gray-700 text-sm">
                Priests available for ceremonies and blessings at your residence
              </p>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3 text-pink-700">Spiritual Guidance</h3>
              <p className="text-gray-700 text-sm">
                Personal consultation for spiritual queries and life guidance
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">Contact for Invitations</h2>
          <div className="space-y-3 text-gray-700">
            <p className="text-lg">
              <strong>Temple Office:</strong> +91-XXXX-XXXX-XX
            </p>
            <p className="text-lg">
              <strong>Email:</strong> info@mahalasatemple.org
            </p>
            <p className="text-lg">
              <strong>Address:</strong> Shree Mahalasa Narayani Temple, Mardol, Goa
            </p>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600">
              For special occasions, advance booking required. All programs follow traditional Vedic timings and COVID-19 safety protocols.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}