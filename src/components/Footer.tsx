import { useLanguage } from '../hooks/useLanguage';
import './Footer.css';

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer className="pa-footer">
      <span>Pedro Américo — {new Date().getFullYear()}</span>
      <span>
        {lang === 'en' ? 'Software from product to production' : 'Software do produto à produção'}
      </span>
    </footer>
  );
}
