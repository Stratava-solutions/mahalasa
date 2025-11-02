import React from "react";
import { imageUrl } from "@/utls/imageURL";

export default function GuruCharitra() {
  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Shri Guru Charitra
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Left Text Content */}
            <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
              <p className="text-green-700">
                The <span className="italic">Shri Guru Charitra</span> compiled
                and authored by revered Shri Suresh J Pai Guruji has been
                published in English, Kannada and Marathi, which is available to
                the Devotees who have spread across the Globe. This book
                elaborately speaks about the divine incarnation of Shri Datta
                Guru, His divine glories and avatars (i.e Shri Shripad Shri
                Vallabha and Shri Narasimha Saraswati Swamiji). In this
                treasure, an attempt is made to highlight all the aspects
                governing the relationship between Guru and Shishya, Guru's
                significance in the spiritual life, the duties and obligations
                of disciples towards Guru and other matters related to spiritual
                discipline.
              </p>
            </div>

            {/* Right Image - English Book */}
            <div className="flex justify-center items-start">
              <div className=" p-6 rounded-lg shadow-lg">
                <div className="bg-gray-50 w-full aspect-[3/4] rounded flex items-center justify-center">
                  <img
                    src={`${imageUrl("/guru_chaitra.jpg")}`}
                    alt="Shri Guru Charitra English"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-green-700 mt-4">
                  SHRI GURU CHARITRA [ENGLISH]
                </p>
              </div>
            </div>
          </div>

          {/* Additional Paragraph */}
          <div className="text-gray-800 text-justify leading-relaxed mb-12">
            <p className="text-green-700 text-lg">
              It is a must for aspirants as it equips them with spiritual
              knowledge and leads them on the righteous path. It helps us to get
              transformed from mere physical beings into spiritual beings. An
              additional feature of this noble book is footnoted which helps the
              aspirants to absorb the cream more fruitfully.
            </p>
          </div>
        </section>

        {/* Book Images Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Kannada Book */}
            <div className="flex justify-center">
              <div className=" rounded-lg shadow-lg w-full max-w-md">
                <div className="bg-gray-50 w-full aspect-[3/4] rounded flex items-center justify-center">
                  <img
                    src={`${imageUrl("/guru_chaitra_3.jpg")}`}
                    alt="Shri Guru Charitra Kannada"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-green-700 mt-4">
                  SHRI GURU CHARITRA [KANNADA]
                </p>
              </div>
            </div>

            {/* Marathi Book */}
            <div className="flex justify-center">
              <div className=" p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="bg-gray-50 w-full aspect-[3/4] rounded flex items-center justify-center">
                  <img
                    src={`${imageUrl("/guru_chaitra_4.jpg")}`}
                    alt="Shri Guru Charitra Marathi"
                    className="w-full h-full object-contain rounded"
                  />
                </div>
                <p className="text-center text-sm font-semibold text-green-700 mt-4">
                  SHRI GURU CHARITRA [MARATHI]
                </p>
              </div>
            </div>
          </div>

          {/* Telugu Book - Single Column */}
          <div className="flex justify-center mb-12">
            <div className=" p-6 rounded-lg shadow-lg w-full max-w-md">
              <div className="bg-gray-50 w-full aspect-[3/4] rounded flex items-center justify-center">
                <img
                  src="/api/placeholder/400/500"
                  alt="Shri Guru Charitra Telugu"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <p className="text-center text-sm font-semibold text-green-700 mt-4">
                SHRI GURU CHARITRA [TELUGU]
              </p>
            </div>
          </div>
        </section>

        {/* Guidelines Section */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Guidelines Text */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">
                Guidelines for reciting the Charitra
              </h2>

              <div className="space-y-4 text-gray-800 leading-relaxed">
                <p className="text-green-700">
                  It is beneficial to read preface and chant the name of Shri
                  Datta Guru before and after the recitation of Guru Charitra.
                </p>
                <p className="text-green-700">
                  Shri Guru Charitra should be recited reverentially with a firm
                  commitment to truth, religion, pure deliberation and rightful
                  conduct along with the purified mind.
                </p>
                <p className="text-green-700">
                  Before the recitation of this Charitra, the devotee should
                  take bath, perform{" "}
                  <span className="italic">Sandhyaa Vandana</span> ritual,
                  remember venerable ones, offer respects to Guru, God, elders
                  and ancestors. Then, one should pronounce almanac and make
                  volition for reciting the Charitra..
                </p>
                <p className="text-green-700">
                  Recitation should be done facing eastern or northern
                  direction.
                </p>
                <p className="text-green-700">
                  The devotee must practice purity as per scriptural
                  injunctions.
                </p>
                <p className="text-green-700">
                  Every day, after recitation of this sacred Charitra, the
                  ritual of <span className="italic">Uttar Pooja</span> should
                  be performed.
                </p>
                <p className="text-green-700">
                  The pious book should be kept at Worshipping place and
                  worshiped with <span className="italic">gandha</span> and
                  flowers. It should be wrapped preferably in a silk cloth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
