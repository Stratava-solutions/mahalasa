"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Images,
  Video,
  CalendarDays,
  SlidersHorizontal,
  MessageSquare,
  Calendar,
  MapPin,
  ImageIcon,
  Newspaper,
  Users,
  FileText,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/gallery", label: "Gallery", icon: Images },
  { href: "/admin/videos", label: "Videos", icon: Video },
  { href: "/admin/events", label: "Events", icon: CalendarDays },
  { href: "/admin/slides", label: "Sidebar Slides", icon: SlidersHorizontal },
  { href: "/admin/contacts", label: "Contact Inbox", icon: MessageSquare },
  { href: "/admin/panchangam", label: "Panchangam", icon: Calendar },
  { href: "/admin/temples", label: "Temples", icon: MapPin },
  { href: "/admin/hero", label: "Hero Images", icon: ImageIcon },
  { href: "/admin/news", label: "News", icon: Newspaper },
  { href: "/admin/pages", label: "Page Content", icon: FileText },
  { href: "/admin/users", label: "Admin Users", icon: Users },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  }

  return (
    <aside
      className={`bg-green-900 text-white flex flex-col h-screen sticky top-0 transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-green-700">
        {!collapsed && (
          <div>
            <p className="text-xs text-green-300 font-medium uppercase tracking-wider">Admin</p>
            <h1 className="text-white font-bold text-sm leading-tight">Mahalasa</h1>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-green-700 text-green-300"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                active
                  ? "bg-green-700 text-white font-semibold"
                  : "text-green-200 hover:bg-green-800 hover:text-white"
              }`}
              title={collapsed ? label : undefined}
            >
              <Icon size={18} className="shrink-0" />
              {!collapsed && <span className="truncate">{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-green-700 p-3">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 text-sm text-green-200 hover:text-white hover:bg-green-800 rounded transition-colors"
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut size={18} className="shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
