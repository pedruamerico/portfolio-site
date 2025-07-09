import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AboutSection: React.FC = () => {
  const { ref, revealed } = useScrollReveal();
  return (
    <section id="sobre" ref={ref} className={`sobre fade-in${revealed ? ' revealed' : ''}`}> 
      <h2 className="sobre-titulo">Sobre Mim</h2>
      <div className="sobre-caixa">
        <p className="sobre-paragrafo">
          Minhas habilidades técnicas abrangem o desenvolvimento Fullstack, com expertise em linguagens como JavaScript, Python e Java. Domino frameworks modernos como React, TypeScript e Tailwind CSS para construir interfaces dinâmicas e responsivas. Além disso, possuo experiência sólida em infraestrutura e operações com Docker e Kubernetes, e em sistemas de banco de dados, incluindo PostgreSQL, MySQL e MongoDB, garantindo a construção de soluções robustas e eficientes.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;