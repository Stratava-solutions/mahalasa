export default function ShriGuruCharitra() {
  return (
    <div className="min-h-screen bg-orange-50 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 md:mb-6 text-center">
            श्री गुरु चरित्र
          </h1>
          
          <div className="prose max-w-none">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Shri Guru Charitra
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Guru Charitra is one of the most revered texts in the Dattatreya tradition, 
                chronicling the lives and teachings of the great saints and their divine interventions. 
                This sacred text serves as a beacon of spiritual guidance for devotees seeking the 
                path of devotion and enlightenment.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Written by Shri Saraswati Gangadhar, the Guru Charitra contains 52 chapters that 
                detail the miraculous deeds and profound teachings of Shri Narasimha Saraswati and 
                Shri Sripada Shrivallabha, both considered incarnations of Lord Dattatreya.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
              <div className="bg-orange-50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-3">
                  Importance of Reading Guru Charitra
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Spiritual purification and inner transformation</li>
                  <li>• Protection from negative influences</li>
                  <li>• Blessings of the Guru lineage</li>
                  <li>• Development of faith and devotion</li>
                  <li>• Guidance in spiritual practices</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-3">
                  How to Read Guru Charitra
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Read one chapter daily with devotion</li>
                  <li>• Complete the entire text in 52 days</li>
                  <li>• Read in a clean and sacred space</li>
                  <li>• Begin with prayers to Lord Dattatreya</li>
                  <li>• Contemplate on the teachings</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                Chapter Overview
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The 52 chapters of Guru Charitra are divided into three main sections:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-white border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Chapters 1-20</h4>
                  <p className="text-gray-700 text-sm">
                    Life and teachings of Shri Sripada Shrivallabha
                  </p>
                </div>
                <div className="bg-white border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Chapters 21-46</h4>
                  <p className="text-gray-700 text-sm">
                    Life and miracles of Shri Narasimha Saraswati
                  </p>
                </div>
                <div className="bg-white border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Chapters 47-52</h4>
                  <p className="text-gray-700 text-sm">
                    Spiritual teachings and conclusion
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
                Download Guru Charitra PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}