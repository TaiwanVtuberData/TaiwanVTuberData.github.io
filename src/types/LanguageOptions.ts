export type validI18n = 'zh' | 'en';

export interface LanguageOption {
  i18n: validI18n;
  displayText: string;
}

const ChineseOption: LanguageOption = {
  i18n: 'zh',
  displayText: '中文',
} as const;

const EnglishOption: LanguageOption = {
  i18n: 'en',
  displayText: 'English',
} as const;

export const LanguageOptions: Array<LanguageOption> = [
  ChineseOption,
  EnglishOption,
];
