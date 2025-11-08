import data from "../content/projects.json";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
      <p className="text-white/70 mt-2">Automation, RAG, dashboards, and more.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((p) => <ProjectCard key={p.id} item={p} />)}
      </div>
    </section>
  );
}
