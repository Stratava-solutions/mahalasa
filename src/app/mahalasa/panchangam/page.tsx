"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface PanchangamEvent {
  _id: string;
  day: number;
  month: number;
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  eventType: string;
}

interface ProgrammeImage {
  _id: string;
  title: string;
  imageUrl: string;
  order: number;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const TYPE_COLORS: Record<string, string> = {
  festival: "bg-orange-500",
  pooja: "bg-purple-500",
  satsang: "bg-green-500",
  other: "bg-gray-500",
};

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month - 1, 1).getDay();
}

export default function Panchangam() {
  const now = new Date();
  const [viewMonth, setViewMonth] = useState(now.getMonth() + 1);
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [events, setEvents] = useState<PanchangamEvent[]>([]);
  const [images, setImages] = useState<ProgrammeImage[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<PanchangamEvent | null>(null);

  useEffect(() => {
    fetch("/api/public/page-content?page=panchangam")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data.filter((s) => s.imageUrl).sort((a, b) => a.order - b.order));
        } else setImages([]);
      })
      .catch(() => setImages([]));
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/public/panchangam?month=${viewMonth}&year=${viewYear}`)
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setEvents(data); else setEvents([]); })
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, [viewMonth, viewYear]);

  const daysInMonth = getDaysInMonth(viewMonth, viewYear);
  const firstDay = getFirstDayOfMonth(viewMonth, viewYear);

  const eventsByDay: Record<number, PanchangamEvent[]> = {};
  events.forEach((e) => {
    if (!eventsByDay[e.day]) eventsByDay[e.day] = [];
    eventsByDay[e.day].push(e);
  });

  function prevMonth() {
    if (viewMonth === 1) { setViewMonth(12); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 12) { setViewMonth(1); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const useStaticFallback = images !== null && images.length === 0;

  return (
    <div className="text-primary">
      {/* Programme images */}
      {images === null ? null : useStaticFallback ? (
        <>
          <div className="mt-1 flex justify-center">
            <Image src="/program1.jpg" alt="program_1" width={500} height={500} className="rounded w-full max-w-md h-auto object-contain" />
          </div>
          <div className="mt-1 flex justify-center">
            <Image src="/program2.jpg" alt="program_2" width={500} height={500} className="rounded w-full max-w-md h-auto object-contain" />
          </div>
        </>
      ) : (
        images.map((img) => (
          <div key={img._id} className="mt-1 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.imageUrl} alt={img.title || "Programme"} className="rounded w-full max-w-md h-auto object-contain" />
          </div>
        ))
      )}

      {/* PDF Download */}
      <div className="mt-4 flex justify-center">
        <a href="/programpd.pdf" download className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg text-sm">
          Download Program PDF
        </a>
      </div>

      {/* Month navigation */}
      <div className="mt-6 mb-4">
        <div className="flex items-center justify-between bg-white p-3 rounded border border-gray-300">
          <button onClick={prevMonth} className="text-blue-600 hover:text-blue-800 font-medium text-sm">« Previous</button>
          <h2 className="text-lg font-bold">{MONTHS[viewMonth - 1]} {viewYear}</h2>
          <button onClick={nextMonth} className="text-blue-600 hover:text-blue-800 font-medium text-sm">Next »</button>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="bg-white border border-gray-300 mb-6 overflow-x-auto">
        <div className="grid grid-cols-7 border-b border-gray-300 min-w-[420px]">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d, i) => (
            <div key={d} className={`p-2 text-center font-bold text-xs border-r border-gray-300 last:border-r-0 ${i === 0 || i === 6 ? "text-red-600" : ""}`}>{d}</div>
          ))}
        </div>

        {loading ? (
          <div className="p-8 text-center text-gray-400 animate-pulse">Loading calendar…</div>
        ) : (
          <div className="grid grid-cols-7 min-w-[420px]">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="p-1 border-r border-b border-gray-300 min-h-16" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayEvents = eventsByDay[day] || [];
              const colIndex = (firstDay + i) % 7;
              const isWeekend = colIndex === 0 || colIndex === 6;
              return (
                <div key={day} className={`p-1 border-r border-b border-gray-300 min-h-16 ${dayEvents.length > 0 ? "cursor-pointer hover:bg-yellow-50" : ""}`}>
                  <div className={`font-bold text-xs mb-0.5 ${isWeekend ? "text-red-600" : ""}`}>{day}</div>
                  <div className="space-y-0.5">
                    {dayEvents.slice(0, 2).map((ev) => (
                      <div key={ev._id} onClick={() => setSelected(ev)}
                        className={`${TYPE_COLORS[ev.eventType] || "bg-gray-500"} text-white text-[10px] px-1 py-0.5 rounded block leading-tight truncate cursor-pointer`}
                        title={ev.title}>
                        {ev.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div onClick={() => setSelected(dayEvents[0])} className="text-[10px] text-blue-600 cursor-pointer hover:underline">
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Events list */}
      {events.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-base mb-3">{MONTHS[viewMonth - 1]} Events</h3>
          <div className="space-y-2">
            {[...events].sort((a, b) => a.day - b.day).map((event) => (
              <div key={event._id} onClick={() => setSelected(event)}
                className="flex gap-3 items-start p-2 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100">
                <div className="w-9 h-9 bg-green-50 border border-green-100 rounded-lg flex flex-col items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-green-700 leading-none">{event.day}</span>
                  <span className="text-[10px] text-green-500">{MONTHS[event.month - 1]?.slice(0, 3)}</span>
                </div>
                {event.imageUrl && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={event.imageUrl} alt={event.title} className="w-9 h-9 rounded object-cover shrink-0" />
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <p className="font-semibold text-sm">{event.title}</p>
                    <span className={`${TYPE_COLORS[event.eventType] || "bg-gray-500"} text-white text-[10px] px-1.5 py-0.5 rounded-full capitalize`}>{event.eventType}</span>
                  </div>
                  {event.description && <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{event.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Event detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            {selected.imageUrl && (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={selected.imageUrl} alt={selected.title} className="w-full h-40 object-cover rounded-xl mb-4" />
            )}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-50 border border-green-100 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xl font-bold text-green-700 leading-none">{selected.day}</span>
                <span className="text-xs text-green-500">{MONTHS[selected.month - 1]?.slice(0, 3)}</span>
              </div>
              <div>
                <p className="font-bold">{selected.title}</p>
                <span className={`${TYPE_COLORS[selected.eventType] || "bg-gray-500"} text-white text-xs px-2 py-0.5 rounded-full capitalize`}>{selected.eventType}</span>
              </div>
            </div>
            {selected.description && <p className="text-sm text-gray-600 leading-relaxed">{selected.description}</p>}
            <button onClick={() => setSelected(null)} className="mt-4 w-full py-2 bg-green-700 text-white rounded-xl text-sm font-medium hover:bg-green-800">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
