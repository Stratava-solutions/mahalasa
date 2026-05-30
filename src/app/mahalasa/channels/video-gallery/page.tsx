"use client";

import React, { useEffect, useState } from "react";

interface Video {
  _id: string;
  title: string;
  youtubeId: string;
  description: string;
}

const FALLBACK_VIDEOS = [
  { _id: "1", title: "Video 1", youtubeId: "UgZ5DURe_RA", description: "" },
  { _id: "2", title: "Video 2", youtubeId: "ObM07B6cR4Y", description: "" },
  { _id: "3", title: "Video 3", youtubeId: "2PVco_MXj28", description: "" },
  { _id: "4", title: "Video 4", youtubeId: "-scTsE6QB7Q", description: "" },
  { _id: "5", title: "Video 5", youtubeId: "51csTTNBZTg", description: "" },
  { _id: "6", title: "Video 6", youtubeId: "-CdxafbytnQ", description: "" },
];

export default function VideoGallery() {
  const [videos, setVideos] = useState<Video[]>(FALLBACK_VIDEOS);

  useEffect(() => {
    fetch("/api/public/videos")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data) && data.length > 0) setVideos(data); })
      .catch(() => {});
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-green-700 mb-4">
          Shri Mahalasa Narayani Video Gallery
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Explore the divine moments captured across temples and events. Watch the collection of videos below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => (
          <div key={video._id} className="rounded-lg overflow-hidden shadow-2xl relative" style={{ paddingTop: "62.5%" }}>
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
