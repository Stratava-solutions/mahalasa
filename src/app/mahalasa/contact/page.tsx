"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "w-full p-2.5 border border-gray-400 rounded bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm";

  return (
    <div className="text-primary">
      <h1 className="text-2xl font-bold mb-6 text-center text-red-700">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Temple Information */}
        <div>
          <h2 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Temple Information</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="border-l-4 border-green-700 pl-3">
              <p className="font-semibold text-green-800 mb-1">📍 Address</p>
              <p>Shri Mahalasa Narayani Devi Kshetra<br />41, Shiroor, Harikhandige 576 124<br />Udupi District, Karnataka State, INDIA</p>
            </div>
            <div className="border-l-4 border-green-700 pl-3">
              <p className="font-semibold text-green-800 mb-1">📞 Phone &amp; WhatsApp</p>
              <p>WhatsApp: +91 89704 14801<br />Temple: +91 820 2543400</p>
            </div>
            <div className="border-l-4 border-green-700 pl-3">
              <p className="font-semibold text-green-800 mb-1">✉️ Email</p>
              <p><a href="mailto:sureshjpai@gmail.com" className="text-blue-700 underline">sureshjpai@gmail.com</a></p>
            </div>
            <div className="border-l-4 border-green-700 pl-3">
              <p className="font-semibold text-green-800 mb-1">🕰️ Visiting Hours</p>
              <p><strong>Daily:</strong> 5:00 AM – 9:30 PM</p>
              <p className="mt-1"><strong>Aarti Times:</strong></p>
              <ul className="ml-3 mt-1 space-y-0.5">
                <li>• Mangala Aarti — 5:00 AM</li>
                <li>• Madhyana Aarti — 12:00 PM</li>
                <li>• Sandhya Aarti — 7:00 PM</li>
                <li>• Shayan Aarti — 9:00 PM</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-700 pl-3">
              <p className="font-semibold text-green-800 mb-1">🏦 Bank Transfer</p>
              <p className="whitespace-pre-line text-xs">Canara Bank, Perdoor: 0130200083045 | IFSC: CNRB0010130
Union Bank, Manipal: 520101232336071 | IFSC: UBIN0901288</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-lg font-bold mb-4 border-b border-green-700 pb-2">Get In Touch</h2>

          {success ? (
            <div className="border border-green-600 rounded-lg p-6 text-center bg-white/40">
              <div className="text-4xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-green-700 mb-1">Message Sent!</h3>
              <p className="text-sm text-gray-600">Thank you for reaching out. We will get back to you soon.</p>
              <button onClick={() => setSuccess(false)} className="mt-4 text-sm text-green-700 hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass} placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass} placeholder="Your email" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass} placeholder="Your phone number" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Subject</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass}>
                  <option>General Inquiry</option>
                  <option>Seva Booking</option>
                  <option>Festival Information</option>
                  <option>Donation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Message *</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={inputClass} placeholder="Your message" />
              </div>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button type="submit" disabled={submitting}
                className="w-full bg-green-800 text-white py-2.5 rounded-lg hover:bg-green-900 transition-colors font-semibold text-sm disabled:opacity-50">
                {submitting ? "Sending…" : "Send Message 🙏"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
