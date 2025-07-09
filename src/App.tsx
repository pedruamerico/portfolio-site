import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Loader from './components/Loader';
import ThemeToggle from './components/ThemeToggle';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const loaderDuration = 3000;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), loaderDuration);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader duration={loaderDuration} />;

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Analytics />
    </div>
  );
};

export default App;