import { useParams, Link } from "react-router-dom";
import { stories } from "../data/stories";

export default function StoryDetail() {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <section className="container py-16">
        <h1 className="text-3xl font-semibold">Story not found</h1>
        <Link to="/stories" className="mt-3 inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/10">Back to stories</Link>
      </section>
    );
  }

  return (
    <section className="container py-16">
      <Link to="/stories" className="text-white/60 hover:text-white/90">← Back</Link>
      <h1 className="text-3xl md:text-4xl font-semibold mt-3">{story.title}</h1>
      <p className="text-white/70 mt-2">{story.hook}</p>

      <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
        <iframe
          title={story.title}
          src={story.tableauUrl}
          className="w-full h-[60vh]"
          allow="fullscreen"
        />
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 p-5 bg-white/5">
        <h2 className="text-xl font-semibold">Key Takeaway</h2>
        <p className="text-white/80 mt-2">{story.takeaway}</p>
        <div className="text-xs text-white/50 mt-3">Source: {story.source}</div>
      </div>
    </section>
  );
}
