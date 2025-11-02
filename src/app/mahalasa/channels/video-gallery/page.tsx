"use client";

import React from "react";

// Video IDs
const videos = [
  { id: "UgZ5DURe_RA", title: "Video 1" },
  { id: "ObM07B6cR4Y", title: "Video 2" },
  { id: "2PVco_MXj28", title: "Video 3" },
  { id: "-scTsE6QB7Q", title: "Video 4" },
  { id: "51csTTNBZTg", title: "Video 5" },
  { id: "-CdxafbytnQ", title: "Video 6" },
];

export default function VideoGallery() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4">
          Shri Mahalasa Narayani Video Gallery
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Explore the divine moments captured across temples and events. Watch
          the collection of videos below.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-2xl relative"
            style={{ paddingTop: "62.5%" }} // 16:10 aspect ratio
          >
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
