"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Images, Video, CalendarDays, MessageSquare, SlidersHorizontal, Newspaper, Database } from "lucide-react";
import StatsCard from "../components/StatsCard";
import Link from "next/link";
import { apiFetch } from "@/lib/apiFetch";
import { toast } from "sonner";

const api = {
  gallery: () => apiFetch("/api/admin/gallery").then((r) => r.json()),
  videos: () => apiFetch("/api/admin/videos").then((r) => r.json()),
  events: () => apiFetch("/api/admin/events").then((r) => r.json()),
  contacts: () => apiFetch("/api/admin/contacts").then((r) => r.json()),
  slides: () => apiFetch("/api/admin/slides").then((r) => r.json()),
  news: () => apiFetch("/api/admin/news").then((r) => r.json()),
};

export default function DashboardPage() {
  const qc = useQueryClient();
  const [seeding, setSeeding] = useState(false);

  async function handleSeed() {
    setSeeding(true);
    try {
      const res = await apiFetch("/api/admin/seed", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Seed failed");
      const { inserted } = data;
      const added = Object.entries(inserted)
        .filter(([, v]) => (v as number) > 0)
        .map(([k, v]) => `${v} ${k}`)
        .join(", ");
      toast.success(added ? `Seeded: ${added}` : "All collections already have data — nothing added");
      qc.invalidateQueries();
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Seed failed");
    } finally {
      setSeeding(false);
    }
  }

  const { data: gallery = [] } = useQuery({ queryKey: ["dash-gallery"], queryFn: api.gallery });
  const { data: videos = [] } = useQuery({ queryKey: ["dash-videos"], queryFn: api.videos });
  const { data: events = [] } = useQuery({ queryKey: ["dash-events"], queryFn: api.events });
  const { data: contacts = [] } = useQuery({ queryKey: ["dash-contacts"], queryFn: api.contacts });
  const { data: slides = [] } = useQuery({ queryKey: ["dash-slides"], queryFn: api.slides });
  const { data: news = [] } = useQuery({ queryKey: ["dash-news"], queryFn: api.news });

  const newContacts = Array.isArray(contacts)
    ? contacts.filter((c: { status: string }) => c.status === "new").length
    : 0;

  const quickLinks = [
    { href: "/admin/gallery", label: "Add Gallery Image", color: "text-purple-600" },
    { href: "/admin/videos", label: "Add Video", color: "text-blue-600" },
    { href: "/admin/events", label: "Add Event", color: "text-orange-600" },
    { href: "/admin/slides", label: "Add Slide", color: "text-teal-600" },
    { href: "/admin/contacts", label: "View Contact Inbox", color: "text-red-600" },
    { href: "/admin/panchangam", label: "Manage Panchangam", color: "text-indigo-600" },
  ];

  return (
    <div>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Welcome to the Mahalasa Temple Admin Panel</p>
        </div>
        <button
          onClick={handleSeed}
          disabled={seeding}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0"
        >
          <Database size={15} />
          {seeding ? "Seeding…" : "Seed Initial Data"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <StatsCard label="Gallery Images" value={Array.isArray(gallery) ? gallery.length : "—"} icon={Images} color="bg-purple-500" />
        <StatsCard label="Videos" value={Array.isArray(videos) ? videos.length : "—"} icon={Video} color="bg-blue-500" />
        <StatsCard label="Events" value={Array.isArray(events) ? events.length : "—"} icon={CalendarDays} color="bg-orange-500" />
        <StatsCard label="Sidebar Slides" value={Array.isArray(slides) ? slides.length : "—"} icon={SlidersHorizontal} color="bg-teal-500" />
        <StatsCard label="Contact Messages" value={Array.isArray(contacts) ? contacts.length : "—"} icon={MessageSquare} color="bg-red-500" />
        <StatsCard label="News Items" value={Array.isArray(news) ? news.length : "—"} icon={Newspaper} color="bg-green-600" />
      </div>

      {newContacts > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📬</span>
            <div>
              <p className="font-semibold text-amber-800">
                {newContacts} new contact {newContacts === 1 ? "message" : "messages"}
              </p>
              <p className="text-sm text-amber-600">Check your contact inbox</p>
            </div>
          </div>
          <Link href="/admin/contacts" className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600">
            View All
          </Link>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-base font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {quickLinks.map(({ href, label, color }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors text-sm font-medium ${color}`}
            >
              <span>→</span>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
