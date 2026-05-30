"use client";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2, Mail, Phone } from "lucide-react";
import AdminHeader from "../components/AdminHeader";
import Modal from "../components/Modal";
import ConfirmDialog from "../components/ConfirmDialog";
import StatusBadge from "../components/StatusBadge";
import FormField, { selectClass, textareaClass } from "../components/FormField";
import { apiFetch } from "@/lib/apiFetch";
import Tooltip from "../components/Tooltip";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  adminNotes: string;
  createdAt: string;
}

const STATUS_OPTIONS = ["new", "read", "replied", "resolved", "spam"];

const api = {
  list: (): Promise<Contact[]> =>
    apiFetch("/api/admin/contacts").then((r) => r.json()),
  update: ({ id, data }: { id: string; data: Partial<Contact> }) =>
    apiFetch(`/api/admin/contacts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((r) => r.json()),
  remove: (id: string) =>
    apiFetch(`/api/admin/contacts/${id}`, { method: "DELETE" }).then((r) =>
      r.json(),
    ),
};

export default function ContactsPage() {
  const qc = useQueryClient();
  const [selected, setSelected] = useState<Contact | null>(null);
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("new");
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const { data: items = [], isLoading, isError } = useQuery({
    queryKey: ["contacts"],
    queryFn: api.list,
    select: (d) => Array.isArray(d) ? d : [],
  });
  const invalidate = () => qc.invalidateQueries({ queryKey: ["contacts"] });

  const updateMut = useMutation({
    mutationFn: api.update,
    onSuccess: () => {
      invalidate();
      setSelected(null);
      toast.success("Updated");
    },
    onError: () => toast.error("Failed to update"),
  });
  const deleteMut = useMutation({
    mutationFn: api.remove,
    onSuccess: () => {
      invalidate();
      setDeleteId(null);
      toast.success("Message deleted");
    },
    onError: () => toast.error("Failed to delete"),
  });

  function openContact(item: Contact) {
    setSelected(item);
    setNotes(item.adminNotes || "");
    setStatus(item.status);
    if (item.status === "new") {
      api
        .update({ id: item._id, data: { status: "read" } })
        .then(() => invalidate());
    }
  }

  const filtered =
    filterStatus === "all"
      ? items
      : items.filter((i) => i.status === filterStatus);
  const newCount = items.filter((i) => i.status === "new").length;

  return (
    <div>
      <AdminHeader
        title="Contact Inbox"
        subtitle={
          newCount > 0
            ? `${newCount} unread message${newCount > 1 ? "s" : ""}`
            : `${items.length} total messages`
        }
      />

      <div className="flex gap-2 mb-5 flex-wrap">
        {["all", ...STATUS_OPTIONS].map((s) => {
          const count =
            s === "all"
              ? items.length
              : items.filter((i) => i.status === s).length;
          return (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors flex items-center gap-1.5 ${filterStatus === s ? "bg-green-700 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
            >
              {s}
              {count > 0 && (
                <span
                  className={`text-xs rounded-full px-1.5 py-0.5 font-semibold ${filterStatus === s ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {isLoading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-20 bg-gray-100 rounded-xl animate-pulse"
            />
          ))}
        </div>
      ) : isError ? (
        <div className="text-center py-20 bg-white rounded-xl border border-red-100">
          <p className="text-red-500 text-lg">Failed to load contacts</p>
          <p className="text-gray-400 text-sm mt-1">Check your connection and try refreshing</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
          <p className="text-gray-400">
            No messages{" "}
            {filterStatus !== "all" ? `with status "${filterStatus}"` : ""}
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((item) => (
            <div
              key={item._id}
              className={`bg-white rounded-xl border shadow-sm p-4 flex gap-4 items-center cursor-pointer hover:border-green-300 transition-all ${item.status === "new" ? "border-blue-200 bg-blue-50/40" : ""}`}
              onClick={() => openContact(item)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  {item.status === "new" && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                  )}
                  <span className="font-semibold text-gray-800 text-sm">
                    {item.name}
                  </span>
                  <StatusBadge status={item.status} />
                  <span className="text-xs text-gray-400 ml-auto">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{item.subject}</p>
                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                  {item.message}
                </p>
              </div>
              <Tooltip label="Delete">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDeleteId(item._id);
                  }}
                  className="p-1.5 rounded hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors shrink-0"
                >
                  <Trash2 size={14} />
                </button>
              </Tooltip>
            </div>
          ))}
        </div>
      )}

      {/* View / Edit Dialog */}
      <Modal
        open={!!selected}
        onClose={() => setSelected(null)}
        title="Message Details"
        size="md"
      >
        {selected && (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-800">{selected.name}</p>
                  <a
                    href={`mailto:${selected.email}`}
                    className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline mt-0.5"
                  >
                    <Mail size={13} />
                    {selected.email}
                  </a>
                  {selected.phone && (
                    <a
                      href={`tel:${selected.phone}`}
                      className="flex items-center gap-1.5 text-sm text-gray-600 mt-0.5"
                    >
                      <Phone size={13} />
                      {selected.phone}
                    </a>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <StatusBadge status={selected.status} />
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(selected.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                Subject
              </p>
              <p className="text-sm font-medium text-gray-800 bg-gray-50 rounded-lg px-3 py-2">
                {selected.subject}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5">
                Message
              </p>
              <p className="text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-3 whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
                {selected.message}
              </p>
            </div>

            <FormField label="Status">
              <select
                className={selectClass}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s} className="capitalize">
                    {s}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="Admin Notes">
              <textarea
                className={textareaClass}
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Internal notes (not visible to sender)..."
              />
            </FormField>

            <div className="flex gap-3 justify-end pt-3 border-t">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50"
              >
                Close
              </button>
              <a
                href={`mailto:${selected.email}?subject=Re: ${selected.subject}`}
                className="px-4 py-2 border border-blue-200 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
              >
                Reply by Email
              </a>
              <button
                onClick={() =>
                  updateMut.mutate({
                    id: selected._id,
                    data: { status, adminNotes: notes },
                  })
                }
                disabled={updateMut.isPending}
                className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm font-medium hover:bg-green-800 disabled:opacity-50 transition-colors"
              >
                {updateMut.isPending ? "Saving…" : "Save"}
              </button>
            </div>
          </div>
        )}
      </Modal>

      <ConfirmDialog
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteId && deleteMut.mutate(deleteId)}
        loading={deleteMut.isPending}
      />
    </div>
  );
}
