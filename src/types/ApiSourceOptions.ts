export const apiSourceOptionArray = [
  'automatic',
  'jsdelivr',
  'statically',
  'github',
] as const;

export type ApiSourceOption = (typeof apiSourceOptionArray)[number];
