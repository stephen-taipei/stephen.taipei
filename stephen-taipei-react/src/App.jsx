import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Tools Demo Platform Pages
import ToolsDemo from './pages/ToolsDemo';
import CategoryPage from './pages/CategoryPage';
import ToolViewer from './pages/ToolViewer';

// Home Page Component
const HomePage = () => (
  <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary/20 selection:text-primary-dark">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Tools />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          {/* Main Portfolio Site */}
          <Route path="/" element={<HomePage />} />

          {/* Tools Demo Platform */}
          <Route path="/open-source" element={<ToolsDemo />} />
          <Route path="/open-source/:categoryId" element={<CategoryPage />} />
          <Route path="/open-source/:categoryId/:toolSlug" element={<ToolViewer />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
