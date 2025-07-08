import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="sobre">
      <h2 className="sobre-titulo">Sobre Mim</h2>
      <div className="sobre-caixa">
        <p className="sobre-paragrafo">
          Sou Pedro Américo, desenvolvedor com foco em DevOps e desenvolvimento web. Tenho experiência com
          automação de deploys, CI/CD, infraestrutura em OpenShift, e desenvolvimento com Python, JavaScript e
          React. Busco sempre criar soluções robustas, eficientes e seguras. Atualmente curso Sistemas de
          Informação e atuo na Secretaria de Estado de Fazenda do RJ.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;