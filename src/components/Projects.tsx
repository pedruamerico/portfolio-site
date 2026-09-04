/* Projetos — todo screenshot entra na mesma moldura de aplicativo; o que varia
   por projeto é a divisão das colunas, via [data-variant]. Entre eles, uma
   régua que cresce da esquerda com o número e o nome do próximo. */

import { projects } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { useReveal } from '../hooks/useReveal';
import './Projects.css';

type Project = (typeof projects)[number];

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="pa-projects-meta">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
      <path d="M5 11L11 5M11 5H6M11 5v5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square" />
    </svg>
  );
}

function Bridge({ index, title }: { index: string; title: string }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="pa-reveal pa-projects-bridge" aria-hidden="true">
      <span data-marker className="pa-projects-bridge-rule" />
      <span className="pa-mono">{index}</span>
      <span className="pa-projects-bridge-title">{title}</span>
    </div>
  );
}

function ProjectLink({ link, lang }: { link: Project['links'][number]; lang: 'pt' | 'en' }) {
  const label = typeof link.label === 'string' ? link.label : link.label[lang];
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="pa-projects-link"
      data-primary={('primary' in link && link.primary) || undefined}
    >
      {label}
      <Arrow />
    </a>
  );
}

function ProjectItem({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const ref = useReveal<HTMLElement>();
  const t = <T extends { pt: string; en: string }>(v: T) => v[lang];
  // no Log Pose a decisão técnica é o destaque; sai da lista de metadados
  const featuredDecision = project.id === 'log-pose';

  const labels = {
    role: lang === 'en' ? 'Role' : 'Papel',
    decision: lang === 'en' ? 'Key decision' : 'Principal decisão',
    outcome: lang === 'en' ? 'Outcome' : 'Resultado',
  };

  return (
    <article ref={ref} className="pa-reveal pa-grid pa-projects-item" data-variant={project.id}>
      <div className="pa-projects-text">
        <div className="pa-projects-kicker">{`${project.index} — ${t(project.kicker)}`}</div>
        <h3 className="pa-projects-title">{project.title}</h3>
        <p className="pa-projects-context">{t(project.context)}</p>

        {featuredDecision && (
          <div className="pa-projects-decision">
            <div className="pa-projects-decision-label">{labels.decision}</div>
            <p>{t(project.decision)}</p>
          </div>
        )}

        <dl className="pa-projects-meta-list">
          <Meta label={labels.role} value={t(project.role)} />
          {!featuredDecision && <Meta label={labels.decision} value={t(project.decision)} />}
          <Meta label={labels.outcome} value={t(project.outcome)} />
        </dl>

        {project.links.length === 1 && (
          <ProjectLink link={project.links[0]} lang={lang} />
        )}
      </div>

      <div className="pa-projects-visual">
        <figure className="pa-projects-figure">
          <div aria-hidden="true" className="pa-projects-controls"><span /><span /><span /></div>
          <div className="pa-projects-shot-wrap">
            <img
              data-shot
              src={project.image}
              alt={t(project.imageAlt)}
              width={1600}
              height={760}
              loading="lazy"
              className="pa-projects-shot"
            />
          </div>
          <figcaption className="pa-projects-tags">
            {project.stack.map((tech) => (
              <span key={tech} className="pa-projects-tag">{tech}</span>
            ))}
          </figcaption>
        </figure>

        {project.links.length > 1 && (
          <div className="pa-projects-links">
            {project.links.map((link) => (
              <ProjectLink key={link.url} link={link} lang={lang} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projetos" className="pa-section" aria-labelledby="pa-projetos">
      <div className="pa-head">
        <h2 id="pa-projetos">{lang === 'en' ? 'Selected projects' : 'Projetos selecionados'}</h2>
        <span className="pa-mono">{`0${projects.length}`}</span>
      </div>

      {projects.map((project, i) => (
        <div key={project.id}>
          {i > 0 && <Bridge index={project.index} title={project.title} />}
          <ProjectItem project={project} />
        </div>
      ))}
    </section>
  );
}
