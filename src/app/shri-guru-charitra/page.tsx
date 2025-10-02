import Image from "next/image";

export default function ShriGuruCharitra() {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #f5f2d8 0%, #ede8c8 100%)'}}>
      {/* Main Content */}
      <div className="container text-primary mx-auto px-4 py-6 max-w-4xl">
        
        {/* Title and Main Image */}
        <div className="text-center mb-6">
          <div className="mb-4">
            <Image
              src='/guru_chaitra.jpg'
              alt="Shri Guru Charitra"
              width={600}
              height={200}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold mb-4">SHRI GURU CHARITRA</h1>
        </div>

        {/* Main Content */}
        <div className=" p-6 rounded-lg shadow-sm mb-6">
          
          {/* Second Image */}
          <div className="mb-8 text-center">
            <Image
              src='/guru_chaitra_2.jpg'
              alt="Shri Guru Charitra Book Cover"
              width={400}
              height={500}
              className="mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm mt-2 text-gray-600">SHRI MAHAALASAA NAARAAYANI DEVI KSHETRA, HARIKHANDIGE</p>
          </div>

          {/* Main Content Text */}
          <div className="leading-relaxed mb-8">
            <p className="mb-4">
              The <strong>"Shri Guru Charitra"</strong> edited and authored by revered <strong>Shri Suresh J Pai Guruji</strong> has been published in <strong>English, Kannada and Marathi</strong>, which is available to the Devotees who have spread across the Globe. This book elaborately speaks about the divine incarnation of Shri Datta Guru, His divine glories and avatars (i.e Shri Shripad Shri Vallabha and Shri Narasimha Saraswati Swamiji). In this treasure, an attempt is made to highlight all the aspects governing the relationship between Guru and Shishya, Guru's significance in the spiritual life, the duties and obligations of disciples towards Guru and other matters related to spiritual discipline.
            </p>
            
            <p className="mb-6">
              It is a must for aspirants as it equips them with spiritual knowledge and leads them on the righteous path. It helps us to get transformed from mere physical beings into spiritual beings. An additional feature of this noble book is footnoted which helps the aspirants to absorb the cream more fruitfully. The book is available to be couriered to any part of the world. To get your copy, WhatsApp us at <strong>8970414801</strong> or mail us at <strong>sureshjpai@gmail.com</strong>
            </p>
          </div>

          {/* Third Image */}
          <div className="mb-8 text-center">
            <Image
              src='/guru_chaitra_3.jpg'
              alt="Guru Teaching Scene"
              width={500}
              height={350}
              className="mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm mt-2">
              <strong>ಶ್ರೀ ಗುರುಚರಿತ್ರ</strong> - Spiritual Teaching Scene
            </p>
          </div>

          {/* Fourth Image */}
          <div className="mb-8 text-center">
            <Image
              src='/guru_chaitra_4.jpg'
              alt="Lord Dattatreya in Nature"
              width={500}
              height={300}
              className="mx-auto rounded-lg shadow-md"
            />
            <p className="text-sm mt-2">
              <strong>Divine Forest Scene</strong> - Lord Dattatreya in Nature
            </p>
          </div>

          {/* Book Information */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Book Details</h2>
            <div className="leading-relaxed">
              <ul className="space-y-2 mb-6">
                <li>• <strong>Author:</strong> His Holiness Guruji Shri Suresh J Pai</li>
                <li>• <strong>Languages Available:</strong> English, Kannada, and Marathi</li>
                <li>• <strong>Subject:</strong> Divine incarnation of Shri Datta Guru and His avatars</li>
                <li>• <strong>Features:</strong> Detailed footnotes for better understanding</li>
                <li>• <strong>Availability:</strong> Worldwide courier service available</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">How to Order</h3>
            <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4">
              <div className="leading-relaxed">
                <p className="mb-2">
                  <strong>WhatsApp:</strong> 8970414801
                </p>
                <p className="mb-4">
                  <strong>Email:</strong> sureshjpai@gmail.com
                </p>
                <p className="text-sm italic">
                  Available for courier delivery worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Spiritual Benefits */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4">Spiritual Benefits</h3>
            <div className="leading-relaxed">
              <ul className="space-y-2">
                <li>• Transforms physical beings into spiritual beings</li>
                <li>• Provides guidance on the Guru-Shishya relationship</li>
                <li>• Explains duties and obligations of disciples towards Guru</li>
                <li>• Offers comprehensive spiritual discipline knowledge</li>
                <li>• Equips aspirants with righteous path guidance</li>
              </ul>
            </div>
          </div>

          {/* Final Sacred Text */}
          <div className="text-center my-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-blue-400"></div>
            </div>
            <div className="text-xl font-bold mb-4">
              || <em>SHRI GURU CHARITRA ARPANAMASTU</em> ||
            </div>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-blue-400"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}