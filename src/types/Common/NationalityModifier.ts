export const nationalityArray = ['all', 'TW', 'HK', 'MY'] as const;
export type NationalityModifier = (typeof nationalityArray)[number];
