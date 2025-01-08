import { validI18n } from '../types/LanguageOptions';
import createStore from 'react-superstore';

const defaultLocale: validI18n = 'zh';

export const [useCurrentLocale, setCurrentLocale, getCurrentLocaleState] =
  createStore<validI18n>(defaultLocale);
