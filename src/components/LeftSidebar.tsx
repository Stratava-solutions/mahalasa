import React from "react";

export default function LeftSidebar() {
  const events = [
    {
      date: "January 23, 2026",
      badge: "SHRI DATTA POOJA",
      badgeColor: "bg-green-500",
      //   image: '/suresh.jpg',
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Special Pooja to Lord Shri Gurudatta by devotees.",
      time: "at 7:00 am",
    },
    {
      date: "January 26, 2025",
      badge: "SATSANG",
      badgeColor: "bg-green-500",
      image: "/suresh.jpg",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Satsang with His Holiness Guruji Shri Suresh J Pai",
      time: "at 11:30 am",
    },
  ];

  return (
    <div className="bg-bgDefault p-6 w-full sm:w-64 md:w-48 lg:w-48 xl:w-48">
      {/* Header */}
      <div className="mb-6">
        <p className="text-blue-600 text-lg mb-4">
          To get the above information -- and MORE -- in your e-mail inbox
          daily,{" "}
          <a
            target="_blank"
            href="/panchang-in-inbox"
            className="underline hover:text-blue-800"
          >
            click here
          </a>
          .
        </p>
      </div>

      {/* The Week Ahead Section */}
      <div className="bg-green-800 text-white text-center py-4 mb-6">
        <h2 className="text-xl font-bold">THE WEEK AHEAD</h2>
      </div>

      {/* Events */}
      {events.map((event, index) => (
        <div key={index} className="mb-8">
          {/* Date */}
          <div className="flex items-center mb-4">
            <span className="inline-block w-4 h-4 bg-gray-400 mr-2"></span>
            <span className="text-gray-700 font-semibold">{event.date}</span>
          </div>

          <div className="ml-6">
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block w-4 h-4 bg-gray-400 mr-2"></span>
              <span
                className={`${event.badgeColor} text-white px-3 py-1 font-bold inline-block`}
              >
                {event.badge}
              </span>
            </div>

            {/* Event Image */}
            <img
              src={event.image}
              alt={event.badge}
              className="w-48 border-4 border-dotted border-blue-600 mb-4"
            />

            {/* Event Details */}
            <div className="text-center">
              <h3 className="text-blue-600 text-lg font-bold underline decoration-dotted">
                {event.title}
              </h3>
              <p className="text-blue-600 text-base mt-2">
                <span className="underline decoration-dotted">
                  {event.description}
                </span>{" "}
                <span className="text-gray-700">{event.time}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
