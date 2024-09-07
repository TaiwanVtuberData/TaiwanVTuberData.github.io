import createStore from "react-superstore";
import { validI18n } from "../types/LanguageOptions";

const defaultLocale: validI18n = "zh";

export const [useCurrentLocale, setCurrentLocale, getCurrentLocaleState] =
  createStore<validI18n>(defaultLocale);
