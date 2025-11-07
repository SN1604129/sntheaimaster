export default function About() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">About Me</h1>
      <p className="text-white/70 mt-3 max-w-3xl">
        I’m an AI Automation Engineer & Data Storyteller. I build clean, reliable systems —
        from RAG apps to dashboards — and I explain outcomes in plain English.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h2 className="text-xl font-semibold">Skills & Tools</h2>
          <div className="mt-3 text-white/80">
            Python, FastAPI, LangChain, Vectors • React, Tailwind • Tableau/Power BI •
            ETL, Automation, Scheduling • Docker, CI/CD
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <h2 className="text-xl font-semibold">Values</h2>
          <div className="mt-3 text-white/80">
            Clarity • Reliability • Ethical AI • Documentation • Reproducibility
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 p-6 bg-white/5">
        <h2 className="text-xl font-semibold">Timeline</h2>
        <ul className="mt-3 space-y-2 text-white/80">
          <li>2025 — Building SNTheAIMaster.com (AI HQ).</li>
          <li>2024 — RAG projects + automation bots for clients.</li>
          <li>2023 — Deployed first production dashboards.</li>
        </ul>
      </div>
    </section>
  );
}
