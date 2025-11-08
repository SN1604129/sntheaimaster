import { useParams, Link } from "react-router-dom";
import data from "../content/stories.json";

export default function StoryDetail() {
  const { slug } = useParams();
  const story = data.find((s) => s.slug === slug);

  if (!story) {
    return (
      <section className="container py-16">
        <h1 className="text-3xl font-semibold">Story not found</h1>
        <Link
          to="/stories"
          className="mt-3 inline-block px-4 py-2 rounded-2xl bg-white/10 border border-white/10"
        >
          ← Back to stories
        </Link>
      </section>
    );
  }

  return (
    <section className="container py-16 space-y-6">
      <Link to="/stories" className="text-white/60 hover:text-white/90">← Back</Link>

      <h1 className="text-3xl md:text-4xl font-semibold">{story.title}</h1>
      <p className="text-white/70">{story.hook}</p>

      {/* Optional vlog video */}
      {story.videoUrl && (
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            className="w-full h-[56vh]"
            src={story.videoUrl}
            title="Vlog"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      {/* Optional Tableau embed */}
      {story.tableauUrl && (
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            title="Tableau"
            src={story.tableauUrl}
            className="w-full h-[60vh]"
            allow="fullscreen"
          />
        </div>
      )}

      {/* Optional Power BI embed */}
      {story.powerbiUrl && (
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            title="Power BI"
            src={story.powerbiUrl}
            className="w-full h-[60vh]"
            allowFullScreen
          />
        </div>
      )}

      <div className="rounded-2xl border border-white/10 p-5 bg-white/5">
        <h2 className="text-xl font-semibold">Key Takeaway</h2>
        <p className="text-white/80 mt-2">{story.takeaway}</p>
        <div className="text-xs text-white/50 mt-3">Source: {story.source}</div>
      </div>
    </section>
  );
}
