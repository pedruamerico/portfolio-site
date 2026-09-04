/* Ícones animados em SVG. Sem dependência externa: as animações são keyframes
   declaradas em index.css (paScan, paPulse, paBlink, paNudge, paTravel,
   paDashRun, paSpin, paSpinRev, paBox, paRocket, paFlame) e aplicadas por
   className em Icons.css. Em prefers-reduced-motion o index.css já desliga tudo. */

import type { ReactNode } from 'react';
import './Icons.css';

type Props = { size?: number };

function Svg({ size = 30, children }: Props & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} aria-hidden="true" className="pa-ico">
      {children}
    </svg>
  );
}

export function Landing(p: Props) {
  return (
    <Svg {...p}>
      <rect x="7" y="6" width="26" height="28" stroke="currentColor" strokeWidth={2} fill="none" />
      <rect x="7" y="6" width="26" height="7" fill="currentColor" />
      <rect x="11" y="18" width="18" height="2.5" fill="currentColor" className="pa-ico-scan" />
      <rect x="11" y="26" width="11" height="2.5" fill="currentColor" opacity=".45" />
    </Svg>
  );
}

export function Site(p: Props) {
  return (
    <Svg {...p}>
      <path d="M6 34V16l14-8 14 8v18" stroke="currentColor" strokeWidth={2} fill="none" />
      <rect x="13" y="22" width="5" height="5" fill="currentColor" className="pa-ico-pulse" />
      <rect x="22" y="22" width="5" height="5" fill="currentColor" className="pa-ico-pulse-b" />
      <path d="M4 34h32" stroke="currentColor" strokeWidth={2} fill="none" />
    </Svg>
  );
}

export function Crud(p: Props) {
  return (
    <Svg {...p}>
      <rect x="6" y="8" width="28" height="24" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M6 16h28" stroke="currentColor" strokeWidth={2} fill="none" />
      <rect x="9" y="19" width="22" height="3.5" fill="currentColor" className="pa-ico-pulse" />
      <rect x="9" y="25" width="22" height="3.5" fill="currentColor" className="pa-ico-pulse-b" />
    </Svg>
  );
}

export function Saas(p: Props) {
  return (
    <Svg {...p}>
      <path d="M12 27a6 6 0 010-12 8 8 0 0115-2 6 6 0 011 14z" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M20 31v6M20 37l-3-3M20 37l3-3" stroke="currentColor" strokeWidth={2} fill="none" className="pa-ico-pulse" />
    </Svg>
  );
}

export function Ecom(p: Props) {
  return (
    <Svg {...p}>
      <g className="pa-ico-nudge">
        <path d="M5 8h5l4 16h15l3-11H12" stroke="currentColor" strokeWidth={2} fill="none" />
        <circle cx="16" cy="31" r="2.6" fill="currentColor" />
        <circle cx="27" cy="31" r="2.6" fill="currentColor" />
      </g>
    </Svg>
  );
}

export function Desktop(p: Props) {
  return (
    <Svg {...p}>
      <rect x="5" y="8" width="30" height="20" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M15 34h10M20 28v6" stroke="currentColor" strokeWidth={2} fill="none" />
      <rect x="10" y="14" width="3" height="8" fill="currentColor" className="pa-ico-blink" />
      <rect x="16" y="17" width="12" height="2.5" fill="currentColor" opacity=".5" />
    </Svg>
  );
}

export function Bots(p: Props) {
  return (
    <Svg {...p}>
      <rect x="8" y="14" width="24" height="18" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M20 8v6M14 32v4M26 32v4" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="20" cy="6" r="2.4" fill="currentColor" className="pa-ico-pulse" />
      <rect x="14" y="20" width="4" height="5" fill="currentColor" className="pa-ico-blink-slow" />
      <rect x="22" y="20" width="4" height="5" fill="currentColor" className="pa-ico-blink-slow" />
    </Svg>
  );
}

export function Api(p: Props) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="20" r="5" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="31" cy="20" r="5" stroke="currentColor" strokeWidth={2} fill="none" />
      <path d="M14 20h12" stroke="currentColor" strokeWidth={2} fill="none" strokeDasharray="2 3" />
      <circle cx="15" cy="20" r="2.4" fill="currentColor" className="pa-ico-travel" />
    </Svg>
  );
}

export function Infra(p: Props) {
  return (
    <Svg {...p}>
      <rect x="6" y="7" width="28" height="8" stroke="currentColor" strokeWidth={2} fill="none" />
      <rect x="6" y="18" width="28" height="8" stroke="currentColor" strokeWidth={2} fill="none" />
      <rect x="6" y="29" width="28" height="8" stroke="currentColor" strokeWidth={2} fill="none" />
      <circle cx="11" cy="11" r="1.8" fill="currentColor" className="pa-ico-led" />
      <circle cx="11" cy="22" r="1.8" fill="currentColor" className="pa-ico-led-b" />
      <circle cx="11" cy="33" r="1.8" fill="currentColor" className="pa-ico-led-c" />
    </Svg>
  );
}

