/* Build / Deliver / Operate em três colunas, sem caixa: a régua do topo é o
   que marca a camada, e acende em --pa-acc na camada ativa. */

import { layers } from '../data/content';
import { useLanguage } from '../hooks/useLanguage';
import { useLayerCycle, useReveal } from '../hooks/useReveal';
import { Conveyor, Gears, Rocket } from './Icons';
import './Layers.css';

const LAYER_ICONS = [Rocket, Conveyor, Gears];

export default function Layers() {
  const { lang } = useLanguage();
  const { index, pick } = useLayerCycle(layers.length);
  const lead = useReveal<HTMLParagraphElement>();
  const grid = useReveal<HTMLDivElement>();

  return (
    <section id="atuacao" className="pa-section" aria-labelledby="pa-bdo">
      <div className="pa-head">
        <h2 id="pa-bdo">Build · Deliver · Operate</h2>
        <span className="pa-mono">{lang === 'en' ? 'one continuous path' : 'um caminho contínuo'}</span>
      </div>

      <p ref={lead} className="pa-reveal pa-layers-lead">
        {lang === 'en'
          ? 'The same person writes the code, builds the pipeline and answers when production breaks.'
          : 'A mesma pessoa escreve o código, constrói o pipeline e responde quando a produção quebra.'}
      </p>

      {/* três camadas: papel técnico + a frase do que a camada entrega */}
      <div ref={grid} className="pa-reveal pa-layers-matrix">
        {layers.map((layer, i) => {
          const Icon = LAYER_ICONS[i];
          return (
            <div
              key={layer.id}
              className="pa-layers-cell"
              data-on={i === index || undefined}
              onMouseEnter={() => pick(i)}
              onFocus={() => pick(i)}
              tabIndex={0}
            >
              <div className="pa-mono pa-layers-meta">
                <span>{`0${i + 1}`}</span>
                <span>{lang === 'en' ? 'layer' : 'camada'}</span>
              </div>
              <Icon />
              <h3 className="pa-layers-word">{layer.word}</h3>
              <p className="pa-layers-role">{layer[lang].role}</p>
              <p className="pa-layers-out">{layer[lang].out}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
