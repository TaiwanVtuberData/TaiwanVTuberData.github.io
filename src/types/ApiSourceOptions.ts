export const apiSourceArray: ReadonlyArray<string> = [
  'automatic',
  'jsdelivr',
  'statically',
  'github',
] as const;

export type ApiSourceModifier = (typeof apiSourceArray)[number];
