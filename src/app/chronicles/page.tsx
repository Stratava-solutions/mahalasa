import Image from "next/image";

export default function Chronicles() {
  return (
    <div className="text-primary min-h-screen">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-700 mb-4">
            The Samudra Manthan
          </h1>
        </div>

        {/* Main Content Text */}
        <div className="p-6 rounded-lg shadow-sm mb-6">
          <div className="text-primary leading-relaxed text-justify">
            <p className="mb-4">
              Shri Mahalasa Narayani's story is considered to be directly
              related to the story of Samudra Manthan or the Churning of the
              Sea, according to the Bhagwat Purana.
            </p>

            <p className="mb-4">
              The Gods and the Asuras (Demons) churned the sea to get back the
              treasures which got immersed in the sea due to Sage Durvasa's
              curse. During this churning process emerged the fourteen ratnas
              (treasures), including Amrut (nectar of life) which could make
              anyone who drinks it immortal.
            </p>

            <p className="mb-4">
              There was a fight between the Gods and demons. In order to help
              the Gods, Lord Vishnu had to take the avatar (incarnation) of
              Mohini or the Enchantress.
            </p>

            <p className="mb-4">
              She was so beautiful that the eyes of all demons got riveted on
              her face. In the meanwhile, she distributed Amrut to the Gods and
              nothing was left for the demons.
            </p>

            <p className="mb-6">
              <strong className="text-primary">
                Shri Mahalasa is another name for Lord Vishnu's Mohini Roopa
                (incarnation)!
              </strong>
            </p>

            {/* Image with text wrapper */}
            <div className="mb-6">
              <div className="float-left mr-6 mb-4">
                <div
                  className="bg-gray-100 p-2 rounded text-center"
                  style={{ width: "200px", height: "250px" }}
                >
                  <div className="bg-white p-4 h-full flex flex-col items-center justify-center text-sm text-gray-600">
                    <Image
                      src="/roopa_mohini.jpg"
                      alt="Shri Mahalasa Narayani"
                      width={100}
                      height={100}
                      className="rounded"
                    />
                    A painting of the Mohini Roopa of Lord Shri Vishnu
                  </div>
                </div>
              </div>

              <div
                className="bg-green-50 p-4 rounded mb-4"
                style={{ marginLeft: "220px" }}
              >
                <p className="text-sm leading-relaxed">
                  There exists another reference to Mohini Avatar in Brahmanda
                  Purana, but Mahalasa is associated with Mohini of Samudra
                  Manthan only.
                </p>
              </div>

              <div
                className="bg-green-50 p-4 rounded mb-4"
                style={{ marginLeft: "220px" }}
              >
                <p className="text-sm  leading-relaxed">
                  But there is another folklore as to how Mohini turned into
                  Mahalasa. The legend has it that Lord Shiva was also enchanted
                  by Mohini, who promised that when Lord Shiva will be born as
                  Martand Bhairav, Mohini would marry him and at that time she
                  would be called as Mahalasa.
                </p>
              </div>

              <div className="clear-both"></div>
            </div>

            <p className="mb-4">
              In course of time Lord Shiva was born as Martand Bhairav and he
              conquered a demon called Malhar. Hence he was called Malhari, also
              known as Khandoba. Mohini was born in the house of Tima Shet and
              the child was named Mahalasa. Malhari later married Mahalasa and
              thus the concept of Mohini remained associated with Mahalasa.
            </p>

            <p className="mb-4">
              In yet another folklore, Lord Shiva's wife Parvati appeared to him
              as beautiful as Mohini. Thus, Parvati who was later Mahalasa, is
              also associated with Mohini incarnation.
            </p>

            <p className="mb-6">
              However, in Mardol and other present-day temples, especially of
              those belonging to the GSB community, Mahalasa is dissociated from
              Shiva-Parvati concept and entirely regarded as the Mohini Roopa of
              Lord Vishnu only. The nomenclature Mahalasa Narayani distinctly
              corroborates this concept.
            </p>
          </div>

          {/* Special Note Box */}
          <div className=" border-2 border-orange-300 bg-orange_bg rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className=" mr-4 mt-1 flex-shrink-0">
                <Image
                  src="/small_gold_god.png"
                  alt="Shri Mahalasa Narayani"
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div className="text-md  leading-relaxed">
                <p>
                  <em>
                    <strong className="text-primary">
                      Shri Mahalasa Narayani
                    </strong>
                    , it may particularly be noted, also wears the holy thread,{" "}
                    <strong>Yadnyopavitra</strong>, which is its unique feature.
                  </em>
                </p>
              </div>
            </div>
          </div>

          <div className=" leading-relaxed text-justify">
            <p className="mb-4">
              The worship of this deity prevailed from the very ancient times
              among the Saraswat Brahmins from times before their settlement in
              Goa, or Gomantak as it was known.
            </p>

            <p className="mb-4">
              In the Sahyadri Khand of the Skand Purana, it is said that
              Parushuram brought 10 Saraswat families in Gomantak from their
              settlements in Trihotra in the North. These 10 families brought
              with them their following family deities:
            </p>

            <p className="mb-4 ml-6">
              <strong>
                Mangueshi, Mahadeva, Mahalaxmi, Mahalasa, Shantadurga, Nagesh
                and Saptkoteshwar.
              </strong>
            </p>

            <p className="mb-4">
              Later, more Saraswat families came to Goa and they too brought
              with them their own family deities.
            </p>

            {/* Image with text wrapper for second section */}
            <div className="mb-6">
              <div className="float-right ml-6 mb-4 w-[200px]">
                <div className="bg-gray-100 p-2 rounded">
                  <Image
                    src="/sword_fight.jpg"
                    alt="Khandoba and Mahalasa killing demons Mani-Malla"
                    width={200}
                    height={180}
                    className="rounded mb-2"
                  />
                  <p className="text-xs text-primary text-center">
                    Khandoba and Mahalasa killing <br />
                    demons Mani-Malla. Lithograph <br />
                    by Chitrashala Press, Poona. <br />
                    Photo courtesy: Wikipedia Commons <br />
                  </p>
                </div>
              </div>

              <p className="mb-4">
                In all, there were 66 families which settled in Salcette taluka.
                Of them, six families settled in Varyenapur or Varunapur (old
                Mhaddol), commonly known as Vernem during Portuguese rule and
                Verna now.
              </p>

              <p className="mb-4">
                There are many stories associated with how the idol of Mahalasa
                came to be installed in the temple at Mardol. But the migration
                of this deity took place from Varunapur or Verna to its present
                place during the middle of the sixteenth century.
              </p>

              <div className="clear-both"></div>
            </div>

            <p className="mb-4">
              While the minute details are not known, it is evident that this
              migration took place during the persecution launched by the
              Christian missionaries during the Portuguese rule.
            </p>

            <p className="mb-4">
              The Mardol temple is about four and a half century old. In the
              Year Shaka 1789, Prabhav Samvatsar, the temple was repaired and a
              copper roofing was fixed. A copper plate inscription in the temple
              describes this event. Barring this, the entire other original
              construction is untouched and is indicative of the ancient
              exquisite workmanship.
            </p>

            <p className="mb-4">
              The idol of Shri Mahalasa is in standing position and has four
              hands; there is a Trishul (trident) in the right back hand and an
              Amrut Kumbha in left back hand.
            </p>

            <p className="mb-4">
              A demon, Virochan, is kneeling at the right hand side and he
              appears to have been held by hair in the right forehand. There is
              a demon under her feet, and the severed, bleeding head of a demon
              in her left hand, under which a lion (there are some differences
              among scholars on the animal) appears to be licking the trickling
              blood.
            </p>

            <p className="mb-6">
              On the Prabhaval in the background, the name Shri Mahalasa is
              inscribed in Devanagari along with Shankha (Conch), Chakra (Disc),
              Sesha, and so on, which signify the association with Lord Vishnu.
            </p>
          </div>

          {/* Divider */}
          <div className="text-center my-8">
            <div className="text-primary text-sm mb-2"></div>
            <div
              className="text-xl font-boldtext-primary mb-2"
              style={{ color: "#B8860B" }}
            >
              || <em>SHRI MAHALASA ARPANAMASTU</em> ||
            </div>
            <div className="text-primary text-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
