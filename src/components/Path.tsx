/* Trajetória — não é timeline de currículo: uma frase-âncora à esquerda e três
   passos à direita, o último em tinta cheia. */

import { path } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { useReveal } from '../hooks/useReveal';
import './Path.css';

export default function Path() {
  const { lang } = useLanguage();
  const t = path[lang];
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="trajetoria" className="pa-section" aria-labelledby="pa-path">
      <div className="pa-head">
        <h2 id="pa-path">{t.label}</h2>
        <span className="pa-mono pa-path-arc">{t.arc}</span>
      </div>

      <div ref={ref} className="pa-reveal pa-grid pa-path-body">
        <p className="pa-path-lead">{t.lead}</p>

        <ol className="pa-path-steps">
          {t.steps.map((step, i) => (
            <li key={i} data-last={i === t.steps.length - 1 || undefined}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
