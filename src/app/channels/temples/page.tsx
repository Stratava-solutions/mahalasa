"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

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

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
  });

  // autoplay
  useEffect(() => {
    const slider = instanceRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      slider.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="relative text-center w-3/6 mb-6">
      <h2 className="text-2xl font-bold text-green-700 my-4">
        Shri Mahalasa Narayani at various temples
      </h2>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider w-md">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex flex-col items-center"
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              width={410}
              height={551}
              className="mx-auto border-4 border-yellow-600 rounded-lg shadow-lg object-cover"
              priority
            />
            <p className="text-sm text-gray-600 mt-2 italic">{photo.caption}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
      >
        ◀
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow z-10"
      >
        ▶
      </button>
    </div>
  );
}
