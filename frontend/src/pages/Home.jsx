import { motion } from "framer-motion";
import { ArrowRight, LineChart, Bot } from "lucide-react";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(91,108,255,0.12),transparent_60%)]" />
      <div className="container py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-indigo text-sm tracking-widest uppercase">
            AI Automation Engineer + Data Storyteller
          </div>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
            Build, automate, and tell stories with data.
          </h1>
          <p className="mt-5 text-white/75 text-lg">
            Live demos, RAG apps, and dashboards — engineered for impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo text-navy font-semibold shadow-soft">
              See Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/stories" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 border border-white/10">
              Read Data Stories <LineChart className="w-4 h-4" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 border border-white/10">
              Try AI Assistant <Bot className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
