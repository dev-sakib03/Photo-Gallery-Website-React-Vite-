import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoGallery from "./components/PhotoGallery";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors duration-300 font-sans">
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-140px)]">
        <PhotoGallery searchTerm={searchTerm} />
      </main>
      <Footer />
    </div>
  );
}