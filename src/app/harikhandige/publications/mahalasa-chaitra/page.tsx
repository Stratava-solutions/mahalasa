import { imageUrl } from "@/utls/imageURL";
export default function MahalasaCharitra() {
  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">
            The Charitra of Goddess Shri Mahalasa
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Left Image - Kannada Book */}
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="bg-gray-100 w-48 h-64 rounded flex items-center justify-center">
                  <img
                    src={`${imageUrl("/devi_maha.jpg")}`}
                    alt="The Charitra of Mahalasa Narayani in Kannada"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-green-700 mt-3">
                  The Charitra of Mahalasa Narayani in Kannada
                </p>
              </div>
            </div>

            {/* Center Text */}
            <div className="md:col-span-2 text-gray-800 space-y-4 text-justify leading-relaxed">
              <p className="text-green-700">
                The Charitra of Goddess Shri Mahalasa Narayani is considered as
                the Bhagwad Gita for Kulavis and other followers of Shri
                Mahalasa Narayani.
              </p>
              <p className="text-green-700">
                A Parayan or proper reading of the book not only gives one peace
                of mind, but it is also said to have brought out many devotees
                from their state of distress. Many have said that this book
                changed their lives for the better.
              </p>
              <p className="text-green-700">
                The Charitra in available in Kannada, Marathi and English
                editions and to get the Charitra, one can contact Shri Mahalasa
                Narayani temple at Harikhandige, Mardol and Kumta.
              </p>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Guidelines List */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Guidelines for reciting the Charitra
              </h2>

              <div className="space-y-3 text-gray-800 leading-relaxed">
                <p className="text-green-700">
                  Read this book with purity of thought.
                </p>
                <p className="text-green-700">Anyone can read the Charitra.</p>
                <p className="text-green-700">
                  A word from a Guru would have far-reaching effects.
                </p>
                <p className="text-green-700">
                  There is no hard and fast rule that the Parayan should begin
                  on any particular day. However, it is best if it is read
                  daily. If that is not possible, it can be read on Sundays, the
                  day that is dear to Shri Mahalasa Narayani.
                </p>
                <p className="text-green-700">
                  The Charitra can also be read on Tuesdays, Fridays, Asthami,
                  Ekadashi, Dwadashi and on all days of Navaratri, besides days
                  of religious importance.
                </p>
                <p className="text-green-700">
                  This book should be read with a commitment, pure mind, and
                  utter devotion.
                </p>
                <p className="text-green-700">
                  One should have satvik (pure) thoughts and satvik (no onion,
                  no garlic, vegetarian) food.
                </p>
                <p className="text-green-700">
                  This should be read before any auspicious function at home.
                </p>
                <p className="text-green-700">
                  At least one chapter should be completed in one sitting.
                </p>
                <p className="text-green-700">
                  One should take a bath and wear clean clothes.
                </p>
                <p className="text-green-700">
                  The place where you are sitting while reading should be clean.
                </p>
                <p className="text-green-700">
                  Before the Parayan, achaman should be done and respects
                  offered to Guru, God and ancestors. Then, one should utter
                  Kala, Samvatsara, Rithu, Maasa, Paksha, Tithi, Wara and
                  Nakshatra.
                </p>
                <p className="text-green-700">
                  The Goddess's illuminating Charitra should be kept on a
                  chaurangi or manai (wooden reading stand) and must be
                  worshipped.
                </p>
                <p className="text-green-700">
                  It should be read either facing east or north.
                </p>
                <p className="text-green-700">
                  The reading should be commenced with Shri Mahalasa Narayani's
                  Kavacaham and Ashtottara Shatnamavali (given in the Charitra
                  itself.)
                </p>
                <p className="text-green-700">
                  Tribhuvaneshwari Devi's blessed book should be kept at home
                  and worshiped with gandha (sandalwood paste) and flowers. It
                  should be kept preferably in a silk cloth.
                </p>
                <p className="text-green-700">
                  After the Parayan, the Charitra's pooja should be performed
                  and mangalaarati shown to it.
                </p>
              </div>
            </div>

            {/* Right Image - English Book */}
            <div className="flex justify-center items-start">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="bg-gray-100 w-48 h-64 rounded flex items-center justify-center">
                  <img
                    src={`${imageUrl("/chaitra.jpg")}`}
                    alt="The Charitra of Mahalasa Narayani in English"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-green-700 mt-3">
                  The Charitra of Mahalasa Narayani in English
                </p>
              </div>
            </div>
          </div>

          {/* Marathi Book - Bottom Right */}
          <div className="mt-8 flex justify-end">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="bg-gray-100 w-48 h-64 rounded flex items-center justify-center">
                <img
                  src="/api/placeholder/200/280"
                  alt="The Charitra of Mahalasa Narayani in Marathi"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="text-center text-sm font-semibold text-green-700 mt-3">
                The Charitra of Mahalasa Narayani in Marathi
              </p>
            </div>
          </div>
        </section>

        {/* Other Publications Link */}
        <div className="mb-12">
          <a href="#" className="text-blue-600 hover:underline text-lg">
            Click here to view our other publications.
          </a>
        </div>

        {/* About the Author Section */}
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
            About the Author
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Author Image */}
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <div className="bg-gray-100 w-40 h-56 rounded flex items-center justify-center">
                  <img
                    src={`${imageUrl("/suresh.jpg")}`}
                    alt="Guruji Shri Suresh J Pai"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-gray-700 mt-3">
                  Guruji Shri Suresh J Pai
                </p>
              </div>
            </div>

            {/* Author Description */}
            <div className="md:col-span-3 text-gray-800 space-y-4 text-justify leading-relaxed">
              <p className="text-green-700">
                His Holiness Guruji Shri Suresh J Pai, the Dharmadarshi of Shri
                Mahalasa Narayani Devi Kshetra, Harikhandige, is the author of{" "}
                <span className="italic">
                  The Charitra of Shri Mahalasa Narayani
                </span>
                . Prof. Pai was a commerce lecturer at a Panaji college and was
                deeply involved in spiritual activities from a very young age.
                Guruji's aim is the enlightenment of our society through
                spiritual awakening.
              </p>
              <p className="text-green-700">
                Mother Mahalasa is said to have personally inspired Guruji to
                pen this path-illuminating{" "}
                <span className="italic">magnum opus</span>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
