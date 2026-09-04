/* Tela de carregamento — oito frases nerds, cada uma entrando por scramble
   (letras embaralham até formar o texto) enquanto a barra de progresso sobe.
   O texto é escrito direto no DOM via ref: animação por frame não deve
   disparar re-render do React. */

import { useEffect, useRef, useState } from 'react';
import './Loader.css';

const PHRASES = [
  'compilando café...',
  'resolvendo dependências emocionais...',
  'git blame no próprio código...',
  "removendo console.log('aqui')...",
  'esperando o build do Jenkins...',
  'convertendo cafeína em commits...',
  'kubectl get pods --watch-my-life...',
  '3 sprints atrasado, seguindo o plano...',
];

const CHARS = '!<>-_\\/[]{}=+*^?#·01';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);
  const phraseRef = useRef<HTMLSpanElement>(null);
  const removed = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }

    let raf = 0;
    const scramble = (el: HTMLElement, text: string) => {
      const from = el.textContent || '';
      const len = Math.max(from.length, text.length);
      const queue = Array.from({ length: len }, (_, i) => {
        const start = Math.floor(Math.random() * 14);
        return {
          f: from[i] || '',
          t: text[i] || '',
          start,
          end: start + 6 + Math.floor(Math.random() * 16),
          c: '',
        };
      });
      let frame = 0;
      const run = () => {
        let out = '';
        let complete = 0;
        for (const q of queue) {
          if (frame >= q.end) { complete++; out += q.t; }
          else if (frame >= q.start) {
            if (!q.c || Math.random() < 0.3) q.c = CHARS[Math.floor(Math.random() * CHARS.length)];
            out += q.c;
          } else out += q.f;
        }
        el.textContent = out;
        if (complete < queue.length) { frame++; raf = requestAnimationFrame(run); }
      };
      cancelAnimationFrame(raf);
      run();
    };

    let pi = 0;
    let p = 0;
    if (phraseRef.current) scramble(phraseRef.current, PHRASES[0]);

    const swap = window.setInterval(() => {
      pi = (pi + 1) % PHRASES.length;
      if (phraseRef.current) scramble(phraseRef.current, PHRASES[pi]);
    }, 900);

    const tick = window.setInterval(() => {
      p = Math.min(100, p + Math.round(4 + Math.random() * 14));
      setPct(p);
      if (p >= 100 && !removed.current) {
        removed.current = true;
        window.clearInterval(tick);
        window.clearInterval(swap);
        setDone(true);
        window.setTimeout(() => setVisible(false), 550);
      }
    }, 140);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(swap);
      window.clearInterval(tick);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="pa-loader" data-done={done || undefined} aria-hidden="true">
      <div className="pa-loader-inner">
        <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" className="pa-loader-cup">
          <path d="M22 14c-3 3.5 3 6.5 0 10" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" className="pa-loader-steam" />
          <path d="M32 11c-3 4 3 7.5 0 11.5" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" className="pa-loader-steam" style={{ animationDelay: '-.7s' }} />
          <path d="M42 14c-3 3.5 3 6.5 0 10" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" className="pa-loader-steam" style={{ animationDelay: '-1.4s' }} />
          <path d="M13 30h34v10a13 13 0 01-13 13h-8a13 13 0 01-13-13z" stroke="currentColor" strokeWidth={3} fill="none" />
          <path d="M47 33h4a7 7 0 010 14h-4" stroke="currentColor" strokeWidth={3} fill="none" />
          <path d="M9 58h44" stroke="currentColor" strokeWidth={3} fill="none" strokeLinecap="round" />
        </svg>
        <span ref={phraseRef} className="pa-loader-phrase" />
        <div className="pa-loader-track">
          <span className="pa-loader-fill" style={{ width: `${pct}%` }} />
        </div>
        <span className="pa-loader-pct">{pct}%</span>
      </div>
    </div>
  );
}
