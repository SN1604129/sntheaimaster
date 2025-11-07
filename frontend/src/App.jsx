import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Stories from "./pages/Stories.jsx";
import StoryDetail from "./pages/StoryDetail.jsx";
import Kaggle from "./pages/Kaggle.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ChatbotWidget from "./components/ChatbotWidget.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:slug" element={<StoryDetail />} />
          <Route path="/kaggle" element={<Kaggle />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
