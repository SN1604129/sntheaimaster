import { useState } from "react";

export default function Contact() {
  const API = import.meta.env.VITE_API_URL;
  const [form, setForm] = useState({
    name: "", email: "", topic: "", budget: "", timeline: "", source: ""
  });
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      if (!API) throw new Error("Missing VITE_API_URL");
      // send only the 3 required fields for /leads
      const payload = { name: form.name, email: form.email, topic: form.topic };
      const res = await fetch(`${API}/leads`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("Thanks! I’ll get back to you shortly."); setForm({
        name: "", email: "", topic: "", budget: "", timeline: "", source: ""
      });
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
      <p className="text-white/70 mt-2">Tell me about your project. I’ll reply within 24–48h.</p>

      <form onSubmit={submit} className="mt-8 max-w-xl space-y-4">
        <input className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
               placeholder="Your name" name="name" value={form.name} onChange={onChange} required />
        <input className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none"
               placeholder="Your email" type="email" name="email" value={form.email} onChange={onChange} required />
        <textarea className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none min-h-[140px]"
                  placeholder="What do you want to build or analyze?" name="topic" value={form.topic}
                  onChange={onChange} required />
        <div className="grid md:grid-cols-2 gap-3">
          <select name="budget" value={form.budget} onChange={onChange}
                  className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
            <option value="">Budget (optional)</option>
            <option value="<2k">&lt; $2k</option>
            <option value="2-5k">$2–5k</option>
            <option value="5-10k">$5–10k</option>
            <option value="10k+">$10k+</option>
          </select>
          <select name="timeline" value={form.timeline} onChange={onChange}
                  className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
            <option value="">Timeline</option>
            <option value="asap">ASAP</option>
            <option value="2-4w">2–4 weeks</option>
            <option value="1-3m">1–3 months</option>
          </select>
        </div>
        <select name="source" value={form.source} onChange={onChange}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
          <option value="">How did you find me?</option>
          <option value="linkedin">LinkedIn</option>
          <option value="kaggle">Kaggle</option>
          <option value="youtube">YouTube</option>
          <option value="search">Google</option>
          <option value="referral">Referral</option>
        </select>

        <button className="px-5 py-3 rounded-2xl bg-indigo text-navy font-semibold">Send</button>
        <div className="text-sm text-white/70">{status}</div>
      </form>

      {/* Calendly placeholder */}
      <div className="mt-12">
        <a href="https://calendly.com/your-handle/intro" target="_blank"
           className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 border border-white/10">
          Book a 20-min intro call →
        </a>
      </div>
    </section>
  );
}
