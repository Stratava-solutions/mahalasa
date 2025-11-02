import React from "react";
import { imageUrl } from "@/utls/imageURL";

export default function HistoryContent() {
  return (
    <main className="flex-1 ">
      {/* Header Section */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex justify-center items-start">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full">
              <img
                src={`${imageUrl("/harkandige/house.jpg")}`}
                alt="Top view of Shri Narayani Teertha"
                className="w-full h-auto rounded"
              />
              <p className="text-center text-sm font-semibold text-green-700 mt-2">
                TOP VIEW OF SHRI NARAYANI TEERTHA
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-serif text-gray-800 mb-6">
              Spiritual & divine centre
            </h1>

            <div className="text-gray-800 space-y-4 text-justify leading-relaxed mb-8">
              <p className="text-green-700">
                Situated amidst scenic surroundings in Udupi district near
                Perdoor of coastal Karnataka state is Harikhandige village,
                where people throng in search of peace and spiritual
                inspiration. As ordained by Goddess Shri Mahalasa Narayani, His
                Holiness Guruji Shri Suresh J Pai — a former lecturer at{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Dhempo College
                </a>
                , Goa — chose Harikhandige as the spiritual hub for teaching,
                preaching and social service mission. With the cooperation of
                his followers, he built the temple and got involved in Her
                service.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-gray-800 space-y-4 text-justify leading-relaxed mb-8">
        <p>
          Shri <strong className="text-green-700">Mahaganapati</strong> Temple,
          Shri <strong className="text-green-700">Mahadev</strong> Temple, Shri{" "}
          <strong className="text-green-700">Guru Datta Peetha</strong>, Shri{" "}
          <strong className="text-green-700">Navagraha</strong>, Shri{" "}
          <strong className="text-green-700">Vittal-Rakumai</strong>, Shri{" "}
          <strong className="text-green-700">Mantralay Raghavendra</strong>, and
          the <strong className="text-green-700">Nagabana</strong> are the other
          seats of worship in the surrounding area. The Shri{" "}
          <strong className="text-green-700">Ram Bhakta Maruti</strong> temple
          is situated right in front of the temple of Shri Mahalasa. There is
          also an impressive Yajna Mantap, constructed for conducting various{" "}
          <span className="italic">Havanas</span> and{" "}
          <span className="italic">Homas</span>.
        </p>
      </div>

      {/* Narayani Teertha Section */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
            <p>
              It is a lovely place with rich vegetation all around and a
              shimmering tali or tank, called the Shri Narayani Teertha.
            </p>
            <p>
              Earlier, the Kshetra, which came up in an scorched area covered by
              hard rocks and stones, saw an acute scarcity of water before the
              construction of the temple. As this three-acre piece of land was
              considered to be totally useless, it remained uncultivated, unused
              and neglected. While digging through the hard rock, many were
              ready to give up the hard work, as it was said that not even a
              drop of water would be found in that entire area. However, the
              Supreme Mother indicated to His Holiness Guruji Shri Suresh J Pai
              to continue digging at a particular spot. An lo and behold, water
              did indeed burst forth. The reservoir came up only due to the
              Supreme Mother Mahalasa's own volition in this barren land. Those
              who were sceptical about constructing a temple in such a waste
              land are now silenced.
            </p>
          </div>

          <div className="flex justify-center items-start">
            <div className="bg-white p-4 rounded-lg shadow-lg w-full">
              <img
                src={`${imageUrl("/harkandige/house.jpg")}`}
                alt="Top view of Shri Narayani Teertha"
                className="w-full h-auto rounded"
              />
              <p className="text-center text-sm font-semibold text-green-700 mt-2">
                TOP VIEW OF SHRI NARAYANI TEERTHA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Devotee Experience Section */}
      <section className="mb-8">
        <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
          <p>
            Presently, devotees of Shri Mahalasa Narayani and followers of
            Guruji vouch for the fact that they get mental peace the instant
            they step into the Kshetra. Once they have bowed before the Goddess,
            Her grace surely follows. At Harikhandige, the number of meritorious
            ones who are aspiring for happiness and peace and those who have
            qualified themselves to earn Mother's grace, is growing day by day.
            All these features make the place a heaven on earth for all
            peace-loving people.
          </p>
        </div>
      </section>

      {/* Temple Sketch Section */}
      <section className="mb-8">
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="bg-gray-100 h-96 rounded flex items-center justify-center">
              <img
                src={`${imageUrl("/harkandige/hari-sketch.jpg")}`}
                alt="A sketch of Shri Mahalasa Narayani Temple by a famous arcitect, Shri. Amit Shenoy"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-sm font-semibold text-green-700 mt-4">
              A SKETCH OF SHRI MAHALASA NARAYANI TEMPLE BY A FAMOUS ARCITECT,
              SHRI. AMIT SHENOY
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
