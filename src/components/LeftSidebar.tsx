"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function LeftSidebar() {
  const events = [
    {
      date: "November 5, 2025",
      badge: "TULASI POOJAN",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Devotees perform Tulasi Poojan at the temple.",
      time: "All day",
    },
    {
      date: "November 26, 2025",
      badge: "CHAMPA SHASHTI",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Special celebration for Champa Shashti.",
      time: "All day",
    },
    {
      date: "November 28, 2025",
      badge: "SHRI GURU CHARITRA PAARAAYANA BEGINS",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Start of Shri Guru Charitra Paaraayana.",
      time: "All day",
    },
    {
      date: "December 4, 2025",
      badge: "SHRI GURU DATTATREYA JAYANTHI",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Celebrating Shri Guru Dattatreya Jayanthi.",
      time: "All day",
    },
    {
      date: "January 22, 2026",
      badge: "SHRI GANESH JAYANTHI",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Shri Ganesh Jayanthi celebrations.",
      time: "All day",
    },
    {
      date: "February 2, 2026",
      badge: "GURU PRATIPADA",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Guru Pratipada observance.",
      time: "All day",
    },
    {
      date: "February 3, 2026",
      badge: "GURU AARAADHANA",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Guru Aaradhana observance.",
      time: "All day",
    },
    {
      date: "February 15, 2026",
      badge: "MAHAA SHIVARAATHRI & MAHILA CONVENTION",
      badgeColor: "bg-green-500",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Maha Shivaratri & Mahila Convention.",
      time: "All day",
    },
    {
      date: "Every Thursday",
      badge: "DATTA POOJA",
      badgeColor: "bg-green-500",
      image: "/suresh.jpg",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Special Pooja to Lord Shri Gurudatta by devotees.",
      time: "at 7:00 am",
    },
    {
      date: "Every Sunday",
      badge: "SATSANG",
      badgeColor: "bg-green-500",
      image: "/suresh.jpg",
      title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:",
      description: "Satsang with His Holiness Guruji Shri Suresh J Pai",
      time: "at 11:30 am",
    },
  ];

  return (
    <div className="bg-bgDefault p-4 w-full sm:w-64 md:w-48 lg:w-48 xl:w-48">
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

      {/* Swiper Events */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="mb-2">
              {/* Date */}
              <div className="flex items-center mb-4">
                <span className="inline-block w-4 h-4 bg-gray-400 mr-2"></span>
                <span className="text-gray-700 text-sm font-semibold whitespace-nowrap">
                  {event.date}
                </span>
              </div>

              <div className="ml-6">
                {/* Badge */}
                <div className="mb-4">
                  <span
                    className={`${event.badgeColor} text-white px-3 py-1 font-bold inline-block`}
                  >
                    {event.badge}
                  </span>
                </div>

                {/* Event Image */}
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.badge}
                    className="w-48 border-4 border-dotted border-blue-600 mb-4"
                  />
                )}

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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="">
        {/* Date */}
        <div className="flex items-center">
          <span className="inline-block w-4 h-4 bg-gray-400 mr-2"></span>
          <span className="text-gray-700 text-sm font-semibold whitespace-nowrap">
            Every Sunday
          </span>
        </div>

        <div className="ml-6">
          {/* Badge */}
          <div className="mb-4">
            <span
              className={`bg-green-500 text-white px-3 py-1 font-bold inline-block`}
            >
              SATSANG
            </span>
          </div>

          {/* Event Image */}
            <img
              src="/suresh.jpg"
              alt="SATSANG"
              className="w-48 border-4 border-dotted border-blue-600 mb-4"
            />

          {/* Event Details */}
          <div className="text-center">
            <h3 className="text-blue-600 text-lg font-bold underline decoration-dotted">
              Shri Mahalasa Narayani Devi Kshetra, Harikhandige:
            </h3>
            <p className="text-blue-600 text-base mt-2">
              <span className="underline decoration-dotted">
                Satsang with His Holiness Guruji Shri Suresh J Pai
              </span>{" "}
              <span className="text-gray-700">at 11:30 am</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
