/* Produtos — o que ofereço, cada item com seu ícone animado. Vem antes da
   seção Build/Deliver/Operate. A grade não usa reveal: 10 itens presos a um
   único container é ponto único de falha. */

import { href, products } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { Api, Bots, Crud, Desktop, Ecom, Infra, Landing, Manut, Saas, Site } from './Icons';
import './Products.css';

const ICONS = {
  landing: Landing,
  site: Site,
  crud: Crud,
  saas: Saas,
  ecom: Ecom,
  desktop: Desktop,
  bots: Bots,
  api: Api,
  infra: Infra,
  manut: Manut,
} as const;

export default function Products() {
  const { lang } = useLanguage();
  const t = products[lang];

  return (
    <section id="produtos" className="pa-section" aria-labelledby="pa-produtos">
      <div className="pa-head pa-products-head">
        <h2 id="pa-produtos">{t.label}</h2>
        <span className="pa-mono">{t.note}</span>
      </div>

      <div className="pa-products-grid">
        {products.items.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <div key={item.icon} className="pa-products-cell">
              <div className="pa-products-cell-head">
                <Icon />
                <span className="pa-mono">{`${i + 1}`.padStart(2, '0')}</span>
              </div>
              <h3 className="pa-products-title">{item.title[lang]}</h3>
              <p className="pa-products-body">{item.body[lang]}</p>
            </div>
          );
        })}
      </div>

      <div className="pa-products-cta">
        <p>{t.cta}</p>
        <a href={href.whatsapp(lang)} target="_blank" rel="noopener noreferrer" className="pa-btn pa-btn--accent pa-btn--lg">
          <img src="/icons/whatsapp.svg" alt="" width={18} height={18} />
          <span>{t.ctaButton}</span>
        </a>
      </div>
    </section>
  );
}
