"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AdminTopNav from "./components/AdminTopNav";
import Providers from "./components/Providers";
import { getToken } from "@/lib/apiFetch";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getToken();

    if (isLogin) {
      if (token) {
        window.location.href = "/admin/dashboard";
      } else {
        setReady(true);
      }
      return;
    }

    if (!token) {
      window.location.href = "/admin/login";
    } else {
      setReady(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!ready) {
    return (
      <div data-admin className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-green-700 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isLogin) {
    return (
      <Providers>
        <div data-admin className="min-h-screen w-full">{children}</div>
      </Providers>
    );
  }

  return (
    <Providers>
      <div data-admin className="flex h-screen bg-gray-50 overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
        <AdminTopNav />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </Providers>
  );
}
