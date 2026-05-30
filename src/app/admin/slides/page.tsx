"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff, GripVertical } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import ImageUploader from "../components/ImageUploader";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface Slide {
  _id: string;
  date: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  time: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
}

type FormState = Omit<Slide, "_id">;
const emptyForm: FormState = { date: "", badge: "", badgeColor: "bg-green-500", title: "", description: "", time: "", imageUrl: "", order: 0, isActive: true };

const BADGE_COLORS = [
  { value: "bg-green-500", label: "Green" },
  { value: "bg-blue-500", label: "Blue" },
  { value: "bg-red-500", label: "Red" },
  { value: "bg-purple-500", label: "Purple" },
  { value: "bg-orange-500", label: "Orange" },
  { value: "bg-amber-500", label: "Amber" },
];

const api = {
  list: (): Promise<Slide[]> => apiFetch("/api/admin/slides").then((r) => r.json()),
  create: (data: FormState) =>
    apiFetch("/api/admin/slides", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<FormState> }) =>
    apiFetch(`/api/admin/slides/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/slides/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function SlidesPage() {
  const qc = useQueryClient();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Slide | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: items = [], isLoading } = useQuery({ queryKey: ["slides"], queryFn: api.list, select: (d) => Array.isArray(d) ? d : [] });
  const invalidate = () => qc.invalidateQueries({ queryKey: ["slides"] });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Slide added"); },
    onError: () => toast.error("Failed to add slide"),
  });
  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Slide updated"); },
    onError: () => toast.error("Failed to update"),
  });
  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { invalidate(); setDeleteId(null); toast.success("Slide deleted"); },
    onError: () => toast.error("Failed to delete"),
  });

  function openAdd() { setEditing(null); setForm({ ...emptyForm, order: items.length }); setModalOpen(true); }
  function openEdit(item: Slide) {
    setEditing(item);
    setForm({ date: item.date, badge: item.badge, badgeColor: item.badgeColor, title: item.title, description: item.description, time: item.time, imageUrl: item.imageUrl, order: item.order, isActive: item.isActive });
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
        title="Sidebar Slides"
        subtitle={`${items.filter((s) => s.isActive).length} active slides in the left sidebar`}
        action={
          <button onClick={openAdd} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} /> Add Slide
          </button>
        }
      />

      {isLoading ? (
        <div className="space-y-2">{Array.from({ length: 5 }).map((_, i) => <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />)}</div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400 text-lg mb-2">No slides yet</p>
          <button onClick={openAdd} className="text-green-600 text-sm hover:underline">Add your first slide</button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item._id} className={`bg-white rounded-xl border shadow-sm p-3.5 flex gap-3 items-center transition-opacity ${!item.isActive ? "opacity-40" : ""}`}>
              <GripVertical size={16} className="text-gray-300 shrink-0" />
              {item.imageUrl && <img src={item.imageUrl} alt={item.badge} className="w-12 h-12 rounded-lg object-cover shrink-0" />}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`${item.badgeColor} text-white text-xs px-2 py-0.5 rounded font-bold`}>{item.badge}</span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                  {item.time && <span className="text-xs text-gray-400">· {item.time}</span>}
                </div>
                {item.description && <p className="text-xs text-gray-500 mt-0.5 truncate">{item.description}</p>}
              </div>
              <div className="flex gap-1 shrink-0">
                <Tooltip label={item.isActive ? "Hide" : "Show"}>
                  <button onClick={() => updateMut.mutate({ id: item._id, data: { isActive: !item.isActive } })}
                    className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">
                    {item.isActive ? <Eye size={14} /> : <EyeOff size={14} />}
                  </button>
                </Tooltip>
                <Tooltip label="Edit"><button onClick={() => openEdit(item)} className="p-1.5 rounded hover:bg-gray-100 text-blue-400 hover:text-blue-600 transition-colors"><Pencil size={14} /></button></Tooltip>
                <Tooltip label="Delete"><button onClick={() => setDeleteId(item._id)} className="p-1.5 rounded hover:bg-gray-100 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={14} /></button></Tooltip>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create / Edit Dialog */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Slide" : "Add Slide"} size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Badge Text" required>
            <input className={inputClass} value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} placeholder="e.g. TULASI POOJAN" />
          </FormField>
          <FormField label="Date" required>
            <input className={inputClass} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="e.g. November 5, 2025 or Every Thursday" />
          </FormField>
          <FormField label="Badge Color">
            <div className="flex gap-2 flex-wrap pt-1">
              {BADGE_COLORS.map(({ value, label }) => (
                <button key={value} type="button" onClick={() => setForm({ ...form, badgeColor: value })}
                  title={label}
                  className={`w-8 h-8 rounded-lg ${value} border-2 transition-all ${form.badgeColor === value ? "border-gray-700 scale-110 shadow-md" : "border-transparent"}`}
                />
              ))}
            </div>
          </FormField>
          <FormField label="Time">
            <input className={inputClass} value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} placeholder="e.g. at 7:00 am" />
          </FormField>
          <FormField label="Title">
            <input className={inputClass} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Shri Mahalasa Narayani Devi Kshetra" />
          </FormField>
          <FormField label="Description">
            <input className={inputClass} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Brief description" />
          </FormField>
          <FormField label="Order">
            <input type="number" className={inputClass} value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
          </FormField>
          <div className="flex items-center gap-2 pt-6">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="rounded" /> Active
            </label>
          </div>
          <div className="md:col-span-2">
            <ImageUploader label="Slide Image (optional)" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          </div>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleSave} disabled={saving || !form.badge || !form.date} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {saving ? "Saving…" : editing ? "Save Changes" : "Add Slide"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={() => deleteId && deleteMut.mutate(deleteId)} loading={deleteMut.isPending} />
    </div>
  );
}
