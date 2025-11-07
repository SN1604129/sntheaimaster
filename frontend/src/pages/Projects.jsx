import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Projects</h1>
      <p className="text-white/70 mt-2">Automation, RAG, dashboards, and more.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((p) => <ProjectCard key={p.id} item={p} />)}
      </div>

      <div className="mt-12 rounded-2xl border border-white/10 p-6 bg-white/5">
        <h2 className="text-xl font-semibold">Case Study Template (for each project)</h2>
        <ol className="list-decimal ml-5 mt-3 space-y-1 text-white/80">
          <li>Problem & business context</li>
          <li>Approach & system architecture</li>
          <li>Key features & demo link</li>
          <li>Stack & ops (data, infra, testing)</li>
          <li>Results, constraints, next steps</li>
        </ol>
      </div>
    </section>
  );
}
