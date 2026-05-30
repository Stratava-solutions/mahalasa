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
import FormField, { inputClass, selectClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface GalleryImage {
  _id: string;
  title: string;
  imageUrl: string;
  category: string;
  alt: string;
  order: number;
  isActive: boolean;
}

type FormState = Omit<GalleryImage, "_id">;
const emptyForm: FormState = { title: "", imageUrl: "", category: "temple", alt: "", order: 0, isActive: true };

const api = {
  list: (): Promise<GalleryImage[]> => apiFetch("/api/admin/gallery").then((r) => r.json()),
  create: (data: FormState) =>
    apiFetch("/api/admin/gallery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<FormState> }) =>
    apiFetch(`/api/admin/gallery/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) =>
    apiFetch(`/api/admin/gallery/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function GalleryPage() {
  const qc = useQueryClient();
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<GalleryImage | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: items = [], isLoading } = useQuery({ queryKey: ["gallery"], queryFn: api.list, select: (d) => Array.isArray(d) ? d : [] });

  const invalidate = () => qc.invalidateQueries({ queryKey: ["gallery"] });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Image added"); },
    onError: () => toast.error("Failed to add image"),
  });

  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Image updated"); },
    onError: () => toast.error("Failed to update image"),
  });

  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { invalidate(); setDeleteId(null); toast.success("Image deleted"); },
    onError: () => toast.error("Failed to delete image"),
  });

  function openAdd() { setEditing(null); setForm(emptyForm); setModalOpen(true); }
  function openEdit(item: GalleryImage) {
    setEditing(item);
    setForm({ title: item.title, imageUrl: item.imageUrl, category: item.category, alt: item.alt, order: item.order, isActive: item.isActive });
    setModalOpen(true);
  }

  function handleSave() {
    if (editing) updateMut.mutate({ id: editing._id, data: form });
    else createMut.mutate(form);
  }

  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);
  const saving = createMut.isPending || updateMut.isPending;

  return (
    <div>
      <AdminHeader
        title="Gallery"
        subtitle="Manage temple photo gallery"
        action={
          <button onClick={openAdd} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} /> Add Image
          </button>
        }
      />

      <div className="flex gap-2 mb-5 flex-wrap">
        {["all", "temple", "deity", "festivals", "other"].map((c) => (
          <button key={c} onClick={() => setFilter(c)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${filter === c ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
            {c}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400 text-lg mb-2">No images yet</p>
          <button onClick={openAdd} className="text-green-600 text-sm hover:underline">Add your first image</button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map((item) => (
            <div key={item._id} className={`bg-white rounded-xl border overflow-hidden shadow-sm transition-opacity ${!item.isActive ? "opacity-40" : ""}`}>
              <div className="aspect-square bg-gray-100 relative">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.alt} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">No image</div>
                )}
                <span className="absolute top-1 left-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded capitalize">{item.category}</span>
              </div>
              <div className="p-2">
                <p className="text-xs font-medium text-gray-700 truncate">{item.title}</p>
                <div className="flex gap-1 mt-2">
                  <Tooltip label={item.isActive ? "Hide" : "Show"}>
                    <button onClick={() => updateMut.mutate({ id: item._id, data: { isActive: !item.isActive } })}
                      className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                      {item.isActive ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                  </Tooltip>
                  <Tooltip label="Edit"><button onClick={() => openEdit(item)} className="p-1 rounded hover:bg-gray-100 text-blue-400 hover:text-blue-600 transition-colors"><Pencil size={14} /></button></Tooltip>
                  <Tooltip label="Delete"><button onClick={() => setDeleteId(item._id)} className="p-1 rounded hover:bg-gray-100 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={14} /></button></Tooltip>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create / Edit Dialog */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Image" : "Add Gallery Image"}>
        <div className="space-y-4">
          <FormField label="Title" required>
            <input className={inputClass} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Temple Front View" />
          </FormField>
          <FormField label="Category">
            <select className={selectClass} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="temple">Temple</option>
              <option value="deity">Deity</option>
              <option value="festivals">Festivals</option>
              <option value="other">Other</option>
            </select>
          </FormField>
          <FormField label="Alt Text">
            <input className={inputClass} value={form.alt} onChange={(e) => setForm({ ...form, alt: e.target.value })} placeholder="Image description" />
          </FormField>
          <FormField label="Display Order">
            <input type="number" className={inputClass} value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
          </FormField>
          <ImageUploader label="Image" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="rounded" />
            Active (visible on site)
          </label>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleSave} disabled={saving || !form.title} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {saving ? "Saving…" : editing ? "Save Changes" : "Add Image"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={() => deleteId && deleteMut.mutate(deleteId)} loading={deleteMut.isPending} />
    </div>
  );
}
