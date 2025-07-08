import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="sobre">
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