import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

/* Dark é o padrão. O index.html já aplica o tema salvo em <html data-theme>
   antes da primeira pintura; aqui só se lê esse estado e se mantém sincronizado. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('pa-theme', theme);
  }, [theme]);

  return { theme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) };
}
