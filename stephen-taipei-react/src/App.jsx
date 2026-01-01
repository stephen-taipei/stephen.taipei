import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import AwesomeApp100 from './components/AwesomeApp100';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load pages for code splitting
const ToolsDemo = lazy(() => import('./pages/ToolsDemo'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const ToolViewer = lazy(() => import('./pages/ToolViewer'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-gray-500 text-sm">載入中...</p>
    </div>
  </div>
);

// Catch-all component for direct tool file access
const ToolFileRedirect = () => {
  // This handles direct access to tool HTML files
  // and redirects to the proper React Router path
  const path = window.location.pathname;

  // Extract category and tool slug from the file path
  // e.g., /open-source/awesome-tailwind-ui-templates-1000/templates/02-hero-sections/hero-024.html
  // should redirect to /open-source/tailwind-templates/hero-024

  const categoryMap = {
    'awesome-ai-local-tools-1000': 'ai-local-tools',
    'awesome-web-toys-1000': 'web-toys',
    'awesome-tailwind-ui-templates-1000': 'tailwind-templates',
    'awesome-chrome-extensions-1000': 'chrome-extensions',
    'awesome-free-games-1000': 'free-games',
    'awesome-free-mini-tools-1000': 'mini-tools',
    'awesome-wasm-tools-1000': 'wasm-tools',
    'awesome-web-workers-examples-1000': 'web-workers',
  };

  const pathMatch = path.match(/\/open-source\/([^\/]+)\/.*\/([^\/]+)\.html$/);
  if (pathMatch) {
    const submodule = pathMatch[1];
    const filename = pathMatch[2];
    const categoryId = categoryMap[submodule];

    if (categoryId) {
      // Redirect to the proper React Router path
      return <Navigate to={`/open-source/${categoryId}/${filename}`} replace />;
    }
  }

  // If we can't parse it, go back to tools home
  return <Navigate to="/open-source" replace />;
};

// Home Page Component
const HomePage = () => (
  <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary/20 selection:text-primary-dark overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Tools />
      <AwesomeApp100 />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Portfolio Site */}
              <Route path="/" element={<HomePage />} />

              {/* Tools Demo Platform - Lazy loaded */}
              <Route path="/open-source" element={<ToolsDemo />} />
              <Route path="/open-source/:categoryId" element={<CategoryPage />} />
              <Route path="/open-source/:categoryId/:toolSlug" element={<ToolViewer />} />

              {/* Catch-all for direct tool file access */}
              <Route path="/open-source/*" element={<ToolFileRedirect />} />

              {/* 404 Not Found - Lazy loaded */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
