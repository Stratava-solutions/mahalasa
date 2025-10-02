import Image from "next/image";

export default function Factfile() {
  return (
    <div
      className="min-h-screen text-primary"
      style={{
        background: "linear-gradient(135deg, #f5f2d8 0%, #ede8c8 100%)",
      }}
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-4xl text-primary">
        {/* Title */}
        <div className="text-center text-primary mb-6">
          <h1 className="text-2xl font-bold mb-4 text-primary">
            Did You Know?
          </h1>
        </div>

        {/* Main Content Text */}
        <div className="text-primary p-6 rounded-lg shadow-sm mb-6">
          {/* Kumkum Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-primary" >
              Kumkum
            </h2>
            <div className="flex items-start bg-inherit mb-4">
              <div className="mr-6">
                <Image
                  src="/kunkum.jpg"
                  alt="kunkuma"
                  width={150}
                  height={150}
                  className="rounded"
                />
              </div>
              <div
                className="flex-1 text-primary leading-relaxed"
                
              >
                <p className="mb-4 text-primary">
                  You can give cash, gold, fruits and flowers as offerings to
                  Shri Mahalasa Narayani. But She can be pleased with a devotee
                  with only a very simple offering of Kumkum (vermillion).{" "}
                  <strong style={{ color: "#006633" }}>
                    The devotee's faith is more important than his offering.
                  </strong>
                </p>
                <p className="text-primary">
                  Performing a kumkumarchana, especially with Shri Mahalasa
                  Ashtottara, is highly beneficial.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* The Holy Thread Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              The Holy Thread
            </h2>
            <p
              className="leading-relaxed text-primary italic mb-4"

            >
              <em>
                Shri Mahalasa wears a Janmaue or Yadnopavita or the Holy Thread?
                This is rare for a Goddess!
              </em>
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Jagruk Devata Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" >
              Jagruk Devata
            </h2>
            <p className="leading-relaxed mb-4" >
              Shri Mahalasa Narayani is supposed to be a very Jagruk Daivat
              (Vigilant Deity) even in these modern times. Prayers to her, if
              performed from the heart, seldom go unanswered. Ever since this
              website was launched we have received several e-mails vouching for
              this fact. Some of the e-mails are really very touching.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Profound Impact Section */}
          <div className="mb-8 text-primary">
            <h2 className="text-xl font-bold mb-4">
              Profound impact
            </h2>
            <p
              className="leading-relaxed italic mb-4"
            
            >
              <em>
                Many of the prayers, stuthis and stotras devoted to Her are not
                only pleasing to listen to, but also have a profound impact on
                the listener. These are but ways of reaching out to Her. Anyone
                who calls out to Her is sure to receive Her attention.
              </em>
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Shri Mahalasa's Charitra Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" >
              Shri Mahalasa's Charitra
            </h2>
            <div className="flex items-start mb-4">
              <div className="mr-6 flex-shrink-0">
                <div
                  className="bg-blue-100 p-2 rounded text-center"
                  style={{ width: "120px", height: "140px" }}
                >
                  <div className="bg-white p-2 h-full flex flex-col items-center justify-center text-xs text-primary">
                    <Image
                      src="/devi_maha.jpg"
                      alt="Shri Mahalasa Narayani"
                      width={60}
                      height={80}
                      className="rounded"
                    />
                    <div className="text-center">
                      Shri Mahalasa Narayani's Charitra
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-1 leading-relaxed"
              >
                <p className="mb-4">
                  The Charitra of Goddess Mahalasa Narayani, authored by His
                  Holiness Guruji Shri Suresh J. Pai (of Shri Mahalasa Narayani
                  Devi Kshetra, Harikhandige, fame), came as a direct command
                  from the Goddess, who appeared to him in the course of a
                  dream.
                </p>
                <p className="mb-4">
                  By reading the Charitra, one can conquer his six internal
                  enemies like lust, anger, greed, pride, etc. Not only that,
                  many devotees have immensely benefited from it, spiritually
                  and otherwise. Miseries can be overcome and the human
                  existence becomes meaningful. Indeed by reading it, a devotee
                  can get closer to Mother Mahalasa!
                </p>
              </div>
            </div>
            <p className="leading-relaxed mb-4 text-primary" >
              The Charitra is available in English, Kannada and Marathi
              versions. To know more about the Charitra and the correct way of
              reading it,{" "}
              <span className="text-blue-600 cursor-pointer">click here</span>.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* The Kavacham Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              The Kavacham
            </h2>
            <p
              className="leading-relaxed italic mb-4"
            >
              <em>
                Among the many stotras dedicated to Shri Mahalasa, the most
                interesting is the Kavacham, which means shield or armour. The
                Kavacham is respectfully regarded as having the powers to
                protect one from all evil, illnesses and a host of problems. One
                can recite the Kavacham or listen to it to get mental peace and
                satisfaction. The Kilakam stotra has to follow the Kavacham.
              </em>
            </p>

            {/* Special Note Box */}
            <div className="bg-orange-100 border-2 bg-orange_bg border-orange-300 rounded-lg p-4 mb-6">
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
                <div
                  className="text-md leading-relaxed"
                >
                  <p>
                    <em>
                      Then there are those who keep printed versions of the
                      Kavacham in their breast pocket as a virtual shield! And,
                      rarely do these people face any major problems...
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Sunday, Her day | Palakhi Seva Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" >
              Sunday, Her day | Palakhi Seva
            </h2>
            <div className="flex items-start mb-4">
              <div className="mr-6 flex-shrink-0">
                <div
                  className="bg-gray-100 p-2 rounded text-center "
                  style={{ width: "250px", height: "250px" }}
                >
                  <div className="bg-white  flex-col p-2 h-full flex items-center justify-center text-xs ">
                    <Image
                      src="/devotees.jpg"
                      alt="dev"
                      width={300}
                      height={300}
                      className="rounded"
                    />
                    <div className="text-center">
                      Ecstatic devotees go round Shri Mahalasa's Palakhi at
                      Harikhandige.
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-1 leading-relaxed"
              >
                <p className="mb-4">
                  While every day is important, Sundays hold a special
                  significance. Sunday is supposed to be Shri Mahalasa's day!
                  And it is on this day every week, week after week, that the
                  Palakhi Seva is performed at Mardol. Shri Mahalasa's idol is
                  taken out in the Palakhi, or palanquin, and around the temple
                  to with songs and bhajans.
                </p>
                <p className="mb-4">
                  The Palakhi Seva is an affair not to be missed. At other
                  temples too Palakhi seva is performed on special occasions.
                </p>
              </div>
            </div>
            <p className="leading-relaxed mb-4">
              It is also said that if you happen to be at a temple where Her
              Palakhi is to be taken out (generally this happens in the
              evenings), you are not supposed to leave the temple without taking
              part in the joyous occasion.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Dhool Bhet Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" >
              Dhool Bhet
            </h2>
            <p
              className="leading-relaxed italic mb-4"
              
            >
              <em>
                While our prayers and poojas are offered only after taking a
                bath, when we visit the temple after a long and tiring journey,
                we are supposed to enter these temples and give Dhool Bhet
                (coming in from the dust, to mention in a literal sense),
                thanking the Gods (in the order mentioned above) for making this
                journey possible and so on... After this is done, one can go to
                the temple's residential rooms and take a bath and refresh
                oneself! Only then can the services be offered.
              </em>
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Navaratri Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" >
              Navaratri
            </h2>
            <p className="leading-relaxed mb-4" >
              The most important days of Utsav (festival) are during Navaratri
              which falls during the first fortnight of Ashwin (Ashweeja). This
              is a time when all Her temples are packed with devotees flocking
              from all over to receive Her blessings and partake in the
              communities activities. At Mardol, the Jatra or Jatrotsav is
              another important event, usually during the month of Magha.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Spirituality for all Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" >
              Spirituality for all
            </h2>
            <div className="flex items-start mb-4">
              <div
                className="flex-1 leading-relaxed"
              >
                <p className="mb-4">
                  Shri Mahalasa Narayani's temple at Harikhandige (
                  <span className="text-blue-600 cursor-pointer">
                    click here to visit website
                  </span>
                  ) is unique in many ways. Apart from its location among
                  splendorous hills and forests, She is celebrated here in the
                  form of Van Devata, the Goddess of the forests. However, the
                  main attraction for many devotees here is the adhyatmik
                  (spiritual) philosophy propounded by His Holiness Guruji Shri
                  Suresh J. Pai, who emerged out of a classic guru-shishya
                  tradition. Here, Guruji — also known as The Singing Saint —
                  advises his followers to concentrate continuously on God and
                  avoid the temptations and pitfalls of the material world.
                  Guruji's aim is the enlightenment of our society through
                  spiritual awakening.
                </p>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div
                  className="bg-gray-100 rounded text-center"
                  style={{ width: "200px", height: "200px" }}
                >
                  <div className="bg-white p-2 h-full flex flex-col items-center justify-center text-xs text-primary">
                    <Image
                      src="/suresh_pai.jpg"
                      alt="pai"
                      width={150}
                      height={150}
                      className="rounded"
                    />
                    <div className="text-center pt-4">
                      His Holiness Guruji Shri Suresh J Pai
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Direct participation Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              Direct participation
            </h2>
            <p className="leading-relaxed mb-4" >
              It is amazing that Shri Mahalasa Narayani Devi Kshetra,
              Harikhandige, is one spiritual centre where the direct
              participation of devotees — along with vaidiks and priests, or
              individually — is wholesomely encouraged in many poojas and yajnas
              and on special occasions. On certain days, the devotees themselves
              can perform the Kumkumarchana at Her feet or perform the full
              pooja, including Abhishek seva, to Lord Gurudatta at the
              spiritually powerful Datta Peetha.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* The four-and-a-half gotras Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              The four-and-a-half gotras
            </h2>
            <p className="leading-relaxed mb-4" >
              Shri Mahalasa's Kulavis and Mahajans belong to the following "four
              and a half" Gotras (a form of lineage that is unique to a
              particular family among Hindus. A boy and girl from the same Gotra
              cannot marry, because they are considered to be siblings):
            </p>
            <div className="ml-6 mb-4" >
              <p className="mb-2">a. Kaunsha</p>
              <p className="mb-2">b. Bharadwaj</p>
              <p className="mb-2">c. Atri</p>
              <p className="mb-2">d. Gargeya</p>
              <p className="mb-2">e. Vatsa</p>
            </div>
            <p className="leading-relaxed mb-4" >
              While those from the Kaunsha Gotra, whenever they visit the
              temple, are supposed to worship Shri Mahalasa and then their Kula
              Purush, i.e., Simha Purush, devotees belonging to the other Gotras
              should first pray to Shri Santeri & Shri Laxminarayana, and then
              to Shri Mahalasa and their respective Kula Purush and Shri Gram
              Purush!
            </p>
            <p
              className="leading-relaxed text-sm mb-4"
              
            >
              (You may note that there are five Gotras mentioned but the intro
              said "four and a half". Vatsa Gotris, for reasons not known, are
              considered to be half Gotris.)
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Her Kulavis Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#006633" }}>
              Her Kulavis
            </h2>
            <p className="leading-relaxed mb-4" >
              <em>
                Shri Mahalasa is worshipped by a large section of the Hindu
                society. Her Kulavis are mainly Gowda Saraswat Brahmins. Other
                include the Daivgna and Karhade Brahmins, who also consider Shri
                Mahalasa to be their family deity. Interestingly, they too are
                from the above-mentioned "four and a half" Gotras. Then, there
                are some Vaishyas (traders) Sonars (goldsmiths) and so on, who
                also follow Shri Mahalasa.
              </em>
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-blue-400"></div>
          </div>

          {/* Parashurama's instructions Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: "#006633" }}>
              Parashurama's instructions
            </h2>
            <p className="leading-relaxed mb-4" >
              Lord Parshurama's instructions to the devotees of Shri Mahalasa
              is: She is to be worshipped during the nine parts of the day,
              namely,
            </p>
            <div className="ml-6 mb-4 space-y-1" >
              <p>Pratahkal as Adhishakti,</p>
              <p>Purvanha as Mahamaya,</p>
              <p>Madhyanha as Mulaprakruti,</p>
              <p>Aparanha as Ishwari,</p>
              <p>Sayamkal as Gandhadhwara,</p>
              <p>Pradosh as Duradarsha,</p>
              <p>Ratri as Nithyapushta,</p>
              <p>Madhya Ratri as Karishini, and,</p>
              <p>Apar Ratri as Shri Devi, respectively.</p>
            </div>

            <p className="font-semibold mb-4" style={{ color: "#006633" }}>
              She is to be worshipped by reciting 24 names:
            </p>
            <p className="leading-relaxed mb-4" >
              <strong>Durga, Bhadrakali</strong>, Vijaya, Vaishnavi, Kumuda,
              Dandika, Krishna, Madhavi, Kanyaka, Maya, Narayani, Shanta,
              Sharada, Ambika, Katyayani, Baldurga, Maha Yogini, Adhishwari, Yog
              Nidra,{" "}
              <strong>Mahalaxmi, Kalratri, Mohini, Sarva Deu Namaskarya</strong>
              , and, <strong>Bharati</strong>.
            </p>

            <p className="font-semibold mb-6" style={{ color: "#006633" }}>
              And, says Lord Parshurama, "She will fulfill all your wishes."
            </p>
          </div>

          {/* Final Blessing Box */}
          <div className="bg-orange-100 border-2 border-orange-300 bg-ornage_bg rounded-lg p-6 mb-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1 flex-shrink-0">
                <Image
                  src="/small_gold_god.png"
                  alt="Shri Mahalasa Narayani"
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div className="flex-1">
                {/* Small divider */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-0.5 bg-blue-400"></div>
                </div>

                <p
                  className="text-md leading-relaxed italic mb-4"
                  
                >
                  <em>
                    Blessed be the devotees of Mother Mahalasa with peace and
                    happiness in their spiritual and material life and let all
                    their wishes be fulfilled by Shri Mahalasa Devi. We pray at
                    the Lotus Feet of Shri Mahalasa Narayani for the well-being
                    and prosperity of all the visitors to this website.
                  </em>
                </p>

                {/* Small divider */}
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-0.5 bg-blue-400"></div>
                </div>

                <div className="text-center">
                  <div
                    className="text-lg font-bold"
                    style={{ color: "#B8860B" }}
                  >
                    || <em>SHRI MAHALASA ARPANAMASTU</em> ||
                  </div>
                </div>

                {/* Small divider */}
                <div className="flex justify-center mt-3">
                  <div className="w-12 h-0.5 bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
