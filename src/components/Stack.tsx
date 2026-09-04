/* Stack por papel, sem divisórias: o que separa os blocos é o respiro.
   Peso visual está no título da categoria, à esquerda; as tecnologias têm
   todas o mesmo tamanho. Ícones locais em /public/icons — rodar
   `node scripts/fetch-icons.mjs` uma vez. */

import { stack } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { useReveal } from '../hooks/useReveal';
import './Stack.css';

export default function Stack() {
  const { lang } = useLanguage();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="stack" className="pa-section" aria-labelledby="pa-stack">
      <div className="pa-head">
        <h2 id="pa-stack">{lang === 'en' ? 'Stack by role' : 'Stack por papel'}</h2>
        <span className="pa-mono">{lang === 'en' ? 'grouped by what it does' : 'agrupado pelo que faz'}</span>
      </div>

      <div ref={ref} className="pa-reveal pa-stack-rows">
        {stack.map((group) => (
          <div key={group.label.pt} className="pa-grid pa-stack-row">
            <h3 className="pa-stack-category">{group.label[lang]}</h3>
            <ul className="pa-stack-items">
              {group.items.map((item) => (
                <li key={item.name} className="pa-stack-item">
                  {item.icon ? (
                    <img
                      src={`/icons/${item.icon}.svg`}
                      alt=""
                      width={28}
                      height={28}
                      loading="lazy"
                      data-invert={'invert' in item && item.invert ? '' : undefined}
                      className="pa-stack-icon"
                    />
                  ) : null}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
