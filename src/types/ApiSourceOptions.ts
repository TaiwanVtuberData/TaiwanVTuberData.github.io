export const apiSourceArray = ['jsdelivr', 'statically', 'github'] as const;

export type ApiSourceModifier = (typeof apiSourceArray)[number];
