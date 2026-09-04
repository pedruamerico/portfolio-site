import { createContext, useContext } from 'react';
import type { Lang } from '../data/content';

export type LanguageContextValue = { lang: Lang; toggle: () => void };

export const LanguageContext = createContext<LanguageContextValue>({ lang: 'pt', toggle: () => {} });

export const useLanguage = () => useContext(LanguageContext);
