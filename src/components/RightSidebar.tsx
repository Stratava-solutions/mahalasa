"use client";
import React, { useEffect, useState } from "react";

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
}

interface Video {
  _id: string;
  title: string;
  youtubeId: string;
}

const FALLBACK_NEWS: NewsItem[] = [
  { _id: "1", title: "SHRI GURU CHARITHRA", content: "The Holy Granth Shri Guru Charithra authored by Guruji Shri Suresh J. Pai is now available in English, Kannada and Marathi. To get your copy please call on # No 8970414801.", imageUrl: "", publishedAt: "" },
];

export default function RightSidebar() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [video, setVideo] = useState<Video | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let newsLoaded = false, videosLoaded = false;
    const checkDone = () => { if (newsLoaded && videosLoaded) setLoaded(true); };

    fetch("/api/public/news")
      .then((r) => r.json())
      .then((data) => { setNews(Array.isArray(data) && data.length > 0 ? data : FALLBACK_NEWS); })
      .catch(() => { setNews(FALLBACK_NEWS); })
      .finally(() => { newsLoaded = true; checkDone(); });

    fetch("/api/public/videos")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data) && data.length > 0) setVideo(data[0]); })
      .catch(() => {})
      .finally(() => { videosLoaded = true; checkDone(); });
  }, []);

  return (
    <div className="bg-bgDefault p-6 w-full sm:w-64 md:w-64 lg:w-64 xl:w-64">
      {/* NEWS Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">NEWS</h2>
        </div>
        {!loaded ? (
          <div className="animate-pulse space-y-3 p-4 bg-yellow-50">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-full" />
          </div>
        ) : news.map((item) => (
          <div key={item._id} className="bg-gradient-to-br from-yellow-200 to-yellow-100 p-4 mb-2">
            {item.imageUrl && (
              <img src={item.imageUrl} alt={item.title} className="w-full h-32 object-cover rounded mb-3" />
            )}
            <h3 className="text-blue-600 text-xl font-bold mb-2">{item.title}</h3>
            {item.publishedAt && <p className="text-gray-500 text-xs mb-1">{item.publishedAt}</p>}
            {item.content && <p className="text-blue-600 text-base leading-relaxed">{item.content}</p>}
          </div>
        ))}
      </div>

      {/* VIDEOS Section */}
      <div className="mb-6">
        <div className="bg-green-800 text-white px-6 py-3">
          <h2 className="text-3xl font-bold">VIDEOS</h2>
        </div>
        <div className="bg-yellow-100 p-4">
          {!loaded ? (
            <div className="animate-pulse space-y-2">
              <div className="h-32 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          ) : video ? (
            <div>
              <div className="aspect-video mb-2">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
              <p className="text-gray-700 text-sm font-medium mb-2">{video.title}</p>
            </div>
          ) : (
            <div className="bg-black aspect-video flex items-center justify-center mb-4">
              <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[35px] border-l-white border-b-[20px] border-b-transparent ml-2" />
            </div>
          )}
          <p className="text-gray-700 text-base">
            For more videos, go to{" "}
            <a target="_blank" href="/mahalasa/channels/video-gallery" className="text-blue-600 hover:text-blue-800 hover:underline">
              Videos Page
            </a>
          </p>
        </div>
      </div>

      {/* ON FACEBOOK Section */}
      <div className="bg-yellow-100 p-6 flex justify-center">
        <div className="w-full max-w-[400px] md:max-w-[500px]">
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMyMahalasa&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="100%"
            height="500"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
          />
          <a href="https://www.facebook.com/MyMahalasa/" target="_blank" rel="noopener noreferrer"
            className="mt-4 block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
            View on Facebook
          </a>
        </div>
      </div>

      <div className="mt-4 text-center">
        <a href="https://whatsapp.com/channel/0029VahupPtLCoX2NqbAA00G" target="_blank" rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg">
          Join our WhatsApp Channel
        </a>
      </div>
    </div>
  );
}
