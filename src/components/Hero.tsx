/* Hero — nome monumental nas colunas 1–8, foto nas colunas 8–13 na MESMA grid-row,
   passando por trás da segunda linha do nome. A coluna direita traz resposta e
   mais pedidos; nada rotaciona. */

import { hero, href } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import './Hero.css';

export default function Hero() {
  const { lang } = useLanguage();
  const t = hero[lang];

  return (
    <section className="pa-hero" aria-labelledby="pa-hero-name">
      <div className="pa-hero-kicker">
        <span>{t.kicker}</span>
        <span>{t.status}</span>
      </div>

      <div className="pa-grid pa-hero-name-row">
        <h1 id="pa-hero-name" className="pa-hero-name">
          <span className="pa-mask"><span>Pedro</span></span>
          <span className="pa-mask"><span style={{ animationDelay: '.12s' }}>Américo</span></span>
        </h1>

        <div className="pa-hero-photo-cell">
          <div className="pa-hero-photo">
            <img src="/photo.webp" alt={t.photoAlt} width={900} height={900} fetchPriority="high" />
          </div>

          {/* detalhe autoral: régua com marcador */}
          <svg viewBox="0 0 200 40" aria-hidden="true" className="pa-hero-rule">
            <path d="M0 20 H60 M74 20 H200" stroke="currentColor" strokeWidth="2" fill="none" />
            <rect x="60" y="14" width="12" height="12" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="pa-grid pa-hero-bottom">
        <div className="pa-hero-pitch">
          <p className="pa-hero-statement">{t.statement}</p>
          <p className="pa-hero-body">{t.body}</p>
          <div className="pa-hero-actions">
            <a href="#projetos" className="pa-btn pa-btn--accent">{t.ctaProjects}</a>
            <a href={href.email} className="pa-btn">{t.ctaContact}</a>
          </div>
        </div>

        <div className="pa-hero-focus">
          <div className="pa-mono">{t.responseLabel}</div>
          <p className="pa-hero-response">{t.responseValue}</p>

          <div className="pa-mono pa-hero-top-label">{t.topLabel}</div>
          <ul className="pa-hero-top-items">
            {t.topItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
