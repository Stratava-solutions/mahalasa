"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Temples() {
  const photos = [
    { src: "/temples/temple1.jpg", caption: "Verna Temples" },
    { src: "/temples/temple2.jpg", caption: "Mardol Temple" },
    { src: "/temples/temple3.jpg", caption: "Madangeri Temple" },
    { src: "/temples/temple4.jpg", caption: "Kumta Temple" },
    { src: "/temples/temple5.jpg", caption: "Konchady Temple" },
    { src: "/temples/temple6.jpg", caption: "Shirwa Temple" },
    { src: "/temples/temple7.jpg", caption: "Basrur Temple" },
    { src: "/temples/temple8.jpg", caption: "Shirwa Temple" },
  ];

  return (
    <div className="relative text-center mb-6 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 my-4">
        Shri Mahalasa Narayani at various temples
      </h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop
        className="w-full h-[500px]"
      >
        {photos.map((photo, idx) => (
          <SwiperSlide key={idx} className="flex flex-col items-center justify-center">
            <div className="relative w-full h-[450px] flex justify-center">
              <Image
                src={photo.src}
                alt={photo.caption}
                className="object-contain rounded-lg"
                priority={idx === 0}
                width={500}
                height={500}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">{photo.caption}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}