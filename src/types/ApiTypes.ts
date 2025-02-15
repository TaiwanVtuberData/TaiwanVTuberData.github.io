export const apiSourceModifierArray = [
  'jsdelivr',
  'statically',
  'github',
] as const;

export type ApiSourceModifier = (typeof apiSourceModifierArray)[number];

export type VTubersModifier = '10' | 'all';

export type TrendingVTuberSortOrder = 'livestream' | 'video' | 'combined';

export interface TrendingVTubersModifier {
  sortBy: TrendingVTuberSortOrder;
  count: '10' | '100';
}

export type GrowingVTubersModifier = '10' | '100' | 'all';

export type DayRangeSortOrder = '7-days' | '30-days';

export interface VTubersViewCountChangeModifier {
  sortBy: DayRangeSortOrder;
  count: '10' | '100' | 'all';
}

export type DebutVTubersModifier = 'next-7-days' | 'recent';

export type AnniversaryVTubersModifier = 'next-7-days' | 'recent';

export type GraduateVTubersModifier = 'next-7-days' | 'recent';

export type TrendingVideosModifier = 'all' | 'no-duplicate';

export type LivestreamsModifier =
  | 'all'
  | 'all-no-title'
  | 'debut'
  | 'debut-no-title';

export type EstablishTypeModifier = 'established' | 'new';

export interface YearEndGrowingVTubersModifier {
  establishType: EstablishTypeModifier;
  count: '10' | '100' | 'all';
}

export interface YearEndVTubersViewCountChangeModifier {
  establishType: EstablishTypeModifier;
  count: '10' | '100' | 'all';
}
