export default function ProjectCard({ item }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      <img src={item.cover} alt={item.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-white/70 mt-1">{item.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-xl bg-white/10 border border-white/10">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a href={item.demoUrl} className="px-3 py-2 rounded-xl bg-indigo text-navy font-semibold">Demo</a>
          <a href={item.codeUrl} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10">Code</a>
          <a href={item.caseUrl} className="px-3 py-2 rounded-xl bg-white/10 border border-white/10">Case Study</a>
        </div>
      </div>
    </div>
  );
}
