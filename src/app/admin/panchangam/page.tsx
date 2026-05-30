"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, ImageIcon, Calendar } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import ImageUploader from "../components/ImageUploader";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass, selectClass, textareaClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface PanchangamEvent {
  _id: string;
  day: number;
  month: number;
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  eventType: string;
  isActive: boolean;
}

interface ProgrammeImage {
  _id: string;
  title: string;
  imageUrl: string;
  order: number;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const now = new Date();
type EventForm = Omit<PanchangamEvent, "_id">;

const eventApi = {
  list: (month: number, year: number): Promise<PanchangamEvent[]> =>
    apiFetch(`/api/admin/panchangam?month=${month}&year=${year}`).then((r) => r.json()),
  create: (data: EventForm) =>
    apiFetch("/api/admin/panchangam", { method: "POST", body: JSON.stringify(data) }).then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<EventForm> }) =>
    apiFetch(`/api/admin/panchangam/${id}`, { method: "PATCH", body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/panchangam/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

const imageApi = {
  list: (): Promise<ProgrammeImage[]> =>
    apiFetch("/api/admin/page-content?page=panchangam").then((r) => r.json()),
  create: (data: { title: string; imageUrl: string; order: number }) =>
    apiFetch("/api/admin/page-content", { method: "POST", body: JSON.stringify({ ...data, page: "panchangam", key: `programme-image-${Date.now()}`, isActive: true }) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/page-content/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

const TYPE_COLORS: Record<string, string> = {
  festival: "bg-orange-100 text-orange-700",
  pooja: "bg-purple-100 text-purple-700",
  satsang: "bg-green-100 text-green-700",
  other: "bg-gray-100 text-gray-600",
};

export default function PanchangamPage() {
  const qc = useQueryClient();
  const [tab, setTab] = useState<"images" | "events">("images");

  // ─── Events state ───────────────────────────────────────────
  const [viewMonth, setViewMonth] = useState(now.getMonth() + 1);
  const [viewYear, setViewYear] = useState(now.getFullYear());
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<PanchangamEvent | null>(null);
  const [eventForm, setEventForm] = useState<EventForm>({ day: 1, month: now.getMonth() + 1, year: now.getFullYear(), title: "", description: "", imageUrl: "", eventType: "festival", isActive: true });
  const [deleteEventId, setDeleteEventId] = useState<string | null>(null);

  // ─── Images state ────────────────────────────────────────────
  const [imgModalOpen, setImgModalOpen] = useState(false);
  const [imgForm, setImgForm] = useState({ title: "", imageUrl: "", order: 0 });
  const [deleteImgId, setDeleteImgId] = useState<string | null>(null);

  // ─── Queries ─────────────────────────────────────────────────
  const { data: events = [], isLoading: eventsLoading, isError: eventsError } = useQuery({
    queryKey: ["panchangam", viewMonth, viewYear],
    queryFn: () => eventApi.list(viewMonth, viewYear),
    select: (d) => Array.isArray(d) ? d : [],
  });

  const { data: images = [], isLoading: imagesLoading } = useQuery({
    queryKey: ["panchangam-images"],
    queryFn: imageApi.list,
    select: (d) => Array.isArray(d) ? d.filter((i) => i.imageUrl) : [],
  });

  const invalidateEvents = () => qc.invalidateQueries({ queryKey: ["panchangam", viewMonth, viewYear] });
  const invalidateImages = () => qc.invalidateQueries({ queryKey: ["panchangam-images"] });

  // ─── Event mutations ──────────────────────────────────────────
  const createEventMut = useMutation({
    mutationFn: eventApi.create,
    onSuccess: () => { invalidateEvents(); setEventModalOpen(false); toast.success("Event added"); },
    onError: () => toast.error("Failed to add event"),
  });
  const updateEventMut = useMutation({
    mutationFn: eventApi.update,
    onSuccess: () => { invalidateEvents(); setEventModalOpen(false); toast.success("Event updated"); },
    onError: () => toast.error("Failed to update"),
  });
  const deleteEventMut = useMutation({
    mutationFn: eventApi.remove,
    onSuccess: () => { invalidateEvents(); setDeleteEventId(null); toast.success("Event removed"); },
    onError: () => toast.error("Failed to delete"),
  });

  // ─── Image mutations ──────────────────────────────────────────
  const createImgMut = useMutation({
    mutationFn: imageApi.create,
    onSuccess: () => { invalidateImages(); setImgModalOpen(false); setImgForm({ title: "", imageUrl: "", order: 0 }); toast.success("Image added"); },
    onError: () => toast.error("Failed to add image"),
  });
  const deleteImgMut = useMutation({
    mutationFn: imageApi.remove,
    onSuccess: () => { invalidateImages(); setDeleteImgId(null); toast.success("Image removed"); },
    onError: () => toast.error("Failed to delete"),
  });

  // ─── Event handlers ───────────────────────────────────────────
  const emptyEventForm: EventForm = { day: 1, month: viewMonth, year: viewYear, title: "", description: "", imageUrl: "", eventType: "festival", isActive: true };

  function openAddEvent() { setEditingEvent(null); setEventForm(emptyEventForm); setEventModalOpen(true); }
  function openEditEvent(item: PanchangamEvent) {
    setEditingEvent(item);
    setEventForm({ day: item.day, month: item.month, year: item.year, title: item.title, description: item.description, imageUrl: item.imageUrl, eventType: item.eventType, isActive: item.isActive });
    setEventModalOpen(true);
  }
  function handleSaveEvent() {
    if (editingEvent) updateEventMut.mutate({ id: editingEvent._id, data: eventForm });
    else createEventMut.mutate(eventForm);
  }

  const savingEvent = createEventMut.isPending || updateEventMut.isPending;
  const years = Array.from({ length: 5 }, (_, i) => now.getFullYear() - 1 + i);
  const sorted = [...events].sort((a, b) => a.day - b.day);

  return (
    <div>
      <AdminHeader
        title="Panchangam"
        subtitle="Manage programme images and calendar events"
      />

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-xl w-fit">
        <button
          onClick={() => setTab("images")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "images" ? "bg-white text-green-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          <ImageIcon size={15} /> Programme Images
        </button>
        <button
          onClick={() => setTab("events")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${tab === "events" ? "bg-white text-green-800 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
        >
          <Calendar size={15} /> Calendar Events
        </button>
      </div>

      {/* ── Programme Images Tab ─────────────────────────────── */}
      {tab === "images" && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-500">These images appear at the top of the public Panchangam page</p>
            <button onClick={() => setImgModalOpen(true)} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
              <Plus size={16} /> Add Image
            </button>
          </div>

          {imagesLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-40 bg-gray-100 rounded-xl animate-pulse" />)}
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-400 text-lg mb-2">No programme images yet</p>
              <button onClick={() => setImgModalOpen(true)} className="text-green-600 text-sm hover:underline">Upload your first image</button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img) => (
                <div key={img._id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
                  <img src={img.imageUrl} alt={img.title || "Programme"} className="w-full h-40 object-cover" />
                  <div className="p-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 truncate">{img.title || "Programme Image"}</span>
                    <Tooltip label="Delete">
                      <button onClick={() => setDeleteImgId(img._id)} className="p-1.5 rounded hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Image Modal */}
          <Modal open={imgModalOpen} onClose={() => setImgModalOpen(false)} title="Add Programme Image" size="md">
            <div className="space-y-4">
              <FormField label="Title (optional)">
                <input className={inputClass} value={imgForm.title} onChange={(e) => setImgForm({ ...imgForm, title: e.target.value })} placeholder="e.g. Annual Programme 2025" />
              </FormField>
              <FormField label="Display Order">
                <input type="number" className={inputClass} value={imgForm.order} onChange={(e) => setImgForm({ ...imgForm, order: parseInt(e.target.value) || 0 })} />
              </FormField>
              <ImageUploader label="Programme Image" value={imgForm.imageUrl} onChange={(url) => setImgForm({ ...imgForm, imageUrl: url })} />
            </div>
            <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
              <button onClick={() => setImgModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={() => createImgMut.mutate(imgForm)} disabled={createImgMut.isPending || !imgForm.imageUrl}
                className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
                {createImgMut.isPending ? "Uploading…" : "Add Image"}
              </button>
            </div>
          </Modal>

          <ConfirmDialog open={!!deleteImgId} onClose={() => setDeleteImgId(null)} onConfirm={() => deleteImgId && deleteImgMut.mutate(deleteImgId)} loading={deleteImgMut.isPending} />
        </div>
      )}

      {/* ── Calendar Events Tab ──────────────────────────────── */}
      {tab === "events" && (
        <div>
          <div className="flex gap-3 mb-5 items-center flex-wrap justify-between">
            <div className="flex gap-3 items-center flex-wrap">
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500" value={viewMonth} onChange={(e) => setViewMonth(parseInt(e.target.value))}>
                {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
              </select>
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500" value={viewYear} onChange={(e) => setViewYear(parseInt(e.target.value))}>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
              {!eventsLoading && <span className="text-sm text-gray-500">{events.length} event{events.length !== 1 ? "s" : ""}</span>}
            </div>
            <button onClick={openAddEvent} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
              <Plus size={16} /> Add Event
            </button>
          </div>

          {eventsLoading ? (
            <div className="space-y-2">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />)}</div>
          ) : eventsError ? (
            <div className="text-center py-20 bg-white rounded-xl border border-red-100">
              <p className="text-red-500 text-lg">Failed to load calendar events</p>
              <p className="text-gray-400 text-sm mt-1">Check your connection and try refreshing</p>
            </div>
          ) : sorted.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-400 text-lg mb-2">No events for {MONTHS[viewMonth - 1]} {viewYear}</p>
              <button onClick={openAddEvent} className="text-green-600 text-sm hover:underline">Add an event</button>
            </div>
          ) : (
            <div className="space-y-2">
              {sorted.map((item) => (
                <div key={item._id} className={`bg-white rounded-xl border shadow-sm p-4 flex gap-4 items-center transition-opacity ${!item.isActive ? "opacity-40" : ""}`}>
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex flex-col items-center justify-center shrink-0 border border-green-100">
                    <span className="text-xl font-bold text-green-700 leading-none">{item.day}</span>
                    <span className="text-xs text-green-500">{MONTHS[item.month - 1]?.slice(0, 3)}</span>
                  </div>
                  {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded-lg object-cover shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full capitalize ${TYPE_COLORS[item.eventType]}`}>{item.eventType}</span>
                    </div>
                    {item.description && <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>}
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <Tooltip label="Edit"><button onClick={() => openEditEvent(item)} className="p-1.5 rounded hover:bg-gray-100 text-blue-400 hover:text-blue-600 transition-colors"><Pencil size={14} /></button></Tooltip>
                    <Tooltip label="Delete"><button onClick={() => setDeleteEventId(item._id)} className="p-1.5 rounded hover:bg-gray-100 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={14} /></button></Tooltip>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Create / Edit Event Dialog */}
          <Modal open={eventModalOpen} onClose={() => setEventModalOpen(false)} title={editingEvent ? "Edit Calendar Event" : "Add Calendar Event"} size="lg">
            <div className="grid grid-cols-3 gap-4">
              <FormField label="Day" required>
                <input type="number" min="1" max="31" className={inputClass} value={eventForm.day} onChange={(e) => setEventForm({ ...eventForm, day: parseInt(e.target.value) || 1 })} />
              </FormField>
              <FormField label="Month">
                <select className={selectClass} value={eventForm.month} onChange={(e) => setEventForm({ ...eventForm, month: parseInt(e.target.value) })}>
                  {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                </select>
              </FormField>
              <FormField label="Year">
                <select className={selectClass} value={eventForm.year} onChange={(e) => setEventForm({ ...eventForm, year: parseInt(e.target.value) })}>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </FormField>
              <div className="col-span-2">
                <FormField label="Event Title" required>
                  <input className={inputClass} value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} placeholder="e.g. Shri Datta Paduka" />
                </FormField>
              </div>
              <FormField label="Type">
                <select className={selectClass} value={eventForm.eventType} onChange={(e) => setEventForm({ ...eventForm, eventType: e.target.value })}>
                  <option value="festival">Festival</option>
                  <option value="pooja">Pooja</option>
                  <option value="satsang">Satsang</option>
                  <option value="other">Other</option>
                </select>
              </FormField>
              <div className="col-span-3">
                <FormField label="Description">
                  <textarea className={textareaClass} rows={2} value={eventForm.description} onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })} placeholder="Event description..." />
                </FormField>
              </div>
              <div className="col-span-3">
                <ImageUploader label="Event Image (optional)" value={eventForm.imageUrl} onChange={(url) => setEventForm({ ...eventForm, imageUrl: url })} />
              </div>
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input type="checkbox" checked={eventForm.isActive} onChange={(e) => setEventForm({ ...eventForm, isActive: e.target.checked })} className="rounded" /> Active
              </label>
            </div>
            <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
              <button onClick={() => setEventModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
              <button onClick={handleSaveEvent} disabled={savingEvent || !eventForm.title} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
                {savingEvent ? "Saving…" : editingEvent ? "Save Changes" : "Add to Calendar"}
              </button>
            </div>
          </Modal>

          <ConfirmDialog open={!!deleteEventId} onClose={() => setDeleteEventId(null)} onConfirm={() => deleteEventId && deleteEventMut.mutate(deleteEventId)} loading={deleteEventMut.isPending} />
        </div>
      )}
    </div>
  );
}
