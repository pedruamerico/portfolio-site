import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Loader.css';

const phrases = [
  'Transformando café em código...',
  'Desenvolvendo soluções criativas...',
  'Automatizando tarefas tediosas...',
  'Refatorando ideias inovadoras...',
  'Construindo experiências digitais...',
  'Testando limites da criatividade...',
  'Otimizando cada pixel...',
  'Explorando novas tecnologias...',
  'Debugando o impossível...',
  'Montando portfólio com paixão...',
  'Compilando sonhos...',
  'Renderizando futuro...',
  'Deployando conquistas...'
];


function getNextUniqueIdx(usedIdxs: number[], arrLength: number) {
  const available = [];
  for (let i = 0; i < arrLength; i++) {
    if (!usedIdxs.includes(i)) available.push(i);
  }
  if (available.length === 0) return null;
  const nextIdx = available[Math.floor(Math.random() * available.length)];
  return nextIdx;
}

interface LoaderProps {
  duration?: number;
}


const Loader: React.FC<LoaderProps> = ({ duration = 3000 }) => {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  // Remover estado global de frases usadas
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = null;
    let lastPhraseChange = 0;
    let usedIdxs: number[] = [0];
    const phraseInterval = Math.max(1200, duration / phrases.length);
    function animate(ts: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = ts;
        setProgress(0);
        lastPhraseChange = ts;
      }
      const elapsed = ts - startTimeRef.current;
      let percent = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(percent);
      if (ts - lastPhraseChange > phraseInterval && percent < 100) {
        let nextIdx = getNextUniqueIdx(usedIdxs, phrases.length);
        if (nextIdx === null) {
          usedIdxs = [0];
          setPhraseIdx(0);
        } else {
          usedIdxs.push(nextIdx);
          setPhraseIdx(nextIdx);
        }
        lastPhraseChange = ts;
      }
      if (percent < 100) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [duration, phrases.length]);

  return (
    <div className="loader-overlay">
      <div className="loader-phrase">{phrases[phraseIdx]}</div>
      <div className="loader-circle-container">
        <svg className="loader-circle" width="80" height="80" viewBox="0 0 80 80">
          <circle
            className="loader-circle-bg"
            cx="40" cy="40" r="35"
            stroke="#ddd" strokeWidth="8" fill="none"
          />
          <circle
            className="loader-circle-fg"
            cx="40" cy="40" r="35"
            stroke="#BD00FF" strokeWidth="8" fill="none"
            strokeDasharray={(2 * Math.PI * 35).toFixed(2)}
            strokeDashoffset={((2 * Math.PI * 35) * (1 - Math.max(0, Math.min(progress, 100)) / 100)).toFixed(2)}
            transform="rotate(-90 40 40)"
            style={{transition: 'stroke-dashoffset 0.2s linear'}}
          />
        </svg>
        <div className="loader-percent">{progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
