const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  printWidth: 80,
  tabWidth: 2,
  rangeStart: 0,
  rangeEnd: Infinity,
  // prettier-plugin-sort-imports
  plugins: ['./node_modules/prettier-plugin-sort-imports/dist/index.js'],
  sortingMethod: 'alphabetical',
};

export default config;
