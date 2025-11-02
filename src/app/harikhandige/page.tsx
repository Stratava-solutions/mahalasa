import { imageUrl } from "@/utls/imageURL";

export default function HarikhandigePage() {
  return (
    <div className="min-h-screen ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <main className="flex-1 bg-pink-50">
            {/* A Spiritual Retreat Section */}
            <section className="mb-8">
              <h1 className="text-4xl font-serif text-gray-800 mb-6">
                A Spiritual Retreat
              </h1>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Deity Image */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                      src={`${imageUrl("/harkandige/hari_home.jpg")}`}
                      alt="Shri Mahalasa Narayani, Harikhandige"
                      className="w-full h-auto rounded"
                    />
                    <p className="text-center text-sm font-semibold text-green-700 mt-2">
                      SHRI MAHALASA NARAYANI, HARIKHANDIGE
                    </p>
                  </div>
                </div>

                {/* Main Description */}
                <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
                  <p className="text-green-700">
                    Our beloved Kuladevata's temple at the Shri Mahalasa
                    Narayani Devi Kshetra at Harikhandige, a rural hamlet about
                    21 kms from Udupi, is unique in its own way.
                  </p>
                  <p>
                    Firstly, when you enter from the main gate, it would appear
                    as if you are entering a resort. Yes, a spiritual resort.
                  </p>
                  <p>
                    Originally conceived as a community hall for devotees to
                    carry out spiritual and social activities, it has now
                    transformed into a lively temple bustling with all sorts of
                    spiritual activities as per Her directions. Nestled amidst
                    hills & forests, the simple but beautiful temple is an ideal
                    example of deep faith, devotion, dedication and sacrifice
                    exhibited by Her devotees.
                  </p>
                  <p>
                    Devotees firmly believe that the all-pervading, all
                    powerful, omnipotent Goddess Shri Mahalasa Narayani, in the
                    celebrated form of Van Devata, grants Her grace to all those
                    who submit to Her.
                  </p>
                </div>
              </div>
            </section>

            {/* Guruji Section */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
                  <p>
                    Devotees undoubtedly give credit to His Holiness Guruji
                    Suresh J Pai. Guruji's main aim, apart from of course the
                    continuous worship of Shri Mahalasa Narayani, of
                    enlightening our society through spiritual and religious
                    awakening. This is one temple where the devotees are
                    themselves encouraged to take part in several{" "}
                    <span className="italic">rituals</span>,{" "}
                    <span className="italic">japa</span>,{" "}
                    <span className="italic">tapa</span> and so on. A devotee
                    can himself/herself perform many rituals such as offering{" "}
                    <span className="italic">Abhishekha</span> and{" "}
                    <span className="italic">Kumkumarchana</span> to the Supreme
                    Mother and Lord Gurudatta.
                  </p>
                  <p>
                    It is important to note here that His Holiness Guruji Shri
                    Suresh J Pai has authored several books of which{" "}
                    <span className="text-blue-600 italic">
                      The Charitra of Goddess Shri Mahalasa Narayani
                    </span>{" "}
                    is considered as the Bhagwad Gita for Kulavis and other
                    followers of Shri Mahalasa Narayani.
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                      src={`${imageUrl("/harkandige/hari_guruji.jpg")}`}
                      alt="His Holiness Guruji Shri Suresh J Pai"
                      className="w-full h-auto rounded"
                    />
                    <p className="text-center text-sm font-semibold text-green-700 mt-2">
                      HIS HOLINESS GURUJI SHRI SURESH J PAI
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Temple Details Section */}
            <section className="mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <img
                      src={`${imageUrl("/harkandige/foot.jpg")}`}
                      alt="Shri Guru Datta Paduka"
                      className="w-full h-auto rounded"
                    />
                    <p className="text-center text-sm font-semibold text-green-700 mt-2">
                      SHRI GURU DATTA PADUKA
                    </p>
                  </div>
                </div>

                <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
                  <p>
                    Apart from Shri Mahalasa's main temple and the Datta Peetha,
                    there are temples devoted to Lords such as Ganesha, Shiva,
                    Rambhakta Hanuman, besides Navagraha & Nagadevata. There is
                    also a Yajnamantap, where{" "}
                    <span className="italic">havans</span> and{" "}
                    <span className="italic">homas</span> in connection with
                    frequent <span className="italic">Anushtans</span> are
                    carried out by <span className="italic">vaidiks</span>{" "}
                    coming in from various regions of Southern India, such as
                    Maharashtra, Kerala and Goa, besides Karnataka.
                  </p>
                  <p>
                    Many astrologers, <span className="italic">vaidiks</span>{" "}
                    and even common devotees have vouched for the presence of
                    Shri Mahalasa Narayani at Harikhandige and have been
                    fortunate enough to receive Her grace. Devotees and visitors
                    are also inspired by the{" "}
                    <span className="italic">Narayani Teertha</span>, the temple
                    tank, which miraculously bore water in an area perennially
                    short of the precious commodity. Indeed, it was by Her grace
                    and directions to Guruji, the Teertha was sunk and water
                    gushed out copiously even after many had given up hope.
                  </p>
                </div>
              </div>
            </section>

            {/* Final Section */}
            <section className="mb-8">
              <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
                <p>
                  Indeed the entire Kshetra was a barren, rocky wasteland: now
                  it is lush and green with many varieties of flowering and
                  fruit-bearing trees and plants, a miracle by itself, all
                  thanks again to Shri Mahalasa Narayani's grace and boundless
                  efforts of the visionary Guruji.
                </p>
                <p className="text-center text-green-700 italic text-lg font-semibold mt-8">
                  A HUMBLE SERVICE AT THE LOTUS FEET OF SHRI GURUDEVA
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
