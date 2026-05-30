"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GallerySkeleton } from "@/components/PageSkeleton";

interface Photo { _id: string; imageUrl: string; alt: string; title: string; }

const FALLBACK: Photo[] = [
  { _id: "1", imageUrl: "/god.jpg", alt: "Shri Mahalasa Narayani", title: "Shri Mahalasa Narayani" },
  { _id: "2", imageUrl: "/god3.jpg", alt: "Shri Mahalasa Narayani at Verna", title: "Shri Mahalasa Narayani at Verna" },
  { _id: "3", imageUrl: "/god4.jpg", alt: "Shri Mahalasa Narayani at Verna", title: "Shri Mahalasa Narayani at Verna" },
  { _id: "4", imageUrl: "/god5.jpg", alt: "Shri Mahalasa Narayani", title: "Shri Mahalasa Narayani" },
  { _id: "5", imageUrl: "/god6.jpg", alt: "Shri Mahalasa Narayani", title: "Shri Mahalasa Narayani" },
  { _id: "6", imageUrl: "/god7.jpg", alt: "Shri Mahalasa Narayani", title: "Shri Mahalasa Narayani" },
];

export default function MahalasaDevi() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/public/gallery?category=mahalasa-devi")
      .then((r) => r.json())
      .then((data) => { setPhotos(Array.isArray(data) && data.length > 0 ? data : FALLBACK); })
      .catch(() => { setPhotos(FALLBACK); })
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) return <GallerySkeleton />;

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
        {photos.map((photo) => (
          <SwiperSlide key={photo._id} className="flex flex-col items-center justify-center">
            <div className="relative w-full h-[450px] flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.imageUrl} alt={photo.alt || photo.title} className="object-contain rounded-lg h-full" />
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">{photo.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
