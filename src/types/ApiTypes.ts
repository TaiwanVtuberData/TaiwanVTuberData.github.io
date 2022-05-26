export type VTubersModifier = '10' | 'all';

export type TrendingVTubersModifier = '10' | '100';

export type GrowingVTubersModifier = '10' | '100' | 'all';

export type SortOrder = '7-days' | '30-days';

export interface VTubersViewCountChangeModifier {
  sortBy: SortOrder;
  count: '10' | '100' | 'all';
}

export type DebutVTubersModifier = 'next-7-days' | 'recent';

export type GraduateVTubersModifier = 'next-7-days' | 'recent';

export type TrendingVideosModifier = 'all' | 'no-duplicate';
