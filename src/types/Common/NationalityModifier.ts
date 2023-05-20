export const nationalityArray: ReadonlyArray<string> = [
  'all',
  'TW',
  'HK',
  'MY',
] as const;
export type NationalityModifier = (typeof nationalityArray)[number];
