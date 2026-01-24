import { zh } from './locales/zh';
import { en } from './locales/en';
import { Language, ContentData } from './types';

export const TRANSLATIONS: Record<Language, ContentData> = {
  zh,
  en,
};

export const getTranslation = (lang: Language): ContentData => {
  return TRANSLATIONS[lang] || TRANSLATIONS.zh;
};