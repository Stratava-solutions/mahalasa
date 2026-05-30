"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GridGallerySkeleton } from "@/components/PageSkeleton";

interface GalleryImage {
  _id: string;
  imageUrl: string;
  alt: string;
  category: string;
  title: string;
}

const FALLBACK_IMAGES: GalleryImage[] = [
  { _id: "1", imageUrl: "/god.jpg", alt: "Sacred Deity View", category: "deity", title: "Sacred Deity" },
  { _id: "2", imageUrl: "/god2.jpg", alt: "Divine Darshan", category: "deity", title: "Divine Darshan" },
  { _id: "3", imageUrl: "/header-image.jpg", alt: "Temple Architecture", category: "temple", title: "Temple" },
];

const categories = [
  { id: "all", name: "All Photos" },
  { id: "temple", name: "Temple" },
  { id: "deity", name: "Deity" },
  { id: "festivals", name: "Festivals" },
];

export default function GalleryPage() {
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    fetch("/api/public/gallery")
      .then((r) => r.json())
      .then((data) => { setAllImages(Array.isArray(data) && data.length > 0 ? data : FALLBACK_IMAGES); })
      .catch(() => { setAllImages(FALLBACK_IMAGES); })
      .finally(() => setLoaded(true));
  }, []);

  if (!loaded) return <GridGallerySkeleton />;

  const filteredImages =
    selectedCategory === "all"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="text-primary py-2">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6 md:mb-8 text-center">
          Photo Gallery
        </h1>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-red-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image._id}
              className="aspect-square bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.imageUrl}
                  alt={image.alt || image.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-video">
                <Image src={selectedImage.imageUrl} alt={selectedImage.alt || selectedImage.title} fill className="object-contain" unoptimized />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{selectedImage.title}</h3>
                <p className="text-sm text-gray-600 capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
