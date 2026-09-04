import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

const SECTIONS = [
  { href: '#produtos', pt: 'Produtos', en: 'Products' },
  { href: '#atuacao', pt: 'Atuação', en: 'Practice' },
  { href: '#projetos', pt: 'Projetos', en: 'Projects' },
  { href: '#stack', pt: 'Stack', en: 'Stack' },
  { href: '#trajetoria', pt: 'Trajetória', en: 'Path' },
  { href: '#contato', pt: 'Contato', en: 'Contact' },
];

export default function Header() {
  const { lang, toggle: toggleLang } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <header className="pa-header">
      <a href="#top" className="pa-header-brand">Pedro&nbsp;Américo</a>
      <span aria-hidden="true" className="pa-header-dot">●</span>

      <nav aria-label={lang === 'en' ? 'Sections' : 'Seções'} className="pa-header-nav">
        {SECTIONS.map((s) => (
          <a key={s.href} href={s.href}>{s[lang]}</a>
        ))}
      </nav>

      <div className="pa-header-controls">
        <button
          type="button"
          onClick={toggleLang}
          className="pa-header-toggle"
          aria-label={lang === 'en' ? 'Switch to Portuguese' : 'Mudar para inglês'}
        >
          {lang === 'en' ? 'EN / pt' : 'PT / en'}
        </button>
        <button
          type="button"
          onClick={toggleTheme}
          className="pa-header-toggle"
          aria-label={lang === 'en' ? 'Toggle light and dark theme' : 'Alternar tema claro e escuro'}
        >
          {theme === 'dark' ? 'DARK' : 'LIGHT'}
        </button>
      </div>
    </header>
  );
}
