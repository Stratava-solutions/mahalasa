"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

export default function MahalasaDevi() {
  const photos = [
    { src: "/god.jpg", caption: "Shri Mahalasa Narayani" },
    { src: "/god3.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god4.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god5.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god6.jpg", caption: "Shri Mahalasa Narayani at Verna" },
    { src: "/god7.jpg", caption: "Shri Mahalasa Narayani at Verna" },
  ];

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 2, // <-- show 2 per slide
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 }, // still 2 on tablets
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 8 }, // 1 on mobile
      },
    },
  });

  // autoplay
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (instanceRef.current) {
      interval = setInterval(() => {
        instanceRef.current?.next();
      }, 3000); // auto slide every 3 sec
    }
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative text-center mb-6 w-md max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 my-4 ">
        Shri Mahalasa Narayani at various temples
      </h2>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider flex flex-wrap w-sm overflow-hidden">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col items-center px-2"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              width={400}
              height={500}
              className="border-4 border-yellow-600 rounded-lg shadow-lg object-cover w-full"
              priority
            />
            <p className="text-sm text-gray-600 mt-2 italic">{photo.caption}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ◀
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        ▶
      </button>
    </div>
  );
}
