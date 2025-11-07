import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<div className="container py-20">Projects coming soon…</div>} />
          <Route path="/stories"  element={<div className="container py-20">Data Stories coming soon…</div>} />
          <Route path="/kaggle"   element={<div className="container py-20">Kaggle hub coming soon…</div>} />
          <Route path="/about"    element={<div className="container py-20">About page coming soon…</div>} />
          <Route path="/contact"  element={<div className="container py-20">Contact page coming soon…</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
