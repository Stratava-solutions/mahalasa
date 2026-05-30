"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff, ExternalLink, Play } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass, selectClass, textareaClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface Video {
  _id: string;
  title: string;
  youtubeId: string;
  description: string;
  category: string;
  order: number;
  isActive: boolean;
}

type FormState = Omit<Video, "_id">;
const emptyForm: FormState = { title: "", youtubeId: "", description: "", category: "mahalasa", order: 0, isActive: true };

function extractId(input: string) {
  const m = input.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : input.trim();
}

const api = {
  list: (): Promise<Video[]> => apiFetch("/api/admin/videos").then((r) => r.json()),
  create: (data: FormState) =>
    apiFetch("/api/admin/videos", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<FormState> }) =>
    apiFetch(`/api/admin/videos/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/videos/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function VideosPage() {
  const qc = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editing, setEditing] = useState<Video | null>(null);
  const [viewing, setViewing] = useState<Video | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: items = [], isLoading } = useQuery({ queryKey: ["videos"], queryFn: api.list, select: (d) => Array.isArray(d) ? d : [] });
  const invalidate = () => qc.invalidateQueries({ queryKey: ["videos"] });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Video added"); },
    onError: () => toast.error("Failed to add video"),
  });
  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Video updated"); },
    onError: () => toast.error("Failed to update"),
  });
  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { invalidate(); setDeleteId(null); toast.success("Video deleted"); },
    onError: () => toast.error("Failed to delete"),
  });

  function openAdd() { setEditing(null); setForm(emptyForm); setModalOpen(true); }
  function openEdit(item: Video) {
    setEditing(item);
    setForm({ title: item.title, youtubeId: item.youtubeId, description: item.description, category: item.category, order: item.order, isActive: item.isActive });
    setModalOpen(true);
  }
  function openView(item: Video) { setViewing(item); setViewOpen(true); }

  function handleSave() {
    const payload = { ...form, youtubeId: extractId(form.youtubeId) };
    if (editing) updateMut.mutate({ id: editing._id, data: payload });
    else createMut.mutate(payload);
  }

  const saving = createMut.isPending || updateMut.isPending;

  return (
    <div>
      <AdminHeader
        title="Videos"
        subtitle="Manage YouTube video gallery"
        action={
          <button onClick={openAdd} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} /> Add Video
          </button>
        }
      />

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="aspect-video bg-gray-100 rounded-xl animate-pulse" />)}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400 text-lg mb-2">No videos yet</p>
          <button onClick={openAdd} className="text-green-600 text-sm hover:underline">Add your first video</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item._id} className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-opacity ${!item.isActive ? "opacity-40" : ""}`}>
              <div className="aspect-video bg-gray-100 relative cursor-pointer group" onClick={() => openView(item)}>
                <img src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    <Play size={18} className="ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded capitalize">{item.category}</span>
              </div>
              <div className="p-3">
                <p className="font-medium text-gray-800 text-sm truncate">{item.title}</p>
                <p className="text-xs text-gray-400 font-mono mt-0.5">{item.youtubeId}</p>
                <div className="flex gap-1 mt-3 items-center">
                  <Tooltip label="Watch on YouTube">
                    <a href={`https://youtube.com/watch?v=${item.youtubeId}`} target="_blank" rel="noreferrer"
                      className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"><ExternalLink size={13} /></a>
                  </Tooltip>
                  <Tooltip label={item.isActive ? "Hide" : "Show"}>
                    <button onClick={() => updateMut.mutate({ id: item._id, data: { isActive: !item.isActive } })}
                      className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                      {item.isActive ? <Eye size={13} /> : <EyeOff size={13} />}
                    </button>
                  </Tooltip>
                  <Tooltip label="Edit"><button onClick={() => openEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-blue-400 hover:text-blue-600 transition-colors"><Pencil size={13} /></button></Tooltip>
                  <Tooltip label="Delete"><button onClick={() => setDeleteId(item._id)} className="p-1.5 rounded hover:bg-gray-100 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={13} /></button></Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Dialog */}
      <Modal open={viewOpen} onClose={() => setViewOpen(false)} title={viewing?.title || "Preview"} size="lg">
        {viewing && (
          <div>
            <div className="aspect-video rounded-lg overflow-hidden bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${viewing.youtubeId}`}
                title={viewing.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {viewing.description && <p className="text-sm text-gray-600 mt-3">{viewing.description}</p>}
          </div>
        )}
      </Modal>

      {/* Create / Edit Dialog */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Video" : "Add Video"}>
        <div className="space-y-4">
          <FormField label="Title" required>
            <input className={inputClass} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Video title" />
          </FormField>
          <FormField label="YouTube URL or Video ID" required>
            <input className={inputClass} value={form.youtubeId} onChange={(e) => setForm({ ...form, youtubeId: e.target.value })} placeholder="https://youtube.com/watch?v=... or video ID" />
            <p className="text-xs text-gray-400 mt-1">Paste the full YouTube URL or just the 11-character video ID</p>
          </FormField>
          <FormField label="Category">
            <select className={selectClass} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="mahalasa">Mahalasa</option>
              <option value="event">Event</option>
              <option value="discourse">Discourse</option>
              <option value="other">Other</option>
            </select>
          </FormField>
          <FormField label="Description">
            <textarea className={textareaClass} rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Brief description..." />
          </FormField>
          <FormField label="Display Order">
            <input type="number" className={inputClass} value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
          </FormField>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="rounded" /> Active
          </label>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleSave} disabled={saving || !form.title || !form.youtubeId} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {saving ? "Saving…" : editing ? "Save Changes" : "Add Video"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={() => deleteId && deleteMut.mutate(deleteId)} loading={deleteMut.isPending} />
    </div>
  );
}
