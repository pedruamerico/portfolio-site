import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ServiceCard from './ServiceCard';
import { ServiceData, ServicesSectionProps } from '../types';

const services: ServiceData[] = [
  {
    id: 1,
    iconClass: "fas fa-laptop-code",
    title: "Desenvolvimento Web Fullstack",
    description: "Criação de aplicações web completas e dinâmicas, abrangendo desde interfaces interativas (Single-Page Applications com React e TypeScript) e otimização de frontend até o desenvolvimento de sistemas robustos de backend (Python, JavaScript) e integração com bancos de dados (PostgreSQL)."
  },
  {
    id: 2,
    iconClass: "fas fa-cogs",
    title: "DevOps e Automação de Infraestrutura",
    description: "Especializado na implementação de pipelines CI/CD e automação de deploy, conteinerização de aplicações com Docker e orquestração de ambientes com Kubernetes (OpenShift). Garanto a entrega contínua, escalabilidade e resiliência de sistemas."
  },
  {
    id: 3,
    iconClass: "fas fa-robot",
    title: "Automação e Ferramentas Personalizadas",
    description: "Desenvolvimento de scripts e bots especializados em Python para automação de tarefas repetitivas (como manipulação de planilhas Excel, interação com APIs e criação de bots para plataformas como Discord), otimizando processos e aprimorando a eficiência."
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ delay }) => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section 
      ref={ref} 
      id="servicos"
      className={`servicos fade-in${revealed ? ' revealed' : ''}`}
      style={{ transitionDelay: delay || '0s' }}
    >
      <h2 className="servicos-titulo">Serviços Ofertados</h2>
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            iconClass={service.iconClass}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;