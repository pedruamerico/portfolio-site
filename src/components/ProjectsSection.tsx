import React from 'react';
import ProjectCard from './ProjectCard';
import portfolioVideo from '../assets/videos/portfolio.mp4';
import projetozVideo from '../assets/videos/projetoz.mp4';
import portfolioPoster from '../assets/videos/portfolio.png';
import projetozPoster from '../assets/videos/projetoz.png';
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
import tsLogo from '../assets/frameworks/typescript.png'
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  posterSrc: string;
  techIcons: { src: string; title: string; }[];
  githubLink: string;
  liveLink?: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Meu Portfólio Pessoal',
    description: 'Este é o meu portfólio, construído com React e estilizado com CSS puro, demonstrando minhas habilidades em desenvolvimento frontend e design responsivo.',
    imageSrc: portfolioVideo,
    posterSrc: portfolioPoster,
    techIcons: [
      { src: reactLogo, title: 'React' },
      { src: tsLogo, title: 'Typescript' },
      { src: htmlLogo, title: 'HTML' },
      { src: css3Logo, title: 'CSS' },
    ],
    githubLink: 'https://github.com/pedruamerico/portfolio-site.git ',
    liveLink: 'https://pedruamerico.vercel.app',
  },
  {
    id: 2,
    title: 'Projeto Z RP',
    description: 'Um site desenvolvido em React + TS + Tailwind CSS para um servidor de GTA RP',
    imageSrc: projetozVideo,
    posterSrc: projetozPoster,
    techIcons: [
      { src: jsLogo, title: 'JavaScript' },
      { src: htmlLogo, title: 'HTML' },
      { src: css3Logo, title: 'CSS' },
    ],
    githubLink: 'https://github.com/seu-usuario/api-tarefas',
  },
];

const ProjectsSection: React.FC = () => {
  const { ref, revealed } = useScrollReveal();
  return (
    <section id="projetos" ref={ref} className={`projetos fade-in${revealed ? ' revealed' : ''}`}> 
      <h2 className="projetos-titulo">Meus Projetos</h2>
      <div className="projetos-caixa">
        {projects.map((project) => (
          <ProjectCard
            imageAlt={''} key={project.id}
            {...project}          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;