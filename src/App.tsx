import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './components/LanguageProvider';
import Loader from './components/Loader';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Layers from './components/Layers';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Path from './components/Path';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Produtos vem antes de Build/Deliver/Operate de propósito: quem chega quer
   saber o que dá pra encomendar antes de entender como o trabalho é organizado. */
export default function App() {
  return (
    <LanguageProvider>
      <Loader />
      <Header />
      <main id="top">
        <Hero />
        <Products />
        <Layers />
        <Projects />
        <Stack />
        <Path />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </LanguageProvider>
  );
}
