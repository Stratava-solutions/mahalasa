"use client";

import React from "react";

// Video IDs
const videos = [
  { id: "XK0MOIQ2dc4", title: "Video 1" },
  { id: "XK0MOIQ2dc4", title: "Documentary on local Spandana Channel" },
  { id: "UgZ5DURe_RA", title: "Documentary on local Spandana Channel" },
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
        <h1 className="text-md font-extrabold text-green-700 mb-4">
          A selection of videos from Shri Mahalasa Narayani Devi Kshetra, as
          published on YouTube.
        </h1>
        <h1 className="text-gray-600 text-2xl max-w-3xl mx-auto"> Documentary on Harikhandige temple</h1>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto">
          Two-part documentary on Shri Mahalasa Narayani Devi Kshetra, Shri
          Mahalasa Harikahndige Mahatmye, which was produced and aired on
          Spandana TV channel.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1  gap-10">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-2xl relative"
            style={{ paddingTop: "62.5%" }}
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
