"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearToken } from "@/lib/apiFetch";
import { toast } from "sonner";
import {
  LayoutDashboard, Images, Video, CalendarDays, SlidersHorizontal,
  MessageSquare, Calendar, MapPin, ImageIcon, Newspaper, Users, LogOut,
} from "lucide-react";

const TABS = [
  { href: "/admin/dashboard",  label: "Dashboard",    icon: LayoutDashboard },
  { href: "/admin/gallery",    label: "Gallery",      icon: Images },
  { href: "/admin/videos",     label: "Videos",       icon: Video },
  { href: "/admin/events",     label: "Events",       icon: CalendarDays },
  { href: "/admin/slides",     label: "Slides",       icon: SlidersHorizontal },
  { href: "/admin/contacts",   label: "Contacts",     icon: MessageSquare },
  { href: "/admin/panchangam", label: "Panchangam",   icon: Calendar },
  { href: "/admin/temples",    label: "Temples",      icon: MapPin },
  { href: "/admin/hero",       label: "Hero",         icon: ImageIcon },
  { href: "/admin/news",       label: "News",         icon: Newspaper },
  { href: "/admin/users",      label: "Users",        icon: Users },
];

export default function AdminTopNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    clearToken();
    await fetch("/api/auth/logout", { method: "POST" }).catch(() => {});
    toast.success("Signed out");
    router.push("/admin/login");
  }

  return (
    <aside className="w-56 shrink-0 bg-green-900 text-white flex flex-col h-full">
      {/* Brand */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-green-700/50">
        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-lg shrink-0">🏛️</div>
        <div className="min-w-0">
          <p className="text-white font-bold text-sm leading-none truncate">Mahalasa Admin</p>
          <p className="text-green-300 text-xs mt-0.5">Management Portal</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
        {TABS.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all ${
                active
                  ? "bg-white text-green-900 font-semibold shadow-sm"
                  : "text-green-200 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon size={15} className="shrink-0" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-2 py-3 border-t border-green-700/50">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-green-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <LogOut size={15} className="shrink-0" />
          <span>Sign out</span>
        </button>
      </div>
    </aside>
  );
}
