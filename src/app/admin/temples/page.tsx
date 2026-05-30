"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff, MapPin, CalendarDays } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import ImageUploader from "../components/ImageUploader";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass, selectClass, textareaClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface Temple {
  _id: string;
  name: string;
  location: string;
  established: string;
  significance: string;
  features: string[];
  category: string;
  imageUrl: string;
  isActive: boolean;
  order: number;
}

type FormState = Omit<Temple, "_id">;
const emptyForm: FormState = { name: "", location: "", established: "", significance: "", features: [], category: "india", imageUrl: "", isActive: true, order: 0 };

const api = {
  list: (): Promise<Temple[]> => apiFetch("/api/admin/temples").then((r) => r.json()),
  create: (data: FormState) =>
    apiFetch("/api/admin/temples", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<FormState> }) =>
    apiFetch(`/api/admin/temples/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/temples/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function TemplesPage() {
  const qc = useQueryClient();
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editing, setEditing] = useState<Temple | null>(null);
  const [viewing, setViewing] = useState<Temple | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [featuresInput, setFeaturesInput] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: items = [], isLoading } = useQuery({ queryKey: ["temples"], queryFn: api.list, select: (d) => Array.isArray(d) ? d : [] });
  const invalidate = () => qc.invalidateQueries({ queryKey: ["temples"] });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Temple added"); },
    onError: () => toast.error("Failed to add temple"),
  });
  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { invalidate(); setModalOpen(false); toast.success("Temple updated"); },
    onError: () => toast.error("Failed to update"),
  });
  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { invalidate(); setDeleteId(null); toast.success("Temple deleted"); },
    onError: () => toast.error("Failed to delete"),
  });

  function openAdd() { setEditing(null); setForm(emptyForm); setFeaturesInput(""); setModalOpen(true); }
  function openEdit(item: Temple) {
    setEditing(item);
    setForm({ name: item.name, location: item.location, established: item.established, significance: item.significance, features: item.features || [], category: item.category, imageUrl: item.imageUrl, isActive: item.isActive, order: item.order });
    setFeaturesInput((item.features || []).join("\n"));
    setModalOpen(true);
  }
  function openView(item: Temple) { setViewing(item); setViewOpen(true); }

  function handleSave() {
    const payload = { ...form, features: featuresInput.split("\n").map((f) => f.trim()).filter(Boolean) };
    if (editing) updateMut.mutate({ id: editing._id, data: payload });
    else createMut.mutate(payload);
  }

  const saving = createMut.isPending || updateMut.isPending;
  const filtered = filter === "all" ? items : items.filter((i) => i.category === filter);

  return (
    <div>
      <AdminHeader
        title="Temples Directory"
        subtitle="Manage temple listings across India and internationally"
        action={
          <button onClick={openAdd} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} /> Add Temple
          </button>
        }
      />

      <div className="flex gap-2 mb-5">
        {["all", "india", "international"].map((c) => (
          <button key={c} onClick={() => setFilter(c)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${filter === c ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
            {c === "india" ? "India" : c === "international" ? "International" : "All"}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-48 bg-gray-100 rounded-xl animate-pulse" />)}</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400 text-lg mb-2">No temples yet</p>
          <button onClick={openAdd} className="text-green-600 text-sm hover:underline">Add your first temple</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <div key={item._id} className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-opacity ${!item.isActive ? "opacity-40" : ""}`}>
              {item.imageUrl && <div className="h-36 overflow-hidden cursor-pointer" onClick={() => openView(item)}><img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" /></div>}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="cursor-pointer" onClick={() => openView(item)}>
                    <h3 className="font-semibold text-gray-800 hover:text-green-700 transition-colors">{item.name}</h3>
                    <div className="flex items-center gap-3 mt-1 flex-wrap">
                      <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin size={11} />{item.location}</span>
                      {item.established && <span className="flex items-center gap-1 text-xs text-gray-400"><CalendarDays size={11} />Est. {item.established}</span>}
                      <span className={`text-xs px-2 py-0.5 rounded-full ${item.category === "india" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{item.category}</span>
                    </div>
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
                {item.features?.length > 0 && (
                  <div className="flex gap-1 flex-wrap mt-3">
                    {item.features.slice(0, 4).map((f, i) => <span key={i} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded">{f}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View Dialog */}
      <Modal open={viewOpen} onClose={() => setViewOpen(false)} title="Temple Details" size="md">
        {viewing && (
          <div className="space-y-4">
            {viewing.imageUrl && <img src={viewing.imageUrl} alt={viewing.name} className="w-full h-48 object-cover rounded-xl" />}
            <div>
              <h2 className="text-xl font-bold text-gray-800">{viewing.name}</h2>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                <span className="flex items-center gap-1 text-sm text-gray-500"><MapPin size={13} />{viewing.location}</span>
                {viewing.established && <span className="flex items-center gap-1 text-sm text-gray-400"><CalendarDays size={13} />Est. {viewing.established}</span>}
                <span className={`text-xs px-2 py-0.5 rounded-full ${viewing.category === "india" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{viewing.category}</span>
              </div>
            </div>
            {viewing.significance && (
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Significance</p>
                <p className="text-sm text-gray-700 leading-relaxed">{viewing.significance}</p>
              </div>
            )}
            {viewing.features?.length > 0 && (
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Features</p>
                <div className="flex flex-wrap gap-2">
                  {viewing.features.map((f, i) => <span key={i} className="bg-green-50 text-green-700 text-sm px-3 py-1 rounded-lg">{f}</span>)}
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
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Temple" : "Add Temple"} size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <FormField label="Temple Name" required>
              <input className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Shri Mahalasa Narayani Temple" />
            </FormField>
          </div>
          <FormField label="Location" required>
            <input className={inputClass} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="City, State, Country" />
          </FormField>
          <FormField label="Category">
            <select className={selectClass} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="india">India</option>
              <option value="international">International</option>
            </select>
          </FormField>
          <FormField label="Established">
            <input className={inputClass} value={form.established} onChange={(e) => setForm({ ...form, established: e.target.value })} placeholder="e.g. 1985 or Ancient" />
          </FormField>
          <FormField label="Display Order">
            <input type="number" className={inputClass} value={form.order} onChange={(e) => setForm({ ...form, order: parseInt(e.target.value) || 0 })} />
          </FormField>
          <div className="md:col-span-2">
            <FormField label="Significance">
              <textarea className={textareaClass} rows={2} value={form.significance} onChange={(e) => setForm({ ...form, significance: e.target.value })} placeholder="Brief description of the temple..." />
            </FormField>
          </div>
          <div className="md:col-span-2">
            <FormField label="Features (one per line)">
              <textarea className={textareaClass} rows={3} value={featuresInput} onChange={(e) => setFeaturesInput(e.target.value)} placeholder={"Daily Puja\nAccommodation\nPrasadam"} />
            </FormField>
          </div>
          <div className="md:col-span-2">
            <ImageUploader label="Temple Image" value={form.imageUrl} onChange={(url) => setForm({ ...form, imageUrl: url })} />
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="rounded" /> Active
          </label>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setModalOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleSave} disabled={saving || !form.name || !form.location} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {saving ? "Saving…" : editing ? "Save Changes" : "Add Temple"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={() => deleteId && deleteMut.mutate(deleteId)} loading={deleteMut.isPending} />
    </div>
  );
}
