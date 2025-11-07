export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-8 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© {new Date().getFullYear()} SNTheAIMaster</div>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://www.kaggle.com" target="_blank">Kaggle</a>
          <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
