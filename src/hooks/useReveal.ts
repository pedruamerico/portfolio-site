import { useEffect, useRef, useState } from 'react';

/**
 * Revelação por scroll.
 *
 * Regra que importa: o estado padrão do elemento é VISÍVEL. A classe `pa-armed`
 * (que zera a opacidade) só entra depois que o observer registrou o nó, dentro de
 * um requestAnimationFrame. Assim print, export de PDF, aba em segundo plano e
 * JavaScript desligado nunca mostram a página vazia.
 *
 * Uso:
 *   const ref = useReveal<HTMLElement>();
 *   <article ref={ref} className="pa-reveal">…</article>
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let observer: IntersectionObserver | null = null;

    const frame = requestAnimationFrame(() => {
      // já visível na primeira pintura: não anima, evita flash
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

      el.classList.add('pa-armed');
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('pa-in');
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: '0px 0px -12% 0px' },
      );
      observer.observe(el);
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, []);

  return ref;
}

/** Rotação BUILD → DELIVER → OPERATE. Pausa quando o usuário aponta uma camada. */
export function useLayerCycle(count = 3, interval = 3000) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % count);
    }, interval);
    return () => window.clearInterval(id);
  }, [count, interval]);

  return {
    index,
    pick: (i: number) => {
      paused.current = true;
      setIndex(i);
    },
  };
}
