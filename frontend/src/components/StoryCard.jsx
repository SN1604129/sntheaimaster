import { Link } from "react-router-dom";

export default function StoryCard({ story }) {
  return (
    <Link to={`/stories/${story.slug}`} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 block">
      <img src={story.thumb} alt={story.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{story.title}</h3>
        <p className="text-white/70 mt-1">{story.hook}</p>
        <div className="text-xs text-white/50 mt-2">Source: {story.source}</div>
      </div>
    </Link>
  );
}
