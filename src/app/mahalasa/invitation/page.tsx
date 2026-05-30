"use client";
import { useEffect, useState } from "react";
import { usePageContent } from "@/hooks/usePageContent";
import { InvitationSkeleton } from "@/components/PageSkeleton";

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
}

export default function Invitation() {
  const { text, title, loaded } = usePageContent("invitation");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/public/events?category=invitation")
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setEvents(data); })
      .catch(() => {});
  }, []);

  if (!loaded) return <InvitationSkeleton />;

  return (
    <div className="text-primary">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-600">
        {title("page-title", "Invitation")}
      </h1>

      <div className="max-w-6xl mx-auto">
        <section className="mb-8 text-center">
          <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-red-700">🙏 सादर निमंत्रण 🙏</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {text("header-text", "Shree Mahalasa Narayani Temple cordially invites all devotees to participate in our sacred celebrations, daily worship, and spiritual programs.")}
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
              <p className="text-orange-600 font-semibold">
                &quot;{text("sanskrit-verse", "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः")}&quot;
              </p>
              <p className="text-sm mt-1">{text("verse-translation", "May all beings be happy, may all beings be free from illness")}</p>
            </div>
          </div>
        </section>

        {events.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-orange-700">Upcoming Grand Celebrations</h2>
            <div className="space-y-6">
              {events.map((event) => (
                <div key={event._id} className="bg-white border-2 border-orange-200 rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                      <span>📅 {event.date}</span>
                      <span>⏰ {event.time}</span>
                      <span>📍 {event.location}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-orange-700">{title("schedule-title", "Regular Prayer Schedule")}</h2>
          <div className="bg-yellow-50 rounded-lg overflow-hidden">
            <div className="bg-yellow-200 p-4">
              <h3 className="text-xl font-semibold text-yellow-800">{title("schedule-subtitle", "Daily & Weekly Programs")}</h3>
            </div>
            <div className="p-6 leading-relaxed whitespace-pre-line">
              {text("schedule", "Daily — Mangala Aarti — 5:00 AM\nDaily — Madhyana Aarti — 12:00 PM\nDaily — Sandhya Aarti — 7:00 PM\nTuesday — Devi Puja — 6:00 PM\nFriday — Lakshmi Puja — 6:30 PM\nSaturday — Bhajan Sandhya — 7:30 PM")}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-red-700">{title("contact-title", "Contact for Invitations")}</h2>
          <div className="leading-relaxed whitespace-pre-line text-gray-700">
            {text("contact-info", "Temple Office: +91-98765 43210\nEmail: info@mahalasatemple.org\nAddress: Shree Mahalasa Narayani Temple, Mardol, Goa")}
          </div>
        </section>
      </div>
    </div>
  );
}
