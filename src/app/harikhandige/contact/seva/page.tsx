import React from "react";

export default function Seva() {
  return (
    <div className="bg-pink-100 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Perform Seva to Shri Mahalasa Narayani
          </h1>

          <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
            <p className="text-green-700 text-lg">
              There are many devotees who wish to perform Seva to the Kuladevata
              but cannot do so because of the distances and paucity of time.
              With Her inspirations, we are now bringing to Her Kulavis and
              other devotees a golden opportunity to offer Sevas to Shri
              Mahalasa Narayani. The Prasad will be sent to you by post.{" "}
              <span className="italic">
                At Harikhandige, there is no fixed rate since Service to God is
                not a commercial venture.
              </span>
            </p>
          </div>
        </section>

        {/* Instructions Section */}
        <section className="mb-8">
          <div className="text-gray-800 space-y-4 text-justify leading-relaxed">
            <p className="text-green-700 text-lg">
              Please inform us by e-mail after this has been done. Please
              mention your full name, date of birth, sex, Gotra, Janma Rashi &
              Nakshatra, Seva requested, date of seva, amount you wish to remit,
              comments, if any, and your full postal address. The Seva will be
              performed on the date you specify.{" "}
              <span className="italic">
                All communication in connection with your Seva will be through
                e-mail only. If we deem it necessary, we may contact you over
                phone for confirmation.
              </span>
            </p>

            <p className="text-green-700 text-lg">
              Please book Seva at least 10 days in advance so as to enable us to
              make the necessary arrangements. On receipt of your request, the
              Seva will be performed on the date specified by you and the Prasad
              will be sent by post to the address given.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <div className="text-gray-800 text-justify leading-relaxed">
            <p className="text-green-700 text-lg">
              You can get in touch by sending a mail to :-
              <a href="mailto:sureshpai@gmail.com" className="text-blue-600 hover:underline">
                Dharmadarshi
              </a>{" "}
              or contact/WhatsApp:-{" "}
              <a href="tel:8970414801" className="text-blue-600 hover:underline">
                our representative
              </a>
              .
            </p>
          </div>
        </section>

        {/* Bank Account Details */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Bank Account Details :
          </h2>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            {/* Account 1 */}
            <div>
              <p className="text-green-700 text-lg font-semibold mb-2">
                <span className="font-bold">1)</span> Shri Mahalasa Narayani
                Devi Kshetra,
              </p>
              <p className="text-green-700 text-lg">
                Canara Bank, A/c. Perdoor:01302200083045 IFSC:CNRB0010130.
              </p>
            </div>

            {/* Account 2 */}
            <div>
              <p className="text-green-700 text-lg font-semibold mb-2">
                <span className="font-bold">2)</span> Shri Mahalasa Narayani
                Devi Kshetra,
              </p>
              <p className="text-green-700 text-lg">
                Union Bank, A/c. Manipal:52010123233071 IFSC:UBIN0901288.
              </p>
            </div>

            {/* Reminder */}
            <p className="text-green-700 text-lg">
              Kindly intimate us after remittance.
            </p>
          </div>
        </section>

        {/* Money Order Section */}
        <section className="mb-8">
          <div className="space-y-3 text-gray-800 leading-relaxed">
            <p className="text-green-700 text-lg">
              Alternatively, you can send a Money Order for the amount to:
            </p>

            <div className="text-green-700 text-lg space-y-2">
              <p className="font-bold">Dharmadarshi,</p>
              <p>Shri Mahalasa Narayani Devi Kshetra,</p>
              <p>41, Shiroor, Harikhandige 576 124.</p>
              <p>Udupi District, Karnataka, INDIA.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
