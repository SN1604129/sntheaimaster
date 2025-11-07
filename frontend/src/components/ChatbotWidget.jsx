import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Send, X, Mail, User, MessageSquare } from "lucide-react";

/**
 * Save lead data to backend API or fallback to localStorage
 */
const saveLead = async (payload) => {
  const API = import.meta.env.VITE_API_URL; // e.g. https://your-codespace-id-8000.app.github.dev
  try {
    if (!API) throw new Error("Missing VITE_API_URL");

    const res = await fetch(`${API}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    return true; // success ✅
  } catch (e) {
    console.warn("Failed to save lead remotely, saving locally:", e.message);

    // Fallback: store locally
    const key = "sn_leads";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    existing.push({ ...payload, ts: new Date().toISOString(), offline: true });
    localStorage.setItem(key, JSON.stringify(existing));
    return false;
  }
};

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! 👋 What project do you want help with?" },
  ]);
  const [input, setInput] = useState("");
  const [lead, setLead] = useState({ name: "", email: "", topic: "" });
  const [stage, setStage] = useState("topic"); // topic → name → email → done
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const placeholder = useMemo(() => {
    if (stage === "topic") return "Describe your project (e.g., RAG chatbot for docs)…";
    if (stage === "name") return "Your name";
    if (stage === "email") return "Your email";
    return "Type a message…";
  }, [stage]);

  const submit = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setInput("");

    if (stage === "topic") {
      setLead((l) => ({ ...l, topic: trimmed }));
      setMessages((m) => [...m, { role: "bot", text: "Great! What’s your name?" }]);
      setStage("name");
    } else if (stage === "name") {
      setLead((l) => ({ ...l, name: trimmed }));
      setMessages((m) => [...m, { role: "bot", text: "Nice to meet you. What’s your email?" }]);
      setStage("email");
    } else if (stage === "email") {
      const ok = /\S+@\S+\.\S+/.test(trimmed);
      if (!ok) {
        setMessages((m) => [...m, { role: "bot", text: "That email looks off — try again?" }]);
        return;
      }
      const payload = { ...lead, email: trimmed };
      const saved = await saveLead(payload);
      if (saved) {
        setMessages((m) => [
          ...m,
          { role: "bot", text: "Thanks! I’ve saved your details ✅ I’ll follow up shortly." },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "bot", text: "Saved locally (offline). I’ll sync later when online." },
        ]);
      }
      setStage("done");
    } else {
      setMessages((m) => [...m, { role: "bot", text: "Got it! I’ll include this note in your file." }]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 px-4 py-3 rounded-2xl bg-indigo text-navy font-semibold shadow-soft flex items-center gap-2"
        >
          <Bot className="w-5 h-5" />
          Chat
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 w-[360px] max-w-[90vw] rounded-2xl border border-white/10 bg-navy/95 backdrop-blur shadow-soft">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-indigo" />
              <span className="font-semibold">Assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="p-1 rounded-lg hover:bg-white/10">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={listRef} className="h-64 overflow-auto px-4 py-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`px-3 py-2 rounded-xl text-sm ${
                    m.role === "user" ? "bg-white/10" : "bg-white/5"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <div className="px-3 pb-3">
            <div className="flex items-center gap-2">
              <div className="px-2 text-white/60">
                {stage === "topic" && <MessageSquare className="w-4 h-4" />}
                {stage === "name" && <User className="w-4 h-4" />}
                {stage === "email" && <Mail className="w-4 h-4" />}
              </div>
              <input
                className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 outline-none"
                placeholder={placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submit()}
              />
              <button
                onClick={submit}
                className="px-3 py-2 rounded-xl bg-indigo text-navy font-semibold"
                title="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-[11px] text-white/40 mt-2">
              We’ll only use your email to contact you about this request.
            </div>
          </div>
        </div>
      )}
    </>
  );
}