/* o traço completo fica estático em opacity .35; só um segmento curto percorre
   por cima — animar o traço inteiro faz o ícone sumir em metade do ciclo */
export function Manut(p: Props) {
  return (
    <Svg {...p}>
      <path d="M4 20h7l4-9 6 18 4-9h11" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="square" opacity=".35" />
      <path d="M4 20h7l4-9 6 18 4-9h11" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeDasharray="9 48" className="pa-ico-dash" />
    </Svg>
  );
}

/* --- camadas Build / Deliver / Operate --- */

export function Rocket(p: Props) {
  return (
    <Svg {...p}>
      <g className="pa-ico-rocket">
        <path d="M20 4c5 4 7.5 9.5 7.5 15.5L24 26h-8l-3.5-6.5C12.5 13.5 15 8 20 4z" stroke="currentColor" strokeWidth={2} fill="none" />
        <circle cx="20" cy="15" r="2.6" fill="currentColor" />
        <path d="M13 21l-4 6h4M27 21l4 6h-4" stroke="currentColor" strokeWidth={2} fill="none" />
        <path d="M17 28l3 8 3-8" stroke="currentColor" strokeWidth={2} fill="none" className="pa-ico-flame" />
      </g>
    </Svg>
  );
}

export function Conveyor(p: Props) {
  return (
    <Svg {...p}>
      <rect x="3" y="27" width="34" height="2.5" fill="currentColor" />
      <circle cx="8" cy="34" r="3" stroke="currentColor" strokeWidth={2} fill="none" className="pa-ico-wheel" />
      <circle cx="20" cy="34" r="3" stroke="currentColor" strokeWidth={2} fill="none" className="pa-ico-wheel" />
      <circle cx="32" cy="34" r="3" stroke="currentColor" strokeWidth={2} fill="none" className="pa-ico-wheel" />
      <rect x="5" y="15" width="9" height="9" stroke="currentColor" strokeWidth={2} fill="none" className="pa-ico-box-a" />
      <rect x="5" y="15" width="9" height="9" stroke="currentColor" strokeWidth={2} fill="none" className="pa-ico-box-b" />
    </Svg>
  );
}

/* dentes são <path> radiais de verdade: stroke-dasharray num círculo grosso
   vira ruído a 30px */
export function Gears(p: Props) {
  return (
    <Svg {...p}>
      <g className="pa-ico-gear-big">
        <circle cx="16" cy="16" r="7.5" stroke="currentColor" strokeWidth={2} fill="none" />
        <circle cx="16" cy="16" r="2.8" fill="currentColor" />
        <path d="M23.5 16.0L26.7 16.0" stroke="currentColor" strokeWidth={3} />
        <path d="M21.3 21.3L23.6 23.6" stroke="currentColor" strokeWidth={3} />
        <path d="M16.0 23.5L16.0 26.7" stroke="currentColor" strokeWidth={3} />
        <path d="M10.7 21.3L8.4 23.6" stroke="currentColor" strokeWidth={3} />
        <path d="M8.5 16.0L5.3 16.0" stroke="currentColor" strokeWidth={3} />
        <path d="M10.7 10.7L8.4 8.4" stroke="currentColor" strokeWidth={3} />
        <path d="M16.0 8.5L16.0 5.3" stroke="currentColor" strokeWidth={3} />
        <path d="M21.3 10.7L23.6 8.4" stroke="currentColor" strokeWidth={3} />
      </g>
      <g className="pa-ico-gear-small">
        <circle cx="29" cy="29" r="4.6" stroke="currentColor" strokeWidth={2} fill="none" />
        <circle cx="29" cy="29" r="1.6" fill="currentColor" />
        <path d="M33.6 29.0L36.0 29.0" stroke="currentColor" strokeWidth={2.4} />
        <path d="M32.3 32.3L33.9 33.9" stroke="currentColor" strokeWidth={2.4} />
        <path d="M29.0 33.6L29.0 36.0" stroke="currentColor" strokeWidth={2.4} />
        <path d="M25.7 32.3L24.1 33.9" stroke="currentColor" strokeWidth={2.4} />
        <path d="M24.4 29.0L22.0 29.0" stroke="currentColor" strokeWidth={2.4} />
        <path d="M25.7 25.7L24.1 24.1" stroke="currentColor" strokeWidth={2.4} />
        <path d="M29.0 24.4L29.0 22.0" stroke="currentColor" strokeWidth={2.4} />
        <path d="M32.3 25.7L33.9 24.1" stroke="currentColor" strokeWidth={2.4} />
      </g>
    </Svg>
  );
}
