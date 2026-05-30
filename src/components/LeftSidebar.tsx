"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Slide {
  _id: string;
  date: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  time: string;
  imageUrl: string;
}

const FALLBACK_SLIDES: Slide[] = [
  { _id: "1", date: "November 5, 2025", badge: "TULASI POOJAN", badgeColor: "bg-green-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:", description: "Devotees perform Tulasi Poojan at the temple.", time: "All day", imageUrl: "" },
  { _id: "2", date: "November 26, 2025", badge: "CHAMPA SHASHTI", badgeColor: "bg-green-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:", description: "Special celebration for Champa Shashti.", time: "All day", imageUrl: "" },
  { _id: "3", date: "December 4, 2025", badge: "SHRI GURU DATTATREYA JAYANTHI", badgeColor: "bg-green-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:", description: "Celebrating Shri Guru Dattatreya Jayanthi.", time: "All day", imageUrl: "" },
  { _id: "4", date: "Every Thursday", badge: "DATTA POOJA", badgeColor: "bg-green-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:", description: "Special Pooja to Lord Shri Gurudatta by devotees.", time: "at 7:00 am", imageUrl: "/suresh.jpg" },
  { _id: "5", date: "Every Sunday", badge: "SATSANG", badgeColor: "bg-green-500", title: "Shri Mahalasa Narayani Devi Kshetra, Harikhandige:", description: "Satsang with His Holiness Guruji Shri Suresh J Pai", time: "at 11:30 am", imageUrl: "/suresh.jpg" },
];

export default function LeftSidebar() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/public/slides")
      .then((r) => r.json())
      .then((data) => { setSlides(Array.isArray(data) && data.length > 0 ? data : FALLBACK_SLIDES); })
      .catch(() => { setSlides(FALLBACK_SLIDES); })
      .finally(() => setLoaded(true));
  }, []);

  return (
    <div className="bg-bgDefault p-4 w-full sm:w-64 md:w-48 lg:w-48 xl:w-48">
      <div className="mb-6">
        <p className="text-blue-600 text-lg mb-4">
          To get the above information -- and MORE -- in your e-mail inbox daily,{" "}
          <a target="_blank" href="/panchang-in-inbox" className="underline hover:text-blue-800">click here</a>.
        </p>
      </div>

      <div className="bg-green-800 text-white text-center py-4 mb-6">
        <h2 className="text-xl font-bold">THE WEEK AHEAD</h2>
      </div>

      {!loaded ? (
        <div className="space-y-3 animate-pulse">
          <div className="h-5 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-16 bg-gray-200 rounded w-full mt-4" />
        </div>
      ) : <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={slides.length > 1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide._id}>
            <div className="mb-2">
              <div className="flex items-center mb-4">
                <span className="inline-block w-4 h-4 bg-gray-400 mr-2"></span>
                <span className="text-gray-700 text-sm font-semibold whitespace-nowrap">{slide.date}</span>
              </div>
              <div className="ml-6">
                <div className="mb-4">
                  <span className={`${slide.badgeColor} text-white px-3 py-1 font-bold inline-block`}>{slide.badge}</span>
                </div>
                {slide.imageUrl && (
                  <img src={slide.imageUrl} alt={slide.badge} className="w-48 border-4 border-dotted border-blue-600 mb-4" />
                )}
                <div className="text-center">
                  <h3 className="text-blue-600 text-lg font-bold underline decoration-dotted">{slide.title}</h3>
                  <p className="text-blue-600 text-base mt-2">
                    <span className="underline decoration-dotted">{slide.description}</span>{" "}
                    <span className="text-gray-700">{slide.time}</span>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>}
    </div>
  );
}
