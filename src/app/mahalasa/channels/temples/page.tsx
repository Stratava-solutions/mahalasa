"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GallerySkeleton } from "@/components/PageSkeleton";

interface Photo { _id: string; imageUrl: string; alt: string; title: string; }

const FALLBACK: Photo[] = [
  { _id: "1", imageUrl: "/temples/temple1.jpg", alt: "Verna Temple", title: "Verna Temple" },
  { _id: "2", imageUrl: "/temples/temple2.jpg", alt: "Mardol Temple", title: "Mardol Temple" },
  { _id: "3", imageUrl: "/temples/temple3.jpg", alt: "Madangeri Temple", title: "Madangeri Temple" },
  { _id: "4", imageUrl: "/temples/temple4.jpg", alt: "Kumta Temple", title: "Kumta Temple" },
  { _id: "5", imageUrl: "/temples/temple5.jpg", alt: "Konchady Temple", title: "Konchady Temple" },
  { _id: "6", imageUrl: "/temples/temple6.jpg", alt: "Shirwa Temple", title: "Shirwa Temple" },
  { _id: "7", imageUrl: "/temples/temple7.jpg", alt: "Basrur Temple", title: "Basrur Temple" },
  { _id: "8", imageUrl: "/temples/temple8.jpg", alt: "Shirwa Temple", title: "Shirwa Temple" },
];

export default function TemplesChannel() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/public/gallery?category=channel-temples")
      .then((r) => r.json())
      .then((data) => { setPhotos(Array.isArray(data) && data.length > 0 ? data : FALLBACK); })
      .catch(() => { setPhotos(FALLBACK); })
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) return <GallerySkeleton />;

  return (
    <div className="relative text-center mb-6 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 my-4">
        Shri Mahalasa Narayani Temples
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
