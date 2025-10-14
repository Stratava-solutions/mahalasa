import React from "react";

export default function RightSidebar() {
  const informationLinks = [
    { title: "Ghar Wapsi: A Miracle", url: "/about" },
    { title: "Experience of a Seeker", url: "/about" },
    { title: "Panchang in Inbox", url: "/panchangam" },
  ];

  return (
    <div className="bg-bgDefault p-6 w-full sm:w-64 md:w-64 lg:w-64 xl:w-64">
      {/* NEWS Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">NEWS</h2>
        </div>
        <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 p-6">
          <h3 className="text-blue-600 text-2xl font-bold mb-3">
            SHRI GURU CHARITHRA
          </h3>
          <p className="text-blue-600 text-lg leading-relaxed">
            The Holy Granth Shri Guru Charithra authored by Guruji Shri Suresh
            J. Pai is now available in English, Kannada and Marathi . To get
            your copy please call on # No 8970414801.
          </p>
        </div>
      </div>

      {/* INFORMATION Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-xl font-bold">INFORMATION</h2>
        </div>
        <div className="bg-yellow-100 p-6">
          <ul className="space-y-3">
            {informationLinks.map((link, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-4 h-4 bg-gray-400 mt-1 mr-3 flex-shrink-0"></span>
                <a
                  href={link.url}
                  className="text-blue-600 text-lg hover:text-blue-800 hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* VIDEOS Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">VIDEOS</h2>
        </div>
        <div className="bg-yellow-100 p-6">
          {/* Video Placeholder */}
          <div className="bg-black aspect-video flex items-center justify-center mb-4 relative group cursor-pointer">
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-30 transition-all"></div>
            <button className="relative z-10 w-24 h-24 bg-gray-800 bg-opacity-80 rounded-lg flex items-center justify-center hover:bg-opacity-100 transition-all">
              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white border-b-[20px] border-b-transparent ml-2"></div>
            </button>
          </div>
          <p className="text-gray-700 text-base">
            For more videos, go to{" "}
            <a
             target="_blank"
              href="https://www.youtube.com/@shrikantshenoy/videos"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Videos Page
            </a>
          </p>
        </div>
      </div>

      {/* ON FACEBOOK Section */}
      <div className="bg-yellow-100 p-6 flex justify-center">
        {/* Facebook Page Embed */}
        <div className="w-full max-w-[400px] md:max-w-[500px]">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMyMahalasa&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="100%"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
          ></iframe>

          {/* View on Facebook Button */}
          <a
            href="https://www.facebook.com/MyMahalasa/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
          >
            View on Facebook
          </a>
        </div>
      </div>
          <div className="mt-4 text-center">
        <a
          href="https://whatsapp.com/channel/0029VahupPtLCoX2NqbAA00G"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Join our WhatsApp Channel
        </a>
      </div>
    </div>
  );
}
