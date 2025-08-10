'use client'
import { useState } from 'react';

export default function Panchangam() {
  const [selectedMonth, setSelectedMonth] = useState('current');

  const auspiciousDays = [
    { date: 'August 15, 2025', day: 'Friday', occasion: 'Mahalasa Jayanti', type: 'major' },
    { date: 'August 20, 2025', day: 'Wednesday', occasion: 'Ganesha Chaturthi', type: 'festival' },
    { date: 'August 27, 2025', day: 'Wednesday', occasion: 'Teej', type: 'observance' },
    { date: 'September 5, 2025', day: 'Friday', occasion: 'Rishi Panchami', type: 'ritual' },
    { date: 'September 12, 2025', day: 'Friday', occasion: 'Ananta Chaturdashi', type: 'festival' },
  ];

  const monthlyCalendar = {
    august: [
      { date: 1, tithi: 'Ashtami', nakshatra: 'Pushya', yoga: 'Shukla', karana: 'Kaulava' },
      { date: 2, tithi: 'Navami', nakshatra: 'Ashlesha', yoga: 'Brahma', karana: 'Taitila' },
      { date: 15, tithi: 'Purnima', nakshatra: 'Uttara Phalguni', yoga: 'Harshana', karana: 'Chatushpada' },
      { date: 30, tithi: 'Amavasya', nakshatra: 'Hasta', yoga: 'Vajra', karana: 'Shakuni' },
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">Panchangam</h1>
      
      <div className="max-w-6xl mx-auto">
        <section className="mb-8 text-center">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2 text-orange-700">
              श्री महालसा पञ्चाङ्गम्
            </h2>
            <p className="text-gray-600">Sacred Calendar for Divine Worship</p>
            <div className="mt-4 text-sm text-gray-700">
              <span className="inline-block mx-2">📅 Today: August 10, 2025</span>
              <span className="inline-block mx-2">🌙 Tithi: Krishna Paksha Saptami</span>
              <span className="inline-block mx-2">⭐ Nakshatra: Rohini</span>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-red-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">Upcoming Auspicious Days</h2>
            <div className="space-y-4">
              {auspiciousDays.map((day, index) => (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  day.type === 'major' ? 'border-red-500 bg-red-50' :
                  day.type === 'festival' ? 'border-orange-500 bg-orange-50' :
                  day.type === 'ritual' ? 'border-yellow-500 bg-yellow-50' :
                  'border-green-500 bg-green-50'
                }`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{day.occasion}</h3>
                      <p className="text-gray-600">{day.date} - {day.day}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      day.type === 'major' ? 'bg-red-200 text-red-800' :
                      day.type === 'festival' ? 'bg-orange-200 text-orange-800' :
                      day.type === 'ritual' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-green-200 text-green-800'
                    }`}>
                      {day.type.charAt(0).toUpperCase() + day.type.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Panchangam Elements</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">🌙 Tithi (Lunar Day)</h3>
                <p className="text-gray-700 text-sm">Current: Krishna Paksha Saptami</p>
                <p className="text-gray-600 text-xs mt-1">Duration of 12° lunar longitude</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">⭐ Nakshatra (Constellation)</h3>
                <p className="text-gray-700 text-sm">Current: Rohini</p>
                <p className="text-gray-600 text-xs mt-1">27 lunar mansions for spiritual timing</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">🧘 Yoga (Auspicious Combination)</h3>
                <p className="text-gray-700 text-sm">Current: Shukla</p>
                <p className="text-gray-600 text-xs mt-1">Sun-Moon angular relationship</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">⚡ Karana (Half Tithi)</h3>
                <p className="text-gray-700 text-sm">Current: Kaulava</p>
                <p className="text-gray-600 text-xs mt-1">11 karanas for daily activities</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">🌅 Var (Weekday)</h3>
                <p className="text-gray-700 text-sm">Current: Saturday (Shanivar)</p>
                <p className="text-gray-600 text-xs mt-1">Ruled by Saturn - favorable for devotion</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-700">Sacred Timings</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-green-700">Brahma Muhurta</h3>
              <p className="text-2xl font-bold text-green-800">4:30 AM - 5:15 AM</p>
              <p className="text-sm text-gray-600 mt-2">Most auspicious time for meditation</p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-yellow-700">Sandhya Kaal</h3>
              <p className="text-2xl font-bold text-yellow-800">6:45 PM - 7:15 PM</p>
              <p className="text-sm text-gray-600 mt-2">Twilight prayers and aarti</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-3 text-purple-700">Abhijit Muhurta</h3>
              <p className="text-2xl font-bold text-purple-800">12:05 PM - 12:55 PM</p>
              <p className="text-sm text-gray-600 mt-2">Victory time for important work</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-700">Monthly Festivals & Observances</h2>
          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-700">August 2025</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Aug 15:</strong> Mahalasa Jayanti (Shravan Purnima)</li>
                  <li><strong>Aug 20:</strong> Ganesha Chaturthi</li>
                  <li><strong>Aug 27:</strong> Hartalika Teej</li>
                  <li><strong>Aug 30:</strong> Amavasya (New Moon)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-700">September 2025</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Sep 5:</strong> Rishi Panchami</li>
                  <li><strong>Sep 7:</strong> Krishna Janmashtami</li>
                  <li><strong>Sep 12:</strong> Ananta Chaturdashi</li>
                  <li><strong>Sep 17:</strong> Pitru Paksha Begins</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-orange-700">Ritual Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Daily Worship Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Mangala Aarti:</span>
                  <span>5:00 AM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Madhyana Aarti:</span>
                  <span>12:00 PM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Sandhya Aarti:</span>
                  <span>7:00 PM</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium">Shayan Aarti:</span>
                  <span>9:00 PM</span>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-pink-700">Special Observances</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Tuesdays:</strong> Special worship to Devi</li>
                <li><strong>Fridays:</strong> Lakshmi Puja and offerings</li>
                <li><strong>Ekadashi:</strong> Fasting and Vishnu worship</li>
                <li><strong>Purnima:</strong> Full moon prayers</li>
                <li><strong>Amavasya:</strong> Ancestral prayers</li>
                <li><strong>Navratri:</strong> 9-day Devi worship</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-700 text-center">Sacred Mantras for Daily Recitation</h2>
          <div className="space-y-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Mahalasa Gayatri</h3>
              <p className="text-sanskrit text-lg text-red-600 mb-2">
                ॐ महालसायै विद्महे मोहिनी रूपायै धीमहि तन्नो देवी प्रचोदयात्
              </p>
              <p className="text-sm text-gray-600">
                Om Mahalasayai Vidmahe Mohini Rupayai Dhimahi Tanno Devi Prachodayat
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg mb-2">Beeja Mantra</h3>
              <p className="text-sanskrit text-xl text-orange-600">
                ॐ श्रीं ह्रीं क्लीं महालसायै नमः
              </p>
              <p className="text-sm text-gray-600">
                Om Shreem Hreem Kleem Mahalasayai Namah
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}