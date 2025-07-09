import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import pedroImage from '../assets/images/pedro.jpg';
import css3Logo from '../assets/frameworks/css-3.png';
import dockerLogo from '../assets/frameworks/docker.png';
import gitLogo from '../assets/frameworks/git.png';
import htmlLogo from '../assets/frameworks/html.png';
import javaLogo from '../assets/frameworks/java.png';
import jsLogo from '../assets/frameworks/js.png';
import kubernetesLogo from '../assets/frameworks/kubernetes.png';
import postgresqlLogo from '../assets/frameworks/postgresql.png';
import pythonLogo from '../assets/frameworks/python.png';
import reactLogo from '../assets/frameworks/react.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroSectionProps {
  typedStrings?: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ typedStrings }) => {
  const typedElement = useRef<HTMLSpanElement>(null);
  const { ref, revealed } = useScrollReveal();

  useEffect(() => {
    const options = {
      strings: typedStrings || ["Desenvolvedor Fullstack", "Analista de DevOps", "Automação de Processos com Python"],
      typeSpeed: 140,
      backSpeed: 80,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
      smartBackspace: true
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, [typedStrings]);

  return (
    <main id="inicio" ref={ref} className={`cabecalho fade-in${revealed ? ' revealed' : ''}`}> 
      <a href="https://github.com/pedruamerico" target="_blank" className="foto-perfil-wrapper">
        <img src={pedroImage} alt="Foto principal" className="foto-perfil" />
      </a>
      <h1>Pedro Américo</h1>
      <p className="cabecalho-subtitulo">
        <span ref={typedElement}></span>
      </p>
      <div className="icones-frameworks"> 
        <div className="icones-frameworks-row">
          <img src={pythonLogo} alt="Python Logo" title="Python" className="framework-logo" />
          <img src={jsLogo} alt="JavaScript Logo" title="JavaScript" className="framework-logo" />
          <img src={htmlLogo} alt="HTML Logo" title="HTML" className="framework-logo" />
          <img src={css3Logo} alt="CSS3 Logo" title="CSS" className="framework-logo" />
          <img src={reactLogo} alt="React Logo" title="React" className="framework-logo" />
        </div>

        <div className="icones-frameworks-row">
          <img src={javaLogo} alt="Java Logo" title="Java" className="framework-logo" />
          <img src={dockerLogo} alt="Docker Logo" title="Docker" className="framework-logo" />
          <img src={gitLogo} alt="Git Logo" title="Git" className="framework-logo" />
          <img src={kubernetesLogo} alt="Kubernetes Logo" title="Kubernetes" className="framework-logo" />
          <img src={postgresqlLogo} alt="PostgreSQL Logo" title="PostgreSQL" className="framework-logo" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;