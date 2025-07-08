import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface TechIcon {
  src: string;
  title: string;
}

interface ProjectCardProps {
  imageSrc: string;
  posterSrc: string;
  imageAlt: string;   
  title: string;
  description: string;
  techIcons: TechIcon[]; 
  liveLink?: string;
  githubLink: string;
}

function ProjectCard({ 
  imageSrc, 
  posterSrc, 
  imageAlt, 
  title, 
  description, 
  techIcons, 
  liveLink, 
  githubLink 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false); 
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(error => console.error("Erro ao tentar reproduzir vídeo:", error));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; 
      }
    }
  }, [isHovered]);

  return (
    <div 
      ref={ref}
      className={`projetos-card ${inView ? 'fade-in-up' : 'hidden-below'}`} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="projetos-imagem-container">
        <img 
          src={posterSrc}
          alt={imageAlt} 
          className="projetos-imagem" 
          style={{ display: isHovered ? 'none' : 'block' }} 
        />
        
        {imageSrc.endsWith('.mp4') && (
          <video
            ref={videoRef}
            src={imageSrc}
            loop
            muted
            playsInline
            preload="auto"
            className="projetos-imagem" 
            style={{ display: isHovered ? 'block' : 'none' }} 
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}
      </div>

      <div className="caixa-textos-projeto">
        <h3 className="titulo-projeto">{title}</h3>
        <p className="paragrafo-projetos">{description}</p>

        <div className="tech-icons">
          {techIcons.map((icon, index) => (
            <img 
              key={index} 
              src={icon.src} 
              alt={`Logo da tecnologia ${icon.title}`} 
              title={icon.title} 
              className="framework-logo-card" 
            />
          ))}
        </div>

        <div className="links-projeto">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${title} ao Vivo`}>
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`Ver Código de ${title} no GitHub`}>
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;