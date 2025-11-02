import React from "react";

export default function Location() {
  return (
    <div className="bg-pink-100 min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <section className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            How to get there
          </h1>

          <div className="text-gray-800 text-justify leading-relaxed mb-8">
            <p className="text-green-700 text-lg">
              The temple, which is located amidst the lusty green surroundings
              is built according to Vaastu, is an architectural marvel by itself
              and a gem of beauty. The entire setting makes it an ideal place
              for meditation. Hence people are drawn to this beatutiful place
              for spiritual bliss. The temple is located at Shiroor in
              Harikhandige. This temple is accessible by road from Udupi,
              Perdoor, Karkala via Hiriyadka and Sringeri (via Thirthahalli) via
              Perdoor. Tap on the link to{" "}
              <a
                href="https://maps.app.goo.gl/2CGUoRSQzPKTdLLw7"
                className="text-blue-600 hover:underline font-semibold"
              >
                View location
              </a>{" "}
              on the Map.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124269.67660225215!2d74.8390299306366!3d13.26121081134155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca7f4bdea9791%3A0xaec7345c8040eadf!2sShri%20Mahalasa%20Narayani%20Devi%20Kshetra%2C%20Harikhandige!5e0!3m2!1sen!2sin!4v1762102105209!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* By Railway Section */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
            By railway
          </h2>
          <p className="text-green-700 text-lg leading-relaxed">
            Nearest Railway Station is Udupi (station code: UD), 19 kms away.
          </p>
        </section>

        {/* By Air Section */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
            By Air
          </h2>
          <p className="text-green-700 text-lg leading-relaxed">
            Nearest airport is Bajpe International Airport, Mangalore (airport
            code: IXE), roughly 70 kms away.
          </p>
        </section>

        {/* By Road Section */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">
            By Road
          </h2>

          <div className="space-y-8">
            {/* Bus timings from Udupi */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2 flex items-start">
                <span className="mr-2">•</span>
                <span>Bus timings from Udupi</span>
              </h3>
              <p className="text-green-700 text-lg italic ml-6 mb-2">
                (Morning to Evening)
              </p>
              <p className="text-green-700 text-lg ml-6">From 06:15 to 20:30</p>
            </div>

            {/* From Perdoor to Harikhandige */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2 flex items-start">
                <span className="mr-2">•</span>
                <span>From Perdoor to Harikhandige</span>
              </h3>
              <p className="text-green-700 text-lg italic ml-6 mb-2">
                (Every 30 minutes)
              </p>
              <p className="text-green-700 text-lg ml-6">From 07:15 to 20:15</p>
            </div>

            {/* Harikhandige to Udupi */}
            <div>
              <h3 className="text-xl font-bold text-green-700 mb-2 flex items-start">
                <span className="mr-2">•</span>
                <span>Harikhandige to Udupi</span>
              </h3>
              <p className="text-green-700 text-lg italic ml-6 mb-2">
                (Every 30 minutes)
              </p>
              <p className="text-green-700 text-lg ml-6">
                From 06:55 to 19:00.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
