"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2 } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import ImageUploader from "../components/ImageUploader";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass, textareaClass, selectClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface PageSection {
  _id: string;
  page: string;
  key: string;
  title: string;
  subtitle: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  order: number;
  isActive: boolean;
}

type FormState = Omit<PageSection, "_id">;

const PAGE_OPTIONS = [
  "shri-guru-charitra", "charitra", "chronicles", "seva",
  "invitation", "temple-contacts", "policies",
];

const emptyForm: FormState = {
  page: "shri-guru-charitra", key: "", title: "", subtitle: "",
  body: "", imageUrl: "", imageAlt: "", order: 0, isActive: true,
};

const api = {
  list: (page: string): Promise<PageSection[]> =>
    apiFetch(`/api/admin/page-content?page=${encodeURIComponent(page)}`).then((r) => r.json()),
  create: (data: FormState) =>
    apiFetch("/api/admin/page-content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      .then(async (r) => { const d = await r.json(); if (!r.ok) throw new Error(d.error); return d; }),
  update: ({ id, data }: { id: string; data: Partial<FormState> }) =>
    apiFetch(`/api/admin/page-content/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      .then(async (r) => { const d = await r.json(); if (!r.ok) throw new Error(d.error); return d; }),
  remove: (id: string) =>
    apiFetch(`/api/admin/page-content/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function PagesAdmin() {
  const qc = useQueryClient();
  const [selectedPage, setSelectedPage] = useState("shri-guru-charitra");
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<PageSection | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  const { data: sections = [] } = useQuery({
    queryKey: ["page-content", selectedPage],
    queryFn: () => api.list(selectedPage),
    select: (d) => Array.isArray(d) ? d : [],
  });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { toast.success("Section created"); qc.invalidateQueries({ queryKey: ["page-content"] }); closeModal(); },
    onError: (e: Error) => toast.error(e.message),
  });

  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { toast.success("Section updated"); qc.invalidateQueries({ queryKey: ["page-content"] }); closeModal(); },
    onError: (e: Error) => toast.error(e.message),
  });

  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { toast.success("Section deleted"); qc.invalidateQueries({ queryKey: ["page-content"] }); setDeleteTarget(null); },
  });

  function openCreate() {
    setEditing(null);
    setForm({ ...emptyForm, page: selectedPage });
    setShowModal(true);
  }

  function openEdit(s: PageSection) {
    setEditing(s);
    setForm({ page: s.page, key: s.key, title: s.title, subtitle: s.subtitle, body: s.body, imageUrl: s.imageUrl, imageAlt: s.imageAlt, order: s.order, isActive: s.isActive });
    setShowModal(true);
  }

  function closeModal() { setShowModal(false); setEditing(null); }

  function handleSave() {
    if (!form.key.trim()) { toast.error("Key is required"); return; }
    if (editing) updateMut.mutate({ id: editing._id, data: form });
    else createMut.mutate(form);
  }

  const saving = createMut.isPending || updateMut.isPending;

  return (
    <div>
      <AdminHeader
        title="Page Content"
        subtitle="Manage text and images for all public pages"
        action={<button onClick={openCreate} className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium"><Plus size={16} />Add Section</button>}
      />

      {/* Page selector */}
      <div className="mb-6">
        <select
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
          className={selectClass + " max-w-xs"}
        >
          {PAGE_OPTIONS.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      {sections.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400">
          No sections yet for <strong>{selectedPage}</strong>. Click &quot;Add Section&quot; to create one.
        </div>
      ) : (
        <div className="space-y-3">
          {sections.map((s) => (
            <div key={s._id} className="bg-white rounded-xl border border-gray-100 p-4 flex items-start gap-4">
              {s.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.imageUrl} alt={s.imageAlt || s.title} className="w-16 h-16 object-cover rounded-lg flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-500">{s.key}</span>
                  {!s.isActive && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">Inactive</span>}
                </div>
                {s.title && <p className="font-semibold text-gray-800 text-sm">{s.title}</p>}
                {s.body && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{s.body}</p>}
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <Tooltip label="Edit"><button onClick={() => openEdit(s)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500"><Pencil size={16} /></button></Tooltip>
                <Tooltip label="Delete"><button onClick={() => setDeleteTarget(s._id)} className="p-2 rounded-lg hover:bg-red-50 text-red-500"><Trash2 size={16} /></button></Tooltip>
              </div>
            </div>
          ))}
        </div>
      )}

      <Modal open={showModal} onClose={closeModal} title={editing ? "Edit Section" : "Add Section"} size="lg">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Page">
              <select value={form.page} onChange={(e) => setForm({ ...form, page: e.target.value })} className={selectClass}>
                {PAGE_OPTIONS.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </FormField>
            <FormField label="Key (unique identifier, e.g. header-image)">
              <input value={form.key} onChange={(e) => setForm({ ...form, key: e.target.value })} className={inputClass} placeholder="header-image" />
            </FormField>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField label="Title">
              <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className={inputClass} />
            </FormField>
            <FormField label="Order">
              <input type="number" value={form.order} onChange={(e) => setForm({ ...form, order: Number(e.target.value) })} className={inputClass} />
            </FormField>
          </div>
          <FormField label="Body / Text content">
            <textarea value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} className={textareaClass} rows={5} />
          </FormField>
          <FormField label="Image">
            <ImageUploader
              value={form.imageUrl}
              onChange={(url) => setForm({ ...form, imageUrl: url })}
            />
          </FormField>
          <FormField label="Image Alt text">
            <input value={form.imageAlt} onChange={(e) => setForm({ ...form, imageAlt: e.target.value })} className={inputClass} />
          </FormField>
          <FormField label="Active">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="w-4 h-4 accent-green-700" />
              <span className="text-sm">Visible on site</span>
            </label>
          </FormField>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={closeModal} className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm">Cancel</button>
          <button onClick={handleSave} disabled={saving} className="px-6 py-2 rounded-lg bg-green-700 hover:bg-green-800 text-white text-sm disabled:opacity-50">
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog
        open={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteTarget && deleteMut.mutate(deleteTarget)}
        loading={deleteMut.isPending}
      />
    </div>
  );
}
