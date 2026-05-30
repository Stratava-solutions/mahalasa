"use client";
import { useEffect, useState } from "react";

interface HeroImage {
  _id: string;
  imageUrl: string;
  alt: string;
  title: string;
}

export default function HeroSection({ page = "Home" }: { page?: string }) {
  const [heroImg, setHeroImg] = useState<HeroImage | null>(null);

  useEffect(() => {
    fetch(`/api/public/hero?page=${encodeURIComponent(page)}`)
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data) && data.length > 0) setHeroImg(data[0]); })
      .catch(() => {});
  }, [page]);

  const src = heroImg?.imageUrl || "/header-image.jpg";
  const alt = heroImg?.alt || "Shree Mahalasa Narayani Temple Header";

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full h-full object-cover object-center" />
        {heroImg?.title && (
          <>
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white">
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow">
                  {heroImg.title}
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
