"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function MahalasaDevi() {
  const photos = [
    { src: "/god.jpg", caption: "Shri Mahalasa Narayani" },
    { src: "/god3.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god4.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god5.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god6.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god7.jpg", caption: "Shri Mahalasa Narayani at Verna" },
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
                // fill
                className="object-contain rounded-lg "
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