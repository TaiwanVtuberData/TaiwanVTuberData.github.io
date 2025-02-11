export const apiSourceArray: ReadonlyArray<string> = [
  'jsdelivr',
  'statically',
  'github',
] as const;
export type ApiSourceModifier = (typeof apiSourceArray)[number];
