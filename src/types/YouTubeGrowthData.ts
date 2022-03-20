import { GrowthData } from './GrowthData';
import { YouTubeData } from './YouTubeData';

export interface YouTubeGrowthData extends YouTubeData {
  readonly _7DaysGrowth: GrowthData;
  readonly _30DaysGrowth: GrowthData;
}
