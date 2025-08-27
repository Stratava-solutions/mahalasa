import Image from "next/image";

export default function Panchangam() {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #f5f2d8 0%, #ede8c8 100())'}}>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-5xl">
        
        {/* Calendar Controls */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-4 mb-4 bg-white p-4 rounded border">
            <span className="font-medium">Month:</span>
            <input 
              type="month" 
              defaultValue="2025-01"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
              Go
            </button>
          </div>
          
          <div className="flex justify-between items-center mb-2">
            <button className="text-blue-600 hover:text-blue-800 font-medium">« Previous Month</button>
            <h2 className="text-xl font-bold" style={{color: '#333333'}}>January 2025</h2>
            <button className="text-blue-600 hover:text-blue-800 font-medium">Next Month »</button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white border border-gray-300 mb-8">
          {/* Calendar Header */}
          <div className="grid grid-cols-7 border-b border-gray-300">
            <div className="p-2 text-center font-bold text-red-600 border-r border-gray-300">Sunday</div>
            <div className="p-2 text-center font-bold border-r border-gray-300">Monday</div>
            <div className="p-2 text-center font-bold border-r border-gray-300">Tuesday</div>
            <div className="p-2 text-center font-bold border-r border-gray-300">Wednesday</div>
            <div className="p-2 text-center font-bold border-r border-gray-300">Thursday</div>
            <div className="p-2 text-center font-bold border-r border-gray-300">Friday</div>
            <div className="p-2 text-center font-bold text-red-600">Saturday</div>
          </div>
          
          {/* Calendar Rows */}
          <div className="grid grid-cols-7">
            {/* First Row */}
            <div className="p-2 border-r border-b border-gray-300 min-h-24"></div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24"></div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">1</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">2</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-40">
              <div className="font-bold">3</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SHRI DATTA PADUKA</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Shri Datta Paduka" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Special Pooja to Lord Shri Gurudatta by devotees.
              </div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold text-red-600">4</div>
            </div>
            <div className="p-2 border-b border-gray-300 min-h-24">
              <div className="font-bold text-red-600">5</div>
            </div>

            {/* Second Row */}
            <div className="p-2 border-r border-b border-gray-300 min-h-40">
              <div className="font-bold text-red-600">5</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SATSANG</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Satsang" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Satsang with His Holiness Guruji Shri Suresh J Pai
              </div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">6</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">7</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">8</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-40">
              <div className="font-bold">9</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SHRI DATTA PADUKA</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Shri Datta Paduka" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Special Pooja to Lord Shri Gurudatta by devotees.
              </div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">10</div>
            </div>
            <div className="p-2 border-b border-gray-300 min-h-24">
              <div className="font-bold text-red-600">11</div>
            </div>

            {/* Third Row */}
            <div className="p-2 border-r border-b border-gray-300 min-h-40">
              <div className="font-bold text-red-600">12</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SATSANG</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Satsang" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Satsang with His Holiness Guruji Shri Suresh J Pai
              </div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">13</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">14</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">15</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-40">
              <div className="font-bold">16</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SHRI DATTA PADUKA</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Shri Datta Paduka" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Special Pooja to Lord Shri Gurudatta by devotees.
              </div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">17</div>
            </div>
            <div className="p-2 border-b border-gray-300 min-h-24">
              <div className="font-bold text-red-600">18</div>
            </div>

            {/* Fourth Row */}
            <div className="p-2 border-r border-b border-gray-300 min-h-40">
              <div className="font-bold text-red-600">19</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SATSANG</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Satsang" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Satsang with His Holiness Guruji Shri Suresh J Pai
              </div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">20</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">21</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">22</div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-40">
              <div className="font-bold">23</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SHRI DATTA PADUKA</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Shri Datta Paduka" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Special Pooja to Lord Shri Gurudatta by devotees.
              </div>
            </div>
            <div className="p-2 border-r border-b border-gray-300 min-h-24">
              <div className="font-bold">24</div>
            </div>
            <div className="p-2 border-b border-gray-300 min-h-24">
              <div className="font-bold text-red-600">25</div>
            </div>

            {/* Fifth Row */}
            <div className="p-2 border-r border-gray-300 min-h-40">
              <div className="font-bold text-red-600">26</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SATSANG</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Satsang" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Satsang with His Holiness Guruji Shri Suresh J Pai
              </div>
            </div>
            <div className="p-2 border-r border-gray-300 min-h-24">
              <div className="font-bold">27</div>
            </div>
            <div className="p-2 border-r border-gray-300 min-h-24">
              <div className="font-bold">28</div>
            </div>
            <div className="p-2 border-r border-gray-300 min-h-24">
              <div className="font-bold">29</div>
            </div>
            <div className="p-2 border-r border-gray-300 min-h-40">
              <div className="font-bold">30</div>
              <div className="bg-green-400 text-white text-xs px-1 mt-1 rounded">SHRI DATTA PADUKA</div>
              <div className="mt-1">
                <Image src="/suresh.jpg" alt="Shri Datta Paduka" width={30} height={25} className="rounded" />
              </div>
              <div className="text-xs text-blue-600 mt-1 leading-tight">
                Shri Mahalasa Narayani Devi Kshetra, Harikhandige: Special Pooja to Lord Shri Gurudatta by devotees.
              </div>
            </div>
            <div className="p-2 border-r border-gray-300 min-h-24">
              <div className="font-bold">31</div>
            </div>
            <div className="p-2 min-h-24"></div>
          </div>
        </div>

        {/* Category Key */}
        <div className="bg-white p-4 mb-8 rounded border">
          <h3 className="text-lg font-bold mb-4" style={{color: '#006633'}}>Category Key</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-400 rounded"></div>
              <span>Karyakram/Event</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-400 rounded"></div>
              <span>Tithi/Date</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-400 rounded"></div>
              <span>Utsav/Festival</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-400 rounded"></div>
              <span>Vishesh Din/Special Day</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-blue-400"></div>
        </div>

        {/* Explanations Section */}
        <div className="bg-white p-6 mb-8 rounded">
          <h2 className="text-xl font-bold mb-4" style={{color: '#006633'}}>Explanations</h2>
          
          {/* Special Note Box */}
          <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1 flex-shrink-0">
                <Image
                  src="/god.jpg"
                  alt="Shri Mahalasa Narayani"
                  width={60}
                  height={80}
                  className="rounded"
                />
              </div>
              <div className="text-sm leading-relaxed" style={{color: '#333333'}}>
                <p>
                  <em>In Vedic astrology, Panchang (or Panchangam in Sanskrit) means "five (panch) sense organs (angam)" or "five attributes" of the day: Wara, Tithi, Nakshatra, Yoga and Karana. The last two are also significant for they are a guide on auspicious or inauspicious times. Simply put, Panchang means calendar or almanac in English.</em>
                </p>
              </div>
            </div>
          </div>

          <div className="leading-relaxed text-sm" style={{color: '#333333'}}>
            <p className="mb-4">
              Two Maasas (months) make a Rithu (season). Three Rithus make one Aayana. There are two Aayanas, Uttarayana & Dakshinayana.
            </p>
            
            <p className="mb-4">
              <strong style={{color: '#006633'}}>AAYANA (Sun's Position):</strong> Uttarayana (When the Sun begins its Nothward movement a day after Winter Solstice, around December 22), Dakshinayana (When the Sun begins its Southward movement a day after Summer Solstice, around June 21 – dates vary)
            </p>
            
            <p className="mb-4">
              <strong style={{color: '#006633'}}>RITHU & MAASA (Season & Month):</strong> <strong>Vasanta</strong> – Chaitra, Vaishakha; <strong>Grishma</strong> – Jyeshta, Ashadha; <strong>Varsha</strong> – Shravana, Bhadrapada; <strong>Sharad</strong> – Ashwin, Karthik; <strong>Hemanth</strong> – Margashirsha, Pausha; <strong>Shishira</strong> – Magha, Phalgun.
            </p>
            
            <p className="mb-4">
              <strong style={{color: '#006633'}}>WARA (Weekday):</strong> Raviwar, Somwar, Mangalwar, Budhwar, Guruwar, Shukrawar, Shaniwar
            </p>
            
            <p className="mb-4">
              <strong style={{color: '#006633'}}>PAKSHA (Lunar cycle):</strong> One Maasa equals to two Pakshas, each consisting of 15 tithis. Shukla Paksha (Shuddha) or the waxing of the moon from Pratipada to Poornima (Full Moon day), Krishna Paksha (Vadya) or waning of the moon from Pratipada to Amavasya (New Moon day).
            </p>
            
            <p className="mb-4">
              <strong style={{color: '#006633'}}>TITHI (Date):</strong> Pratipada (Padya), Dwitiya (Bidige), Tritiya (Tadige), Chaturthi (Chowthi), Panchami, Shashti, Saptami, Ashtami, Navami, Dashami, Ekadashi, Dwadashi, Trayodashi, Chaturdashi, Poornima (in Shukla Paksha)/Amavasya (in Krishna Paksha). These days are also referred to as:
            </p>
            
            <p className="mb-4">
              <strong style={{color: '#006633'}}>NAKSHATRA (Stars):</strong> Ashwini, Bharani, Krittika, Rohini, Mrigashirsha, Aardra, Punarvasu, Pushya, Aslesha, Magha, Poorva Phalguni, Uttara Phalguni, Hasta, Chitra, Swati, Vishakha, Anuradha, Jyeshtha, Mula, Poorva Ashadha, Uttara Ashadha, Shravana, Dhanishta, Shatabhisha, Poorva Bhadrapada, Uttara Bhadrapada, Revati
            </p>
            
            <p className="mb-4">
              <strong style={{color: '#006633'}}>RASHI (Zodiac Signs):</strong> Mesha (Aries), Vrishabha (Taurus), Mithuna (Gemini), Karkata (Cancer), Simha (Leo), Kanya (Virgo), Tula (Libra), Vrishchika (Scorpio), Dhanu (Sagittarius), Makara (Capricorn), Kumbha (Aquarius), Meena (Pisces).
            </p>
            
            <p className="mb-4">
              * It is important to know your Rashi and Nakshatra while fixing a date for auspicious events like thread ceremony, marriage, house warming, and so on. Rashi & Nakshatra is also used in selecting the name of a baby.
            </p>
            
            <p className="mb-4">
              * In our Panchang, we refer to MyPanchang.com, with Udupi as the base. While we recommend MyPanchang, for information required for performing poojas or other rituals, your personal horoscope may be required. Hence, please contact your local priest/astrologer for the same.
            </p>
            
            <p className="mb-4">
              * Please note that we do not have any control over any external sites and we are not responsible for their contents nor do we vouch for the authenticity of their content. We accept no liability for any issues arising out of such content.
            </p>
            
            <p className="mb-6">
              * The terminologies we use are commonly used and understood. As such we don't have any particular preference for these.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-blue-400"></div>
        </div>

        {/* Regular Events Section */}
        <div className="bg-white p-6 mb-8 rounded">
          <h2 className="text-xl font-bold mb-4" style={{color: '#006633'}}>Regular events at temples</h2>
          
          <div className="space-y-6 text-sm leading-relaxed" style={{color: '#333333'}}>
            <div>
              <h3 className="font-bold mb-2" style={{color: '#006633'}}>HARIKHANDIGE:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Every Sunday 11:00 am: Satsang by Shri Suresh Guruji J Pai</li>
                <li>Anna Santarpana every Sunday afternoon to devotees.</li>
                <li>Shri Gurudatta Paduka Pooja at Datta Peetha every Thursday at 7:00 am</li>
                <li>Night Pooja & Arghi every Sankashti</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2" style={{color: '#006633'}}>MARDOL:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Shri Mahalasa Narayani's Palakhi every Sunday evening</li>
                <li>Shri Santeri's Palakhi every Panchami</li>
                <li>Shri Vitobhalankar Pooja every Ekadashi.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2" style={{color: '#006633'}}>BASRUR:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Shri Mahalasa Narayani's Palakhi on 1st Sunday of every month at 6:00 pm from Vijaya Dashami to Vaishakha Poornima.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2" style={{color: '#006633'}}>KUMTA:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Shri Mahalasa's Palakhi on Sunday evenings following every Amavasya preceded by Darshan Seva in the afternoon.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-2" style={{color: '#006633'}}>MADANGERI:</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Darshan Seva on Sunday evenings following every Poornima.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Sacred Text */}
        <div className="text-center my-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>
          <div className="text-xl font-bold mb-4" style={{color: '#B8860B'}}>
            || <em>SHRI MAHALASA ARPANAMASTU</em> ||
          </div>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>
        </div>

      </div>
    </div>
  );
}