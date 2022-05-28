import { GrowthData } from '../Common/GrowthData';
import { BaseYouTubeData } from '../Common/YouTube/BaseYouTubeData';

export interface YouTubeViewCountGrowthData extends BaseYouTubeData {
  readonly totalViewCount: number;
  readonly _7DaysGrowth: GrowthData;
  readonly _30DaysGrowth: GrowthData;
}
