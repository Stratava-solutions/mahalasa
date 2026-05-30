"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff, Star, MapPin, Clock } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import ImageUploader from "../components/ImageUploader";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass, textareaClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface Event {
  _id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  isActive: boolean;
  isFeatured: boolean;
}

type FormState = Omit<Event, "_id">;
const emptyForm: FormState = { title: "", date: "", time: "", location: "", description: "", highlights: [], imageUrl: "", isActive: true, isFeatured: false };

const api = {
  list: (): Promise<Event[]> => apiFetch("/api/admin/events").then((r) => r.json()),
  create: (data: FormState) =>
    apiFetch("/api/admin/events", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<FormState> }) =>
    apiFetch(`/api/admin/events/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/events/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function EventsPage() {
  const qc = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editing, setEditing] = useState<Event | null>(null);
  const [viewing, setViewing] = useState<Event | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [highlightsInput, setHighlightsInput] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: items = [], isLoading } = useQuery({ queryKey: ["events"], queryFn: api.list, select: (d) => Array.isArray(d) ? d : [] });
  const invalidate = () => qc.invalidateQueries({ queryKey: ["events"] });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Event created"); },
    onError: () => toast.error("Failed to create event"),
  });
  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Event updated"); },
    onError: () => toast.error("Failed to update event"),
  });
  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { invalidate(); setDeleteId(null); toast.success("Event deleted"); },
    onError: () => toast.error("Failed to delete event"),
  });

  function openAdd() { setEditing(null); setForm(emptyForm); setHighlightsInput(""); setModalOpen(true); }
  function openEdit(item: Event) {
    setEditing(item);
    setForm({ title: item.title, date: item.date, time: item.time, location: item.location, description: item.description, highlights: item.highlights || [], imageUrl: item.imageUrl, isActive: item.isActive, isFeatured: item.isFeatured });
    setHighlightsInput((item.highlights || []).join("\n"));
    setModalOpen(true);
  }
  function openView(item: Event) { setViewing(item); setViewOpen(true); }

  function handleSave() {
    const payload = { ...form, highlights: highlightsInput.split("\n").map((h) => h.trim()).filter(Boolean) };
    if (editing) updateMut.mutate({ id: editing._id, data: payload });
    else createMut.mutate(payload);
  }

  const saving = createMut.isPending || updateMut.isPending;

  return (
    <div>
      <AdminHeader
        title="Events"
        subtitle="Manage upcoming temple events and programs"
        action={
          <button onClick={openAdd} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} /> Add Event
          </button>
        }
      />

      {isLoading ? (
        <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-24 bg-gray-100 rounded-xl animate-pulse" />)}</div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400 text-lg mb-2">No events yet</p>
          <button onClick={openAdd} className="text-green-600 text-sm hover:underline">Add your first event</button>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item._id} className={`bg-white rounded-xl border shadow-sm p-4 flex gap-4 items-start transition-opacity ${!item.isActive ? "opacity-40" : ""}`}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-20 h-20 rounded-lg object-cover shrink-0" />}
              <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openView(item)}>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-800 hover:text-green-700 transition-colors">{item.title}</h3>
                  {item.isFeatured && <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-medium">Featured</span>}
                </div>
                <div className="flex items-center gap-3 mt-1 flex-wrap">
                  <span className="text-sm text-green-700 font-medium">{item.date}</span>
                  {item.time && <span className="flex items-center gap-1 text-xs text-gray-500"><Clock size={11} />{item.time}</span>}
                  {item.location && <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin size={11} />{item.location}</span>}
                </div>
                {item.description && <p className="text-sm text-gray-500 mt-1 line-clamp-1">{item.description}</p>}
              </div>
              <div className="flex gap-1 shrink-0">
                <Tooltip label={item.isFeatured ? "Unfeature" : "Feature"}>
                  <button onClick={() => updateMut.mutate({ id: item._id, data: { isFeatured: !item.isFeatured } })}
                    className={`p-1.5 rounded hover:bg-gray-100 transition-colors ${item.isFeatured ? "text-amber-500" : "text-gray-300"}`}><Star size={14} /></button>
                </Tooltip>
                <Tooltip label={item.isActive ? "Hide" : "Show"}>
                  <button onClick={() => updateMut.mutate({ id: item._id, data: { isActive: !item.isActive } })}
                    className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">{item.isActive ? <Eye size={14} /> : <EyeOff size={14} />}</button>
                </Tooltip>
                <Tooltip label="Edit"><button onClick={() => openEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-blue-400 hover:text-blue-600 transition-colors"><Pencil size={14} /></button></Tooltip>
                <Tooltip label="Delete"><button onClick={() => setDeleteId(item._id)} className="p-1.5 rounded hover:bg-gray-100 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={14} /></button></Tooltip>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Dialog */}
      <Modal open={viewOpen} onClose={() => setViewOpen(false)} title="Event Details" size="md">
        {viewing && (
          <div className="space-y-4">
            {viewing.imageUrl && <img src={viewing.imageUrl} alt={viewing.title} className="w-full h-48 object-cover rounded-lg" />}
            <div>
              <h2 className="text-xl font-bold text-gray-800">{viewing.title}</h2>
              {viewing.isFeatured && <span className="inline-block mt-1 bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded-full font-medium">Featured</span>}
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-0.5">Date</p>
                <p className="font-medium text-gray-800">{viewing.date}</p>
              </div>
              {viewing.time && (
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-0.5">Time</p>
                  <p className="font-medium text-gray-800">{viewing.time}</p>
                </div>
              )}
              {viewing.location && (
                <div className="bg-green-50 rounded-lg p-3 col-span-2">
                  <p className="text-xs text-gray-500 mb-0.5">Location</p>
                  <p className="font-medium text-gray-800">{viewing.location}</p>
                </div>
              )}
            </div>
            {viewing.description && (
              <div>
                <p className="text-xs text-gray-500 mb-1">Description</p>
                <p className="text-sm text-gray-700 leading-relaxed">{viewing.description}</p>
              </div>
            )}
            {viewing.highlights?.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 mb-2">Highlights</p>
                <div className="flex flex-wrap gap-2">
                  {viewing.highlights.map((h, i) => <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-lg">{h}</span>)}
                </div>
              </div>
            )}
            <div className="flex gap-3 justify-end pt-3 border-t">
              <button onClick={() => setViewOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Close</button>
              <button onClick={() => { setViewOpen(false); openEdit(viewing); }} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800">Edit</button>
            </div>
          </div>
        )}
      </Modal>

      {/* Create / Edit Dialog */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Event" : "Add Event"} size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <FormField label="Event Title" required>
              <input className={inputClass} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Shri Guru Dattatreya Jayanthi" />
            </FormField>
          </div>
          <FormField label="Date" required>
            <input className={inputClass} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="e.g. December 4, 2025" />
          </FormField>
          <FormField label="Time">
            <input className={inputClass} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} placeholder="e.g. 7:00 AM" />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Location">
              <input className={inputClass} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Temple name / address" />
            </FormField>
          </div>
          <div className="md:col-span-2">
            <FormField label="Description">
              <textarea className={textareaClass} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Event description..." />
            </FormField>
          </div>
          <div className="md:col-span-2">
            <FormField label="Highlights (one per line)">
              <textarea className={textareaClass} rows={3} value={highlightsInput} onChange={(e) => setHighlightsInput(e.target.value)} placeholder={"Special Pooja\nCultural Programs\nPrasad Distribution"} />
            </FormField>
          </div>
          <div className="md:col-span-2">
            <ImageUploader label="Event Image" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          </div>
          <div className="flex items-center gap-6 md:col-span-2">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="rounded" /> Active
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={form.isFeatured} onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })} className="rounded" /> Featured
            </label>
          </div>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleSave} disabled={saving || !form.title || !form.date} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {saving ? "Saving…" : editing ? "Save Changes" : "Create Event"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={() => deleteId && deleteMut.mutate(deleteId)} loading={deleteMut.isPending} />
    </div>
  );
}
