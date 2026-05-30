"use client";
import { useEffect, useState } from "react";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { ListPageSkeleton } from "@/components/PageSkeleton";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  category: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/public/events")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setEvents(data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ListPageSkeleton />;

  return (
    <div className="text-primary py-2">
      <h1 className="text-3xl font-bold text-center mb-2 text-red-600">Events</h1>
      <p className="text-center text-gray-600 mb-8">Upcoming events and programmes at Mahalasa temples</p>

      {events.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100 max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg">No upcoming events at the moment</p>
          <p className="text-gray-300 text-sm mt-1">Check back soon</p>
        </div>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {events.map((event) => (
            <div key={event._id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex gap-4">
              {event.imageUrl && (
                <img src={event.imageUrl} alt={event.title} className="w-28 h-28 object-cover shrink-0" />
              )}
              <div className="p-4 flex-1 min-w-0">
                <h3 className="font-bold text-gray-800 mb-1">{event.title}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-2">
                  {event.date && <span className="flex items-center gap-1"><CalendarDays size={11} />{event.date}</span>}
                  {event.time && <span className="flex items-center gap-1"><Clock size={11} />{event.time}</span>}
                  {event.location && <span className="flex items-center gap-1"><MapPin size={11} />{event.location}</span>}
                </div>
                {event.description && <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
