import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language } from '@/data/types';
import en from '@/data/translations/en.json';
import fr from '@/data/translations/fr.json';

type Dict = typeof en;

const dicts: Record<Language, Dict> = { en, fr: fr as unknown as Dict };

interface LangContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dict;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');
  const t = dicts[lang];
  const value = { lang, setLang, t };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
