import { useEffect, useState, type ReactNode } from 'react';
import type { Lang } from '../data/content';
import { LanguageContext } from '../hooks/useLanguage';

/* O index.html já resolve ?lang= e o valor salvo em <html lang> antes da
   primeira pintura; o estado inicial parte daí para não piscar em inglês. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    document.documentElement.lang === 'en' ? 'en' : 'pt',
  );

  useEffect(() => {
    window.localStorage.setItem('pa-lang', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, toggle: () => setLang((l) => (l === 'pt' ? 'en' : 'pt')) }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
