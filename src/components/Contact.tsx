/* Contato — e-mail, GitHub, LinkedIn e Discord na MESMA hierarquia (nada gigante),
   cada um com logo. Fecha com o CTA de orçamento no WhatsApp. */

import { useState } from 'react';
import { contact, href } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import './Contact.css';

function Logo({ slug, invert }: { slug: string; invert?: boolean }) {
  return (
    <img
      src={`/icons/${slug}.svg`}
      alt=""
      width={22}
      height={22}
      loading="lazy"
      data-invert={invert ? '' : undefined}
      className="pa-contact-logo"
    />
  );
}

export default function Contact() {
  const { lang } = useLanguage();
  const t = contact[lang];
  const [copied, setCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(href.discord);
    } finally {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section id="contato" className="pa-section pa-contact" aria-labelledby="pa-contato">
      {/* sem régua sob o rótulo: a primeira linha da lista já abre com a dela */}
      <h2 id="pa-contato" className="pa-label">{t.label}</h2>

      <div className="pa-contact-list">
        <a href={href.email} className="pa-contact-row">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" className="pa-contact-logo">
            <rect x="2.5" y="5" width="19" height="14" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M2.5 6l9.5 7 9.5-7" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="pa-contact-key">{lang === 'en' ? 'Email' : 'E-mail'}</span>
          <span>pedruamerico@gmail.com</span>
        </a>

        <a href={href.github} target="_blank" rel="noopener noreferrer" className="pa-contact-row">
          <Logo slug="github" invert />
          <span className="pa-contact-key">GitHub</span>
          <span>pedruamerico</span>
        </a>

        <a href={href.linkedin} target="_blank" rel="noopener noreferrer" className="pa-contact-row">
          <Logo slug="linkedin" />
          <span className="pa-contact-key">LinkedIn</span>
          <span>pedruamerico</span>
        </a>

        <div className="pa-contact-row pa-contact-discord">
          <Logo slug="discord" />
          <span className="pa-contact-key">Discord</span>
          <span>{href.discord}</span>
          <button type="button" onClick={copyDiscord} className="pa-contact-copy">
            {copied ? t.copied : t.copy}
          </button>
        </div>
      </div>

      <div className="pa-contact-cta">
        <a href={href.whatsapp(lang)} target="_blank" rel="noopener noreferrer" className="pa-btn pa-btn--accent pa-btn--lg">
          <img src="/icons/whatsapp.svg" alt="" width={18} height={18} />
          <span>{t.quote}</span>
        </a>
      </div>
    </section>
  );
}
