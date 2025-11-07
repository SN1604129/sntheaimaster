export default function Kaggle() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Kaggle Showcase</h1>
      <p className="text-white/70 mt-2">Selected notebooks & datasets with storytelling focus.</p>

      <div className="mt-6 rounded-2xl border border-white/10 p-6 bg-white/5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-white/80">Profile</div>
            <a
              className="text-indigo font-semibold"
              href="https://www.kaggle.com/"
              target="_blank"
            >
              kaggle.com/&lt;your-handle&gt;
            </a>
          </div>
          <div className="text-white/60 text-sm">
            Why my notebooks stand out: Reproducible • Clear narratives • Clean visuals • Sensible baselines
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {/* Add notebook and dataset cards here later */}
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <div className="text-sm text-white/60">Notebook</div>
          <div className="mt-1 font-semibold">Titanic: from EDA to model</div>
          <a className="mt-3 inline-block text-indigo" href="#" target="_blank">Open on Kaggle →</a>
        </div>
        <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
          <div className="text-sm text-white/60">Dataset</div>
          <div className="mt-1 font-semibold">AU Tech Salaries 2024 (curated)</div>
          <a className="mt-3 inline-block text-indigo" href="#" target="_blank">Open on Kaggle →</a>
        </div>
      </div>
    </section>
  );
}
