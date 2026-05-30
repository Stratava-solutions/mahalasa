"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import ImageUploader from "../components/ImageUploader";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass, textareaClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface NewsItem {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  isActive: boolean;
  order: number;
}

type FormState = Omit<NewsItem, "_id">;
const emptyForm: FormState = { title: "", content: "", imageUrl: "", publishedAt: "", isActive: true, order: 0 };

const api = {
  list: (): Promise<NewsItem[]> => apiFetch("/api/admin/news").then((r) => r.json()),
  create: (data: FormState) =>
    apiFetch("/api/admin/news", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<FormState> }) =>
    apiFetch(`/api/admin/news/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/news/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function NewsPage() {
  const qc = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [viewing, setViewing] = useState<NewsItem | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: items = [], isLoading } = useQuery({ queryKey: ["news"], queryFn: api.list, select: (d) => Array.isArray(d) ? d : [] });
  const invalidate = () => qc.invalidateQueries({ queryKey: ["news"] });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("News item added"); },
    onError: () => toast.error("Failed to add news"),
  });
  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("News updated"); },
    onError: () => toast.error("Failed to update"),
  });
  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { invalidate(); setDeleteId(null); toast.success("News item deleted"); },
    onError: () => toast.error("Failed to delete"),
  });

  function openAdd() { setEditing(null); setForm(emptyForm); setModalOpen(true); }
  function openEdit(item: NewsItem) {
    setEditing(item);
    setForm({ title: item.title, content: item.content, imageUrl: item.imageUrl, publishedAt: item.publishedAt, isActive: item.isActive, order: item.order });
    setModalOpen(true);
  }

  function handleSave() {
    if (editing) updateMut.mutate({ id: editing._id, data: form });
    else createMut.mutate(form);
  }

  const saving = createMut.isPending || updateMut.isPending;

  return (
    <div>
      <AdminHeader
        title="News"
        subtitle="Manage news items shown in the sidebar"
        action={
          <button onClick={openAdd} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} /> Add News
          </button>
        }
      />

      {isLoading ? (
        <div className="space-y-3">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-20 bg-gray-100 rounded-xl animate-pulse" />)}</div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400 text-lg mb-2">No news items yet</p>
          <button onClick={openAdd} className="text-green-600 text-sm hover:underline">Add your first news item</button>
        </div>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item._id} className={`bg-white rounded-xl border shadow-sm p-4 flex gap-4 items-start transition-opacity ${!item.isActive ? "opacity-40" : ""}`}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} className="w-16 h-16 rounded-lg object-cover shrink-0" />}
              <div className="flex-1 min-w-0 cursor-pointer" onClick={() => { setViewing(item); setViewOpen(true); }}>
                <h3 className="font-semibold text-gray-800 text-sm hover:text-green-700 transition-colors">{item.title}</h3>
                {item.publishedAt && <p className="text-xs text-gray-400 mt-0.5">{item.publishedAt}</p>}
                {item.content && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.content}</p>}
              </div>
              <div className="flex gap-1 shrink-0">
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
      <Modal open={viewOpen} onClose={() => setViewOpen(false)} title="News Details" size="sm">
        {viewing && (
          <div className="space-y-3">
            {viewing.imageUrl && <img src={viewing.imageUrl} alt={viewing.title} className="w-full h-40 object-cover rounded-xl" />}
            <h2 className="text-lg font-bold text-gray-800">{viewing.title}</h2>
            {viewing.publishedAt && <p className="text-xs text-gray-400">{viewing.publishedAt}</p>}
            {viewing.content && <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{viewing.content}</p>}
            <div className="flex gap-3 justify-end pt-3 border-t">
              <button onClick={() => setViewOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Close</button>
              <button onClick={() => { setViewOpen(false); openEdit(viewing); }} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800">Edit</button>
            </div>
          </div>
        )}
      </Modal>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit News" : "Add News"}>
        <div className="space-y-4">
          <FormField label="Title" required>
            <input className={inputClass} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="News headline" />
          </FormField>
          <FormField label="Published Date">
            <input className={inputClass} value={form.publishedAt} onChange={(e) => setForm({ ...form, publishedAt: e.target.value })} placeholder="e.g. May 15, 2025" />
          </FormField>
          <FormField label="Content">
            <textarea className={textareaClass} rows={4} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} placeholder="News content..." />
          </FormField>
          <FormField label="Display Order">
            <input type="number" className={inputClass} value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
          </FormField>
          <ImageUploader label="Image (optional)" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="rounded" /> Active
          </label>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleSave} disabled={saving || !form.title} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {saving ? "Saving…" : editing ? "Save Changes" : "Add News"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={() => deleteId && deleteMut.mutate(deleteId)} loading={deleteMut.isPending} />
    </div>
  );
}
