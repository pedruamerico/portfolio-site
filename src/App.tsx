import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { Analytics } from '@vercel/analytics/react';
const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Analytics />
    </div>
  );
};

export default App;