import Image from "next/image";

export default function Charitra() {
  return (
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #f5f2d8 0%, #ede8c8 100%)'}}>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-4" style={{color: '#006633'}}>The Charitra of Goddess Shri Mahalasa</h1>
        </div>

        {/* Main Content Text */}
        <div className=" p-6 rounded-lg shadow-sm mb-6">
          
          {/* Introduction Section */}
          <div className="mb-8">
            <div className="flex items-start mb-6">
              <div className="mr-6 flex-shrink-0">
                <div className="bg-blue-100 p-2 rounded text-center" style={{width: '140px', height: '200px'}}>
                  <div className="bg-white p-2 h-full flex flex-col items-center justify-center text-xs text-gray-600">
                    <img src='/devi_maha.jpg'/>
                    <div className="text-center">Shri Mahalasa Narayani's Charitra</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 leading-relaxed" style={{color: '#333333'}}>
                <p className="mb-4">
                  <strong>The Charitra of Goddess Shri Mahalasa Narayani is considered as the Bhagwad Gita for Kulavis and other followers of Shri Mahalasa Narayani.</strong>
                </p>
                <p className="mb-4">
                  A Parayan or proper reading of the book not only gives one peace of mind, but it is also said to have brought out many devotees from their state of distress. Many have said that this book changed their lives for the better.
                </p>
                <p className="mb-4">
                  <strong>The Charitra in available in Kannada, Marathi and English editions.</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="mr-6 flex-shrink-0">
                <div className="bg-blue-100 p-2 rounded text-center" style={{width: '140px', height: '200px'}}>
                  <div className="bg-white p-2 h-full flex flex-col items-center justify-center text-xs text-gray-600">
                    <img src='/chaitra.jpg'/>
                    <div className="text-center">The Charitra of Mahalasa Narayani in English</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 leading-relaxed" style={{color: '#333333'}}>
                <p className="mb-4">
                  To get the Charitra , one can contact Shri Mahalasa Narayani temple at <strong>Harikhandige, Mardol and Kumta</strong>
                </p>
                <p className="mb-4">You can also contact :</p>
                <p className="mb-2">On whatsapp: <strong>8970414801</strong></p>
                <p className="mb-4">or email at <strong>sureshjpai@gmail.com</strong> for future correspondence.</p>
              </div>
            </div>
          </div>

          {/* Guidelines Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{color: '#006633'}}>Guidelines for reading of the Charitra</h2>
            <div className="leading-relaxed" style={{color: '#333333'}}>
              <ul className="space-y-2 mb-6">
                <li>• Read this book with purity of thought.</li>
                <li>• Anyone can read the Charitra .</li>
                <li>• A word from a Guru would have far-reaching effects.</li>
                <li>• There is no hard and fast rule that the Parayan should begin on any particular day. However, it is best if it is read daily. If that is not possible, it can be read on Sundays, the day that is dear to Shri Mahalasa Narayani.</li>
                <li>• The Charitra can also be read on Tuesdays, Fridays, Asthami, Ekadashi, Dwadashi and on all days of Navaratri, besides days of religious importance.</li>
                <li>• This book should be read with a commitment, pure mind, and utter devotion.</li>
                <li>• One should have satvik (pure) thoughts and satvik (no onion, no garlic, vegetarian) food.</li>
              </ul>
            </div>

            {/* Special Note Box */}
            <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <Image
                    src="/small_gold_god.png"
                    alt="Shri Mahalasa Narayani"
                    width={60}
                    height={80}
                    className="rounded"
                  />
                </div>
                <div className="text-sm leading-relaxed italic" style={{color: '#333333'}}>
                  <p>
                    <em>The benefits of reading the Charitra will be manifold and immediate if read with faith, utter devotion, happiness and concentration.</em>
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Guidelines */}
            <div className="leading-relaxed" style={{color: '#333333'}}>
              <ul className="space-y-2 mb-6">
                <li>• This should be read before any auspicious function at home.</li>
                <li>• At least one chapter should be completed in one sitting.</li>
                <li>• One should take a bath and wear clean clothes.</li>
                <li>• The place where you are sitting while reading should be clean.</li>
                <li>• Before the Parayan, achaman should be done and respects offered to Guru, God and ancestors. Then, one should utter Kala, Samvatsara, Rithu, Maasa, Paksha, Tithi, Wara and Nakshatra.</li>
                <li>• The Goddess's illuminating Charitra should be kept on a chaurangi or manai (wooden reading stand) and must be worshipped.</li>
                <li>• It should be read either facing east or north.</li>
                <li>• The reading should be commenced with Shri Mahalasa Narayani's Kavacaham and Asshottara Shatnamamantra (given in the Charitra itself.)</li>
                <li>• Tribhuvaneshwari Devi's blessed book should be kept at home and worshipped with gandha (sandalwood paste) and flowers. It should be kept perferably in a silk cloth.</li>
                <li>• After the Parayan, the Charitra's pooja should be performed and mangalaarati shown to it.</li>
              </ul>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4" style={{color: '#006633'}}>Coverprice:</h3>
            <div className="leading-relaxed" style={{color: '#333333'}}>
              <ul className="space-y-1 mb-6">
                <li>• <strong>Kannada:</strong> Rs 140</li>
                <li>• <strong>Marathi:</strong> Rs 215</li>
                <li>• <strong>English:</strong> Rs 150</li>
              </ul>
            </div>
          </div>

          {/* Order Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4" style={{color: '#006633'}}>
              <u>Order a Charitra</u> :
            </h3>
            <div className="leading-relaxed" style={{color: '#333333'}}>
              <p className="mb-4">On whatsapp: <strong>8970414801</strong></p>
              <p className="mb-4">Alternatively, kindly send email at <strong>sureshjpai@gmail.com</strong> for future correspondence.</p>
              
              <p className="font-semibold mb-2" style={{color: '#006633'}}>Bank Account Details :</p>
              <p className="mb-2">Shri Mahalasa Narayani Devi Kshetra</p>
              <p className="mb-4">Canara Bank, A/c. Perdoor : <strong>0130200083045</strong> IFSC: <strong>CNRB0010130</strong></p>
              
              <p className="mb-2">Shri Mahalasa Narayani Devi Kshetra</p>
              <p className="mb-4">Union Bank, A/c. Manipal: <strong>520101232336071</strong> IFSC: <strong>UBIN0901288</strong></p>
              
              <p className="mb-6">Kindly intimate us after remittance.</p>
              
              <p className="mb-4">Alternatively, please send a Money Order for the amount to:</p>
              
              <p className="mb-2"><strong>Dharmadarshi,</strong></p>
              <p className="mb-2">Shri Mahalasa Narayani Devi Kshetra,</p>
              <p className="mb-2">41, Shiroor, Harikhandige 576 124.</p>
              <p className="mb-6">Udupi District, Karnataka State. INDIA</p>
            </div>

            {/* New Charitra Image */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 p-2 rounded text-center" style={{width: '120px', height: '200px'}}>
                <div className="bg-white p-2 h-full flex flex-col items-center justify-center text-xs text-gray-600">
                    <img src='/god2.jpg'/>
                  <div className="text-center">The New Charitra of Mahalasa Narayani in Marathi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* About the Author Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-6" style={{color: '#006633'}}>About the Author</h2>
            <div className="flex items-start mb-6">
              <div className="mr-6 flex-shrink-0">
                <div className="bg-gray-100 p-2 rounded text-center" style={{width: '150px', height: '180px'}}>
                  <div className="bg-white p-2 h-full flex flex-col items-center justify-center text-xs text-gray-600">
                    <img src='/suresh.jpg'/>
                    <div className="text-center">Guruji Shri Suresh J Pai</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 leading-relaxed" style={{color: '#333333'}}>
                <p className="mb-4">
                  His Holiness Guruji Shri Suresh J Pai, the Dharmadarshi of Shri Mahalasa Narayani Devi Kshetra, Harikhandige, is the author of The Charitra of Shri Mahalasa Narayani.
                </p>
                <p className="mb-4">
                  Prof. Pai was a commerce lecturer at a Panaji college and was deeply involved in spiritual activities from a very young age. Guruji's aim is the enlightenment of our society through spiritual awakening.
                </p>
                <p className="mb-4">
                  Mother Mahalasa is said to have personally inspired Guruji to pen this path-illuminating <em><strong>magnum opus</strong></em>.
                </p>
              </div>
            </div>
          </div>

          {/* Other Publications Section */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4" style={{color: '#006633'}}>Other Publications from Harikhandige</h3>
            <p className="text-blue-600 cursor-pointer" style={{color: '#006633'}}>
              <u>Click here for our other best-selling publications.</u>
            </p>
          </div>

          {/* Final Divider and Sacred Text */}
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
    </div>
  );
}