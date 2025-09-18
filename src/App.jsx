// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import ArticlePage from "./pages/ArticlePage";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            <ScrollToTop />
            <Header />
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}