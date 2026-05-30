"use client";
import { useState } from "react";
import { Loader2, Eye, EyeOff, LogIn } from "lucide-react";
import { toast } from "sonner";
import { saveToken } from "@/lib/apiFetch";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Invalid credentials");
        return;
      }
      saveToken(data.token);
      window.location.href = "/admin/dashboard";
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Left panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 bg-gradient-to-br from-green-900 via-green-800 to-green-700 relative overflow-hidden flex-col items-center justify-center p-16">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -right-16 w-[32rem] h-[32rem] bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2" />

        <div className="relative z-10 text-center max-w-md">
          <div className="w-28 h-28 bg-white/10 border-2 border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <span className="text-6xl">🏛️</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Shri Mahalasa<br />Narayani
          </h1>
          <p className="text-green-200 text-xl leading-relaxed mb-2">Temple Admin Portal</p>
          <p className="text-green-300/70 text-sm">Manage content, events and media</p>
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Gallery", icon: "🖼️" },
              { label: "Events", icon: "📅" },
              { label: "Videos", icon: "▶️" },
            ].map(({ label, icon }) => (
              <div key={label} className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="text-green-100 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — full height form */}
      <div className="flex-1 flex items-center justify-center bg-white p-6 sm:p-10">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-10">
            <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl">🏛️</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Mahalasa Admin</h1>
            <p className="text-gray-500 mt-1 text-sm">Temple Management Portal</p>
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">Sign in</h2>
            <p className="text-gray-400 mt-3 text-base">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="admin@mahalasa.org"
                className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-green-500 transition-colors placeholder-gray-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="••••••••••"
                  className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-green-500 transition-colors placeholder-gray-300 pr-14"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPass ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white font-semibold py-4 rounded-2xl text-base transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-900/20"
            >
              {loading ? (
                <Loader2 size={22} className="animate-spin" />
              ) : (
                <LogIn size={22} />
              )}
              {loading ? "Signing in…" : "Sign in to Admin Panel"}
            </button>
          </form>

          <p className="text-center text-xs text-gray-300 mt-10">
            Mahalasa Temple Management System · Protected area
          </p>
        </div>
      </div>
    </div>
  );
}
