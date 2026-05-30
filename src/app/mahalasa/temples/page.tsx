"use client";
import { useEffect, useState } from "react";
import { MapPin, CalendarDays } from "lucide-react";

interface Temple {
  _id: string;
  name: string;
  location: string;
  established: string;
  significance: string;
  features: string[];
  category: "india" | "international";
  imageUrl: string;
}

const FALLBACK: Temple[] = [
  { _id: "1", name: "Shree Mahalasa Narayani Temple, Mardol", location: "Mardol, Ponda, Goa", established: "17th Century", significance: "Original and primary temple after migration from Verna", features: ["Main sanctum with original idol", "Traditional Goan architecture", "Daily elaborate rituals"], category: "india", imageUrl: "" },
  { _id: "2", name: "Shree Mahalasa Narayani Temple, Konchady", location: "Konchady, Mangalore, Karnataka", established: "1987", significance: "Established by devotees who migrated from Goa", features: ["Modern temple complex", "Community hall", "Cultural programs"], category: "india", imageUrl: "" },
  { _id: "3", name: "Shree Mahalasa Narayani Temple, Basrur", location: "Basrur, Dakshina Kannada, Karnataka", established: "16th Century", significance: "One of the oldest temples, over 500 years old", features: ["Ancient architecture", "Historical artifacts", "Coastal heritage"], category: "india", imageUrl: "" },
  { _id: "4", name: "Shree Mahalasa Temple, Mumbai", location: "Dadar, Mumbai, Maharashtra", established: "1950s", significance: "Serves large Konkani community in Mumbai", features: ["Urban temple complex", "Community services"], category: "india", imageUrl: "" },
  { _id: "5", name: "Mahalasa Temple, USA", location: "California, USA", established: "", significance: "Diaspora community", features: [], category: "international", imageUrl: "" },
  { _id: "6", name: "Mahalasa Temple, UK", location: "London, UK", established: "", significance: "European devotees", features: [], category: "international", imageUrl: "" },
];

export default function Temples() {
  const [temples, setTemples] = useState<Temple[]>(FALLBACK);
  const [filter, setFilter] = useState<"all" | "india" | "international">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/public/temples")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data) && data.length > 0) setTemples(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const india = temples.filter((t) => t.category === "india");
  const international = temples.filter((t) => t.category === "international");
  const filtered = filter === "all" ? temples : filter === "india" ? india : international;

  return (
    <div className="text-primary py-2">
      <h1 className="text-3xl font-bold text-center mb-2 text-red-600">Temples</h1>
      <p className="text-center text-gray-600 mb-6">Discover the network of Mahalasa temples across India and around the world</p>

      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {(["all", "india", "international"] as const).map((c) => (
          <button key={c} onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-full text-sm font-semibold capitalize transition-colors ${filter === c ? "bg-red-600 text-white" : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"}`}>
            {c === "all" ? `All (${temples.length})` : c === "india" ? `India (${india.length})` : `International (${international.length})`}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="bg-white rounded-xl border h-48 animate-pulse" />)}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-gray-400">No temples found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((temple) => (
            <div key={temple._id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {temple.imageUrl ? (
                <img src={temple.imageUrl} alt={temple.name} className="w-full h-40 object-cover" />
              ) : (
                <div className="w-full h-40 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center text-5xl">🏛️</div>
              )}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm leading-snug mb-2">{temple.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                  <MapPin size={11} /><span>{temple.location}</span>
                </div>
                {temple.established && (
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <CalendarDays size={11} /><span>Est. {temple.established}</span>
                  </div>
                )}
                {temple.significance && <p className="text-xs text-gray-600 mb-3 line-clamp-2">{temple.significance}</p>}
                {temple.features?.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {temple.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="bg-orange-50 text-orange-700 text-xs px-2 py-0.5 rounded-full">{f}</span>
                    ))}
                  </div>
                )}
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${temple.category === "india" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                  {temple.category === "india" ? "India" : "International"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
