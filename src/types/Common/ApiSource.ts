export const apiSourceArray: ReadonlyArray<string> = [
  "statically",
  "github",
] as const;
export type ApiSourceModifier = (typeof apiSourceArray)[number];
