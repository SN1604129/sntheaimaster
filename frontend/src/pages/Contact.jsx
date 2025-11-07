import { useState } from "react";

export default function Contact() {
  const API = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({ name: "", email: "", topic: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      if (!API) throw new Error("Missing VITE_API_URL");
      const res = await fetch(`${API}/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("Thanks! I’ll get back to you shortly.");
      setForm({ name: "", email: "", topic: "" });
    } catch (err) {
      setStatus("Could not send now — saved locally.");
      const key = "sn_leads";
      const ex = JSON.parse(localStorage.getItem(key) || "[]");
      ex.push({ ...form, ts: new Date().toISOString(), offline: true });
      localStorage.setItem(key, JSON.stringify(ex));
    }
  };

  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
      <p className="text-white/70 mt-2">Tell me about your project.</p>

      <form onSubmit={submit} className="mt-8 max-w-xl space-y-4">
        <input
          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
          placeholder="Your name"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
        <input
          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
          placeholder="Your email"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
        />
        <textarea
          className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none min-h-[140px]"
          placeholder="What do you want to build or analyze?"
          name="topic"
          value={form.topic}
          onChange={onChange}
          required
        />
        <button className="px-5 py-3 rounded-2xl bg-indigo text-navy font-semibold">Send</button>
        <div className="text-sm text-white/70">{status}</div>
      </form>

      <div className="mt-12 text-white/60 text-sm">
        Prefer to book directly? Add a Calendly link here later.
      </div>
    </section>
  );
}
