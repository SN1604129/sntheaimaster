import data from "../content/stories.json";
import StoryCard from "../components/StoryCard";

export default function Stories() {
  return (
    <section className="container py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Data Stories</h1>
      <p className="text-white/70 mt-2">Narratives powered by dashboards and vlogs.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((s) => (
          <StoryCard key={s.slug} story={s} />
        ))}
      </div>
    </section>
  );
}
