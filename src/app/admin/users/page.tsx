"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, Eye, EyeOff, ShieldCheck, Shield, Edit3, User } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import StatusBadge from "../components/StatusBadge";
import { apiFetch } from "@/lib/apiFetch";
import FormField, { inputClass, selectClass } from "../components/FormField";
import Tooltip from "../components/Tooltip";

interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: "super_admin" | "admin" | "editor";
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
}

interface CreateForm {
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

interface EditForm {
  name: string;
  email: string;
  role: string;
  isActive: boolean;
  password: string;
}

const emptyCreate: CreateForm = { name: "", email: "", password: "", role: "admin", isActive: true };

const ROLE_META: Record<string, { label: string; icon: typeof ShieldCheck; color: string }> = {
  super_admin: { label: "Super Admin", icon: ShieldCheck, color: "bg-purple-100 text-purple-700" },
  admin: { label: "Admin", icon: Shield, color: "bg-blue-100 text-blue-700" },
  editor: { label: "Editor", icon: Edit3, color: "bg-green-100 text-green-700" },
};

const api = {
  list: (): Promise<AdminUser[]> => apiFetch("/api/admin/users").then((r) => r.json()),
  create: (data: CreateForm) =>
    apiFetch("/api/admin/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then(async (r) => {
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "Failed");
      return d;
    }),
  update: ({ id, data }: { id: string; data: Partial<EditForm> }) =>
    apiFetch(`/api/admin/users/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((r) => r.json()),
  remove: (id: string) => apiFetch(`/api/admin/users/${id}`, { method: "DELETE" }).then((r) => r.json()),
};

export default function UsersPage() {
  const qc = useQueryClient();
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);
  const [editing, setEditing] = useState<AdminUser | null>(null);
  const [viewing, setViewing] = useState<AdminUser | null>(null);
  const [createForm, setCreateForm] = useState<CreateForm>(emptyCreate);
  const [editForm, setEditForm] = useState<EditForm>({ name: "", email: "", role: "admin", isActive: true, password: "" });
  const [showPass, setShowPass] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data: items = [], isLoading, isError } = useQuery({ queryKey: ["admin-users"], queryFn: api.list, select: (d) => Array.isArray(d) ? d : [] });
  const invalidate = () => qc.invalidateQueries({ queryKey: ["admin-users"] });

  const createMut = useMutation({
    mutationFn: api.create,
    onSuccess: () => { invalidate(); setCreateOpen(false); setCreateForm(emptyCreate); toast.success("Admin user created"); },
    onError: (e: Error) => toast.error(e.message || "Failed to create user"),
  });
  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => { invalidate(); setEditOpen(false); toast.success("User updated"); },
    onError: () => toast.error("Failed to update user"),
  });
  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => { invalidate(); setDeleteId(null); toast.success("User deleted"); },
    onError: () => toast.error("Failed to delete user"),
  });

  function openEdit(user: AdminUser) {
    setEditing(user);
    setEditForm({ name: user.name, email: user.email, role: user.role, isActive: user.isActive, password: "" });
    setShowPass(false);
    setEditOpen(true);
  }

  function openView(user: AdminUser) { setViewing(user); setViewOpen(true); }

  function handleCreate() {
    if (!createForm.password || createForm.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    createMut.mutate(createForm);
  }

  function handleEdit() {
    if (!editing) return;
    const payload: Partial<EditForm> = { name: editForm.name, email: editForm.email, role: editForm.role, isActive: editForm.isActive };
    if (editForm.password) {
      if (editForm.password.length < 6) { toast.error("Password must be at least 6 characters"); return; }
      payload.password = editForm.password;
    }
    updateMut.mutate({ id: editing._id, data: payload });
  }

  return (
    <div>
      <AdminHeader
        title="Admin Users"
        subtitle="Manage who has access to this admin panel"
        action={
          <button onClick={() => setCreateOpen(true)} className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors">
            <Plus size={16} /> Add User
          </button>
        }
      />

      {isLoading ? (
        <div className="space-y-3">{Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />)}</div>
      ) : isError ? (
        <div className="text-center py-20 bg-white rounded-xl border border-red-100">
          <p className="text-red-500 text-lg">Failed to load users</p>
          <p className="text-gray-400 text-sm mt-1">Check your connection and try refreshing</p>
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400 text-lg mb-2">No admin users yet</p>
          <button onClick={() => setCreateOpen(true)} className="text-green-600 text-sm hover:underline">Add your first admin</button>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((user) => {
            const meta = ROLE_META[user.role] || ROLE_META.admin;
            const RoleIcon = meta.icon;
            return (
              <div key={user._id} className={`bg-white rounded-xl border shadow-sm p-4 flex gap-4 items-center transition-opacity ${!user.isActive ? "opacity-40" : ""}`}>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <User size={18} className="text-green-700" />
                </div>
                <div className="flex-1 min-w-0 cursor-pointer" onClick={() => openView(user)}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-gray-800 text-sm hover:text-green-700 transition-colors">{user.name}</span>
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${meta.color}`}>
                      <RoleIcon size={11} />{meta.label}
                    </span>
                    {!user.isActive && <StatusBadge status="inactive" />}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{user.email}</p>
                  {user.lastLogin && <p className="text-xs text-gray-400 mt-0.5">Last login: {new Date(user.lastLogin).toLocaleDateString()}</p>}
                </div>
                <div className="flex gap-1 shrink-0">
                  <Tooltip label={user.isActive ? "Deactivate" : "Activate"}>
                    <button onClick={() => updateMut.mutate({ id: user._id, data: { isActive: !user.isActive } })}
                      className="p-1.5 rounded hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors">{user.isActive ? <Eye size={14} /> : <EyeOff size={14} />}</button>
                  </Tooltip>
                  <Tooltip label="Edit"><button onClick={() => openEdit(user)} className="p-1.5 rounded hover:bg-gray-100 text-blue-400 hover:text-blue-600 transition-colors"><Pencil size={14} /></button></Tooltip>
                  <Tooltip label="Delete"><button onClick={() => setDeleteId(user._id)} className="p-1.5 rounded hover:bg-gray-100 text-red-400 hover:text-red-600 transition-colors"><Trash2 size={14} /></button></Tooltip>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* View Dialog */}
      <Modal open={viewOpen} onClose={() => setViewOpen(false)} title="User Details" size="sm">
        {viewing && (() => {
          const meta = ROLE_META[viewing.role] || ROLE_META.admin;
          const RoleIcon = meta.icon;
          return (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <User size={28} className="text-green-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">{viewing.name}</h3>
                  <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${meta.color}`}>
                    <RoleIcon size={11} />{meta.label}
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="font-medium">{viewing.email}</span></div>
                <div className="flex justify-between"><span className="text-gray-500">Status</span><StatusBadge status={viewing.isActive ? "active" : "inactive"} /></div>
                <div className="flex justify-between"><span className="text-gray-500">Created</span><span className="font-medium">{new Date(viewing.createdAt).toLocaleDateString()}</span></div>
                {viewing.lastLogin && <div className="flex justify-between"><span className="text-gray-500">Last Login</span><span className="font-medium">{new Date(viewing.lastLogin).toLocaleString()}</span></div>}
              </div>
              <div className="flex gap-3 justify-end pt-3 border-t">
                <button onClick={() => setViewOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Close</button>
                <button onClick={() => { setViewOpen(false); openEdit(viewing); }} className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800">Edit</button>
              </div>
            </div>
          );
        })()}
      </Modal>

      {/* Create Dialog */}
      <Modal open={createOpen} onClose={() => setCreateOpen(false)} title="Create Admin User">
        <div className="space-y-4">
          <FormField label="Full Name" required>
            <input className={inputClass} value={createForm.name} onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })} placeholder="e.g. Temple Admin" />
          </FormField>
          <FormField label="Email" required>
            <input type="email" className={inputClass} value={createForm.email} onChange={(e) => setCreateForm({ ...createForm, email: e.target.value })} placeholder="admin@mahalasa.org" />
          </FormField>
          <FormField label="Password" required>
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className={inputClass}
                value={createForm.password}
                onChange={(e) => setCreateForm({ ...createForm, password: e.target.value })}
                placeholder="Minimum 6 characters"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs">
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </FormField>
          <FormField label="Role">
            <select className={selectClass} value={createForm.role} onChange={(e) => setCreateForm({ ...createForm, role: e.target.value })}>
              <option value="super_admin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
            <p className="text-xs text-gray-400 mt-1">Editor can view only · Admin can create/edit · Super Admin has full access</p>
          </FormField>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" checked={createForm.isActive} onChange={(e) => setCreateForm({ ...createForm, isActive: e.target.checked })} className="rounded" /> Active
          </label>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setCreateOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleCreate} disabled={createMut.isPending || !createForm.name || !createForm.email || !createForm.password}
            className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {createMut.isPending ? "Creating…" : "Create User"}
          </button>
        </div>
      </Modal>

      {/* Edit Dialog */}
      <Modal open={editOpen} onClose={() => setEditOpen(false)} title="Edit User">
        <div className="space-y-4">
          <FormField label="Full Name" required>
            <input className={inputClass} value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
          </FormField>
          <FormField label="Email" required>
            <input type="email" className={inputClass} value={editForm.email} onChange={(e) => setEditForm({ ...editForm, email: e.target.value })} />
          </FormField>
          <FormField label="Role">
            <select className={selectClass} value={editForm.role} onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}>
              <option value="super_admin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="editor">Editor</option>
            </select>
          </FormField>
          <FormField label="New Password">
            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                className={inputClass}
                value={editForm.password}
                onChange={(e) => setEditForm({ ...editForm, password: e.target.value })}
                placeholder="Leave blank to keep current password"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs">
                {showPass ? "Hide" : "Show"}
              </button>
            </div>
          </FormField>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
            <input type="checkbox" checked={editForm.isActive} onChange={(e) => setEditForm({ ...editForm, isActive: e.target.checked })} className="rounded" /> Active
          </label>
        </div>
        <div className="flex gap-3 justify-end pt-5 mt-2 border-t">
          <button onClick={() => setEditOpen(false)} className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">Cancel</button>
          <button onClick={handleEdit} disabled={updateMut.isPending || !editForm.name || !editForm.email}
            className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors">
            {updateMut.isPending ? "Saving…" : "Save Changes"}
          </button>
        </div>
      </Modal>

      <ConfirmDialog open={!!deleteId} onClose={() => setDeleteId(null)} onConfirm={() => deleteId && deleteMut.mutate(deleteId)} loading={deleteMut.isPending}
        message="Are you sure you want to delete this admin user? They will lose access immediately." />
    </div>
  );
}
