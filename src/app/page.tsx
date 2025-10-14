import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#eee9c0] text-primary min-h-screen">
      <HeroSection />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary mb-4">
            The Divine Mother's Glory
          </h2>
        </div>

        {/* Main Goddess Image */}
        <div className="font-bold text-primary mb-10 leading-relaxed md:flex md:items-start md:gap-6">
          {/* Image section */}
          <div className="md:w-[70%] w-full">
            <Image
              src="/god.jpg"
              alt="Shri Mahalasa Narayani"
              width={410}
              height={551}
              className="w-full h-auto border-4 border-yellow-600 rounded-lg shadow-lg"
              priority
            />
            <p className="text-sm text-primary mt-2 italic text-center">
              Shri Mahalasa Narayani
            </p>
          </div>

          {/* Text section */}
          <div className="md:w-[30%] w-full mt-4 md:mt-0 text-left font-semibold">
            <p className="mb-4">
              <strong className="text-primary">SHRI MAHALASA NARAYANI</strong>{" "}
              is the powerful <strong>Kuladevata</strong> (family deity) of many
              Hindus, especially in western and southern India.
            </p>

            <p className="mb-4">
              <strong className="text-primary">"Mahalasa"</strong> is another
              name for the Supreme Lord Vishnu's famous <strong>avatar</strong>{" "}
              (incarnation):{" "}
              <strong className="text-primary">Mohini, the Enchantress</strong>.
            </p>

            <p className="mb-4">
              Temples dedicated to the worship of Shri Mahalasa Narayani are
              present in Maharashtra, Goa, Karnataka, Kerala, and many other
              places.
            </p>

            <p className="mb-4">
              <strong className="text-primary">SHRI MAHALASA NARAYANI</strong>{" "}
              is the powerful <strong>Kuladevata</strong> of many Hindus,
              especially in western and southern India.
            </p>
            <p className="mb-4">
              <strong className="text-primary">SHRI MAHALASA NARAYANI</strong>{" "}
              is the powerful <strong>Kuladevata</strong> (family deity) of many
              Hindus, especially in western and southern India.
            </p>
            <p className="mb-4">
              <strong className="text-primary">"Mahalasa"</strong> is another
              name for the Supreme Lord Vishnu's famous <strong>avatar</strong>{" "}
              (incarnation):{" "}
              <strong className="text-primary">Mohini, the Enchantress</strong>.
            </p>
            <p className="mb-4">
              <strong className="text-primary">SHRI MAHALASA NARAYANI</strong>{" "}
              is the powerful <strong>Kuladevata</strong> (family deity) of many
              Hindus, especially in western and southern India.
            </p>
          </div>
        </div>

        {/* Main Content Text */}
        <div className="bg-[#eee9c0] p-6 rounded-lg shadow-sm mb-6">
          <div className="prose max-w-none  leading-relaxed">
            <p className="mb-4">
              <strong className="text-primary">SHRI MAHALASA NARAYANI</strong>{" "}
              is the powerful <strong>Kuladevata</strong> (family deity) of many
              Hindus, especially in western and southern India.
            </p>

            <p className="mb-4">
              <strong className="text-primary">"Mahalasa"</strong> is another
              name for the Supreme Lord Vishnu's famous <strong>avatar</strong>{" "}
              (incarnation):{" "}
              <strong className="text-primary">Mohini, the Enchantress</strong>.
            </p>

            <p className="mb-4">
              Temples dedicated to the worship of Shri Mahalasa Narayani are
              present in Maharashtra, Goa, Karnataka, Kerala and many other
              places.
            </p>

            <p className="mb-4">
              The most popular temple of Supreme Mother Mahalasa is at Mardol in
              Goa, which is over 450 years old. Other temples, like the one in
              Kumta and Basrur, both in Karnataka, are also said to be over 400
              years old.
            </p>

            <p className="mb-4">
              Yet, Shri Mahalasa Narayani has other ancient and historic temples
              dedicated to Her, including at Nevase in Ahmednagar district of
              Maharashtra, where she is known as Shri Mohiniraj of the Amrut
              Manthan (the epic churning of the ocean) fame. It is believed that
              it is from Nevase that Shri Mahalasa Narayani came to Verna in
              Gomantak, that is present-day Goa. Before Nevase, there is a
              Mohini temple in Nepal, near the world-famous Pashupatinath
              temple.
            </p>

            <p className="mb-4">
              However, one temple to{" "}
              <strong className="text-primary">Amma Mahalasa</strong> that
              deserves special mention here is the scenic spiritual center at
              the idyllic{" "}
              <strong className="text-blue-600">Harikhandige</strong> village in
              Udupi district of coastal Karnataka. Nestled amidst hills &
              forests, Shri Mahalasa Narayani Devi Kshetra campus is an ideal
              example of deep faith, devotion, dedication and sacrifice
              exhibited by Her devotees. Constructed just over decade ago, the
              Harikhandige temple, by far, is growing more and more popular with
              every passing day as stories of Her miracles here abound! And, all
              because of one divine person, Her Blessed Son, whom many consider
              as a living God:{" "}
              <strong className="text-orange-600">
                His Holiness Guruji Shri Suresh J Pai
              </strong>
              .
            </p>

            <p className="mb-6">
              This portal, consisting of information from many of Her temples,
              is a humble service to the almighty Beloved Kuladevata, and a
              contribution to millions of Her devotees by providing them
              information about Shri Mahalasa Narayani and Her infinite
              greatness; about many of the temples dedicated to Her, various
              alankaars (appearances), stotras and stuthis, audios, videos, and
              so on. And,{" "}
              <em>
                not to forget, the nectar of information—inspired by Herself—in
                the form Her Charitra, the Holy Book that has given immense
                inspiration and relief from worldly difficulties, to Her
                devotees. To get more information on how to receive Her grace,
                click on the <strong className="text-blue-600">Charitra</strong>{" "}
                page
              </em>
              .
            </p>
          </div>

          {/* Seva Box */}
          <div className=" border-2 border-orange-300 bg-orange_bg rounded-lg p-4 mb-6">
            <div className="flex  items-start">
              <div className="mr-1 mt-1">
                <Image
                  src="/god.jpg"
                  alt="Goddess icon"
                  width={400}
                  height={400}
                  className="rounded"
                />
              </div>
              <div>
                <p className="text-md  leading-relaxed">
                  <em>
                    This portal also provides an opportunity to devotees, who
                    are otherwise constrained by distance and time, to perform a{" "}
                    <strong className="text-primary">Seva</strong> to Shri
                    Mahalasa Narayani on a date and time of their choice and
                    receive Her Prasad and, more importantly,{" "}
                    <strong className="text-primary">
                      Her infinite love and blessings!
                    </strong>
                  </em>
                </p>
                <p className="text-sm  mt-2">
                  Please visit the{" "}
                  <strong className="text-blue-600">Seva</strong> page for
                  details.
                </p>
              </div>
            </div>
          </div>

          <div className=" leading-relaxed">
            <p className="mb-4">
              The most popular section of this portal is the{" "}
              <strong className="text-blue-600">Panchang</strong> section (at
              left), which gives you the tithis & festivals of the day and week
              ahead and events at Her various temples (from where we receive
              regular information). The{" "}
              <strong className="text-blue-600">Panchang</strong> page gives you
              the entire month's calendar of tithis and events.
            </p>

            <p className="mb-4">
              This site, first created in 1998, continues to grow as we receive
              more and more information about Shri Mahalasa Narayani and Her
              infinite glories. Apart from this portal, separate websites have
              been created as subdomains for several temples. Click on the{" "}
              <strong className="text-blue-600">Temple</strong> link in the
              navigation bar above to explore Her various temples from the
              drop-down menu.
            </p>

            <p className="mb-6">
              Please remember to visit this Temple on the Internet regularly to
              receive Mother Mahalasa's blessings and also share this useful
              information with your family and friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
