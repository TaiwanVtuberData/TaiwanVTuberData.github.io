import { GrowthData } from '../Common/GrowthData';

export interface YouTubeViewCountGrowthData {
  readonly id: string;
  readonly totalViewCount: number;
  readonly _7DaysGrowth: GrowthData;
  readonly _30DaysGrowth: GrowthData;
}
